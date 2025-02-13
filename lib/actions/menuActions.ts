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
    return { success: false, message: "Failed to upload image." };
  }

  revalidatePath("/admin/menu");
  redirect("/admin/menu");
};
