import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { MobileCtaBar } from '@/components/MobileCtaBar';
import { Analytics } from '@/components/Analytics';
import { JsonLd } from '@/components/JsonLd';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const BASE_URL = 'https://www.contractorscoo.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | Contractors COO',
    default: 'Contractors COO — Fractional COO for Contractor Teams',
  },
  description:
    'Fractional COO support for contractor teams doing $1M–$10M/year. 90-day operational install: cadence, role clarity, KPI scoreboard, and execution rhythm.',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    siteName: 'Contractors COO',
    locale: 'en_US',
    url: BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  name: 'Contractors COO',
  description:
    'Fractional COO support and operational leadership for contractor teams doing $1M–$10M/year.',
  url: BASE_URL,
  telephone: '(469) 534-3392',
  email: 'hello@contractorscoo.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2342 FM 36, Suite A',
    addressLocality: 'Caddo Mills',
    addressRegion: 'TX',
    postalCode: '75135',
    addressCountry: 'US',
  },
  areaServed: 'US',
  parentOrganization: {
    '@type': 'Organization',
    name: 'The KPS Group',
  },
  serviceType: [
    'Fractional COO',
    'Operations Leadership',
    'Business Systems Implementation',
    'Operational Cadence Install',
  ],
  openingHours: 'Mo-Fr 09:00-17:00',
  sameAs: ['https://www.contractorjobcosting.com'],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Skip to content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] btn-primary"
        >
          Skip to main content
        </a>

        <JsonLd data={organizationSchema} />
        <Analytics />
        <Nav />

        <main id="main-content" className="pb-20 md:pb-0">
          {children}
        </main>

        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
