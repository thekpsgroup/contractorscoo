import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Canonical host enforcement ──────────────────────────────
  // Redirect apex domain to www (choose one direction and stick to it)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'contractorscoo.com' }],
        destination: 'https://www.contractorscoo.com/:path*',
        permanent: true, // 301
      },
    ];
  },

  // ── Security headers ────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',    value: 'nosniff'           },
          { key: 'X-Frame-Options',            value: 'DENY'              },
          { key: 'X-XSS-Protection',           value: '1; mode=block'    },
          { key: 'Referrer-Policy',            value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',         value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
