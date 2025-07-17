/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}*/

import { auth } from "@/app/_lib/auth";

// this auth function from next-auth which we used to access the current session, also service as a middleware
export const middleware = auth;

// this middleware that does the authorization only runs for /account
export const config = {
  matcher: ["/account"],
};
