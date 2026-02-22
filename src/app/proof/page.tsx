import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contractor COO Results — Before & After Operational Outcomes',
  description:
    'Meeting chaos to operating cadence. Owner bottleneck to delegation. Revenue without margin to scoreboard clarity. Specific operational outcomes from the 90-day contractor COO install.',
  alternates: { canonical: 'https://www.contractorscoo.com/proof' },
  openGraph: {
    title: 'Contractor COO Results — Before & After Operational Outcomes',
    description:
      'Specific before-and-after patterns from the 90-day contractor COO install. Meeting restructuring, role delegation, scoreboard install, and team independence.',
    url: 'https://www.contractorscoo.com/proof',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Contractor COO Results — Before & After Operational Outcomes',
  url: 'https://www.contractorscoo.com/proof',
  description:
    'Before and after outcome patterns from the 90-day fractional COO install for contractor businesses.',
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
    after: 'Fixed Operating Cadence',
    metric: '90-min all-hands → 45-min closed-loop session',
    beforeBody:
      'A 14-person HVAC contractor was running a Monday all-hands that averaged 90 minutes, covered whatever came up, and produced no action items. The owner was writing notes nobody else kept. Field techs sat through conversations that had nothing to do with their work. The same three topics — a problem customer, a parts shortage, a crew scheduling conflict — cycled back the following week unchanged.',
    afterBody:
      'We redesigned the meeting architecture around a fixed 8-point weekly agenda: open items from the prior session, field status by job (2 minutes per lead), office status (billing, collections, one item), cash position, one decision item with a named owner, this-week priority per person, owner directive. Done in 45 minutes. Every item closes or carries forward with a named owner and a deadline written down. Three weeks in, the owner stopped being the note-taker. Six weeks in, the field lead was running the session without being asked.',
    specific: [
      'Fixed 8-point weekly agenda — same format every session',
      'Every open item has a named owner before the meeting ends',
      'Decision items resolved in session, not deferred to "follow-up"',
      'Field lead runs the meeting in week six — owner in the room, not at the head',
    ],
  },
  {
    label: 'Outcome 02',
    before: 'Owner Approving Everything',
    after: 'Decision Thresholds + Delegation',
    metric: 'Est. 40% of owner\'s day reclaimed from operational decisions',
    beforeBody:
      'The owner of a $4.2M electrical contractor was approving purchase orders under $500, answering field tech questions mid-customer-meeting, and personally reviewing every proposal before it went out the door. His field lead had been with the company six years. His office manager handled billing, customer calls, and scheduling. Both were capable people being bottlenecked by a system that routed everything through the owner by default — not by design.',
    afterBody:
      'We built the Ownership Matrix with decision thresholds written into it: the field lead owns all field decisions under a defined dollar and complexity threshold, with specific examples (materials, crew changes, job-site issues). The office manager owns customer communication and scheduling. The owner reviews estimates over a defined amount, signs off on vendor changes, and directs the week in the Monday session. His first full afternoon with no operational interruptions happened in week seven of the engagement.',
    specific: [
      'Written decision threshold: what field lead owns vs. what escalates',
      'Office manager owns client communication — defined scope and boundaries',
      'Owner approval required only for items above named thresholds',
      'Threshold document reviewed in leadership session, adjusted after 30 days of live operation',
    ],
  },
  {
    label: 'Outcome 03',
    before: 'Revenue Up, Margin Drifting',
    after: 'Scoreboard + Visible Margin by Job',
    metric: '+6 margin points in one quarter on slightly lower revenue',
    beforeBody:
      'Revenue had grown from $2.1M to $3.4M over 18 months at a residential remodeling firm. But net margin had drifted from 14% to 8% and the owner couldn\'t explain why. Monthly P&L reports were reviewed but not actioned. Accounting was a month behind. Jobs were closing profitable on estimate, then coming in under on actuals — the pattern was visible in hindsight but invisible in real time. The team was busy. Nobody knew which part of the business was carrying the weight.',
    afterBody:
      'We built an 8-metric weekly scoreboard tied to their existing job costing system and QuickBooks. The metrics: weekly billings vs. target, job margin by lead (actuals vs. estimate), labor cost vs. estimate per active job, AR aging by bucket, active pipeline value, collections due this week, job completion rate vs. schedule, and one owner-defined constraint metric. Weekly review became the default in the Monday session. Within 60 days, they identified two service lines with sub-8% net margin. One was restructured with revised pricing and scope definitions. One was discontinued. Margin recovered 6 points in the following quarter — on $200K less revenue.',
    specific: [
      '8-metric scoreboard: billings, job margin, labor vs. estimate, AR aging, pipeline, collections, completion rate, owner KPI',
      'Reviewed in leadership session — not sent to accounting to compile after the fact',
      'Job margin tracked by lead so individual performance is visible',
      'Service line profitability visible within 60 days of install',
    ],
  },
  {
    label: 'Outcome 04',
    before: 'Team Stalls When Owner Travels',
    after: 'Operational Independence',
    metric: '2-week unassisted operation — zero escalations',
    beforeBody:
      'A plumbing and mechanical contractor with 22 people stalled every time the owner left town. Senior staff defaulted to waiting rather than deciding. A field lead with four years of experience would call before approving a job change that was clearly within his authority — because his authority had never been defined. Two-day trips required a full week of cleanup on return. The team was capable. The operating model wasn\'t clear.',
    afterBody:
      'After the Ownership Matrix and leadership coaching phase, the team ran two full weeks with the owner traveling internationally. The field lead ran Monday\'s session from the fixed agenda and sent a written summary. The office manager resolved three customer escalations within her defined authority. One vendor issue came up that was within the field lead\'s threshold — he handled it and noted it in the follow-up log. No calls to the owner. No fires on return. The owner\'s written summary on return: "Everything was handled. I didn\'t check my phone once."',
    specific: [
      'Field lead ran Monday session from fixed agenda — no owner present',
      'Customer escalations resolved by office manager within defined authority',
      'Vendor issue handled at field lead threshold — logged, not escalated',
      'Written session summary produced without prompting',
    ],
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
          <p className="text-subhead" style={{ maxWidth: '560px' }}>
            Not case studies with client logos. Outcome patterns from real installs —
            the before state, the after state, and the specific operational changes that produced the result.
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

            {/* After-state headline */}
            <h2
              id={`outcome-${i}-heading`}
              className="text-headline"
              style={{ maxWidth: '640px', marginBottom: '0.625rem' }}
            >
              {o.after}
            </h2>

            {/* Previously: Before label */}
            <p
              style={{
                fontFamily:    'var(--font-geist-mono, monospace)',
                fontSize:      '0.6875rem',
                fontWeight:    500,
                letterSpacing: '0.08em',
                color:         'var(--color-muted-2)',
                marginBottom:  '1.5rem',
              }}
            >
              Previously:{' '}
              <span style={{ textDecoration: 'line-through' }}>{o.before}</span>
            </p>

            {/* Metric badge */}
            <div
              style={{
                display:         'inline-flex',
                alignItems:      'center',
                backgroundColor: 'var(--color-surface)',
                border:          '1px solid var(--color-line)',
                borderRadius:    '0.25rem',
                padding:         '0.5rem 1rem',
                marginBottom:    '2.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize:   '0.8125rem',
                  fontWeight: 600,
                  color:      'var(--color-fg)',
                }}
              >
                {o.metric}
              </span>
            </div>

            {/* Before / After narrative */}
            <div
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginBottom: '2rem' }}
              className="md:grid-cols-2"
            >
              <div>
                <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.875rem' }}>
                  Before
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                  {o.beforeBody}
                </p>
              </div>

              <div style={{ borderTop: '1px solid var(--color-line)', paddingTop: '1.5rem' }} className="md:border-t-0 md:border-l md:border-l-line md:pl-8">
                <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.875rem' }}>
                  After
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                  {o.afterBody}
                </p>
              </div>
            </div>

            {/* Specific operational changes */}
            <div style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-line)', borderRadius: '0.375rem', padding: '1.25rem 1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.875rem' }}>
                What specifically changed
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {o.specific.map((item) => (
                  <li key={item} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* ── NOTE ON PROOF ─────────────────────────── */}
      <section className="section" aria-labelledby="proof-note-heading">
        <div className="container-inner" style={{ maxWidth: '680px' }}>
          <h2 id="proof-note-heading" className="text-headline" style={{ marginBottom: '1.25rem' }}>
            A note on how we present this.
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            We do not publish client names, company names, or attributed testimonials.
            Contractors operating at this revenue stage prefer discretion — and that preference is legitimate.
            What we publish instead is the operational pattern: the starting state, the specific install,
            and the measurable change that followed.
          </p>
          <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            If you want to speak directly with someone who has been through the install,
            ask on the discovery call. We can arrange a reference conversation
            when the fit is serious on both sides.
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
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em', color: '#ffffff', maxWidth: '500px', marginBottom: '1rem' }}
          >
            See what the install looks like for your specific operation.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: '440px', marginBottom: '2.5rem' }}>
            Book a 30-minute discovery call. We assess your current structure
            and identify the specific gaps — before there&apos;s any commitment on either side.
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
