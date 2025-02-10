import { object, string, z } from "zod";

export const RegisterSchema = object({
  name: z
    .string()
    .min(2, "Name must be more than 2 character")
    .max(40, "Name must be less than 40 character"),
  email: z
    .string()
    .min(2, "Email must be more than 1 character")
    .email("Invalid email"),
  password: z
    .string()
    .min(3, "Password must be more than 3 character")
    .max(40, "Password must be less than 40 character"),
  confirmPassword: string()
    .min(3, "Password must be more than 3 character")
    .max(32, "Password must be less than 32 character"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password don't match",
  path: ["confirmPassword"],
});

export const LoginSchema = object({
  email: z
    .string()
    .min(2, "Email must be more than 1 character")
    .email("Invalid email"),
  password: z
    .string()
    .min(3, "Password must be more than 3 character")
    .max(40, "Password must be less than 40 character"),
});
