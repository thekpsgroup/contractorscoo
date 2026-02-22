# Contractors COO — Site Reference

## Theme Tokens

| Token | Value | Tailwind Class | Usage |
|---|---|---|---|
| `--color-canvas` | `#0a0a0a` | `bg-canvas` | Page background |
| `--color-surface` | `#0f1218` | `bg-surface` | Cards, elevated surfaces |
| `--color-line` | `#1e2535` | `border-line` | Section borders, dividers |
| `--color-fg` | `#f1f5f9` | `text-fg` | Primary text |
| `--color-muted` | `#94a3b8` | `text-muted` | Secondary text |
| `--color-muted-2` | `#64748b` | `text-muted-2` | Tertiary, labels |
| `--color-accent` | `#3b82f6` | `text-accent` | Inline highlights, eyebrows, focus |
| `--color-accent-hover` | `#2563eb` | — | Button hover bg |
| `--color-accent-dark` | `#1d4ed8` | `bg-accent-dark` | Button fills |
| `--color-accent-deeper` | `#1e3a8a` | `bg-accent-deeper` | Final CTA section bg |

---

## Metadata Per Page

| Page | Title | Description |
|---|---|---|
| `/` | Contractors COO — Fractional COO for Contractor Teams | Install the operating cadence, leadership structure, and execution rhythm your contractor business has been missing. 90-day fixed-scope COO install for teams doing $1M–$10M/year. |
| `/offer` | The 90-Day COO Install — Full Offer Details | Who it's for, exact deliverables, what changes inside 90 days, and how pricing works. Fixed-scope fractional COO for contractor teams doing $1M–$10M/year. |
| `/proof` | Proof — Contractor COO Outcomes & Results | Outcome patterns from contractor COO installs. Meeting chaos to operating cadence, owner bottleneck to delegation, revenue without margin to scoreboard clarity. |
| `/about` | About — Contractors COO \| The KPS Group | Why contractor operations break at scale, why cadence fixes most of it, and why execution systems matter more than strategy. A service of The KPS Group. |
| `/contact` | Contact — Book a Discovery Call | Book a 30-minute discovery call with Contractors COO. We assess your current operating structure and tell you exactly what needs to change. |

---

## Schema Markup Deployed

| Page | Schema Types |
|---|---|
| Layout (all pages) | `Organization` + `LocalBusiness` + `ProfessionalService` |
| `/` | `Service`, `FAQPage`, `WebPage` with `ReserveAction` |
| `/offer` | `Service` with `Offer` |
| `/proof` | `WebPage` |
| `/about` | `AboutPage` with nested `Organization` + `OfferCatalog` |
| `/contact` | `ContactPage` with `ContactPoint` + `ReserveAction` |

---

## Analytics Events

| Event | Trigger | Implementation |
|---|---|---|
| `book_call_click` | Any "Book a Call" button click | `BookingButton` component via `trackEvent()` |
| `form_submit_success` | Contact form successful submission | `ContactForm` client component via `trackEvent()` |

Set your GA4 ID in `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Post-Deploy Verification Checklist

### Canonical + Redirects
```bash
# Apex should 301 → www
curl -I http://contractorscoo.com/
# Expected: HTTP/1.1 301 | Location: https://www.contractorscoo.com/

# www should return 200
curl -I https://www.contractorscoo.com/
# Expected: HTTP/1.1 200

# Canonical tag on homepage
curl -s https://www.contractorscoo.com/ | grep -i canonical
# Expected: <link rel="canonical" href="https://www.contractorscoo.com"/>
```

### Sitemap + Robots
```bash
# Sitemap should list all 5 canonical URLs
curl https://www.contractorscoo.com/sitemap.xml
# Expected: 5 <url> entries, all prefixed with https://www.contractorscoo.com

# Robots should point to sitemap
curl https://www.contractorscoo.com/robots.txt
# Expected: Sitemap: https://www.contractorscoo.com/sitemap.xml
```

### Schema Validation
```bash
# Homepage schema
curl -s https://www.contractorscoo.com/ | grep -o 'application/ld+json'
# Expected: 3 matches (Organization, Service, FAQ)

