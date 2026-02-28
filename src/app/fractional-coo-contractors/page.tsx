import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Fractional COO for Contractors — 90 Days',
  description:
    'Fractional COO built for contractor businesses doing $1M–$10M. 90-day fixed-scope install: meeting cadence, KPI scoreboard, role ownership, and field SOPs.',
  alternates: { canonical: 'https://www.contractorscoo.com/fractional-coo-contractors' },
  openGraph: {
    title: 'Fractional COO for Contractors — 90-Day Operational Install',
    description:
      'Not advisory. Not coaching. A 90-day operational install designed for GCs, trades, and home service contractors at the growth stage.',
    url: 'https://www.contractorscoo.com/fractional-coo-contractors',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional COO for Contractors — 90 Days',
    description: 'Fractional COO built for contractor businesses doing $1M–$10M. 90-day fixed-scope install: meeting cadence, KPI scoreboard, role ownership, and field SOPs.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional COO for Contractors — 90-Day Operational Install',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A 90-day fixed-scope fractional COO engagement built for contractor businesses doing $1M–$10M/year. Installs meeting architecture, role ownership, KPI scoreboard, and decision standards.',
  areaServed: 'US',
  serviceType: 'Fractional COO',
  url: 'https://www.contractorscoo.com/fractional-coo-contractors',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a fractional COO do for a contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional COO installs the operational structure your business is missing — meeting cadence, role ownership, KPI tracking, and decision standards — without the cost of a full-time executive hire. For contractors, this means building systems specific to field-office coordination, job costing visibility, and crew accountability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a fractional COO cost for a contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 90-day install is typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. The fee is fixed-scope — no hourly billing, no indefinite retainer. Specific pricing is covered on the discovery call because team size and complexity affect the engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a fractional COO different from an operations manager?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An operations manager is a full-time employee who manages daily operations — $80K–$140K/year before benefits, 6+ months to become effective, and the system leaves when they leave. A fractional COO builds the operating system itself: documented processes, meeting structures, and accountability frameworks that your existing team runs after the engagement ends.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this the same as EOS, Traction, or business coaching?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. EOS and coaching programs are ongoing facilitation models — quarterly sessions, annual retreats, indefinite fees. We install a contractor-specific operating system in 90 days and hand it off. The system runs without us. We also do not coach. We build operational structure that functions whether or not anyone is motivated on a given week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size contractor needs a fractional COO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams doing $1M–$10M in annual revenue with 5–30 field and office staff. Owner-operated enough that the owner is still the primary constraint. Developed enough that the lack of structure is costing real money in owner time, margin leakage, and missed follow-through.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the 90-day fractional COO engagement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own everything — every document, agenda template, scoreboard, decision threshold, and SOP. Nothing leaves with us. The system is designed to run on cadence, not on continued outside involvement. An optional monthly operating partner retainer is available if you want ongoing support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with subcontractors or only general contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with GCs, trade contractors (electrical, plumbing, HVAC, mechanical), and home service operators. The install is adapted to your specific trade, team structure, and operational complexity. The framework is the same — the implementation is built around how your business actually operates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a fractional COO work remotely with a contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement is designed to work with contractors nationwide. Weekly working sessions run virtually. The system install — meeting architecture, scoreboard, ownership matrix — is built into your existing tools and workflows, not dependent on physical presence.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Fractional COO', item: 'https://www.contractorscoo.com/fractional-coo-contractors' },
  ],
};

const deliverables = [
  { title: 'Meeting Architecture', body: 'A fixed weekly leadership session with closed-loop follow-up. Field lead, office lead, owner. Runs under an hour. Every item closes with a named owner.' },
  { title: 'Ownership Matrix', body: 'Written role ownership covering every function — estimating, field coordination, purchasing, billing. No shared lanes. No ambiguity about who owns what.' },
  { title: 'KPI Scoreboard', body: 'Eight contractor-specific metrics reviewed weekly: billings, job margin, labor vs. estimate, AR aging, pipeline, collections, completion rate, and one owner-defined indicator.' },
  { title: 'Decision Standards', body: 'Written thresholds defining what your field lead handles, what your office resolves, and what escalates to you. Paired with a follow-through protocol.' },
  { title: 'Field Process Set', body: 'SOPs for your highest-leverage repeatable operations: job startup, sub coordination, change orders, customer escalation. Written to train a new hire from.' },
  { title: 'Leadership Coaching', body: 'Weekly working sessions throughout the full 90 days. We build the system alongside your team, run the first sessions with you, and coach the model into your routine.' },
];

