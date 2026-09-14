import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import type {Props} from '@theme/NotFound/Content';
import styles from './styles.module.css';

const destinations = [
  {
    title: 'Getting Started',
    description: 'Install Zelcore and set up your first wallet.',
    href: '/docs/category/getting-started',
  },
  {
    title: 'Guides',
    description: 'Nodes, swaps, staking, tokens and troubleshooting.',
    href: '/docs/category/guides',
  },
  {
    title: 'Walkthroughs',
    description: 'Step-by-step instructions with screenshots.',
    href: '/docs/category/walkthroughs',
  },
  {
    title: 'FAQ',
    description: 'Quick answers to the questions we get most.',
    href: '/docs/category/faq',
  },
];

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className={styles.wrapper}>
        <p className={styles.code}>404</p>
        <Heading as="h1" className={styles.title}>
          We couldn&apos;t find that page
        </Heading>
        <p className={styles.lead}>
          The link may be outdated or mistyped. Try the search box in the header, or
          pick up from one of these sections.
        </p>

        <div className={styles.grid}>
          {destinations.map((item) => (
            <Link key={item.href} to={item.href} className={styles.card}>
              <span className={styles.cardTitle}>{item.title}</span>
              <span className={styles.cardText}>{item.description}</span>
            </Link>
          ))}
        </div>

        <p className={styles.help}>
          Still stuck? Ask on{' '}
          <Link href="https://discord.gg/runonflux">Discord</Link> or{' '}
          <Link href="https://support.runonflux.io">contact support</Link>.
        </p>
      </div>
    </main>
  );
}
