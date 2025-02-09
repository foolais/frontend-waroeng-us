import { string, z } from "zod";

export const createCategorySchema = z.object({
  name: string()
    .min(2, "Name must be more than 2 character")
    .max(20, "Name must be less than 20 character"),
  type: string(),
});
