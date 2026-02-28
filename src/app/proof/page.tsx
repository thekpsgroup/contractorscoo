import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contractor COO Results — Before & After',
  description:
    'Meeting chaos to cadence. Owner bottleneck to delegation. Revenue without margin to scoreboard clarity. Outcomes from the 90-day contractor COO install.',
  alternates: { canonical: 'https://www.contractorscoo.com/proof' },
  openGraph: {
    title: 'Contractor COO Results — Before & After Operational Outcomes',
    description:
      'Specific before-and-after patterns from the 90-day contractor COO install. Meeting restructuring, role delegation, scoreboard install, and team independence.',
    url: 'https://www.contractorscoo.com/proof',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor COO Results — Before & After',
    description: 'Meeting chaos to cadence. Owner bottleneck to delegation. Revenue without margin to scoreboard clarity. Outcomes from the 90-day contractor COO install.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Proof', item: 'https://www.contractorscoo.com/proof' },
  ],
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
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Proof overview">
        <div className="container-inner">
          <span className="eyebrow">Proof</span>
          <h1 className="text-display proof-hero-title">
            What Changes When the Operating System Gets Installed
          </h1>
          <p className="text-subhead proof-hero-subhead">
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
              className="text-headline proof-outcome-title"
            >
              {o.after}
            </h2>

            {/* Previously: Before label */}
            <p className="proof-prev-label">
              Previously:{' '}
              <span className="proof-strikethrough">{o.before}</span>
            </p>

            {/* Metric badge */}
            <div className="proof-metric-badge">
              <span className="proof-metric-text">
                {o.metric}
              </span>
            </div>

            {/* Before / After narrative */}
            <div className="proof-two-col md:grid-cols-2">
              <div>
                <p className="proof-kicker-muted">
                  Before
                </p>
                <p className="proof-body-copy">
                  {o.beforeBody}
                </p>
              </div>

              <div className="proof-after-col md:border-t-0 md:border-l md:border-l-line md:pl-8">
                <p className="proof-kicker-accent">
                  After
                </p>
                <p className="proof-body-copy">
                  {o.afterBody}
                </p>
              </div>
            </div>

            {/* Specific operational changes */}
            <div className="proof-changes-card">
              <p className="proof-kicker-muted">
                What specifically changed
              </p>
              <ul className="proof-list">
                {o.specific.map((item) => (
                  <li key={item} className="proof-list-item">
                    <span className="proof-list-bullet">→</span>
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
        <div className="container-inner proof-narrow-wrap">
          <h2 id="proof-note-heading" className="text-headline proof-note-title">
            A note on how we present this.
          </h2>
          <p className="proof-note-copy proof-note-copy-tight">
            We do not publish client names, company names, or attributed testimonials.
            Contractors operating at this revenue stage prefer discretion — and that preference is legitimate.
            What we publish instead is the operational pattern: the starting state, the specific install,
            and the measurable change that followed.
          </p>
          <p className="proof-note-copy proof-note-copy-loose">
            If you want to speak directly with someone who has been through the install,
            ask on the discovery call. We can arrange a reference conversation
            when the fit is serious on both sides.
          </p>
          <div className="proof-links-row">
            <BookingButton source="proof_note" />
            <Link href="/offer" className="btn-ghost">
              See the full offer →
            </Link>
            <Link href="/owner-bottleneck" className="btn-ghost">
              Fix the owner bottleneck →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ──────────────────────────── */}
      <section className="section" aria-label="Related services">
        <div className="container-inner proof-narrow-wrap">
          <div className="proof-ecosystem-card">
            <p className="proof-kicker-muted">
              The full foundation
            </p>
            <p className="proof-ecosystem-copy">
              Need margin clarity alongside operations? See{' '}
              <a href="https://www.contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=proof" target="_blank" rel="noopener noreferrer" className="proof-ecosystem-link">
                Contractor Job Costing
              </a>.
              If your fundamentals — entity, accounting, insurance — aren&apos;t set, start with{' '}
              <a href="https://www.contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=proof" target="_blank" rel="noopener noreferrer" className="proof-ecosystem-link">
                Contractor Setup Install
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section aria-labelledby="proof-cta-heading" className="proof-final-cta-section">
        <div className="container-inner proof-final-cta-inner">
          <h2
            id="proof-cta-heading"
            className="proof-final-cta-title"
          >
            See what the install looks like for your specific operation.
          </h2>
          <p className="proof-final-cta-copy">
            Book a 30-minute discovery call. We assess your current structure
            and identify the specific gaps — before there&apos;s any commitment on either side.
          </p>
          <BookingButton source="proof_footer_cta" />
        </div>
      </section>
    </>
  );
}
