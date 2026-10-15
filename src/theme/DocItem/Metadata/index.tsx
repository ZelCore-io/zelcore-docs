import React from 'react';
import Head from '@docusaurus/Head';
import {jsonLdString} from '@site/src/lib/json-ld';
import Metadata from '@theme-original/DocItem/Metadata';
import type MetadataType from '@theme/DocItem/Metadata';
import type {WrapperProps} from '@docusaurus/types';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {buildTechArticle} from '@site/src/lib/tech-article';

type Props = WrapperProps<typeof MetadataType>;

export default function MetadataWrapper(props: Props): React.ReactNode {
  const {metadata} = useDoc();
  const {siteConfig} = useDocusaurusContext();
  // Must equal the page canonical, which carries a trailing slash (trailingSlash: true).
  const permalink = metadata.permalink.endsWith('/') ? metadata.permalink : `${metadata.permalink}/`;
  const jsonLd = buildTechArticle({
    url: `${siteConfig.url}${permalink}`,
    title: metadata.title,
    description: metadata.description,
    lastUpdatedAt: metadata.lastUpdatedAt ?? undefined,
  });
  return (
    <>
      <Head>
        <meta property="og:type" content="article" />
        {jsonLd.dateModified ? (
          <meta property="article:modified_time" content={String(jsonLd.dateModified)} />
        ) : null}
        <script type="application/ld+json">{jsonLdString(jsonLd)}</script>
      </Head>
      <Metadata {...props} />
    </>
  );
}
