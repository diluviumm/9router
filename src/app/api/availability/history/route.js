import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import os from "os";

// History ketersediaan per-provider (7 hari) — ditulis kolektor
// meai-availability.sh (timer 60 menit) ke ~/.meai/db/uptime-byprov.json.
// Format entry: { ts, bad: [providerId], checked }.
const HISTORY_FILE = path.join(
  process.env.DATA_DIR || path.join(os.homedir(), ".meai"),
  "db",
  "uptime-byprov.json"
);

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const raw = await fs.readFile(HISTORY_FILE, "utf8");
    const entries = JSON.parse(raw);
    return NextResponse.json({ entries: Array.isArray(entries) ? entries : [], intervalMin: 60 });
  } catch {
    return NextResponse.json({ entries: [], intervalMin: 60 });
  }
}
