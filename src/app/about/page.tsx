import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Why Contractor Operations Break at Scale',
  description:
    'Past $2M, the owner-operated model stops scaling. Here is why contractor businesses hit the wall, why cadence fixes most of it, and why execution infrastructure matters more than strategy.',
  alternates: { canonical: 'https://www.contractorscoo.com/about' },
  openGraph: {
    title: 'Why Contractor Operations Break at Scale | Contractors COO',
    description:
      'The pattern is consistent: revenue grows, structure doesn\'t. Here\'s why it happens and how the Operating Foundation install fixes it. A service of The KPS Group.',
    url: 'https://www.contractorscoo.com/about',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Contractors COO',
  url: 'https://www.contractorscoo.com/about',
  description:
    'Why contractor teams break at growth stage and how operational cadence solves it. A service of The KPS Group.',
  mainEntity: {
    '@type': 'Organization',
    name: 'The KPS Group',
    url: 'https://www.contractorscoo.com',
    description: 'The KPS Group operates implementation services for owner-led contractors at the growth stage.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Contractor Growth Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Fractional COO — 90-Day Operational Install',
            url: 'https://www.contractorscoo.com',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Contractor Job Costing',
            url: 'https://www.contractorjobcosting.com',
          },
        },
      ],
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="About">
        <div className="container-inner">
          <span className="eyebrow">About</span>
          <h1 className="text-display" style={{ maxWidth: '720px', marginBottom: '1.5rem' }}>
            Why Contractor Operations Break at Scale
          </h1>
          <p className="text-subhead" style={{ maxWidth: '540px' }}>
            Contractors COO is an implementation practice built and operated by The KPS Group.
            We work exclusively with owner-led contractor businesses — GCs, trade contractors,
            and home service operators at the $1M–$10M stage.
          </p>
        </div>
      </section>

      {/* ── SECTION 1: The Pattern ─────────────── */}
      <section className="section" aria-labelledby="pattern-heading">
        <div className="container-inner">
          <span className="eyebrow">The Pattern</span>
          <h2 id="pattern-heading" className="text-headline" style={{ maxWidth: '560px', marginBottom: '2rem' }}>
            Every contractor who grows past $1M hits the same wall.
          </h2>
          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              The owner-operated model that got you here stops working. You&apos;ve added people,
              but accountability hasn&apos;t followed. You&apos;ve grown revenue, but margin hasn&apos;t kept pace.
              You&apos;re in more meetings, but executing less. You&apos;re working harder to produce the
              same result — or a slightly worse one.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              The problem is not effort. Contractors who grow to $1M–$10M outwork almost everyone.
              The problem is structure — specifically, the absence of an operating system. The
              business grew faster than the management infrastructure needed to sustain it.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              That gap between revenue and operations doesn&apos;t close on its own. It compounds.
              And it is very expensive by the time most owners decide to address it.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: Why Cadence Fixes It ───── */}
      <section className="section" aria-labelledby="cadence-heading">
        <div className="container-inner">
          <span className="eyebrow">The Fix</span>
          <h2 id="cadence-heading" className="text-headline" style={{ maxWidth: '580px', marginBottom: '2rem' }}>
            Strategy doesn&apos;t fix a failing operation. Cadence does.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              maxWidth: '900px',
            }}
            className="md:grid-cols-2"
          >
            <div>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Neither strategy sessions nor additional hiring fix a broken operational structure.
                What works — specifically, reliably, and quickly — is cadence: a consistent, repeatable
                operating rhythm that doesn&apos;t require the owner to personally orchestrate every
                moving part of the business.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                When a business has cadence, decisions move faster because there is a defined process.
                Teams execute more reliably because accountability is clear. Owners step back from the
                weeds because the system holds things together without their presence.
              </p>
            </div>

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-geist-mono, monospace)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-muted-2)',
                  marginBottom: '1rem',
                }}
              >
                What cadence produces
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  'Decisions that move from discussion to closure',
                  'Meetings with outputs, not just attendance',
                  'Team members who own their function fully',
                  'An owner who leads instead of operates',
                  'A business that can function without the owner in every room',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--color-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: 'var(--color-accent)', fontWeight: 700, flexShrink: 0 }}>→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Execution > Strategy ────── */}
      <section className="section" aria-labelledby="execution-heading">
        <div className="container-inner">
          <span className="eyebrow">Our Position</span>
          <h2 id="execution-heading" className="text-headline" style={{ maxWidth: '620px', marginBottom: '2rem' }}>
            Contractor businesses don&apos;t fail from lack of strategy. They stall from lack of structure.
          </h2>
          <div style={{ maxWidth: '680px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              Every contractor team we work with already knows what they need to do. They are not short
              on ideas. They are not short on effort. What they are short on is follow-through
              infrastructure — the systems that translate a decision made on Monday into a completed
              action with a named owner by Friday.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              Strategy planning sessions do not fix that. Goal-setting retreats do not fix that.
              More meetings do not fix that. A fixed weekly leadership cadence, a written ownership matrix,
              a KPI scoreboard reviewed in the room, and a decision threshold that keeps the field
              moving without calling the owner — those fix it.
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
              We build the infrastructure of execution. We build it inside your business, alongside your team,
              and we document it so thoroughly that it holds after we step back.
              That is the only exit condition we accept.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: About The KPS Group ─────── */}
      <section className="section" aria-labelledby="kps-heading">
        <div className="container-inner">
          <span className="eyebrow">The KPS Group</span>
          <h2 id="kps-heading" className="text-headline" style={{ maxWidth: '540px', marginBottom: '2rem' }}>
            An implementation practice. Not a consulting firm.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              maxWidth: '900px',
            }}
            className="md:grid-cols-2"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                The KPS Group operates a focused portfolio of implementation services for contractors
                at the growth stage — businesses large enough that structure matters, and owner-operated
                enough that the owner is still the primary constraint.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                Contractors COO handles the operational structure. Our sister service,{' '}
                <Link
                  href="https://www.contractorjobcosting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
                >
                  Contractor Job Costing
                </Link>
                , handles the financial visibility — job costing and cash flow clarity for the
                same stage of business. Together they represent the operational and financial
                foundation most growing contractors are missing.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                We work in small batches. We stay close to the work. We do not operate a consulting
                farm with junior staff running your engagement — the people who designed the install
                are the people running it.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: 1.8 }}>
                Both services are fixed-scope. Both are built to produce results that stay after
                the engagement ends. Neither is an indefinite retainer designed to create dependency.
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-2)', lineHeight: 1.7 }}>
                Based in Caddo Mills, TX. Working with contractors nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────── */}
      <section
        aria-labelledby="about-cta-heading"
        style={{ backgroundColor: 'var(--color-accent-deeper)', borderBottom: 'none' }}
      >
        <div className="container-inner" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <h2
            id="about-cta-heading"
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              maxWidth: '520px',
              marginBottom: '1rem',
            }}
          >
            If the pattern sounds familiar, let&apos;s talk.
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
            30-minute discovery call. No pitch before the conversation.
            We figure out together whether the install makes sense for your business.
          </p>
          <BookingButton />
        </div>
      </section>
    </>
  );
}
