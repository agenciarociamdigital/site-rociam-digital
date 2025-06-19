<template>
  <div>
    <Nav />
    <div class="solutions-page">
      <!-- Hero Section -->
      <section class="solutions-hero">
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
              <span class="badge-icon">🚀</span>
              <span>Soluções Digitais de Alta Performance</span>
              <svg class="badge-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
              Impulsione <span class="title-highlight">resultados</span>
              <br>em <span class="title-emphasis">tempo recorde</span>
            </h1>
              <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
              Transformamos desafios em oportunidades com soluções digitais
              <br>estratégicas e personalizadas para acelerar o crescimento.
            </p>
            
            <div class="hero-tech-stack" data-aos="fade-up" data-aos-delay="300">
              <div class="tech-item">
                <div class="tech-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <span>Leads</span>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span>Performance</span>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <rect width="20" height="14" x="2" y="3" rx="2"/>
                    <line x1="8" x2="16" y1="21" y2="21"/>
                    <line x1="12" x2="12" y1="17" y2="21"/>
                  </svg>
                </div>
                <span>Web Dev</span>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                    <circle cx="10" cy="8" r="2"/>
                    <path d="M15 13a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v3h10v-3Z"/>
                  </svg>
                </div>
                <span>CRM</span>
              </div>
              
              <div class="tech-item">
                <div class="tech-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <line x1="12" x2="12" y1="20" y2="10"/>
                    <line x1="18" x2="18" y1="20" y2="4"/>
                    <line x1="6" x2="6" y1="20" y2="16"/>
                  </svg>
                </div>
                <span>Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Solutions Content -->
      <section class="solutions-content">
        <div class="container">
          <!-- Solução 1: Geração de Leads -->
          <div class="solution-item" data-aos="fade-up" data-aos-delay="100">
            <div class="solution-image">
              <div class="video-screen-share">
                <div class="screen-header">
                  <div class="screen-controls">
                    <div class="control-dot red"></div>
                    <div class="control-dot yellow"></div>
                    <div class="control-dot green"></div>
                  </div>
                  <div class="screen-title">
                    <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect width="20" height="14" x="2" y="3" rx="2"/>
                      <line x1="8" x2="16" y1="21" y2="21"/>
                      <line x1="12" x2="12" y1="17" y2="21"/>
                    </svg>
                    <span>Demonstração - Geração de Leads</span>
                    <div class="recording-indicator">
                      <div class="recording-dot"></div>
                      <span>REC</span>
                    </div>
                  </div>
                </div>
                <div class="video-container">
                  <video 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    class="demo-video"
                  >
                    <source src="~/assets/videos/agent-demo.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </div>
            </div>
            <div class="solution-content">
              <h3>Geração de Leads Qualificados</h3>
              <p>
                Transformamos visitantes em clientes em potencial com campanhas de marketing digital 
                altamente segmentadas. Atraímos e engajamos o público certo para o seu negócio, 
                garantindo leads mais qualificados e aumentando significativamente suas chances 
                de conversão e crescimento sustentável.
              </p>
              <NuxtLink to="/contato" class="cta-button">
                <span>Falar com Especialista</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Solução 2: Tráfego Pago -->
          <div class="solution-item reverse" data-aos="fade-up" data-aos-delay="200">
            <div class="solution-image">
              <div class="video-screen-share">
                <div class="screen-header">
                  <div class="screen-controls">
                    <div class="control-dot red"></div>
                    <div class="control-dot yellow"></div>
                    <div class="control-dot green"></div>
                  </div>
                  <div class="screen-title">
                    <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Demonstração - Tráfego Pago</span>
                    <div class="recording-indicator">
                      <div class="recording-dot"></div>
                      <span>REC</span>
                    </div>
                  </div>
                </div>
                <div class="video-container">
                  <video 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    class="demo-video"
                  >
                    <source src="~/assets/videos/agent-demo.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </div>
            </div>
            <div class="solution-content">
              <h3>Gestão de Tráfego Pago</h3>
              <p>
                Maximize sua visibilidade online com campanhas de tráfego pago focadas em resultados 
                e retorno sobre investimento (ROI). Através das plataformas mais eficazes, atraímos 
                o público ideal para o seu negócio, garantindo conversões rápidas e impulsionando 
                suas vendas.
              </p>
              <NuxtLink to="/contato" class="cta-button">
                <span>Falar com Especialista</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Solução 3: Desenvolvimento Web -->
          <div class="solution-item" data-aos="fade-up" data-aos-delay="300">
            <div class="solution-image">
              <div class="video-screen-share">
                <div class="screen-header">
                  <div class="screen-controls">
                    <div class="control-dot red"></div>
                    <div class="control-dot yellow"></div>
                    <div class="control-dot green"></div>
                  </div>
                  <div class="screen-title">
                    <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect width="20" height="14" x="2" y="3" rx="2"/>
                      <line x1="8" x2="16" y1="21" y2="21"/>
                      <line x1="12" x2="12" y1="17" y2="21"/>
                    </svg>
                    <span>Demonstração - Desenvolvimento Web</span>
                    <div class="recording-indicator">
                      <div class="recording-dot"></div>
                      <span>REC</span>
                    </div>
                  </div>
                </div>
                <div class="video-container">
                  <video 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    class="demo-video"
                  >
                    <source src="~/assets/videos/agent-demo.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </div>
            </div>
            <div class="solution-content">
              <h3>Desenvolvimento Web Estratégico</h3>
              <p>
                Desenvolvemos sites institucionais, landing pages e páginas de vendas de alta 
                performance, totalmente personalizados para os seus objetivos. Criamos experiências 
                digitais que convertem visitantes em clientes e fortalecem sua presença online.
              </p>
              <NuxtLink to="/contato" class="cta-button">
                <span>Falar com Especialista</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Solução 4: CRM -->
          <div class="solution-item reverse" data-aos="fade-up" data-aos-delay="400">
            <div class="solution-image">
              <div class="video-screen-share">
                <div class="screen-header">
                  <div class="screen-controls">
                    <div class="control-dot red"></div>
                    <div class="control-dot yellow"></div>
                    <div class="control-dot green"></div>
                  </div>
                  <div class="screen-title">
                    <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                      <circle cx="10" cy="8" r="2"/>
                      <path d="M15 13a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v3h10v-3Z"/>
                    </svg>
                    <span>Demonstração - CRM</span>
                    <div class="recording-indicator">
                      <div class="recording-dot"></div>
                      <span>REC</span>
                    </div>
                  </div>
                </div>
                <div class="video-container">
                  <video 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    class="demo-video"
                  >
                    <source src="~/assets/videos/agent-demo.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </div>
            </div>
            <div class="solution-content">
              <h3>Implementação e Otimização de CRM</h3>
              <p>
                Otimize a gestão dos seus leads e clientes com a implementação de sistemas de CRM 
                personalizados e integrados. Centralize informações, automatize processos e construa 
                relacionamentos duradouros, impulsionando a eficiência da sua equipe e aumentando 
                as taxas de conversão.
              </p>
              <NuxtLink to="/contato" class="cta-button">
                <span>Falar com Especialista</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Solução 5: Analytics -->
          <div class="solution-item" data-aos="fade-up" data-aos-delay="500">
            <div class="solution-image">
              <div class="video-screen-share">
                <div class="screen-header">
                  <div class="screen-controls">
                    <div class="control-dot red"></div>
                    <div class="control-dot yellow"></div>
                    <div class="control-dot green"></div>
                  </div>
                  <div class="screen-title">
                    <svg class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <line x1="12" x2="12" y1="20" y2="10"/>
                      <line x1="18" x2="18" y1="20" y2="4"/>
                      <line x1="6" x2="6" y1="20" y2="16"/>
                    </svg>
                    <span>Demonstração - Analytics</span>
                    <div class="recording-indicator">
                      <div class="recording-dot"></div>
                      <span>REC</span>
                    </div>
                  </div>
                </div>
                <div class="video-container">
                  <video 
                    autoplay 
                    muted 
                    loop 
                    playsinline
                    class="demo-video"
                  >
                    <source src="~/assets/videos/agent-demo.mp4" type="video/mp4">
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                </div>
              </div>
            </div>
            <div class="solution-content">
              <h3>Análise de Dados e Otimização</h3>
              <p>
                Transforme dados brutos em decisões estratégicas com nossas soluções avançadas de 
                analytics. Monitoramos e analisamos o desempenho de suas campanhas, extraindo insights 
                valiosos para otimizar suas ações de marketing, reduzir custos e alcançar melhores 
                resultados em tempo real.
              </p>
              <NuxtLink to="/contato" class="cta-button">
                <span>Falar com Especialista</span>
                <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="solutions-cta">
        <div class="container">
          <div class="cta-inner" data-aos="fade-up">
            <div class="cta-text">
              <h2>Pronto para Transformar seu Negócio?</h2>
              <p>
                Converse conosco e descubra como nossas soluções podem acelerar 
                o crescimento da sua empresa.
              </p>
            </div>
            <NuxtLink to="/contato" class="main-cta-button">
              <span>Falar com Especialista</span>
              <svg class="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

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
.solutions-page {
  background: #000000;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
}

