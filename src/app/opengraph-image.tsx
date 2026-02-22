import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Blue accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: '#1d4ed8',
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            color: '#3b82f6',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '28px',
          }}
        >
          CONTRACTORS COO
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#f1f5f9',
            fontSize: '64px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-2px',
            maxWidth: '900px',
            marginBottom: '28px',
          }}
        >
          Fractional COO for Contractor Teams
        </div>

        {/* Subhead */}
        <div
          style={{
            color: '#94a3b8',
            fontSize: '24px',
            lineHeight: 1.5,
            maxWidth: '700px',
          }}
        >
          90-day operational install. Cadence, accountability, and execution rhythm.
        </div>

        {/* Bottom: KPS tag */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '80px',
            color: '#64748b',
            fontSize: '14px',
            letterSpacing: '1px',
          }}
        >
          A service of The KPS Group · contractorscoo.com
        </div>

        {/* Right accent block */}
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '3px',
            height: '120px',
            background: '#1d4ed8',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
