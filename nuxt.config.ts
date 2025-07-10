import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  components: true,
  css: ['~/assets/css/index.css'],
  modules: ['@pinia/nuxt'],
  compatibilityDate: '2025-06-18',
  app: {
    head: {
      title: 'Rociam Digital - Soluções Modernas em Marketing Digital',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tráfego Pago, Desenvolvimento Web, Leads, CRM e Automação com IA: Tudo para Empresas que Lideram o Mercado.' },
        { name: 'author', content: 'Rociam Digital' },
        { name: 'keywords', content: 'marketing digital, tráfego pago, desenvolvimento web, geração de leads, CRM, automação, inteligência artificial' },
        { property: 'og:title', content: 'Rociam Digital - Soluções Modernas em Marketing Digital' },
        { property: 'og:description', content: 'Tráfego Pago, Desenvolvimento Web, Leads, CRM e Automação com IA: Tudo para Empresas que Lideram o Mercado.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/favicon.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Rociam Digital - Soluções Modernas em Marketing Digital' },
        { name: 'twitter:description', content: 'Tráfego Pago, Desenvolvimento Web, Leads, CRM e Automação com IA: Tudo para Empresas que Lideram o Mercado.' },
        { name: 'twitter:image', content: '/favicon.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/favicon.png' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    }
  }
})