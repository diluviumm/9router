import { NextResponse } from "next/server";
import { readLoginEvents } from "@/lib/auth/auditLog";

// Dilindungi ALWAYS_PROTECTED (/api/auth/audit) — baca dashboardGuard.js
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get("limit")) || 20;
    return NextResponse.json({ events: readLoginEvents(limit) }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read audit log" }, { status: 500 });
  }
}
