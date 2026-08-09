import { NextResponse } from "next/server";

export const dynamic = "force-static";

/** Google Search Console HTML-file verification */
export function GET() {
  return new NextResponse(
    "google-site-verification: google53220b585c70e120.html",
    {
      status: 200,
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "cache-control": "public, max-age=0, must-revalidate",
      },
    },
  );
}
