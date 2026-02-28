import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contractor Growing Pains — Signs & Fixes',
  description:
    'Past $1M, contractor businesses hit predictable breakdowns: missed jobs, margin erosion, owner burnout. Here are the signs — and the 90-day structural fix.',
  alternates: { canonical: 'https://www.contractorscoo.com/contractor-growing-pains' },
  openGraph: {
    title: 'Contractor Growing Pains — Signs & Structural Fixes',
    description:
      'Revenue grows. Structure doesn\'t. Recognize the 8 signs of contractor growing pains — and the operational fix that resolves them in 90 days.',
    url: 'https://www.contractorscoo.com/contractor-growing-pains',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractor Growing Pains — Signs & Fixes',
    description: 'Past $1M, contractor businesses hit predictable breakdowns: missed jobs, margin erosion, owner burnout. Here are the signs — and the 90-day structural fix.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Contractor Growing Pains Resolution — 90-Day Operational Install',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A 90-day operational install for contractor businesses experiencing growing pains — revenue growth without structural support. Installs cadence, accountability, and delegation systems.',
  areaServed: 'US',
  serviceType: 'Contractor Operations System',
  url: 'https://www.contractorscoo.com/contractor-growing-pains',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the most common growing pains for contractors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common growing pains at the $1M–$10M stage: the owner is the bottleneck for every decision, jobs are landing but margins are shrinking, meetings produce discussion but not closure, team members have titles but no real authority, and the business cannot function for 48 hours without the owner present.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do contractor businesses plateau between $1M and $5M?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because the owner-operated model that built the business cannot scale past it. At $1M–$5M, the business has enough people and jobs that the owner can no longer personally manage every decision, but there is no system in place to replace that personal management. Revenue grows; structure does not. The gap creates margin erosion, burnout, and stalled growth.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my contractor business has growing pains or a people problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you have competent people who still route every decision through you, it is a structural problem — not a people problem. Growing pains show up as: capable team members acting dependent, decisions that stall without the owner, meetings that recycle the same items weekly, and margin erosion despite more revenue. These are system failures, not effort failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between growing pains and bad management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bad management means the wrong people or the wrong decisions. Growing pains mean the right people without the right structure. Most contractor owners at $1M–$5M have good instincts and a capable team — what they lack is an operating system that delegates authority, defines accountability, and runs without the owner at the center.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can growing pains fix themselves as we get bigger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Growing pains compound. The structural gaps that cause problems at $2M become more expensive at $5M. Without intervention, the owner works more hours, margins decline further, and the team becomes more dependent — not less. The fix requires deliberate installation of operating infrastructure: cadence, ownership, accountability, and decision standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you fix growing pains in a contractor business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By installing the operating infrastructure the business skipped during growth: (1) A weekly leadership cadence that replaces ad-hoc management. (2) An ownership matrix assigning every function to a named owner. (3) Decision thresholds that define what resolves at the field, office, and owner level. (4) A KPI scoreboard that makes performance visible. The install takes 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is hiring more people the answer to contractor growing pains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rarely. In most cases, the team you have is capable — they are just operating without structure. Hiring into a broken system adds cost without adding capacity. The fix is structure first: define roles, install accountability, build cadence. Then hire into a system that can actually absorb and develop new people.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the 90-day install cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engagement is fixed-scope and typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. We scope before we price because team size and complexity affect the engagement. Specifics are covered on the discovery call.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Growing Pains', item: 'https://www.contractorscoo.com/contractor-growing-pains' },
  ],
};

