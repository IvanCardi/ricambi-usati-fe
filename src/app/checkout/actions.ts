/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { getAccessToken } from "@/lib/getAccessToken";
import { ServerActionResponse } from "@/lib/serverActionResponse";
import { revalidateTag } from "next/cache";



export async function createOrder(
  orderDraftId: string,
  deliveryMethod: string,
  paymentMethod: string
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

    const response = await fetch(`${process.env.BE_BASE_URL}/orders`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        orderDraftId,
        deliveryMethod,
        paymentMethod,
      }),
    });

    if (response.status !== 200) {
      const body = await response.json();

      if (body.message === "UnavailableProducts") {
        return {
          status: "error",
          message: "Alcuni prodotti non sono più disponibili",
          data: { unavailableProducts: body.soldProducts },
        };
      }

      return {
        status: "error",
        message: (await response.json()).message,
      };
    }

    const body = await response.json();

    return {
      status: "ok",
      data: {
        checkoutPaymentUrl: body.checkoutPaymentUrl,
      },
    };
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}

export async function updateOrderDraft(
  orderId: string,
  products: string[],
  info: {
    firstName: string;
    lastName: string;
    streetName: string;
    streetName2?: string | null;
    country: string;
    city?: string | null;
    province?: string | null;
    administrativeArea?: string | null;
    dependentLocality?: string | null;
    postalCode?: string | null;
    email: string;
    details?: string | null;
  }
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
        info,
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

    revalidateTag("order-draft");

    return { status: "ok", data: { ...(await result.json()) } };
  } catch (error) {
    return { status: "error", message: "" };
  }
}
