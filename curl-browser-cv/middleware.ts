import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // Get the User-Agent to identify whether the request is from a browser, curl, or wget
  const userAgent = requestHeaders.get("user-agent");

  // Prevent infinite redirects by checking if already at different cv routes endpoints
  const url = new URL(request.url);
  if (
    url.pathname === "/cv.txt" ||
    url.pathname === "/cv.html" ||
    url.pathname === "/api/cv_color"
  ) {
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Check if the colorTerm parameter is passed and is true
  const colorTerm = url.searchParams.get("colorTerm") === "true";

  // Serve the plain text CV for curl/wget
  if (userAgent?.includes("curl") || userAgent?.includes("Wget")) {
    let response;

    if (colorTerm) {
      response = NextResponse.rewrite(new URL("/api/cv_color", request.url));
      response.headers.set("TERM", "xterm-256color");
    } else {
      // No colors if for unsupported terminals
      response = NextResponse.rewrite(new URL("/cv.txt", request.url));
    }

    // Set content type to "text/plain" with explicit terminal output support
    response.headers.set("Content-Type", "text/plain; charset=utf-8");
    return response;
  } else {
    // If the request is from a browser, serve the HTML CV
    requestHeaders.set("x-client-type", "browser");

    // Proceed to the normal handling (e.g., serving the HTML)
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
}
