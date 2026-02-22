'use client';

import { useState } from 'react';
import { trackEvent } from '@/components/Analytics';

export function MondayAgendaForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail]     = useState('');
  const [name,  setName]      = useState('');
  const [status, setStatus]   = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, name }),
      });

      const data = await res.json() as { ok?: boolean; error?: string };

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      trackEvent('lead_magnet_submit', {
        form_name:    'monday_agenda',
        email_domain: email.split('@')[1] ?? '',
      });

      setStatus('success');
    } catch {
      setErrorMsg('Something went wrong. The full agenda is published below.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div
        style={{
          padding:         compact ? '1rem 0' : '1.5rem',
          backgroundColor: compact ? 'transparent' : 'var(--color-surface)',
          borderRadius:    compact ? 0 : '0.375rem',
          border:          compact ? 'none' : '1px solid var(--color-line)',
        }}
      >
        <p
          style={{
            fontFamily:    'var(--font-geist-mono, monospace)',
            fontSize:      '0.6875rem',
            fontWeight:    700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color:         'var(--color-accent)',
            marginBottom:  '0.5rem',
          }}
        >
          Got it.
        </p>
        <p style={{ fontSize: '0.9375rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>
          {compact
            ? 'Check your inbox. The Monday Agenda is on its way.'
            : 'Check your inbox — the full agenda with timing guide, session rules, and open-item log template is on its way. The published version is also below if you want to start today.'}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div
        style={{
          display:       'flex',
          flexDirection: compact ? 'row' : 'column',
          gap:           '0.75rem',
          flexWrap:      'wrap',
          alignItems:    compact ? 'flex-end' : 'flex-start',
        }}
      >
        {!compact && (
          <div className="form-field" style={{ width: '100%', maxWidth: '340px' }}>
            <label htmlFor="agenda-name" className="form-label">First name</label>
            <input
              id="agenda-name"
              type="text"
              autoComplete="given-name"
              className="form-input"
              placeholder="Your first name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div
          className="form-field"
          style={{ width: '100%', maxWidth: compact ? '280px' : '340px', flexGrow: compact ? 1 : 0 }}
        >
          {!compact && <label htmlFor="agenda-email" className="form-label">Work email</label>}
          <input
            id="agenda-email"
            type="email"
            required
            autoComplete="email"
            className="form-input"
            placeholder={compact ? 'Work email' : 'you@company.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary"
          style={{
            opacity:   status === 'submitting' ? 0.7 : 1,
            cursor:    status === 'submitting' ? 'not-allowed' : 'pointer',
            alignSelf: compact ? 'stretch' : 'auto',
          }}
        >
          {status === 'submitting' ? 'Sending…' : compact ? 'Get the PDF' : 'Send Me the PDF'}
        </button>
      </div>
      {status === 'error' && (
        <p style={{ fontSize: '0.875rem', color: '#f87171', marginTop: '0.625rem' }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
