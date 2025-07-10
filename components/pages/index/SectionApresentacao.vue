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
        <svg class="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
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
          <button class="cta-primary" @click="handleStartBuilding" aria-label="Ver nossas soluções de marketing digital">
            <span>Nossas Soluções</span>
            <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- CRM Dashboard Section -->
  <section class="crm-showcase">
    <!-- Gradient Transition -->
    <div class="section-gradient"></div>
    
    <div class="container">
      <div class="crm-content">
        <!-- Main CRM Dashboard -->
        <div class="crm-dashboard" data-aos="zoom-in" data-aos-delay="200">
          <div class="dashboard-header">
            <div class="dashboard-controls">
              <div class="control-dot red"></div>
              <div class="control-dot yellow"></div>
              <div class="control-dot green"></div>
            </div>
            <div class="dashboard-title">
              <span>Implemente as Nossas Soluções E Gere Oportunidades Diárias</span>
              <div class="live-indicator">
                <div class="live-dot"></div>
                <span>PLUG AND PLAY</span>
              </div>
            </div>
          </div>
          
          <!-- Print do CRM -->
          <div class="crm-screen">
            <img 
              src="/assets/images/printcrmrociamdigital.webp" 
              alt="Print do CRM Rociam Digital com leads gerados"
              class="crm-image"
            />
          </div>
        </div>

        <!-- Bottom Text -->
        <div class="crm-description" data-aos="fade-up" data-aos-delay="300">
          <p>Resultados reais de clientes que confiam na nossa metodologia</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ...existing code... -->
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
  left: 30%;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/bgrociamdigital.webp');
  background-size: auto; /* Ajusta a imagem para cobrir todo o fundo */
  background-position: center; /* Posiciona a imagem à direita */
  background-repeat: no-repeat;
  opacity: 0.35;
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

/* CRM Dashboard Section */
.crm-showcase {
  position: relative;
  padding: 0 0 6rem 0;
  background: #0d0d0d;
  overflow: hidden;
  margin-top: -2rem;
}
/* Gradient Transition */
.section-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(180deg, #000000 0%, transparent 100%);
  z-index: 1;
}

/* CRM Content */
.crm-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

/* Main CRM Dashboard */
.crm-dashboard {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 1.5rem;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.crm-dashboard::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 30%, rgba(0, 204, 153, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 70% 70%, rgba(0, 51, 255, 0.06) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px 12px 0 0;
  padding: 1rem 1.5rem;
  margin: -1.5rem -1.5rem 1.5rem -1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.dashboard-controls {
  position: absolute;
  left: 1.5rem;
  display: flex;
  gap: 0.5rem;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control-dot.red {
  background: #ff5f57;
}

.control-dot.yellow {
  background: #ffbd2e;
}

.control-dot.green {
  background: #28ca42;
}

.dashboard-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--cor-branco);
  font-family: var(--regular);
  font-size: 0.9rem;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(40, 202, 66, 0.2);
  border: 1px solid rgba(40, 202, 66, 0.3);
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-family: var(--bold);
}

.live-dot {
  width: 8px;
  height: 8px;
  background: #28ca42;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

/* CRM Screen */
.crm-screen {
  width: 100%;
  height: 400px;
  background: #0a0a0a;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.crm-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.crm-image:hover {
  transform: scale(1.02);
}

/* CRM Description */
.crm-description {
  margin-top: 2rem;
}

.crm-description p {
  font-family: var(--regular);
  font-size: 1.1rem;
  color: var(--cor-gelo);
  opacity: 0.8;
  max-width: 500px;
  margin: 0 auto;
}

/* Animações AOS */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
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
    padding: 6rem 0 3rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 3.2rem;
    margin-bottom: 2rem;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    line-height: 1.5;
  }
  
  .announcement-badge {
    margin-bottom: 2rem;
    padding: 0.4rem 0.8rem;
  }
  
  .badge-text {
    font-size: 0.9rem;
  }
  
  .cta-primary {
    padding: 1.2rem 2.4rem;
    font-size: 1rem;
  }
  
  .crm-showcase {
    padding: 0 0 4rem 0;
  }
  
  .crm-dashboard {
    padding: 1.25rem;
  }
  
  .crm-screen {
    height: 380px;
  }
  
  .dashboard-title {
    font-size: 1rem;
  }
  
  .crm-description p {
    font-size: 1.15rem;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding: 5rem 0 3rem;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    font-weight: 800;
  }
  
  .hero-description {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 100%;
  }
  
  .announcement-badge {
    margin-bottom: 1.8rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    border-radius: 30px;
  }
  
  .badge-text {
    font-size: 0.8rem;
    line-height: 1.3;
  }
  
  .cta-primary {
    padding: 1.2rem 2.2rem;
    font-size: 1rem;
    border-radius: 30px;
    font-weight: 700;
  }
  
  .hero-background {
    opacity: 0.25;
    animation-duration: 25s;
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.55);
  }
  
  .glass-blocks-overlay {
    opacity: 0.4;
    background-size: 120px 120px, 90px 90px, 110px 110px;
  }
  
  .particles {
    opacity: 0.6;
  }
  
  .crm-showcase {
    padding: 2.5rem 0 4rem 0;
  }
  
  .crm-dashboard {
    padding: 1.2rem;
    border-radius: 20px;
  }
  
  .dashboard-header {
    padding: 1rem 1.5rem;
    margin: -1.2rem -1.2rem 1.2rem -1.2rem;
  }
  
  .dashboard-title {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .crm-screen {
    height: 300px;
  }
  
  .crm-description {
    margin-top: 2.5rem;
  }
  
  .crm-description p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

@media screen and (max-width: 480px) {
  .hero {
    padding: 4.5rem 0 2rem;
    min-height: 100vh;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
    margin-bottom: 1.2rem;
    line-height: 1.25;
    font-weight: 800;
  }
  
  .hero-description {
    font-size: 0.95rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 100%;
    opacity: 0.95;
  }
  
  .announcement-badge {
    margin-bottom: 1.2rem;
    padding: 0.5rem 1rem;
    border-radius: 25px;
  }
  
  .badge-text {
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1.3;
  }
  
  .badge-icon {
    width: 16px;
    height: 16px;
  }
  
  .cta-primary {
    padding: 1.1rem 2rem;
    font-size: 0.95rem;
    border-radius: 25px;
    font-weight: 700;
  }
  
  .cta-icon {
    width: 18px;
    height: 18px;
  }
  
  .hero-background {
    opacity: 0.2;
    animation-duration: 35s;
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.65);
  }
  
  .glass-blocks-overlay {
    opacity: 0.35;
    background-size: 100px 100px, 75px 75px, 85px 85px;
    animation-duration: 22s;
  }
  
  .particles {
    display: none;
  }
  
  .crm-showcase {
    padding: 1.5rem 0 3rem 0;
    margin-top: -1rem;
  }
  
  .crm-dashboard {
    padding: 1rem;
    border-radius: 16px;
  }
  
  .dashboard-header {
    padding: 0.9rem 1.2rem;
    margin: -1rem -1rem 1rem -1rem;
    border-radius: 16px 16px 0 0;
    position: relative;
    z-index: 3;
  }
  
  .dashboard-title {
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 3;
    position: relative;
    line-height: 1.4;
  }
  
  .dashboard-title span {
    font-size: 0.75rem;
    display: block;
    text-align: center;
  }
  
  .live-indicator {
    padding: 0.3rem 0.7rem;
    font-size: 0.7rem;
    font-weight: 700;
  }
  
  .crm-screen {
    height: 250px;
    border-radius: 12px;
  }
  
  .crm-description {
    margin-top: 2rem;
  }
  
  .crm-description p {
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 500;
    max-width: 100%;
  }
}

