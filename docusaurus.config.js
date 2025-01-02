// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'にじてくと',
  tagline: '写真撮影',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cp2.t98.info',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cp2.t98.info/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'terminal98', // Usually your GitHub org/user name.
  projectName: 'cp2.t98.info', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  plugins: [
    'plugin-image-zoom'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'null',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'null',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'にじてくと',
          src: 'img/nijitect_logo_r1.png',
        },
        items: [
          { to: '/blog', label: 'お知らせ', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'ドキュメント',
          },
          {
            href: 'https://x.com/98tml',
            position: 'right',
            className: 'header-xtwitter-link',
            //label: 'X/Twitter @98tml',
            title: 'X: @98tml',
          },
          {
            href: 'https://t98.info/contact',
            position: 'right',
            className: 'header-envelope-link',
            //label: 'X/Twitter @98tml',
            title: 'Contact',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Community',
            position: 'left',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },
              {
                type: 'doc',
                label: 'About',
                docId: 'intro',
              },
              // ... more items
            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'SNS',
            items: [
              {
                label: 'X',
                href: 'https://x.com/98tml',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/98tml/',
              },
            ],
          },
          {
            title: 'SHOP',
            items: [
              {
                label: 'メロンブックス',
                href: 'https://www.melonbooks.co.jp/circle/index.php?circle_id=119704',
              },
              {
                label: 'BOOTH',
                href: 'https://t98.booth.pm/',
              },
            ]
          },
          {
            title: 'お問い合わせ',
            items: [
              {
                label: 'メールフォーム',
                href: 'https://t98.info/contact/'
              },
              {
                label: 'LINEチャットボット',
                href: 'https://lin.ee/aGsc9j5',
              }
            ],
          },
          {
            title: 'ドキュメント',
            items: [
              {
                label: '利用規約',
                href: 'https://doc.t98.info/rule/'
              },
              {
                label: 'プライバシーポリシー',
                href: 'https://doc.t98.info/policy/'
              },
            ],
          },
        ],
        copyright: `Copyright © 2013 - ${new Date().getFullYear()} にじてくと.`,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          //margin: '12',
          background: 'var(--ifm-navbar-background-color)',
          //scrollOffset: 0,
          //container: '#zoom-container',
          //template: '#zoom-template',
        },
      },
    }),
};

export default config;

