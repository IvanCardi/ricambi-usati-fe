"use server";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function register(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}): Promise<ServerActionResponse> {
  try {
    const result = await fetch(`${process.env.BE_BASE_URL}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        info: { firstName: data.firstName, lastName: data.lastName },
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