# Validate at: https://validator.schema.org/
# Validate at: https://search.google.com/test/rich-results
```

### OG Image
```bash
# Should return 200 and content-type: image/png
curl -I https://www.contractorscoo.com/opengraph-image
# Expected: HTTP/2 200 | content-type: image/png | width:1200 height:630
```

### Meta / Title Lengths
| Page | Title Length | Target |
|---|---|---|
| `/` | 55 chars | ✓ 50–60 |
| `/offer` | 43 chars | ✓ 40–60 |
| `/proof` | 42 chars | ✓ 40–60 |
| `/about` | 38 chars | ✓ 35–60 |
| `/contact` | 38 chars | ✓ 35–60 |

### Security Headers
```bash
curl -I https://www.contractorscoo.com/ | grep -i "x-frame\|x-content\|referrer"
# Expected headers:
# x-frame-options: DENY
# x-content-type-options: nosniff
# referrer-policy: strict-origin-when-cross-origin
```

### Google Search Console
1. Submit property: `https://www.contractorscoo.com`
2. Submit sitemap: `https://www.contractorscoo.com/sitemap.xml`
3. Run URL Inspection on `/`

---

## Pre-Launch Checklist

- [ ] Replace `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` with real GA4 ID
- [ ] Wire up contact form backend (see `ContactForm.tsx` TODO comment)
  - Option A: Formspree — add fetch to `https://formspree.io/f/{id}`
  - Option B: Custom API route at `/api/contact`
- [ ] Verify Calendly URL: `https://calendly.com/thekpsgroup/30min`
- [ ] Add real phone/email if different from KPS Group defaults
- [ ] Set up DNS: `www.contractorscoo.com` → Vercel/host
- [ ] Configure apex redirect at DNS/CDN level (or use next.config.ts redirect)
- [ ] Submit to Google Search Console
- [ ] Test booking button fires `book_call_click` in GA4 DebugView
- [ ] Test contact form fires `form_submit_success` in GA4 DebugView
- [ ] Validate schema at https://validator.schema.org/
- [ ] Check rich results: https://search.google.com/test/rich-results

---

## Design Guardrails

### Accent color discipline
- Primary accent: `--color-accent` (`#3b82f6`) — text only (eyebrows, checkmarks, inline)
- Button fills: `--color-accent-dark` (`#1d4ed8`) — darker for readability on dark bg
- Hover: `--color-accent-hover` (`#2563eb`)
- CTA band: `--color-accent-deeper` (`#1e3a8a`)
- **Never use blue on white/light backgrounds** — this site is dark-only
- **Never introduce gradients, glow effects, or box shadows**

### Typography guardrails
- `.text-display` — H1 only, one per page
- `.text-headline` — H2 section headings
- `.eyebrow` — mono uppercase, accent blue only
- Body copy: always `var(--color-muted)` — never pure white for paragraphs
- Links: `var(--color-accent)` only (not custom per-element)

### Section structure rules
- Every content section uses `.section` or `.section-lg` class
- Every section has `border-bottom: 1px solid var(--color-line)` (from class)
- Final CTA band is the only section with a background color override
- Max content width: `72rem` via `.container-inner`
- No full-bleed images, no decorative illustrations, no stock photos

### Forbidden elements
- Gradients of any kind
- `box-shadow` on content cards
- Rounded corners > `border-radius: 0.5rem`
- Icons beyond SVG text symbols (→, ✓, ✕, •)
- Stock photography or SaaS-style UI mockups
- Pill-shaped buttons

### CTA repetition pattern (per page)
1. Hero: Primary CTA (Book a Call) + Secondary ghost link (→ page)
2. Mid-section: Ghost link ("Full offer details →")
3. Final CTA band: Standalone BookingButton
4. Mobile: Fixed bottom bar (always visible)

---

## File Structure

```
src/
├── app/
│   ├── globals.css            ← All theme tokens + component classes
│   ├── layout.tsx             ← Root layout, Organization schema, Analytics
│   ├── page.tsx               ← Homepage (/, all 5 sections)
│   ├── opengraph-image.tsx    ← Dynamic OG image (1200×630)
│   ├── sitemap.ts             ← Auto-generates /sitemap.xml
│   ├── robots.ts              ← Auto-generates /robots.txt
│   ├── offer/page.tsx         ← /offer — full offer details
│   ├── proof/page.tsx         ← /proof — outcome examples
│   ├── about/page.tsx         ← /about — KPS Group, positioning
│   └── contact/
│       ├── page.tsx           ← /contact — booking + form
│       └── ContactForm.tsx    ← Client component (form + GA event)
└── components/
    ├── Analytics.tsx          ← GA4 script + trackEvent()
    ├── BookingButton.tsx      ← book_call_click event + Calendly
    ├── Footer.tsx             ← Site footer
    ├── JsonLd.tsx             ← JSON-LD schema injector
    ├── MobileCtaBar.tsx       ← Fixed mobile CTA bar
    └── Nav.tsx                ← Sticky nav
```
