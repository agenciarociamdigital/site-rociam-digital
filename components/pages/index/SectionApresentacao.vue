<template>
  <section class="hero">
    <!-- Video Background -->
    <video 
      class="hero-video" 
      autoplay 
      muted 
      loop 
      playsinline
    >
      <source src="~/assets/videos/rociamdigitaltechbachground.mp4" type="video/mp4">
    </video>
    
    <!-- Video Overlay -->
    <div class="hero-video-overlay"></div>
    
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
          <span class="title-highlight">Empresas Que Estão A Frente</span>
        </h1>
        
        <p class="hero-description" data-aos="fade-up" data-aos-delay="300">
          Componentes altamente personalizáveis para construir sites modernos
          e aplicações que impressionam e convertem da forma que você deseja.
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
  // Scroll para seção de contato ou abrir modal
  const contactSection = document.getElementById('contato')
  if (contactSection) {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 80
    const elementPosition = contactSection.offsetTop - headerHeight
    window.scrollTo({ 
      top: elementPosition, 
      behavior: 'smooth' 
    })
  } else {
    // Redirecionar para página de contato
    navigateTo('/contato')
  }
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
  
  // Otimizações para o vídeo de background
  const heroVideo = document.querySelector('.hero-video')
  if (heroVideo) {
    // Adicionar atributos de otimização
    heroVideo.setAttribute('preload', 'metadata')
    
    // Detectar conexão lenta e reduzir qualidade se necessário
    if (navigator.connection && navigator.connection.effectiveType === 'slow-2g') {
      heroVideo.style.display = 'none'
    }
    
    // Pausar vídeo quando não estiver visível (economizar bateria)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          heroVideo.play()
        } else {
          heroVideo.pause()
        }
      })
    })
    
    observer.observe(heroVideo)
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

/* Video Background */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  z-index: 0;
}

/* Video Overlay */
.hero-video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
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
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;
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
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f3);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(255, 139, 65, 0.3);
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

/* Otimizações de performance e acessibilidade para o vídeo */
@media (prefers-reduced-motion: reduce) {
  .hero-video {
    display: none;
  }
  
  .hero {
    background: #000000;
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
    margin-bottom: 2.5rem;
  }
}

@media screen and (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding: 7rem 0 3rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: var(--f5);
    margin-bottom: 2.5rem;
  }
  
  .hero-description {
    font-size: var(--f2);
    margin-bottom: 2.5rem;
  }
  
  .announcement-badge {
    margin-bottom: 2.5rem;
  }
  
  .badge-text {
    font-size: var(--f0);
  }
  
  .cta-primary {
    padding: 0.8rem 1.5rem;
    font-size: var(--f2);
  }
  
  .hero-video {
    opacity: 0.2; /* Reduz opacidade em mobile para melhor legibilidade */
  }
  
  .hero-video-overlay {
    background: rgba(0, 0, 0, 0.6); /* Escurece mais o overlay em mobile */
  }
}

@media screen and (max-width: 480px) {
  .hero {
    padding: 6rem 0 2rem;
  }
  
  .hero-title {
    font-size: var(--f4);
    margin-bottom: 2rem;
  }
  
  .hero-description {
    font-size: var(--f1);
    margin-bottom: 2rem;
  }
  
  .announcement-badge {
    margin-bottom: 2rem;
  }
  
  .cta-primary {
    padding: 0.7rem 1.2rem;
    font-size: var(--f1);
  }
  
  .hero-video {
    opacity: 0.15; /* Ainda mais sutil em telas pequenas */
  }
  
  .hero-video-overlay {
    background: rgba(0, 0, 0, 0.7);
  }
}
</style>