const faqs = [
  {
    q: 'What does a fractional COO do for a contractor?',
    a: 'A fractional COO installs the operational structure your business is missing — meeting cadence, role ownership, KPI tracking, and decision standards — without the cost of a full-time executive hire. For contractors, this means building systems specific to field-office coordination, job costing visibility, and crew accountability.',
  },
  {
    q: 'How much does a fractional COO cost for a contractor?',
    a: 'The 90-day install is typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. The fee is fixed-scope — no hourly billing, no indefinite retainer. Specific pricing is covered on the discovery call because team size and complexity affect the engagement.',
  },
  {
    q: 'How is a fractional COO different from an operations manager?',
    a: 'An operations manager is a full-time employee who manages daily operations — $80K–$140K/year before benefits, 6+ months to become effective, and the system leaves when they leave. A fractional COO builds the operating system itself: documented processes, meeting structures, and accountability frameworks that your existing team runs after the engagement ends.',
  },
  {
    q: 'Is this the same as EOS, Traction, or business coaching?',
    a: 'No. EOS and coaching programs are ongoing facilitation models — quarterly sessions, annual retreats, indefinite fees. We install a contractor-specific operating system in 90 days and hand it off. The system runs without us. We do not coach. We build operational structure that functions whether or not anyone is motivated on a given week.',
  },
  {
    q: 'What size contractor needs a fractional COO?',
    a: 'Teams doing $1M–$10M in annual revenue with 5–30 field and office staff. Owner-operated enough that the owner is still the primary constraint. Developed enough that the lack of structure is costing real money in owner time, margin leakage, and missed follow-through.',
  },
  {
    q: 'What happens after the 90-day engagement?',
    a: 'You own everything — every document, agenda template, scoreboard, decision threshold, and SOP. Nothing leaves with us. The system is designed to run on cadence, not on continued outside involvement. An optional monthly operating partner retainer is available if you want ongoing support.',
  },
  {
    q: 'Do you work with subcontractors or only general contractors?',
    a: 'We work with GCs, trade contractors (electrical, plumbing, HVAC, mechanical), and home service operators. The install is adapted to your specific trade, team structure, and operational complexity.',
  },
  {
    q: 'Can this work remotely?',
    a: 'Yes. The engagement is designed to work with contractors nationwide. Weekly working sessions run virtually. The system install is built into your existing tools and workflows, not dependent on physical presence.',
  },
];

