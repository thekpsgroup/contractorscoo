import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'The 90-Day COO Install — What You Get',
  description:
    'Exact deliverables, who it\'s built for, and how the Operating Foundation framework works. Fixed-scope fractional COO for contractor businesses doing $1M–$10M/year.',
  alternates: { canonical: 'https://www.contractorscoo.com/offer' },
  openGraph: {
    title: 'The 90-Day COO Install — What You Get | Contractors COO',
    description:
      'Not advisory. Not a framework license. A contractor-specific operational install: meeting architecture, ownership matrix, KPI scoreboard, decision standards, and field SOPs.',
    url: 'https://www.contractorscoo.com/offer',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional COO — 90-Day Operating Foundation Install',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A 90-day fixed-scope operational install for contractor businesses. Five-pillar Operating Foundation: Meeting Architecture, Ownership Matrix, KPI Scoreboard, Decision Standards, Field Process Set.',
  offers: {
    '@type': 'Offer',
    description: 'Fixed-scope 90-day engagement. Pricing discussed on discovery call.',
    availability: 'https://schema.org/InStock',
  },
  url: 'https://www.contractorscoo.com/offer',
};

/* ── Framework pillars ──────────────────────── */
const pillars = [
  {
    num: '01',
    name: 'Meeting Architecture',
    summary: 'How your business moves week to week',
    detail: 'A structured weekly leadership session with a fixed agenda, a closed-loop follow-up protocol, and clear decision outputs. Field lead, office lead, owner. Runs under an hour. Every item closes or carries forward with a named owner before the session ends.',
  },
  {
    num: '02',
    name: 'Ownership Matrix',
    summary: 'Who owns what in your business',
    detail: 'A written role ownership document covering every function: estimating, field coordination, subcontractor management, purchasing, client communication, billing, and collections. Single owner per function. No overlap. No undefined lanes.',
  },
  {
    num: '03',
    name: 'KPI Scoreboard',
    summary: 'The numbers your business runs on',
    detail: 'Eight contractor-specific metrics reviewed every week — billings vs. target, job margin by lead, labor vs. estimate by job, AR aging (30/60/90), active pipeline value, collections due, completion rate vs. schedule, and one owner-defined constraint indicator.',
  },
  {
    num: '04',
    name: 'Decision Standards',
    summary: 'What gets decided where, and how',
    detail: 'A written threshold filter: what your field lead handles, what your office resolves, what goes to the owner. Paired with a follow-through protocol that tracks every open decision to closure before the next session. No recycled discussions.',
  },
  {
    num: '05',
    name: 'Field Process Set',
    summary: 'How your operation runs on the ground',
    detail: 'SOPs for your five to ten highest-leverage repeatable operations: new job startup, subcontractor coordination, change order process, customer escalation, and end-of-job closeout. Written to train a new hire from — not to satisfy a deliverable checklist.',
  },
];

/* ── Deliverables ──────────────────────────── */
const deliverables = [
  {
    num: '01',
    title: 'Current-State Audit',
    body: 'A structured review of your operating structure: how decisions get made, how jobs get owned between field and office, how your leadership meets, and where the accountability gaps are. Written findings — not verbal notes on a call.',
  },
  {
    num: '02',
    title: 'Operating Foundation Design',
    body: 'A custom-built five-pillar operating framework mapped to your business. Includes meeting cadence with agenda templates, role ownership assignments, scoreboard configuration, decision thresholds, and SOP scope list. Specific to your team size, service lines, and tools.',
  },
  {
    num: '03',
    title: 'Ownership Matrix Document',
    body: 'A written role ownership document covering every function in your business. Who owns what, what that means operationally, how accountability flows between field and office, and what "done" looks like for each function.',
  },
  {
    num: '04',
    title: 'KPI Scoreboard',
    body: 'An eight-metric contractor scoreboard tied to the tools you already use — job costing system, accounting software, CRM or field management platform. Configured for weekly review. Designed to be opened in your leadership session, not filed by your bookkeeper.',
  },
  {
    num: '05',
    title: 'Decision Threshold + Follow-Through Protocol',
    body: 'A written filter defining what decisions stay in the field, what your office handles, and what comes to the owner. Paired with a follow-through system that tracks every open item to confirmed closure — eliminating the recycled discussions that eat your weekly sessions.',
  },
  {
    num: '06',
    title: 'Field Process Set',
    body: 'SOPs for your five to ten highest-leverage repeatable operations. Written to the level where a new foreman or PM can execute from them. Not a library of consultant-grade documents. A working set of field-ready procedures for the operations that matter most.',
  },
  {
    num: '07',
    title: 'Leadership Coaching — Full 90 Days',
    body: 'Weekly working sessions with your leadership team throughout the install. We don\'t design the system and disappear. We build it alongside you, run the first sessions with you in the room, and coach the operating model into your team\'s week-to-week routine.',
  },
];

