import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  svgPath: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Self-Custody & Secure',
    svgPath: 'img/self-custody.svg',
    description: (
      <>
        Your private keys, your crypto. Zelcore never stores or shares your keys.
        Enhanced with decentralized 2FA and independently audited security.
      </>
    ),
  },
  {
    title: 'Decentralized 2FA',
    svgPath: 'img/d2fa.svg',
    description: (
      <>
        Advanced security with decentralized two-factor authentication.
        Protect your assets with an extra layer of blockchain-based security.
      </>
    ),
  },
  {
    title: 'Privacy Protection',
    svgPath: 'img/privacy-protection.svg',
    description: (
      <>
        Your data stays private. No tracking, no data collection, no third parties.
        Complete control over your financial privacy.
      </>
    ),
  },
  {
    title: 'Secure Login',
    svgPath: 'img/secure-login.svg',
    description: (
      <>
        Multiple authentication methods to keep your wallet secure.
        Biometric support and encrypted password protection.
      </>
    ),
  },
];

function Feature({title, svgPath, description}: FeatureItem) {
  const imgUrl = useBaseUrl(svgPath);
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={imgUrl} className={styles.featureSvg} alt={title} />
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
