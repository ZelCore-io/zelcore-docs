import React, {
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
  Children,
  isValidElement,
} from 'react';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';

interface FAQItemProps {
  question: string;
  children: ReactNode;
}

function FAQItem({ question, children }: FAQItemProps): ReactNode {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  // `hidden="until-found"` lets the browser reveal a collapsed answer when the
  // user finds it with find-in-page; keep our own state in sync when it does.
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return undefined;
    const onBeforeMatch = () => setOpen(true);
    panel.addEventListener('beforematch', onBeforeMatch);
    return () => panel.removeEventListener('beforematch', onBeforeMatch);
  }, []);

  return (
    <div className={styles.faqItem}>
      <h3 className={styles.faqHeading}>
        <button
          id={buttonId}
          className={`${styles.faqQuestion} ${open ? styles.faqQuestionOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span>{question}</span>
          <span
            className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      {/*
        The answer stays in the DOM when collapsed so it is still reachable by
        find-in-page, by the offline search index, and by crawlers.
      */}
      <div
        ref={panelRef}
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={styles.faqAnswer}
        hidden={open ? undefined : ('until-found' as unknown as boolean)}
      >
        {children}
      </div>
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