const signs = [
  {
    title: 'Revenue is up — margin is flat or declining',
    body: 'You\'re landing bigger jobs, but profit isn\'t following. Material waste, labor overruns, and change orders that never get billed eat the margin your estimator built in.',
  },
  {
    title: 'The owner is working more hours, not fewer',
    body: 'You added people to take things off your plate. Instead, you have more people to manage, more questions to answer, and more fires to put out. The business grew. Your role didn\'t change.',
  },
  {
    title: 'Decisions stall unless the owner is available',
    body: 'Your field lead texts you before ordering materials. Your office manager emails before responding to a client. The team isn\'t incapable — they were never given authority to decide.',
  },
  {
    title: 'Meetings happen, but nothing changes',
    body: 'Monday\'s team meeting covers the same items as last week. Decisions get made verbally and never reach the field. By Friday, no one can confirm what was actually resolved.',
  },
  {
    title: 'People have titles but no real ownership',
    body: 'Your "project manager" still asks you to approve schedules. Your "office manager" defers on billing disputes. The titles exist. The authority doesn\'t.',
  },
  {
    title: 'Two days off creates a week of cleanup',
    body: 'You take a long weekend and return to a stack of unresolved issues: a client complaint nobody handled, a subcontractor dispute nobody resolved, an estimate that sat waiting for your review.',
  },
  {
    title: 'Hiring feels urgent but never solves the problem',
    body: 'You hire a new PM or coordinator every cycle. They join, inherit the same chaos, and either burn out or become another person routing decisions back to you.',
  },
  {
    title: 'The business cannot function without you present',
    body: 'If you got pulled out for two weeks — injury, vacation, family emergency — the operation would stall. Not because the team is weak, but because everything critical lives in your head.',
  },
];

const stages = [
  {
    range: '$500K–$1M',
    label: 'Pre-growth',
    desc: 'Owner-operator model still works. One or two employees. Owner touches every job. Growing pains haven\'t started yet — but the foundation isn\'t being built either.',
  },
  {
    range: '$1M–$2M',
    label: 'First break',
    desc: 'First hires are in place but roles are vague. The owner is still managing every function. Decision flow hasn\'t changed even though the team has. This is where growing pains appear.',
  },
  {
    range: '$2M–$5M',
    label: 'The wall',
    desc: 'Multiple crews, an office staff, and enough complexity that the owner can\'t hold it all. Margin erosion, team frustration, and owner burnout compound. This is where most contractors stall.',
  },
  {
    range: '$5M–$10M',
    label: 'Scale or stall',
    desc: 'The business either installs real operating infrastructure or stays stuck at the same revenue with increasing cost. Hiring alone won\'t fix it. Structure does.',
  },
];

const faqs = [
  {
    q: 'What are the most common contractor growing pains?',
    a: 'Revenue growing faster than structure. The owner as the bottleneck. Meetings that recycle. Team members with titles but no authority. Margins declining despite more revenue. These are not personality problems — they are structural ones.',
  },
  {
    q: 'Why do contractor businesses plateau at $2M–$5M?',
    a: 'Because the owner-operated model that built the business cannot scale past it. At $2M–$5M you have enough people and jobs that the owner can\'t personally manage everything, but no system exists to replace that personal management.',
  },
  {
    q: 'Is this a people problem or a structure problem?',
    a: 'Almost always structure. If you have competent people who still route every decision through you, the issue is not their capability — it\'s the absence of defined authority, clear ownership, and a cadence that holds them accountable without the owner in every conversation.',
  },
  {
    q: 'Will growing pains resolve themselves as we scale?',
    a: 'No. They compound. The structural gaps that cause problems at $2M become more expensive at $5M. The owner works more hours, margins decline further, and the team becomes more dependent — not less. The fix requires deliberate installation of operating infrastructure.',
  },
  {
    q: 'How do you fix contractor growing pains?',
    a: 'By installing the operating infrastructure the business skipped during growth: a weekly leadership cadence, an ownership matrix, decision thresholds, and a KPI scoreboard. The install takes 90 days and is built alongside your team — not handed down as a document.',
  },
  {
    q: 'Is hiring more people the answer?',
    a: 'Rarely. Hiring into a broken system adds cost without adding capacity. In most cases, the team you already have is capable — they\'re just operating without structure. Fix the structure first. Then hire into a system that can absorb new people.',
  },
  {
    q: 'What\'s the difference between a coach and this install?',
    a: 'A coach gives you advice. We build the system. The deliverables are installed inside your business — ownership matrix, decision standards, KPI scoreboard, meeting architecture — and documented so they hold after we step back. No ongoing dependency.',
  },
  {
    q: 'What does the 90-day install cost?',
    a: 'Fixed-scope. Typically positioned in the range contractors at the $1M–$10M stage consider one to two months of operations overhead. We scope before we price. Specifics are covered on the discovery call.',
  },
];

