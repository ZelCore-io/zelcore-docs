import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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
              Your secure, simple crypto wallet for all devices. Multi-chain &amp; self-custodial.
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
            <span dangerouslySetInnerHTML={{__html: copyright}} />
          </div>
        </div>
      )}
    </footer>
  );
}
