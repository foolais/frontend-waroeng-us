"use server";

import { auth } from "@/auth";
import { generateInvitationCode } from "../utils";
import { createStoreSchema } from "../zod/storeZod";
import { prisma } from "../prisma";

export const createStore = async (prevState: unknown, formData: FormData) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = createStoreSchema.safeParse(form);
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name } = validatedFields.data;
  const invitationCode = generateInvitationCode();

  const session = await auth();
  if (!session?.user?.id) return { error: "Unauthorized" };

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
  } finally {
    console.log({ session });
  }
};

export const requestJoinStore = async (code: string) => {
  const session = await auth();

  const payload = {
    user_id: session?.user.id,
    invitation_code: code,
  };

  console.log({ payload });
};
