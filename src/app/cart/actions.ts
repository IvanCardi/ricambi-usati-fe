/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { getAccessToken } from "@/lib/getAccessToken";
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

    const body = await result.json();

    if (result.status !== 200) {
      return {
        status: "error",
        message: body.message,
      };
    }

    return { status: "ok", data: { ...body } };
  } catch (error) {
    return { status: "error", message: "Si è verificato un errore" };
  }
}
