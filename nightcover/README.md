# Nightcover — landing page

Single-page Next.js (App Router) site for Nightcover, an after-hours and
overflow phone support service for UK businesses.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- One route: `/`
- `app/api/lead/route.ts` forwards the pilot request form to Formspree
- A Calendly iframe embed for booking a 15-minute call

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Absolute site URL, used for SEO/Open Graph tags |
| `NEXT_PUBLIC_CALENDLY_URL` | Your real Calendly event URL, embedded in the "Pick a time" section |
| `FORMSPREE_ENDPOINT` | Your Formspree form endpoint (e.g. `https://formspree.io/f/xxxxabcd`). If left blank, form submissions are just logged to the server console — useful for local dev, but you'll want this set before going live |

## Two placeholders you need to fill in yourself

These can't be generated as part of this build:

1. **`public/sample.mp3`** — a real ~60-second sample of a trained agent
   handling a booking call, referenced in the "What You Hear" section.
   Delete `public/sample-mp3-PLACEHOLDER.txt` once it's in place.
2. **`public/og.png`** (1200×630px) — the Open Graph/social share image,
   referenced in `app/layout.tsx`. Delete `public/og-PLACEHOLDER.txt` once
   it's in place.

## Design tokens

If you want to adjust the palette or type, see `tailwind.config.ts`:

- `stone` / `stone-alt` — background tones
- `ink` / `ink-soft` — headings and body text
- `forest` / `forest-hover` — primary CTA colour
- `gold` — secondary accent (used sparingly: numerals, hover underlines, FAQ markers)
- `line` — hairline dividers and borders
- Fonts: Source Serif 4 (H1 only) and Instrument Sans (everything else), both
  loaded via `next/font/google` in `app/layout.tsx`

## Notes on scope

- Only one route (`/`) is built, per the brief. The footer links to
  `/privacy`, `/data-processing` and `/contact` — these pages don't exist yet
  and will 404 until you add them.
- No analytics or cookie banner are included, per the brief ("Cookie banner
  only if you add analytics; default to none").
- No fake testimonials or client logos are included. If you want a
  testimonials section later, add real quotes with permission — don't invent
  them.
