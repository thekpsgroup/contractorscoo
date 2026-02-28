import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contractor Operations System — 90 Days',
  description:
    'The operating system your contractor business is missing. Meeting cadence, ownership matrix, KPI scoreboard, and decision standards — installed in 90 days.',
  alternates: { canonical: 'https://www.contractorscoo.com/contractor-operations-system' },
  openGraph: {
    title: 'Contractor Operations System — Five-Pillar Install for Contractors',
    description:
      'Five-pillar operating system built for contractor businesses at the $1M–$10M stage. Fixed-scope 90-day install. Owned by your team when we step back.',
    url: 'https://www.contractorscoo.com/contractor-operations-system',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Operations System — 90 Days',
    description: 'The operating system your contractor business is missing. Meeting cadence, ownership matrix, KPI scoreboard, and decision standards — installed in 90 days.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'The Operating Foundation — Contractor Operations System',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A five-pillar operating system designed for contractor businesses. Meeting Architecture, Ownership Matrix, KPI Scoreboard, Decision Standards, and Field Process Set — installed in 90 days.',
  areaServed: 'US',
  serviceType: 'Contractor Operations System',
  url: 'https://www.contractorscoo.com/contractor-operations-system',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a contractor operations system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A contractor operations system is the documented infrastructure that defines how your business runs week to week — how decisions get made, who owns what, how you track performance, and how information moves between field and office. Without one, everything routes through the owner by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do contractors need an operations system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most contractors past $1M–$2M have grown faster than their management infrastructure. The result: owner bottleneck, margin leakage from invisible job costs, meetings that produce no outcomes, and a team that stalls when the owner is unavailable. An operations system fixes the structure, not the people.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is this the same as EOS or Traction for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. EOS is a generic business operating framework with ongoing facilitation requirements. The Operating Foundation is built specifically for contractor businesses — field-office coordination, job costing visibility, crew accountability. It installs in 90 days and runs without ongoing outside involvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to install an operations system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 days. Phase 1 (Days 1–30): diagnose and design. Phase 2 (Days 31–60): install cadence, scoreboard, and ownership matrix. Phase 3 (Days 61–90): stabilize the system and coach your team until it holds independently.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a contractor operations system include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five pillars: (1) Meeting Architecture — a structured weekly leadership session. (2) Ownership Matrix — written role assignments for every function. (3) KPI Scoreboard — 8 contractor-specific metrics reviewed weekly. (4) Decision Standards — thresholds for what gets decided where. (5) Field Process Set — SOPs for your highest-leverage operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we need to use specific software?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Operating Foundation is built on top of whatever tools you already use — your job costing system, accounting software, CRM, or field management platform. We do not require you to adopt new software. The system is a management structure, not a technology product.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Operations System', item: 'https://www.contractorscoo.com/contractor-operations-system' },
  ],
};

const pillars = [
  {
    num: '01',
    name: 'Meeting Architecture',
    body: 'A structured weekly leadership session with a fixed agenda, closed-loop follow-up, and clear decision outputs. Runs under an hour. Every item closes with a named owner.',
  },
  {
    num: '02',
    name: 'Ownership Matrix',
    body: 'Written role ownership covering every function: estimating, field coordination, purchasing, client management, billing. Single owner per function. No overlap. No undefined lanes.',
  },
  {
    num: '03',
    name: 'KPI Scoreboard',
    body: 'Eight contractor-specific metrics reviewed weekly — billings vs. target, job margin by lead, labor vs. estimate, AR aging, pipeline, collections, completion rate, and one owner-defined indicator.',
  },
  {
    num: '04',
    name: 'Decision Standards',
    body: 'Written thresholds: what your field lead handles, what your office resolves, what escalates to the owner. Paired with a follow-through protocol that eliminates recycled discussions.',
  },
  {
    num: '05',
    name: 'Field Process Set',
    body: 'SOPs for your highest-leverage repeatable operations: job startup, sub coordination, change orders, customer escalation. Written to train a new hire from — not to satisfy a checklist.',
  },
];

const faqs = [
  {
    q: 'What is a contractor operations system?',
    a: 'A contractor operations system is the documented infrastructure that defines how your business runs week to week — how decisions get made, who owns what, how you track performance, and how information moves between field and office. Without one, everything routes through the owner by default.',
  },
  {
    q: 'Why do contractors need an operations system?',
    a: 'Most contractors past $1M–$2M have grown faster than their management infrastructure. The result: owner bottleneck, margin leakage from invisible job costs, meetings that produce no outcomes, and a team that stalls when the owner is unavailable. An operations system fixes the structure, not the people.',
  },
  {
    q: 'Is this the same as EOS or Traction?',
    a: 'No. EOS is a generic business operating framework with ongoing facilitation. The Operating Foundation is built specifically for contractor businesses — field-office coordination, job costing visibility, crew accountability. It installs in 90 days and runs without ongoing outside involvement.',
  },
  {
    q: 'How long does it take to install?',
    a: '90 days. Phase 1 (Days 1–30): diagnose and design. Phase 2 (Days 31–60): install cadence, scoreboard, and ownership matrix. Phase 3 (Days 61–90): stabilize the system and coach your team until it holds independently.',
  },
  {
    q: 'What does an operations system include?',
    a: 'Five pillars: (1) Meeting Architecture. (2) Ownership Matrix. (3) KPI Scoreboard. (4) Decision Standards. (5) Field Process Set. Each is designed, installed, and stabilized over 90 days — specific to your team, your trade, and your stage.',
  },
  {
    q: 'Do we need to use specific software?',
    a: 'No. The Operating Foundation is built on top of whatever tools you already use. We do not require new software. The system is a management structure, not a technology product.',
  },
  {
    q: 'What happens after 90 days?',
    a: 'You own everything — every document, agenda template, scoreboard, decision threshold, and SOP. Nothing leaves with us. The system runs on cadence, not on continued outside involvement.',
  },
  {
    q: 'What does this cost?',
    a: 'The engagement is fixed-scope and typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. We scope before we price because team size and complexity affect the engagement. Specifics are covered on the discovery call.',
  },
];

