"use server"

import { ServerActionResponse } from "../serverActionResponse";

export async function checkProductsAvailability(
  products: string[]
): Promise<ServerActionResponse> {
  const checkResult = await fetch(
    `${process.env.BE_BASE_URL}/carParts/availability?${products
      .map((p) => `products=${p}`)
      .join("&")}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const body = await checkResult.json();

  if (checkResult.status !== 200) {
    return {
      status: "error",
      message: body.message,
    };
  }

  if (body.soldProducts.length > 0) {
    return {
      status: "error",
      message: "Alcuni prodotti non sono più disponibili",
      data: { unavailableProducts: body.soldProducts },
    };
  }

  return {
    status: "ok",
  };
}