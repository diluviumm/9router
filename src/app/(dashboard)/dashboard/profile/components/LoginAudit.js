"use client";

import { useState, useEffect } from "react";
import Card from "@/shared/components/Card";

/**
 * Login activity (ronde-31): menampilkan audit log login terakhir
 * dari /api/auth/audit (JSONL append-only, dilindungi ALWAYS_PROTECTED).
 */
export default function LoginAudit() {
  const [events, setEvents] = useState(null); // null = loading

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/auth/audit?limit=12")
        .then((r) => (r.ok ? r.json() : { events: [] }))
        .then((d) => { if (alive) setEvents(d.events || []); })
        .catch(() => { if (alive) setEvents([]); });
    load();
    const t = setInterval(load, 30_000);
    return () => { alive = false; clearInterval(t); };
  }, []);

  const fmt = (ts) => {
    try {
      return new Date(ts).toLocaleString(undefined, {
        month: "short", day: "numeric", hour: "2-digit", minute: "2-digit",
      });
    } catch { return ts; }
  };

  return (
    <Card>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
          <span className="material-symbols-outlined text-[20px]">history</span>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-semibold">Login Activity</h3>
          <p className="text-xs text-text-muted">Kejadian login terakhir (sukses &amp; gagal)</p>
        </div>
      </div>

      {events === null ? (
        <p className="text-sm text-text-muted">Loading…</p>
      ) : events.length === 0 ? (
        <p className="text-sm text-text-muted">Belum ada kejadian login tercatat.</p>
      ) : (
        <div className="flex flex-col divide-y divide-border/50">
          {events.map((e, i) => (
            <div key={`${e.ts}-${i}`} className="flex items-center gap-3 py-2 text-sm">
              <span
                className={`material-symbols-outlined text-[16px] shrink-0 ${e.ok ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
                aria-hidden
              >
                {e.ok ? "check_circle" : "cancel"}
              </span>
              <span className="w-24 shrink-0 text-text-muted tabular-nums">{fmt(e.ts)}</span>
              <span className="flex-1 min-w-0 truncate text-text-main">
                {e.ok ? "Login sukses" : `Gagal — ${e.detail || "invalid"}`}
              </span>
              <span className="shrink-0 text-xs font-mono text-text-muted">{e.ip || "—"}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
