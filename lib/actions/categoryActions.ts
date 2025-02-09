"use server";

import { prisma } from "@/lib/prisma";
import { createCategorySchema } from "../zod/categoryZod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCategory = async (
  prevState: unknown,
  formData: FormData,
) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = createCategorySchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, type } = validatedFields.data;

  const existingCategory = await prisma.category.findFirst({
    where: { name, type },
  });

  if (existingCategory) {
    console.log("Category is already taken.");
    return { message: "Category is already taken." };
  }

  try {
    await prisma.category.create({
      data: { name, type, created_by_id: "cm6xw92to0008tkh8u3no1rmn" },
    });
  } catch (error) {
    console.log(error);
    return { message: "Failed to create category" };
  }

  revalidatePath("/admin/category");
  redirect("/admin/category");
};

export const getAllCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        is_active: true,
        created_by: { select: { id: true, name: true } },
        updated_by: { select: { id: true, name: true } },
      },
    });
    return categories.map((category, index) => ({
      no: index + 1,
      ...category,
    }));
  } catch (error) {
    console.log(error);
  }
};
