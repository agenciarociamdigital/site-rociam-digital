<template>
  <div>
    <Nav />
    <div class="solution-page">
      <!-- Hero Section -->
      <section class="solution-hero">
        <div class="hero-background">
          <div class="hero-gradient"></div>
          <div class="hero-shapes">
            <div class="shape shape-1"></div>
            <div class="shape shape-2"></div>
            <div class="shape shape-3"></div>
          </div>
        </div>
        
        <div class="container">
          <div class="hero-content">
            <div class="hero-badge" data-aos="fade-down">
              <span class="badge-icon">🎯</span>
              <span>Solução Especializada</span>
              <svg class="badge-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
              <span class="title-highlight">Geração de Leads</span>
              <br>Qualificados
            </h1>
            
            <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
              Transformamos visitantes em clientes com campanhas
              <br>de marketing digital altamente segmentadas.
            </p>
            
            <div class="hero-cta" data-aos="fade-up" data-aos-delay="300">
              <NuxtLink to="/contato" class="cta-primary">
                <span>Falar com Especialista</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
      
      <!-- VSL Section -->
      <section class="vsl-section">
        <div class="container">
          <div class="vsl-content" data-aos="fade-up" data-aos-delay="100">
            <!-- Headline da VSL -->
            <div class="vsl-header">
              <h2 class="vsl-title">
                Descubra Como <span class="title-highlight">Triplicar Seus Leads</span>
                <br>em 30 Dias ou Menos
              </h2>
              <p class="vsl-subtitle">
                Assista à demonstração completa da nossa metodologia exclusiva
                que já gerou mais de 10.000 leads qualificados para nossos clientes.
              </p>
            </div>

            <!-- Container do Vídeo -->
            <div class="video-wrapper" data-aos="zoom-in" data-aos-delay="200">
              <div class="video-container">
                <div class="video-player">
                  <!-- Placeholder para o vídeo - substitua o src pelo seu vídeo -->
                  <iframe 
                    src="https://www.loom.com/embed/e5e30e859c1b483fa96aa972391b8fe7?sid=f1365495-6513-41f1-8aeb-efbeeec73bdd" 
                    frameborder="0" 
                    webkitallowfullscreen 
                    mozallowfullscreen 
                    allowfullscreen
                    class="vsl-video"
                  ></iframe>
                </div>
                
                <!-- Video Info Overlay -->
                <div class="video-info">
                  <div class="video-duration">
                    <svg class="clock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <span>8 min</span>
                  </div>
                  <div class="video-quality">
                    <span class="quality-badge">HD</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Benefícios Rápidos -->
            <div class="vsl-benefits" data-aos="fade-up" data-aos-delay="300">
              <h3 class="benefits-title">O que você vai descobrir:</h3>
              <div class="benefits-grid">
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                  </div>
                  <span>Nossa estratégia de segmentação avançada</span>
                </div>
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                  </div>
                  <span>Como qualificamos leads em tempo real</span>
                </div>
                <div class="benefit-item">
                  <div class="benefit-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                    </svg>
                  </div>
                  <span>Automações que convertem 24/7</span>
                </div>
              </div>
            </div>

            <!-- CTA da VSL -->
            <div class="vsl-cta" data-aos="fade-up" data-aos-delay="400">
              <NuxtLink to="/contato" class="cta-vsl-primary">
                <span>Quero Essa Estratégia Agora</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
              <p class="cta-guarantee">
                <svg class="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                Consultoria gratuita de 30 minutos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// SEO Meta
useHead({
  title: 'Geração de Leads Qualificados - Rociam Digital',
  meta: [
    { name: 'description', content: 'Transformamos visitantes em clientes em potencial com campanhas de marketing digital altamente segmentadas. Aumente suas conversões com leads qualificados.' }
  ]
})

// Inicializar animações
onMounted(() => {
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
.solution-page {
  background: #000000;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.solution-page::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(0, 51, 255, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(0, 204, 153, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(0, 51, 255, 0.08) 0%, transparent 50%);
  pointer-events: none;
  z-index: 1;
}

/* Hero Section */
.solution-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 0 4rem 0;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, rgba(0, 51, 255, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 204, 153, 0.25) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(0, 51, 255, 0.1) 0%, transparent 70%);
}

.hero-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;
}

.shape-1 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--azul-digital), var(--verde-conectado));
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, var(--verde-conectado), var(--azul-digital));
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  background: linear-gradient(135deg, var(--azul-digital), var(--verde-conectado));
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 10;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  color: var(--cor-branco);
  font-family: var(--regular);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
}

.badge-icon {
  font-size: 1rem;
}

.badge-arrow {
  width: 16px;
  height: 16px;
  stroke-width: 2;
  color: var(--verde-conectado);
}

.hero-title {
  font-family: var(--bold);
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--cor-branco);
}

.title-highlight {
  background: linear-gradient(135deg, var(--verde-conectado), var(--azul-digital));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-family: var(--regular);
  font-size: 1.25rem;
  color: var(--cor-gelo);
  max-width: 600px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  opacity: 0.9;
}

.hero-cta {
  display: flex;
  justify-content: center;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--azul-digital), var(--verde-conectado));
  color: var(--cor-branco);
  font-family: var(--bold);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(0, 122, 255, 0.3);
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
  box-shadow: 0 12px 40px rgba(0, 122, 255, 0.4);
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

/* VSL Section */
.vsl-section {
  padding: 6rem 0;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
}

.vsl-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.vsl-header {
  margin-bottom: 3rem;
}

