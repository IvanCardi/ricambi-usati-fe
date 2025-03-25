"use server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const ACCESS_SECRET = process.env.ACCESS_SECRET ?? "";

export async function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("access_token")?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (await isAuthenticated(accessToken)) {
    return NextResponse.next();
  } else {
    const refreshToken = req.cookies.get("refresh_token")?.value;

    if (!refreshToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    const accessToken = await refresh(refreshToken);

    if (!accessToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (await isAuthenticated(accessToken)) {
      (await cookies()).set({
        name: "access_token",
        value: accessToken ?? "",
        path: "/",
        httpOnly: true,
      });

      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }
}

async function isAuthenticated(accessToken: string): Promise<boolean> {
  try {
    const secretKey = new TextEncoder().encode(ACCESS_SECRET);
    const { payload } = await jwtVerify(accessToken, secretKey);

    console.log("Verified JWT payload:", payload);

    return true;
  } catch (error) {
    console.error("JWT verification failed:", error);

    return false;
  }
}

async function refresh(refreshToken: string): Promise<string | undefined> {
  try {
    const response = await fetch(`${process.env.BE_BASE_URL}/refresh`, {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `bearer ${refreshToken}`,
      }, // Ensures cookies are sent with the request
    });

    if (!response.ok) {
      return undefined;
    }

    return (await response.json()).accessToken;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return undefined;
  }
}

// Apply middleware to protected routes
export const config = {
  matcher: ["/profilo"], // Protects any route under `/dashboard`
};
