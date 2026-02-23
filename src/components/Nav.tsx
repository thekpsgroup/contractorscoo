'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';

const navLinks = [
  { href: '/offer',         label: 'The Offer'         },
  { href: '/proof',         label: 'Proof'             },
  { href: '/about',         label: 'About'             },
  { href: '/monday-agenda', label: 'The Monday Agenda' },
  { href: '/contact',       label: 'Contact'           },
];

// Desktop nav shows only the first 4 links (Monday Agenda lives in footer / mobile menu)
const desktopLinks = navLinks.slice(0, 4);

export function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container-inner">
        <div className="site-header-inner">

          {/* Logo */}
          <Link href="/" className="site-logo" onClick={close} aria-label="Contractors COO — Home">
            <span className="site-logo-accent">Contractors</span>
            <span className="site-logo-text"> COO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="site-nav" aria-label="Main navigation">
            {desktopLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="site-nav-cta">
            <BookingButton source="nav_desktop" />
          </div>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden"
            style={{
              background:     'none',
              border:         'none',
              cursor:         'pointer',
              padding:        '0.5rem',
              display:        'flex',
              flexDirection:  'column',
              alignItems:     'center',
              justifyContent: 'center',
              gap:            '5px',
              width:          '2.25rem',
              height:         '2.25rem',
              flexShrink:     0,
            }}
          >
            {open ? (
              /* X icon when open */
              <span
                style={{
                  display:    'block',
                  fontSize:   '1.125rem',
                  lineHeight: 1,
                  color:      'var(--color-muted)',
                  fontWeight: 300,
                  userSelect: 'none',
                }}
                aria-hidden="true"
              >
                ✕
              </span>
            ) : (
              /* 3-bar hamburger when closed */
              <>
                <span style={{ display: 'block', width: '18px', height: '1.5px', backgroundColor: 'var(--color-muted)', borderRadius: '1px' }} />
                <span style={{ display: 'block', width: '18px', height: '1.5px', backgroundColor: 'var(--color-muted)', borderRadius: '1px' }} />
                <span style={{ display: 'block', width: '18px', height: '1.5px', backgroundColor: 'var(--color-muted)', borderRadius: '1px' }} />
              </>
            )}
          </button>

        </div>
      </div>

      {/* Mobile nav panel — inside <header> so it's sticky with the bar */}
      {open && (
        <div
          id="mobile-nav"
          className="md:hidden"
          style={{
            borderTop:       '1px solid var(--color-line)',
            backgroundColor: 'var(--color-canvas)',
          }}
        >
          <div
            className="container-inner"
            style={{ paddingTop: '0.5rem', paddingBottom: '1.5rem' }}
          >
            <nav aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  style={{
                    display:        'block',
                    padding:        '0.9375rem 0',
                    borderBottom:   '1px solid var(--color-line)',
                    fontSize:       '0.9375rem',
                    fontWeight:     500,
                    color:          'var(--color-muted)',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div style={{ marginTop: '1.25rem' }}>
              <BookingButton source="nav_mobile" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
