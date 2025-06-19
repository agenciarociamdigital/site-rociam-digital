<template>
  <NuxtLayout>
    <Whatsapp />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Whatsapp from '@/components/global/whatsapp/Whatsapp.vue'

const router = useRouter()

useSeoMeta({
  // Default
  charset: 'utf-8',
  xUaCompatible: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',

  // Title and Description
  title: 'Rociam Digital Tech',
  ogTitle: 'Soluções Digitais para o Seu Negócio',
  description: 'Descrição do Site',
  ogDescription: 'Descrição do Site',
  robots: 'index, follow',
  googlebot: 'max-image-preview',
  author: 'Nome da Empresa',

  // Theme
  themeColor: '#ffffff',
  msapplicationTileColor: '#ffffff',
  appleMobileWebAppStatusBarStyle: 'default',

  // Site URL
  ogType: 'website',
  ogImageType: 'image/jpeg',
  ogImage: '',
  ogUrl: 'https://seusite.com.br',
  ogSiteName: 'Nome do Site',
  ogLocale: 'pt_BR',
  applicationName: 'Nome do Site',
  appleMobileWebAppTitle: 'Nome do Site'
})

watch(router.afterEach, () => {
  window.scrollTo(0, 0) // Rola o scroll para o topo ao navegar
})
</script>
