import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { spamCheck } from '../spamCheck';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO  = 'sales@thekpsgroup.com';
const FROM_ADDR  = 'Contractors COO <sales@thekpsgroup.com>';

/* ── HTML escape — prevents injected markup in notification emails ────── */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ── Notification email HTML ────────────────────────────────────────────── */
function buildNotificationHtml(fields: {
  name:      string;
  company:   string;
  revenue:   string;
  challenge: string;
  email:     string;
  phone:     string;
}): string {
  const revenueLabel: Record<string, string> = {
    'below-750k': 'Below $750K',
    '750k-1m':    '$750K – $1M',
    '1m-3m':      '$1M – $3M',
    '3m-5m':      '$3M – $5M',
    '5m-10m':     '$5M – $10M',
    '10m-plus':   '$10M+',
  };

  const rows = [
    ['Name',       esc(fields.name)],
    ['Company',    esc(fields.company)],
    ['Revenue',    esc(revenueLabel[fields.revenue] ?? fields.revenue)],
    ['Email',      esc(fields.email)],
    ['Phone',      esc(fields.phone) || '—'],
  ];

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>New Contact Form Submission — Contractors COO</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#f1f5f9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <tr>
            <td style="border-bottom:1px solid #1e2535;padding-bottom:20px;margin-bottom:20px;">
              <p style="margin:0;font-family:monospace;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#3b82f6;">
                CONTRACTORS<span style="color:#f1f5f9;"> COO</span>
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 0 20px;">
              <p style="margin:0 0 6px;font-family:monospace;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">
                New Inquiry
              </p>
              <h1 style="margin:0;font-size:22px;font-weight:800;line-height:1.15;letter-spacing:-0.02em;color:#f1f5f9;">
                Contact Form Submission
              </h1>
            </td>
          </tr>

          <tr>
            <td style="background-color:#0f1218;border:1px solid #1e2535;border-radius:6px;padding:20px 24px;">
              <table cellpadding="0" cellspacing="0" width="100%">
                ${rows.map(([label, value]) => `
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #1e2535;width:100px;vertical-align:top;">
                    <span style="font-family:monospace;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#64748b;">${label}</span>
                  </td>
                  <td style="padding:8px 0 8px 16px;border-bottom:1px solid #1e2535;vertical-align:top;">
                    <span style="font-size:14px;color:#f1f5f9;">${value}</span>
                  </td>
                </tr>`).join('')}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 0 0;">
              <p style="margin:0 0 8px;font-family:monospace;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:#64748b;">
                Operational Challenge
              </p>
              <div style="background-color:#0f1218;border:1px solid #1e2535;border-radius:4px;padding:16px 20px;">
                <p style="margin:0;font-size:15px;color:#94a3b8;line-height:1.7;">
                  ${esc(fields.challenge).replace(/\n/g, '<br />')}
                </p>
              </div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 0 0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#1d4ed8;border-radius:4px;">
                    <a href="mailto:${esc(fields.email)}"
                       style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:-0.01em;">
                      Reply to ${esc(fields.name)} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding-top:36px;border-top:1px solid #1e2535;margin-top:36px;">
              <p style="margin:0;font-size:12px;color:#64748b;">
                Contractors COO — A service of The KPS Group &nbsp;·&nbsp; Caddo Mills, TX
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/* ── POST /api/contact ──────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  let body: {
    name?:      string;
    company?:   string;
    revenue?:   string;
    challenge?: string;
    email?:     string;
    phone?:     string;
    _hp?:       string;
    _t?:        number;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  /* ── Spam gate ─────────────────────────────────────────────────────────── */
  const spam = spamCheck(req, body);
  if (spam === 'rejected') {
    // Silent 200 — don't reveal detection to bots
    return NextResponse.json({ ok: true }, { status: 200 });
  }
  if (spam) {
    return NextResponse.json({ error: spam }, { status: 429 });
  }

  // Strip control chars (prevents email header injection in the subject line)
  const sanitize  = (s: string) => s.trim().replace(/[\r\n\t]/g, ' ');
  const name      = sanitize(body.name      ?? '');
  const company   = sanitize(body.company   ?? '');
  const revenue   = (body.revenue   ?? '').trim();
  const challenge = (body.challenge ?? '').trim();
  const email     = (body.email     ?? '').trim().toLowerCase();
  const phone     = sanitize(body.phone     ?? '');

  if (!name || !company || !email || !challenge || !revenue) {
    return NextResponse.json({ error: 'Required fields are missing.' }, { status: 422 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 422 });
  }

  const { error } = await resend.emails.send({
    from:    FROM_ADDR,
    to:      NOTIFY_TO,
    replyTo: email,
    subject: `New inquiry — ${name}, ${company}`,
    html:    buildNotificationHtml({ name, company, revenue, challenge, email, phone }),
  });

  if (error) {
    console.error('[contact] Resend send error:', error);
    return NextResponse.json({ error: 'Message delivery failed. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
