# Zelcore Docs Redesign — Design Spec

## Overview

Redesign the Docusaurus documentation site at `docs.zelcore.io` to visually match the design patterns of the main Zelcore website (`zelcore.io`). The approach is **CSS + Component Swizzling** — comprehensive CSS overhaul plus swizzled Docusaurus components for structural changes.

## Scope

- **Full visual match** with zelcore.io's design system
- **Dark mode default** with light mode toggle preserved
- **Custom fonts**: Inter (headings), Space Grotesk (body)
- **Redesigned homepage**: hero with gradient/blur, feature cards, doc category cards
- **Swizzled components**: Footer (ejected for layout control)
- **Navbar styled via CSS only** (no swizzle needed)
- **No content changes** — only visual/structural updates

## Routing Architecture

The current config uses `routeBasePath: '/'`, which means the docs plugin owns the root URL. With this setup, `src/pages/index.tsx` is **overridden** by the docs plugin — the docs homepage is determined by the doc with the lowest `sidebar_position` (currently `intro.md`).

**Solution**: Change `routeBasePath` to `'/docs'` so that:
- `src/pages/index.tsx` serves as the homepage at `/`
- All documentation lives under `/docs/...`
- The homepage can be a full custom React page with hero, features, and doc category cards

**URL change impact**: All doc URLs change from `docs.zelcore.io/getting-started/...` to `docs.zelcore.io/docs/getting-started/...`. Internal links in markdown files using relative paths will continue to work. The `editUrl` in config remains unchanged.

## Design System

### Colors — Dark Mode (Default)

| Token | CSS Variable | Hex | Usage |
|-------|-------------|-----|-------|
| Background | `--zel-bg` | `#080D20` | Page background, navbar |
| Page BG | `--zel-bg-page` | `#0A0F1F` | Main content area, sidebar |
| Surface | `--zel-surface` | `#0E1739` | Elevated sections, footer |
| Card | `--zel-card` | `#141C39` | Cards, code blocks |
| Border | `--zel-border` | `#2E3A5F` | Dividers, borders |
| Primary Blue | `--zel-primary` | `#1B63EF` | CTAs, active states, links |
| Accent Blue | `--zel-accent` | `#4461F2` | Hover states, secondary accents |
| Text Primary | `--zel-text` | `#F8FAFC` | Headings |
| Text Secondary | `--zel-text-secondary` | `#CDD5E0` | Body text, descriptions |
| Text Muted | `--zel-text-muted` | `#b4b9c9` | Tertiary text |

### Colors — Light Mode

| Token | CSS Variable | Hex | Usage |
|-------|-------------|-----|-------|
| Background | `--zel-bg` | `#FFFFFF` | Page background |
| Page BG | `--zel-bg-page` | `#FFFFFF` | Main content area |
| Surface | `--zel-surface` | `#f8f9fa` | Elevated sections |
| Card | `--zel-card` | `#f0f2f5` | Cards, code block backgrounds |
| Border | `--zel-border` | `#e2e8f0` | Dividers, borders |
| Primary Blue | `--zel-primary` | `#1B63EF` | CTAs, links (consistent) |
| Accent Blue | `--zel-accent` | `#4461F2` | Hover states |
| Text Primary | `--zel-text` | `#1a1a1a` | Headings |
| Text Secondary | `--zel-text-secondary` | `#4a5568` | Body text |
| Text Muted | `--zel-text-muted` | `#718096` | Tertiary text |

### Gradients (Dark Mode Only)

In light mode, gradients are replaced with flat backgrounds using the light mode palette.

| Name | Value | Usage |
|------|-------|-------|
| Hero | `linear-gradient(135deg, #080D20 0%, #0E1739 50%, #1B63EF33 100%)` | Homepage hero |
| Section | `linear-gradient(180deg, #080D20, #0E1739)` | Section transitions |
| Button | `linear-gradient(135deg, #1B63EF, #4461F2)` | Primary buttons (both modes) |
| Footer | `linear-gradient(180deg, #0E1739, #080D20)` | Footer background |
| Blur Glow | `#1B63EF4D` with `filter: blur(100px)` | Decorative glow behind hero |

### Typography

