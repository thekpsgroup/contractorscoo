import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';
import { MondayAgendaForm } from '@/app/monday-agenda/MondayAgendaForm';

export const metadata: Metadata = {
  title: {
    absolute: 'Contractors COO — Fractional COO for Contractors',
  },
  description:
    'Your contractor business needs operating infrastructure. Fixed-scope 90-day COO install for GCs, trades, and home services doing $1M–$10M/year.',
  alternates: { canonical: 'https://www.contractorscoo.com' },
  openGraph: {
    title: 'Contractors COO — Fractional COO for Contractors',
    description:
      'Stop running operations from your head. We install meeting architecture, role ownership, and KPI systems into contractor businesses in 90 days.',
    url: 'https://www.contractorscoo.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contractors COO — Fractional COO for Contractors',
    description: 'Your contractor business needs operating infrastructure. Fixed-scope 90-day COO install for GCs, trades, and home services doing $1M–$10M/year.',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional COO — 90-Day Operating System Install',
  provider: {
    '@type': 'Organization',
    name: 'Contractors COO',
    url: 'https://www.contractorscoo.com',
  },
  description:
    'A 90-day fixed-scope operational install for contractor teams doing $1M–$10M/year. Installs meeting architecture, role ownership, KPI scoreboard, and decision standards built specifically for GCs, trades, and home service contractors.',
  areaServed: 'US',
  serviceType: 'Fractional COO',
  url: 'https://www.contractorscoo.com/offer',
  potentialAction: {
    '@type': 'ReserveAction',
    target: 'https://calendly.com/thekpsgroup/30min',
    name: 'Book a Discovery Call',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is a fractional COO different from a business coach or EOS/Traction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coaches and operating systems like EOS are designed for ongoing facilitation — quarterly sessions, annual retreats, indefinite engagement fees. We install in 90 days and hand off. The system runs without us. We do not coach. We build operational structure that functions whether or not anyone is motivated on a given week.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from hiring a full-time operations manager?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A full-time ops manager costs $80K–$140K before benefits and takes 6 months to become effective. If they leave, the system leaves with them. We build the system into your operation over 90 days. When we leave, your team owns it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What size contractor is this built for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teams doing $1M–$10M in annual revenue with 5–30 field and office staff. Owner-operated enough that the owner is still the primary constraint. Developed enough that the lack of structure is costing real money.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do we need to have our systems figured out first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The diagnosis phase exists precisely because most contractors at this stage have not defined their systems. We start with what you have, build what you need, and document what you should have been running on months ago.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens after the 90-day COO install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own everything — every document, every agenda template, every decision threshold. Nothing leaves with us. The system is designed to run on cadence, not on continued outside involvement.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a fractional COO cost for a contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 90-day install is typically positioned in the range contractors at your revenue stage consider one to two months of operations overhead — almost always justified by what owner bottleneck and execution gaps cost monthly. Team size and complexity affect the engagement. Specific numbers are covered on the discovery call.',
      },
    },
  ],
};

/* ── Problem cards ──────────────────────────── */
const problems = [
  {
    num: '01',
    title: 'The Owner Bottleneck',
    body: 'Your foreman calls before ordering material. Your PM routes every estimate through you. Nothing moves without your sign-off. The business runs at the speed of your availability — and you\'re already at capacity.',
  },
  {
    num: '02',
    title: 'Field-Office Disconnect',
    body: 'Your office doesn\'t know what the field committed to. Your field doesn\'t know what the office scheduled. Change orders get missed. Calls go to whoever picks up. Nobody owns the job once it\'s sold.',
  },
  {
    num: '03',
    title: 'Meetings That Don\'t Close',
    body: 'Monday\'s all-hands runs 90 minutes and produces two vague action items. The same topics come back next week. By Friday, nobody can tell you what was decided or who was accountable for it.',
  },
  {
    num: '04',
    title: 'The Follow-Through Gap',
    body: 'A decision gets made in your leadership session. By the time it reaches the field, it\'s been modified, delayed, or dropped. The gap between what gets decided and what actually happens is where margin disappears.',
  },
];