export default function ContractorGrowingPainsPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Contractor growing pains overview">
        <div className="container-inner">
          <span className="eyebrow">Contractor Growing Pains</span>
          <h1 className="text-display growing-hero-title">
            Your Business Grew. Your Structure Didn&apos;t. That&apos;s the Problem.
          </h1>
          <p className="text-subhead growing-hero-subhead">
            Past $1M, every contractor hits the same wall: more revenue, more people, more
            chaos — and an owner working harder to produce the same result. The fix is not more
            effort. It&apos;s installing the operating structure you skipped during growth.
          </p>
          <div className="growing-actions-row">
            <BookingButton label="Book a Discovery Call" source="growing_pains_hero" />
            <Link href="/proof" className="btn-ghost">
              See outcome examples →
            </Link>
          </div>
          <p className="growing-hero-note">
            30 minutes. We assess your operating structure and give you a straight answer.
          </p>
        </div>
      </section>

      {/* ── THE 8 SIGNS ─────────────────────────── */}
      <section className="section" aria-labelledby="signs-heading">
        <div className="container-inner">
          <span className="eyebrow">The Signs</span>
          <h2 id="signs-heading" className="text-headline growing-section-title">
            Eight signs your contractor business has outgrown its structure.
          </h2>
          <p className="text-subhead growing-section-subhead">
            If three or more describe your current reality, it&apos;s structural — not situational.
          </p>

          <div className="growing-signs-grid md:grid-cols-2">
            {signs.map((s, i) => (
              <div
                key={s.title}
                className={`growing-sign-item ${i % 2 === 0 ? 'growing-sign-item-left' : 'growing-sign-item-right'} ${i % 2 === 1 ? 'md:border-l md:border-l-line' : ''}`}
              >
                <h3 className="growing-item-title">
                  {s.title}
                </h3>
                <p className="growing-body-copy">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IT HAPPENS ─────────────────────── */}
      <section className="section" aria-labelledby="why-heading">
        <div className="container-inner">
          <span className="eyebrow">The Root Cause</span>
          <h2 id="why-heading" className="text-headline growing-why-title">
            Growing pains are not about effort. They&apos;re about missing infrastructure.
          </h2>
          <div className="growing-why-wrap">
            <p className="growing-why-copy">
              Contractors who build to $1M–$5M outwork almost everyone. The problem is never
              effort. The problem is that the business grew faster than the management
              infrastructure needed to sustain it. Revenue scaled. Structure didn&apos;t.
            </p>
            <p className="growing-why-copy">
              The owner-operated model that got you here — personal management, verbal delegation,
              tribal knowledge — stops working the moment you have more jobs and people than one
              person can personally oversee. That gap between revenue and operations does not close
              on its own. It compounds — and it gets very expensive.
            </p>
            <p className="growing-why-copy">
              The fix is not a new hire. It is not a strategy session. It is installing the
              operating system your business was supposed to have before it reached this size:
              defined roles, structured cadence, written decision authority, and a scoreboard that
              makes performance visible without the owner pulling the numbers.
            </p>
          </div>
        </div>
      </section>

      {/* ── GROWTH STAGES ────────────────────────── */}
      <section className="section" aria-labelledby="stages-heading">
        <div className="container-inner">
          <span className="eyebrow">The Growth Map</span>
          <h2 id="stages-heading" className="text-headline growing-stages-title">
            Where growing pains hit — and when they become expensive.
          </h2>

          <div className="growing-stages-wrap">
            {stages.map((stage) => (
              <div key={stage.range} className="growing-stage-item">
                <div className="growing-stage-range-col">
                  <span className="growing-stage-range">
                    {stage.range}
                  </span>
                  <p className="growing-stage-label">
                    {stage.label}
                  </p>
                </div>
                <p className="growing-body-copy">
                  {stage.desc}
                </p>
              </div>
            ))}
            <div className="growing-divider" />
          </div>
        </div>
      </section>

      {/* ── MID-PAGE CTA ──────────────────────── */}
      <section className="section" aria-label="Book a call">
        <div className="container-inner growing-mid-cta-inner">
          <div className="growing-mid-cta-card">
            <h2 className="growing-mid-cta-title">
              Recognize three or more signs?
            </h2>
            <p className="growing-mid-cta-copy">
              30-minute discovery call. We assess your operating structure and tell you exactly
              where the breakdowns are — and whether the 90-day install is the right fix.
            </p>
            <BookingButton label="Book a Discovery Call" source="growing_pains_mid" />
          </div>
        </div>
      </section>

      {/* ── THE FIX ──────────────────────────────── */}
      <section className="section" aria-labelledby="fix-heading">
        <div className="container-inner">
          <span className="eyebrow">The Fix</span>
          <h2 id="fix-heading" className="text-headline growing-fix-title">
            The 90-day install that resolves growing pains at the structural level.
          </h2>
          <p className="text-subhead growing-fix-subhead">
            Not training. Not coaching. Not strategy. Operating infrastructure — installed alongside your team.
          </p>

          <div className="growing-fix-grid md:grid-cols-2">
            {[
              {
                num: '01',
                title: 'Weekly Leadership Cadence',
                body: 'A fixed meeting rhythm that replaces ad-hoc management. 8-point agenda, under an hour, every item closes with a named owner and a deadline. The heartbeat of the operating system.',
              },
              {
                num: '02',
                title: 'Ownership Matrix',
                body: 'Every function in the business — estimating, field ops, billing, client communication, sub management — assigned to a single named owner. No overlap. No undefined lanes.',
              },
              {
                num: '03',
                title: 'Decision Thresholds',
                body: 'Written standards defining what your field lead handles, what your office resolves, and what escalates to you. Dollar amounts, scope boundaries, specific examples. The owner stops being the first phone call.',
              },
              {
                num: '04',
                title: 'KPI Scoreboard',
                body: 'Eight contractor-specific metrics your team reviews weekly: billings, margin, labor vs. estimate, AR aging, pipeline, collections. Visible before Monday\'s session starts.',
              },
              {
                num: '05',
                title: 'Follow-Through Protocol',
                body: 'Closed-loop tracking that ensures every decision made Monday is confirmed complete by the following session. No recycled discussions. No dropped commitments.',
              },
              {
                num: '06',
                title: 'Leadership Coaching — Full 90 Days',
                body: 'We build the system alongside your people, run the first sessions with you in the room, and coach delegation until it holds without you. The people who designed the install run the install.',
              },
            ].map((d) => (
              <div key={d.num} className="card">
                <span className="growing-fix-num">
                  {d.num}
                </span>
                <h3 className="growing-item-title">
                  {d.title}
                </h3>
                <p className="growing-body-copy">
                  {d.body}
                </p>
              </div>
            ))}
          </div>

          <div className="growing-links-row">
            <Link href="/offer" className="btn-ghost">
              See the full 90-day offer →
            </Link>
            <Link href="/owner-bottleneck" className="btn-ghost">
              Fix the owner bottleneck →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline growing-faq-title">
            Questions about contractor growing pains.
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

      {/* ── ECOSYSTEM ──────────────────────────── */}
      <section className="section" aria-label="Related services">
        <div className="container-inner growing-ecosystem-inner">
          <div className="growing-ecosystem-card">
            <p className="growing-ecosystem-kicker">
              The full foundation
            </p>
            <p className="growing-ecosystem-copy">
              Need margin visibility before fixing structure? Start with{' '}
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

      {/* ── RELATED PAGES ──────────────────────── */}
      <section className="section" aria-label="Related pages">
        <div className="container-inner">
          <div className="growing-related-row">
            <Link href="/contractor-operations-system" className="btn-ghost">
              The Operating Foundation →
            </Link>
            <Link href="/fractional-coo-contractors" className="btn-ghost">
              Fractional COO for contractors →
            </Link>
            <Link href="/monday-agenda" className="btn-ghost">
              Free Monday Agenda template →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────── */}
      <section aria-labelledby="cta-heading" className="growing-final-cta-section">
        <div className="container-inner growing-final-cta-inner">
          <h2 id="cta-heading" className="growing-final-cta-title">
            Growing pains don&apos;t fix themselves. Let&apos;s fix the structure.
          </h2>
          <p className="growing-final-cta-copy">
            30-minute discovery call. We map the structural gaps, tell you what the 90-day install
            involves, and give you a straight answer on whether it&apos;s the right fit.
          </p>
          <BookingButton label="Book a Discovery Call" source="growing_pains_footer_cta" />
          <p className="growing-final-cta-note">
            Straight assessment. No obligation. No boilerplate sales process.
          </p>
        </div>
      </section>
    </>
  );
}
