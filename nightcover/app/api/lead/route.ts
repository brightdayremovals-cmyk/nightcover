import { NextRequest, NextResponse } from "next/server";

// Forwards the pilot request form to Formspree (or any endpoint that accepts
// a POST of form fields and emails them). Set FORMSPREE_ENDPOINT in your
// environment, e.g. https://formspree.io/f/xxxxabcd
//
// If FORMSPREE_ENDPOINT is not set, the submission is logged server-side
// instead, so local development still works without a Formspree account.

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  // Honeypot check, mirrors the client-side check as a second line of defence.
  if (formData.get("company_website")) {
    return NextResponse.json({ ok: true });
  }

  const payload = Object.fromEntries(formData.entries());
  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    console.log("[Nightcover pilot request — no FORMSPREE_ENDPOINT set]", payload);
    return NextResponse.json({ ok: true, note: "logged locally, no endpoint configured" });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Nightcover lead forwarding failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
