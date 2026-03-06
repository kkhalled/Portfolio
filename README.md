# Khaled Mahomud — Portfolio

> Personal portfolio of Khaled Mahomud, a Computer Science graduate and frontend developer specializing in React, Next.js, and TypeScript.

**Live:** [https://khaled-contact-portfolio.vercel.app/](https://khaled-contact-portfolio.vercel.app/)

---

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Next.js 16 (App Router)   |
| Language   | TypeScript 5              |
| Styling    | Tailwind CSS v4           |
| Animation  | Motion (motion/react) v12 |
| Font       | Inter — Google Fonts      |
| Analytics  | Vercel Analytics          |
| Deployment | Vercel                    |

---

## Features

- **Splash screen** — Animated intro with spinning ring, letter mark, progress bar, and a smooth slide-up exit before the app appears
- **Orchestrated page load** — Sidebar wave-animates in first, then main content fades in; all gated behind a shared `SplashContext` so nothing plays under the splash
- **Sidebar wave animation** — Every sidebar element (name → role → bio → nav links → social icons) springs in as one continuous cascading wave
- **Scroll-reveal sections** — Experience cards, project articles, and contact block all animate in as they enter the viewport
- **Hero & About full-viewport** — Each takes `min-h-dvh` so only one section is visible at a time
- **Smart active nav** — Nav links only highlight when the user actually scrolls to a section (no false "active" state on page load)
- **Cursor spotlight** — Radial teal glow follows the mouse
- **Mobile drawer** — Animated hamburger (→ ✕) opens a staggered full-width nav drawer on mobile
- **Back to top** — Floating button appears after scrolling 300 px
- **SEO + Open Graph** — Full metadata, Open Graph tags, Twitter card, and `robots` config
- **Accessibility** — Skip-to-content link, `aria-label`s on all icon links, `focus-visible` outlines, `prefers-reduced-motion` respected

---

## Project Structure

```
app/
  layout.tsx          # Root layout — SplashProvider, analytics, font, metadata
  page.tsx            # Entry point → renders AppShell
  globals.css         # Tailwind v4 theme tokens, base styles, spotlight, focus

src/
  features/
    AppShell.tsx      # Page orchestration — sidebar + main content + footer
    hero/             # Hero section (full viewport, on-mount stagger)
    about/            # About section (full viewport, scroll-reveal)
    experience/       # Experience cards (scroll-reveal stagger)
    projects/         # Featured + other projects grid (scroll-reveal)
    contact/          # Contact section (scroll-reveal stagger)
    nav/              # SidebarNav — desktop wave + mobile hamburger drawer

  hooks/
    useScrollSpy.ts   # Activates nav item only when scrolled to that section
    useMousePosition  # Tracks cursor for the spotlight effect

  lib/
    animations.ts     # Centralized Variants — sidebarReveal, mainReveal,
                      #   heroContainer/Item, staggerContainer/Item, sectionReveal
    SplashContext.tsx  # Shared context — splashDone flag gating all page animations
    data.ts           # All content — projects, experience, about text, tech list
    api.ts / utils.ts # Utility helpers

  ui/
    SplashScreen.tsx  # Splash intro animation
    BackToTop.tsx     # Floating scroll-to-top button
    Button.tsx        # ButtonLink component (primary / ghost variants)
    Icon.tsx          # Icon primitives
    SectionHeading.tsx
    TechBadge.tsx

  types/
    index.ts          # NavSection, Project, Experience types
```

---

## Animation Architecture

All page-load animations are coordinated through `SplashContext`:

```
SplashScreen plays (2.8s)
  → exits with slide-up (0.8s)
    → onExitComplete fires → splashDone = true
      → SidebarNav: aside slides in (0.4s)
        → wave items spring in one by one (0.09s stagger)
      → AppShell main: fades in (delay 0.85s)
        → Hero text lines stagger in (0.09s gaps)
```

Scroll-triggered sections use `whileInView` with `viewport={{ once: true }}` — they only animate once, the first time they enter the screen.

Key values to tweak in `src/lib/animations.ts`:

| Export                             | Controls                                       |
| ---------------------------------- | ---------------------------------------------- |
| `mainReveal.transition.delay`      | Gap between splash exit and content appearance |
| `heroContainer.staggerChildren`    | Speed of hero text wave                        |
| `staggerContainer.staggerChildren` | Speed of section item waves                    |

---

## Getting Started

**Requirements:** Node.js 18+

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000). No environment variables required.

---

## Content

All portfolio content lives in `src/lib/data.ts`:

- `featuredProjects` — main project cards with image, description, tech, GitHub, live URL
- `otherProjects` — smaller noteworthy projects grid
- `experiences` — work/internship history
- `aboutParagraphs` — bio text
- `coreTech` — technology list shown in About section

To update your portfolio, edit that file — no component changes needed.

---

## Customization

| What             | Where                                               |
| ---------------- | --------------------------------------------------- |
| Colors / theme   | `app/globals.css` → `@theme` block                  |
| Animation timing | `src/lib/animations.ts`                             |
| Splash duration  | `src/ui/SplashScreen.tsx` → `setTimeout(..., 2800)` |
| Nav sections     | `src/features/nav/SidebarNav.tsx` → `LINKS` array   |
| Metadata / SEO   | `app/layout.tsx` → `metadata` export                |

---

## Deployment

The project is deployed on [Vercel](https://vercel.com). Push to `main` and Vercel picks it up automatically. No environment variables are required.

---

## License

MIT — free to use as inspiration. Please don't deploy it as-is with my personal information.
