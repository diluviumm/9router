import { NextResponse } from "next/server";
import { getApiKeys, createApiKey } from "@/lib/localDb";
import { getConsistentMachineId } from "@/shared/utils/machineId";

export const dynamic = "force-dynamic";

// GET /api/keys - List API keys (masked by default; ?reveal=1 utk nilai penuh — A3-mask)
function maskKey(k) {
  const s = String(k || "");
  if (s.length <= 8) return "****";
  return s.slice(0, 3) + "…" + s.slice(-4);
}

export async function GET(request) {
  try {
    const reveal = request?.nextUrl?.searchParams?.get("reveal") === "1";
    const keys = await getApiKeys();
    const safe = reveal ? keys : keys.map((k) => ({ ...k, key: maskKey(k.key), masked: !reveal }));
    return NextResponse.json({ keys: safe });
  } catch (error) {
    console.log("Error fetching keys:", error);
    return NextResponse.json({ error: "Failed to fetch keys" }, { status: 500 });
  }
}

// POST /api/keys - Create new API key
export async function POST(request) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // Always get machineId from server
    const machineId = await getConsistentMachineId();
    const apiKey = await createApiKey(name, machineId);

    return NextResponse.json({
      key: apiKey.key,
      name: apiKey.name,
      id: apiKey.id,
      machineId: apiKey.machineId,
    }, { status: 201 });
  } catch (error) {
    console.log("Error creating key:", error);
    return NextResponse.json({ error: "Failed to create key" }, { status: 500 });
  }
}