/* ── Install items ──────────────────────────── */
const installs = [
  {
    title: 'Meeting Architecture',
    body: 'A structured weekly leadership session with a fixed agenda, closed-loop follow-up, and clear decision outputs. Field lead, office lead, owner. Runs under an hour. Nobody leaves without knowing what they own next.',
  },
  {
    title: 'Ownership Matrix',
    body: 'A written document assigning every function to a single owner — estimating, field coordination, purchasing, client management, billing. No shared lanes. No ambiguity about who owns what when a job goes sideways.',
  },
  {
    title: 'KPI Scoreboard',
    body: 'Eight contractor-relevant metrics reviewed every week: billings vs. target, job margin by lead, labor vs. estimate, AR aging, pipeline, collections due, and two owner-defined indicators. Live in the room, not filed after.',
  },
  {
    title: 'Decision Standards',
    body: 'A written threshold defining what your field lead handles, what your office resolves, and what escalates to you. Paired with a follow-through protocol that closes every open item before the next session.',
  },
  {
    title: 'Field Process Set',
    body: 'SOPs for your highest-leverage repeatable operations: job startup, sub coordination, change order process, customer escalation handling. Written to train a new hire from — not to satisfy a deliverable checklist.',
  },
  {
    title: 'Information Flow Standard',
    body: 'Written norms for how status, problems, and decisions travel between field and office — so the right person has the right information at the right time without it routing through the owner.',
  },
];

/* ── Outcomes ───────────────────────────────── */
const outcomes = [
  {
    result: 'Owner off the daily decision loop',
    body: 'Field leads and PMs resolve issues at the threshold level. The owner stops being the primary phone number for operational calls. Time shifts from approving material orders to directing strategy.',
  },
  {
    result: 'Leadership sessions that produce action',
    body: 'The weekly session runs on a fixed agenda. Every item closes or carries forward with an owner and a deadline. No circular discussions. No "we\'ll follow up on that."',
  },
  {
    result: 'Scoreboard read every Monday',
    body: 'The leadership team knows their numbers before the session starts. KPIs are owned and discussed — not generated by accounting 30 days after the fact.',
  },
  {
    result: 'Margin visible before 60 days post-close',
    body: 'Owners can identify which service lines, crews, and job types are profitable in real time — not on a monthly P&L reviewed weeks after the jobs are already done.',
  },
];

