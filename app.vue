<template>
  <NuxtLayout>
    <Whatsapp />
    <ContactPopup :isOpen="contactPopupStore.isOpen" @close="contactPopupStore.closePopup" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Whatsapp from '@/components/global/whatsapp/Whatsapp.vue'
import ContactPopup from '@/components/global/contact/ContactPopup.vue'
import { useContactPopupStore } from '@/stores/contactPopupStore'

const router = useRouter()
const contactPopupStore = useContactPopupStore()

useSeoMeta({
  // Default
  charset: 'utf-8',
  xUaCompatible: 'IE=edge',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',

  // Title and Description
  title: 'Rociam Digital Tech',
  ogTitle: 'Soluções Digitais para o Seu Negócio',
  description: 'Soluções Digitais para o Seu Negócio',
  ogDescription: 'Soluções Digitais para o Seu Negócio',
  robots: 'index, follow',
  googlebot: 'max-image-preview',
  author: 'Rociam Digital Tech',

  // Theme
  themeColor: '#ffffff',
  msapplicationTileColor: '#ffffff',
  appleMobileWebAppStatusBarStyle: 'default',

  // Site URL
  ogType: 'website',
  ogImageType: 'image/jpeg',
  ogImage: '',
  ogUrl: 'https://rociamdigital.com',
  ogSiteName: 'Rociam Digital Tech',
  ogLocale: 'pt_BR',
  applicationName: 'Rociam Digital Tech',
  appleMobileWebAppTitle: 'Rociam Digital Tech'
})

watch(router.afterEach, () => {
  window.scrollTo(0, 0) // Rola o scroll para o topo ao navegar
})
</script>
