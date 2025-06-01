// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    'nuxt-link-checker',
    'nuxt-lucide-icons',
    '@nuxtjs/i18n' // Added i18n module
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English'
      }
    ],
    defaultLocale: 'en',
    vueI18n: './i18n/i18n.config.ts' // Pointing to file within i18n directory
  },

  devtools: { enabled: true },
  ssr: true,

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    devProxy: {
      '/ws': {
        target: 'ws://localhost:3000',
        ws: true
      }
    }
  },

  runtimeConfig: {
    public: {
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      googleRedirectUri: process.env.GOOGLE_REDIRECT_URI
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'DeepRankAI - SEO Analytics Platform',
      titleTemplate: '%s | DeepRankAI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        { 
          name: 'description', 
          content: 'Comprehensive SEO analytics and optimization platform. Track rankings, analyze competitors, and improve your search visibility.'
        },
        {
          name: 'keywords',
          content: 'SEO, analytics, rank tracking, competitor analysis, backlinks, keyword research, site audit'
        },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'DeepRankAI' },
        { property: 'og:url', content: 'https://app.DeepRankAI.com' },
        { property: 'og:title', content: 'DeepRankAI - SEO Analytics Platform' },
        { 
          property: 'og:description', 
          content: 'Comprehensive SEO analytics and optimization platform. Track rankings, analyze competitors, and improve your search visibility.'
        },
        { property: 'og:image', content: 'https://app.DeepRankAI.com/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@RepoBooster' },
        { name: 'twitter:title', content: 'DeepRankAI - SEO Analytics Platform' },
        {
          name: 'twitter:description',
          content: 'Comprehensive SEO analytics and optimization platform. Track rankings, analyze competitors, and improve your search visibility.'
        },
        { name: 'twitter:image', content: 'https://app.DeepRankAI.com/twitter-card.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://app.DeepRankAI.com' },
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
      ]
    }
  },

  typescript: {
    strict: false
  },

  compatibilityDate: '2025-01-07'
})
