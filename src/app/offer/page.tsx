import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'The 90-Day COO Install — Full Offer Details',
  description:
    'Who it\'s for, exact deliverables, what changes inside 90 days, and how pricing works. Fixed-scope fractional COO for contractor teams doing $1M–$10M/year.',
  alternates: { canonical: 'https://www.contractorscoo.com/offer' },
  openGraph: {
    title: 'The 90-Day COO Install — Full Offer Details',
    description:
      'Fixed-scope operational install for contractor teams. Cadence, role clarity, KPI scoreboard, and execution rhythm in 90 days.',
    url: 'https://www.contractorscoo.com/offer',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional COO — 90-Day Operational Install',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A 90-day fixed-scope operational install. Deliverables include operating cadence design, role ownership framework, KPI scoreboard, decision-to-execution system, process documentation, and 90 days of leadership coaching.',
  offers: {
    '@type': 'Offer',
    description: 'Fixed-scope 90-day engagement. Pricing discussed on discovery call.',
    availability: 'https://schema.org/InStock',
  },
  url: 'https://www.contractorscoo.com/offer',
};

const deliverables = [
  {
    num: '01',
    title: 'Current-State Audit',
    body: 'A structured review of how your business currently operates: meetings, roles, KPIs, handoffs, and decision paths. Written findings. No verbal walk-aways — you get a document.',
  },
  {
    num: '02',
    title: 'Operating Rhythm Design',
    body: 'A custom-built weekly and monthly meeting cadence with agenda templates, role ownership assignments, and follow-up protocols. Built for your team size, not a generic framework.',
  },
  {
    num: '03',
    title: 'Role Clarity Matrix',
    body: 'A written role ownership document covering every function in your business. Who owns what, what that means operationally, how accountability flows, and what "done" looks like.',
  },
  {
    num: '04',
    title: 'KPI Scoreboard',
    body: 'A simplified scorecard tracking the 8–12 metrics that matter at your stage. Connected to the tools you already use. Designed to be opened every week — not filed and forgotten.',
  },
  {
    num: '05',
    title: 'Decision Filter + Follow-Through Protocol',
    body: 'A lightweight system for how decisions get made, by whom, assigned to whom, and confirmed closed. Eliminates the recycled discussions that eat your leadership sessions.',
  },
  {
    num: '06',
    title: 'Process Documentation Set',
    body: 'SOPs for your 5–10 highest-leverage repeatable operations. Field-ready, not consultant-grade. Written to the level where a new hire can execute, not where a consultant can bill.',
  },
  {
    num: '07',
    title: 'Leadership Coaching — Full 90 Days',
    body: 'Weekly working sessions with your leadership team throughout the install. We don\'t hand off a document and exit. We build alongside you and coach the system into the culture.',
  },
];

const goodFit = [
  'Contractor doing $1M–$10M in annual revenue',
  'Owner-led team of 5–30 field and office staff',
  'Revenue growing faster than operational capacity',
  'Owner is the bottleneck on daily decisions',
  'Meetings happen but produce no clear outputs',
  'Team is capable but lacks a structured operating model',
  'Owner wants a system, not a babysitter',
];

const notFit = [
  'Pre-revenue or below $750K (structure isn\'t the constraint yet)',
  'Looking for strategic advisory without implementation',
  'Not willing to change how leadership meetings run',
  'Expecting results without internal buy-in from the team',
  'Sole proprietor with no leadership layer to install into',
];

const changes = [
  'Your weekly leadership session produces clear outputs with owners and deadlines',
  'Every team member knows what they\'re responsible for — no overlap, no gaps',
  'You have a scoreboard you review every week — not a spreadsheet you avoid',
  'Decisions move to closure instead of recycling through discussion',
  'Key processes are documented well enough to train from',
  'The owner\'s day is materially different — more directive, less operational',
];

const remains = [
  'You own every document, every template, every meeting rhythm',
  'Nothing walks out the door with us when the engagement ends',
  'The system runs inside your team — not dependent on outside support',
  'Optional: monthly operating partner retainer (separate engagement)',
  'Optional: Contractor Job Costing integration for full financial-operational visibility',
];

