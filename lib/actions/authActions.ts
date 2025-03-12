"use server";

import { hashSync } from "bcrypt-ts";
import { LoginSchema, RegisterSchema } from "../zod/authZod";
import { prisma } from "@/lib/prisma";
import { signIn, signOut } from "@/auth";
import { AuthError } from "next-auth";

export const registerCredentials = async (
  prevState: unknown,
  formData: FormData,
) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = RegisterSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return {
      message: "Email is already taken.",
      error: { email: ["Email is already taken."] },
    };
  }

  const payload = {
    name,
    email,
    password: hashedPassword,
    created_by_name: name,
  };

  try {
    await prisma.user.create({
      data: payload,
    });
    return { success: true };
  } catch (error) {
    console.log(error);
  }
};

export const loginCredentials = async (
  prevState: unknown,
  formData: FormData,
) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = LoginSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { email, password } = validatedFields.data;
  const user = await prisma.user.findUnique({ where: { email } });

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo:
        user?.role === "admin" ? "/abc/admin/dashboard" : "/abc/dashboard",
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      console.error(error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid email or password" };
        default:
          return { message: "Authentication failed" };
      }
    }
    throw error;
  }
};

export const logoutCredentials = async () => {
  try {
    await signOut();
  } catch (error) {
    console.log(error);
  }
};