| Element | Font | Desktop Size | Tablet (≤996px) | Mobile (≤576px) | Weight | Line Height |
|---------|------|-------------|-----------------|-----------------|--------|-------------|
| Hero title | Inter | 56px | 42px | 32px | 800 | 1.15 |
| H1 (doc page) | Inter | 32px | 28px | 24px | 700 | 1.2 |
| H2 | Inter | 24px | 22px | 20px | 600 | 1.3 |
| H3 | Inter | 20px | 18px | 18px | 600 | 1.3 |
| Body | Space Grotesk | 16px | 16px | 15px | 400 | 1.7 |
| Sidebar link | Space Grotesk | 14px | — | — | 500 | 1.5 |
| Category label | Space Grotesk | 12px | 12px | 11px | 600 (uppercase, 1.5px tracking) | 1.4 |
| Code | System mono | 14px | 14px | 13px | 400 | 1.5 |

**Font fallback stacks:**
- Inter: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Space Grotesk: `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

Fonts loaded via Google Fonts CDN with `display=swap` in `docusaurus.config.ts` headTags.

### Responsive Breakpoints

Aligned with Docusaurus defaults:

| Name | Value | Usage |
|------|-------|-------|
| Desktop | > 996px | Full layout: sidebar + content + TOC |
| Tablet | 577px–996px | Sidebar collapses, 2-col grids |
| Mobile | ≤ 576px | Single column, stacked cards |

### Border Radius

| Usage | Radius |
|-------|--------|
| Buttons | 8px |
| Inputs | 8px |
| Small cards, code blocks | 8px |
| Feature cards, sections | 12px |
| Large hero sections | 24px |
| Sidebar active link | 6px |

### Spacing

| Context | Value |
|---------|-------|
| Section vertical padding | 48px (desktop), 32px (tablet), 24px (mobile) |
| Card padding | 20-24px |
| Sidebar link padding | 7px 12px |
| Feature grid gap | 16px |
| Doc category grid gap | 16px |
| Content max-width | 1200px (homepage), 800px (doc page) |

### Interactive States

| Element | Default | Hover | Active/Focus |
|---------|---------|-------|-------------|
| Primary button | `bg: gradient #1B63EF→#4461F2` | `opacity: 0.9` | `box-shadow: 0 0 0 3px #1B63EF40` |
| Secondary button | `border: 1px solid rgba(255,255,255,0.3)` | `bg: rgba(255,255,255,0.05)` | `box-shadow: 0 0 0 3px #1B63EF40` |
| Sidebar link | `color: #CDD5E0` | `bg: rgba(27,99,239,0.08)` | `bg: rgba(27,99,239,0.15), border-left: 3px solid #1B63EF, color: #FFF, font-weight: 600` |
| TOC link | `color: #505D8D` | `color: #CDD5E0` | `color: #1B63EF, border-left-color: #1B63EF` |
| Nav link | `color: #CDD5E0` | `color: #F8FAFC` | `color: #1B63EF` |
| Doc category card | `border: 1px solid #2E3A5F` | `border-color: #1B63EF, transform: translateY(-2px)` | — |

All transitions: `transition: all 200ms ease`.

## Component Architecture

### 1. Custom CSS (`src/css/custom.css`)

Complete rewrite of the existing stylesheet. Maps design tokens to Docusaurus `--ifm-*` CSS variables:

- `--ifm-color-primary` → `#1B63EF`
- `--ifm-background-color` → `#080D20` (dark) / `#FFFFFF` (light)
- `--ifm-font-family-base` → Space Grotesk fallback stack
- `--ifm-heading-font-family` → Inter fallback stack
- `--ifm-font-size-base` → `16px`
- `--ifm-line-height-base` → `1.7`

Covers: navbar, sidebar, doc content, headings, code blocks, admonitions, TOC, footer overrides, scrollbars, smooth transitions, responsive overrides.

### 2. Navbar (CSS Only — No Swizzle)

All navbar changes achievable via CSS:
- `.navbar` background: `#080D20`, `border-bottom: 1px solid #2E3A5F`
- `.navbar__title` font: Inter, weight 700
- `.navbar__link` color/hover states per interactive states table
- Color mode toggle styled to match palette

No swizzle needed — reduces maintenance burden.

### 3. Swizzled Footer (`src/theme/Footer/`)

Eject the Footer for full layout control:
- Gradient background: `linear-gradient(180deg, #0E1739, #080D20)`
- Layout: Brand column (left) + 4 link columns (right) in a CSS grid
- **Brand column content**: Zelcore logo (existing `img/logo.svg`), tagline text ("Your secure, simple crypto wallet for all devices"), and social media icon links (Discord, Twitter, GitHub — reuse URLs from existing footer config)
- Link columns: Reuse the 4 groups from `docusaurus.config.ts` footer config (Product, Ecosystem, Learning, Community)
- Section titles: uppercase, 11px, 1.5px letter-spacing
- Copyright bar: top border `#2E3A5F`, centered text

