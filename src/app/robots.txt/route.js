import { headers } from "next/headers";

export async function GET() {
  const h = await headers();
  const host = h.get("host") || "127.0.0.1:20128";
  const proto = h.get("x-forwarded-proto") || "http";
  const base = `${proto}://${host}`;
  const body = `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
