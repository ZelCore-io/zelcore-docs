import React, { type ReactNode } from 'react';
import Head from '@docusaurus/Head';

interface FAQJsonLdItem {
  question: string;
  answer: string;
}

interface FAQJsonLdProps {
  items: FAQJsonLdItem[];
}

/**
 * Injects FAQPage JSON-LD structured data without changing the visible page.
 * Use this on existing FAQ pages to get Google rich snippets while keeping
 * the current markdown layout unchanged.
 *
 * Usage in .mdx:
 *   import { FAQJsonLd } from '@site/src/components/FAQ/FAQJsonLd';
 *   <FAQJsonLd items={[
 *     { question: "What is X?", answer: "X is..." },
 *   ]} />
 */
export default function FAQJsonLd({ items }: FAQJsonLdProps): ReactNode {
  if (!items || items.length === 0) return null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Head>
  );
}
