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
          <h1 className="text-display privacy-hero-title">
            Privacy Policy
          </h1>
          <p className="text-subhead privacy-hero-subtitle">
            How {SITE_NAME} collects, uses, and protects your information.
          </p>
          <p className="text-small privacy-hero-updated">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="privacy-container">
          <div className="privacy-body-wrapper">
            <div>
              <h2 className="privacy-section-heading">1. Who We Are</h2>
              <p className="privacy-section-text">
                {SITE_NAME} (<a href={SITE_URL} className="privacy-link">contractorscoo.com</a>) is a business advisory service operated by{' '}
                <a
                  href="https://www.thekpsgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  {COMPANY_NAME}
                </a>
                , located at {ADDRESS_LINE1}, {ADDRESS_LINE2}. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us.
              </p>
            </div>

            <div>
              <h2 className="privacy-section-heading">2. Information We Collect</h2>
              <p className="privacy-section-text-spaced">
                We collect information in two ways:
              </p>
              <div className="privacy-subsection-list">
                <div className="privacy-subsection-item">
                  <p className="privacy-subsection-title">
                    Information you provide directly
                  </p>
                  <p className="privacy-subsection-text">
                    When you submit our contact form, we collect your name, email address, phone number (optional), business name, and message. This information is used solely to respond to your inquiry.
                  </p>
                </div>
                <div className="privacy-subsection-item">
                  <p className="privacy-subsection-title">
                    Information collected automatically
                  </p>
                  <p className="privacy-subsection-text">
                    We use Google Analytics 4 (GA4) to understand how visitors use our site. GA4 collects anonymized data including pages visited, time on site, device type, and general geographic location. This data is aggregated and does not identify you personally. No cross-site tracking is performed.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="privacy-section-heading">3. Cookies</h2>
              <p className="privacy-section-text-spaced">
                This site uses cookies through Google Analytics 4. These are analytics cookies only. We do not use advertising cookies, retargeting cookies, or social media tracking pixels.
              </p>
              <div className="privacy-table-container">
                <table className="privacy-table">
                  <thead>
                    <tr>
                      <th>Cookie</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '_ga', purpose: 'Google Analytics — distinguishes users', duration: '2 years' },
                      { name: '_ga_*', purpose: 'Google Analytics — maintains session state', duration: '2 years' },
                      { name: '_gid', purpose: 'Google Analytics — distinguishes users', duration: '24 hours' },
                    ].map((row) => (
                      <tr key={row.name}>
                        <td className="privacy-table td-name">{row.name}</td>
                        <td className="privacy-table td-description">{row.purpose}</td>
                        <td className="privacy-table td-duration">{row.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="privacy-table-note">
                You can opt out of Google Analytics tracking at any time by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-link"
                >
                  Google Analytics Opt-Out Browser Add-on
                </a>
                , or by adjusting your browser&apos;s cookie settings.
              </p>
            </div>

            <div>
              <h2 className="privacy-section-heading">4. How We Use Your Information</h2>
              <ul className="privacy-list">
                <li>To respond to contact form inquiries</li>
                <li>To deliver services you have engaged us for</li>
                <li>To understand site usage and improve our content (analytics only)</li>
                <li>We do not sell, rent, or share your personal information with third parties for marketing purposes</li>
              </ul>
            </div>

            <div>
              <h2 className="privacy-section-heading">5. Third-Party Services</h2>
              <div className="privacy-service-grid">
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
                  <div key={service.name} className="privacy-service-card">
                    <p className="privacy-service-name">{service.name}</p>
                    <p className="privacy-service-description">
                      {service.description}{' '}
                      <a href={service.link} target="_blank" rel="noopener noreferrer" className="privacy-link">
                        {service.linkLabel} →
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="privacy-section-heading">6. Data Retention</h2>
              <p className="privacy-section-text">
                Contact form submissions are retained in our email inbox and CRM for as long as necessary to maintain our business relationship or respond to inquiries. Google Analytics data is retained for 14 months per our GA4 configuration. You may request deletion of your personal information at any time by contacting us.
              </p>
            </div>

            <div>
              <h2 className="privacy-section-heading">7. Your Rights</h2>
              <p className="privacy-section-text-spaced">
                Depending on your location, you may have rights under applicable law including:
              </p>
              <ul className="privacy-list-items">
                <li>The right to access personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt out of analytics tracking</li>
              </ul>
              <p className="privacy-section-text privacy-rights-spacing">
                To exercise any of these rights, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="privacy-link">{CONTACT_EMAIL}</a>.
              </p>
            </div>

            <div>
              <h2 className="privacy-section-heading">8. Security</h2>
              <p className="privacy-section-text">
                We take reasonable steps to protect your information from loss, misuse, and unauthorized access. However, no method of transmission over the internet is 100% secure. If you have questions about our security practices, contact us.
              </p>
            </div>

            <div>
              <h2 className="privacy-section-heading">9. Contact Us</h2>
              <p className="privacy-section-text">
                If you have questions about this Privacy Policy or how we handle your information, email us at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="privacy-link">{CONTACT_EMAIL}</a>.
              </p>
              <p className="privacy-section-text privacy-contact-info-spacing">
                {COMPANY_NAME}, {ADDRESS_LINE1}, {ADDRESS_LINE2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
