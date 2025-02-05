"use server";
import { CreateUserSchema } from "@/lib/zod/userZod";
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

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
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

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        gender: true,
        email: true,
        role: true,
      },
    });
    return users.map((user, index) => ({
      id: user.id,
      no: index + 1,
      name: `${user.firstName} ${user.lastName}`,
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
    });
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
