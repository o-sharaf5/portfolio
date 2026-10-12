# portfolio

**My design portfolio** — a single-page, fully static site built as a deliberate break from
template portfolios: dark editorial layout, oversized display type, film-grain overlay, and an
acid-green accent. Every project card links to a live demo and its source.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-blue?style=flat-square) ![Static](https://img.shields.io/badge/100%25-static-brightgreen?style=flat-square)

## Design decisions

- **Space Grotesk + JetBrains Mono** — a display/mono pairing instead of the usual Inter-everywhere look
- **CSS-only motion** — marquee ticker and hover glows via Tailwind v4 `@theme` keyframes; no animation libraries, `prefers-reduced-motion` respected
- **Film grain** — a fixed SVG `feTurbulence` overlay at 5% opacity for texture
- **Browser-chrome project cards** — each project presented as a fake browser tab pointing at its real demo URL
- **Zero client JS** — the page is a server-rendered static document (`next build` → 4 static pages, no client components)

## Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 · Vercel

## Getting started

```bash
npm install
npm run dev
npm run build   # fully static output
```

## License

MIT
