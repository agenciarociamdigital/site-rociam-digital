<template>
  <section class="hero">
    <!-- Background Image -->
    <div class="hero-background"></div>
    <!-- Background Overlay -->
    <div class="hero-overlay"></div>
    <!-- Efeito Blocos de Vidro -->
    <div class="glass-blocks-overlay"></div>
    <!-- Partículas decorativas -->
    <div class="particles">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
    </div>
    
    <div class="container">
      <!-- Badge de Anúncio -->
      <div class="announcement-badge" data-aos="fade-down" data-aos-delay="100">
        <span class="badge-text">Tecnologia, Inteligência Artificial e Estratégia</span>
        <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>

      <!-- Título Principal -->
      <div class="hero-content">
        <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
          Soluções Modernas para
          <span class="title-highlight">Empresas Que Estão à Frente</span>
        </h1>
        
        <p class="hero-description" data-aos="fade-up" data-aos-delay="300">
          Tráfego Pago, Desenvolvimento Web, Leads, CRM e Automação com IA: Tudo para Empresas que Lideram o Mercado.
        </p>

        <!-- CTA Button -->
        <div class="hero-cta" data-aos="fade-up" data-aos-delay="400">
          <button class="cta-primary" @click="handleStartBuilding">
            <span>Nossas Soluções</span>
            <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// Função para o CTA principal
const handleStartBuilding = () => {
  // Redirecionar para página de soluções
  navigateTo('/solucoes')
}

// Inicializar animações AOS se disponível
onMounted(() => {
  // Verificar se AOS está disponível
  if (typeof window !== 'undefined' && window.AOS) {
    window.AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50
    })
  }
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  padding: 8rem 0 4rem;
  overflow: hidden;
}

/* Background Image */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/pexels-pixabay-315938.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.4;
  z-index: 0;
  animation: subtle-movement 12s ease-in-out infinite;
  transform-origin: center center;
}

/* Background Overlay */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

/* Efeito Blocos de Vidro - Glassmorphism Sutil */
.glass-blocks-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    /* Blocos de vidro grandes */
    linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%),
    linear-gradient(45deg, rgba(0, 204, 153, 0.08) 0%, transparent 70%),
    linear-gradient(-45deg, rgba(0, 51, 255, 0.06) 0%, transparent 60%);
  background-size: 
    200px 200px,
    150px 150px,
    180px 180px;
  background-position: 
    0 0,
    100px 50px,
    50px 100px;
  backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  opacity: 0.7;
  z-index: 2;
  animation: glass-float 20s ease-in-out infinite;
  pointer-events: none;
  mask: 
    radial-gradient(circle at 20% 30%, black 40px, transparent 42px),
    radial-gradient(circle at 70% 60%, black 35px, transparent 37px),
    radial-gradient(circle at 40% 80%, black 45px, transparent 47px),
    radial-gradient(circle at 80% 20%, black 30px, transparent 32px),
    radial-gradient(circle at 10% 70%, black 38px, transparent 40px);
  mask-composite: add;
  -webkit-mask: 
    radial-gradient(circle at 20% 30%, black 40px, transparent 42px),
    radial-gradient(circle at 70% 60%, black 35px, transparent 37px),
    radial-gradient(circle at 40% 80%, black 45px, transparent 47px),
    radial-gradient(circle at 80% 20%, black 30px, transparent 32px),
    radial-gradient(circle at 10% 70%, black 38px, transparent 40px);
  -webkit-mask-composite: source-over;
}

@keyframes glass-float {
  0% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-5px) translateX(3px);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-8px) translateX(-2px);
    opacity: 0.6;
  }
  75% {
    transform: translateY(-3px) translateX(2px);
    opacity: 0.75;
  }
  100% {
    transform: translateY(0px) translateX(0px);
    opacity: 0.7;
  }
}

/* Efeito de movimento sutil */
@keyframes subtle-movement {
  0% {
    transform: scale(1) translateX(0px);
  }
  25% {
    transform: scale(1.02) translateX(-8px);
  }
  50% {
    transform: scale(1.04) translateX(-15px);
  }
  75% {
    transform: scale(1.02) translateX(-8px);
  }
  100% {
    transform: scale(1) translateX(0px);
  }
}

/* Partículas decorativas */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--verde-conectado), var(--azul-digital));
  opacity: 0.3;
  box-shadow: 0 0 10px rgba(0, 204, 153, 0.5);
}

.particle-1 {
  width: 6px;
  height: 6px;
  top: 20%;
  left: 10%;
  animation: float-up-1 8s linear infinite;
}

.particle-2 {
  width: 8px;
  height: 8px;
  top: 60%;
  right: 15%;
  animation: float-up-2 10s linear infinite;
}

