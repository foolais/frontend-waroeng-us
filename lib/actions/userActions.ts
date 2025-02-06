"use server";
import { CreateUserSchema } from "@/lib/zod/userZod";
import { hashSync } from "bcrypt-ts";
import { put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { iFormUser } from "@/types/types";

export const createUser = async (
  payload: iFormUser,
  prevState: unknown,
  formData: FormData,
) => {
  if (payload && payload.image) {
    formData.append("image", payload.image);
  }

  const form = Object.fromEntries(formData.entries());

  console.log({ form });

  const validatedFields = CreateUserSchema.safeParse(form);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log({ validatedFields });

  const { image, name, gender, address, phone, email, role, password } =
    validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    console.log("Email is already taken.");
    return { message: "Email is already taken." };
  }

  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  }).catch((error) => {
    console.error("Image upload failed", error);
    throw new Error("Failed to upload image.");
  });

  //   insert ke database
  try {
    await prisma.user.create({
      data: {
        image: url,
        name,
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

export const updateUser = async (
  payload: iFormUser,
  prevState: unknown,
  formData: FormData,
) => {
  console.log("update", payload, prevState, formData);
};

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        gender: true,
        email: true,
        role: true,
      },
    });
    return users.map((user, index) => ({
      id: user.id,
      no: index + 1,
      name: user.name ?? "",
      gender: user.gender ?? "male",
      email: user.email ?? "",
      role: user.role ?? "user",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
      omit: {
        password: true,
      },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
