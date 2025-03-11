"use server";

import { auth } from "@/auth";
import { generateInvitationCode } from "../utils";
import { createStoreSchema } from "../zod/storeZod";

export const createStore = async (prevState: unknown, formData: FormData) => {
  const form = Object.fromEntries(formData.entries());

  const validatedFields = createStoreSchema.safeParse(form);

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  const { name } = validatedFields.data;

  const invitationCode = generateInvitationCode();

  const session = await auth();

  const payload = {
    name,
    invitation_code: invitationCode,
    created_by: session?.user.id,
  };

  console.log({ payload });
};

export const requestJoinStore = async (code: string) => {
  const session = await auth();

  const payload = {
    user_id: session?.user.id,
    invitation_code: code,
  };

  console.log({ payload });
};