.solutions-page::before {
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
.solutions-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 8rem 0 2rem 0;
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

.title-emphasis {
  color: var(--verde-conectado);
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

.hero-tech-stack {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-5px);
  border-color: var(--azul-digital);
  box-shadow: 0 10px 30px rgba(0, 122, 255, 0.2);
}

.tech-icon {
  width: 32px;
  height: 32px;
  color: var(--azul-digital);
}

.tech-icon svg {
  width: 100%;
  height: 100%;
  stroke-width: 1.5;
}

.tech-item span {
  font-family: var(--regular);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--cor-branco);
}

/* Solutions Content */
.solutions-content {
  padding: 8rem 0 0 0;
  position: relative;
  z-index: 2;
}

.solution-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 8rem;
  padding: 0 2rem;
}

.solution-item:last-child {
  margin-bottom: 1.5rem;
}

.solution-item.reverse {
  direction: rtl;
}

.solution-item.reverse > * {
  direction: ltr;
}

.solution-image {
  position: relative;
}

.video-screen-share {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #333;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.screen-header {
  background: #2d2d2d;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #404040;
}

.screen-controls {
  display: flex;
  gap: 0.5rem;
}

.control-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control-dot.red { background: #ff5f57; }
.control-dot.yellow { background: #ffbd2e; }
.control-dot.green { background: #28ca42; }

.screen-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e0e0e0;
  font-family: var(--regular);
  font-size: 0.875rem;
}

.share-icon {
  width: 16px;
  height: 16px;
  stroke-width: 1.5;
}

.recording-indicator {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #ff5f57;
  font-family: var(--bold);
  font-size: 0.75rem;
  font-weight: 600;
}

.recording-dot {
  width: 8px;
  height: 8px;
  background: #ff5f57;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.video-container {
  position: relative;
  height: 300px;
  overflow: hidden;
}

.demo-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.solution-content h3 {
  font-family: var(--bold);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
}

.solution-content p {
  font-family: var(--regular);
  font-size: 1.125rem;
  color: var(--cor-gelo);
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--azul-digital), var(--verde-conectado));
  color: var(--cor-branco);
  font-family: var(--bold);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 122, 255, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 122, 255, 0.4);
}

