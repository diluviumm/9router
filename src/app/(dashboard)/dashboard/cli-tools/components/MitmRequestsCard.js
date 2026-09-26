"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, Button, Badge } from "@/shared/components";

/**
 * Recent Requests + Replay — membaca capture dari proxy MITM
 * (/api/mitm/requests, ditulis src/mitm/server.js pada "finish" tiap request).
 * Replay mengirim ulang request asli persis (host+url+headers+body) lewat
 * /api/mitm/replay dengan guard anti-SSRF & timeout 30s.
 */
function fmtTime(ts) {
  const d = new Date(ts * 1000);
  const p = (n) => String(n).padStart(2, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

function statusClass(status) {
  if (status >= 500) return "text-red-500";
  if (status >= 400) return "text-yellow-500";
  if (status >= 300) return "text-blue-400";
  return "text-green-500";
}

export default function MitmRequestsCard() {
  const [requests, setRequests] = useState([]);
  const [total, setTotal] = useState(0);
  const [expanded, setExpanded] = useState(null); // ts+url key
  const [replay, setReplay] = useState(null); // { key, loading, result }
  const [error, setError] = useState(null);

  const fetchRequests = useCallback(async () => {
    try {
      const res = await fetch("/api/mitm/requests?limit=50");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setRequests(data.requests || []);
      setTotal(data.total || 0);
      setError(null);
    } catch (e) {
      setError(String(e.message || e));
    }
  }, []);

  useEffect(() => {
    // load awal via async IIFE (react-hooks/set-state-in-effect) — interval tetap utk poll
    let alive = true;
    (async () => {
      try {
        const r = await fetch("/api/mitm/requests?limit=40");
        if (!alive || !r.ok) return;
        const d = await r.json();
        setRequests(d.requests || []);
      } catch { /* diam — card menampilkan loading */ }
    })();
    const t = setInterval(fetchRequests, 15000);
    return () => { alive = false; clearInterval(t); };
  }, [fetchRequests]);

  const handleReplay = useCallback(async (entry) => {
    const key = `${entry.ts}-${entry.url}`;
    setReplay({ key, loading: true, result: null });
    try {
      const res = await fetch("/api/mitm/replay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      const data = await res.json();
      setReplay({ key, loading: false, result: data });
    } catch (e) {
      setReplay({ key, loading: false, result: { ok: false, error: String(e.message || e) } });
    }
  }, []);

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px] text-text-muted">history</span>
          <h3 className="text-sm font-semibold text-text-main">Recent Requests</h3>
          <Badge variant="default">{total} captured</Badge>
        </div>
        <Button variant="ghost" size="sm" onClick={fetchRequests}>
          <span className="material-symbols-outlined text-[15px]">refresh</span>
          Refresh
        </Button>
      </div>

      {error && (
        <div className="mb-2 rounded bg-red-500/10 px-2 py-1.5 text-xs text-red-500">{error}</div>
      )}

      {requests.length === 0 ? (
        <p className="py-6 text-center text-xs text-text-muted">
          Belum ada request tercatat — nyalakan MITM Server, lalu panggil API dari tool Anda.
        </p>
      ) : (
        <div className="flex max-h-80 flex-col gap-1 overflow-y-auto">
          {requests.map((r) => {
            const key = `${r.ts}-${r.url}`;
            const isOpen = expanded === key;
            const rp = replay && replay.key === key ? replay : null;
            return (
              <div key={key} className="rounded border border-border bg-surface-2/50">
                <button
                  type="button"
                  className="flex w-full items-center gap-2 px-2 py-1.5 text-left text-xs hover:bg-surface-2"
                  onClick={() => setExpanded(isOpen ? null : key)}
                >
                  <span className="font-mono text-text-muted">{fmtTime(r.ts)}</span>
                  <span className="w-12 font-mono font-semibold text-text-main">{r.method}</span>
                  <span className="min-w-0 flex-1 truncate font-mono text-text-muted" title={r.url}>
                    {r.url}
                  </span>
                  <span className={`font-mono font-semibold ${statusClass(r.status)}`}>{r.status}</span>
                  <span className="w-14 text-right font-mono text-text-muted">{r.ms}ms</span>
                </button>

                {isOpen && (
                  <div className="flex flex-col gap-2 border-t border-border px-3 py-2">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-text-muted">
                      <span>Host: <span className="font-mono text-text-main">{r.host}</span></span>
                      <span>Body: {r.body ? `${r.body.length}B` : "-"}{r.bodyTruncated ? " (terpotong >64KB)" : ""}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        disabled={rp?.loading || r.bodyTruncated}
                        onClick={() => handleReplay(r)}
                      >
                        <span className="material-symbols-outlined text-[15px]">replay</span>
                        {rp?.loading ? "Mengirim…" : "Replay"}
                      </Button>
                      {r.bodyTruncated && (
                        <span className="text-[11px] text-yellow-500">body terpotong — replay dimatikan utk entry ini</span>
                      )}
                    </div>

                    {rp?.result && (
                      <div className="flex flex-col gap-1">
                        {rp.result.ok ? (
                          <>
                            <div className="text-[11px]">
                              <span className={`font-mono font-semibold ${statusClass(rp.result.status)}`}>
                                → {rp.result.status}
                              </span>
                              <span className="text-text-muted"> · {rp.result.ms}ms · {rp.result.contentType || "-"} · {rp.result.bodyBytes}B</span>
                            </div>
                            <pre className="max-h-48 overflow-auto rounded bg-black/30 p-2 text-[10px] leading-relaxed text-text-muted">
                              {rp.result.body || "(empty)"}
                            </pre>
                          </>
                        ) : (
                          <div className="text-[11px] text-red-500">Replay gagal: {rp.result.error}</div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
