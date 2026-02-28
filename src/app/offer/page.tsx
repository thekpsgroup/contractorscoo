import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'The 90-Day COO Install — What You Get',
  description:
    'Exact deliverables, who it\'s built for, and how the Operating Foundation works. Fixed-scope fractional COO for contractors doing $1M–$10M/year.',
  alternates: { canonical: 'https://www.contractorscoo.com/offer' },
  openGraph: {
    title: 'The 90-Day COO Install — What You Get | Contractors COO',
    description:
      'Not advisory. Not a license. A contractor-specific install: meeting architecture, ownership matrix, KPI scoreboard, decision standards, and field SOPs.',
    url: 'https://www.contractorscoo.com/offer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 90-Day COO Install — What You Get',
    description: 'Exact deliverables, who it\'s built for, and how the Operating Foundation works. Fixed-scope fractional COO for contractors doing $1M–$10M/year.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Offer', item: 'https://www.contractorscoo.com/offer' },
  ],
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
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Offer overview">
        <div className="container-inner">
          <span className="eyebrow">The Offer</span>
          <h1 className="text-display offer-hero-title">
            The 90-Day COO Install
          </h1>
          <p className="text-subhead offer-hero-subhead">
            A fixed-scope operational engagement. Not coaching. Not an ongoing advisory relationship.
            Not a generic framework applied to any business.
            A contractor-specific operating install — built with your team, executed in 90 days,
            owned by your business when we step back.
          </p>
          <div className="offer-actions-row">
            <BookingButton source="offer_hero" />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
          <p className="offer-hero-note">
            30 minutes. We scope your operation and tell you exactly what changes.
          </p>
        </div>
      </section>

      {/* ── THE OPERATING FOUNDATION FRAMEWORK ──── */}
      <section className="section" aria-labelledby="framework-heading">
        <div className="container-inner">
          <span className="eyebrow">The Framework</span>
          <h2 id="framework-heading" className="text-headline offer-framework-title">
            The Operating Foundation
          </h2>
          <p className="text-subhead offer-framework-subhead">
            Five pillars that define how a contractor business operates week to week.
            Each one is designed, installed, and stabilized over 90 days.
          </p>
          <p className="offer-framework-note">
            Not a generic framework licensed from a methodology. Built around your business,
            your team, and how contractors actually operate.
          </p>

          <div className="offer-col-stack">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="offer-pillar-row md:grid-cols-[2rem_1fr_2fr]"
              >
                {/* Number */}
                <span className="offer-num">
                  {p.num}
                </span>

                {/* Name + summary */}
                <div>
                  <h3 className="offer-item-title offer-item-title-tight">
                    {p.name}
                  </h3>
                  <p className="offer-item-summary">
                    {p.summary}
                  </p>
                </div>

                {/* Detail */}
                <p className="offer-body-copy">
                  {p.detail}
                </p>
              </div>
            ))}
            <div className="offer-divider" />
          </div>

          <div className="offer-links-row">
            <Link href="/contractor-operations-system" className="btn-ghost">
              The five-pillar operations system →
            </Link>
            <Link href="/owner-bottleneck" className="btn-ghost">
              Fix the owner bottleneck →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ─────────────────────────── */}
      <section className="section" aria-labelledby="fit-heading">
        <div className="container-inner">
          <div className="offer-fit-grid md:grid-cols-2">
            {/* Good fit */}
            <div>
              <span className="eyebrow">Built for</span>
              <h2 id="fit-heading" className="text-headline offer-fit-title">
                This is built for contractors who know the problem is internal.
              </h2>
              <ul className="offer-list">
                {goodFit.map((item) => (
                  <li key={item} className="offer-list-item">
                    <span className="offer-bullet-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div className="offer-notfit md:border-t-0 md:border-l md:border-l-line md:pl-10">
              <span className="eyebrow offer-eyebrow-muted">Not a fit</span>
              <h2 className="text-headline offer-fit-title">
                We&apos;re direct about who this isn&apos;t for.
              </h2>
              <ul className="offer-list">
                {notFit.map((item) => (
                  <li key={item} className="offer-list-item">
                    <span className="offer-bullet-x">✕</span>
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
          <h2 id="deliverables-heading" className="text-headline offer-deliverables-title">
            Seven deliverables. No ambiguity about what we build.
          </h2>
          <p className="text-subhead offer-deliverables-subhead">
            Every item is built with your team — not presented as a document on the last day.
          </p>

          <div className="offer-col-stack">
            {deliverables.map((d) => (
              <div
                key={d.num}
                className="offer-deliverable-row"
              >
                <span className="offer-deliverable-num">
                  {d.num}
                </span>
                <div>
                  <h3 className="offer-item-title">
                    {d.title}
                  </h3>
                  <p className="offer-body-copy">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
            <div className="offer-divider" />
          </div>
        </div>
      </section>

      {/* ── PHASE 3: DIFFERENTIATION — WHY NOT HIRE INTERNALLY ── */}
      <section className="section" aria-labelledby="compare-heading">
        <div className="container-inner">
          <span className="eyebrow">The Comparison</span>
          <h2 id="compare-heading" className="text-headline offer-compare-title">
            Why not just hire an operations manager?
          </h2>
          <p className="text-subhead offer-compare-subhead">
            It&apos;s the most common alternative. Here&apos;s the direct answer.
          </p>

          <div className="offer-compare-grid md:grid-cols-3">
            {/* Full-time hire */}
            <div className="card offer-compare-card">
              <p className="offer-kicker-muted offer-kicker-spaced">
                Full-time ops manager
              </p>
              <ul className="offer-compare-list">
                {[
                  '$80K–$140K salary, plus benefits',
                  '60–90 days to find and onboard',
                  '90 more days before they understand your operation',
                  'If they leave, the system leaves with them',
                  'You\'re managing another direct report',
                  'Generalist — not built for contractor operations',
                ].map((item) => (
                  <li key={item} className="offer-compare-item">
                    <span className="offer-bullet-muted">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business coaching / ongoing consulting */}
            <div className="card offer-compare-card">
              <p className="offer-kicker-muted offer-kicker-spaced">
                Coaching or ongoing consulting
              </p>
              <ul className="offer-compare-list">
                {[
                  'No defined scope or end date',
                  'You pay for presence, not output',
                  'Generic frameworks applied to any industry',
                  'The consultant learns your business — then you stay dependent',
                  'Accountability loops, not structural change',
                  'Engagement continues as long as budget allows',
                ].map((item) => (
                  <li key={item} className="offer-compare-item">
                    <span className="offer-bullet-muted">–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* The install */}
            <div className="card offer-compare-card-accent">
              <p className="offer-kicker-accent offer-kicker-spaced">
                The 90-Day COO Install
              </p>
              <ul className="offer-compare-list">
                {[
                  'Fixed fee, fixed scope, defined end date',
                  'Operational from week one — contractor-specific from day one',
                  'System is documented and owned by your team, not by us',
                  '90 days. Then we step back. You own everything',
                  'No ongoing dependency. No management overhead',
                  'Built exclusively for contractor businesses',
                ].map((item) => (
                  <li key={item} className="offer-compare-item offer-compare-item-fg">
                    <span className="offer-bullet-check-strong">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why cadence beats personality */}
          <div className="offer-why-card">
            <p className="offer-kicker-muted">
              Why structure beats personality
            </p>
            <p className="offer-why-copy">
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
          <div className="offer-fit-grid md:grid-cols-2">
            <div>
              <span className="eyebrow">Inside 90 Days</span>
              <h2 id="changes-heading" className="text-headline offer-fit-title">
                What changes.
              </h2>
              <ul className="offer-list">
                {changes.map((item) => (
                  <li key={item} className="offer-list-item">
                    <span className="offer-dot offer-dot-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="offer-notfit md:border-t-0 md:border-l md:border-l-line md:pl-10">
              <span className="eyebrow">After 90 Days</span>
              <h2 className="text-headline offer-fit-title">
                What remains.
              </h2>
              <ul className="offer-list">
                {remains.map((item) => (
                  <li key={item} className="offer-list-item">
                    <span className="offer-dot offer-dot-dark" />
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
          <h2 id="disorder-heading" className="text-headline offer-disorder-title">
            What disorder costs your business every month.
          </h2>
          <p className="text-subhead offer-disorder-subhead">
            Most contractors compare the engagement fee to the invoice.
            The right comparison is what running without structure costs — month over month, before anything changes.
          </p>

          <div className="offer-cost-grid md:grid-cols-2">
            {/* Owner bottleneck tax */}
            <div className="card">
              <p className="offer-kicker-accent">Owner bottleneck tax</p>
              <p className="offer-body-copy offer-body-copy-tight">
                At the $2M–$8M stage, most owners spend 10–15 hours per week routing decisions that
                should be resolved at the field or office level. Material approvals, scheduling calls,
                subcontractor disputes, customer escalations — everything flows through the owner because
                there is no written threshold for what doesn&apos;t.
              </p>
              <p className="offer-emphasis-copy">
                At a conservative $150/hr effective owner rate, that&apos;s $78K–$117K/year in misapplied labor.
                The real cost is higher — because every hour spent approving a material order is an hour not
                spent on estimating, client development, or actual strategy.
              </p>
            </div>

            {/* Margin leakage */}
            <div className="card">
              <p className="offer-kicker-accent">Margin leakage</p>
              <p className="offer-body-copy offer-body-copy-tight">
                Without a live scoreboard reviewed weekly, contractors typically see job costs 30–60 days
                after the fact — after the job is already closed and the margin is already gone.
                Labor overruns, unbilled change orders, and subcontractor invoice gaps go undetected until
                month-end accounting surfaces them as a surprise.
              </p>
              <p className="offer-emphasis-copy">
                On a $3M contractor, 3% margin leakage = $90,000/year. Most contractors doing $2M–$8M
                without real-time job cost visibility are leaving 2–5% on the table. Not from bad estimating.
                From no visibility mid-job.
              </p>
            </div>

            {/* Follow-through gap */}
            <div className="card">
              <p className="offer-kicker-accent">Follow-through gap</p>
              <p className="offer-body-copy offer-body-copy-tight">
                Decisions get made in Monday&apos;s all-hands and don&apos;t reach the field until Wednesday —
                if they reach it at all. Change orders get verbal approval and never get documented.
                Subcontractor scope changes get handled by whoever answers the phone.
                Every missing follow-through is a rework event, a collections delay, or a client dispute in formation.
              </p>
              <p className="offer-emphasis-copy">
                Each untracked change order = $500–$3,000 in margin exposure.
                At two per week, that&apos;s $52K–$312K in annual margin at risk from a single operational gap.
              </p>
            </div>

            {/* Execution cost of owner departure */}
            <div className="card">
              <p className="offer-kicker-accent">Business fragility</p>
              <p className="offer-body-copy offer-body-copy-tight">
                When the system lives in the owner&apos;s head, any disruption to the owner — illness,
                vacation, a family emergency, an out-of-town project — disrupts the entire operation.
                Field leads can&apos;t make decisions. Office staff can&apos;t resolve disputes.
                The business doesn&apos;t slow down. It stops.
              </p>
              <p className="offer-emphasis-copy">
                A business that requires the owner present to function is not an asset.
                It&apos;s an obligation. Every week without a written operating system is a week it stays that way.
              </p>
            </div>
          </div>

          {/* The ROI summary */}
          <div className="offer-math-card">
            <p className="offer-kicker-accent offer-kicker-spaced">
              The math
            </p>
            <p className="offer-why-copy offer-body-copy-tight">
              For a contractor doing $3M–$5M with no live scoreboard, no decision threshold, and a weekly
              leadership session that produces no closed items: conservative disorder cost runs $150K–$300K/year
              in combined owner time, margin leakage, and rework — before you account for the revenue that
              isn&apos;t being pursued because the owner has no capacity to sell.
            </p>
            <p className="offer-math-emphasis">
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
          <h2 id="pricing-heading" className="text-headline offer-pricing-title">
            Priced for the cost of not having structure.
          </h2>
          <p className="text-subhead offer-pricing-subhead">
            The 90-Day Install is positioned in the range most contractors at this revenue stage consider
            one to two months of operations overhead. The comparison point is not the service fee —
            it&apos;s what owner bottleneck, margin leakage, and execution gaps cost monthly when nothing changes.
          </p>

          <div className="card offer-pricing-card">
            <p className="offer-kicker-muted offer-kicker-spaced">
              How we scope + price
            </p>
            <ul className="offer-compare-list">
              {[
                'We scope before we price — team size and complexity affect the engagement',
                'Fixed-scope structure means no scope creep and no cost ambiguity mid-engagement',
                'No retainer deposit until we\'re aligned on scope and expected outcomes',
                'Pricing is covered on the discovery call — not published because context matters',
              ].map((item) => (
                <li key={item} className="offer-list-item">
                  <span className="offer-bullet-check-strong">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <BookingButton label="Start with a Discovery Call" source="offer_pricing" />
          <p className="offer-hero-note">
            30 minutes. We assess your operation and tell you exactly what changes — and what it costs.
          </p>
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
              Need margin clarity before operations? Start with{' '}
              <a href="https://www.contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=offer" target="_blank" rel="noopener noreferrer" className="proof-ecosystem-link">
                Contractor Job Costing
              </a>.
              If your fundamentals — entity, accounting, insurance — aren&apos;t set, start with{' '}
              <a href="https://www.contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=offer" target="_blank" rel="noopener noreferrer" className="proof-ecosystem-link">
                Contractor Setup Install
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section aria-labelledby="offer-cta-heading" className="proof-final-cta-section">
        <div className="container-inner proof-final-cta-inner">
          <h2
            id="offer-cta-heading"
            className="offer-final-cta-title"
          >
            Book a call. Get a straight answer on both sides.
          </h2>
          <p className="offer-final-cta-copy">
            We assess your current operating structure on the first call and tell you
            what the install involves — and whether it&apos;s the right fit for where you are.
          </p>
          <BookingButton source="offer_footer_cta" />
        </div>
      </section>
    </>
  );
}