.vsl-title {
  font-family: var(--bold);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--cor-branco);
}

.vsl-subtitle {
  font-family: var(--regular);
  font-size: 1.2rem;
  color: var(--cor-gelo);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
}

/* Video Container */
.video-wrapper {
  margin-bottom: 3rem;
  position: relative;
}

.video-container {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.video-player {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: 12px;
  overflow: hidden;
  background: #000;
}

.vsl-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

/* Video Info Overlay */
.video-info {
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 3;
}

.video-duration {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: var(--cor-branco);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-family: var(--regular);
}

.clock-icon {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

.video-quality {
  background: linear-gradient(135deg, var(--verde-conectado), var(--azul-digital));
  border-radius: 20px;
  padding: 0.5rem 1rem;
}

.quality-badge {
  color: var(--cor-branco);
  font-size: 0.875rem;
  font-family: var(--bold);
  font-weight: 600;
}

/* VSL Benefits */
.vsl-benefits {
  margin-bottom: 3rem;
}

.benefits-title {
  font-family: var(--bold);
  font-size: 1.5rem;
  color: var(--cor-branco);
  margin-bottom: 2rem;
  font-weight: 600;
}

.benefits-grid {
  display: grid;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.benefit-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--verde-conectado);
}

.benefit-icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 2.5;
}

.benefit-item span {
  font-family: var(--regular);
  color: var(--cor-gelo);
  font-size: 1rem;
  line-height: 1.4;
}

/* VSL CTA */
.vsl-cta {
  text-align: center;
}

.cta-vsl-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, var(--verde-conectado), var(--azul-digital));
  color: var(--cor-branco);
  font-family: var(--bold);
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 14px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 12px 40px rgba(0, 204, 153, 0.3);
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
}

.cta-vsl-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.cta-vsl-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 50px rgba(0, 204, 153, 0.4);
}

.cta-vsl-primary:hover::before {
  left: 100%;
}

.cta-guarantee {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--cor-gelo);
  font-family: var(--regular);
  font-size: 0.9rem;
  margin-top: 1rem;
  opacity: 0.8;
}

.shield-icon {
  width: 18px;
  height: 18px;
  color: var(--verde-conectado);
  stroke-width: 2;
}

/* Responsive Design */
@media (max-width: 968px) {
  .solution-hero {
    padding: 5.5rem 0 2.5rem 0;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 2.8rem;
    line-height: 1.1;
  }
  
  .hero-description {
    font-size: 1.2rem;
    line-height: 1.5;
  }
}

@media (max-width: 768px) {
  .solution-hero {
    padding: 5rem 0 2rem 0;
  }
  
  .container {
    padding: 0 1.2rem;
  }
  
  .hero-title {
    font-size: 2.4rem;
    line-height: 1.15;
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 2rem;
  }
  
  .hero-badge {
    margin-bottom: 1.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .hero-cta {
    margin-top: 1.5rem;
  }
  
  .cta-primary {
    padding: 0.9rem 1.6rem;
    font-size: 1rem;
  }
}

/* VSL Responsive Design */
@media (max-width: 968px) {
  .vsl-section {
    padding: 4rem 0;
  }
  
  .vsl-title {
    font-size: 2.5rem;
    line-height: 1.2;
  }
  
  .vsl-subtitle {
    font-size: 1.1rem;
  }
  
  .video-container {
    padding: 1rem;
  }
  
  .video-info {
    top: 1.5rem;
    right: 1.5rem;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .benefits-title {
    font-size: 1.3rem;
  }
  
  .cta-vsl-primary {
    padding: 1.1rem 2rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .vsl-section {
    padding: 3rem 0;
  }
  
  .vsl-header {
    margin-bottom: 2rem;
  }
  
  .vsl-title {
    font-size: 2rem;
    line-height: 1.3;
  }
  
  .vsl-subtitle {
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .video-wrapper {
    margin-bottom: 2rem;
  }
  
  .video-container {
    padding: 0.75rem;
  }
  
  .video-info {
    position: static;
    justify-content: center;
    margin-top: 1rem;
    flex-direction: row;
  }
  
  .vsl-benefits {
    margin-bottom: 2rem;
  }
  
  .benefits-title {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  .benefits-grid {
    gap: 1rem;
  }
  
  .benefit-item {
    padding: 0.875rem 1.25rem;
    text-align: left;
  }
  
  .benefit-item span {
    font-size: 0.9rem;
  }
  
  .cta-vsl-primary {
    padding: 1rem 1.75rem;
    font-size: 0.95rem;
  }
  
  .cta-guarantee {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .vsl-section {
    padding: 2.5rem 0;
  }
  
  .vsl-title {
    font-size: 1.75rem;
    line-height: 1.3;
  }
  
  .vsl-subtitle {
    font-size: 0.95rem;
    line-height: 1.4;
  }
  
  .video-container {
    padding: 0.5rem;
    border-radius: 16px;
  }
  
  .video-player {
    border-radius: 10px;
  }
  
  .video-info {
    gap: 0.75rem;
  }
  
  .video-duration, .video-quality {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .benefits-title {
    font-size: 1.1rem;
  }
  
  .benefit-item {
    padding: 0.75rem 1rem;
    gap: 0.75rem;
  }
  
  .benefit-icon {
    width: 20px;
    height: 20px;
  }
  
  .benefit-item span {
    font-size: 0.85rem;
  }
  
  .cta-vsl-primary {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
    gap: 0.5rem;
  }
  
  .cta-guarantee {
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .shield-icon {
    width: 16px;
    height: 16px;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}
</style>
