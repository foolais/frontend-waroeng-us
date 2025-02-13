"use server";

import { iFormMenu } from "@/types/types";
import { CreateMenuSchema } from "../zod/menuZod";
import { put } from "@vercel/blob";
import { auth } from "@/auth";
import { prisma } from "../prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createMenu = async (
  stateForm: iFormMenu,
  prevState: unknown,
  formData: FormData,
) => {
  if (stateForm && stateForm.image && stateForm.image !== null) {
    formData.append("image", stateForm.image);
  }

  const form = Object.fromEntries(formData.entries());

  const validatedFields = CreateMenuSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { image, name, price, category } = validatedFields.data;

  let url: string | undefined;

  const session = await auth();

  if (image && image.size > 0) {
    try {
      const uploadResponse = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      url = uploadResponse.url;
    } catch (error) {
      console.error("Image upload failed", error);
      return { success: false, message: "Failed to upload image." };
    }
  }

  const payload = {
    image: url ?? null,
    name,
    price: +price,
    category_id: category,
    created_by_id: session?.user.id ?? "",
  };

  try {
    await prisma.menu.create({ data: payload });
  } catch (error) {
    console.error(error);
    return { success: false, message: "Something went wrong" };
  }

  revalidatePath("/admin/menu");
  redirect("/admin/menu");
};

export const getAllMenu = async () => {
  try {
    const menus = await prisma.menu.findMany({
      select: {
        id: true,
        image: true,
        name: true,
        price: true,
        category: { select: { id: true, name: true } },
        created_by: { select: { id: true, name: true } },
        created_at: true,
        updated_by: { select: { id: true, name: true } },
        updated_at: true,
        is_available: true,
      },
    });
    const data = menus.map((menu, index) => ({
      no: index + 1,
      ...menu,
      price: menu.price.toString(),
    }));
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMenuById = async (id: string) => {
  try {
    const menu = await prisma.menu.findUnique({
      where: { id },
      select: {
        id: true,
        image: true,
        name: true,
        price: true,
        category: { select: { id: true, name: true } },
        created_by: { select: { id: true, name: true } },
        created_at: true,
        updated_by: { select: { id: true, name: true } },
        updated_at: true,
        is_available: true,
      },
    });

    if (!menu) return null;

    return menu;
  } catch (error) {
    console.error(error);
    return null;
  }
};
