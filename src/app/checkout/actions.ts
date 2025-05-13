/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { getAccessToken } from "@/lib/getAccessToken";
import { ServerActionResponse } from "@/lib/serverActionResponse";
import createMollieClient, { PaymentStatus } from "@mollie/api-client";
import { revalidateTag } from "next/cache";

const mollie = createMollieClient({
  apiKey: process.env.MOLLIE_TEST_KEY ?? "Test API key",
});

export async function submitForm(
  data: {
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
    deliveryMethod: string;
    paymentMethod: string;
  },
  itemsIds: string[]
): Promise<ServerActionResponse> {
  try {
    const response = await fetch(`${process.env.BE_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: itemsIds,
        firstName: data.firstName,
        lastName: data.lastName,
        streetName: data.streetName,
        streetName2: data.streetName2 ?? "",
        country: data.country,
        city: data.city ?? "",
        province: data.province ?? "",
        administrativeArea: data.administrativeArea ?? "",
        dependentLocality: data.dependentLocality ?? "",
        postalCode: data.postalCode ?? "",
        email: data.email,
        details: data.details ?? "",
        deliveryMethod: data.deliveryMethod,
        paymentMethod: data.paymentMethod,
      }),
    });

    if (response.status !== 200) {
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
        orderId: body.orderId,
      },
    };
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}

export async function checkPaymentStatus(
  orderId: string
): Promise<PaymentStatus | undefined> {
  try {
    const payments = mollie.payments.iterate();

    const payment = await payments.find(
      (p) => (p.metadata as { orderId?: string }).orderId === orderId
    );

    if (payment) {
      return (await mollie.payments.get(payment.id)).status;
    }

    return undefined;
  } catch (error) {
    console.error("Error retrieving payment:", error);
    return undefined;
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