export default function FractionalCOOPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Fractional COO overview">
        <div className="container-inner">
          <span className="eyebrow">Fractional COO · For Contractors Doing $1M–$10M</span>
          <h1 className="text-display fcoo-hero-title">
            A Fractional COO Built for Contractor Businesses
          </h1>
          <p className="text-subhead fcoo-hero-subhead">
            Not a generic operations consultant applied to construction.
            A 90-day fixed-scope install designed specifically for GCs, trades, and home service
            contractors — built with your team, owned by your business when we step back.
          </p>
          <div className="fcoo-actions">
            <BookingButton label="Book a Discovery Call" source="fractional_coo_hero" />
            <Link href="/offer" className="btn-ghost">
              See full deliverables →
            </Link>
          </div>
          <p className="fcoo-hero-note">
            30 minutes. We assess your operation and tell you exactly what changes.
          </p>
        </div>
      </section>

      {/* ── WHAT A FRACTIONAL COO DOES ──────────── */}
      <section className="section" aria-labelledby="what-heading">
        <div className="container-inner">
          <span className="eyebrow">What You Get</span>
          <h2 id="what-heading" className="text-headline fcoo-what-title">
            Six operating systems installed into your business in 90 days.
          </h2>
          <p className="text-subhead fcoo-what-subhead">
            Fixed scope. Fixed fee. Contractor-specific from day one.
          </p>

          <div className="fcoo-card-grid md:grid-cols-2">
            {deliverables.map((d) => (
              <div key={d.title} className="card">
                <h3 className="fcoo-card-title">
                  {d.title}
                </h3>
                <p className="fcoo-card-copy">
                  {d.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ────────────────────────── */}
      <section className="section" aria-labelledby="fit-heading">
        <div className="container-inner">
          <div className="fcoo-fit-grid md:grid-cols-2">
            <div>
              <span className="eyebrow">Built For</span>
              <h2 id="fit-heading" className="text-headline fcoo-fit-title">
                Contractors who know the problem is internal.
              </h2>
              <ul className="fcoo-list">
                {[
                  'General contractor, trade contractor, or home service business',
                  '$1M–$10M in annual revenue',
                  'Owner-led team with 5–30 field and office staff',
                  'Revenue growing faster than operating capacity',
                  'Owner is the bottleneck on daily decisions',
                  'Want a system, not a coach or accountability partner',
                ].map((item) => (
                  <li key={item} className="fcoo-list-item">
                    <span className="fcoo-bullet-check">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="fcoo-notfit md:border-t-0 md:border-l md:border-l-line md:pl-10">
              <span className="eyebrow fcoo-eyebrow-muted">Not a fit</span>
              <h2 className="text-headline fcoo-fit-title">
                We&apos;re direct about who this isn&apos;t for.
              </h2>
              <ul className="fcoo-list">
                {[
                  'Below $750K in revenue — structure isn\'t the constraint yet',
                  'Looking for strategic advisory without implementation',
                  'Not willing to change how leadership meetings run',
                  'Sole proprietor with no team to install into',
                  'Already running a disciplined operating system',
                ].map((item) => (
                  <li key={item} className="fcoo-list-item">
                    <span className="fcoo-bullet-x">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────── */}
      <section className="section" aria-labelledby="how-heading">
        <div className="container-inner">
          <span className="eyebrow">The Timeline</span>
          <h2 id="how-heading" className="text-headline fcoo-how-title">
            Three phases. 90 days. Fixed scope.
          </h2>

          <div className="fcoo-phase-wrap">
            <div className="phase-item">
              <div className="phase-number">01</div>
              <div>
                <p className="fcoo-phase-kicker">
                  Days 1–30
                </p>
                <h3 className="fcoo-phase-title">
                  Diagnose + Design
                </h3>
                <p className="fcoo-phase-copy">
                  We audit your current operating structure — how decisions move, how jobs get owned, where accountability breaks down. You get a written install plan specific to your business.
                </p>
              </div>
            </div>

            <div className="phase-item">
              <div className="phase-number">02</div>
              <div>
                <p className="fcoo-phase-kicker">
                  Days 31–60
                </p>
                <h3 className="fcoo-phase-title">
                  Install Cadence + Accountability
                </h3>
                <p className="fcoo-phase-copy">
                  We run your first leadership sessions, activate the ownership matrix, install the scoreboard, and build decision thresholds. The system goes live with us in the room.
                </p>
              </div>
            </div>

            <div className="phase-item fcoo-phase-last">
              <div className="phase-number">03</div>
              <div>
                <p className="fcoo-phase-kicker">
                  Days 61–90
                </p>
                <h3 className="fcoo-phase-title">
                  Stabilization + Handoff
                </h3>
                <p className="fcoo-phase-copy">
                  We coach your team through the operating model, close the gaps, and lock in the rhythm. By day 90, the system runs on its own. That&apos;s the only acceptable exit condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ──────────────────────────────── */}
      <section className="section" aria-labelledby="proof-heading">
        <div className="container-inner">
          <span className="eyebrow">Outcomes</span>
          <h2 id="proof-heading" className="text-headline fcoo-proof-title">
            What actually changes in the first 90 days.
          </h2>

          <div className="fcoo-card-grid md:grid-cols-2">
            {[
              { metric: '90-min all-hands → 45-min session', result: 'Fixed operating cadence with closed-loop follow-up. Every item closes with a named owner.' },
              { metric: '~40% of owner\'s day reclaimed', result: 'Decision thresholds installed. Field leads resolve issues at the threshold level without calling the owner.' },
              { metric: '+6 margin points in one quarter', result: 'KPI scoreboard installed. Unprofitable service lines identified and restructured within 60 days.' },
              { metric: '2-week unassisted operation', result: 'Team ran the business independently while the owner traveled. Zero escalations.' },
            ].map((o) => (
              <div key={o.metric} className="card">
                <p className="fcoo-metric">
                  {o.metric}
                </p>
                <p className="fcoo-card-copy">
                  {o.result}
                </p>
              </div>
            ))}
          </div>

          <div className="fcoo-proof-link-wrap">
            <Link href="/proof" className="btn-ghost">
              Read detailed outcome examples →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline fcoo-faq-title">
            Common questions about fractional COO for contractors.
          </h2>

          <div className="fcoo-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className="fcoo-faq-item">
                <h3 className="fcoo-faq-question">
                  {faq.q}
                </h3>
                <p className="fcoo-faq-answer">
                  {faq.a}
                </p>
              </div>
            ))}
            <div className="fcoo-divider" />
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ──────────────────────────── */}
      <section className="section" aria-label="Related services">
        <div className="container-inner fcoo-faq-wrap">
          <div className="fcoo-ecosystem-card">
            <p className="fcoo-ecosystem-kicker">
              Before the operations install
            </p>
            <p className="fcoo-ecosystem-copy">
              If your fundamentals — entity structure, accounting foundation, insurance, and licensing — aren&apos;t set,
              start with{' '}
              <a href="https://www.contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network" target="_blank" rel="noopener noreferrer" className="fcoo-ecosystem-link">
                Contractor Setup Install
              </a>.
              If you need margin clarity first, install{' '}
              <a href="https://www.contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network" target="_blank" rel="noopener noreferrer" className="fcoo-ecosystem-link">
                Contractor Job Costing
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────── */}
      <section className="section" aria-label="Related pages">
        <div className="container-inner">
          <div className="fcoo-actions">
            <Link href="/fractional-coo-vs-eos" className="btn-ghost">
              Fractional COO vs EOS →
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
      <section aria-labelledby="cta-heading" className="fcoo-final-cta-section">
        <div className="container-inner fcoo-final-cta-inner">
          <h2
            id="cta-heading"
            className="fcoo-final-cta-title"
          >
            Find out what the install looks like for your operation.
          </h2>
          <p className="fcoo-final-cta-copy">
            30-minute discovery call. We assess your current structure and tell you exactly
            what changes — and whether it&apos;s the right fit.
          </p>
          <BookingButton label="Book a Discovery Call" source="fractional_coo_footer_cta" />
          <p className="fcoo-final-cta-note">
            Straight assessment. No obligation. No boilerplate sales process.
          </p>
        </div>
      </section>
    </>
  );
}
