import { object, z } from "zod";

export const createStoreSchema = object({
  name: z
    .string()
    .min(5, "Name must be more than 5 character")
    .max(30, "Name must be less than 30 character"),
});
