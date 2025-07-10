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
        <div 
          class="nav-menu" 
          :class="{ 'nav-menu-active': isMobileMenuOpen }"
          id="mobile-navigation"
          role="navigation"
          :aria-hidden="!isMobileMenuOpen"
        >
          <ul class="nav-list" role="menubar">
            <li class="nav-item" role="none">
              <NuxtLink to="/" class="nav-link" @click="closeMobileMenu" role="menuitem">
                <span class="nav-text">Home</span>
                <div class="nav-indicator" aria-hidden="true"></div>
              </NuxtLink>
            </li>
            <li class="nav-item" role="none">
              <NuxtLink to="/sobre" class="nav-link" @click="closeMobileMenu" role="menuitem">
                <span class="nav-text">Sobre</span>
                <div class="nav-indicator" aria-hidden="true"></div>
              </NuxtLink>
            </li>
            <li class="nav-item" role="none">
              <NuxtLink to="/solucoes" class="nav-link" @click="closeMobileMenu" role="menuitem">
                <span class="nav-text">Soluções</span>
                <div class="nav-indicator" aria-hidden="true"></div>
              </NuxtLink>
            </li>
            <li class="nav-item" role="none">
              <NuxtLink to="/contato" class="nav-link" @click="closeMobileMenu" role="menuitem">
                <span class="nav-text">Contato</span>
                <div class="nav-indicator" aria-hidden="true"></div>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- CTA Button -->
        <div class="nav-cta">
          <button 
            class="cta-button" 
            @click="handleContactClick"
            aria-label="Abrir formulário de contato"
          >
            <span class="cta-text">Entrar em Contato</span>
            <div class="cta-icon-wrapper" aria-hidden="true">
              <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </button>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle" 
          @click="toggleMobileMenu"
          :class="{ 'mobile-toggle-active': isMobileMenuOpen }"
          :aria-label="isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-navigation"
        >
          <span class="hamburger-line" aria-hidden="true"></span>
          <span class="hamburger-line" aria-hidden="true"></span>
          <span class="hamburger-line" aria-hidden="true"></span>
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
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'auto';
};

// Função para fechar menu mobile
const closeMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = 'auto';
  }
};

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
  // Apenas atualiza a altura do header
  updateHeaderHeight();
  
  // Garante que o menu mobile seja fechado em telas maiores
  if (window.innerWidth > 768 && isMobileMenuOpen.value) {
    closeMobileMenu();
  }
};

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
  updateHeaderHeight();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = 'auto';
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  max-width: 900px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.6rem 0;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
    0 1px 3px rgba(255, 255, 255, 0.1);
  overflow: visible;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.15) inset,
    0 1px 3px rgba(255, 255, 255, 0.15);
  transform: translateX(-50%) translateY(-1px);
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 900px;
  gap: 1.5rem;
}

/* Logo */
.logo {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background: transparent !important;
  border-radius: 0 !important;
  padding: 0 !important;
  box-shadow: none !important;
  margin: 0 !important;
  position: relative;
  z-index: 2;
}

.logo:hover {
  transform: translateY(-1px);
  box-shadow: none !important;
}

.logo-link {
  display: flex;
  align-items: center;
  position: relative;
}

.logo-image {
  height: 72px;
  width: auto;
  max-width: 320px;
  object-fit: contain;
  filter: none !important;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: 2;
}

/* Navigation Menu */
.nav-menu {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
}

.nav-item {
  position: relative;
}

