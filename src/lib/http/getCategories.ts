/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { Category } from "../models/category";

export async function getCategories(): Promise<Category[]> {
  try {
    const checkResult = await fetch(`${process.env.BE_BASE_URL}/categories`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (checkResult.status !== 200) {
      return [];
    }

    const body = await checkResult.json();

    return body;
  } catch (error) {
    return [];
  }
}
