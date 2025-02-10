"use server";
import { hashSync } from "bcrypt-ts";
import { LoginSchema, RegisterSchema } from "../zod/authZod";
import { prisma } from "@/lib/prisma";

export const register = async (prevState: unknown, formData: FormData) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = RegisterSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    console.log("Email is already taken.");
    return { message: "Email is already taken." };
  }

  const payload = {
    name,
    email,
    password: hashedPassword,
  };

  console.log(payload);
};

export const login = async (prevState: unknown, formData: FormData) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = LoginSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { email, password } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  const payload = {
    email,
    password: hashedPassword,
  };

  console.log(payload);
};
