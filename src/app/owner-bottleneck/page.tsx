import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Fix the Owner Bottleneck — For Contractors',
  description:
    'Your contractor business stalls when you leave. Install decision thresholds, role ownership, and accountability systems so your team operates without you.',
  alternates: { canonical: 'https://www.contractorscoo.com/owner-bottleneck' },
  openGraph: {
    title: 'Break the Owner Bottleneck — Contractor Delegation System',
    description:
      'Stop being the only person who can make decisions. 90-day install: ownership matrix, decision thresholds, and operating cadence for contractor teams.',
    url: 'https://www.contractorscoo.com/owner-bottleneck',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Owner Bottleneck Resolution — Contractor Delegation System',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A structured delegation system for contractor businesses where the owner is the bottleneck. Decision thresholds, ownership matrix, and accountability cadence — installed in 90 days.',
  areaServed: 'US',
  serviceType: 'Contractor Operations System',
  url: 'https://www.contractorscoo.com/owner-bottleneck',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is the owner always the bottleneck in a contractor business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because decision authority was never formally delegated. Most contractors grew from owner-operator to team without writing down who owns what. The team defaults to routing everything through the owner — not because they lack competence, but because the system never defined their authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you fix the owner bottleneck in a contractor business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By installing three things: (1) An Ownership Matrix that assigns every business function to a named owner. (2) Decision Standards that define what gets decided at the field level, office level, and owner level — with dollar and complexity thresholds. (3) A weekly leadership session where those standards are reviewed and adjusted as the team builds confidence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a decision threshold for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A decision threshold is a written standard that defines which decisions your field lead handles independently, which your office resolves, and which escalate to the owner. It includes dollar amounts, scope boundaries, and specific examples. Without one, every decision routes to the owner by default.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my team actually handle decisions without me?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost certainly yes. In most contractor businesses we work with, the field leads and office managers are capable people operating without clear authority. When you define the boundaries — and back them up with a weekly review cadence — the team steps into the role within 30–60 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to break the owner bottleneck?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '90 days for the full system install. Most owners see meaningful day-to-day relief within 45–60 days as decision thresholds take hold and the weekly cadence stabilizes. Full independence — where the team operates for 1–2 weeks without the owner — typically appears by the end of the engagement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an ownership matrix for a contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An ownership matrix is a written document that assigns every function in the business — estimating, field coordination, purchasing, billing, client communication, sub management — to a single named owner. It eliminates shared lanes, undefined responsibilities, and the default of routing everything to the business owner.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I just hire an operations manager instead?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An operations manager costs $80K–$140K/year, takes 6 months to become effective, and the system lives in their head. If they leave, the bottleneck returns. We build the system into your business — documented, owned by your team, and functional regardless of who is in the seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does this cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement is fixed-scope and typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. We scope before we price because team size and complexity affect the engagement. Specifics are covered on the discovery call.',
      },
    },
  ],
};

const symptoms = [
  {
    title: 'Your phone is the help desk',
    body: 'Field leads call before ordering materials. PMs route every estimate through you. Nothing moves without your sign-off — even when the person asking has been with you for years.',
  },
  {
    title: 'Two days off = a week of cleanup',
    body: 'You take a long weekend and come back to a backlog of unresolved decisions, missed change orders, and a customer escalation nobody felt authorized to handle.',
  },
  {
    title: 'Capable people acting helpless',
    body: 'Your field lead has six years of experience but still checks with you on a $300 material order. Not because he can\'t decide — because nobody ever told him he could.',
  },
  {
    title: 'Meetings that produce more meetings',
    body: 'Monday\'s session covers the same items as last week. Decisions get made verbally and never reach the field. By Friday, nobody can tell you what was resolved.',
  },
  {
    title: 'Revenue up, capacity down',
    body: 'You\'re past $2M but working more hours than when you were at $1M. The business grew. Your role didn\'t change. You\'re still doing the same job — just faster.',
  },
  {
    title: 'No one can explain how the business runs',
    body: 'If you got hit by a bus tomorrow, the operation stops. Not because your team is weak — because everything that matters lives in your head.',
  },
];

