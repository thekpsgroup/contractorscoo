'use client';

import { trackEvent } from '@/components/Analytics';

const BOOKING_URL = 'https://calendly.com/thekpsgroup/30min';

interface BookingButtonProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}

export function BookingButton({
  className = 'btn-primary',
  children,
  label = 'Book a Call',
}: BookingButtonProps) {
  const handleClick = () => {
    trackEvent('book_call_click', { method: 'calendly' });
    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children ?? label}
    </button>
  );
}
