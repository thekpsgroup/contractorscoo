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

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Operations system overview">
        <div className="container-inner">
          <span className="eyebrow">The Operating Foundation · 90-Day Install</span>
          <h1 className="text-display" style={{ maxWidth: '780px', marginBottom: '1.5rem' }}>
            The Operations System Your Contractor Business Is Missing
          </h1>
          <p className="text-subhead" style={{ maxWidth: '580px', marginBottom: '2.5rem' }}>
            Revenue grew. The operating structure didn&apos;t.
            The fix is not more people or more software.
            It&apos;s a five-pillar operating system built for how contractors actually run — installed in 90 days.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton label="Book a Discovery Call" />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE FIVE PILLARS ────────────────────── */}
      <section className="section" aria-labelledby="pillars-heading">
        <div className="container-inner">
          <span className="eyebrow">Five Pillars</span>
          <h2 id="pillars-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '0.625rem' }}>
            The Operating Foundation
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Not a generic framework licensed from a methodology.
            Built around your business, your team, and how contractors actually operate.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {pillars.map((p) => (
              <div key={p.num} style={{ borderTop: '1px solid var(--color-line)', padding: '1.75rem 0', display: 'flex', gap: '1.5rem' }}>
                <span style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-accent)', flexShrink: 0, paddingTop: '0.2rem', width: '2rem' }}>
                  {p.num}
                </span>
                <div>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--color-line)' }} />
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Link href="/offer" className="btn-ghost">
              See all seven deliverables →
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE COST OF NOT HAVING IT ───────────── */}
      <section className="section" aria-labelledby="cost-heading">
        <div className="container-inner">
          <span className="eyebrow">The Real Cost</span>
          <h2 id="cost-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
            What running without an operations system costs every month.
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: '740px' }}
            className="md:grid-cols-2"
          >
            <div className="card">
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                Owner bottleneck tax
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                10–15 hours per week routing decisions that should resolve at the field or office level.
                At $150/hr effective rate: $78K–$117K/year in misapplied labor.
              </p>
            </div>
            <div className="card">
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                Margin leakage
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                Without a live scoreboard, job costs surface 30–60 days after the fact.
                On a $3M contractor, 3% margin leakage = $90,000/year.
              </p>
            </div>
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
              If you need margin clarity before operations,
              start with{' '}
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

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Questions about contractor operations systems.
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
            See what the operating system looks like for your business.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: '460px', marginBottom: '2.5rem' }}>
            30-minute discovery call. We assess your current structure and tell you exactly
            what the install involves — and whether it&apos;s the right fit.
          </p>
          <BookingButton label="Book a Discovery Call" />
        </div>
      </section>
    </>
  );
}