/* ── FAQ ─────────────────────────────────── */
const faqs = [
  {
    q: 'How is this different from a business coach or EOS/Traction?',
    a: 'Coaches and operating systems like EOS are designed for ongoing facilitation — quarterly sessions, annual retreats, indefinite engagement fees. We install in 90 days and hand off. The system runs without us. We also don\'t coach. We build operational structure that functions whether or not anyone is motivated on a given week.',
  },
  {
    q: 'How is this different from hiring a full-time ops manager?',
    a: 'A full-time ops manager costs $80K–$140K before benefits and takes 6 months to become effective. If they leave, the system leaves with them — it was in their head, not your business. We build the system into your operation over 90 days. When we leave, your team owns it.',
  },
  {
    q: 'What size contractor is this built for?',
    a: 'Teams doing $1M–$10M in annual revenue with 5–30 field and office staff. Owner-operated enough that the owner is still the primary constraint. Developed enough that the lack of structure is costing real money in owner time and margin leakage.',
  },
  {
    q: 'Do we need to have our systems figured out first?',
    a: 'No. The diagnosis phase exists precisely because most contractors at this stage haven\'t defined their systems. We start with what you have, build what you need, and document what you should have been running on months ago.',
  },
  {
    q: 'What happens after 90 days?',
    a: 'You own everything — every document, every agenda template, every decision threshold. Nothing leaves with us. The system is designed to run on cadence, not on continued outside involvement.',
  },
  {
    q: 'What does the 90-day install cost?',
    a: 'Positioned in the range contractors at your revenue stage consider one to two months of operations overhead — almost always justified against what owner bottleneck and execution gaps cost monthly. We scope before we price because team size and complexity affect the engagement. Specific numbers are covered on the discovery call.',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Introduction">
        <div className="container-inner">
          <span className="eyebrow">For contractors doing $1M–$10M · A service of The KPS Group</span>
          <h1 className="text-display home-hero-title">
            Fractional COO for Contractors
          </h1>
          <p className="text-subhead home-hero-subhead">
            Most contractors past $2M are still running operations from their own head.
            The fix isn&apos;t software or a coach.
            We install the operating structure your business needs — in 90 days.
          </p>
          <div className="home-actions-row">
            <BookingButton source="home_hero" />
            <Link href="/offer" className="btn-ghost">
              See the 90-Day Install →
            </Link>
          </div>
          <p className="home-hero-note">
            30 minutes. We assess your operation and give you a straight answer.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: THE PROBLEM ─────────────── */}
      <section className="section" aria-labelledby="problem-heading">
        <div className="container-inner">
          <span className="eyebrow">The Plateau</span>
          <h2 id="problem-heading" className="text-headline home-problem-title">
            The same four problems show up in every contractor business past $2M.
          </h2>
          <p className="text-subhead home-problem-subhead">
            Not morale problems. Not people problems. Structural ones.
          </p>

          <div className="home-grid-lines md:grid-cols-2">
            {problems.map((p, i) => (
              <div
                key={p.num}
                className={`home-grid-item ${i % 2 === 1 ? 'md:border-l md:border-l-line home-grid-item-right' : 'home-grid-item-left'}`}
              >
                <p className="home-grid-num">
                  {p.num}
                </p>
                <h3 className="home-card-title">
                  {p.title}
                </h3>
                <p className="home-card-copy">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="home-links-row">
            <Link href="/owner-bottleneck" className="btn-ghost">
              How we fix the owner bottleneck →
            </Link>
            <Link href="/contractor-growing-pains" className="btn-ghost">
              Recognize these growing pains? →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHAT WE INSTALL ──────────── */}
      <section className="section" aria-labelledby="install-heading">
        <div className="container-inner">
          <span className="eyebrow">The Install</span>
          <h2 id="install-heading" className="text-headline home-install-title">
            Six operating systems built into your business in 90 days.
          </h2>
          <p className="text-subhead home-install-subhead">
            Not a framework license. Not a coaching program. An operational structure built with your team and owned by your business when we step back.
          </p>

          <div className="home-grid-lines md:grid-cols-2">
            {installs.map((item, i) => (
              <div
                key={item.title}
                className={`home-install-item ${i % 2 === 1 ? 'md:border-l md:border-l-line home-grid-item-right' : 'home-grid-item-left'}`}
              >
                <div className="home-install-bar" />
                <div>
                  <h3 className="home-card-title">
                    {item.title}
                  </h3>
                  <p className="home-card-copy">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="home-links-row">
            <Link href="/offer" className="btn-ghost">
              Full offer details →
            </Link>
            <Link href="/contractor-operations-system" className="btn-ghost">
              The five-pillar system →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: 90-DAY TIMELINE ──────────── */}
      <section className="section" aria-labelledby="timeline-heading">
        <div className="container-inner">
          <span className="eyebrow">The Timeline</span>
          <h2 id="timeline-heading" className="text-headline home-timeline-title">
            The 90-Day COO Install
          </h2>
          <p className="text-subhead home-timeline-subhead">
            Three phases. Fixed scope. Designed to hold after we step back.
          </p>

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
                  We audit your current operating structure — how decisions get made, how jobs get owned, how field and office communicate, and where accountability breaks down. You get a written install plan specific to your business, your team size, and your stage.
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
                  We run your first leadership sessions, activate the ownership matrix, install the scoreboard, and build your decision threshold. The system goes live with us in the room — so your team learns it by running it, not by reading about it.
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
                  Leadership Coaching + Stabilization
                </h3>
                <p className="fcoo-phase-copy">
                  We coach your team through the operating model, close the gaps that surface in live operation, and lock in the rhythm. By day 90, the system runs on its own. That&apos;s the only acceptable exit condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OUTCOMES ─────────────────── */}
      <section className="section" aria-labelledby="outcomes-heading">
        <div className="container-inner">
          <span className="eyebrow">Proof</span>
          <h2 id="outcomes-heading" className="text-headline home-outcomes-title">
            What actually changes in the first 90 days.
          </h2>
          <p className="text-subhead home-outcomes-subhead">
            Operational shifts with specific metrics — not outcomes from a generic business framework.
          </p>

          <div className="fcoo-card-grid md:grid-cols-2">
            {outcomes.map((o) => (
              <div key={o.result} className="card">
                <h3 className="home-outcome-title">
                  {o.result}
                </h3>
                <p className="home-card-copy">
                  {o.body}
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

      {/* ── SECTION 4B: LEAD MAGNET ─────────────── */}
      <section className="section" aria-labelledby="resource-heading">
        <div className="container-inner">
          <div className="home-resource-grid md:grid-cols-2">
            {/* Left: context */}
            <div>
              <span className="eyebrow">Free Resource</span>
              <h2 id="resource-heading" className="text-headline home-resource-title">
                The Monday Agenda
              </h2>
              <p className="home-resource-copy">
                The fixed 8-point weekly leadership session format we install into every contractor engagement.
                Runs in under 60 minutes. Every open item closes with a named owner before the session ends.
              </p>
              <ul className="home-resource-list">
                {[
                  'Safety check, scoreboard review, open items, job status',
                  'Office update, escalations, next-week priorities, log close',
                  'Includes timing guide and the 5 session rules that make it hold',
                  'PDF version formatted to print and use this Monday',
                ].map((item) => (
                  <li key={item} className="home-resource-item">
                    <span className="home-resource-bullet">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/monday-agenda" className="btn-ghost">
                See the full published agenda →
              </Link>
            </div>

            {/* Right: form */}
            <div className="home-resource-card">
              <p className="home-resource-card-kicker">
                Get the PDF Version
              </p>
              <p className="home-resource-card-copy">
                Enter your work email and we&apos;ll send you the formatted, print-ready PDF —
                plus the open-item log template.
              </p>
              <MondayAgendaForm compact />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ───────────────────────── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container-inner">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="text-headline home-faq-title">
            Questions worth asking before you book.
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

      {/* ── ECOSYSTEM POSITIONING ────────────────────────────────── */}
      <section aria-label="Service progression" className="home-ecosystem-section">
        <div className="container-inner home-ecosystem-inner">
          <h2 className="home-ecosystem-title">
            Already have your foundation and margins figured out?
          </h2>
          <div className="home-ecosystem-grid">
            <div>
              <h3 className="home-ecosystem-stage">
                Stage 1: Foundation
              </h3>
              <p className="home-ecosystem-copy">
                <strong>Contractor Setup Install</strong> gets owner-led contractors properly structured. Entity, banking, books, and operating rhythm in 21 days.
              </p>
              <a href="https://www.contractorsetup.com/?utm_source=contractorscoo&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="home-ecosystem-link">
                Visit ContractorSetup →
              </a>
            </div>
            <div>
              <h3 className="home-ecosystem-stage">
                Stage 2: Margin Clarity
              </h3>
              <p className="home-ecosystem-copy">
                <strong>Contractor Job Costing</strong> installs job-level profitability and fixes cash flow. Built for contractors doing $750K–$8M who need to stop guessing.
              </p>
              <a href="https://www.contractorjobcosting.com/?utm_source=contractorscoo&utm_medium=referral" target="_blank" rel="noopener noreferrer" className="home-ecosystem-link">
                Visit Contractor Job Costing →
              </a>
            </div>
            <div>
              <h3 className="home-ecosystem-stage">
                Stage 3: Operations Leadership
              </h3>
              <p className="home-ecosystem-copy">
                <strong>Contractors COO</strong> is the final piece: the execution infrastructure contractors at $1M–$10M actually need to scale past owner-operator operations.
              </p>
              <span className="home-ecosystem-current">You are here →</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BAND ───────────────────────── */}
      <section aria-labelledby="cta-heading" className="home-final-cta-section">
        <div className="container-inner home-final-cta-inner">
          <h2
            id="cta-heading"
            className="home-final-cta-title"
          >
            Ready to stop being the only thing holding your operation together?
          </h2>
          <p className="home-final-cta-copy">
            Book a 30-minute discovery call. We&apos;ll map your current operating structure,
            identify the specific gaps, and tell you exactly what the install involves —
            or whether it&apos;s not the right fit.
          </p>
          <BookingButton label="Book a Call" source="home_footer_cta" />
          <p className="home-final-cta-note">
            Straight assessment. No obligation. No boilerplate sales process.
          </p>
        </div>
      </section>
    </>
  );
}
