<template>
  <section class="interactive-section">
    <div class="container">
      <!-- Cabeçalho da seção -->
      <div class="section-header" data-aos="fade-up">
        <h2 class="section-title">Transforme Sua Visão em Realidade</h2>
        <p class="section-subtitle">
          Descubra como nossas soluções podem revolucionar seu negócio através de tecnologia de ponta
        </p>
      </div>

      <!-- Conteúdo principal com tabs -->
      <div class="interactive-content" data-aos="fade-up" data-aos-delay="200">
        <!-- Coluna da esquerda - Tabs -->
        <div class="tabs-column">
          <div class="tabs-container">
            <div 
              v-for="(tab, index) in tabs" 
              :key="index"
              class="tab-item"
              :class="{ 'active': activeTab === index }"
              @click="setActiveTab(index)"
            >
              <div class="tab-icon">
                <component :is="tab.icon" />
              </div>
              <div class="tab-content">
                <h3 class="tab-title">{{ tab.title }}</h3>
                <p class="tab-description">{{ tab.description }}</p>
              </div>
              <div class="tab-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Coluna da direita - Imagem -->
        <div class="image-column">
          <div class="image-container">
            <div class="image-wrapper">
              <transition name="fade" mode="out-in">
                <img 
                  :key="activeTab"
                  :src="tabs[activeTab].image" 
                  :alt="tabs[activeTab].title"
                  class="feature-image"
                />
              </transition>
              <!-- Overlay decorativo -->
              <div class="image-overlay">
                <div class="play-button">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5,3 19,12 5,21"/>
                  </svg>
                </div>
              </div>
              <!-- Elementos decorativos -->
              <div class="decoration decoration-1"></div>
              <div class="decoration decoration-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Estado reativo para o tab ativo
const activeTab = ref(0)

// Função para mudar tab
const setActiveTab = (index) => {
  activeTab.value = index
}

// Dados dos tabs
const tabs = ref([
  {
    title: 'Analytics Avançado',
    description: 'Dashboards inteligentes que transformam dados complexos em insights acionáveis para decisões estratégicas certeiras.',
    image: '/assets/images/logotipo_rociamdigital.png',
    icon: 'IconAnalytics'
  },
  {
    title: 'CRM Inteligente',
    description: 'Sistema completo de gestão de clientes com automação avançada que potencializa suas vendas e relacionamentos.',
    image: '/assets/images/logotipo2_rociamdigital.png',
    icon: 'IconCRM'
  },
  {
    title: 'Automação Digital',
    description: 'Processos automatizados que otimizam sua operação, reduzem custos e aumentam a eficiência do seu negócio.',
    image: '/assets/images/logotipo_rociamdigital.png',
    icon: 'IconAutomation'
  },
  {
    title: 'Desenvolvimento Web',
    description: 'Sites e aplicações modernas que convertem visitantes em clientes, com performance e experiência excepcionais.',
    image: '/assets/images/logotipo2_rociamdigital.png',
    icon: 'IconDevelopment'
  }
])

onMounted(() => {
  // Componente carregado - sem auto-play
})

// Componentes de ícones inline
const IconAnalytics = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 3v18h18"/>
      <path d="m19 9-5 5-4-4-3 3"/>
      <circle cx="12" cy="12" r="1"/>
      <circle cx="19" cy="19" r="1"/>
      <circle cx="5" cy="19" r="1"/>
    </svg>
  `
}

const IconCRM = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="m22 21-2-2"/>
      <circle cx="16" cy="16" r="5"/>
    </svg>
  `
}

const IconAutomation = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6"/>
      <path d="m15.5 7.5 3.5-3.5"/>
      <path d="m18.5 18.5-3.5-3.5"/>
      <path d="m8.5 7.5-3.5-3.5"/>
      <path d="m5.5 18.5 3.5-3.5"/>
    </svg>
  `
}

const IconDevelopment = {
  template: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="16,18 22,12 16,6"/>
      <polyline points="8,6 2,12 8,18"/>
    </svg>
  `
}
</script>

<style scoped>
.interactive-section {
  background: #000000;
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
}

