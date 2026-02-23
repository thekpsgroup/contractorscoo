import { ImageResponse } from 'next/og';

export const runtime     = 'edge';
export const size        = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          background:      '#1d4ed8',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          gap:             '6px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color:         'rgba(255,255,255,0.55)',
            fontSize:      '22px',
            fontWeight:    700,
            fontFamily:    'monospace',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            lineHeight:    1,
          }}
        >
          CONTRACTORS
        </div>
        {/* Main wordmark */}
        <div
          style={{
            color:         '#ffffff',
            fontSize:      '48px',
            fontWeight:    800,
            fontFamily:    'monospace',
            letterSpacing: '-1px',
            lineHeight:    1,
          }}
        >
          COO
        </div>
      </div>
    ),
    { ...size }
  );
}
