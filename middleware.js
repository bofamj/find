import * as jose from "jose";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const bearerToken = req.headers.get("authorization");

  if (!bearerToken) {
    return new NextResponse(JSON.stringify({ errorMessage: "unauthorized" }), {
      status: 401,
    });
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return new NextResponse(JSON.stringify({ errorMessage: "unauthorized" }), {
      status: 401,
    });
  }
  const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(JSON.stringify({ errorMessage: "unauthorized" }), {
      status: 401,
    });
  }
}

export const config = {
  matcher: ["/api/auth/me"],
};
