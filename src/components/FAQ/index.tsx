import React, { type ReactNode, useState, Children, isValidElement } from 'react';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

interface FAQItemProps {
  question: string;
  children: ReactNode;
}

function FAQItem({ question, children }: FAQItemProps): ReactNode {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={`${styles.faqQuestion} ${open ? styles.faqQuestionOpen : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <span className={styles.faqChevron} aria-hidden="true">
          {open ? '\u2212' : '+'}
        </span>
      </button>
      {open && <div className={styles.faqAnswer}>{children}</div>}
    </div>
  );
}

interface FAQProps {
  children: ReactNode;
}

function FAQ({ children }: FAQProps): ReactNode {
  const items: { question: string; answer: string }[] = [];

  Children.forEach(children, (child) => {
    if (isValidElement(child) && child.type === FAQItem) {
      const question = (child.props as FAQItemProps).question;
      const answer =
        typeof (child.props as FAQItemProps).children === 'string'
          ? (child.props as FAQItemProps).children
          : question;
      items.push({ question, answer: String(answer) });
    }
  });

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
    <div className={styles.faq}>
      <Head>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      {children}
    </div>
  );
}

FAQ.Item = FAQItem;
export default FAQ;