Method: `npm run swizzle @docusaurus/theme-classic Footer -- --eject`

### 4. Homepage (`src/pages/index.tsx` + `src/pages/index.module.css`)

Now properly serves as the homepage since `routeBasePath` changes to `/docs`.

**Hero Section:**
- Gradient background with absolute-positioned blue blur glow circle (300x300px, `filter: blur(100px)`, positioned top-right)
- Inter heading at 56px (desktop), Space Grotesk description at 16px
- Two buttons: "Get Started" → `/docs/intro` (gradient blue) + "View on GitHub" → `https://github.com/ZelCore-io/zelcore-docs` (outlined white)
- Max-width content container (600px)

**Feature Cards Section:**
- 4 cards in CSS grid: `grid-template-columns: repeat(4, 1fr)` (desktop), `repeat(2, 1fr)` (tablet), `1fr` (mobile)
- `#141C39` card background, 12px radius, 20px padding
- Icon in gradient-tinted container (40x40px, `#1B63EF22` bg, `#1B63EF33` border) + Inter heading + Space Grotesk description
- Reuse existing feature data: Self-Custody, Decentralized 2FA, Privacy Protection, Secure Login

**Doc Categories Section:**
- "Browse Documentation" label in blue uppercase
- 3 cards in grid: `repeat(3, 1fr)` (desktop), `repeat(2, 1fr)` (tablet), `1fr` (mobile)
- Cards represent the 3 main user journeys:
  1. **Getting Started**: links to Installation, Create Wallet, Import Wallet, Understanding Accounts
  2. **Guides**: links to FluxNode Setup, Staking Guides, Fusion Bridge, UTXO Consolidation
  3. **FAQ & Security**: links to Wallet FAQ, Security Best Practices, Account Access, Platform FAQ
- Each card: `#0E1739` background, `#2E3A5F` border, 12px radius
- Blue category label, Inter heading, arrow-prefixed link list
- All remaining categories (Features, Walkthroughs) are accessible via sidebar navigation

### 5. HomepageFeatures Component (`src/components/HomepageFeatures/`)

Update styling to match new card design. Component markup stays the same, CSS module rewritten for the new palette and spacing.

### 6. Font Loading

Add to `docusaurus.config.ts` under `headTags`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Montserrat is NOT loaded — it's used on zelcore.io but has no role in the docs site.

### 7. Prism Code Highlighting

Keep existing themes with minor adjustments:
- Light mode: `github` theme (unchanged)
- Dark mode: `dracula` theme (unchanged)
- Override code block container background to `#141C39` (matching card color) via CSS
- Code block border: `1px solid #2E3A5F`
- Border radius: 8px

## Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `docusaurus.config.ts` | Modify | Change `routeBasePath` to `/docs`, add `headTags` for fonts |
| `src/css/custom.css` | Rewrite | Complete CSS overhaul with design tokens |
| `src/pages/index.tsx` | Rewrite | New homepage with hero, features, doc categories |
| `src/pages/index.module.css` | Rewrite | Homepage-specific styles |
| `src/components/HomepageFeatures/index.tsx` | Modify | Update feature card markup for new design |
| `src/components/HomepageFeatures/styles.module.css` | Rewrite | New card styles |
| `src/theme/Footer/index.tsx` | Create (swizzle) | Custom footer layout with brand column |

## What's NOT Changing

- Documentation content (all 33 markdown files)
- Sidebar structure/auto-generation
- Deployment configuration (GitHub Actions)
- Static assets/images
- Prism themes (github/dracula)
- Navbar structure (styled via CSS, no swizzle)

## URL Change

`routeBasePath: '/'` → `routeBasePath: '/docs'`

All doc URLs gain a `/docs` prefix. Example: `/getting-started/installation/` → `/docs/getting-started/installation/`. This is necessary to enable the custom React homepage.

## Success Criteria

1. Dark mode visually matches zelcore.io's aesthetic (colors, fonts, spacing, gradients)
2. Light mode is coherent with a complete palette (all 10 tokens defined)
3. Homepage has hero with gradient/blur, feature cards, and doc category navigation
4. Sidebar uses zelcore.io patterns (uppercase category labels, left-border active state)
5. Code blocks and admonitions are properly styled in both themes
6. Responsive at 3 breakpoints: desktop (>996px), tablet (577-996px), mobile (≤576px)
7. `npm run build` succeeds without errors
8. No existing functionality broken (navigation, edit links, color toggle)
9. All interactive elements have hover, active, and focus states
10. Font fallbacks render acceptably if Google Fonts CDN is slow
