import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { spamCheck } from '../spamCheck';

const resend = new Resend(process.env.RESEND_API_KEY);

/* ── HTML escape ──────────────────────────────────────────────────────────── */
function esc(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ── Confirmation email HTML ──────────────────────────────────────────────── */
function buildEmailHtml(name: string): string {
  const firstName = esc(name.trim()) || 'there';
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Monday Agenda — Contractors COO</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#f1f5f9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0a;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="border-bottom:1px solid #1e2535;padding-bottom:24px;margin-bottom:24px;">
              <p style="margin:0;font-family:monospace;font-size:11px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#3b82f6;">
                CONTRACTORS<span style="color:#f1f5f9;"> COO</span>
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 0;">
              <p style="margin:0 0 8px;font-family:monospace;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">
                Free Resource
              </p>
              <h1 style="margin:0 0 24px;font-size:28px;font-weight:800;line-height:1.1;letter-spacing:-0.02em;color:#f1f5f9;">
                The Monday Agenda
              </h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#94a3b8;">
                Hi ${firstName},
              </p>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#94a3b8;">
                Here&rsquo;s the 8-point weekly leadership session format — formatted and ready to run
                this Monday. The full agenda with timing, protocol rules for each segment, and the
                open-item log template are below.
              </p>

              <!-- CTA button -->
              <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td style="background-color:#1d4ed8;border-radius:4px;">
                    <a href="https://www.contractorscoo.com/monday-agenda"
                       style="display:inline-block;padding:13px 26px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;letter-spacing:-0.01em;">
                      View the Full Monday Agenda →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 12px;font-size:13px;color:#64748b;line-height:1.6;">
                The page includes every agenda item, per-item timing, the 5 session rules that make the
                format hold, and a section on what causes sessions to drift back into meetings. Bookmark it.
                Print it. Run it Monday.
              </p>
            </td>
          </tr>

          <!-- Agenda summary -->
          <tr>
            <td style="background-color:#0f1218;border:1px solid #1e2535;border-radius:6px;padding:24px;">
              <p style="margin:0 0 16px;font-family:monospace;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#64748b;">
                The 8-Point Sequence
              </p>
              <table cellpadding="0" cellspacing="0" width="100%">
                ${[
                  ['01', 'Safety + Compliance Check', '2 min'],
                  ['02', 'KPI Scoreboard Review', '15 min'],
                  ['03', 'Open Items from Last Session', '5 min'],
                  ['04', 'Active Job Review', '15 min'],
                  ['05', 'Office + Admin Update', '5 min'],
                  ['06', 'Escalations + Owner Items', '5 min'],
                  ['07', 'Next-Week Priorities', '5 min'],
                  ['08', 'Open-Item Log Close', '3 min'],
                ].map(([num, title, time]) => `
                <tr>
                  <td style="padding:6px 0;border-bottom:1px solid #1e2535;width:28px;vertical-align:top;">
                    <span style="font-family:monospace;font-size:11px;font-weight:700;color:#3b82f6;">${num}</span>
                  </td>
                  <td style="padding:6px 12px 6px 8px;border-bottom:1px solid #1e2535;vertical-align:top;">
                    <span style="font-size:14px;color:#f1f5f9;font-weight:500;">${title}</span>
                  </td>
                  <td style="padding:6px 0;border-bottom:1px solid #1e2535;text-align:right;vertical-align:top;white-space:nowrap;">
                    <span style="font-family:monospace;font-size:11px;color:#64748b;">${time}</span>
                  </td>
                </tr>`).join('')}
                <tr>
                  <td colspan="2" style="padding-top:12px;">
                    <span style="font-size:13px;font-weight:600;color:#94a3b8;">Total</span>
                  </td>
                  <td style="padding-top:12px;text-align:right;">
                    <span style="font-family:monospace;font-size:12px;font-weight:700;color:#3b82f6;">55 min</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding:32px 0 0;">
              <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#94a3b8;">
                If you run this format for three or four weeks and find the sessions hold well — good.
                If you find that open items keep recycling, the scoreboard keeps arriving late, or the
                format drifts after the first week — that&rsquo;s a signal the surrounding structure
                (ownership matrix, decision threshold, KPI ownership) isn&rsquo;t in place yet.
              </p>
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#94a3b8;">
                That&rsquo;s what the 90-day install builds.
              </p>
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border:1px solid #1e2535;border-radius:4px;">
                    <a href="https://www.contractorscoo.com/offer"
                       style="display:inline-block;padding:11px 22px;font-size:14px;font-weight:600;color:#94a3b8;text-decoration:none;">
                      See the full 90-Day Install →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:40px;border-top:1px solid #1e2535;margin-top:40px;">
              <p style="margin:0 0 4px;font-size:12px;color:#64748b;line-height:1.6;">
                Contractors COO &mdash; A service of The KPS Group
              </p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6;">
                Caddo Mills, TX &nbsp;&middot;&nbsp;
                <a href="https://www.contractorscoo.com" style="color:#64748b;">contractorscoo.com</a>
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

/* ── POST /api/subscribe ──────────────────────────────────────────────────── */
export async function POST(req: NextRequest) {
  let body: { name?: string; email?: string; _hp?: string; _t?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  /* ── Spam gate ─────────────────────────────────────────────────────────── */
  const spam = spamCheck(req, body);
  if (spam === 'rejected') {
    return NextResponse.json({ ok: true }, { status: 200 });
  }
  if (spam) {
    return NextResponse.json({ error: spam }, { status: 429 });
  }

  const email = (body.email ?? '').trim().toLowerCase();
  const name  = (body.name  ?? '').trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 422 });
  }

  /* ── 1. Add to Resend Audience ─────────────────────────────────────────── */
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (audienceId) {
    try {
      await resend.contacts.create({
        audienceId,
        email,
        firstName: name.split(' ')[0] ?? '',
        lastName:  name.split(' ').slice(1).join(' ') ?? '',
        unsubscribed: false,
      });
    } catch (err) {
      // Log but don't fail — still send the email
      console.error('[subscribe] Audience create error:', err);
    }
  }

  /* ── 2. Send confirmation + delivery email ─────────────────────────────── */
  const { error } = await resend.emails.send({
    from:    'The Monday Agenda <sales@thekpsgroup.com>',
    to:      email,
    replyTo: 'sales@thekpsgroup.com',
    subject: 'The Monday Agenda — Your weekly leadership session template',
    html:    buildEmailHtml(name),
  });

  if (error) {
    console.error('[subscribe] Resend send error:', error);
    return NextResponse.json({ error: 'Email delivery failed. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
