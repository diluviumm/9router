"use client";

import PropTypes from "prop-types";
import { useMemo } from "react";
import Card from "@/shared/components/Card";

const fmt = (n) => new Intl.NumberFormat().format(n || 0);
const fmtCost = (n) => `$${(n || 0).toFixed(4)}`;

/** Sparkline mini (10 titik menit terakhir) — ronde-26 */
function Spark({ series, color }) {
  const { line, area } = useMemo(() => {
    const pts = (series || []).map((v) => (Number.isFinite(v) ? v : 0));
    if (pts.length < 2) return { line: "", area: "" };
    const max = Math.max(...pts);
    const min = Math.min(...pts);
    const flat = max === min; // data datar (mis. 0 traffic) -> garis di tengah agar tetap terlihat
    const range = flat ? 1 : max - min;
    const w = 100;
    const h = 22;
    const yOf = (v) => (flat ? h / 2 : h - ((v - min) / range) * (h - 4) - 2);
    const d = pts
      .map((v, i) => `${i === 0 ? "M" : "L"}${((i / (pts.length - 1)) * w).toFixed(1)},${yOf(v).toFixed(1)}`)
      .join(" ");
    return { line: d, area: d + ` L${w},${h} L0,${h} Z` };
  }, [series]);
  if (!line) return <div className="h-[22px]" aria-hidden />;
  return (
    <svg viewBox="0 0 100 22" preserveAspectRatio="none" className="h-[22px] w-full" aria-hidden>
      <path d={area} fill={color} opacity="0.16" />
      <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function KpiCard({ label, value, colorClass, title, series, caption }) {
  return (
    <Card className="flex min-w-0 flex-col items-center text-center gap-1 px-3 py-3 sm:px-4">
      <span className="text-text-muted text-xs uppercase font-semibold tracking-[0.06em] sm:text-sm">{label}</span>
      <span className={`w-full truncate text-lg font-bold xl:text-xl ${colorClass}`} title={title}>
        {value}
      </span>
      <div className="w-full opacity-80">
        <Spark series={series} color={colorClass.includes("primary") ? "#c8bfff" : colorClass.includes("success") ? "#a3d6a8" : colorClass.includes("info") ? "#9cb4e8" : colorClass.includes("warning") ? "#eec57f" : "#c9c5d0"} />
      </div>
      <span className="text-[10px] text-text-subtle">{caption}</span>
    </Card>
  );
}

KpiCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
  colorClass: PropTypes.string.isRequired,
  title: PropTypes.string,
  series: PropTypes.array,
  caption: PropTypes.string,
};

/** KPI + sparkline live (last10Minutes) — ronde-26 */
export default function OverviewCards({ stats }) {
  const last = stats?.last10Minutes || [];
  const series = {
    req: last.map((d) => d.requests || 0),
    inp: last.map((d) => d.promptTokens || 0),
    out: last.map((d) => d.completionTokens || 0),
    cost: last.map((d) => d.cost || 0),
  };
  const last10Req = series.req.reduce((a, b) => a + b, 0);

  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-4">
      <KpiCard label="Total Requests" value={fmt(stats.totalRequests)} colorClass="text-text-main" title={fmt(stats.totalRequests)} series={series.req} caption={`+${last10Req} dalam 10 menit`} />
      <KpiCard label="Total Input Tokens" value={fmt(stats.totalPromptTokens)} colorClass="text-primary" title={fmt(stats.totalPromptTokens)} series={series.inp} caption="sparkline 10 mnt" />
      <KpiCard label="Cached Tokens" value={fmt(stats.totalCachedTokens)} colorClass="text-info" title={fmt(stats.totalCachedTokens)} series={series.inp} caption="cache hit token" />
      <KpiCard label="Output Tokens" value={fmt(stats.totalCompletionTokens)} colorClass="text-success" title={fmt(stats.totalCompletionTokens)} series={series.out} caption="sparkline 10 mnt" />
      <KpiCard label="Est. Cost" value={`~${fmtCost(stats.totalCost)}`} colorClass="text-warning" title={`~${fmtCost(stats.totalCost)}`} series={series.cost} caption="Estimasi, bukan tagihan" />
    </div>
  );
}

OverviewCards.propTypes = {
  stats: PropTypes.object.isRequired,
};
