import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'application-name', content: 'WALLeSmart' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'WALLeSmart' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#e9484e' }],
    ['meta', { name: 'theme-color', content: '#e9484e' }],
  ],

  // site config
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'fr-BE',
      title: 'WALLeSmart',
      description: 'Documentation de WALLeSmart',
    },
    '/en/': {
      lang: 'en-US',
      title: 'WALLeSmart',
      description: 'WALLeSmart documentation',
    },
  },

  // theme and its config
  theme: '@vuepress/theme-default',

  themeConfig: {
    logo: '/images/logo.svg',

    repo: 'Amine27/wallesmart-docs',

    docsDir: 'docs',

    locales: {
      '/': {
        // navbar
        navbar: navbar.fr,
        selectLanguageName: 'Français',
        selectLanguageText: 'Langues',
        selectLanguageAriaLabel: 'Sélectionner la langue',

        // sidebar
        sidebar: sidebar.fr,

        // page meta
        editLinkText: 'Modifier cette page sur GitHub',
        lastUpdatedText: 'Dernière mise à jour',
        contributorsText: 'Contributeurs',

        // custom containers
        tip: 'Information',
        warning: 'Avertissement',
        danger: 'Danger',

        // 404 page
        notFound: [
          'Il n\'y a rien ici',
          'Comment on est venu ici ?',
          'Ceci est une page 404',
          'Il semble que nous nous soyons trompés de lien',
        ],
        backToHome: 'Retour à l\'accueil',

        // a11y
        openInNewWindow: 'Ouvrir dans une nouvelle fenêtre',
        toggleDarkMode: 'Activer le mode sombre',
        toggleSidebar: 'Activer le menu latérale',
      },

      '/en/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',

        selectLanguageName: 'English',
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      // use shiki plugin in production mode instead
      prismjs: !isProd,
    }
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Rechercher',
          },
          '/en/': {
            placeholder: 'Search',
          },
        },
      },
    ],
    // [
    //   '@vuepress/plugin-google-analytics',
    //   {
    //     // we have multiple deployments, which would use different id
    //     id: process.env.DOCS_GA_ID,
    //   },
    // ],
    // only enable shiki plugin in production mode
    [
      '@vuepress/plugin-shiki',
      isProd
        ? {
            theme: 'dark-plus',
          }
        : false,
    ],
  ],
})
