import fs from "node:fs";
import path from "path";
import { NextResponse } from "next/server";
import { getDataDir } from "@/lib/dataDir";

// Otomatis terproteksi guard (deny-by-default utk /api/*)
export async function GET() {
  try {
    const dir = path.join(getDataDir(), "db", "backups");
    const out = { dir, exists: false, snapshots: 0, latest: null, latestSizeMB: 0, totalMB: 0, maker: "meai-db-backup.sh (harian 03:25, retensi 7 hari)" };
    if (!fs.existsSync(dir)) return NextResponse.json(out, { headers: { "Cache-Control": "no-store" } });
    out.exists = true;
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".db") || f.endsWith(".sqlite"));
    let total = 0;
    let latestM = 0;
    let latestName = null;
    for (const f of files) {
      const st = fs.statSync(path.join(dir, f));
      total += st.size;
      if (st.mtimeMs > latestM) { latestM = st.mtimeMs; latestName = f; }
    }
    out.snapshots = files.filter((f) => f.startsWith("snapshot-")).length;
    out.latest = latestName ? { file: latestName, at: new Date(latestM).toISOString() } : null;
    out.latestSizeMB = latestName ? Math.round((fs.statSync(path.join(dir, latestName)).size / 1048576) * 100) / 100 : 0;
    out.totalMB = Math.round((total / 1048576) * 100) / 100;
    return NextResponse.json(out, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    return NextResponse.json({ error: "Failed to read backup status" }, { status: 500 });
  }
}
