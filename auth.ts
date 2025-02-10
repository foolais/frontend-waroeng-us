import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/zod/authZod";
import { compareSync } from "bcrypt-ts";
import { type AdapterUser } from "next-auth/adapters";
import { ProtectedRoutes } from "./lib/constant";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user || !user.password) throw new Error("User not found");

        const isMatchedPassword = compareSync(password, user.password);

        if (!isMatchedPassword) throw new Error("Invalid email or password");

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as AdapterUser & { role?: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string | undefined;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtected = ProtectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route),
      );

      // Public Protected Routes
      if (!isLoggedIn && isProtected) {
        return Response.redirect(new URL("/auth", nextUrl));
      }

      // Protected Routes LoggedIn User try to access auth pages
      if (isLoggedIn && nextUrl.pathname.startsWith("/auth")) {
        if (auth?.user.role === "admin")
          return Response.redirect(new URL("/admin/dashboard", nextUrl));
        else if (auth?.user.role === "user")
          return Response.redirect(new URL("/dashboard", nextUrl));
      }

      // Protected Routes User NoN Admin
      if (isLoggedIn && nextUrl.pathname.startsWith("/admin")) {
        if (auth?.user.role !== "admin")
          return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },
  pages: {
    signIn: "/auth",
  },
  secret: process.env.AUTH_SECRET,
});
