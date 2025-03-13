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
  const session = await auth();
  if (!session) return { message: "You are not logged in." };

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

  const storeId = session?.user?.store_id ?? "";

  try {
    await prisma.category.create({
      data: { name, type, created_by_id: session?.user.id, store_id: storeId },
    });
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to create category" };
  }

  revalidatePath(`/${storeId}/admin/category`);
  redirect(`/${storeId}/admin/category`);
};

export const updateCategory = async (
  id: string,
  prevState: unknown,
  formData: FormData,
) => {
  const session = await auth();
  if (!session) return { message: "You are not logged in." };

  const form = Object.fromEntries(formData.entries());
  const validatedFields = createCategorySchema.safeParse(form);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const storeId = session?.user?.store_id ?? "";
  const { name, type } = validatedFields.data;

  const data = await getCategoryById(id);
  if (!data) return { success: false, message: "Category not found" };

  const categoryData = data as { name: string; type: string };

  const existingCategory = await prisma.category.findFirst({
    where: { name, type, store_id: storeId },
  });

  // Validate fields by existing data
  if (existingCategory && existingCategory.name === categoryData.name)
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

  try {
    await prisma.category.update({
      data: { name, type, updated_by_id: session?.user.id },
      where: { id, store_id: storeId },
    });
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to update category" };
  }

  revalidatePath(`/${storeId}/admin/category`);
  redirect(`/${storeId}/admin/category`);
};

export const getAllCategories = async () => {
  try {
    const session = await auth();
    if (!session) return { message: "You are not logged in." };

    const categories = await prisma.category.findMany({
      where: { store_id: session?.user?.store_id },
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
    const session = await auth();
    if (!session) return { message: "You are not logged in." };

    const category = await prisma.category.findUnique({
      where: { id, store_id: session?.user?.store_id },
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
    const session = await auth();
    if (!session) return { message: "You are not logged in." };

    await prisma.category.delete({
      where: { id, store_id: session?.user?.store_id },
    });

    revalidatePath(`/${session?.user?.store_id}/admin/category`);
  } catch (error) {
    console.error("Error deleting category:", error);
    throw new Error("Something went wrong");
  }
};

export const getCategoryByType = async (type: string) => {
  try {
    const session = await auth();
    if (!session) return { message: "You are not logged in." };

    const categories = await prisma.category.findMany({
      where: { type, is_active: true, store_id: session?.user?.store_id },
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

export const toggleCategoryStatus = async (id: string) => {
  try {
    const session = await auth();
    if (!session) return { message: "You are not logged in." };

    const storeId = session?.user?.store_id;

    const category = await prisma.category.findUnique({ where: { id } });
    if (!category) return null;

    await prisma.category.update({
      where: { id, store_id: storeId },
      data: {
        is_active: !category.is_active,
        updated_by_id: session.user.id,
      },
    });
    revalidatePath(`/${storeId}/admin/category`);
  } catch (error) {
    console.error("Error toggling category availability", error);
    throw new Error("Something went wrong");
  }
};
