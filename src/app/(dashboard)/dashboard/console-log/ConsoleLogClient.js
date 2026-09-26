"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Card, Button } from "@/shared/components";
import { CONSOLE_LOG_CONFIG } from "@/shared/constants/config";

const LOG_LEVEL_COLORS = {
  LOG: "text-green-400",
  INFO: "text-blue-400",
  WARN: "text-yellow-400",
  ERROR: "text-red-400",
  DEBUG: "text-purple-400",
};

// Tag pertama = level/source (bukan tag ke-2 — ronde-31: match[1] salah indeks).
function firstTag(line) {
  const match = line.match(/\[(\w+)\]/);
  return match ? match[1] : null;
}

function colorLine(line) {
  const levelTag = firstTag(line);
  const color = LOG_LEVEL_COLORS[levelTag] || "text-green-400";
  return <span className={color}>{line}</span>;
}

export default function ConsoleLogClient() {
  const [logs, setLogs] = useState([]);
  const [connected, setConnected] = useState(false);
  const [query, setQuery] = useState("");
  const [tagFilter, setTagFilter] = useState("all");
  const logRef = useRef(null);

  const handleClear = async () => {
    try {
      await fetch("/api/translator/console-logs", { method: "DELETE" });
      // UI cleared via SSE "clear" event
    } catch (err) {
      console.error("Failed to clear console logs:", err);
    }
  };

  useEffect(() => {
    const es = new EventSource("/api/translator/console-logs/stream");

    es.onopen = () => setConnected(true);

    es.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.type === "init") {
        setLogs(msg.logs.slice(-CONSOLE_LOG_CONFIG.maxLines));
      } else if (msg.type === "line") {
        setLogs((prev) => {
          const next = [...prev, msg.line];
          return next.length > CONSOLE_LOG_CONFIG.maxLines ? next.slice(-CONSOLE_LOG_CONFIG.maxLines) : next;
        });
      } else if (msg.type === "lines") {
        setLogs((prev) => {
          const next = [...prev, ...msg.lines];
          return next.length > CONSOLE_LOG_CONFIG.maxLines ? next.slice(-CONSOLE_LOG_CONFIG.maxLines) : next;
        });
      } else if (msg.type === "clear") {
        setLogs([]);
      }
    };

    es.onerror = () => setConnected(false);

    return () => es.close();
  }, []);

  // Auto-scroll to bottom on new logs
  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logs]);

  // Tag unik utk filter (dari tag pertama tiap baris)
  const tags = useMemo(() => {
    const set = new Set();
    for (const line of logs) {
      const t = firstTag(line);
      if (t) set.add(t);
    }
    return [...set].sort();
  }, [logs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return logs.filter((line) => {
      if (tagFilter !== "all" && firstTag(line) !== tagFilter) return false;
      if (q && !line.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [logs, query, tagFilter]);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(filtered.join("\n"));
    } catch (err) {
      console.error("Failed to copy logs:", err);
    }
  };

  const copyLine = async (line) => {
    try {
      await navigator.clipboard.writeText(line);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="">
      <Card>
        <div className="flex flex-wrap items-center gap-2 px-4 pt-3 pb-2">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search logs…"
            aria-label="Search console logs"
            className="h-8 w-44 rounded-lg border border-black/10 bg-black/[0.02] px-2 text-xs text-text-primary outline-none transition-colors hover:bg-black/5 focus:border-primary dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.07]"
          />
          <select
            value={tagFilter}
            onChange={(e) => setTagFilter(e.target.value)}
            aria-label="Filter console logs by tag"
            className="h-8 rounded-lg border border-black/10 bg-black/[0.02] px-2 text-xs text-text-primary outline-none transition-colors hover:bg-black/5 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <option value="all">All tags</option>
            {tags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <span className="text-[11px] text-text-muted tabular-nums">
            {filtered.length === logs.length
              ? `${logs.length} line${logs.length === 1 ? "" : "s"}`
              : `${filtered.length} / ${logs.length} lines`}
            {connected ? "" : " · reconnecting…"}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <Button size="sm" variant="outline" icon="content_copy" onClick={copyAll} disabled={!filtered.length}>
              Copy shown
            </Button>
            <Button size="sm" variant="outline" icon="delete" onClick={handleClear}>
              Clear
            </Button>
          </div>
        </div>
        <div
          ref={logRef}
          className="bg-black rounded-b-lg p-4 text-xs font-mono min-h-[140px] max-h-[calc(100vh-220px)] overflow-y-auto"
        >
          {logs.length === 0 ? (
            <span className="text-text-muted">No console logs yet.</span>
          ) : filtered.length === 0 ? (
            <span className="text-text-muted">No lines match the current filter.</span>
          ) : (
            <div className="space-y-0.5">
              {filtered.map((line, i) => (
                <div key={i} className="group flex items-start gap-2">
                  <span className="min-w-0 flex-1 break-all">{colorLine(line)}</span>
                  <button
                    type="button"
                    onClick={() => copyLine(line)}
                    title="Copy line"
                    aria-label="Copy log line"
                    className="shrink-0 rounded p-0.5 text-white/0 transition-colors hover:bg-white/10 hover:text-white focus-visible:text-white group-hover:text-white/60"
                  >
                    <span className="material-symbols-outlined text-[13px]">content_copy</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
