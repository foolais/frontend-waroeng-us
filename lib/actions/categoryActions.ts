"use server";

import { prisma } from "@/lib/prisma";
import { createCategorySchema } from "../zod/categoryZod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

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
    return {
      success: false,
      message: "Category is already taken.",
      error: { name: ["Category is already taken."] },
    };
  }

  const session = await auth();

  try {
    await prisma.category.create({
      data: { name, type, created_by_id: session?.user.id },
    });
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to create category" };
  }

  revalidatePath("/admin/category");
  redirect("/admin/category");
};

export const updateCategory = async (
  id: string,
  prevState: unknown,
  formData: FormData,
) => {
  const form = Object.fromEntries(formData.entries());
  const validatedFields = createCategorySchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name, type } = validatedFields.data;

  const data = await getCategoryById(id);
  if (!data) return { success: false, message: "Category not found" };

  const existingCategory = await prisma.category.findFirst({
    where: { name, type },
  });

  // Validate fields by existing data
  if (existingCategory && existingCategory.name === data.name)
    return {
      success: false,
      message: "Category cannot be the same",
      error: { name: ["Category cannot be the same."] },
    };
  else if (existingCategory) {
    return {
      success: false,
      message: "Category is already taken.",
      error: { name: ["Category is already taken."] },
    };
  }

  const session = await auth();

  try {
    await prisma.category.update({
      data: { name, type, updated_by_id: session?.user.id },
      where: { id },
    });
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to update category" };
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
        created_at: true,
        updated_by: { select: { id: true, name: true } },
        updated_at: true,
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

export const getCategoryById = async (id: string) => {
  try {
    const category = await prisma.category.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        type: true,
        is_active: true,
        created_by: { select: { id: true, name: true } },
        created_at: true,
        updated_by: { select: { id: true, name: true } },
        updated_at: true,
      },
    });

    if (!category) return null;

    return category;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    await prisma.category.delete({ where: { id } });
    revalidatePath("/admin/category");
  } catch (error) {
    console.error("Error deleting category:", error);
    throw new Error("Something went wrong");
  }
};

export const getCategoryByType = async (type: string) => {
  try {
    const categories = await prisma.category.findMany({
      where: { type, is_active: true },
      select: {
        id: true,
        name: true,
      },
    });

    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
