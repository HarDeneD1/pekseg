import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/home", request.url));
  }
}
