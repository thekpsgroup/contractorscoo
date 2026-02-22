import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Proof — Contractor COO Outcomes & Results',
  description:
    'Outcome patterns from contractor COO installs. Meeting chaos to operating cadence, owner bottleneck to delegation, revenue without margin to scoreboard clarity.',
  alternates: { canonical: 'https://www.contractorscoo.com/proof' },
  openGraph: {
    title: 'Proof — Contractor COO Outcomes & Results',
    description:
      'Real operational outcomes from the 90-day contractor COO install. Not testimonials — outcome patterns.',
    url: 'https://www.contractorscoo.com/proof',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Proof — Contractor COO Outcomes',
  url: 'https://www.contractorscoo.com/proof',
  description:
    'Outcome examples and results from the 90-day fractional COO install for contractor teams.',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
};

const outcomes = [
  {
    label: 'Outcome 01',
    before: 'Meeting Chaos',
    after: 'Operating Cadence',
    beforeBody:
      'A contractor with 14 people was holding a Monday all-hands that ran 90+ minutes, covered everything and nothing, and produced no action items. The same topics cycled back the following week. The owner was frustrated. The team was checked out. The meetings happened — but nothing moved as a result of them.',
    afterBody:
      'We redesigned the meeting architecture. A 45-minute weekly leadership session — field lead, office lead, owner — now runs from a fixed agenda. Every item has an owner. Every item closes or carries forward with a reason. Three weeks in, the owner stopped being the note-taker. Six weeks in, the field lead was running the session without prompting.',
    metric: '90-min unstructured meeting → 45-min closed-loop session',
  },
  {
    label: 'Outcome 02',
    before: 'Owner in the Weeds',
    after: 'Role Clarity + Delegation',
    beforeBody:
      'The owner was approving purchase orders under $500, answering field tech questions during client meetings, and reviewing every estimate before it went out. Forty percent of his day was other people\'s jobs. He was working 60-hour weeks and growing the business — but couldn\'t step away for a single afternoon without things stalling.',
    afterBody:
      'We built the role ownership matrix and paired it with a decision threshold filter. The field lead now owns all field decisions up to defined dollar and complexity thresholds. Office manages client communication. The owner reviews what he should — not everything. His first uninterrupted afternoon in two years happened in week seven of the engagement.',
    metric: '~40% of owner\'s day reclaimed from operational decisions',
  },
  {
    label: 'Outcome 03',
    before: 'Revenue Growth, Margin Drift',
    after: 'Scoreboard + Decision Filter',
    beforeBody:
      'Revenue had grown from $2.1M to $3.4M over 18 months. But margin had drifted and the owner couldn\'t tell which service lines were profitable or why. He was working harder for the same take-home. Accounting produced reports monthly that nobody looked at. The team was busy — but not necessarily profitable.',
    afterBody:
      'We built an 8-metric scoreboard tied to their existing job costing tool. Weekly review became the default. Within 60 days, they identified two service lines with sub-8% net margin. One was restructured with a revised pricing model. One was eliminated from their service offering entirely. Margin recovered 6 points in the following quarter — on slightly lower revenue.',
    metric: '+6 margin points in one quarter post-scoreboard install',
  },
  {
    label: 'Outcome 04',
    before: 'Accountability Gaps',
    after: 'Team Ownership',
    beforeBody:
      'Projects stalled when the owner traveled. Nobody stepped up because nobody knew whose job it was. The team was capable — the system wasn\'t clear. Senior staff defaulted to waiting for direction rather than making calls in the owner\'s absence. Two-day trips required a full week of catch-up on return.',
    afterBody:
      'After the role clarity and leadership coaching phase, the team ran two full weeks with the owner in another state. No fires. No calls asking for decisions. The weekly leadership session ran without him — on agenda, on time, with a written summary waiting on return. The system held because the team now knew what holding it looked like.',
    metric: 'Team ran independently for 2 weeks — no escalations',
  },
];

export default function ProofPage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Proof overview">
        <div className="container-inner">
          <span className="eyebrow">Proof</span>
          <h1 className="text-display" style={{ maxWidth: '720px', marginBottom: '1.5rem' }}>
            What Changes When the Operating System Gets Installed
          </h1>
          <p className="text-subhead" style={{ maxWidth: '540px' }}>
            Not case studies with logos. Not testimonials with names removed.
            Outcome patterns from installs — before state, after state, and what changed operationally.
          </p>
        </div>
      </section>

      {/* ── OUTCOME EXAMPLES ─────────────────────── */}
      {outcomes.map((o, i) => (
        <section
          key={o.label}
          className="section"
          aria-labelledby={`outcome-${i}-heading`}
        >
          <div className="container-inner">
            <span className="eyebrow">{o.label}</span>

            {/* Before → After header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.625rem',
                flexWrap: 'wrap',
              }}
            >
              <h2
                id={`outcome-${i}-heading`}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--color-muted-2)',
                  textDecoration: 'line-through',
                  margin: 0,
                }}
              >
                {o.before}
              </h2>
              <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>→</span>
              <h2
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--color-accent)',
                  margin: 0,
                }}
              >
                {o.after}
              </h2>
            </div>

            {/* Metric callout */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-line)',
                borderRadius: '0.25rem',
                padding: '0.5rem 0.875rem',
                marginBottom: '2.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.8125rem',
                  color: 'var(--color-fg)',
                }}
              >
                {o.metric}
              </span>
            </div>

            {/* Before / After narrative */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '2rem',
              }}
              className="md:grid-cols-2"
            >
              <div>
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
                  Before
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                  {o.beforeBody}
                </p>
              </div>

              <div
                style={{
                  borderTop: '1px solid var(--color-line)',
                  paddingTop: '1.5rem',
                }}
                className="md:border-t-0 md:border-l md:pl-8"
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
                  After
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75 }}>
                  {o.afterBody}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CLOSING NOTE ─────────────────────────── */}
      <section className="section" aria-labelledby="proof-note-heading">
        <div className="container-inner" style={{ maxWidth: '680px' }}>
          <h2
            id="proof-note-heading"
            className="text-headline"
            style={{ marginBottom: '1rem' }}
          >
            A note on proof.
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            We do not publish client names, logos, or attributed testimonials. Contractors operating
            at this stage prefer discretion — and we respect that. What we can show is the operational
            pattern: the before state, the install, and the measurable after.
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            If you want to speak with someone who has been through the install, ask on the discovery call.
            We can arrange a reference conversation when the fit is serious.
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <BookingButton />
            <Link href="/offer" className="btn-ghost">
              See the full offer →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section
        aria-labelledby="proof-cta-heading"
        style={{ backgroundColor: 'var(--color-accent-deeper)', borderBottom: 'none' }}
      >
        <div className="container-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2
            id="proof-cta-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '500px',
              marginBottom: '1rem',
            }}
          >
            See where your operation stands.
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
            Book a 30-minute discovery call. We assess your current structure
            and identify the specific gaps — before there&apos;s any commitment.
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