.interactive-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 20%, rgba(0, 51, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(0, 204, 153, 0.08) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Cabeçalho da seção */
.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-family: var(--bold);
  font-size: var(--f6);
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-family: var(--regular);
  font-size: var(--f3);
  color: var(--cor-gelo);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Conteúdo principal */
.interactive-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* Coluna dos tabs */
.tabs-column {
  display: flex;
  flex-direction: column;
}

.tabs-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tab-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tab-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 204, 153, 0.1), transparent);
  transition: left 0.6s ease;
}

.tab-item:hover::before {
  left: 100%;
}

.tab-item:hover {
  transform: translateX(8px);
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(0, 204, 153, 0.3);
  box-shadow: 0 8px 25px rgba(0, 204, 153, 0.15);
}

.tab-item.active {
  background: rgba(0, 204, 153, 0.1);
  border-color: var(--verde-conectado);
  transform: translateX(8px);
  box-shadow: 0 8px 25px rgba(0, 204, 153, 0.25);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: rgba(0, 204, 153, 0.1);
  border-radius: 12px;
  color: var(--verde-conectado);
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.tab-item.active .tab-icon {
  background: var(--verde-conectado);
  color: var(--cor-branco);
}

.tab-icon svg {
  width: 28px;
  height: 28px;
}

.tab-content {
  flex-grow: 1;
}

.tab-title {
  font-family: var(--bold);
  font-size: var(--f3);
  color: var(--cor-branco);
  margin-bottom: 0.5rem;
}

.tab-description {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-gelo);
  opacity: 0.8;
  line-height: 1.5;
}

.tab-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--cor-gelo);
  opacity: 0.5;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.tab-item:hover .tab-arrow,
.tab-item.active .tab-arrow {
  opacity: 1;
  color: var(--verde-conectado);
  transform: translateX(3px);
}

.tab-arrow svg {
  width: 16px;
  height: 16px;
}

/* Coluna da imagem */
.image-column {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.image-wrapper {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.feature-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 20px;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 204, 153, 0.1) 0%, rgba(0, 51, 255, 0.1) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.image-wrapper:hover .image-overlay {
  opacity: 1;
}

.play-button {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cor-branco);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.play-button:hover {
  background: rgba(0, 204, 153, 0.3);
  border-color: var(--verde-conectado);
  transform: scale(1.1);
}

.play-button svg {
  width: 24px;
  height: 24px;
  margin-left: 2px;
}

/* Elementos decorativos */
.decoration {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  opacity: 0.6;
  filter: blur(1px);
}

.decoration-1 {
  width: 60px;
  height: 60px;
  top: -30px;
  right: -30px;
  animation: float1 6s ease-in-out infinite;
}

.decoration-2 {
  width: 40px;
  height: 40px;
  bottom: -20px;
  left: -20px;
  animation: float2 8s ease-in-out infinite;
}

/* Animações */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes float1 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

@keyframes float2 {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-180deg); }
}

/* Responsividade */
@media screen and (max-width: 1140px) {
  .interactive-section {
    padding: 6rem 0;
  }
  
  .interactive-content {
    gap: 3rem;
  }
  
  .section-header {
    margin-bottom: 4rem;
  }
}

@media screen and (max-width: 968px) {
  .interactive-content {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  
  .image-column {
    order: -1;
  }
  
  .tab-item {
    padding: 1.5rem;
  }
  
  .tab-icon {
    width: 50px;
    height: 50px;
  }
  
  .tab-icon svg {
    width: 24px;
    height: 24px;
  }
}

@media screen and (max-width: 768px) {
  .interactive-section {
    padding: 4rem 0;
  }
  
  .container {
    padding: 0 1.2rem;
  }
  
  .section-title {
    font-size: var(--f4);
  }
  
  .section-subtitle {
    font-size: var(--f2);
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .interactive-content {
    gap: 3rem;
  }
  
  .tabs-container {
    gap: 1rem;
  }
  
  .tab-item {
    padding: 1.2rem;
    gap: 1rem;
  }
  
  .tab-title {
    font-size: var(--f2);
  }
  
  .tab-description {
    font-size: var(--f0);
  }
}

@media screen and (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: var(--f3);
  }
  
  .section-subtitle {
    font-size: var(--f1);
  }
  
  .tab-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .tab-arrow {
    display: none;
  }
}
</style>