.nav-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 10px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: transparent;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.nav-text {
  font-family: var(--regular);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.nav-indicator {
  position: absolute;
  bottom: 0.15rem;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 3px;
  height: 3px;
  background: linear-gradient(135deg, var(--cor-laranja), #ffffff);
  border-radius: 50%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(255, 107, 53, 0.6);
}

.nav-link:hover {
  transform: translateY(-1px);
}

.nav-link:hover::before {
  opacity: 1;
}

.nav-link:hover .nav-text {
  color: var(--cor-branco);
  transform: scale(1.02);
}

.nav-link:hover .nav-indicator {
  transform: translateX(-50%) scaleX(1);
  width: 16px;
  height: 2px;
  border-radius: 1px;
}

.nav-link.router-link-active .nav-text {
  color: var(--cor-branco);
  font-weight: 600;
}

.nav-link.router-link-active .nav-indicator {
  transform: translateX(-50%) scaleX(1);
  width: 16px;
  height: 2px;
  border-radius: 1px;
}

.nav-link.router-link-active::before {
  opacity: 1;
}

/* CTA Button */
.nav-cta {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.cta-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(245, 245, 245, 0.95);
  color: var(--cor-preto);
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: 25px;
  font-family: var(--regular);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 8px 25px rgba(247, 247, 247, 0.15),
    0 0 0 1px rgba(255, 255, 255, 0.4) inset;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-text {
  position: relative;
  z-index: 1;
}

.cta-icon-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.cta-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon-wrapper {
  transform: translateX(2px);
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  flex-direction: column;
  background: transparent !important;
  border: none !important;
  cursor: pointer;
  padding: 0.5rem;
  gap: 3px;
  z-index: 1001;
  border-radius: 0 !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-toggle:hover {
  background: transparent;
  transform: scale(1.05);
  border-color: transparent;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--cor-branco);
  border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-toggle-active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background: var(--cor-laranja);
}

.mobile-toggle-active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-toggle-active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
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
  backdrop-filter: blur(8px);
}

.mobile-overlay-active {
  opacity: 1;
  visibility: visible;
}

/* Responsivo */
@media screen and (max-width: 1100px) {
  .container {
    padding: 0 1rem;
  }
  .nav-list {
    gap: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .header {
    top: 0.75rem;
    width: 96%;
    padding: 0.5rem 0;
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .navbar {
    gap: 0;
    justify-content: space-between;
  }
  
  .logo {
    padding: 0 !important;
    margin-left: 0 !important;
    background: transparent !important;
    border-radius: 0 !important;
    box-shadow: none !important;
  }
  
  .logo-image {
    height: 48px;
    max-width: 180px;
    position: static;
    top: auto;
    left: auto;
    transform: none;
  }
  
  .nav-menu {
    display: none;
  }
  
  .nav-cta {
    display: none;
  }
  
  .mobile-toggle {
    display: flex;
    margin-right: 0;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    padding: 0.8rem;
    position: relative;
    z-index: 1001;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .mobile-toggle:hover {
    background: rgba(255, 255, 255, 0.1) !important;
    border-radius: 8px !important;
    transform: scale(1.1);
  }
  
  .mobile-toggle:active {
    transform: scale(0.95);
  }

  /* Menu mobile em tela cheia */
  .nav-menu-active {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%);
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
    z-index: 1000;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-list {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    gap: 0.8rem;
    align-items: center;
  }
  
  .nav-item {
    width: 100%;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInItem 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  
  .nav-item:nth-child(1) { animation-delay: 0.1s; }
  .nav-item:nth-child(2) { animation-delay: 0.2s; }
  .nav-item:nth-child(3) { animation-delay: 0.3s; }
  .nav-item:nth-child(4) { animation-delay: 0.4s; }
  
  @keyframes slideInItem {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-link {
    width: 100%;
    padding: 1.2rem 2rem;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }
  
  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 122, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  .nav-link:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(0, 122, 255, 0.4);
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 122, 255, 0.15);
  }
  
  .nav-link:hover::before {
    left: 100%;
  }
  
  .nav-link.router-link-active {
    background: linear-gradient(135deg, rgba(0, 122, 255, 0.15), rgba(0, 204, 153, 0.1));
    border-color: rgba(0, 122, 255, 0.5);
    box-shadow: 0 4px 20px rgba(0, 122, 255, 0.2);
  }
  
  .nav-text {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--cor-branco);
    position: relative;
    z-index: 1;
  }
  
  .nav-indicator {
    display: none;
  }
}
</style>
