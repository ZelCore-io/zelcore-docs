import React from 'react';
import type { WrapperProps } from '@docusaurus/types';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import type DocBreadcrumbsType from '@theme/DocBreadcrumbs';
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';

type Props = WrapperProps<typeof DocBreadcrumbsType>;

export default function DocBreadcrumbsWrapper(props: Props): React.ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs();
  const { siteConfig } = useDocusaurusContext();
  const withSlash = (href: string) => (href.endsWith('/') ? href : `${href}/`);
  const home = `${siteConfig.url}${siteConfig.baseUrl}`;

  const jsonLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {'@type': 'ListItem', position: 1, name: 'Zelcore Docs', item: home},
          ...breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 2,
            name: item.label,
            // Sidebar hrefs include baseUrl and omit the trailing slash; the
            // site uses trailingSlash: true, so match the canonical URL.
            ...(item.href ? {item: `${siteConfig.url}${withSlash(item.href)}`} : {}),
          })),
        ],
      }
    : null;

  return (
    <>
      {jsonLd && (
        <Head>
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Head>
      )}
      <DocBreadcrumbs {...props} />
    </>
  );
}
