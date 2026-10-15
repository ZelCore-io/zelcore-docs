import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import type {ClientModule} from '@docusaurus/types';

// GA4 with the gtag queue set up immediately (cheap) and the 180 KB library
// fetched only after load + idle, so it stays off the critical path.
const GA_ID = 'G-ZTCBXNFDHJ';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Production builds only: Docusaurus replaces process.env.NODE_ENV at build
// time, so dev and test sessions never load GA or pollute the property.
if (ExecutionEnvironment.canUseDOM && process.env.NODE_ENV === 'production') {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // gtag.js requires the Arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  // send_page_view is off so gtag.js cannot read the URL after it loads (by
  // then the user may have navigated). Queue the first page_view here with the
  // URL and title as they are at module load.
  window.gtag('config', GA_ID, {anonymize_ip: true, send_page_view: false});
  window.gtag('event', 'page_view', {
    page_path: location.pathname + location.search + location.hash,
    page_title: document.title,
    page_location: window.location.href,
  });

  const inject = () => {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
  };
  const whenIdle = () =>
    typeof window.requestIdleCallback === 'function'
      ? window.requestIdleCallback(inject, {timeout: 4000})
      : window.setTimeout(inject, 2000);
  if (document.readyState === 'complete') whenIdle();
  else window.addEventListener('load', whenIdle, {once: true});
}

const clientModule: ClientModule = {
  onRouteDidUpdate({location, previousLocation}) {
    // The initial page_view is queued at module load above.
    if (!previousLocation || location.pathname === previousLocation.pathname) return;
    // Wait a tick: react-helmet updates document.title after this hook runs
    // (same approach as Docusaurus' own gtag module, facebook/docusaurus#7420).
    setTimeout(() => {
      window.gtag?.('event', 'page_view', {
        page_path: location.pathname + location.search + location.hash,
        page_title: document.title,
        page_location: window.location.href,
      });
    });
  },
};

export default clientModule;
