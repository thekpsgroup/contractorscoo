'use client';

import Link from 'next/link';
import { BookingButton } from '@/components/BookingButton';

export function MobileCtaBar() {
  return (
    <div
      className="md:hidden"
      style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        right: '1rem',
        zIndex: 100,
        display: 'flex',
        gap: '0.75rem',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-line)',
        borderRadius: '0.375rem',
        padding: '0.75rem 1rem',
        backdropFilter: 'blur(12px)',
      }}
    >
      <Link
        href="/offer"
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-muted)',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        See the Install
      </Link>
      <BookingButton />
    </div>
  );
}
