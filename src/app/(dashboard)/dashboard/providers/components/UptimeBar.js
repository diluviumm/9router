"use client";

import { useState, useEffect } from "react";

/**
 * UptimeBar — 7 hari ketersediaan per provider (segmen per cek 60 menit).
 * Data: GET /api/availability/history → [{ ts, bad:[providerId], checked }].
 * Segmen: hitam/merah = ada issue utk provider ini, hijau = aman, abu = belum ada data.
 */
const DAY = 24 * 3600;

export default function UptimeBar({ providerId }) {
  const [entries, setEntries] = useState(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/availability/history")
      .then((r) => (r.ok ? r.json() : { entries: [] }))
      .then((d) => {
        // cutoff dihitung di async callback (bukan saat render — react-hooks/purity)
        const cutoff = Math.floor(Date.now() / 1000) - 7 * DAY;
        const win = (d.entries || []).filter((e) => e.ts >= cutoff);
        if (alive) setEntries(win);
      })
      .catch(() => alive && setEntries([]));
    return () => {
      alive = false;
    };
  }, []);

  if (entries === null) {
    return <div className="h-6 w-full animate-pulse rounded bg-surface-2" />;
  }

  // entries sudah difilter 7 hari terakhir di fetch (lihat useEffect)
  const win = entries;

  if (win.length === 0) {
    return (
      <p className="text-xs text-text-muted">
        Collecting history — timer check tiap jam, bar mulai terisi otomatis.
      </p>
    );
  }

  const up = win.filter((e) => !(e.bad || []).includes(providerId)).length;
  const pct = Math.round((up / win.length) * 1000) / 10;

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 text-xs">
        <span className={pct >= 99.5 ? "text-green-500" : pct >= 97 ? "text-yellow-500" : "text-red-500"}>
          {pct}% uptime
        </span>
        <span className="text-text-muted">
          {win.length} checks · 7d
        </span>
      </div>
      <div className="flex h-5 items-end gap-px" title={`${up}/${win.length} checks tanpa issue`}>
        {win.map((e) => {
          const bad = (e.bad || []).includes(providerId);
          return (
            <span
              key={e.ts}
              className={`min-w-0 flex-1 rounded-sm ${bad ? "h-full bg-red-500" : "h-3/4 bg-green-500/80"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
