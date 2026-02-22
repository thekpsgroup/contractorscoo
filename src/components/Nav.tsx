'use client';

import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';

const navLinks = [
  { href: '/offer',   label: 'The Offer'  },
  { href: '/proof',   label: 'Proof'      },
  { href: '/about',   label: 'About'      },
  { href: '/contact', label: 'Contact'    },
];

export function Nav() {
  return (
    <header className="site-header">
      <div className="container-inner">
        <div className="site-header-inner">
          {/* Logo */}
          <Link href="/" className="site-logo" aria-label="Contractors COO — Home">
            <span className="site-logo-accent">Contractors</span>
            <span className="site-logo-text"> COO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="site-nav-cta">
            <BookingButton />
          </div>
        </div>
      </div>
    </header>
  );
}