.particle-3 {
  width: 4px;
  height: 4px;
  top: 80%;
  left: 70%;
  animation: float-up-3 12s linear infinite;
}

@keyframes float-up-1 {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.2;
  }
  100% {
    transform: translateY(-300px) translateX(50px);
    opacity: 0;
  }
}

@keyframes float-up-2 {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  15% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.7;
  }
  85% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-250px) translateX(-30px);
    opacity: 0;
  }
}

@keyframes float-up-3 {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  20% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.4;
  }
  100% {
    transform: translateY(-200px) translateX(-80px);
    opacity: 0;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
  text-align: center;
}

/* Badge de Anúncio */
.announcement-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.35rem 0.8rem;
  margin-bottom: 2.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.announcement-badge:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.badge-text {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-branco);
  opacity: 0.9;
}

.badge-icon {
  width: 16px;
  height: 16px;
  color: var(--cor-laranja);
}

/* Hero Content */
.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-family: var(--bold);
  font-size: var(--f7);
  color: var(--cor-branco);
  line-height: 1.1;
  margin-bottom: 3rem;
  font-weight: 700;
}

.title-highlight {
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.hero-description {
  font-family: var(--regular);
  font-size: var(--f3);
  color: var(--cor-gelo);
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* CTA Button */
.hero-cta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 0;
}

.cta-primary {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1.3rem 2.5rem;
  border-radius: 14px;
  font-family: var(--bold);
  font-size: var(--f4);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 12px 40px rgba(255, 139, 65, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.cta-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(255, 139, 65, 0.4);
}

.cta-primary:hover::before {
  left: 100%;
}

.cta-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.cta-primary:hover .cta-icon {
  transform: translateX(3px);
}

/* Otimizações de performance e acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .hero-background {
    opacity: 0.3;
    animation: none;
  }
  
  .glass-blocks-overlay {
    animation: none;
    opacity: 0.3;
  }
  
  .particles {
    display: none;
  }
}

/* Responsivo */
@media screen and (max-width: 1140px) {
  .hero {
    padding: 7rem 0 3rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: var(--f6);
    margin-bottom: 2.5rem;
  }
  
  .hero-description {
    font-size: var(--f2);
    margin-bottom: 2.5rem;
  }
  
  .announcement-badge {
    margin-bottom: 2rem;
    padding: 0.3rem 0.7rem;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding: 6rem 0 3.5rem;
  }
  
  .container {
    padding: 0 1.2rem;
  }
  
  .hero-title {
    font-size: var(--f5);
    margin-bottom: 2rem;
    line-height: 1.15;
  }
  
  .hero-description {
    font-size: var(--f2);
    margin-bottom: 2.5rem;
    line-height: 1.5;
  }
  
  .announcement-badge {
    margin-bottom: 1.5rem;
    padding: 0.3rem 0.6rem;
  }
  
  .badge-text {
    font-size: var(--f0);
  }
  
  .cta-primary {
    padding: 1.2rem 2.2rem;
    font-size: var(--f3);
  }
  
  .hero-background {
    opacity: 0.2; /* Reduz opacidade em mobile para melhor legibilidade */
    animation-duration: 30s; /* Movimento mais lento em mobile */
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.6); /* Escurece mais o overlay em mobile */
  }
  
  .glass-blocks-overlay {
    opacity: 0.4; /* Reduz intensidade do efeito de vidro em tablet */
    background-size: 120px 120px, 90px 90px, 110px 110px; /* Blocos menores */
  }
  
  .particles {
    opacity: 0.5; /* Reduz intensidade das partículas em tablet */
  }
}

@media screen and (max-width: 480px) {
  .hero {
    padding: 5.5rem 0 2.5rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: var(--f4);
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: var(--f1);
    margin-bottom: 2rem;
    line-height: 1.4;
  }
  
  .announcement-badge {
    margin-bottom: 1.2rem;
    padding: 0.25rem 0.5rem;
  }
  
  .badge-text {
    font-size: var(--f0);
  }
  
  .badge-icon {
    width: 14px;
    height: 14px;
  }
  
  .cta-primary {
    padding: 1rem 1.8rem;
    font-size: var(--f2);
  }
  
  .cta-icon {
    width: 18px;
    height: 18px;
  }
  
  .hero-background {
    opacity: 0.15; /* Ainda mais sutil em telas pequenas */
    animation-duration: 40s; /* Ainda mais lento em mobile */
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.7);
  }
  
  .glass-blocks-overlay {
    opacity: 0.3; /* Muito sutil em mobile */
    background-size: 80px 80px, 60px 60px, 70px 70px; /* Blocos ainda menores */
    animation-duration: 25s; /* Movimento mais lento */
  }
  
  .particles {
    display: none; /* Remove partículas em telas muito pequenas */
  }
}
</style>
