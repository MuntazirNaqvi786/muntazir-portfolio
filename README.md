# MUNTAZIR — THE SERIES

A cinematic, streaming-inspired portfolio for **Muntazir Naqvi**: System Engineer specializing in MSP automation, RMM platforms and endpoint security.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform look. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, GitHub Pages or any static host.

## Updating the content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from it.

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub, years in IT | `profile` |
| A project, or a new one | `projects` (add an object; it appears in Originals, the overlay, the resume sheet and the counts) |
| Achievements / certifications | `achievements`, `certifications` (add a `link` to make a credential clickable) |
| Skills and their "where it's used" notes | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile order (Recruiter / Engineer / Storyteller) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

**Resume:** replace `public/assets/Muntazir_Naqvi_Resume.pdf`.

**Photo:** the responsive portraits (`portrait-420/720/1100.webp`) and the social share image (`og-image.jpg`) live in `public/assets/`. To regenerate them from a new photo, put a high-res photo in `pic1.jpeg` and a background-removed cutout with the same framing in `pic.png` (project root), then run `npm run images`. This overwrites the files in `public/assets/`.

## Stack

React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Accessibility and keyboard shortcuts

- `prefers-reduced-motion` is respected (smooth scroll, cursor, tilt, particles and the pinned horizontal scroll turn off).
- **Opening:** Enter or Esc skips it. **Play Intro:** Space pauses, ← and → change slides, Esc closes. **Overlays:** Esc closes.
