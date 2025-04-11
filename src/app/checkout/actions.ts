"use server";
import { ServerActionResponse } from "@/lib/serverActionResponse";

export async function getCountryAdrressSchema(
  countryCode: string
): Promise<ServerActionResponse> {
  try {
    const url = `https://www.gstatic.com/chrome/autofill/libaddressinput/chromium-i18n/ssl-address/data/${countryCode}`;

    const result = await fetch(url);

    if (result.status !== 200) {
      return {
        status: "error",
        message: (await result.json()).message,
      };
    }

    return await result.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: unknown) {
    return { status: "error", message: "" };
  }
}
