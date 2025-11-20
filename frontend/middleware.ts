import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // TODO: Implement session validation via backend API
  // For now, allow all requests
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};