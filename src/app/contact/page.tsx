import type { Metadata } from 'next';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';
import { JsonLd } from '@/components/JsonLd';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Book a COO Discovery Call',
  description:
    'Book a 30-minute call. We map your operating structure, identify the gaps, and tell you what the 90-day install involves — and whether it\'s the right fit.',
  alternates: { canonical: 'https://www.contractorscoo.com/contact' },
  openGraph: {
    title: 'Book a COO Discovery Call | Contractors COO',
    description:
      'Thirty minutes. We assess your contractor operation and give you a direct answer on whether the install makes sense — and what it costs.',
    url: 'https://www.contractorscoo.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a COO Discovery Call',
    description: 'Book a 30-minute call. We map your operating structure, identify the gaps, and tell you what the 90-day install involves — and whether it\'s the right fit.',
  },
};

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Contractors COO',
  url: 'https://www.contractorscoo.com/contact',
  description: 'Book a discovery call or send a message to Contractors COO.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Contractors COO',
    telephone: '(469) 534-3392',
    email: 'sales@thekpsgroup.com',
    url: 'https://www.contractorscoo.com',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '(469) 534-3392',
      email: 'sales@thekpsgroup.com',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: 'https://calendly.com/thekpsgroup/30min',
      name: 'Book a Discovery Call',
    },
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.contractorscoo.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.contractorscoo.com/contact' },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={pageSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── HERO ─────────────────────────────────── */}
      <section className="section-lg" aria-label="Contact">
        <div className="container-inner">
          <span className="eyebrow">Contact</span>
          <h1 className="text-display contact-hero-title">
            Start with a Discovery Call
          </h1>
          <p className="text-subhead contact-hero-subhead">
            Thirty minutes. We&apos;ll assess your current operating structure and tell you exactly
            what needs to change — and whether this install is the right fit for your business.
          </p>
          <BookingButton label="Book a 30-Minute Call" source="contact_hero" />
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────── */}
      <section className="section" aria-labelledby="expect-heading">
        <div className="container-inner">
          <span className="eyebrow">What to Expect</span>
          <h2 id="expect-heading" className="text-headline contact-expect-title">
            How the first conversation works.
          </h2>

          <div className="contact-steps-wrap">
            {[
              {
                step: '01',
                title: 'Book the call',
                body: 'Use the link above to select a time. You\'ll receive a short pre-call questionnaire — three questions about your current structure and what\'s breaking.',
              },
              {
                step: '02',
                title: 'We do the call',
                body: 'Thirty minutes. We focus on your current operating structure — meetings, roles, accountability, and execution rhythm. We ask direct questions. You\'ll get direct answers.',
              },
              {
                step: '03',
                title: 'We give you a straight assessment',
                body: 'If the install makes sense, we\'ll tell you what it involves and what the next step looks like. If it doesn\'t fit, we\'ll tell you that too — and point you toward what does.',
              },
            ].map((item) => (
              <div key={item.step} className="contact-step-item">
                <span className="contact-step-num">
                  {item.step}
                </span>
                <div>
                  <h3 className="contact-step-title">
                    {item.title}
                  </h3>
                  <p className="growing-faq-answer">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
            <div className="growing-divider" />
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────── */}
      <section className="section" aria-labelledby="form-heading">
        <div className="container-inner">
          <div className="contact-form-grid md:grid-cols-[1fr_1.5fr]">
            {/* Left: context */}
            <div>
              <span className="eyebrow">Or send a message</span>
              <h2 id="form-heading" className="text-headline contact-form-title">
                Prefer to write first?
              </h2>
              <p className="contact-form-copy">
                Fill out the form and we&apos;ll respond within one business day. We review every
                submission personally — there&apos;s no auto-responder loop before a human sees it.
              </p>

              {/* Direct contact */}
              <div className="contact-info-wrap">
                <p className="contact-info-label">
                  Direct contact
                </p>
                <a href="tel:+14695343392" className="contact-link">
                  (469) 534-3392
                </a>
                <a href="mailto:sales@thekpsgroup.com" className="contact-email-link">
                  sales@thekpsgroup.com
                </a>
              </div>
            </div>

            {/* Right: form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────── */}
      <section className="section" aria-label="Related pages">
        <div className="container-inner">
          <div className="growing-related-row">
            <Link href="/offer" className="btn-ghost">
              See the full offer →
            </Link>
            <Link href="/proof" className="btn-ghost">
              Outcome examples →
            </Link>
            <Link href="/monday-agenda" className="btn-ghost">
              Free Monday Agenda template →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
