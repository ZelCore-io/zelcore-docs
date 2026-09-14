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

const quickLinks = [
  {text: 'Install Zelcore', href: '/docs/getting-started/installation'},
  {text: 'Recover a wallet', href: '/docs/getting-started/import-wallet'},
  {text: 'Run a FluxNode', href: '/docs/guides/flux-node-installation-guide'},
  {text: 'Stake crypto', href: '/docs/walkthroughs/staking-flux'},
];

const docCategories = [
  {
    label: 'Start here',
    title: 'Getting Started',
    blurb: 'Download Zelcore, create or restore a wallet, and learn how accounts work.',
    browseHref: '/docs/category/getting-started',
    links: [
      {text: 'Installation', href: '/docs/getting-started/installation'},
      {text: 'Create a wallet', href: '/docs/getting-started/create-wallet'},
      {text: 'Import a wallet', href: '/docs/getting-started/import-wallet'},
      {text: 'Understanding accounts', href: '/docs/getting-started/understanding-zelcore-accounts'},
    ],
  },
  {
    label: 'Step by step',
    title: 'Guides & Walkthroughs',
    blurb: 'Task-focused instructions with screenshots for nodes, swaps, staking and tokens.',
    browseHref: '/docs/category/guides',
    links: [
      {text: 'FluxNode installation', href: '/docs/guides/flux-node-installation-guide'},
      {text: 'Stake Solana (SOL)', href: '/docs/walkthroughs/staking-solana'},
      {text: 'Fusion bridge', href: '/docs/guides/flux-fusion-bridge-guide'},
      {text: 'UTXO consolidation', href: '/docs/guides/utxo-consolidation-guide'},
    ],
  },
  {
    label: 'Get unstuck',
    title: 'FAQ & Security',
    blurb: 'Answers to common questions, plus how to keep your keys and assets safe.',
    browseHref: '/docs/category/faq',
    links: [
      {text: 'Wallet FAQ', href: '/docs/faq/wallet-faq'},
      {text: 'Security best practices', href: '/docs/security/best-practices'},
      {text: 'Account access', href: '/docs/faq/account-access-faq'},
      {text: 'Platform-specific FAQ', href: '/docs/faq/platform-specific-faq'},
    ],
  },
];

function Hero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroBlur} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Documentation</p>
          <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
          <p className={styles.heroSubtitle}>
            Everything you need to set up, secure and get the most out of Zelcore —
            the self-custodial multi-chain wallet for desktop, mobile and browser.
          </p>
          <div className={styles.heroButtons}>
            <Link className={styles.btnPrimary} to="/docs/intro">
              Read the docs
            </Link>
            <Link className={styles.btnSecondary} to="/docs/getting-started/installation">
              Install Zelcore
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <span className={styles.quickLinksLabel}>Popular:</span>
            {quickLinks.map((link) => (
              <Link key={link.text} className={styles.quickLink} to={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureCard({title, icon, description}: (typeof features)[number]): ReactNode {
  const iconUrl = useBaseUrl(icon);
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrap}>
        <img src={iconUrl} alt="" aria-hidden="true" className={styles.featureIcon} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{description}</p>
    </div>
  );
}

function Features(): ReactNode {
  return (
    <section className={styles.section} aria-label="Why Zelcore">
      <div className={styles.container}>
        <div className={styles.featuresGrid}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DocCategories(): ReactNode {
  return (
    <section className={styles.sectionAlt} aria-labelledby="browse-docs">
      <div className={styles.container}>
        <p className={styles.sectionEyebrow}>Browse documentation</p>
        <h2 id="browse-docs" className={styles.sectionTitle}>
          Find what you need
        </h2>
        <div className={styles.categoriesGrid}>
          {docCategories.map((cat) => (
            <div key={cat.title} className={styles.categoryCard}>
              <div className={styles.categoryCardLabel}>{cat.label}</div>
              <h3 className={styles.categoryTitle}>{cat.title}</h3>
              <p className={styles.categoryBlurb}>{cat.blurb}</p>
              <ul className={styles.categoryLinks}>
                {cat.links.map((link) => (
                  <li key={link.text}>
                    <Link to={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
              <Link className={styles.categoryBrowse} to={cat.browseHref}>
                Browse all
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Help(): ReactNode {
  return (
    <section className={styles.section} aria-labelledby="need-help">
      <div className={styles.container}>
        <div className={styles.helpBanner}>
          <div>
            <h2 id="need-help" className={styles.helpTitle}>
              Still stuck?
            </h2>
            <p className={styles.helpText}>
              Ask the community on Discord or open a support ticket — the team responds daily.
            </p>
          </div>
          <div className={styles.helpActions}>
            <Link className={styles.btnPrimary} href="https://discord.gg/runonflux">
              Join Discord
            </Link>
            <Link className={styles.btnSecondary} href="https://support.runonflux.io">
              Contact support
            </Link>
          </div>
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
      <Help />
    </Layout>
  );
}
