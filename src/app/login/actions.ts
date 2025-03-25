"use server";
import { ServerActionResponse } from "@/lib/serverActionResponse";
import { cookies } from "next/headers";

export async function login(
  email: string,
  password: string
): Promise<ServerActionResponse> {
  try {
    const url = `${process.env.NEXT_PUBLIC_BE_BASE_URL}/login`;

    const result = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include", // Ensures cookies are sent with the request
    });

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    const body = await result.json();

    (await cookies()).set({
      name: "access_token",
      value: body.accessToken ?? "",
      path: "/",
      httpOnly: true,
    });
    (await cookies()).set({
      name: "refresh_token",
      value: body.refreshToken ?? "",
      path: "/",
      httpOnly: true,
    });

    return { status: "ok" };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