/* ── Fit ─────────────────────────────────── */
const goodFit = [
  'General contractor, trade contractor, or home service business',
  '$1M–$10M in annual revenue',
  'Owner-led team with 5–30 field and office staff',
  'Revenue growing faster than operating capacity',
  'Owner is the bottleneck on daily field and office decisions',
  'Meetings happen but produce no clear outputs or owners',
  'Field and office work in separate information silos',
  'Owner wants a functional system, not a coach or accountability partner',
];

const notFit = [
  'Below $750K in revenue (structure isn\'t the constraint yet)',
  'Looking for strategic advisory without operational implementation',
  'Not willing to change how leadership meetings run',
  'Expecting results without involving the leadership team in the process',
  'Sole proprietor with no field or office staff to install into',
  'Already running a disciplined operating system and looking for incremental improvements',
];

/* ── What changes / remains ──────────────── */
const changes = [
  'Your weekly leadership session produces named owners and deadlines — not discussion summaries',
  'Field leads resolve operational decisions at the threshold level without calling the owner',
  'Everyone in leadership knows their KPIs before Monday\'s session starts',
  'Change orders, job startups, and customer escalations follow a written process — not whoever answers the phone',
  'The owner\'s day shifts from approving material orders to reviewing margin and directing next month',
  'New hires can be onboarded to key functions from documented processes, not tribal knowledge',
];

