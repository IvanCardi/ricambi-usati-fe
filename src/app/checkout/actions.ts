"use server";

import { ServerActionResponse } from "@/lib/serverActionResponse";
import createMollieClient, { PaymentStatus } from "@mollie/api-client";

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
