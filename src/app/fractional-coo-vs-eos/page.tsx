import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Fractional COO vs EOS for Contractors',
  description:
    'EOS works for some businesses — but not most contractors. Compare fractional COO install vs EOS Traction for contractor teams at the $1M–$10M stage.',
  alternates: { canonical: 'https://www.contractorscoo.com/fractional-coo-vs-eos' },
  openGraph: {
    title: 'Fractional COO vs EOS — Which Fits Contractors?',
    description:
      'EOS is a framework you self-implement. A fractional COO install is a system built inside your business. Here\'s how they compare for contractor operations.',
    url: 'https://www.contractorscoo.com/fractional-coo-vs-eos',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional COO Install — EOS Alternative for Contractors',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A 90-day operational install purpose-built for contractor businesses at $1M–$10M. An alternative to EOS/Traction for teams that need field-ready structure, not a generic framework.',
  areaServed: 'US',
  serviceType: 'Contractor Operations System',
  url: 'https://www.contractorscoo.com/fractional-coo-vs-eos',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does EOS work for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EOS provides a general-purpose business operating framework. It can work for contractors who have office-based leadership, a management layer already in place, and the time to self-implement over 12–24 months. For owner-operated contractors at $1M–$5M with field-based teams and no existing management structure, EOS often stalls because there is no one to run the framework once the implementer leaves the room.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a fractional COO and an EOS implementer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An EOS implementer facilitates quarterly and annual planning sessions — typically 8 full-day sessions over two years. Between sessions, your team self-implements. A fractional COO installs the operating system directly: building the meeting cadence, ownership matrix, decision standards, and scoreboard inside your business over 90 days. The difference is facilitation vs. installation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why doesn\'t EOS work well for small contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three reasons: (1) EOS assumes you have a leadership team that can self-implement between sessions — most contractors at $1M–$5M don\'t. (2) The 2-year timeline is too slow for businesses bleeding margin now. (3) EOS is industry-agnostic, meaning it doesn\'t account for field operations, job costing rhythms, or the unique decision flow of contractor businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an EOS implementer cost compared to a fractional COO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A certified EOS implementer typically costs $5,000–$7,500 per full-day session, with 8 sessions over 2 years — roughly $40K–$60K total, plus the cost of your team\'s time to self-implement between sessions. A fractional COO install is fixed-scope over 90 days, typically in the range of 1–2 months of operations overhead for contractors at $1M–$10M. The COO install includes hands-on implementation, not just facilitation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use EOS and a fractional COO together?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Some contractors use EOS for high-level vision and annual planning, then bring in a fractional COO to install the operational infrastructure that makes those plans executable. The two are not mutually exclusive — but most contractors at the $1M–$5M stage need implementation more than they need planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Traction and does it apply to contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Traction is the book by Gino Wickman that outlines the Entrepreneurial Operating System (EOS). The framework includes 6 components: Vision, People, Data, Issues, Process, and Traction. The principles are sound, but the implementation model — self-run by the leadership team — is where most contractors struggle. Contractor businesses need field-ready systems, not a framework that assumes office-based operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the 90-day install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The system runs on its own. Every deliverable is documented and owned by your team. The weekly cadence holds because it was built into your existing workflow — not imposed as an additional layer. Most teams operate independently within 30 days of the engagement ending. If they need a tune-up later, we offer short re-engagement options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to read Traction before working with you?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The install does not depend on any external framework. If you have read Traction and found the principles useful but struggled with implementation, the 90-day install solves the gap between knowing what to do and having a working system.',
      },
    },
  ],
};

