<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="navbar">
        <!-- Logo -->
        <div class="logo">
          <NuxtLink to="/" class="logo-link">
            <img 
              src="~/assets/images/logotipo_rociamdigital.png" 
              alt="Rociam Digital" 
              class="logo-image"
            >
          </NuxtLink>
        </div>

        <!-- Menu Desktop -->
        <div class="nav-menu" :class="{ 'nav-menu-active': isMobileMenuOpen }">
          <ul class="nav-list">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link" @click="closeMobileMenu">
                Home
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/sobre" class="nav-link" @click="closeMobileMenu">
                Sobre
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/solucoes" class="nav-link" @click="closeMobileMenu">
                Soluções
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contato" class="nav-link" @click="closeMobileMenu">
                Contato
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CTA Button -->
        <div class="nav-cta">
          <button class="cta-button" @click="handleContactClick">
            <span>Entrar em Contato</span>
            <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu"
          :class="{ 'mobile-toggle-active': isMobileMenuOpen }"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
      </nav>
    </div>

    <!-- Mobile Menu Overlay -->
    <div 
      class="mobile-overlay" 
      :class="{ 'mobile-overlay-active': isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useContactPopupStore } from '@/stores/contactPopupStore'

// Estados reativos
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const contactPopupStore = useContactPopupStore()

// Função para detectar scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

// Função para alternar menu mobile
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Previne scroll do body quando menu está aberto
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

// Função para fechar menu mobile
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}

// Função para o botão CTA
const handleContactClick = () => {
  // Abrir o popup de contato
  contactPopupStore.openPopup()
  
  // Fechar o menu mobile se estiver aberto
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Função para atualizar CSS custom property com altura do header
const updateHeaderHeight = () => {
  const headerElement = document.querySelector('.header')
  if (headerElement) {
    const height = headerElement.offsetHeight
    document.documentElement.style.setProperty('--header-height', `${height}px`)
  }
}

// Função para lidar com redimensionamento da tela
const handleResize = () => {
  updateHeaderHeight()
  
  // Fechar menu mobile automaticamente em telas maiores que 768px
  if (window.innerWidth > 768 && isMobileMenuOpen.value) {
    closeMobileMenu()
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
  updateHeaderHeight()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = 'auto'
  // Garantir que o menu seja fechado ao desmontar o componente
  if (isMobileMenuOpen.value) {
    closeMobileMenu()
  }
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 2rem;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  backdrop-filter: none;
  border: none;
  border-radius: 0;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: none;
}

.header-scrolled {
  top: 1rem;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  width: 90%;
  max-width: 900px;
  background: rgba(25, 25, 25, 0.2);
  backdrop-filter: blur(32px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 -1px 0 rgba(0, 0, 0, 0.1) inset;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
  position: relative;
  padding: 0.15rem 0;
}

/* Logo */
.logo-link {
  text-decoration: none;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-image {
  height: 80px;
  width: auto;
  max-width: 320px;
  object-fit: contain;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

.logo h1 {
  font-family: var(--bold);
  font-size: var(--f3);
  color: var(--cor-branco);
  margin: 0;
  background: linear-gradient(135deg, var(--cor-branco) 0%, var(--verde-conectado) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.2rem;
}

.nav-item {
  position: relative;
}

.nav-link {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-branco);
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.25rem 0;
  transition: all 0.3s ease;
  opacity: 0.85;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--cor-laranja);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--cor-laranja);
  opacity: 1;
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link.router-link-active {
  color: var(--cor-laranja);
  opacity: 1;
}

.nav-link.router-link-active::before {
  width: 100%;
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.theme-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: var(--cor-branco);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.theme-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
}

.theme-icon {
  width: 18px;
  height: 18px;
}

/* CTA Button */
.nav-cta {
  display: flex;
  align-items: center;
}

.cta-button {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 255, 255, 0.9);
  color: var(--cor-preto);
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f1);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 139, 65, 0.2), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(255, 255, 255, 0.2);
  background: var(--cor-laranja);
  color: var(--cor-branco);
}

.cta-button:hover::before {
  left: 100%;
}

.cta-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(2px);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.6rem;
  gap: 4px;
  z-index: 1001;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.mobile-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background: var(--cor-branco);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.mobile-toggle-active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: var(--cor-laranja);
}

.mobile-toggle-active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.mobile-toggle-active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: var(--cor-laranja);
}

/* Mobile Overlay */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 999;
}

.mobile-overlay-active {
  opacity: 1;
  visibility: visible;
}

/* Responsivo */
@media screen and (max-width: 1140px) {
  .container {
    padding: 0 1.2rem;
  }
  
  .nav-list {
    gap: 1rem;
  }
  
  .header-scrolled {
    width: 92%;
    max-width: 800px;
  }
}

/* Tablets - garantir menu desktop */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .mobile-toggle {
    display: none !important;
  }
  
  .nav-menu {
    display: flex !important;
    position: static !important;
    background: transparent !important;
    width: auto !important;
    height: auto !important;
    flex-direction: row !important;
  }
  
  .nav-list {
    flex-direction: row !important;
    gap: 1rem !important;
    padding: 0 !important;
  }
  
  .nav-link {
    font-size: var(--f1) !important;
    padding: 0.25rem 0 !important;
    font-weight: 500 !important;
  }
}

@media screen and (max-width: 768px) {
@media screen and (max-width: 768px) {
  .header {
    top: 1rem;
  }
  
  .header-scrolled {
    top: 0.5rem;
    width: 95%;
    max-width: 600px;
    border-radius: 16px;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .navbar {
    height: var(--header-height-mobile);
  }
  
  .logo-image {
    height: 55px;
    max-width: 240px;
  }
  
  .logo h1 {
    font-size: var(--f2);
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: rgba(25, 25, 25, 0.95);
    flex-direction: column;
    justify-content: center;
    transition: right 0.3s ease;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    backdrop-filter: blur(40px) saturate(180%);
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-menu-active {
    right: 0;
  }
  
  .nav-list {
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
    padding: 2rem 0;
  }
  
  .nav-link {
    font-size: var(--f3);
    padding: 1.2rem 0;
    font-weight: 600;
  }
  
  .mobile-toggle {
    display: flex;
  }
  
  .cta-button {
    padding: 0.55rem 1.1rem;
    font-size: var(--f1);
  }

  /* Ocultar o botão CTA no mobile */
  .nav-cta {
    display: none;
  }
}
}

@media screen and (max-width: 480px) {
  .header {
    top: 0.8rem;
  }
  
  .header-scrolled {
    top: 0.4rem;
    width: 96%;
    max-width: 400px;
    border-radius: 14px;
  }
  
  .navbar {
    height: var(--header-height-mobile-small);
  }
  
  .logo-image {
    height: 45px;
    max-width: 180px;
  }
  
  .logo h1 {
    font-size: var(--f1);
  }
  
  .nav-menu {
    width: 100%;
    right: -100%;
  }
  
  .nav-menu-active {
    right: 0;
  }
  
  /* Garantir que o CTA continue oculto */
  .nav-cta {
    display: none;
  }
}

/* Animações adicionais */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-item {
  animation: fadeInDown 0.5s ease forwards;
}

.nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-item:nth-child(4) { animation-delay: 0.4s; }
</style>
