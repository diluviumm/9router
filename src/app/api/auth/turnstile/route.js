import { NextResponse } from "next/server";

// Info Turnstile utk login form (sitekey = publik by design; secret TIDAK pernah disini).
// Enabled hanya bila CF_TURNSTILE_SITEKEY + CF_TURNSTILE_SECRET di-set di environment unit.
export async function GET() {
  const sitekey = process.env.CF_TURNSTILE_SITEKEY;
  const enabled = Boolean(sitekey && process.env.CF_TURNSTILE_SECRET);
  return NextResponse.json(
    { enabled, sitekey: enabled ? sitekey : null },
    { headers: { "Cache-Control": "no-store" } },
  );
}
