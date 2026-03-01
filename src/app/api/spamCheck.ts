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
