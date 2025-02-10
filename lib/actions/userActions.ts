"use server";
import { CreateUserSchema, UpdateUserSchema } from "@/lib/zod/userZod";
import { hashSync } from "bcrypt-ts";
import { del, put } from "@vercel/blob";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { iFormUser } from "@/types/types";
import { Gender, Role } from "@prisma/client";

export const createUser = async (
  stateForm: iFormUser,
  prevState: unknown,
  formData: FormData,
) => {
  if (stateForm && stateForm.image && stateForm.image !== null) {
    formData.append("image", stateForm.image);
  }

  const form = Object.fromEntries(formData.entries());

  const validatedFields = CreateUserSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { image, name, gender, address, phone, email, role, password } =
    validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    console.log("Email is already taken.");
    return { message: "Email is already taken." };
  }

  let url: string | undefined;

  if (image && image.size > 0) {
    try {
      const uploadResponse = await put(image.name, image, {
        access: "public",
        multipart: true,
      });
      url = uploadResponse.url;
    } catch (error) {
      console.error("Image upload failed", error);
      throw new Error("Failed to upload image.");
    }
  }

  const payload = {
    image: url ?? null,
    name,
    gender: gender as Gender,
    address,
    phone,
    email,
    role: role as Role,
    password: hashedPassword,
    created_by_name: name,
  };

  //   insert ke database
  try {
    await prisma.user.create({
      data: payload,
    });
  } catch (error) {
    console.log(error);
    return { message: "Failed to create user" };
  }

  revalidatePath("/admin/user");
  redirect("/admin/user");
};

export const updateUser = async (
  payload: iFormUser,
  prevState: unknown,
  formData: FormData,
) => {
  if (payload && payload.image) {
    formData.append("image", payload.image);
  }

  const form = Object.fromEntries(formData.entries());
  const { id } = payload;

  const validatedFields = UpdateUserSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { image, name, gender, address, phone, email, role } =
    validatedFields.data;

  const data = await getUserById(id as string);
  if (!data) return { message: "User not found" };

  let imagePath: string | null = data.image ?? null;

  try {
    if (typeof image === "string") {
      console.log("String");
      imagePath = data.image;
    } else if (image instanceof File && image.size > 0) {
      console.log("File");
      if (data.image) {
        console.log("Attempting to delete old image : ", data.image);
        try {
          await del(data.image);
          console.log("old images deleted");
        } catch (deleteError) {
          console.warn("Failed to delete old image:", deleteError);
        }
      }

      const { url } = await put(image.name, image, {
        access: "public",
        multipart: true,
      });

      imagePath = url;
    }
  } catch (error) {
    console.error("Error processing image:", error);
    throw new Error("Failed to process image upload.");
  }

  console.log(imagePath);

  try {
    await prisma.user.update({
      data: {
        image: imagePath,
        name,
        gender: gender as Gender,
        address,
        phone,
        email,
        role: role as Role,
        // get from sessions
        updated_by_name: name,
      },
      where: { id },
    });
  } catch (error) {
    if (imagePath) {
      try {
        await del(imagePath);
      } catch (deleteError) {
        console.warn("Failed to delete old image:", deleteError);
      }
    }
    console.log(error);
    return { message: "Failed to create user" };
  }

  revalidatePath("/admin/user");
  redirect("/admin/user");
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
        image: true,
      },
    });
    return users.map((user, index) => ({
      id: user.id,
      no: index + 1,
      name: user.name ?? "",
      gender: user.gender ?? "male",
      email: user.email ?? "",
      role: user.role ?? "user",
      image: user.image ?? "",
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) return null;

    const formattedUser = {
      id: user.id,
      name: user.name ?? "",
      gender: user.gender ?? "male",
      address: user.address ?? "",
      phone: user.phone ?? "",
      email: user.email ?? "",
      role: user.role ?? "user",
      image: user.image ?? "",
      password: "",
      confirmPassword: "",
    };

    return formattedUser;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const deleteUser = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } });
    revalidatePath("/admin/user");
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
