import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/zod/authZod";
import { compareSync } from "bcrypt-ts";
import { type AdapterUser } from "next-auth/adapters";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      store_id?: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    role?: string;
    store?: string;
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt", maxAge: 12 * 60 * 60 },
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

        return { ...user, password: undefined };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      if (user) {
        token.id = user.id;
        token.role = (user as AdapterUser & { role?: string }).role;
        token.store_id = (user as AdapterUser & { store_id?: string }).store_id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string | undefined;
        session.user.store_id = token.store_id as string | undefined;
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const storeId = "abc";
      const isHaveStore = !!auth?.user?.store_id;
      const pathnameSegments = nextUrl.pathname.split("/").filter(Boolean);

      const isAdminPage = pathnameSegments[1] === "admin";
      const isDashboardPage = pathnameSegments[1] === "dashboard";
      const isOnboardingPage = nextUrl.pathname.startsWith("/onboarding");
      const isAuthPage = nextUrl.pathname.startsWith("/auth");

      // 🚀 If user is NOT logged in and tries to access a store-based protected route → Redirect to /auth
      if (!isLoggedIn && (isAdminPage || isDashboardPage || isOnboardingPage)) {
        return Response.redirect(new URL("/auth", nextUrl));
      }

      // 🚀 If logged-in user tries to access `/auth`, redirect based on role
      if (isLoggedIn && isAuthPage) {
        if (auth?.user.role === "admin") {
          return Response.redirect(
            new URL(`/${storeId}/admin/dashboard`, nextUrl),
          );
        } else if (auth?.user.role === "user") {
          return Response.redirect(new URL(`/${storeId}/dashboard`, nextUrl));
        }
      }

      // 🚀 If user in Admin Page
      if (isLoggedIn && isAdminPage) {
        // 🚀 If user didnt have STORE redirect to Onboarding Page
        if (!isHaveStore) {
          return Response.redirect(new URL("/onboarding", nextUrl));
        } else if (auth?.user.role !== "admin") {
          // 🚀 If user not admin try to reacth Admin page redirect to dashboard
          return Response.redirect(new URL(`/${storeId}/dashboard`, nextUrl));
        }
      }

      // 🚀 If user in Dashboard Page
      if (isLoggedIn && isDashboardPage) {
        // 🚀 If user didnt have STORE redirect to Onboarding Page
        if (!isHaveStore) {
          return Response.redirect(new URL("/onboarding", nextUrl));
        }
      }

      return true;
    },
  },
  pages: {
    signIn: "/auth",
  },
  secret: process.env.AUTH_SECRET,
});