export default function ContractorOperationsSystemPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Operations system overview">
        <div className="container-inner">
          <span className="eyebrow">The Operating Foundation · 90-Day Install</span>
          <h1 className="text-display growing-hero-title">
            The Operations System Your Contractor Business Is Missing
          </h1>
          <p className="text-subhead growing-hero-subhead">
            Revenue grew. The operating structure didn&apos;t.
            The fix is not more people or more software.
            It&apos;s a five-pillar operating system built for how contractors actually run — installed in 90 days.
          </p>
          <div className="growing-actions-row">
            <BookingButton label="Book a Discovery Call" source="ops_system_hero" />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
          <p className="growing-hero-note">
            30 minutes. We assess your current structure and tell you what the install involves.
          </p>
        </div>
      </section>

      {/* ── THE FIVE PILLARS ────────────────────── */}
      <section className="section" aria-labelledby="pillars-heading">
        <div className="container-inner">
          <span className="eyebrow">Five Pillars</span>
          <h2 id="pillars-heading" className="text-headline growing-section-title">
            The Operating Foundation
          </h2>
          <p className="text-subhead growing-section-subhead">
            Not a generic framework licensed from a methodology.
            Built around your business, your team, and how contractors actually operate.
          </p>

          <div className="ops-pillars-wrap">
            {pillars.map((p) => (
              <div key={p.num} className="ops-pillar-item">
                <span className="ops-pillar-num">
                  {p.num}
                </span>
                <div>
                  <h3 className="growing-item-title">
                    {p.name}
                  </h3>
                  <p className="growing-body-copy">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
            <div className="growing-divider" />
          </div>

          <div className="growing-links-row">
            <Link href="/offer" className="btn-ghost">
              See all seven deliverables →
            </Link>
            <Link href="/owner-bottleneck" className="btn-ghost">
              Fix the owner bottleneck →
            </Link>
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ──────────────────────── */}
      <section className="section" aria-label="Book a call">
        <div className="container-inner growing-mid-cta-inner">
          <div className="ops-mid-cta-card">
            <p className="ops-mid-cta-title">
              Ready to see what the install looks like for your business?
            </p>
            <p className="ops-mid-cta-copy">
              30 minutes. We assess your current structure and tell you exactly what changes.
            </p>
            <BookingButton label="Book a Discovery Call" source="ops_system_mid" />
          </div>
        </div>
      </section>

      {/* ── THE COST OF NOT HAVING IT ───────────── */}
      <section className="section" aria-labelledby="cost-heading">
        <div className="container-inner">
          <span className="eyebrow">The Real Cost</span>
          <h2 id="cost-heading" className="text-headline ops-cost-title">
            What running without an operations system costs every month.
          </h2>

          <div className="ops-cost-grid md:grid-cols-2">
            <div className="card">
              <p className="ops-cost-kicker">
                Owner bottleneck tax
              </p>
              <p className="ops-cost-copy">
                10–15 hours per week routing decisions that should resolve at the field or office level.
                At $150/hr effective rate: $78K–$117K/year in misapplied labor.
              </p>
            </div>
            <div className="card">
              <p className="ops-cost-kicker">
                Margin leakage
              </p>
              <p className="ops-cost-copy">
                Without a live scoreboard, job costs surface 30–60 days after the fact.
                On a $3M contractor, 3% margin leakage = $90,000/year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM ──────────────────────────── */}
      <section className="section" aria-label="Related services">
        <div className="container-inner growing-ecosystem-inner">
          <div className="growing-ecosystem-card">
            <p className="growing-ecosystem-kicker">
              The full foundation
            </p>
            <p className="growing-ecosystem-copy">
              If you need margin clarity before operations,
              start with{' '}
              <a href="https://www.contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network" target="_blank" rel="noopener noreferrer" className="growing-ecosystem-link">
                Contractor Job Costing
              </a>.
              If your fundamentals (entity, accounting, insurance) aren&apos;t set, start with{' '}
              <a href="https://www.contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral&utm_campaign=network" target="_blank" rel="noopener noreferrer" className="growing-ecosystem-link">
                Contractor Setup Install
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline growing-faq-title">
            Questions about contractor operations systems.
          </h2>

          <div className="growing-faq-wrap">
            {faqs.map((faq, i) => (
              <div key={i} className="growing-faq-item">
                <h3 className="growing-faq-question">
                  {faq.q}
                </h3>
                <p className="growing-faq-answer">
                  {faq.a}
                </p>
              </div>
            ))}
            <div className="growing-divider" />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section aria-labelledby="cta-heading" className="growing-final-cta-section">
        <div className="container-inner growing-final-cta-inner">
          <h2 id="cta-heading" className="growing-final-cta-title">
            See what the operating system looks like for your business.
          </h2>
          <p className="growing-final-cta-copy">
            30-minute discovery call. We assess your current structure and tell you exactly
            what the install involves — and whether it&apos;s the right fit.
          </p>
          <BookingButton label="Book a Discovery Call" source="ops_system_footer_cta" />
        </div>
      </section>
    </>
  );
}
