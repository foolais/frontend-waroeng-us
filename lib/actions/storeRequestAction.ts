"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { RequestType } from "@/types/types";

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

export const updateStatusStoreRequest = async (
  user_id: string,
  status: RequestType,
) => {
  try {
    const session = await auth();
    if (!session) return { error: "Unauthorized" };

    if (!user_id) return { error: "Invalid request" };

    // 🚀 update the store request
    await prisma.storeRequest.updateMany({
      where: { user_id, status: { not: status } },
      data: { status: status, updated_by_id: session.user.id },
    });

    return {
      success: true,
      message: `Successfully request updated to ${status}`,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

export const deleteStoreRequest = async (user_id: string) => {
  try {
    const session = await auth();
    if (!session) return { error: "Unauthorized" };

    if (!user_id) return { error: "Invalid request" };

    // 🚀 delete the store request
    await prisma.storeRequest.deleteMany({ where: { user_id } });

    return { success: true, message: "Request deleted successfully" };
  } catch (error) {
    console.error(error);
  }
};
