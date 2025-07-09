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
              <span class="badge-icon">⭐</span>
              <span>Solução Especializada</span>
              <svg class="badge-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
              <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
              <span class="title-highlight">Gestão de Tráfego</span>
              <br>Pago
            </h1>
            
            <p class="hero-description" data-aos="fade-up" data-aos-delay="200">
              Maximize sua visibilidade online com campanhas
              <br>focadas em resultados e ROI garantido.
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
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// SEO Meta
useHead({
  title: 'Gestão de Tráfego Pago - Rociam Digital',
  meta: [
    { name: 'description', content: 'Maximize sua visibilidade online com campanhas de tráfego pago focadas em resultados e ROI. Aumente suas vendas com estratégias eficazes.' }
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
    min-height: auto;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.2rem;
  }
  
  .hero-description {
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 2.5rem;
  }
  
  .hero-badge {
    margin-bottom: 1.5rem;
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
    border-radius: 30px;
  }
  
  .hero-cta {
    margin-top: 1.5rem;
  }
  
  .cta-primary {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
    border-radius: 30px;
  }
}

@media (max-width: 480px) {
  .solution-hero {
    padding: 4.5rem 0 1.5rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .hero-title {
    font-size: 2rem;
    line-height: 1.25;
    margin-bottom: 1rem;
  }
  
  .hero-description {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
  
  .hero-badge {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    margin-bottom: 1.2rem;
  }
  
  .cta-primary {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 25px;
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
