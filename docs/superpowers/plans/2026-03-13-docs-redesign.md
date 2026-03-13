# Zelcore Docs Redesign Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Docusaurus docs site to visually match zelcore.io's design system (colors, typography, layout patterns).

**Architecture:** CSS-first approach with one swizzled component (Footer). Update `routeBasePath` from `/` to `/docs` to enable a custom React homepage. Rewrite `custom.css` with zelcore.io design tokens mapped to Docusaurus `--ifm-*` variables. Redesign homepage with hero+gradient, feature cards, and doc category navigation.

**Tech Stack:** Docusaurus 3.9.2, React 19, CSS custom properties, Google Fonts (Inter, Space Grotesk)

**Spec:** `docs/superpowers/specs/2026-03-13-docs-redesign-design.md`

---

## Chunk 1: Foundation (Config + CSS)

### Task 1: Update docusaurus.config.ts

**Files:**
- Modify: `docusaurus.config.ts`

- [ ] **Step 1: Change routeBasePath and add headTags for fonts**

In `docusaurus.config.ts`, make these changes:

1. Change `routeBasePath: '/'` to `routeBasePath: '/docs'` (line 49)
2. Add `headTags` array at the top level of the config (sibling to `presets`):

```typescript
headTags: [
  {
    tagName: 'link',
    attributes: {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous',
    },
  },
  {
    tagName: 'link',
    attributes: {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap',
    },
  },
],
```

- [ ] **Step 2: Verify config is valid**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npx docusaurus build --no-minify 2>&1 | head -30`
Expected: Build starts without config parse errors. May have broken link warnings due to routeBasePath change — that's expected and will resolve later.

- [ ] **Step 3: Commit**

```bash
git add docusaurus.config.ts
git commit -m "chore: change routeBasePath to /docs and add Google Fonts"
```

---

### Task 2: Rewrite custom.css with design tokens

**Files:**
- Rewrite: `src/css/custom.css`

- [ ] **Step 1: Write the complete new custom.css**

Replace the entire contents of `src/css/custom.css` with the new design system CSS. This is the core of the redesign.

The CSS must define:

**Root (light mode) variables:**
```css
:root {
  /* Zelcore Design Tokens - Light Mode */
  --zel-bg: #FFFFFF;
  --zel-bg-page: #FFFFFF;
  --zel-surface: #f8f9fa;
  --zel-card: #f0f2f5;
  --zel-border: #e2e8f0;
  --zel-primary: #1B63EF;
  --zel-accent: #4461F2;
  --zel-text: #1a1a1a;
  --zel-text-secondary: #4a5568;
  --zel-text-muted: #718096;

  /* Map to Docusaurus variables */
  --ifm-color-primary: #1B63EF;
  --ifm-color-primary-dark: #1656d6;
  --ifm-color-primary-darker: #1451ca;
  --ifm-color-primary-darkest: #1143a6;
  --ifm-color-primary-light: #3575f1;
  --ifm-color-primary-lighter: #4281f2;
  --ifm-color-primary-lightest: #5d92f4;

  --ifm-background-color: var(--zel-bg);
  --ifm-background-surface-color: var(--zel-surface);
  --ifm-font-color-base: var(--zel-text-secondary);
  --ifm-heading-color: var(--zel-text);
  --ifm-color-content-secondary: var(--zel-text-muted);

  --ifm-font-family-base: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --ifm-heading-font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --ifm-font-size-base: 16px;
  --ifm-line-height-base: 1.7;

  --ifm-code-font-size: 95%;
  --docusaurus-highlighted-code-line-bg: rgba(27, 99, 239, 0.1);
  --ifm-navbar-background-color: var(--zel-bg);
  --ifm-color-emphasis-300: var(--zel-border);
}
```

**Dark mode variables:**
```css
[data-theme='dark'] {
  --zel-bg: #080D20;
  --zel-bg-page: #0A0F1F;
  --zel-surface: #0E1739;
  --zel-card: #141C39;
  --zel-border: #2E3A5F;
  --zel-primary: #1B63EF;
  --zel-accent: #4461F2;
  --zel-text: #F8FAFC;
  --zel-text-secondary: #CDD5E0;
  --zel-text-muted: #b4b9c9;

  --ifm-color-primary: #1B63EF;
  --ifm-color-primary-dark: #1656d6;
  --ifm-color-primary-darker: #1451ca;
  --ifm-color-primary-darkest: #1143a6;
  --ifm-color-primary-light: #3575f1;
  --ifm-color-primary-lighter: #4281f2;
  --ifm-color-primary-lightest: #5d92f4;

  --ifm-background-color: var(--zel-bg);
  --ifm-background-surface-color: var(--zel-surface);
  --ifm-navbar-background-color: var(--zel-bg);
  --ifm-font-color-base: var(--zel-text-secondary);
  --ifm-heading-color: var(--zel-text);
  --ifm-color-content-secondary: var(--zel-text-muted);
  --ifm-color-emphasis-300: var(--zel-border);
  --ifm-code-background: var(--zel-card);
  --docusaurus-highlighted-code-line-bg: rgba(27, 99, 239, 0.15);
}
```

**Navbar styling (CSS only, no swizzle):**
```css
.navbar {
  border-bottom: 1px solid var(--zel-border);
  padding: 0.75rem 0;
  box-shadow: none;
}