const remains = [
  'Every document, every agenda template, every SOP — owned by your business, not stored in our files',
  'Nothing leaves with us when the engagement ends',
  'The operating model runs inside your team — no ongoing facilitation dependency',
  'Optional: monthly operating partner retainer (separate scoped engagement)',
  'Optional: integration with Contractor Job Costing for full financial-operational visibility',
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
          <p className="text-subhead" style={{ maxWidth: '600px', marginBottom: '2.5rem' }}>
            A fixed-scope operational engagement. Not coaching. Not an ongoing advisory relationship.
            Not a generic framework applied to any business.
            A contractor-specific operating install — built with your team, executed in 90 days,
            owned by your business when we step back.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE OPERATING FOUNDATION FRAMEWORK ──── */}
      <section className="section" aria-labelledby="framework-heading">
        <div className="container-inner">
          <span className="eyebrow">The Framework</span>
          <h2 id="framework-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '0.625rem' }}>
            The Operating Foundation
          </h2>
          <p className="text-subhead" style={{ maxWidth: '540px', marginBottom: '0.75rem' }}>
            Five pillars that define how a contractor business operates week to week.
            Each one is designed, installed, and stabilized over 90 days.
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-2)', marginBottom: '3rem', maxWidth: '480px' }}>
            Not a generic framework licensed from a methodology. Built around your business,
            your team, and how contractors actually operate.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {pillars.map((p) => (
              <div
                key={p.num}
                style={{
                  borderTop: '1px solid var(--color-line)',
                  padding: '1.75rem 0',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1rem',
                }}
                className="md:grid-cols-[2rem_1fr_2fr]"
              >
                {/* Number */}
                <span style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--color-accent)',
                  paddingTop: '0.2rem',
                }}>
                  {p.num}
                </span>

                {/* Name + summary */}
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-accent)', fontWeight: 500 }}>
                    {p.summary}
                  </p>
                </div>

                {/* Detail */}
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  {p.detail}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-line)' }} />
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────── */}
      <section className="section" aria-labelledby="fit-heading">
        <div className="container-inner">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
            className="md:grid-cols-2"
          >
            {/* Good fit */}
            <div>
              <span className="eyebrow">Built for</span>
              <h2 id="fit-heading" className="text-headline" style={{ marginBottom: '2rem' }}>
                This is built for contractors who know the problem is internal.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {goodFit.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '2rem' }} className="md:border-t-0 md:border-l md:border-l-line md:pl-10">
              <span className="eyebrow" style={{ color: 'var(--color-muted-2)' }}>Not a fit</span>
              <h2 className="text-headline" style={{ marginBottom: '2rem' }}>
                We&apos;re direct about who this isn&apos;t for.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {notFit.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-muted-2)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✕</span>
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
          <h2 id="deliverables-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '0.625rem' }}>
            Seven deliverables. No ambiguity about what we build.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Every item is built with your team — not presented as a document on the last day.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {deliverables.map((d) => (
              <div
                key={d.num}
                style={{ borderTop: '1px solid var(--color-line)', padding: '1.75rem 0', display: 'flex', gap: '1.5rem' }}
              >
                <span style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--color-accent)',
                  flexShrink: 0,
                  paddingTop: '0.2rem',
                  width: '2rem',
                }}>
                  {d.num}
                </span>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
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

      {/* ── PHASE 3: DIFFERENTIATION — WHY NOT HIRE INTERNALLY ── */}
      <section className="section" aria-labelledby="compare-heading">
        <div className="container-inner">
          <span className="eyebrow">The Comparison</span>
          <h2 id="compare-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '0.625rem' }}>
            Why not just hire an operations manager?
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            It&apos;s the most common alternative. Here&apos;s the direct answer.
          </p>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '3rem' }}
            className="md:grid-cols-3"
          >
            {/* Full-time hire */}
            <div className="card" style={{ borderColor: 'var(--color-line)' }}>
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '1rem' }}>
                Full-time ops manager
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '$80K–$140K salary, plus benefits',
                  '60–90 days to find and onboard',
                  '90 more days before they understand your operation',
                  'If they leave, the system leaves with them',
                  'You\'re managing another direct report',
                  'Generalist — not built for contractor operations',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-muted-2)', flexShrink: 0 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business coaching / ongoing consulting */}
            <div className="card" style={{ borderColor: 'var(--color-line)' }}>
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '1rem' }}>
                Coaching or ongoing consulting
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'No defined scope or end date',
                  'You pay for presence, not output',
                  'Generic frameworks applied to any industry',
                  'The consultant learns your business — then you stay dependent',
                  'Accountability loops, not structural change',
                  'Engagement continues as long as budget allows',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-muted-2)', flexShrink: 0 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The install */}
            <div
              className="card"
              style={{
                borderColor: 'var(--color-accent-dark)',
                backgroundColor: 'color-mix(in srgb, var(--color-accent-dark) 8%, var(--color-surface))',
              }}
            >
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '1rem' }}>
                The 90-Day COO Install
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Fixed fee, fixed scope, defined end date',
                  'Operational from week one — contractor-specific from day one',
                  'System is documented and owned by your team, not by us',
                  '90 days. Then we step back. You own everything',
                  'No ongoing dependency. No management overhead',
                  'Built exclusively for contractor businesses',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--color-fg)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why cadence beats personality */}
          <div
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-line)',
              borderRadius: '0.375rem',
              padding: '1.75rem',
              maxWidth: '740px',
            }}
          >
            <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.875rem' }}>
              Why structure beats personality
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
              Most operational fixes depend on finding the right person — a strong ops manager, a PM who actually follows through,
              a COO who gets it. But systems built around a person fail when that person leaves, gets promoted, or has a bad month.
              The Operating Foundation builds structure that functions independently of who&apos;s in the seat.
              The Ownership Matrix works whether your field lead is having his best week or his worst.
              The scoreboard doesn&apos;t skip Monday because someone called in sick.
              Cadence outlasts personality every time.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT CHANGES / WHAT REMAINS ─────────── */}
      <section className="section" aria-labelledby="changes-heading">
        <div className="container-inner">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
            className="md:grid-cols-2"
          >
            <div>
              <span className="eyebrow">Inside 90 Days</span>
              <h2 id="changes-heading" className="text-headline" style={{ marginBottom: '2rem' }}>
                What changes.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {changes.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ display: 'inline-block', width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--color-accent)', flexShrink: 0, marginTop: '0.5rem' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '2rem' }} className="md:border-t-0 md:border-l md:border-l-line md:pl-10">
              <span className="eyebrow">After 90 Days</span>
              <h2 className="text-headline" style={{ marginBottom: '2rem' }}>
                What remains.
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {remains.map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ display: 'inline-block', width: '0.375rem', height: '0.375rem', borderRadius: '50%', backgroundColor: 'var(--color-accent-dark)', flexShrink: 0, marginTop: '0.5rem' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COST OF DISORDER ─────────────────────── */}
      <section className="section" aria-labelledby="disorder-heading">
        <div className="container-inner">
          <span className="eyebrow">The Real Cost</span>
          <h2 id="disorder-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '0.625rem' }}>
            What disorder costs your business every month.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '560px', marginBottom: '3rem' }}>
            Most contractors compare the engagement fee to the invoice.
            The right comparison is what running without structure costs — month over month, before anything changes.
          </p>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2.5rem' }}
            className="md:grid-cols-2"
          >
            {/* Owner bottleneck tax */}
            <div className="card">
              <p
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '0.75rem',
                }}
              >
                Owner bottleneck tax
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                At the $2M–$8M stage, most owners spend 10–15 hours per week routing decisions that
                should be resolved at the field or office level. Material approvals, scheduling calls,
                subcontractor disputes, customer escalations — everything flows through the owner because
                there is no written threshold for what doesn&apos;t.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-fg)', fontWeight: 600 }}>
                At a conservative $150/hr effective owner rate, that&apos;s $78K–$117K/year in misapplied labor.
                The real cost is higher — because every hour spent approving a material order is an hour not
                spent on estimating, client development, or actual strategy.
              </p>
            </div>

            {/* Margin leakage */}
            <div className="card">
              <p
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '0.75rem',
                }}
              >
                Margin leakage
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Without a live scoreboard reviewed weekly, contractors typically see job costs 30–60 days
                after the fact — after the job is already closed and the margin is already gone.
                Labor overruns, unbilled change orders, and subcontractor invoice gaps go undetected until
                month-end accounting surfaces them as a surprise.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-fg)', fontWeight: 600 }}>
                On a $3M contractor, 3% margin leakage = $90,000/year. Most contractors doing $2M–$8M
                without real-time job cost visibility are leaving 2–5% on the table. Not from bad estimating.
                From no visibility mid-job.
              </p>
            </div>

            {/* Follow-through gap */}
            <div className="card">
              <p
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '0.75rem',
                }}
              >
                Follow-through gap
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Decisions get made in Monday&apos;s all-hands and don&apos;t reach the field until Wednesday —
                if they reach it at all. Change orders get verbal approval and never get documented.
                Subcontractor scope changes get handled by whoever answers the phone.
                Every missing follow-through is a rework event, a collections delay, or a client dispute in formation.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-fg)', fontWeight: 600 }}>
                Each untracked change order = $500–$3,000 in margin exposure.
                At two per week, that&apos;s $52K–$312K in annual margin at risk from a single operational gap.
              </p>
            </div>

            {/* Execution cost of owner departure */}
            <div className="card">
              <p
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-accent)',
                  marginBottom: '0.75rem',
                }}
              >
                Business fragility
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                When the system lives in the owner&apos;s head, any disruption to the owner — illness,
                vacation, a family emergency, an out-of-town project — disrupts the entire operation.
                Field leads can&apos;t make decisions. Office staff can&apos;t resolve disputes.
                The business doesn&apos;t slow down. It stops.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-fg)', fontWeight: 600 }}>
                A business that requires the owner present to function is not an asset.
                It&apos;s an obligation. Every week without a written operating system is a week it stays that way.
              </p>
            </div>
          </div>

          {/* The ROI summary */}
          <div
            style={{
              backgroundColor: 'color-mix(in srgb, var(--color-accent-dark) 8%, var(--color-surface))',
              border: '1px solid color-mix(in srgb, var(--color-accent-dark) 25%, var(--color-line))',
              borderRadius: '0.375rem',
              padding: '1.75rem',
              maxWidth: '740px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-geist-mono, monospace)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
                marginBottom: '0.875rem',
              }}
            >
              The math
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
              For a contractor doing $3M–$5M with no live scoreboard, no decision threshold, and a weekly
              leadership session that produces no closed items: conservative disorder cost runs $150K–$300K/year
              in combined owner time, margin leakage, and rework — before you account for the revenue that
              isn&apos;t being pursued because the owner has no capacity to sell.
            </p>
            <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-fg)', lineHeight: 1.5 }}>
              The engagement fee is typically one to two months of what the disorder costs.
              That&apos;s the comparison. Not against a consulting invoice. Against what continues if nothing changes.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────── */}
      <section className="section" aria-labelledby="pricing-heading">
        <div className="container-inner">
          <span className="eyebrow">Investment</span>
          <h2 id="pricing-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '0.75rem' }}>
            Priced for the cost of not having structure.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '560px', marginBottom: '2.5rem' }}>
            The 90-Day Install is positioned in the range most contractors at this revenue stage consider
            one to two months of operations overhead. The comparison point is not the service fee —
            it&apos;s what owner bottleneck, margin leakage, and execution gaps cost monthly when nothing changes.
          </p>

          <div className="card" style={{ maxWidth: '540px', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '1rem' }}>
              How we scope + price
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'We scope before we price — team size and complexity affect the engagement',
                'Fixed-scope structure means no scope creep and no cost ambiguity mid-engagement',
                'No retainer deposit until we\'re aligned on scope and expected outcomes',
                'Pricing is covered on the discovery call — not published because context matters',
              ].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <BookingButton label="Start with a Discovery Call" />
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.875rem' }}>
            30 minutes. We assess your operation and tell you exactly what changes — and what it costs.
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
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#ffffff', maxWidth: '520px', marginBottom: '1rem' }}
          >
            Book a call. Get a straight answer on both sides.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: '460px', marginBottom: '2.5rem' }}>
            We assess your current operating structure on the first call and tell you
            what the install involves — and whether it&apos;s the right fit for where you are.
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
