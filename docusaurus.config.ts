import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zelcore Documentation',
  tagline: 'Your Secure, Simple Crypto Wallet for All Devices - Multichain & Self-Custodial',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL
  url: 'https://docs.zelcore.io',
  baseUrl: '/',

  // Static deployment config
  // url: 'https://ZelCore-io.github.io',
  // baseUrl: '/zelcore-docs/',

  // GitHub deployment config
  organizationName: 'ZelCore-io',
  projectName: 'zelcore-docs',

  trailingSlash: true,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ZelCore',
        url: 'https://zelcore.io',
        logo: 'https://docs.zelcore.io/img/logo.svg',
        sameAs: [
          'https://twitter.com/zelcore_io',
          'https://github.com/zelcore-io',
          'https://discord.gg/runonflux',
        ],
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ZelCore-io/zelcore-docs/tree/main/',
        },
        blog: false,
        sitemap: {
          lastmod: 'date',
          changefreq: null,
          priority: null,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@zelcore_io' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Zelcore Documentation' },
    ],
    image: 'img/og-default.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Zelcore',
      logo: {
        alt: 'Zelcore Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://zelcore.io',
          label: 'Main Site',
          position: 'right',
        },
        {
          href: 'https://github.com/zelcore-io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Desktop',
              href: 'https://zelcore.io/wallet',
            },
            {
              label: 'Mobile',
              href: 'https://zelcore.io/mobile-wallet',
            },
            {
              label: 'Browser Extension',
              href: 'https://zelcore.io/browser-extension',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Features',
              href: 'https://zelcore.io/ecosystem/features',
            },
            {
              label: 'Supported Assets',
              href: 'https://zelcore.io/ecosystem/assets',
            },
            {
              label: 'Token Listing',
              href: 'https://zelcore.io/contact-us',
            },
          ],
        },
        {
          title: 'Learning',
          items: [
            {
              label: 'Knowledge Base',
              href: 'https://docs.zelcore.io',
            },
            {
              label: 'Glossary',
              href: 'https://zelcore.io/learn/glossary',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCSlYE41UUtcjSD0_Z43pTpw',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/runonflux',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zelcore_io',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/zelcore-io',
            },
            {
              label: 'Support',
              href: 'https://support.runonflux.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} InFlux Technologies Limited. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
