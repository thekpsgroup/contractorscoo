# Contractors COO

Marketing site for [contractorscoo.com](https://www.contractorscoo.com) — Fractional COO + Operations Leadership for contractor teams doing $1M–$10M/year. A service of The KPS Group.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Resend

---

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create a `.env.local` file in the project root (never committed):

```bash
# Google Analytics 4 — get from analytics.google.com → Admin → Data Streams
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Resend — get from resend.com/api-keys
RESEND_API_KEY=re_...

# Resend Audience ID — get from resend.com/audiences
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

For **Vercel deployment**, set these three variables in:
`Vercel Dashboard → Project → Settings → Environment Variables`

The sending domain (`thekpsgroup.com`) must be verified in the Resend dashboard before emails deliver.

---

## Deployment (Vercel)

Vercel auto-detects Next.js. No additional configuration required.

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Set the three environment variables above
4. Deploy

Build command: `next build` (auto-detected)
Node.js: `>=18.17.0` (enforced via `engines` in `package.json`)

### Custom Domain

Add both `contractorscoo.com` and `www.contractorscoo.com` in Vercel domain settings.
The `next.config.ts` redirects the apex domain to `www` automatically.

---

## Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static | Homepage |
| `/offer` | Static | The 90-Day COO Install |
| `/proof` | Static | Outcome examples |
| `/about` | Static | About / The KPS Group |
| `/contact` | Static | Contact + discovery call |
| `/monday-agenda` | Static | Lead magnet — The Monday Agenda |
| `/api/contact` | Dynamic | Contact form → Resend notification email |
| `/api/subscribe` | Dynamic | Monday Agenda signup → Resend audience + delivery email |
| `/sitemap.xml` | Static | Generated sitemap |
| `/robots.txt` | Static | Crawler rules |
| `/opengraph-image` | Edge | OG image (1200×630) |
| `/icon` | Edge | Favicon (32×32 PNG) |
