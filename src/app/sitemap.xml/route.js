import { headers } from "next/headers";

const PAGES = [
  { path: "/", priority: "1.0" },
  { path: "/landing", priority: "0.9" },
  { path: "/login", priority: "0.4" },
];

export async function GET() {
  const h = await headers();
  const host = h.get("host") || "127.0.0.1:20128";
  const proto = h.get("x-forwarded-proto") || "http";
  const base = `${proto}://${host}`;
  const urls = PAGES.map(
    (p) => `  <url>\n    <loc>${base}${p.path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
  ).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
