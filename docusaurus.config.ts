import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zelcore Documentation',
  tagline: 'Your Secure and Simple Crypto Wallet - Multi-chain, Self-custody',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production URL
  // url: 'https://docs.zelcore.io',
  // baseUrl: '/',

  // Static deployment config
  url: 'https://ZelCore-io.github.io',
  baseUrl: '/zelcore-docs/',

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

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/ZelCore-io/zelcore-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
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
              label: 'Zelcore Wallet',
              href: 'https://zelcore.io',
            },
            {
              label: 'Download',
              href: 'https://zelcore.io/download',
            },
            {
              label: 'Features',
              href: 'https://zelcore.io/features',
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
              label: 'YouTube',
              href: 'https://www.youtube.com/c/ZelCore',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zelcore-io',
            },
            {
              label: 'Support',
              href: 'https://zelcore.io/support',
            },
            {
              label: 'Blog',
              href: 'https://zelcore.io/blog',
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
