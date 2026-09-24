import { NextResponse } from "next/server";
import { updateSettings } from "@/lib/localDb";

// Reset dashboard password to default by clearing the stored hash.
// Local-only (enforced by dashboardGuard). Never returns the default literal.
export async function POST() {
  return Response.json({ ok: false, disabled: "reset-password & SSO (OIDC/SAML) dimatikan di fork mael — pakai Cloudflare Access" }, { status: 501 });
  try {
    await updateSettings({ password: null });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
