/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { getAccessToken } from "@/lib/getAccessToken";
import { getLoggedUser } from "@/lib/getLoggedUser";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function createOrUpadteOrderDraft(
  products: string[],
  orderId?: string
): Promise<ServerActionResponse> {
  try {
    const token = await getAccessToken();

    const headers: HeadersInit = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const result = await fetch(`${process.env.BE_BASE_URL}/orderDrafts`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        products,
        orderId,
      }),
      credentials: "include",
    });

    if (result.status !== 200) {
      const body = await result.json();

      if (body.message === "UnavailableProducts") {
        return {
          status: "error",
          message: "Alcuni prodotti non sono più disponibili",
          data: { unavailableProducts: body.soldProducts },
        };
      }
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
