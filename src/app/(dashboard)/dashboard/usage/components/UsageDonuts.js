"use client";

import PropTypes from "prop-types";
import { useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import Card from "@/shared/components/Card";

const TOKEN_COLORS = ["#c8bfff", "#a3d6a8", "#9cb4e8"];
const MODEL_COLORS = ["#c8bfff", "#a3d6a8", "#eec57f", "#ffb4ab", "#9cb4e8", "#ecb8cd"];

const fmt = (n) => {
  const v = n || 0;
  if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`;
  if (v >= 1000) return `${(v / 1000).toFixed(1)}K`;
  return String(v);
};

const centerLabel = (total, caption) => (
  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
    <span className="text-lg font-bold text-text-main">{fmt(total)}</span>
    <span className="text-[10px] uppercase tracking-[0.14em] text-text-subtle">{caption}</span>
  </div>
);

function Donut({ data, colors, caption, total }) {
  const shown = data.filter((d) => d.value > 0);
  if (!shown.length) {
    return (
      <div className="flex min-h-[170px] flex-1 flex-col items-center justify-center gap-1 rounded-xl border border-border-subtle bg-bg/40">
        <span className="text-2xl">◍</span>
        <span className="text-xs text-text-subtle">belum ada data</span>
      </div>
    );
  }
  return (
    <div className="relative flex min-h-[170px] flex-1 items-center justify-center rounded-xl border border-border-subtle bg-bg/40 py-2">
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie data={shown} dataKey="value" nameKey="name" innerRadius={44} outerRadius={64} paddingAngle={3} strokeWidth={0}>
            {shown.map((d, i) => (
              <Cell key={d.name} fill={colors[i % colors.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ background: "#201f25", border: "1px solid #48454f", borderRadius: 10, fontSize: 12 }}
            itemStyle={{ color: "#e5e1e9" }}
            formatter={(v, n) => [fmt(v), n]}
          />
          <Legend wrapperStyle={{ fontSize: 11, color: "#c9c5d0" }} iconSize={8} />
        </PieChart>
      </ResponsiveContainer>
      {centerLabel(total, caption)}
    </div>
  );
}

Donut.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  caption: PropTypes.string.isRequired,
  total: PropTypes.number,
};

/** Donat visualisasi ronde-26: distribusi token (in/out/cached) + request per model */
export default function UsageDonuts({ stats }) {
  const tokenFlow = useMemo(
    () => [
      { name: "Input", value: stats?.totalPromptTokens || 0 },
      { name: "Output", value: stats?.totalCompletionTokens || 0 },
      { name: "Cached", value: stats?.totalCachedTokens || 0 },
    ],
    [stats]
  );

  const byModel = useMemo(() => {
    const src = stats?.byModel || {};
    const rows = Object.entries(src)
      .map(([key, d]) => ({ name: d.rawModel || key.split(" (")[0], value: (d.promptTokens || 0) + (d.completionTokens || 0) }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 6);
    return rows;
  }, [stats]);

  const totalTokens = (stats?.totalPromptTokens || 0) + (stats?.totalCompletionTokens || 0);
  const totalModelTokens = byModel.reduce((s, d) => s + d.value, 0);

  return (
    <Card padding="sm" className="flex min-w-0 flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px] text-primary">donut_small</span>
        <div>
          <h3 className="text-sm font-semibold text-text-main">Distribusi</h3>
          <p className="text-xs text-text-muted">Aliran token &amp; model teratas</p>
        </div>
      </div>
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
        <Donut data={tokenFlow} colors={TOKEN_COLORS} caption="token" total={totalTokens} />
        <Donut data={byModel} colors={MODEL_COLORS} caption="per model" total={totalModelTokens} />
      </div>
    </Card>
  );
}

UsageDonuts.propTypes = { stats: PropTypes.object };
