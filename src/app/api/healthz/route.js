export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    ok: true,
    service: "meai-mael-stack",
    version: process.env.npm_package_version || "0.5.86",
    uptime_s: Math.round(process.uptime()),
    ts: new Date().toISOString(),
  });
}
