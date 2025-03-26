"use server";
import { cookies } from "next/headers";

export async function logout() {
  // Expire access and refresh tokens
  (await cookies()).set({
    name: "access_token",
    value: "",
    path: "/",
    httpOnly: true,
    expires: new Date(0),
  });
  (await cookies()).set({
    name: "refresh_token",
    value: "",
    path: "/",
    httpOnly: true,
    expires: new Date(0),
  });
}
