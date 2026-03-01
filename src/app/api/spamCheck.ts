import { NextRequest } from 'next/server';

/* ── In-memory rate limiter ───────────────────────────────────────────────── */
const hits = new Map<string, number[]>();
const WINDOW_MS  = 60_000; // 1 minute
const MAX_PER_WINDOW = 5;  // max submissions per IP per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (timestamps.length >= MAX_PER_WINDOW) return true;
  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}

// Periodically prune stale entries to prevent memory growth
setInterval(() => {
  const now = Date.now();
  for (const [ip, timestamps] of hits) {
    const fresh = timestamps.filter((t) => now - t < WINDOW_MS);
    if (fresh.length === 0) hits.delete(ip);
    else hits.set(ip, fresh);
  }
}, 60_000);

/* ── Spam check ───────────────────────────────────────────────────────────── */
const MIN_ELAPSED_MS = 3_000; // reject if form submitted in under 3 seconds

/**
 * Returns an error string if the request looks like spam, or null if it passes.
 *
 * Checks (in order):
 *  1. Honeypot field — bots fill hidden fields humans can't see
 *  2. Timing — bots submit instantly; real users take ≥3 s
 *  3. Rate limiting — max N requests per IP per minute
 */
export function spamCheck(
  req: NextRequest,
  body: { _hp?: string; _t?: number },
): string | null {
  // 1. Honeypot — should always be empty
  if (body._hp) return 'rejected';

  // 2. Timing — _t is a timestamp (ms) set when the form mounted
  if (typeof body._t === 'number') {
    const elapsed = Date.now() - body._t;
    if (elapsed < MIN_ELAPSED_MS) return 'rejected';
  }

  // 3. Rate limit by IP
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return 'Too many requests. Please wait a moment and try again.';
  }

  return null;
}

/* ── Gibberish detection ──────────────────────────────────────────────────── */

/**
 * Returns true if the text looks like randomly-generated gibberish
 * (e.g. "vAdlcUKVtycZzfSTqYmOXKCg"). Checks for erratic case mixing,
 * long consonant runs, and abnormally low vowel ratios.
 */
export function looksLikeGibberish(text: string): boolean {
  const alpha = text.replace(/[^a-zA-Z]/g, '');
  if (alpha.length < 4) return false;

  // Erratic mid-word case transitions (e.g. "vAdlcUKV")
  // Real names have ≤1 per word (e.g. "McDonald")
  const caseFlips = (alpha.match(/[a-z][A-Z]/g) ?? []).length;
  if (caseFlips >= 3) return true;

  // Long runs of consonants (5+) — extremely rare in real names/words
  if (/[^aeiouAEIOU\s]{5,}/.test(alpha)) return true;

  // Very low vowel ratio — random strings skew consonant-heavy
  const vowels = alpha.replace(/[^aeiouAEIOU]/g, '').length;
  if (alpha.length >= 6 && vowels / alpha.length < 0.15) return true;

  return false;
}

/* ── Cloudflare Turnstile verification ────────────────────────────────────── */
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;
const SITEVERIFY_URL   = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/**
 * Verifies a Turnstile token with Cloudflare. Returns true if valid.
 * Passes gracefully (returns true) when TURNSTILE_SECRET_KEY is not configured
 * so dev/preview environments work without keys.
 */
export async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true; // not configured — skip
  if (!token) return false;           // configured but no token — reject

  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: TURNSTILE_SECRET, response: token }),
    });
    const data = (await res.json()) as { success: boolean };
    return data.success;
  } catch {
    // Network failure — let the submission through rather than block a real user
    return true;
  }
}
