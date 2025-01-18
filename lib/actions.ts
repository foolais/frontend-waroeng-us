"use server";
import { CreateUserSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (prevState: unknown, formData: FormData) => {
  const validatedFields = CreateUserSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    image,
    firstName,
    lastName,
    gender,
    address,
    phone,
    email,
    role,
    password,
  } = validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  //   insert ke database
  try {
    await prisma.user.create({
      data: {
        image: url,
        firstName,
        lastName,
        gender,
        address,
        phone,
        email,
        role,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to create user",
    };
  }

  revalidatePath("/admin/user");
  redirect("/admin/user");
};
