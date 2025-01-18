import { object, string } from "zod";

export const CreateUserSchema = object({
  firstName: string()
    .min(2, "Name must be more than 2 character")
    .max(40, "Name must be less than 40 character"),
  lastName: string()
    .min(2, "Name must be more than 2 character")
    .max(40, "Name must be less than 40 character"),
  email: string()
    .min(2, "Email must be more than 1 character")
    .email("Invalid email"),
  phone: string()
    .min(11, "Phone must be more than 11 character")
    .max(13, "Phone must be less than 13 character")
    .optional(),
  address: string()
    .min(2, "Address must be more than 1 character")
    .max(50, "Address must be less than 50 character")
    .optional(),
  gender: string().default("male"),
  role: string().default("user"),
  password: string()
    .min(3, "Password must be more than 3 character")
    .max(32, "Password must be less than 32 character"),
  confirmPassword: string()
    .min(3, "Password must be more than 3 character")
    .max(32, "Password must be less than 32 character"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password don't match",
  path: ["confirmPassword"],
});
