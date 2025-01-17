"use server";
import { CreateUserSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";

export const createUser = async (prevState: unknown, formData: FormData) => {
  const validatedFields = CreateUserSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, address, phone, email, password } =
    validatedFields.data;
  const hashedPassword = hashSync(password, 10);

  //   insert ke database
  try {
    const data = {
      firstName,
      lastName,
      address,
      phone,
      email,
      password: hashedPassword,
    };
    console.log({ data });
    return {};
  } catch (error) {
    console.log(error);
    return {
      message: "Failed to create user",
    };
  }
};