export default function OfferPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Offer overview">
        <div className="container-inner">
          <span className="eyebrow">The Offer</span>
          <h1 className="text-display" style={{ maxWidth: '700px', marginBottom: '1.5rem' }}>
            The 90-Day COO Install
          </h1>
          <p className="text-subhead" style={{ maxWidth: '580px', marginBottom: '2.5rem' }}>
            A fixed-scope operational engagement. Not ongoing advisory. Not a strategy deck.
            A structured install with defined deliverables, executed in 90 days — and designed to stay after we leave.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────── */}
      <section className="section" aria-labelledby="fit-heading">
        <div className="container-inner">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
            }}
            className="md:grid-cols-2"
          >
            {/* Good fit */}
            <div>
              <span className="eyebrow">Built for</span>
              <h2 id="fit-heading" className="text-headline" style={{ marginBottom: '2rem' }}>
                This is built for operators who know the problem is internal.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {goodFit.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--color-accent)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '0.1rem',
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div
              style={{
                borderTop: '1px solid var(--color-line)',
                paddingTop: '2rem',
              }}
              className="md:border-t-0 md:border-l md:pl-10"
            >
              <span className="eyebrow" style={{ color: 'var(--color-muted-2)' }}>Not a fit</span>
              <h2 className="text-headline" style={{ marginBottom: '2rem' }}>
                We&apos;re direct about who this isn&apos;t for.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {notFit.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--color-muted-2)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '0.1rem',
                      }}
                    >
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ─────────────────────────── */}
      <section className="section" aria-labelledby="deliverables-heading">
        <div className="container-inner">
          <span className="eyebrow">What You Get</span>
          <h2 id="deliverables-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '0.75rem' }}>
            Seven deliverables. No ambiguity.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Every item below is built with your team, not handed over as a document.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {deliverables.map((d) => (
              <div
                key={d.num}
                style={{
                  borderTop: '1px solid var(--color-line)',
                  padding: '1.75rem 0',
                  display: 'flex',
                  gap: '1.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                    paddingTop: '0.2rem',
                    width: '2rem',
                  }}
                >
                  {d.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      color: 'var(--color-fg)',
                      marginBottom: '0.5rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {d.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-line)' }} />
          </div>
        </div>
      </section>

      {/* ── WHAT CHANGES / WHAT REMAINS ─────────── */}
      <section className="section" aria-labelledby="changes-heading">
        <div className="container-inner">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
            }}
            className="md:grid-cols-2"
          >
            {/* What changes */}
            <div>
              <span className="eyebrow">Inside 90 Days</span>
              <h2 id="changes-heading" className="text-headline" style={{ marginBottom: '2rem' }}>
                What changes.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {changes.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '0.375rem',
                        height: '0.375rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                        flexShrink: 0,
                        marginTop: '0.5rem',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What remains */}
            <div
              style={{
                borderTop: '1px solid var(--color-line)',
                paddingTop: '2rem',
              }}
              className="md:border-t-0 md:border-l md:pl-10"
            >
              <span className="eyebrow">After 90 Days</span>
              <h2 className="text-headline" style={{ marginBottom: '2rem' }}>
                What remains.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {remains.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '0.375rem',
                        height: '0.375rem',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent-dark)',
                        flexShrink: 0,
                        marginTop: '0.5rem',
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────── */}
      <section className="section" aria-labelledby="pricing-heading">
        <div className="container-inner">
          <span className="eyebrow">Investment</span>
          <h2 id="pricing-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '0.75rem' }}>
            Priced for operators who are serious about fixing the structure.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '540px', marginBottom: '2.5rem' }}>
            The 90-Day Install is not the lowest-cost option on the market. It is not meant to be.
            It is a premium operational engagement built for businesses at a stage where the cost of
            not having structure is measurably higher than the cost of installing it.
          </p>

          <div className="card" style={{ maxWidth: '520px', marginBottom: '2rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-geist-mono, monospace)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-muted-2)',
                marginBottom: '1rem',
              }}
            >
              How we scope + price
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {[
                'We scope before we price — complexity affects the engagement',
                'Pricing is covered on the discovery call, not published on the site',
                'No retainer until we\'re aligned on scope and expected outcomes',
                'Fixed-scope structure means no scope creep and no ambiguity on cost',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.9375rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <BookingButton label="Start with a Discovery Call" />
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.875rem' }}>
            30 minutes. No obligation. We&apos;ll tell you if it&apos;s not the right fit.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section
        aria-labelledby="offer-cta-heading"
        style={{ backgroundColor: 'var(--color-accent-deeper)', borderBottom: 'none' }}
      >
        <div className="container-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2
            id="offer-cta-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '520px',
              marginBottom: '1rem',
            }}
          >
            Book a call. Get a straight answer.
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.6,
              maxWidth: '440px',
              marginBottom: '2.5rem',
            }}
          >
            We assess your current operating structure on the first call and tell you
            whether the install makes sense — or whether it doesn&apos;t.
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
