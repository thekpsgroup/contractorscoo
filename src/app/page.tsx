import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contractors COO — Fractional COO for Contractor Teams',
  description:
    'Install the operating cadence, leadership structure, and execution rhythm your contractor business has been missing. 90-day fixed-scope COO install for teams doing $1M–$10M/year.',
  alternates: { canonical: 'https://www.contractorscoo.com' },
  openGraph: {
    title: 'Contractors COO — Fractional COO for Contractor Teams',
    description:
      'Install the operating cadence, leadership structure, and execution rhythm your contractor business has been missing.',
    url: 'https://www.contractorscoo.com',
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
    'A 90-day fixed-scope operational install for contractor teams doing $1M–$10M/year. Installs weekly cadence, role clarity, KPI scoreboard, and execution rhythm.',
  areaServed: 'US',
  serviceType: 'Fractional COO',
  url: 'https://www.contractorscoo.com/offer',
  potentialAction: {
    '@type': 'ReserveAction',
    target: 'https://calendly.com/thekpsgroup/30min',
    name: 'Book a Discovery Call',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is a fractional COO different from hiring a full-time COO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional COO delivers the structure without the $150K+ salary. It is also scoped — 90 days to install the system, not an indefinite engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size contractor is this built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams doing $1M–$10M in annual revenue with at least 5–10 field or office staff. Small enough that you are still owner-operated. Large enough that the lack of structure is costing you real money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we need to have our systems figured out first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The diagnosis phase exists because most contractors have not defined their systems yet. We start where you are.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after 90 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own the system. We offer optional ongoing support, but the goal is a business that runs on cadence — not one dependent on us.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does the 90-day COO install cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 90-day install is priced for operators serious about fixing the structure. Pricing is discussed on the discovery call — scope affects price.',
      },
    },
  ],
};

/* ── Problem cards ─────────────────────────── */
const problems = [
  {
    num: '01',
    title: 'Owner Bottleneck',
    body: 'Every decision routes through you. Nothing moves when you\'re unavailable. The business scales to your personal capacity — and stops there.',
  },
  {
    num: '02',
    title: 'Team Confusion',
    body: 'Your team doesn\'t know who owns what. Accountability gaps multiply as headcount grows. Capable people stall because there\'s no clear lane.',
  },
  {
    num: '03',
    title: 'Meetings Without Output',
    body: 'You meet. You discuss. The same problems resurface next week. Nothing closes. Time spent in meetings doesn\'t translate to anything moving.',
  },
  {
    num: '04',
    title: 'Execution Drift',
    body: 'Jobs start well and lose momentum mid-stream. Follow-through is inconsistent. What gets agreed to on Monday disappears by Thursday.',
  },
];

/* ── Install items ─────────────────────────── */
const installs = [
  {
    title: 'Weekly Leadership Cadence',
    body: 'A structured recurring meeting rhythm that closes loops, assigns accountability, and drives decisions — in under an hour.',
  },
  {
    title: 'Role Ownership Framework',
    body: 'Every function has an owner. Every owner knows what they\'re responsible for. No overlap, no gaps, no ambiguity.',
  },
  {
    title: 'KPI Scoreboard',
    body: 'A simplified metrics dashboard contractors actually open and use — tracking the 8–12 numbers that matter at your stage.',
  },
  {
    title: 'Decision-to-Execution System',
    body: 'A filter and follow-through process that turns decisions into completed actions with owners and deadlines — not discussions.',
  },
  {
    title: 'Process Documentation',
    body: 'Lightweight SOPs for your highest-leverage repeatable functions. Enough structure to delegate without creating consultant-grade overhead.',
  },
  {
    title: 'Communication Rhythm',
    body: 'Clear norms for how information flows between crews, office, and ownership — before it becomes a problem.',
  },
];

