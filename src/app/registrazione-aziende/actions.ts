"use server";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function register(data: {
  name: string;
  vat: string;
  email: string;
  sdi: string;
  taxCode: string;
  isSameAddress: boolean;
  billingCity: string;
  billingProvince: string;
  billingStreet: string;
  billingZipCode: string;
  billingNumber: string;
  billingState: string;
  shippingCity?: string;
  shippingProvince?: string;
  shippingStreet?: string;
  shippingZipCode?: string;
  shippingNumber?: string;
  shippingState?: string;
  isAutomotive: boolean;
  password: string;
}): Promise<ServerActionResponse> {
  try {
    const info = {
      name: data.name,
      vat: data.vat,
      taxCode: data.taxCode,
      sdi: data.sdi,
      billingAddress: {
        street: data.billingStreet,
        city: data.billingCity,
        province: data.billingProvince,
        zipCode: data.billingZipCode,
        state: data.billingState,
        number: data.billingNumber,
      },
      shippingAddress: {
        street: data.isSameAddress ? data.billingStreet : data.shippingStreet,
        city: data.isSameAddress ? data.billingCity : data.shippingCity,
        province: data.isSameAddress
          ? data.billingProvince
          : data.shippingProvince,
        zipCode: data.isSameAddress
          ? data.billingZipCode
          : data.shippingZipCode,
        state: data.isSameAddress ? data.billingState : data.shippingState,
        number: data.isSameAddress ? data.billingNumber : data.shippingNumber,
      },
    };
    const result = await fetch(`${process.env.BE_BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        info,
      }),
    });

    if (result.status !== 201) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