const deliverables = [
  {
    num: '01',
    title: 'Ownership Matrix',
    body: 'Written role ownership covering every function in your business — estimating, field coordination, purchasing, billing, client communication, sub management. Single owner per function. No overlap. No undefined lanes.',
  },
  {
    num: '02',
    title: 'Decision Standards',
    body: 'Written thresholds defining what your field lead handles, what your office resolves, and what escalates to you. Dollar amounts, scope boundaries, and specific examples. Reviewed and adjusted after 30 days of live operation.',
  },
  {
    num: '03',
    title: 'Meeting Architecture',
    body: 'A fixed weekly leadership session that replaces your current all-hands chaos. 8-point agenda, under an hour, every item closes with a named owner and deadline. The cadence that makes delegation hold.',
  },
  {
    num: '04',
    title: 'KPI Scoreboard',
    body: 'Eight contractor-specific metrics your team reviews weekly — without waiting for you to pull the numbers. Billings, margin, labor vs. estimate, AR aging, pipeline, and collections. Visible before Monday\'s session starts.',
  },
  {
    num: '05',
    title: 'Follow-Through Protocol',
    body: 'A closed-loop system that tracks every open item to confirmed closure. No recycled discussions. No "we\'ll follow up on that." Every decision made in session has a named owner and a deadline — and it\'s checked before the next session starts.',
  },
  {
    num: '06',
    title: 'Leadership Coaching — Full 90 Days',
    body: 'Weekly working sessions with your team throughout the install. We don\'t hand you a document and leave. We build the system alongside your people, run the first sessions with you in the room, and coach delegation until it holds without you.',
  },
];

const faqs = [
  {
    q: 'Why is the owner always the bottleneck?',
    a: 'Because decision authority was never formally delegated. Most contractors grew from owner-operator to team without writing down who owns what. The team defaults to routing everything through the owner — not because they lack competence, but because the system never defined their authority.',
  },
  {
    q: 'How do you fix the owner bottleneck?',
    a: 'By installing three things: (1) An Ownership Matrix that assigns every function to a named owner. (2) Decision Standards that define what gets decided at each level — with dollar and complexity thresholds. (3) A weekly leadership session where those standards are reviewed and adjusted as the team builds confidence.',
  },
  {
    q: 'What is a decision threshold?',
    a: 'A written standard that defines which decisions your field lead handles independently, which your office resolves, and which escalate to you. Includes dollar amounts, scope boundaries, and specific examples. Without one, every decision routes to the owner by default.',
  },
  {
    q: 'Can my team actually handle decisions without me?',
    a: 'Almost certainly. In most contractor businesses we work with, the field leads and office managers are capable people operating without clear authority. When you define the boundaries and back them with a weekly review cadence, the team steps into the role within 30–60 days.',
  },
  {
    q: 'How long does it take?',
    a: '90 days for the full system install. Most owners see meaningful day-to-day relief within 45–60 days as decision thresholds take hold. Full independence — where the team operates for 1–2 weeks without you — typically appears by the end of the engagement.',
  },
  {
    q: 'What is an ownership matrix?',
    a: 'A written document that assigns every function — estimating, field coordination, purchasing, billing, client communication, sub management — to a single named owner. Eliminates shared lanes, undefined responsibilities, and the default of routing everything to the business owner.',
  },
  {
    q: 'Why not just hire an operations manager?',
    a: 'An ops manager costs $80K–$140K/year, takes 6 months to become effective, and the system lives in their head. If they leave, the bottleneck returns. We build the system into your business — documented, owned by your team, functional regardless of who is in the seat.',
  },
  {
    q: 'What does this cost?',
    a: 'The engagement is fixed-scope and typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. We scope before we price because team size and complexity affect the engagement. Specifics are covered on the discovery call.',
  },
];

