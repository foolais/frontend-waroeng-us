import { object, string, z } from "zod";

export const CreateMenuSchema = object({
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only image files are allowed",
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: "Image must be less than 5MB",
    })
    .optional(),
  name: string()
    .min(5, "Name must be more than 5 character")
    .max(20, "Name must be less than 20 character"),
  price: string().min(3, "Price must be more than 3 character"),
  category: string().min(1, "Category must not be empty"),
});
