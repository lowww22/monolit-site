import { NextResponse } from "next/server";

/** Lightweight probe for Timeweb App Platform healthcheck */
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export function GET() {
  return new NextResponse("ok", {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

export function HEAD() {
  return new NextResponse(null, { status: 200 });
}
