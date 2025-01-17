import { object, string } from "zod";

export const CreateUserSchema = object({
  firstName: string().min(2, "Name must be more than 2 character").max(50),
  lastName: string().min(2, "Name must be more than 2 character").max(50),
  email: string()
    .min(2, "Email must be more than 1 character")
    .email("Invalid email"),
  phone: string().min(2, "Phone must be more than 1 character").max(50),
  address: string().min(2, "Address must be more than 1 character").max(50),
  //   gender
  // birthDat
  password: string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be less than 32 character"),
  confirmPassword: string()
    .min(8, "Password must be more than 8 character")
    .max(32, "Password must be less than 32 character"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password don't match",
  path: ["confirmPassword"],
});
