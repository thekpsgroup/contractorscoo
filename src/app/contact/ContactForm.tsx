'use client';

import { useState, FormEvent } from 'react';
import { trackEvent } from '@/components/Analytics';

interface FormData {
  name: string;
  company: string;
  revenue: string;
  challenge: string;
  email: string;
  phone: string;
}

const initialData: FormData = {
  name: '',
  company: '',
  revenue: '',
  challenge: '',
  email: '',
  phone: '',
};

export function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      /*
       * TODO: wire up your form handler here.
       * Options:
       *   A) Formspree:  POST to https://formspree.io/f/{your-id}
       *   B) API route:  POST to /api/contact  (add src/app/api/contact/route.ts)
       *   C) Resend / SendGrid / etc.
       *
       * Example (Formspree):
       * const res = await fetch('https://formspree.io/f/your-id', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify(data),
       * });
       * if (!res.ok) throw new Error('Submission failed');
       */

      // Simulated delay — replace with real fetch above
      await new Promise((resolve) => setTimeout(resolve, 900));

      trackEvent('form_submit_success', { form_name: 'contact' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        style={{
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-line)',
          borderRadius: '0.375rem',
          padding: '2rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-geist-mono, monospace)',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-accent)',
            marginBottom: '0.875rem',
          }}
        >
          Received
        </p>
        <h3
          style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            color: 'var(--color-fg)',
            marginBottom: '0.625rem',
            letterSpacing: '-0.01em',
          }}
        >
          We&apos;ll be in touch.
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.7 }}>
          Expect a reply within one business day. If you&apos;d prefer to move faster,
          book a call directly — the link is above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Name + Company */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
          className="md:grid-cols-2"
        >
          <div className="form-field">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              className="form-input"
              placeholder="Your name"
              value={data.name}
              onChange={set('name')}
            />
          </div>
          <div className="form-field">
            <label htmlFor="company" className="form-label">Company</label>
            <input
              id="company"
              type="text"
              required
              autoComplete="organization"
              className="form-input"
              placeholder="Company name"
              value={data.company}
              onChange={set('company')}
            />
          </div>
        </div>

        {/* Revenue */}
        <div className="form-field">
          <label htmlFor="revenue" className="form-label">Annual Revenue</label>
          <select
            id="revenue"
            required
            className="form-input"
            value={data.revenue}
            onChange={set('revenue')}
            style={{ cursor: 'pointer' }}
          >
            <option value="" disabled>Select a range</option>
            <option value="below-750k">Below $750K</option>
            <option value="750k-1m">$750K – $1M</option>
            <option value="1m-3m">$1M – $3M</option>
            <option value="3m-5m">$3M – $5M</option>
            <option value="5m-10m">$5M – $10M</option>
            <option value="10m-plus">$10M+</option>
          </select>
        </div>

        {/* Primary Challenge */}
        <div className="form-field">
          <label htmlFor="challenge" className="form-label">Primary Operational Challenge</label>
          <textarea
            id="challenge"
            required
            className="form-input"
            placeholder="Describe the main operational problem you're trying to solve."
            rows={4}
            value={data.challenge}
            onChange={set('challenge')}
            style={{ resize: 'vertical' }}
          />
        </div>

        {/* Email + Phone */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
          className="md:grid-cols-2"
        >
          <div className="form-field">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              className="form-input"
              placeholder="you@company.com"
              value={data.email}
              onChange={set('email')}
            />
          </div>
          <div className="form-field">
            <label htmlFor="phone" className="form-label">
              Phone{' '}
              <span style={{ color: 'var(--color-muted-2)', fontWeight: 400 }}>(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className="form-input"
              placeholder="(555) 000-0000"
              value={data.phone}
              onChange={set('phone')}
            />
          </div>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-primary"
            style={{
              opacity: status === 'submitting' ? 0.7 : 1,
              cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
            }}
          >
            {status === 'submitting' ? 'Sending…' : 'Send Message'}
          </button>
          {status === 'error' && (
            <p
              style={{
                fontSize: '0.875rem',
                color: '#f87171',
                marginTop: '0.75rem',
              }}
            >
              Something went wrong. Please try again or email us directly at{' '}
              <a
                href="mailto:hello@contractorscoo.com"
                style={{ color: 'var(--color-accent)' }}
              >
                hello@contractorscoo.com
              </a>
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
