import fs from "node:fs";
import path from "path";
import { getDataDir } from "@/lib/dataDir";

/**
 * Audit-log login (ronde-31): append-only JSONL di dataDir.
 * Ringan tanpa migration; trim otomatis saat file besar.
 * Kegagalan menulis TIDAK PERNAH menggagalkan login (fire-and-forget aman).
 */
const FILE = () => path.join(getDataDir(), "login-audit.jsonl");
const MAX_LINES = 1000;
const TRIM_AT_BYTES = 400_000;

export function recordLoginEvent({ ip = "", ok, method = "password", detail = "" }) {
  try {
    const f = FILE();
    const line = JSON.stringify({ ts: new Date().toISOString(), ip, ok, method, detail }) + "\n";
    fs.appendFileSync(f, line);
    if (fs.statSync(f).size > TRIM_AT_BYTES) {
      const lines = fs.readFileSync(f, "utf8").split("\n").filter(Boolean);
      fs.writeFileSync(f, lines.slice(-MAX_LINES).join("\n") + "\n");
    }
  } catch {
    /* tak boleh mematikan login */
  }
}

export function readLoginEvents(limit = 20) {
  try {
    const f = FILE();
    if (!fs.existsSync(f)) return [];
    const lines = fs.readFileSync(f, "utf8").split("\n").filter(Boolean);
    return lines
      .slice(-Math.max(1, Math.min(limit, 100)))
      .reverse()
      .map((l) => {
        try { return JSON.parse(l); } catch { return null; }
      })
      .filter(Boolean);
  } catch {
    return [];
  }
}
