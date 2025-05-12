/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { getLoggedUser } from "@/lib/getLoggedUser";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function createOrUpadteOrderDraft(
  products: string[],
  orderId?: string
): Promise<ServerActionResponse> {
  try {
    const user = await getLoggedUser();

    const result = await fetch(`${process.env.BE_BASE_URL}/orderDrafts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products,
        orderId,
        userId: user?.userId,
      }),
      credentials: "include",
    });

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    return { status: "ok", data: { ...(await result.json()) } };
  } catch (error) {
    return { status: "error", message: "Si è verificato un errore" };
  }
}
