"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";

export const getStoreRequestById = async (id: string) => {
  try {
    const session = await auth();
    if (!session) return { error: "Unauthorized" };

    if (!id) return { error: "Invalid request id" };

    const store = await prisma.storeRequest.findFirst({
      where: { user_id: id },
    });
    return store;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export const cancelStoreRequest = async (user_id: string) => {
  try {
    const session = await auth();
    if (!session) return { error: "Unauthorized" };

    if (!user_id) return { error: "Invalid request" };

    // 🚀 update the store request
    await prisma.storeRequest.updateMany({
      where: { user_id, status: { not: "canceled" } },
      data: { status: "canceled" },
    });

    return { success: true, message: "Request canceled successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};
