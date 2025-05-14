"use server";

import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function checkPaymentStatus(
  orderId: string
): Promise<ServerActionResponse> {
  try {
    const headers: HeadersInit = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    const result = await fetch(
      `${process.env.BE_BASE_URL}/orders/${orderId}/status`,
      {
        method: "GET",
        headers,
        credentials: "include",
      }
    );

    if (result.status !== 200) {
      const body = await result.json();

      return {
        status: "error",
        message: body.message,
      };
    }

    return { status: "ok", data: { ...(await result.json()) } };
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
