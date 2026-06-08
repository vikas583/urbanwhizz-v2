"use server";

import { headers } from "next/headers";
import { site } from "@/lib/site";

export type ContactState = {
  ok: boolean;
  error?: string;
};

// --- Spam protection -------------------------------------------------------
// Minimum time (ms) a genuine human takes to read + fill the form. Anything
// faster is almost certainly a script replaying the action.
const MIN_FILL_MS = 3000;
// Best-effort in-memory rate limit. Note: resets on redeploy and is per-server
// instance, so on serverless it's a speed bump, not a guarantee — pair with the
// honeypot + time-trap below, which don't depend on shared state.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

// ZeptoMail config. The send token is a secret and must live in .env.local.
// Sender domain + DC region are fixed defaults but overridable via env.
const ZEPTO_URL =
  process.env.ZEPTOMAIL_API_URL || "https://api.zeptomail.in/v1.1/email";
// Accept the token whether it's pasted bare or with the "Zoho-enczapikey "
// prefix already attached — we add the prefix ourselves below.
const ZEPTO_TOKEN = process.env.ZEPTOMAIL_TOKEN?.replace(
  /^Zoho-enczapikey\s+/i,
  ""
).trim();
const FROM_ADDRESS = process.env.CONTACT_FROM || "noreply@urbanwhizz.com";
const TO_ADDRESS = process.env.CONTACT_TO || "info@urbanwhizz.com";

// Cloudflare Turnstile. When the secret is set, every submission must carry a
// valid token. When it's unset (e.g. local dev), verification is skipped so the
// form still works.
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function verifyTurnstile(token: string, ip: string) {
  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET as string,
        response: token,
        remoteip: ip,
      }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch (err) {
    console.error("[contact] Turnstile verify failed", err);
    return false;
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendEnquiry(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const interest = String(formData.get("interest") || "").trim();
  const message = String(formData.get("message") || "").trim();

  // Honeypot: a hidden field humans never see. If it's filled, a bot did it.
  // Return a fake success so the bot doesn't retry or learn it was caught.
  const honeypot = String(formData.get("website") || "").trim();
  if (honeypot) {
    console.warn("[contact] blocked: honeypot filled");
    return { ok: true };
  }

  // Time-trap: forms submitted faster than a human could fill them are bots.
  // Missing/invalid timestamps are tolerated (e.g. JS-disabled clients).
  const renderedAt = Number(formData.get("rt"));
  if (renderedAt && Date.now() - renderedAt < MIN_FILL_MS) {
    console.warn("[contact] blocked: submitted too fast");
    return { ok: true };
  }

  // Best-effort per-IP rate limit.
  const hdrs = await headers();
  const ip =
    hdrs.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    hdrs.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return {
      ok: false,
      error: "Too many messages from this connection. Please try again later.",
    };
  }

  // Cloudflare Turnstile — proves the submitter is a real browser/human.
  if (TURNSTILE_SECRET) {
    const token = String(formData.get("cf-turnstile-response") || "");
    if (!token || !(await verifyTurnstile(token, ip))) {
      console.warn("[contact] blocked: Turnstile verification failed");
      return {
        ok: false,
        error: "Please complete the verification challenge and try again.",
      };
    }
  }

  // Server-side validation — a Server Action is reachable via direct POST,
  // so never trust the client's HTML constraints.
  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email and message." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!ZEPTO_TOKEN) {
    console.error("[contact] ZEPTOMAIL_TOKEN is not set");
    return {
      ok: false,
      error: "We couldn't send your message right now. Please email us directly.",
    };
  }

  const htmlbody = `
    <h2>New enquiry from the ${escapeHtml(site.company)} website</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(company) || "—"}</td></tr>
      <tr><td><strong>Interested in</strong></td><td>${escapeHtml(interest) || "—"}</td></tr>
      <tr><td valign="top"><strong>Message</strong></td><td>${escapeHtml(message).replace(/\n/g, "<br>")}</td></tr>
    </table>
  `.trim();

  try {
    const res = await fetch(ZEPTO_URL, {
      method: "POST",
      headers: {
        Authorization: `Zoho-enczapikey ${ZEPTO_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        from: { address: FROM_ADDRESS, name: `${site.company} Website` },
        to: [{ email_address: { address: TO_ADDRESS } }],
        // Lets you hit "Reply" and respond straight to the visitor.
        reply_to: [{ address: email, name }],
        subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
        htmlbody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("[contact] ZeptoMail error", res.status, detail);
      return {
        ok: false,
        error: "Something went wrong sending your message. Please try again.",
      };
    }
  } catch (err) {
    console.error("[contact] ZeptoMail request failed", err);
    return {
      ok: false,
      error: "Something went wrong sending your message. Please try again.",
    };
  }

  return { ok: true };
}