/* ── Outcomes ─────────────────────────────── */
const outcomes = [
  {
    result: 'Owner off the decision loop',
    body: 'Owners report the first sustained week of not being the bottleneck on daily operational decisions.',
  },
  {
    result: 'Meetings with clear outputs',
    body: 'Weekly leadership sessions consistently close open loops rather than reopen the same discussions.',
  },
  {
    result: 'Accountability that sticks',
    body: 'Team members know their numbers and can speak to them without preparation before the meeting.',
  },
  {
    result: 'Visible margin by job',
    body: 'Leadership can identify which jobs, crews, and service lines are profitable — and act on it.',
  },
];

/* ── FAQ ─────────────────────────────────── */
const faqs = [
  {
    q: 'How is this different from hiring a full-time COO?',
    a: 'A fractional COO delivers the structure without the $150K+ salary. It\'s also scoped — 90 days to install the system, not an indefinite engagement that grows to fill budget.',
  },
  {
    q: 'What size contractor is this built for?',
    a: 'Teams doing $1M–$10M in annual revenue with at least 5–10 field or office staff. Small enough that you\'re still owner-operated. Large enough that the lack of structure is costing real money.',
  },
  {
    q: 'Do we need to have our systems figured out first?',
    a: 'No. The diagnosis phase exists because most contractors at this stage haven\'t defined their systems yet. We start where you are, not where you think you should be.',
  },
  {
    q: 'What happens after 90 days?',
    a: 'You own the system. Every document, every template, every meeting rhythm. We offer optional ongoing support, but the goal is a business that runs on cadence — not one that depends on us.',
  },
  {
    q: 'How much does it cost?',
    a: 'The 90-day install is priced for operators serious about fixing the structure — not the lowest-cost option. Pricing is covered on the discovery call. We scope before we price.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Introduction">
        <div className="container-inner">
          <span className="eyebrow">A service of The KPS Group</span>
          <h1 className="text-display" style={{ maxWidth: '780px', marginBottom: '1.5rem' }}>
            Fractional COO for Contractor Teams
          </h1>
          <p className="text-subhead" style={{ maxWidth: '560px', marginBottom: '2.5rem' }}>
            Install the operating cadence, leadership structure, and execution rhythm
            your business has been missing.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton />
            <Link href="/offer" className="btn-ghost">
              See the 90-Day Install →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: THE PROBLEM ─────────────── */}
      <section className="section" aria-labelledby="problem-heading">
        <div className="container-inner">
          <span className="eyebrow">The Plateau</span>
          <h2 id="problem-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '0.75rem' }}>
            Growth exposed the gaps your old habits were hiding.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Every contractor team at this stage hits the same four walls. They are structural, not personal.
          </p>

          {/* Problem grid: numbered cards with dividers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0',
              borderTop: '1px solid var(--color-line)',
            }}
            className="md:grid-cols-2"
          >
            {problems.map((p, i) => (
              <div
                key={p.num}
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--color-line)',
                  paddingRight: i % 2 === 0 ? '2.5rem' : '0',
                  paddingLeft: i % 2 === 1 ? '2.5rem' : '0',
                  borderLeft: i % 2 === 1 ? '1px solid var(--color-line)' : 'none',
                }}
                className={i % 2 === 1 ? 'md:border-l' : ''}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--color-accent)',
                    marginBottom: '0.625rem',
                  }}
                >
                  {p.num}
                </p>
                <h3
                  style={{
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT WE INSTALL ──────────── */}
      <section className="section" aria-labelledby="install-heading">
        <div className="container-inner">
          <span className="eyebrow">The Install</span>
          <h2 id="install-heading" className="text-headline" style={{ maxWidth: '620px', marginBottom: '0.75rem' }}>
            Six operating systems. Installed in 90 days.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '500px', marginBottom: '3rem' }}>
            Not consulting deliverables. Not a strategy deck. A working operational structure your team actually runs on.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '0',
              borderTop: '1px solid var(--color-line)',
            }}
            className="md:grid-cols-2"
          >
            {installs.map((item, i) => (
              <div
                key={item.title}
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--color-line)',
                  display: 'flex',
                  gap: '1rem',
                  paddingRight: i % 2 === 0 ? '2.5rem' : '0',
                  paddingLeft: i % 2 === 1 ? '2.5rem' : '0',
                  borderLeft: i % 2 === 1 ? '1px solid var(--color-line)' : 'none',
                }}
                className={i % 2 === 1 ? 'md:border-l' : ''}
              >
                <div
                  style={{
                    width: '0.25rem',
                    flexShrink: 0,
                    backgroundColor: 'var(--color-accent-dark)',
                    borderRadius: '2px',
                    marginTop: '0.25rem',
                  }}
                />
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
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/offer" className="btn-ghost">
              Full offer details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 90-DAY TIMELINE ──────────── */}
      <section className="section" aria-labelledby="timeline-heading">
        <div className="container-inner">
          <span className="eyebrow">The Timeline</span>
          <h2 id="timeline-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '0.75rem' }}>
            The 90-Day COO Install
          </h2>
          <p className="text-subhead" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Three phases. Fixed scope. Designed to stick after we step back.
          </p>

          <div style={{ maxWidth: '640px' }}>
            {/* Phase 1 */}
            <div className="phase-item">
              <div className="phase-number">01</div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-2)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Days 1–30
                </p>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Diagnose + Design
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  We audit your current operating structure — meetings, roles, KPIs, handoffs, and decision paths.
                  We identify what's working, what's missing, and what needs to be built. You get a written install plan
                  specific to your business.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="phase-item">
              <div className="phase-number">02</div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-2)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Days 31–60
                </p>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Install Cadence + Accountability
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  We run your first leadership sessions, activate the role ownership framework, install the scoreboard,
                  and build your decision-to-execution rhythm. The system goes live — with us in the room.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="phase-item" style={{ paddingBottom: 0 }}>
              <div className="phase-number">03</div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-geist-mono, monospace)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--color-muted-2)',
                    marginBottom: '0.375rem',
                  }}
                >
                  Days 61–90
                </p>
                <h3
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Leadership Coaching + Stabilization
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  We coach your team through the new system, troubleshoot friction points, and lock in the operating model.
                  By the end of 90 days, the system runs without us. That&apos;s the point.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUTCOMES ─────────────────── */}
      <section className="section" aria-labelledby="outcomes-heading">
        <div className="container-inner">
          <span className="eyebrow">Proof</span>
          <h2 id="outcomes-heading" className="text-headline" style={{ maxWidth: '540px', marginBottom: '0.75rem' }}>
            What contractors see after the install.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Operational changes with names and numbers. Not generic before-and-afters.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1rem',
            }}
            className="md:grid-cols-2"
          >
            {outcomes.map((o) => (
              <div key={o.result} className="card">
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--color-fg)',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {o.result}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {o.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/proof" className="btn-ghost">
              Read detailed outcome examples →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ───────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline" style={{ maxWidth: '480px', marginBottom: '3rem' }}>
            Common questions.
          </h2>

          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid var(--color-line)',
                  padding: '1.5rem 0',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--color-fg)',
                    marginBottom: '0.625rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-line)' }} />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ───────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        style={{
          backgroundColor: 'var(--color-accent-deeper)',
          borderBottom: 'none',
        }}
      >
        <div className="container-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2
            id="cta-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.625rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '580px',
              marginBottom: '1rem',
            }}
          >
            Ready to build an operation your team can run?
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
            Book a 30-minute discovery call. We&apos;ll assess your current structure
            and tell you exactly what needs to change — and whether this install is the right fit.
          </p>
          <BookingButton
            className="btn-primary"
            label="Book a Call"
          />
          <p
            style={{
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.45)',
              marginTop: '1rem',
            }}
          >
            No pitch. No pressure. We&apos;ll tell you if it&apos;s not the right fit.
          </p>
        </div>
      </section>
    </>
  );
}