.cta-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.cta-button:hover .cta-icon {
  transform: translateX(4px);
}

/* CTA Section */
.solutions-cta {
  padding: 3rem 0;
  background: transparent;
  text-align: center;
}

.cta-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  background: linear-gradient(145deg, rgba(10, 10, 10, 0.5), rgba(18, 18, 18, 0.3));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.cta-inner:hover {
  border-color: rgba(0, 122, 255, 0.5);
}

.cta-text {
  margin-bottom: 1.5rem;
}

.cta-inner h2 {
  font-family: var(--bold);
  font-size: 2rem;
  font-weight: 700;
  color: var(--cor-branco);
  margin-bottom: 0.75rem;
}

.cta-inner p {
  font-family: var(--regular);
  font-size: 1rem;
  color: var(--cor-gelo);
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.6;
  opacity: 0.9;
}

.main-cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  background: linear-gradient(135deg, var(--azul-digital), var(--verde-conectado));
  color: var(--cor-branco);
  font-family: var(--bold);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 122, 255, 0.2);
}

.main-cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 122, 255, 0.3);
}

.main-cta-button .cta-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.main-cta-button:hover .cta-icon {
  transform: translateX(4px);
}

/* Responsive adjustments for CTA */
@media (min-width: 768px) {
  .cta-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }

  .cta-text {
    margin-bottom: 0;
    margin-right: 2rem;
  }

  .cta-inner p {
    margin: 0;
  }
}

/* Responsive Design */
@media (max-width: 968px) {
  .solutions-hero {
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
  
  .hero-tech-stack {
    gap: 1.2rem;
  }
  
  .tech-item {
    padding: 0.8rem;
  }
}

@media (max-width: 768px) {
  .solutions-hero {
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
  
  .hero-tech-stack {
    gap: 1rem;
    margin-top: 1.5rem;
  }
  
  .tech-item {
    padding: 0.7rem;
    font-size: 0.9rem;
  }
  
  .tech-icon {
    width: 18px;
    height: 18px;
  }
  
  .solution-item {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .solution-content h3 {
    font-size: 1.4rem;
  }
  
  .solution-content p {
    font-size: 1rem;
    line-height: 1.4;
  }
  
  .video-container {
    height: 180px;
  }
  
  .cta-final {
    margin-top: 3rem;
    padding: 2rem 0;
  }
  
  .cta-inner {
    padding: 2rem 1.5rem;
  }
  
  .cta-title {
    font-size: 1.8rem;
  }
  
  .cta-description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .solutions-hero {
    padding: 4.5rem 0 1.5rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 1rem;
    line-height: 1.3;
  }
  
  .hero-badge {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
  
  .hero-tech-stack {
    gap: 0.8rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .tech-item {
    padding: 0.6rem;
    font-size: 0.8rem;
  }
  
  .tech-icon {
    width: 16px;
    height: 16px;
  }
  
  .solution-item {
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }
  
  .solution-content h3 {
    font-size: 1.2rem;
  }
  
  .solution-content p {
    font-size: 0.9rem;
  }
  
  .video-container {
    height: 160px;
  }
  
  .cta-final {
    margin-top: 2.5rem;
    padding: 1.5rem 0;
  }
  
  .cta-inner {
    padding: 1.5rem 1rem;
  }
  
  .cta-title {
    font-size: 1.5rem;
  }
  
  .cta-description {
    font-size: 0.9rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
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
