# Portfolio Website — pietertanoto.vercel.app

A modern, single-page portfolio website for Pieter Tanoto built with **Next.js 15 App Router**, **Tailwind CSS v3**, and **Framer Motion**.

---

## User Review Required

> [!IMPORTANT]
> Before I start scaffolding, please confirm a few design choices below so the build is exactly what you want.

> [!CAUTION]
> The `d:\all-my-coding-project\pietertanoto` directory currently has **only a README.md** and a `.git` folder. I will scaffold the entire Next.js project directly in this directory. All existing git history is preserved.

---

## Open Questions

> [!IMPORTANT]
> **1. Color palette** — Which direction do you prefer?
> - **A) Dark mode-first** — Deep navy/slate dark background with electric indigo/violet accents (similar to Linear, Vercel)
> - **B) Minimal light** — Clean white/off-white with dark ink and subtle accent color
> - **C) Let me pick** — I'll use a dark blue→purple gradient theme as the PRD suggests

> [!IMPORTANT]
> **2. Profile photo** — Do you have a profile photo to use in the Hero section?
> - If yes, drop it in `/public/images/profile.jpg` after scaffolding
> - If no, I'll generate a stylized placeholder using the image generation tool

> [!IMPORTANT]
> **3. Real content** — Do you want me to pre-fill placeholder data (lorem ipsum names/descriptions), or do you have real data to supply for:
> - Projects
> - Certifications
> - Work Experience
> - Social media URLs

> [!IMPORTANT]
> **4. Contact form backend** — How should the contact form submit?
> - **A) EmailJS** (client-side, no backend needed, free tier available)
> - **B) Resend** (Next.js API Route, simple setup)
> - **C) Just UI** — Show the form but no real submission for now

---

## Proposed Changes

### Phase 0 — Project Scaffolding

Scaffold a new Next.js 15 project **inside the existing git repo** at `d:\all-my-coding-project\pietertanoto`.

```
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
```

Key choices:
- TypeScript: **Yes** (safer, better DX)
- Tailwind CSS: **Yes**
- App Router: **Yes**
- `src/` directory: **Yes**

---

### Phase 1 — Design System & Fonts

#### [MODIFY] `tailwind.config.ts`
- Extend color palette with custom `primary`, `accent`, `surface`, `muted` tokens
- Add custom `fontFamily` for **Space Grotesk** + **Inter** from Google Fonts
- Add custom `animation` for toolbox carousel scroll

#### [MODIFY] `src/app/globals.css`
- CSS variables for light/dark mode tokens
- Smooth scrolling (`scroll-behavior: smooth`)
- Selection color, scrollbar styling

#### [MODIFY] `src/app/layout.tsx`
- Google Fonts import (Space Grotesk, Inter)
- ThemeProvider context wrapper
- SEO metadata (title, description, OG tags, Twitter cards)

---

### Phase 2 — Data Files

#### [NEW] `src/data/projects.ts`
```ts
export const projects = [
  { id, title, description, image, tags, liveUrl, githubUrl }
]
```

#### [NEW] `src/data/certifications.ts`
```ts
export const certifications = [
  { id, title, issuer, date, credentialUrl, logo }
]
```

#### [NEW] `src/data/experience.ts`
```ts
export const experiences = [
  { id, company, role, duration, responsibilities, logo }
]
```

#### [NEW] `src/data/socials.ts`
```ts
export const socials = [
  { name, url, icon }  // LinkedIn, GitHub, Instagram, X, TikTok, HackerRank, Email
]
```

#### [NEW] `src/data/toolbox.ts`
```ts
export const tools = [
  { name, icon }  // JS, TS, React, Next.js, Python, etc.
]
```

---

### Phase 3 — Theme Context

#### [NEW] `src/context/ThemeContext.tsx`
- `useTheme()` hook
- Reads/writes to `localStorage`
- Applies `dark` class to `<html>` element
- Smooth CSS transition on toggle

---

### Phase 4 — Components

#### [NEW] `src/components/Navbar.tsx`
- Fixed top, glassmorphism background (blur)
- Nav links with smooth scroll
- Active section highlight (IntersectionObserver)
- Dark/light toggle button (animated sun/moon icon)
- Hamburger menu for mobile (animated open/close)
- Framer Motion entrance animation

#### [NEW] `src/components/Hero.tsx`
- Two-column layout (text left, image right) on desktop; stacked on mobile
- Profile image (circular, with subtle glow ring)
- Name, tagline with animated typing or gradient text
- Short bio paragraph
- Social icons row with hover animations
- "View My Work" CTA button with scroll arrow
- Framer Motion: staggered fade-in

#### [NEW] `src/components/Toolbox.tsx`
- Section header: "My Toolbox"
- Two rows of infinite-scroll carousels (one L→R, one R→L)
- CSS `@keyframes` marquee (performant, pure CSS)
- Pause on hover
- Tech icons using `react-icons` or inline SVGs

#### [NEW] `src/components/Projects.tsx`
- Section header with optional category filter tabs
- 3-column grid (desktop) → 2-col (tablet) → 1-col (mobile)
- Project card: image, title, tags, description, GitHub + Live links
- Card hover: scale + box-shadow glow
- Framer Motion: staggered scroll-triggered entrance

#### [NEW] `src/components/Certifications.tsx`
- Section header
- Card grid layout (2-3 cols)
- Each card: logo, title, issuer, date, credential link
- Framer Motion: fade-up on scroll

#### [NEW] `src/components/Experience.tsx`
- Vertical timeline with center line
- Alternating left/right items on desktop
- Each item: company logo, role, duration, bullet points
- Framer Motion: slide-in from sides on scroll

#### [NEW] `src/components/Contact.tsx`
- Two-column: form left, contact info right
- Form fields: Name, Email, Phone (optional), Message
- Real-time validation
- Submit feedback (success/error toast)
- Contact info: email, phone, social links
- Framer Motion: fade-in on scroll

#### [NEW] `src/components/Footer.tsx`
- Dark background (both modes)
- Quick links, social icons, copyright
- "Back to Top" button with smooth scroll

---

### Phase 5 — Main Page Assembly

#### [MODIFY] `src/app/page.tsx`
- Import all section components
- `<section id="home">`, `<section id="projects">` etc. for scroll targeting
- IntersectionObserver for active nav tracking

---

### Phase 6 — Public Assets

#### [NEW] `public/images/` 
- `profile.jpg` — placeholder or user-supplied
- Project thumbnails (generated or user-supplied)

#### [NEW] `public/icons/`
- Certification logos, company logos (SVG preferred)

---

## Verification Plan

### Automated
- `npm run build` — Verify no TS/lint errors
- `npm run dev` — Local preview at `localhost:3000`

### Manual via Browser Agent
- Visual review of all sections (desktop + mobile viewport)
- Dark/light mode toggle test
- Toolbox carousel animation test
- Smooth scroll navigation test
- Hover effects on project cards

### Performance
- Lighthouse audit on built version
- Next.js Image component for all images (automatic optimization)

---

## Technology Versions

| Package | Version |
|---------|---------|
| Next.js | 15.x (App Router) |
| React | 19.x |
| Tailwind CSS | 3.x |
| Framer Motion | 11.x |
| react-icons | 5.x |
| TypeScript | 5.x |
