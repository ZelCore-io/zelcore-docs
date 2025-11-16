import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-Custody & Secure',
    icon: '🔐',
    description: (
      <>
        Your private keys, your crypto. Zelcore never stores or shares your keys.
        Enhanced with decentralized 2FA and independently audited security.
      </>
    ),
  },
  {
    title: 'Multi-Chain Support',
    icon: '⛓️',
    description: (
      <>
        Access 80+ blockchains and 100,000+ tokens from one wallet.
        Manage Bitcoin, Ethereum, Solana, and more all in one place.
      </>
    ),
  },
  {
    title: 'Cross-Platform',
    icon: '📱',
    description: (
      <>
        Seamlessly sync across desktop, mobile, and browser extension.
        Access your wallet anywhere with consistent features across all platforms.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