const comparison = [
  {
    dimension: 'Approach',
    eos: 'Framework you self-implement with quarterly facilitation over 2 years',
    coo: 'Hands-on install built inside your business over 90 days',
  },
  {
    dimension: 'Industry fit',
    eos: 'Industry-agnostic. Designed for office-based businesses with existing leadership teams',
    coo: 'Built specifically for contractor businesses with field operations and owner-operators',
  },
  {
    dimension: 'Implementation',
    eos: 'Your team runs it between sessions. EOS implementer facilitates 8 full-day sessions',
    coo: 'We build it alongside your team. Weekly working sessions for the full 90 days',
  },
  {
    dimension: 'Timeline',
    eos: '18–24 months to full adoption. Results depend on your team\'s follow-through',
    coo: '90 days. Most owners see relief within 45–60 days as systems take hold',
  },
  {
    dimension: 'Team requirement',
    eos: 'Assumes an existing leadership team capable of self-implementation',
    coo: 'Works with the team you have — even if roles are undefined and authority is unclear',
  },
  {
    dimension: 'Decision structure',
    eos: 'High-level accountability chart and rocks (quarterly priorities)',
    coo: 'Written decision thresholds with dollar amounts, scope boundaries, and specific examples',
  },
  {
    dimension: 'Meeting cadence',
    eos: 'L10 meeting format (level 10). Team runs it independently after training',
    coo: 'Custom 8-point contractor agenda. We run the first sessions and coach until it holds',
  },
  {
    dimension: 'What you get',
    eos: 'A framework (Vision/Traction Organizer, accountability chart, rocks, L10 format)',
    coo: 'Installed system (ownership matrix, decision standards, KPI scoreboard, follow-through protocol)',
  },
  {
    dimension: 'Cost structure',
    eos: '$40K–$60K over 2 years (8 sessions at $5K–$7.5K each), plus team time',
    coo: 'Fixed-scope, 90-day engagement. Typically 1–2 months of operations overhead',
  },
  {
    dimension: 'After the engagement',
    eos: 'Many businesses continue with an implementer indefinitely to maintain discipline',
    coo: 'System is documented, owned by your team, and designed to run without us',
  },
];

const faqs = [
  {
    q: 'Does EOS work for contractors?',
    a: 'It can — if you have an office-based leadership team, existing management structure, and 12–24 months to self-implement. For owner-operated contractors at $1M–$5M with field crews and no management layer, EOS frequently stalls because there\'s no one to run the framework between sessions.',
  },
  {
    q: 'What\'s the difference between a fractional COO and an EOS implementer?',
    a: 'An EOS implementer facilitates 8 full-day sessions over 2 years. Between sessions, your team self-implements. A fractional COO installs the operating system directly — building the cadence, ownership matrix, decision standards, and scoreboard inside your business over 90 days. Facilitation vs. installation.',
  },
  {
    q: 'Why doesn\'t EOS work for most small contractors?',
    a: 'Three reasons: (1) It assumes a leadership team capable of self-implementation — most contractors at this stage don\'t have one. (2) The 2-year timeline is too slow when margin is eroding now. (3) It\'s industry-agnostic, so it doesn\'t address field operations, job costing, or the decision patterns specific to contractor businesses.',
  },
  {
    q: 'How much does an EOS implementer cost?',
    a: 'Certified EOS implementers typically charge $5,000–$7,500 per full-day session. The standard engagement is 8 sessions over 2 years — roughly $40K–$60K total — plus the cost of your team\'s time to self-implement between sessions.',
  },
  {
    q: 'Can I use both EOS and a fractional COO?',
    a: 'Yes. Some contractors use EOS for high-level vision and annual planning, then bring in a fractional COO for the operational install that makes those plans executable. They\'re not mutually exclusive — but at the $1M–$5M stage, most contractors need implementation more than planning.',
  },
  {
    q: 'I read Traction. Should I try self-implementing first?',
    a: 'If you have the time and a team that can run it, try it. Many of our clients did exactly that — they read Traction, got value from the concepts, but struggled to sustain the meeting cadence and accountability structure without outside support. The 90-day install closes that gap.',
  },
  {
    q: 'What happens after the 90-day install ends?',
    a: 'The system runs without us. Every deliverable is documented and owned by your team. The cadence holds because it was built into your existing workflow. Most teams operate independently within 30 days of the engagement ending.',
  },
  {
    q: 'What does the 90-day install cost?',
    a: 'Fixed-scope. Typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. We scope before we price. Specifics are covered on the discovery call.',
  },
];

