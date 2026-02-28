import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';

const SITE_URL = 'https://www.contractorscoo.com';
const SITE_NAME = 'Contractors COO';
const COMPANY_NAME = 'The KPS Group';
const CONTACT_EMAIL = 'sales@thekpsgroup.com';
const ADDRESS_LINE1 = '2342 FM 36, Suite A';
const ADDRESS_LINE2 = 'Caddo Mills, TX 75135';
const LAST_UPDATED = 'February 27, 2026';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: 'Privacy Policy',
    description: `How ${SITE_NAME} collects, uses, and protects your information.`,
    url: `${SITE_URL}/privacy`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy',
    description: `How ${SITE_NAME} collects, uses, and protects your information.`,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: `${SITE_URL}/privacy` },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <section className="section-lg" aria-label="Privacy policy">
        <div className="container-inner">
          <span className="eyebrow">Legal</span>
          <h1 className="text-display" style={{ maxWidth: '640px', marginBottom: '1rem' }}>
            Privacy Policy
          </h1>
          <p className="text-subhead" style={{ maxWidth: '600px' }}>
            How {SITE_NAME} collects, uses, and protects your information.
          </p>
          <p className="text-small" style={{ color: 'var(--color-muted-2)', marginTop: '1rem' }}>
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-inner" style={{ maxWidth: '760px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>1. Who We Are</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
                {SITE_NAME} (<a href={SITE_URL} style={{ color: 'var(--color-accent)' }}>contractorscoo.com</a>) is a business advisory service operated by{' '}
                <a
                  href="https://www.thekpsgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {COMPANY_NAME}
                </a>
                , located at {ADDRESS_LINE1}, {ADDRESS_LINE2}. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>2. Information We Collect</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We collect information in two ways:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)' }}>
                  <p style={{ fontWeight: 600, color: 'var(--color-fg)', marginBottom: '0.25rem' }}>
                    Information you provide directly
                  </p>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    When you submit our contact form, we collect your name, email address, phone number (optional), business name, and message. This information is used solely to respond to your inquiry.
                  </p>
                </div>
                <div style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--color-accent)' }}>
                  <p style={{ fontWeight: 600, color: 'var(--color-fg)', marginBottom: '0.25rem' }}>
                    Information collected automatically
                  </p>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem', lineHeight: 1.7 }}>
                    We use Google Analytics 4 (GA4) to understand how visitors use our site. GA4 collects anonymized data including pages visited, time on site, device type, and general geographic location. This data is aggregated and does not identify you personally. No cross-site tracking is performed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>3. Cookies</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                This site uses cookies through Google Analytics 4. These are analytics cookies only. We do not use advertising cookies, retargeting cookies, or social media tracking pixels.
              </p>
              <div
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-line)',
                  borderRadius: '0.5rem',
                  padding: '1.25rem',
                }}
              >
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-line)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Cookie</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Purpose</th>
                      <th style={{ textAlign: 'left', padding: '0.5rem 0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '_ga', purpose: 'Google Analytics — distinguishes users', duration: '2 years' },
                      { name: '_ga_*', purpose: 'Google Analytics — maintains session state', duration: '2 years' },
                      { name: '_gid', purpose: 'Google Analytics — distinguishes users', duration: '24 hours' },
                    ].map((row) => (
                      <tr key={row.name} style={{ borderBottom: '1px solid var(--color-line)' }}>
                        <td style={{ padding: '0.625rem 0.75rem', color: 'var(--color-fg)', fontFamily: 'var(--font-geist-mono, monospace)', fontSize: '0.8125rem' }}>{row.name}</td>
                        <td style={{ padding: '0.625rem 0.75rem', color: 'var(--color-muted)' }}>{row.purpose}</td>
                        <td style={{ padding: '0.625rem 0.75rem', color: 'var(--color-muted-2)' }}>{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p style={{ color: 'var(--color-muted-2)', fontSize: '0.875rem', marginTop: '0.75rem', lineHeight: 1.7 }}>
                You can opt out of Google Analytics tracking at any time by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Google Analytics Opt-Out Browser Add-on
                </a>
                , or by adjusting your browser&apos;s cookie settings.
              </p>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>4. How We Use Your Information</h2>
              <ul style={{ color: 'var(--color-muted)', lineHeight: 1.7, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>To respond to contact form inquiries</li>
                <li>To deliver services you have engaged us for</li>
                <li>To understand site usage and improve our content (analytics only)</li>
                <li>We do not sell, rent, or share your personal information with third parties for marketing purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>5. Third-Party Services</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  {
                    name: 'Google Analytics 4',
                    description: 'Used for anonymous website analytics. Data is processed by Google under their privacy policy.',
                    link: 'https://policies.google.com/privacy',
                    linkLabel: 'Google Privacy Policy',
                  },
                  {
                    name: 'Resend',
                    description: 'Used to deliver contact form submissions to our team. Form data is transmitted securely and not stored by Resend beyond delivery.',
                    link: 'https://resend.com/legal/privacy-policy',
                    linkLabel: 'Resend Privacy Policy',
                  },
                  {
                    name: 'Calendly',
                    description: 'Our booking links use Calendly for scheduling. Calendly operates under their own privacy policy.',
                    link: 'https://calendly.com/privacy',
                    linkLabel: 'Calendly Privacy Policy',
                  },
                  {
                    name: 'Vercel',
                    description: 'Our site is hosted on Vercel. Vercel may process server-side request logs as part of hosting.',
                    link: 'https://vercel.com/legal/privacy-policy',
                    linkLabel: 'Vercel Privacy Policy',
                  },
                ].map((service) => (
                  <div
                    key={service.name}
                    style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-line)',
                      borderRadius: '0.5rem',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem',
                    }}
                  >
                    <p style={{ fontWeight: 600, color: 'var(--color-fg)', fontSize: '0.9375rem' }}>{service.name}</p>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                      {service.description}{' '}
                      <a href={service.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                        {service.linkLabel} →
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>6. Data Retention</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
                Contact form submissions are retained in our email inbox and CRM for as long as necessary to maintain our business relationship or respond to inquiries. Google Analytics data is retained for 14 months per our GA4 configuration. You may request deletion of your personal information at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>7. Your Rights</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginBottom: '0.75rem' }}>
                Depending on your location, you may have rights under applicable law including:
              </p>
              <ul style={{ color: 'var(--color-muted)', lineHeight: 1.7, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of analytics tracking</li>
              </ul>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginTop: '0.75rem' }}>
                To exercise any of these rights, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)' }}>{CONTACT_EMAIL}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>8. Security</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
                We take reasonable steps to protect your information from loss, misuse, and unauthorized access. However, no method of transmission over the internet is 100% secure. If you have questions about our security practices, contact us.
              </p>
            </div>

            <div>
              <h2 className="text-headline" style={{ marginBottom: '0.75rem' }}>9. Contact Us</h2>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
                If you have questions about this Privacy Policy or how we handle your information, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--color-accent)' }}>{CONTACT_EMAIL}</a>.
              </p>
              <p className="text-body" style={{ color: 'var(--color-muted)', lineHeight: 1.7, marginTop: '0.5rem' }}>
                {COMPANY_NAME}, {ADDRESS_LINE1}, {ADDRESS_LINE2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
