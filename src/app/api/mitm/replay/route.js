import { NextResponse } from "next/server";
import dns from "dns/promises";

// Replay: kirim ulang request ter-log dari proxy MITM (ronde-31).
// Body entry dikirim balik dari client (sudah dibaca dari /api/mitm/requests).
// Guard: host harus PUBLIC (anti-SSRF), body tak boleh terpotong, timeout 30s.

function isPrivateIp(ip) {
  if (ip.includes(":")) {
    // IPv6: loopback, link-local, unique-local
    const l = ip.toLowerCase();
    return l === "::1" || l.startsWith("fe80:") || l.startsWith("fc") || l.startsWith("fd") || l === "::";
  }
  const p = ip.split(".").map(Number);
  if (p.length !== 4 || p.some((n) => Number.isNaN(n))) return true;
  if (p[0] === 10) return true;
  if (p[0] === 127) return true;
  if (p[0] === 0) return true;
  if (p[0] === 172 && p[1] >= 16 && p[1] <= 31) return true;
  if (p[0] === 192 && p[1] === 168) return true;
  if (p[0] === 169 && p[1] === 254) return true;
  return false;
}

export async function POST(request) {
  let entry;
  try {
    entry = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const { method, host, url, headers, body, bodyTruncated } = entry || {};
  if (!host || !url || !method) {
    return NextResponse.json({ error: "host, url, method wajib" }, { status: 400 });
  }
  if (bodyTruncated) {
    return NextResponse.json(
      { error: "Request body terpotong saat capture (>64KB) — replay penuh tidak mungkin" },
      { status: 400 }
    );
  }

  // SSRF guard: resolve host, semua IP harus public
  try {
    const addrs = await dns.lookup(host, { all: true });
    if (!addrs.length || addrs.some((a) => isPrivateIp(a.address))) {
      return NextResponse.json({ error: "Host tidak diizinkan (private/loopback)" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Gagal resolve host" }, { status: 400 });
  }

  const target = `https://${host}${url.startsWith("/") ? url : `/${url}`}`;
  const fwdHeaders = { ...headers };
  // biar fetch menghitung sendiri
  delete fwdHeaders.host;
  delete fwdHeaders["content-length"];
  delete fwdHeaders["accept-encoding"];
  delete fwdHeaders["x-request-source"];

  const t0 = Date.now();
  try {
    const r = await fetch(target, {
      method: String(method).toUpperCase(),
      headers: fwdHeaders,
      body: body != null && ["GET", "HEAD"].indexOf(String(method).toUpperCase()) === -1 ? body : undefined,
      signal: AbortSignal.timeout(30000),
      redirect: "manual",
    });
    const buf = Buffer.from(await r.arrayBuffer());
    const ms = Date.now() - t0;
    return NextResponse.json({
      ok: true,
      status: r.status,
      ms,
      contentType: r.headers.get("content-type") || "",
      body: buf.subarray(0, 65536).toString("utf8"),
      bodyBytes: buf.length,
    });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: String(e && e.message ? e.message : e), ms: Date.now() - t0 },
      { status: 502 }
    );
  }
}
