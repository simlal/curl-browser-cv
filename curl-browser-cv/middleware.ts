import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {

  // Prevent infinite redirects by checking if already at different cv routes endpoints
  const url = new URL(request.url);
  if (
    url.pathname.startsWith("/api/") ||
    url.pathname === "/cv.html" ||
    url.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const userAgent = request.headers.get("user-agent") || "";
  const colorTerm = url.searchParams.get("colorTerm") === "true";

  // Detect command-line tools
  const isCommandLine = /curl|wget/i.test(userAgent);

  if (isCommandLine) {
    const apiEndpoint = colorTerm ? "/api/cv_color" : "/api/cv_plain";
    const response = NextResponse.rewrite(new URL(apiEndpoint, request.url));

    if (colorTerm) {
      response.headers.set("TERM", "xterm-256color");
    }

    return response;
  }

  // Default to browser experience
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-client-type", "browser");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
