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