export default function OwnerBottleneckPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Owner bottleneck overview">
        <div className="container-inner">
          <span className="eyebrow">Owner Delegation · The Bottleneck Fix</span>
          <h1 className="text-display" style={{ maxWidth: '780px', marginBottom: '1.5rem' }}>
            Your Team Can Run the Business. They Just Don&apos;t Have Permission Yet.
          </h1>
          <p className="text-subhead" style={{ maxWidth: '580px', marginBottom: '2.5rem' }}>
            Every decision routes through you — not because your team is weak, but because authority
            was never defined. The fix is not hiring. It&apos;s installing a delegation system
            your people can actually operate from.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <BookingButton label="Book a Discovery Call" source="bottleneck_hero" />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted-2)', marginTop: '0.875rem' }}>
            30 minutes. We assess your decision flow and show you what gets off your desk.
          </p>
        </div>
      </section>

      {/* ── SYMPTOMS ──────────────────────────────── */}
      <section className="section" aria-labelledby="symptoms-heading">
        <div className="container-inner">
          <span className="eyebrow">The Pattern</span>
          <h2 id="symptoms-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '0.625rem' }}>
            Six signs the business runs through you — not under you.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Not personality problems. Structural ones. Every one has a fix.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              borderTop: '1px solid var(--color-line)',
            }}
            className="md:grid-cols-2"
          >
            {symptoms.map((s, i) => (
              <div
                key={s.title}
                style={{
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--color-line)',
                  paddingRight: i % 2 === 0 ? '2.5rem' : '0',
                  paddingLeft: i % 2 === 1 ? '2.5rem' : '0',
                }}
                className={i % 2 === 1 ? 'md:border-l md:border-l-line' : ''}
              >
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE COST ──────────────────────────────── */}
      <section className="section" aria-labelledby="cost-heading">
        <div className="container-inner">
          <span className="eyebrow">The Real Cost</span>
          <h2 id="cost-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '2rem' }}>
            What the owner bottleneck costs every month.
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', maxWidth: '740px' }}
            className="md:grid-cols-2"
          >
            <div className="card">
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                Owner time misapplied
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                10–15 hours per week routing decisions that should resolve at the field or office level.
                At $150/hr effective rate: $78K–$117K/year in misapplied owner labor. The real cost is higher — because
                every hour spent approving a material order is an hour not spent estimating, selling, or directing.
              </p>
            </div>
            <div className="card">
              <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: '0.75rem' }}>
                Business fragility
              </p>
              <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                When the system lives in the owner&apos;s head, any disruption — illness, vacation, a family emergency — disrupts
                the entire operation. Field leads can&apos;t decide. Office staff can&apos;t resolve.
                A business that requires the owner present to function is not an asset. It&apos;s an obligation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE INSTALL ───────────────────────── */}
      <section className="section" aria-labelledby="install-heading">
        <div className="container-inner">
          <span className="eyebrow">The Install</span>
          <h2 id="install-heading" className="text-headline" style={{ maxWidth: '600px', marginBottom: '0.625rem' }}>
            Six deliverables that transfer the operating load off your desk.
          </h2>
          <p className="text-subhead" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Not a delegation framework you read. A working system your team runs — installed in 90 days.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {deliverables.map((d) => (
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

          <div style={{ marginTop: '2rem' }}>
            <Link href="/offer" className="btn-ghost">
              See the full 90-day offer →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────── */}
      <section className="section" aria-labelledby="how-heading">
        <div className="container-inner">
          <span className="eyebrow">The Timeline</span>
          <h2 id="how-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Three phases. 90 days. You stop being the bottleneck.
          </h2>

          <div style={{ maxWidth: '640px' }}>
            <div className="phase-item">
              <div className="phase-number">01</div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.375rem' }}>
                  Days 1–30
                </p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                  Map the Bottleneck
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  We audit your current decision flow — where decisions stall, which ones should never reach you, and what authority your team already has but isn&apos;t using. You get a written install plan with specific thresholds.
                </p>
              </div>
            </div>

            <div className="phase-item">
              <div className="phase-number">02</div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.375rem' }}>
                  Days 31–60
                </p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                  Install Ownership + Thresholds
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  We activate the ownership matrix, install decision standards, and run your first structured leadership sessions. Your team starts making decisions at the threshold level — with you in the room but not at the wheel.
                </p>
              </div>
            </div>

            <div className="phase-item" style={{ paddingBottom: 0 }}>
              <div className="phase-number">03</div>
              <div>
                <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.6875rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-muted-2)', marginBottom: '0.375rem' }}>
                  Days 61–90
                </p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-fg)', marginBottom: '0.625rem', letterSpacing: '-0.01em' }}>
                  Stabilize + Step Back
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
                  We coach your team through live operation, adjust thresholds based on 30 days of data, and lock in the rhythm. By day 90, the business runs on cadence — not on your availability. That&apos;s the exit condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF ─────────────────────────────────── */}
      <section className="section" aria-labelledby="proof-heading">
        <div className="container-inner">
          <span className="eyebrow">Outcomes</span>
          <h2 id="proof-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '3rem' }}>
            What delegation looks like after 90 days.
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
            className="md:grid-cols-2"
          >
            {[
              { metric: '~40% of owner\'s day reclaimed', result: 'Decision thresholds installed. Field leads resolve issues independently. The owner stops being the first phone call for operational decisions.' },
              { metric: '2-week unassisted operation', result: 'Owner traveled internationally. Team ran the business from the fixed agenda. Zero escalations. Zero fires on return.' },
              { metric: '90-min all-hands → 45-min session', result: 'Fixed cadence with closed-loop follow-up. Every item closes with a named owner. Decisions stop recycling.' },
              { metric: '+6 margin points in one quarter', result: 'Scoreboard made job profitability visible weekly. Two underperforming service lines identified and restructured.' },
            ].map((o) => (
              <div key={o.metric} className="card">
                <p style={{ fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
                  {o.metric}
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.65 }}>
                  {o.result}
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

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline" style={{ maxWidth: '520px', marginBottom: '3rem' }}>
            Questions about breaking the owner bottleneck.
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
              If you need margin clarity before fixing delegation,
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
            Find out what gets off your desk — and how fast.
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, maxWidth: '460px', marginBottom: '2.5rem' }}>
            30-minute discovery call. We assess your current decision flow and show you
            exactly what the install changes — and whether it&apos;s the right fit.
          </p>
          <BookingButton label="Book a Discovery Call" source="bottleneck_footer_cta" />
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
            Straight assessment. No obligation. No boilerplate sales process.
          </p>
        </div>
      </section>
    </>
  );
}
