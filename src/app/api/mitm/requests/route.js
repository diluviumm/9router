import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { MITM_DIR } from "@/mitm/paths";

// Recent Requests dari capture proxy MITM (ronde-31).
// Auth: dashboardGuard (bukan public, bukan local-only).
const REQUESTS_FILE = path.join(MITM_DIR, "requests.jsonl");

export async function GET(request) {
  const limit = Math.min(200, Math.max(1, Number(request.nextUrl.searchParams.get("limit")) || 50));
  let lines = [];
  try {
    const data = await fs.readFile(REQUESTS_FILE, "utf8");
    lines = data.split("\n").filter(Boolean);
  } catch {
    // file belum ada = belum ada request tercatat
  }
  const tail = lines.slice(-limit);
  const requests = [];
  for (const l of tail) {
    try { requests.push(JSON.parse(l)); } catch { /* skip baris rusak */ }
  }
  requests.reverse(); // terbaru dulu
  return NextResponse.json({ requests, total: lines.length });
}
