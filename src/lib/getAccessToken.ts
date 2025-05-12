"use server";
import { cookies } from "next/headers";

export async function getAccessToken() {
  return (await cookies())?.get("access_token")?.value;
}
