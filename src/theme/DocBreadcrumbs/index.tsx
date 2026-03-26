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
  const baseUrl = siteConfig.url + siteConfig.baseUrl;

  const jsonLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          ...(item.href ? { item: `${baseUrl}${item.href.replace(/^\//, '')}` } : {}),
        })),
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