/* CRM Section Responsive */
@media screen and (max-width: 1140px) {
  .crm-showcase {
    padding: 0 0 4rem 0;
  }
  
  .crm-dashboard {
    padding: 1.4rem;
  }
  
  .crm-screen {
    height: 380px;
  }
}

@media screen and (max-width: 768px) {
  .crm-showcase {
    padding: 2.5rem 0 4rem 0;
  }
  
  .crm-dashboard {
    padding: 1.2rem;
    border-radius: 20px;
  }
  
  .dashboard-header {
    padding: 1rem 1.5rem;
    margin: -1.2rem -1.2rem 1.2rem -1.2rem;
  }
  
  .dashboard-title {
    font-size: 0.9rem;
    line-height: 1.4;
  }
  
  .crm-screen {
    height: 300px;
  }
  
  .crm-description p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

@media screen and (max-width: 480px) {
  .crm-showcase {
    padding: 1.5rem 0 3rem 0;
    margin-top: -1rem;
  }
  
  .crm-dashboard {
    padding: 1rem;
    border-radius: 16px;
  }
  
  .dashboard-header {
    padding: 0.9rem 1.2rem;
    margin: -1rem -1rem 1rem -1rem;
    border-radius: 16px 16px 0 0;
    position: relative;
    z-index: 3;
  }
  
  .dashboard-controls {
    left: 1.2rem;
    z-index: 4;
    position: relative;
  }
  
  .control-dot {
    width: 10px;
    height: 10px;
  }
  
  .dashboard-title {
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 3;
    position: relative;
    line-height: 1.4;
  }
  
  .dashboard-title span {
    font-size: 0.75rem;
    display: block;
    text-align: center;
  }
  
  .live-indicator {
    padding: 0.3rem 0.7rem;
    font-size: 0.7rem;
    font-weight: 700;
    z-index: 3;
    position: relative;
  }
  
  .live-dot {
    width: 6px;
    height: 6px;
  }
  
  .crm-screen {
    height: 250px;
    border-radius: 12px;
  }
  
  .crm-description {
    margin-top: 2rem;
  }
  
  .crm-description p {
    font-size: 0.95rem;
    line-height: 1.6;
    font-weight: 500;
    max-width: 100%;
  }
}
</style>
