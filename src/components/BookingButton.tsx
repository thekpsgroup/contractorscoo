'use client';

import { trackEvent } from '@/components/Analytics';

const BOOKING_URL = 'https://calendly.com/thekpsgroup/30min';

interface BookingButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  source?: string;
}

export function BookingButton({
  className = 'btn-primary',
  children,
  label = 'Book a Call',
  source = 'unknown',
}: BookingButtonProps) {
  const handleClick = () => {
    trackEvent('book_call_click', { method: 'calendly', source });
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children ?? label}
    </button>
  );
}
