import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';
import { MondayAgendaForm } from './MondayAgendaForm';

export const metadata: Metadata = {
  title: 'The Monday Agenda for Contractor Teams',
  description:
    'Free 8-point weekly leadership template for contractor teams. Ends circular discussions, closes every item with a named owner, and runs in under 60 minutes.',
  alternates: { canonical: 'https://www.contractorscoo.com/monday-agenda' },
  openGraph: {
    title: 'The Monday Agenda — Free Weekly Meeting Template for Contractors',
    description:
      'A fixed weekly leadership session format for contractor teams. Runs in under 60 minutes. Every item closes with a named owner before the session ends.',
    url: 'https://www.contractorscoo.com/monday-agenda',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Monday Agenda for Contractor Teams',
    description: 'Free 8-point weekly leadership template for contractor teams. Ends circular discussions, closes every item with a named owner, and runs in under 60 minutes.',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'The Monday Agenda — Weekly Leadership Meeting for Contractor Teams',
  description:
    'Free 8-point weekly leadership session format for contractor teams. Ends circular discussions, closes every item with a named owner, and runs in under 60 minutes.',
  totalTime: 'PT60M',
  estimatedCost: { '@type': 'MonetaryAmount', currency: 'USD', value: '0' },
  step: [
    {
      '@type': 'HowToStep', position: 1,
      name: 'Safety + Compliance Check',
      text: 'Review near-misses, site incidents, subcontractor compliance gaps, and permit issues from the prior week. One person owns the safety log.',
      timeRequired: 'PT2M',
    },
    {
      '@type': 'HowToStep', position: 2,
      name: 'KPI Scoreboard Review',
      text: 'Every leadership team member reviews their numbers before the session. Review billings vs. target, job margin by lead, labor vs. estimate, AR aging, active pipeline, collections, completion rate, and one owner-defined constraint indicator.',
      timeRequired: 'PT15M',
    },
    {
      '@type': 'HowToStep', position: 3,
      name: 'Open Items from Last Session',
      text: 'Every item from the prior open-item log gets a status in three words or fewer: Done, In Progress (date), or Blocked (reason). Items that are overdue get a new owner or deadline.',
      timeRequired: 'PT5M',
    },
    {
      '@type': 'HowToStep', position: 4,
      name: 'Active Job Review',
      text: 'Each PM or field lead gives a one-sentence status on every active job: on schedule and budget, at risk, or needs resolution today. Only flagged jobs get discussion time.',
      timeRequired: 'PT15M',
    },
    {
      '@type': 'HowToStep', position: 5,
      name: 'Office + Admin Update',
      text: 'Review billing queue status, pending collections, new estimates due, subcontractor invoices requiring approval, and compliance items. The office lead owns this segment.',
      timeRequired: 'PT5M',
    },
    {
      '@type': 'HowToStep', position: 6,
      name: 'Escalations + Owner Items',
      text: 'Only items that exceeded the decision threshold and require owner input. Everything below the threshold was resolved at the field or office level before the session.',
      timeRequired: 'PT5M',
    },
    {
      '@type': 'HowToStep', position: 7,
      name: 'Next-Week Priorities',
      text: 'Each leadership team member states 1–2 specific, completable commitments for the coming week with a name and date attached. No vague intent statements.',
      timeRequired: 'PT5M',
    },
    {
      '@type': 'HowToStep', position: 8,
      name: 'Open-Item Log Close',
      text: 'The facilitator reads back every new item added during the session. Each item must have a named owner and a specific completion date before the session ends.',
      timeRequired: 'PT3M',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Monday Agenda', item: 'https://www.contractorscoo.com/monday-agenda' },
  ],
};

/* ── Agenda items ─────────────────────────── */
const agendaItems = [
  {
    num: '01',
    title: 'Safety + Compliance Check',
    time: '2 min',
    body: 'Open items from the prior week: any near-misses, site incidents, subcontractor compliance gaps, or permit issues that need tracking. Not a general safety lecture. A 60-second status sweep that keeps liability visible in the leadership layer — not buried in a field report nobody reads.',
    rules: 'One person owns the safety log. If nothing new, move in 30 seconds.',
  },
  {
    num: '02',
    title: 'KPI Scoreboard Review',
    time: '15 min',
    body: 'The scoreboard goes up first. Every leadership team member reviews their numbers before the session starts — not during it. The eight metrics reviewed every week: billings vs. target, job margin by lead, labor vs. estimate by job, AR aging (30/60/90 days), active pipeline value, collections due, completion rate vs. schedule, and one owner-defined constraint indicator.',
    rules: 'No scoreboard, no session. If the numbers aren\'t ready, the person who owns them explains why — one time.',
  },
  {
    num: '03',
    title: 'Open Items from Last Session',
    time: '5 min',
    body: 'Every item from the prior session\'s open-item log gets a status in three words or fewer: Done, In Progress (date), or Blocked (reason). Items that were due and aren\'t done get a new owner or a new deadline — never another week of ambiguity. This is the closed-loop discipline that makes the system hold.',
    rules: 'No re-discussion. Status only. New owner assigned if original hasn\'t delivered.',
  },
  {
    num: '04',
    title: 'Active Job Review',
    time: '15 min',
    body: 'Each PM or field lead gives a one-sentence status on every active job: on schedule and on budget, at risk (one reason), or needs resolution today. Jobs that need discussion get flagged — only flagged jobs get airtime. The goal is awareness, not a full project debrief. Most jobs should take 20 seconds.',
    rules: 'Field lead runs this segment. Owner does not narrate jobs he isn\'t running.',
  },
  {
    num: '05',
    title: 'Office + Admin Update',
    time: '5 min',
    body: 'Billing queue status, pending collections (30+ days), new estimates due and who owns them, subcontractor invoices requiring approval, and any compliance or licensing items. This is the bridge between field activity and financial reality. The office lead owns this segment completely.',
    rules: 'Office lead owns this segment. Field does not interject unless asked.',
  },
  {
    num: '06',
    title: 'Escalations + Owner Items',
    time: '5 min',
    body: 'Items that exceeded the decision threshold and require owner input. These are the only items that reach the owner in the session — everything below the threshold was resolved at the field or office level before Monday. If more than 2–3 items appear here consistently, the threshold is set too low.',
    rules: 'If it could have been resolved below the threshold, it goes back down — even retroactively.',
  },
  {
    num: '07',
    title: 'Next-Week Priorities',
    time: '5 min',
    body: 'Each leadership team member states 1–2 specific, completable commitments for the coming week. Named. Dated. In front of the group. No vague intent statements ("I\'ll follow up on that"). Every commitment is specific enough that at next Monday\'s open-item review, the outcome is verifiable in under five seconds.',
    rules: 'One person facilitates. No item enters the log without a name and a date.',
  },
  {
    num: '08',
    title: 'Open-Item Log Close',
    time: '3 min',
    body: 'Before the session ends, the facilitator reads back every new item added to the open-item log during the session. Each item must have a named owner and a specific completion date. No item leaves the session unassigned. This is the moment that separates meetings that produce action from meetings that produce minutes.',
    rules: 'Session does not close until every new item has a named owner and a deadline.',
  },
];

/* ── Session rules ────────────────────────── */
const sessionRules = [
  {
    num: '01',
    rule: 'Same time every Monday.',
    detail: 'Not when it\'s convenient. Not when everyone can make it. Every Monday. Field leads schedule around the session — the session doesn\'t schedule around the field.',
  },
  {
    num: '02',
    rule: 'Scoreboard first.',
    detail: 'The session doesn\'t open with updates. It opens with numbers. Whatever the scoreboard says sets the direction of every other agenda item that follows.',
  },
  {
    num: '03',
    rule: 'Every item gets an owner and a deadline.',
    detail: 'If a topic gets discussed but no one walks out owning a specific action with a specific date, the discussion didn\'t happen. It just consumed time.',
  },
  {
    num: '04',
    rule: 'Someone holds the format.',
    detail: 'The session has a facilitator — not a chairperson who talks the most, but someone who holds the clock, enforces segment time limits, and redirects tangents. Without facilitation, every session drifts.',
  },
  {
    num: '05',
    rule: 'Nothing unresolved leaves the room.',
    detail: 'The open-item log closes before the session ends. Every new item added during the session exits with a name and a date attached. This is non-negotiable — it\'s the entire point.',
  },
];

export default function MondayAgendaPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />
      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Monday Agenda overview">
        <div className="container-inner">
          <span className="eyebrow">Free Resource · Contractors COO</span>
          <h1 className="text-display" style={{ maxWidth: '720px', marginBottom: '1.5rem' }}>
            The Monday Agenda
          </h1>
          <p className="text-subhead" style={{ maxWidth: '580px', marginBottom: '1.25rem' }}>
            A fixed 8-point weekly leadership session format for contractor teams.
            Runs in under 60 minutes. Every open item closes with a named owner before the session ends.
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted-2)', maxWidth: '520px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            The full agenda is published below — no gate, no signup required.
            Enter your email to get the formatted PDF version you can print and use this Monday.
          </p>

          {/* Email capture */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-line)',
              borderRadius: '0.375rem',
              padding: '1.75rem',
              maxWidth: '600px',
              marginBottom: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-geist-mono, monospace)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-muted-2)',
                marginBottom: '1rem',
              }}
            >
              Get the PDF Version
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              A print-ready PDF with the full agenda, timing guide, session rules, and open-item log template.
              Formatted for weekly use — not a reference document.
            </p>
            <MondayAgendaForm />
          </div>
        </div>
      </section>

      {/* ── THE AGENDA ───────────────────────────── */}
      <section className="section" aria-labelledby="agenda-heading">
        <div className="container-inner">
          <span className="eyebrow">The Format</span>
          <h2 id="agenda-heading" className="text-headline" style={{ maxWidth: '580px', marginBottom: '0.625rem' }}>
            The 8-Point Weekly Leadership Session
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '0.75rem' }}>
            Fixed sequence. Fixed timing. Runs every Monday without variation.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-2)', marginBottom: '3rem', maxWidth: '460px' }}>
            Total runtime: 55 minutes. 5 minutes of buffer before it hits an hour.
            If your sessions run longer than 60 minutes consistently, the agenda is being violated somewhere.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {agendaItems.map((item) => (
              <div
                key={item.num}
                style={{
                  borderTop: '1px solid var(--color-line)',
                  padding: '2rem 0',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.25rem',
                }}
                className="md:grid-cols-[3.5rem_1fr]"
              >
                {/* Number + time */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-geist-mono, monospace)',
                      fontSize: '0.6875rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {item.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-geist-mono, monospace)',
                      fontSize: '0.625rem',
                      fontWeight: 500,
                      letterSpacing: '0.06em',
                      color: 'var(--color-muted-2)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.time}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: 'var(--color-fg)',
                      marginBottom: '0.625rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.7,
                      marginBottom: '1rem',
                    }}
                  >
                    {item.body}
                  </p>
                  <div
                    style={{
                      borderLeft: '2px solid var(--color-accent-dark)',
                      paddingLeft: '1rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily:    'var(--font-geist-mono, monospace)',
                        fontSize:      '0.625rem',
                        fontWeight:    700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color:         'var(--color-accent)',
                        marginBottom:  '0.3rem',
                      }}
                    >
                      Protocol
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                      {item.rules}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-line)' }} />
          </div>
        </div>
      </section>

      {/* ── 5 SESSION RULES ─────────────────────── */}
      <section className="section" aria-labelledby="rules-heading">
        <div className="container-inner">
          <span className="eyebrow">Non-Negotiables</span>
          <h2 id="rules-heading" className="text-headline" style={{ maxWidth: '540px', marginBottom: '0.625rem' }}>
            Five rules that make the format hold.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            The agenda is a sequence. These rules are what make it a system.
            Violate any one of them consistently and the cadence collapses back into a meeting.
          </p>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
            className="md:grid-cols-2 lg:grid-cols-3"
          >
            {sessionRules.map((r) => (
              <div key={r.num} className="card">
                <p
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {r.num}
                </p>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {r.rule}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {r.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS AFTER ──────────────────── */}
      <section className="section" aria-labelledby="after-heading">
        <div className="container-inner">
          <span className="eyebrow">After the Agenda</span>
          <h2 id="after-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '0.625rem' }}>
            The agenda is the entry point. The system is what holds it.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '540px', marginBottom: '2.5rem' }}>
            Most contractor businesses can run this agenda for 2–3 weeks before it starts drifting.
            The sessions get longer. Open items stop getting closed. The scoreboard arrives late or not at all.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
            className="md:grid-cols-3"
          >
            {[
              {
                label: 'Why sessions drift',
                body: 'No one holds the format. The owner opens it up for discussion instead of running the sequence. Emotional topics override the agenda. Without a trained facilitator, every session regresses toward whoever talks loudest.',
              },
              {
                label: 'Why scoreboards go dark',
                body: 'The KPIs aren\'t owned. Everyone assumes someone else is updating them. After two missed weeks, the group stops expecting them — and the whole accountability layer collapses.',
              },
              {
                label: 'Why open items recycle',
                body: 'Items get added but never closed. The log grows until it\'s too long to review. Then it gets abandoned. Without a close protocol at the end of every session, nothing is ever actually decided.',
              },
            ].map((item) => (
              <div key={item.label} style={{ borderTop: '1px solid var(--color-line)', paddingTop: '1.5rem' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-2)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-line)',
              borderRadius: '0.375rem',
              padding: '1.75rem',
              maxWidth: '680px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-geist-mono, monospace)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted-2)',
                marginBottom: '0.875rem',
              }}
            >
              What the 90-Day Install adds
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
              The Monday Agenda is one component of The Operating Foundation — the five-pillar
              system we install into contractor businesses over 90 days. It includes the meeting architecture,
              the ownership matrix that defines who owns each KPI, the decision threshold that stops
              escalations from clogging the session, and the field process set that makes the active job
              review fast and factual. The agenda runs well when the surrounding structure holds it.
              That structure is what the 90-day engagement builds.
            </p>
          </div>
        </div>
      </section>

      {/* ── PDF FORM (REPEAT) ───────────────────── */}
      <section className="section" aria-labelledby="pdf-heading">
        <div className="container-inner">
          <div style={{ maxWidth: '600px' }}>
            <span className="eyebrow">Take It With You</span>
            <h2 id="pdf-heading" className="text-headline" style={{ maxWidth: '480px', marginBottom: '0.625rem' }}>
              Get the formatted PDF version.
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Print-ready. Includes the full agenda sequence, per-item timing, the five session rules,
              and the open-item log template. Formatted to run your first session this Monday.
            </p>
            <MondayAgendaForm />
          </div>
        </div>
      </section>

      {/* ── CTA TO OFFER ─────────────────────────── */}
      <section
        aria-labelledby="agenda-cta-heading"
        style={{ backgroundColor: 'var(--color-accent-deeper)', borderBottom: 'none' }}
      >
        <div className="container-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2
            id="agenda-cta-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '560px',
              marginBottom: '1rem',
            }}
          >
            Ready to build the system around the agenda?
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.6,
              maxWidth: '480px',
              marginBottom: '2.5rem',
            }}
          >
            The agenda is the visible part. The Operating Foundation is what makes it hold —
            ownership, decision standards, the scoreboard, and the field process set.
            We install all five pillars in 90 days.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton label="Book a Discovery Call" source="monday_agenda_cta" />
            <Link href="/offer" className="btn-ghost" style={{ color: 'rgba(255,255,255,0.6)' }}>
              See the full offer →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