export default function FractionalCooVsEosPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Fractional COO vs EOS comparison">
        <div className="container-inner">
          <span className="eyebrow">Fractional COO vs EOS</span>
          <h1 className="text-display" style={{ maxWidth: '780px', marginBottom: '1.5rem' }}>
            EOS Is a Framework. This Is an Install. Here&apos;s the Difference.
          </h1>
          <p className="text-subhead" style={{ maxWidth: '580px', marginBottom: '2.5rem' }}>
            EOS gives you a system to self-implement over two years. We build the system inside
            your business in 90 days. For contractor teams at $1M–$10M, the difference between
            a framework and an install is the difference between knowing and doing.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton label="Book a Discovery Call" source="eos_compare_hero" />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.875rem' }}>
            30 minutes. We assess your operation and show you what the install looks like.
          </p>
        </div>
      </section>

      {/* ── THE PROBLEM WITH EOS FOR CONTRACTORS ── */}
      <section className="section" aria-labelledby="problem-heading">
        <div className="container-inner">
          <span className="eyebrow">The Mismatch</span>
          <h2 id="problem-heading" className="text-headline" style={{ maxWidth: '640px', marginBottom: '2rem' }}>
            EOS was built for office-based businesses with leadership teams. Most contractors have neither.
          </h2>
          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              The Entrepreneurial Operating System works when you have a leadership team that can
              self-implement between quarterly sessions. That&apos;s the model: an implementer
              facilitates, your team executes. The gap between sessions is where the real work happens.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              For a $3M contractor with two field leads, an office manager, and an owner who runs
              everything? The gap between sessions is where EOS dies. Nobody has time to build the
              scoreboard. Nobody enforces the L10 agenda. The rocks go unreviewed. By the next
              quarterly session, the team has regressed to default — and the owner is still the bottleneck.
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              The principles in <em>Traction</em> are sound. Accountability charts, meeting cadence,
              measurables, quarterly priorities — all useful concepts. The failure point is not the
              framework. It&apos;s the assumption that your team can build and sustain these systems
              without someone installing them directly.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────── */}
      <section className="section" aria-labelledby="compare-heading">
        <div className="container-inner">
          <span className="eyebrow">Side-by-Side</span>
          <h2 id="compare-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '3rem' }}>
            EOS vs. 90-day operational install — point by point.
          </h2>

          <div style={{ maxWidth: '900px' }}>
            {/* Header row — desktop only */}
            <div
              style={{
                display: 'none',
                gridTemplateColumns: '10rem 1fr 1fr',
                gap: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--color-line)',
              }}
              className="md:grid"
            >
              <div />
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)' }}>
                EOS / Traction
              </p>
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                90-Day COO Install
              </p>
            </div>

            {comparison.map((row) => (
              <div
                key={row.dimension}
                style={{ borderBottom: '1px solid var(--color-line)', padding: '1.25rem 0' }}
              >
                {/* Desktop: grid row */}
                <div
                  style={{ display: 'none', gridTemplateColumns: '10rem 1fr 1fr', gap: '1.5rem' }}
                  className="md:grid"
                >
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-fg)', letterSpacing: '-0.01em' }}>
                    {row.dimension}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    {row.eos}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    {row.coo}
                  </p>
                </div>

                {/* Mobile: stacked */}
                <div className="md:hidden">
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-fg)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                    {row.dimension}
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <div>
                      <span style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)' }}>
                        EOS{' '}
                      </span>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6, marginTop: '0.125rem' }}>
                        {row.eos}
                      </p>
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                        COO Install{' '}
                      </span>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6, marginTop: '0.125rem' }}>
                        {row.coo}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO EACH FITS ────────────────────────── */}
      <section className="section" aria-labelledby="fit-heading">
        <div className="container-inner">
          <span className="eyebrow">Who Each Fits</span>
          <h2 id="fit-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '3rem' }}>
            Honest assessment: when EOS makes sense — and when it doesn&apos;t.
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '900px' }}
            className="md:grid-cols-2"
          >
            <div className="card">
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.875rem' }}>
                EOS may work if
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'You have 5+ people in defined leadership roles',
                  'Your leadership team can self-implement between sessions',
                  'Your business is mostly office-based or service-based',
                  'You have 18–24 months to see full results',
                  'You want a framework, not hands-on installation',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-muted-2)', flexShrink: 0 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card" style={{ borderColor: 'var(--color-accent-dark)' }}>
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.875rem' }}>
                The 90-day install fits if
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'You\'re a contractor at $1M–$10M, still owner-operated',
                  'Your team has field crews and no formal management layer',
                  'You need results in 90 days — not 24 months',
                  'You want someone to build the system, not just explain it',
                  'You\'ve tried frameworks before and they didn\'t stick',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ──────────────────────── */}
      <section className="section" aria-label="Book a call">
        <div className="container-inner" style={{ maxWidth: '680px' }}>
          <div
            style={{
              backgroundColor: 'var(--color-accent-deeper)',
              borderRadius: '0.375rem',
              padding: '2.5rem',
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
              Not sure which approach fits your business?
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              30-minute discovery call. We&apos;ll assess your current structure and tell you
              directly whether the install makes sense — or whether a different approach fits better.
            </p>
            <BookingButton label="Book a Discovery Call" source="eos_compare_mid" />
          </div>
        </div>
      </section>

      {/* ── WHAT THE INSTALL INCLUDES ────────────── */}
      <section className="section" aria-labelledby="install-heading">
        <div className="container-inner">
          <span className="eyebrow">What You Get</span>
          <h2 id="install-heading" className="text-headline" style={{ maxWidth: '580px', marginBottom: '0.625rem' }}>
            The 90-day install: six deliverables, built for contractors.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Every deliverable is installed inside your business — not presented in a slide deck.
          </p>

          <div style={{ maxWidth: '680px' }}>
            {[
              { num: '01', title: 'Weekly Leadership Cadence', body: 'Fixed meeting rhythm. 8-point agenda built for contractor operations. Every item closes with a named owner and deadline.' },
              { num: '02', title: 'Ownership Matrix', body: 'Every function — estimating, field ops, billing, purchasing, sub management — assigned to a single named owner. Not an accountability chart on a whiteboard. A working document your team references daily.' },
              { num: '03', title: 'Decision Thresholds', body: 'Written standards: what your field lead handles, what your office resolves, what escalates. Dollar amounts, scope boundaries, specific examples. The owner stops being the default decision-maker.' },
              { num: '04', title: 'KPI Scoreboard', body: 'Eight contractor-specific metrics reviewed weekly. Billings, margin, labor vs. estimate, AR aging, pipeline, collections. Your team sees performance before the meeting starts.' },
              { num: '05', title: 'Follow-Through Protocol', body: 'Closed-loop tracking. Every decision maps to a named owner and deadline. Checked before the next session. No recycled discussions.' },
              { num: '06', title: 'Leadership Coaching', body: 'Weekly working sessions for the full 90 days. We build the system alongside your people, run the first sessions with you in the room, and coach until the cadence holds without you.' },
            ].map((d) => (
              <div key={d.num} style={{ borderTop: '1px solid var(--color-line)', padding: '1.75rem 0', display: 'flex', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-accent)', flexShrink: 0, paddingTop: '0.2rem', width: '2rem' }}>
                  {d.num}
                </span>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {d.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-line)' }} />
          </div>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/offer" className="btn-ghost">
              See the full 90-day offer →
            </Link>
            <Link href="/contractor-operations-system" className="btn-ghost">
              The Operating Foundation →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Questions about EOS vs. fractional COO for contractors.
          </h2>

          <div style={{ maxWidth: '680px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--color-line)', padding: '1.5rem 0' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--color-fg)', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
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

      {/* ── ECOSYSTEM ──────────────────────────── */}
      <section className="section" aria-label="Related services">
        <div className="container-inner" style={{ maxWidth: '680px' }}>
          <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-line)', borderRadius: '0.375rem', padding: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.875rem' }}>
              The full foundation
            </p>
            <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
              Need financial clarity alongside operational structure? Start with{' '}
              <a href="https://contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                Contractor Job Costing
              </a>.
              If your fundamentals (entity, accounting, insurance) aren&apos;t set, start with{' '}
              <a href="https://contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none' }}>
                Contractor Setup Install
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────── */}
      <section className="section" aria-label="Related pages">
        <div className="container-inner">
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/fractional-coo-contractors" className="btn-ghost">
              Fractional COO for contractors →
            </Link>
            <Link href="/owner-bottleneck" className="btn-ghost">
              Fix the owner bottleneck →
            </Link>
            <Link href="/contractor-growing-pains" className="btn-ghost">
              Contractor growing pains →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        style={{ backgroundColor: 'var(--color-accent-deeper)', borderBottom: 'none' }}
      >
        <div className="container-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2
            id="cta-heading"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#ffffff', maxWidth: '560px', marginBottom: '1rem' }}
          >
            Skip the 2-year framework. Install the system in 90 days.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: '460px', marginBottom: '2.5rem' }}>
            30-minute discovery call. We assess your operation, show you what the install
            covers, and give you a straight answer on whether it fits — or whether EOS
            makes more sense for your stage.
          </p>
          <BookingButton label="Book a Discovery Call" source="eos_compare_footer_cta" />
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
            Honest assessment. If EOS is the better fit, we&apos;ll tell you that.
          </p>
        </div>
      </section>
    </>
  );
}