.navbar__title {
  font-family: var(--ifm-heading-font-family);
  font-weight: 700;
  font-size: 1.25rem;
}

.navbar__link {
  font-weight: 500;
  color: var(--zel-text-secondary);
  transition: color 200ms ease;
}

.navbar__link:hover {
  color: var(--zel-text);
}

.navbar__link--active {
  color: var(--zel-primary);
}
```

**Sidebar styling:**
```css
.menu {
  background: var(--zel-bg-page);
}

.theme-doc-sidebar-container {
  border-right: 1px solid var(--zel-border) !important;
}

.menu__list-item-collapsible .menu__link {
  font-family: var(--ifm-heading-font-family);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--zel-primary);
}

.menu__link {
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  padding: 7px 12px;
  transition: all 200ms ease;
  color: var(--zel-text-secondary);
}

.menu__link:hover:not(.menu__link--active) {
  background-color: rgba(27, 99, 239, 0.08);
  color: var(--zel-text-secondary);
}

.menu__link--active:not(.menu__link--sublist) {
  background-color: rgba(27, 99, 239, 0.15);
  border-left: 3px solid var(--zel-primary);
  color: var(--zel-text);
  font-weight: 600;
}
```

**Typography:**
```css
html {
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--ifm-heading-font-family);
  letter-spacing: -0.02em;
  color: var(--ifm-heading-color);
}

h1 { font-size: 32px; font-weight: 700; line-height: 1.2; }
h2 { font-size: 24px; font-weight: 600; line-height: 1.3; margin-top: 2.5rem; }
h3 { font-size: 20px; font-weight: 600; line-height: 1.3; margin-top: 2rem; }

article { line-height: 1.7; }

.markdown h1:first-child { margin-bottom: 1.5rem; }
```

**Code blocks:**
```css
.prism-code {
  border: 1px solid var(--zel-border);
  border-radius: 8px;
}

[data-theme='dark'] div[class*='codeBlockContainer'] {
  background-color: var(--zel-card);
}
```

**Admonitions:**
```css
.admonition {
  border-left-width: 4px;
  border-radius: 0 8px 8px 0;
}
```

**Table of contents:**
```css
.table-of-contents {
  border-left: 2px solid var(--zel-border);
}

.table-of-contents__link {
  color: var(--zel-text-muted);
  transition: color 200ms ease;
}

.table-of-contents__link:hover {
  color: var(--zel-text-secondary);
}

.table-of-contents__link--active,
.table-of-contents__link--active code {
  color: var(--zel-primary);
}

