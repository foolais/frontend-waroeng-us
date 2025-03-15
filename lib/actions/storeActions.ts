"use server";

import { auth } from "@/auth";
import { generateInvitationCode } from "../utils";
import { createStoreSchema } from "../zod/storeZod";
import { prisma } from "../prisma";

export const createStore = async (prevState: unknown, formData: FormData) => {
  const session = await auth();
  if (!session) return { error: "Unauthorized" };

  const form = Object.fromEntries(formData.entries());
  const validatedFields = createStoreSchema.safeParse(form);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name } = validatedFields.data;
  const invitationCode = generateInvitationCode();
  const userId = session.user.id;

  try {
    const store = await prisma.$transaction(async (prisma) => {
      const newStore = await prisma.store.create({
        data: {
          name,
          invitation_code: invitationCode,
          created_by_id: userId,
        },
      });

      await prisma.user.update({
        where: { id: userId },
        data: { role: "admin", store_id: newStore.id },
      });

      return newStore;
    });

    return { success: true, store };
  } catch (error) {
    console.error(error);
    return { error: "Failed to create store" };
  }
};

export const requestJoinStore = async (code: string) => {
  try {
    const session = await auth();
    if (!session) return { error: "Unauthorized" };

    // 🚀 validation invitation code
    const store = await prisma.store.findUnique({
      where: { invitation_code: code },
    });
    if (!store) throw new Error("Invalid invitation code");

    // 🚀 validation double request
    const existingRequest = await prisma.storeRequest.findFirst({
      where: { store_id: store.id, user_id: session.user.id },
    });
    if (existingRequest) throw new Error("You have already requested to join");

    // 🚀 create store request
    await prisma.storeRequest.create({
      data: {
        store_id: store.id,
        user_id: session.user.id,
        status: "pending",
        created_by_id: session.user.id,
      },
    });

    return { success: true, message: "Request sent successfully" };
  } catch (error) {
    console.log(error);
  }
};

export const getStoreById = async (id: string) => {
  try {
    const store = await prisma.store.findUnique({ where: { id } });
    return store;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