.table-of-contents .table-of-contents__link--active {
  border-left-color: var(--zel-primary);
}
```

**Buttons:**
```css
.button--primary {
  background: linear-gradient(135deg, #1B63EF, #4461F2);
  border: none;
  font-weight: 600;
  transition: all 200ms ease;
}

.button--primary:hover {
  opacity: 0.9;
}

.button--primary:focus-visible {
  box-shadow: 0 0 0 3px rgba(27, 99, 239, 0.25);
}
```

**Cards:**
```css
.card {
  border-radius: 12px;
  transition: all 200ms ease;
}

[data-theme='dark'] .card {
  background-color: var(--zel-card);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(27, 99, 239, 0.1);
}
```

**Scrollbar (dark mode):**
```css
[data-theme='dark'] ::-webkit-scrollbar { width: 8px; height: 8px; }
[data-theme='dark'] ::-webkit-scrollbar-track { background: var(--zel-bg); }
[data-theme='dark'] ::-webkit-scrollbar-thumb { background: var(--zel-border); border-radius: 4px; }
[data-theme='dark'] ::-webkit-scrollbar-thumb:hover { background: var(--zel-primary); }
```

**Responsive overrides:**
```css
@media screen and (max-width: 996px) {
  h1 { font-size: 28px; }
  h2 { font-size: 22px; }
  h3 { font-size: 18px; }
}

@media screen and (max-width: 576px) {
  h1 { font-size: 24px; }
  h2 { font-size: 20px; }
  h3 { font-size: 18px; }
  :root { --ifm-font-size-base: 15px; }
  code { font-size: 13px; }
  .menu__list-item-collapsible .menu__link { font-size: 11px; }
}
```

**Footer overrides (for non-swizzled fallback and general styling):**
```css
.footer--dark {
  background: linear-gradient(180deg, #0E1739, #080D20);
  border-top: 1px solid var(--zel-border);
  padding: 3rem 0 1.5rem;
}

.footer__title {
  font-family: var(--ifm-heading-font-family);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--zel-text);
  margin-bottom: 1rem;
}

.footer__link-item {
  color: var(--zel-text-secondary);
  font-size: 14px;
  transition: color 200ms ease;
}

.footer__link-item:hover {
  color: var(--zel-primary);
  text-decoration: none;
}

.footer__copyright {
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--zel-border);
  color: var(--zel-text-muted);
  font-size: 13px;
}
```

- [ ] **Step 2: Verify the CSS loads and dev server runs**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npx docusaurus start --port 3333 &`
Then visit `http://localhost:3333/docs/intro/` in browser and visually check that:
- Dark mode background is deep navy (#080D20)
- Headings use Inter font
- Body uses Space Grotesk font
- Sidebar has uppercase category labels in blue
- Active sidebar link has blue left border

Stop the server after verification.

- [ ] **Step 3: Commit**

```bash
git add src/css/custom.css
git commit -m "style: rewrite custom.css with zelcore.io design tokens"
```

---

## Chunk 2: Homepage Redesign

### Task 3: Rewrite homepage component

**Files:**
- Rewrite: `src/pages/index.tsx`
- Rewrite: `src/pages/index.module.css`

- [ ] **Step 1: Write the new index.module.css**

Replace `src/pages/index.module.css` with homepage-specific styles:

```css
.hero {
  position: relative;
  padding: 80px 24px;
  overflow: hidden;
}

.heroBg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #080D20 0%, #0E1739 50%, rgba(27, 99, 239, 0.2) 100%);
}

/* Light mode hero */
:global([data-theme='light']) .heroBg {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8edf5 50%, rgba(27, 99, 239, 0.08) 100%);
}

.heroBlur {
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(27, 99, 239, 0.3);
  border-radius: 50%;
  filter: blur(100px);
  top: -80px;
  right: -40px;
  pointer-events: none;
}

:global([data-theme='light']) .heroBlur {
  background: rgba(27, 99, 239, 0.12);
}

.heroContent {
  position: relative;
  z-index: 1;
  max-width: 650px;
}

.heroTitle {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 16px;
  color: #F8FAFC;
}

:global([data-theme='light']) .heroTitle {
  color: #1a1a1a;
}

.heroSubtitle {
  font-size: 16px;
  line-height: 1.7;
  color: #CDD5E0;
  margin-bottom: 32px;
}

:global([data-theme='light']) .heroSubtitle {
  color: #4a5568;
}

.heroButtons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btnPrimary {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, #1B63EF, #4461F2);
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 200ms ease;
}

.btnPrimary:hover {
  opacity: 0.9;
  color: white;
  text-decoration: none;
}

.btnPrimary:focus-visible {
  box-shadow: 0 0 0 3px rgba(27, 99, 239, 0.25);
  outline: none;
}

.btnSecondary {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: #F8FAFC;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  transition: all 200ms ease;
}

:global([data-theme='light']) .btnSecondary {
  color: #1a1a1a;
  border-color: #e2e8f0;
}

.btnSecondary:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #F8FAFC;
  text-decoration: none;
}

:global([data-theme='light']) .btnSecondary:hover {
  background: #f0f2f5;
  color: #1a1a1a;
}

.btnSecondary:focus-visible {
  box-shadow: 0 0 0 3px rgba(27, 99, 239, 0.25);
  outline: none;
}

/* Features section */
.features {
  padding: 48px 24px;
  background: var(--zel-bg-page, #0A0F1F);
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
}

.featureCard {
  background: var(--zel-card, #141C39);
  border-radius: 12px;
  padding: 24px;
}

.featureIconWrap {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(27, 99, 239, 0.13);
  border: 1px solid rgba(27, 99, 239, 0.2);
  border-radius: 10px;
  margin-bottom: 16px;
}

.featureIcon {
  width: 24px;
  height: 24px;
  filter: drop-shadow(0 2px 4px rgba(27, 99, 239, 0.15));
}

.featureCard h3 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--zel-text, #F8FAFC);
}

.featureCard p {
  font-size: 14px;
  line-height: 1.6;
  color: var(--zel-text-secondary, #CDD5E0);
  margin: 0;
}

/* Doc categories section */
.categories {
  padding: 48px 24px;
  background: var(--zel-bg-page, #0A0F1F);
}

.categoriesInner {
  max-width: 1200px;
  margin: 0 auto;
}

.categoriesLabel {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--zel-primary, #1B63EF);
  margin-bottom: 24px;
}

.categoriesGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.categoryCard {
  background: var(--zel-surface, #0E1739);
  border: 1px solid var(--zel-border, #2E3A5F);
  border-radius: 12px;
  padding: 24px;
  transition: all 200ms ease;
}

.categoryCard:hover {
  border-color: var(--zel-primary, #1B63EF);
  transform: translateY(-2px);
}

.categoryCardLabel {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--zel-primary, #1B63EF);
  margin-bottom: 10px;
}

.categoryCard h3 {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--zel-text, #F8FAFC);
}

.categoryLinks {
  list-style: none;
  padding: 0;
  margin: 0;
}

.categoryLinks li {
  margin-bottom: 6px;
}

.categoryLinks a {
  font-size: 14px;
  color: var(--zel-text-secondary, #CDD5E0);
  text-decoration: none;
  transition: color 200ms ease;
}

.categoryLinks a:hover {
  color: var(--zel-primary, #1B63EF);
}

.categoryLinks a::before {
  content: '→ ';
  color: var(--zel-accent, #4461F2);
}

/* Responsive */
@media screen and (max-width: 996px) {
  .heroTitle { font-size: 42px; }
  .featuresGrid { grid-template-columns: repeat(2, 1fr); }
  .categoriesGrid { grid-template-columns: repeat(2, 1fr); }
  .hero { padding: 60px 24px; }
}

@media screen and (max-width: 576px) {
  .heroTitle { font-size: 32px; }
  .featuresGrid { grid-template-columns: 1fr; }
  .categoriesGrid { grid-template-columns: 1fr; }
  .hero { padding: 48px 16px; }
  .features { padding: 32px 16px; }
  .categories { padding: 32px 16px; }
}
```

- [ ] **Step 2: Write the new index.tsx**

Replace `src/pages/index.tsx` with:

```tsx
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const features = [
  {
    title: 'Self-Custody & Secure',
    icon: 'img/self-custody.svg',
    description: 'Your private keys, your crypto. Zelcore never stores or shares your keys.',
  },
  {
    title: 'Decentralized 2FA',
    icon: 'img/d2fa.svg',
    description: 'Blockchain-based two-factor authentication for extra security.',
  },
  {
    title: 'Privacy Protection',
    icon: 'img/privacy-protection.svg',
    description: 'No tracking, no data collection. Complete control over your privacy.',
  },
  {
    title: 'Secure Login',
    icon: 'img/secure-login.svg',
    description: 'Biometric support and encrypted password protection.',
  },
];

const docCategories = [
  {
    label: 'Getting Started',
    title: 'Quick Setup',
    links: [
      {text: 'Installation', href: '/docs/getting-started/installation'},
      {text: 'Create Wallet', href: '/docs/getting-started/create-wallet'},
      {text: 'Import Wallet', href: '/docs/getting-started/import-wallet'},
      {text: 'Understanding Accounts', href: '/docs/getting-started/understanding-zelcore-accounts'},
    ],
  },
  {
    label: 'Guides',
    title: 'How-To Guides',
    links: [
      {text: 'FluxNode Setup', href: '/docs/guides/flux-node-installation-guide'},
      {text: 'Staking Guides', href: '/docs/walkthroughs/staking-solana'},
      {text: 'Fusion Bridge', href: '/docs/guides/flux-fusion-bridge-guide'},
      {text: 'UTXO Consolidation', href: '/docs/guides/utxo-consolidation-guide'},
    ],
  },
  {
    label: 'Help',
    title: 'FAQ & Security',
    links: [
      {text: 'Wallet FAQ', href: '/docs/faq/wallet-faq'},
      {text: 'Security Best Practices', href: '/docs/security/best-practices'},
      {text: 'Account Access', href: '/docs/faq/account-access-faq'},
      {text: 'Platform-Specific FAQ', href: '/docs/faq/platform-specific-faq'},
    ],
  },
];

function Hero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroBlur} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>
          Your comprehensive guide to the secure, multi-chain crypto wallet.
          Learn to set up, manage, and get the most out of Zelcore across all
          your devices.
        </p>
        <div className={styles.heroButtons}>
          <Link className={styles.btnPrimary} to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={styles.btnSecondary}
            to="https://github.com/ZelCore-io/zelcore-docs">
            View on GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, icon, description}: typeof features[number]): ReactNode {
  const iconUrl = useBaseUrl(icon);
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap}>
        <img src={iconUrl} alt={title} className={styles.featureIcon} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Features(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}

function DocCategories(): ReactNode {
  return (
    <section className={styles.categories}>
      <div className={styles.categoriesInner}>
        <div className={styles.categoriesLabel}>Browse Documentation</div>
        <div className={styles.categoriesGrid}>
          {docCategories.map((cat) => (
            <div key={cat.label} className={styles.categoryCard}>
              <div className={styles.categoryCardLabel}>{cat.label}</div>
              <h3>{cat.title}</h3>
              <ul className={styles.categoryLinks}>
                {cat.links.map((link) => (
                  <li key={link.text}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Secure and simple multi-chain cryptocurrency wallet documentation.">
      <Hero />
      <Features />
      <DocCategories />
    </Layout>
  );
}
```

- [ ] **Step 3: Verify homepage renders**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npx docusaurus start --port 3333 &`
Visit `http://localhost:3333/` and verify:
- Hero section with gradient background and blur glow
- 4 feature cards with icons
- 3 doc category cards with links
- Both light and dark mode look correct

Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.tsx src/pages/index.module.css
git commit -m "feat: redesign homepage with zelcore.io-style hero, features, and doc categories"
```

---

### Task 4: Update HomepageFeatures component styling

**Files:**
- Modify: `src/components/HomepageFeatures/styles.module.css`

Note: The homepage now renders features directly via `index.tsx` and no longer imports `HomepageFeatures`. However, this component may still be useful for other pages. Update its styles to match the new design system for consistency.

- [ ] **Step 1: Update the styles.module.css**

Replace `src/components/HomepageFeatures/styles.module.css` with:

```css
.features {
  display: flex;
  align-items: center;
  padding: 48px 0;
  width: 100%;
  background: var(--zel-bg-page, #0A0F1F);
}

.featureSvg {
  height: 48px;
  width: 48px;
  margin-bottom: 16px;
  filter: drop-shadow(0 4px 8px rgba(27, 99, 239, 0.15));
}

.features h3 {
  font-family: 'Inter', -apple-system, sans-serif;
  color: var(--zel-text, #F8FAFC);
}

.features p {
  color: var(--zel-text-secondary, #CDD5E0);
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/HomepageFeatures/styles.module.css
git commit -m "style: update HomepageFeatures styles to match new design system"
```

---

## Chunk 3: Footer Swizzle

### Task 5: Swizzle and customize the Footer

**Files:**
- Create: `src/theme/Footer/index.tsx`
- Create: `src/theme/Footer/styles.module.css`

- [ ] **Step 1: Eject the Footer component**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npm run swizzle @docusaurus/theme-classic Footer -- --eject --typescript`

This creates files in `src/theme/Footer/`. The ejected footer provides the base structure.

- [ ] **Step 2: Replace the ejected Footer with custom implementation**

After ejecting, replace `src/theme/Footer/index.tsx` with a custom footer that matches zelcore.io's design. The footer should:

- Import `useDocusaurusContext` for footer config data
- Import `Link` from `@docusaurus/Link`
- Use a CSS module for styling (`styles.module.css`)
- Render a 5-column grid layout:
  - Column 1 (brand): Logo image from `img/logo.svg`, tagline text, social links (Discord, Twitter, GitHub)
  - Columns 2-5: The 4 link groups from `themeConfig.footer.links` (Product, Ecosystem, Learning, Community)
- Copyright bar at the bottom

The component should read footer links from the Docusaurus config via `useDocusaurusContext().siteConfig.themeConfig.footer` so it stays in sync with `docusaurus.config.ts`.

Structure:
```tsx
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Social links
const socials = [
  {label: 'Discord', href: 'https://discord.gg/runonflux'},
  {label: 'Twitter', href: 'https://twitter.com/zelcore_io'},
  {label: 'GitHub', href: 'https://github.com/zelcore-io'},
];

export default function Footer(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {footer} = siteConfig.themeConfig as any;
  if (!footer) return null;
  const {links, copyright} = footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <img src={useBaseUrl('img/logo.svg')} alt="Zelcore" width={28} height={28} />
              <span className={styles.brandName}>Zelcore</span>
            </div>
            <p className={styles.brandTagline}>
              Your secure, simple crypto wallet for all devices. Multi-chain & self-custodial.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <Link key={s.label} href={s.href} className={styles.socialLink}>
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {links?.map((column: any) => (
            <div key={column.title} className={styles.column}>
              <h4 className={styles.columnTitle}>{column.title}</h4>
              <ul className={styles.columnList}>
                {column.items?.map((item: any) => (
                  <li key={item.label}>
                    <Link href={item.href || item.to} className={styles.columnLink}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {copyright && (
        <div className={styles.copyright}>
          <div className={styles.container}>
            {copyright}
          </div>
        </div>
      )}
    </footer>
  );
}
```

- [ ] **Step 3: Create the Footer styles.module.css**

Create `src/theme/Footer/styles.module.css`:

```css
.footer {
  background: linear-gradient(180deg, #0E1739, #080D20);
  padding: 48px 0 0;
  color: #CDD5E0;
}

:global([data-theme='light']) .footer {
  background: #f8f9fa;
  color: #4a5568;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 32px;
}

.brand {
  padding-right: 24px;
}

.brandLogo {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.brandName {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #F8FAFC;
}

:global([data-theme='light']) .brandName {
  color: #1a1a1a;
}

.brandTagline {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 16px;
}

.socials {
  display: flex;
  gap: 16px;
}

.socialLink {
  font-size: 13px;
  color: #CDD5E0;
  text-decoration: none;
  transition: color 200ms ease;
}

:global([data-theme='light']) .socialLink {
  color: #4a5568;
}

.socialLink:hover {
  color: #1B63EF;
  text-decoration: none;
}

.column {
  min-width: 0;
}

.columnTitle {
  font-family: 'Inter', -apple-system, sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #F8FAFC;
  margin-bottom: 16px;
}

:global([data-theme='light']) .columnTitle {
  color: #1a1a1a;
}

.columnList {
  list-style: none;
  padding: 0;
  margin: 0;
}

.columnList li {
  margin-bottom: 10px;
}

.columnLink {
  font-size: 14px;
  color: #CDD5E0;
  text-decoration: none;
  transition: color 200ms ease;
}

:global([data-theme='light']) .columnLink {
  color: #4a5568;
}

.columnLink:hover {
  color: #1B63EF;
  text-decoration: none;
}

.copyright {
  margin-top: 32px;
  padding: 16px 0;
  border-top: 1px solid #2E3A5F;
  text-align: center;
  font-size: 13px;
  color: #b4b9c9;
}

:global([data-theme='light']) .copyright {
  border-top-color: #e2e8f0;
  color: #718096;
}

/* Responsive */
@media screen and (max-width: 996px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 32px 24px;
  }

  .brand {
    grid-column: 1 / -1;
    padding-right: 0;
  }
}

@media screen and (max-width: 576px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
```

- [ ] **Step 4: Clean up any extra ejected files**

After ejecting, Docusaurus may create extra files in `src/theme/Footer/` (like `Layout/`, `Links/`, `Logo/`, `Copyright/` subdirectories). Since Step 2 replaces `index.tsx` entirely with a custom implementation that has no imports to these sub-components, they are safe to delete.

Run: `ls -la /Users/vasilismagkoutis/repos/zelcore-docs/src/theme/Footer/`

Delete everything **except** `index.tsx` and `styles.module.css`. The custom `index.tsx` is self-contained and does not import any ejected sub-components.

- [ ] **Step 5: Verify footer renders**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npx docusaurus start --port 3333 &`
Visit `http://localhost:3333/` and scroll to footer. Verify:
- Gradient background (dark mode)
- Brand column with logo, tagline, social links
- 4 link columns with proper titles and links
- Copyright bar at bottom
- Light mode variant also looks correct

Stop the server.

- [ ] **Step 6: Commit**

```bash
git add src/theme/Footer/
git commit -m "feat: swizzle and customize footer with zelcore.io brand layout"
```

---

## Chunk 4: Build Verification & Cleanup

### Task 6: Full build verification and link fixes

**Files:**
- Potentially modify: any markdown files with broken absolute links

- [ ] **Step 1: Run a full production build**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npm run build 2>&1`

Check for:
- Build completes successfully
- No broken link errors (the `routeBasePath` change may cause broken links in markdown files that use absolute paths like `/getting-started/...` instead of relative paths)

- [ ] **Step 2: Fix any broken links**

If the build reports broken links, fix them. Common pattern: absolute links in markdown files (e.g., `/getting-started/installation`) need to be updated to `/docs/getting-started/installation` OR converted to relative links.

Search for absolute links in docs:
```bash
grep -r '\](/[a-z]' /Users/vasilismagkoutis/repos/zelcore-docs/docs/ --include='*.md' -l
```

Fix each file by converting absolute paths to relative paths (preferred) or adding the `/docs` prefix.

- [ ] **Step 3: Run build again to confirm clean**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npm run build 2>&1`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Serve and verify production build**

Run: `cd /Users/vasilismagkoutis/repos/zelcore-docs && npx docusaurus serve --port 3333 &`
Visit and verify:
- Homepage at `http://localhost:3333/` — hero, features, doc categories
- Doc page at `http://localhost:3333/docs/intro/` — sidebar, content, TOC
- Light/dark mode toggle works
- Footer renders correctly
- All doc category links work
- Navbar links work

Stop the server.

- [ ] **Step 5: Commit any link fixes**

```bash
git add -A
git commit -m "fix: update internal links for new /docs routeBasePath"
```

---

### Task 7: Add .superpowers to .gitignore

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add .superpowers/ to .gitignore**

Add `.superpowers/` to the `.gitignore` file to prevent brainstorm mockups from being committed.

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .superpowers to gitignore"
```
