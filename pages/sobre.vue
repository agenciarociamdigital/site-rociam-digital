<template>
  <div>
    <Nav />
    <div class="about-page">
      <!-- Header espaçamento -->
      <div class="header-spacer"></div>
      
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="container">
          <h1 class="page-title">Sobre a Rociam Digital</h1>
          <p class="page-description">
            Transformamos ideias em soluções digitais que impulsionam negócios para o futuro.
          </p>
        </div>
      </section>
      
      <!-- Conteúdo da página -->
      <section class="about-content">
        <div class="container">
          <!-- Seção Principal -->
          <div class="main-content">
            <div class="content-grid">
              <!-- Coluna Principal -->
              <div class="primary-column">
                <h2 class="section-title">Pioneiros em Transformação Digital</h2>
                <p class="lead-text">
                  Na Rociam Digital, não apenas acompanhamos o futuro — nós o construímos. 
                  Somos uma empresa de tecnologia que transcende as fronteiras tradicionais, 
                  criando soluções que redefinem como os negócios operam no mundo digital.
                </p>
                <p class="body-text">
                  Nossa expertise em inteligência artificial, analytics avançados e automação 
                  inteligente nos posiciona como parceiros estratégicos para empresas visionárias 
                  que buscam não apenas crescer, mas liderar seus mercados.
                </p>
              </div>
              
              <!-- Coluna Secundária -->
              <div class="secondary-column">
                <div class="stats-card">
                  <div class="stat-item">
                    <span class="stat-number">50+</span>
                    <span class="stat-label">Projetos Entregues</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">3x</span>
                    <span class="stat-label">ROI Médio dos Clientes</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">24/7</span>
                    <span class="stat-label">Suporte Dedicado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Seção Missão, Visão e Valores -->
          <div class="philosophy-section">
            <div class="philosophy-grid">
              <!-- Missão -->
              <div class="philosophy-card" data-aos="fade-up" data-aos-delay="100">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 class="card-title">Missão</h3>
                <p class="card-description">
                  Democratizar o acesso à tecnologia de ponta, capacitando empresas de todos os portes 
                  a alcançarem resultados extraordinários através de soluções inteligentes e sustentáveis.
                </p>
              </div>
              
              <!-- Visão -->
              <div class="philosophy-card" data-aos="fade-up" data-aos-delay="200">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <h3 class="card-title">Visão</h3>
                <p class="card-description">
                  Ser reconhecida como a principal referência em inovação digital no Brasil, 
                  liderando a transformação tecnológica que molda o futuro dos negócios.
                </p>
              </div>
              
              <!-- Valores -->
              <div class="philosophy-card" data-aos="fade-up" data-aos-delay="300">
                <div class="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 class="card-title">Valores</h3>
                <p class="card-description">
                  Inovação constante, transparência absoluta, excelência técnica e impacto positivo. 
                  Acreditamos que a tecnologia deve servir ao propósito humano.
                </p>
              </div>
            </div>
          </div>
          
          <!-- Seção Diferencial -->
          <div class="differentials-section">
            <h2 class="section-title centered">O Que Nos Torna Únicos</h2>
            <div class="differentials-grid">
              <div class="differential-item">
                <div class="differential-number">01</div>
                <h4 class="differential-title">Abordagem Científica</h4>
                <p class="differential-text">
                  Cada solução é fundamentada em dados, testada rigorosamente e otimizada continuamente 
                  para garantir resultados mensuráveis e sustentáveis.
                </p>
              </div>
              
              <div class="differential-item">
                <div class="differential-number">02</div>
                <h4 class="differential-title">Tecnologia Proprietária</h4>
                <p class="differential-text">
                  Desenvolvemos ferramentas exclusivas que não encontrará em nenhum outro lugar, 
                  criadas especificamente para resolver desafios complexos do mercado.
                </p>
              </div>
              
              <div class="differential-item">
                <div class="differential-number">03</div>
                <h4 class="differential-title">Parceria Estratégica</h4>
                <p class="differential-text">
                  Mais do que fornecedores, somos extensões da sua equipe, comprometidos com o 
                  sucesso de longo prazo do seu negócio.
                </p>
              </div>
            </div>
          </div>
          
          <!-- CTA Final -->
          <div class="final-cta">
            <h2 class="cta-title">Pronto para Revolucionar Seu Negócio?</h2>
            <p class="cta-description">
              Descubra como nossa expertise pode acelerar sua transformação digital
            </p>
            <button class="cta-button" @click="openContactPopup">
              <span>Iniciar Conversa</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useContactPopupStore } from '@/stores/contactPopupStore'

// Store do popup de contato
const contactPopupStore = useContactPopupStore()

// Função para abrir popup de contato
const openContactPopup = () => {
  contactPopupStore.openPopup()
}

// SEO Meta
useHead({
  title: 'Sobre - Rociam Digital',
  meta: [
    { name: 'description', content: 'Conheça a Rociam Digital e nossa missão de transformar negócios através de soluções digitais inovadoras.' }
  ]
})
</script>

<style scoped>
.about-page {
  background: #000000;
  min-height: 100vh;
}

.header-spacer {
  height: 120px;
}

.about-hero {
  padding: 4rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-family: var(--bold);
  font-size: var(--f7);
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
}

.page-description {
  font-family: var(--regular);
  font-size: var(--f3);
  color: var(--cor-gelo);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.about-content {
  padding: 6rem 0;
}

/* Conteúdo Principal */
.main-content {
  margin-bottom: 8rem;
}

.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;
}

.section-title {
  font-family: var(--bold);
  font-size: var(--f5);
  color: var(--cor-branco);
  margin-bottom: 2rem;
  line-height: 1.2;
}

.section-title.centered {
  text-align: center;
  margin-bottom: 4rem;
}

.lead-text {
  font-family: var(--regular);
  font-size: var(--f3);
  color: var(--cor-branco);
  line-height: 1.7;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.body-text {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-gelo);
  line-height: 1.6;
  opacity: 0.8;
}

/* Stats Card */
.stats-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem 0;
}

.stat-item:not(:last-child) {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-number {
  font-family: var(--bold);
  font-size: var(--f5);
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-gelo);
  opacity: 0.8;
}

/* Seção Filosofia */
.philosophy-section {
  margin-bottom: 8rem;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.philosophy-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.philosophy-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 204, 153, 0.05), transparent);
  transition: left 0.6s ease;
}

.philosophy-card:hover::before {
  left: 100%;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 204, 153, 0.2);
  box-shadow: 0 10px 40px rgba(0, 204, 153, 0.1);
}

.card-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 1.5rem;
  background: rgba(0, 204, 153, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--verde-conectado);
  transition: all 0.3s ease;
}

.philosophy-card:hover .card-icon {
  background: var(--verde-conectado);
  color: var(--cor-branco);
}

.card-icon svg {
  width: 28px;
  height: 28px;
}

.card-title {
  font-family: var(--bold);
  font-size: var(--f3);
  color: var(--cor-branco);
  margin-bottom: 1rem;
}

.card-description {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-gelo);
  line-height: 1.6;
  opacity: 0.8;
}

/* Seção Diferenciais */
.differentials-section {
  margin-bottom: 8rem;
}

.differentials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.differential-item {
  position: relative;
  padding-left: 4rem;
}

.differential-number {
  position: absolute;
  left: 0;
  top: 0;
  font-family: var(--bold);
  font-size: var(--f4);
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.8;
}

.differential-title {
  font-family: var(--bold);
  font-size: var(--f2);
  color: var(--cor-branco);
  margin-bottom: 1rem;
}

.differential-text {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-gelo);
  line-height: 1.6;
  opacity: 0.8;
}

/* CTA Final */
.final-cta {
  text-align: center;
  padding: 4rem 0;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  backdrop-filter: blur(10px);
}

.cta-title {
  font-family: var(--bold);
  font-size: var(--f4);
  color: var(--cor-branco);
  margin-bottom: 1rem;
}

.cta-description {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-gelo);
  margin-bottom: 2.5rem;
  opacity: 0.8;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f2);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 30px rgba(0, 204, 153, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 204, 153, 0.4);
}

.cta-button svg {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(3px);
}

/* Responsividade */
@media screen and (max-width: 1140px) {
  .content-grid {
    gap: 3rem;
  }
  
  .philosophy-grid,
  .differentials-grid {
    gap: 2.5rem;
  }
}

@media screen and (max-width: 968px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .philosophy-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .differentials-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .main-content,
  .philosophy-section,
  .differentials-section {
    margin-bottom: 5rem;
  }
  
  .about-content {
    padding: 4rem 0;
  }
}

@media screen and (max-width: 768px) {
  .header-spacer {
    height: 90px;
  }
  
  .about-hero {
    padding: 2.5rem 0;
  }
  
  .container {
    padding: 0 1.2rem;
  }
  
  .page-title {
    font-size: var(--f5);
  }
  
  .page-description {
    font-size: var(--f2);
  }
  
  .section-title {
    font-size: var(--f4);
  }
  
  .lead-text {
    font-size: var(--f2);
  }
  
  .stats-card {
    padding: 2rem;
  }
  
  .philosophy-card {
    padding: 2rem 1.5rem;
  }
  
  .differential-item {
    padding-left: 3rem;
  }
  
  .differential-number {
    font-size: var(--f3);
  }
  
  .final-cta {
    padding: 3rem 1.5rem;
  }
  
  .cta-title {
    font-size: var(--f3);
  }
}

@media screen and (max-width: 480px) {
  .header-spacer {
    height: 70px;
  }
  
  .about-hero {
    padding: 2rem 0;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .page-title {
    font-size: var(--f4);
  }
  
  .page-description {
    font-size: var(--f1);
  }
  
  .about-content {
    padding: 3rem 0;
  }
  
  .main-content,
  .philosophy-section,
  .differentials-section {
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: var(--f3);
    margin-bottom: 1.5rem;
  }
  
  .lead-text {
    font-size: var(--f1);
    margin-bottom: 1.5rem;
  }
  
  .body-text {
    font-size: var(--f0);
  }
  
  .stats-card {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: var(--f4);
  }
  
  .stat-label {
    font-size: var(--f0);
  }
  
  .philosophy-card {
    padding: 1.5rem;
  }
  
  .card-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
  
  .card-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .card-title {
    font-size: var(--f2);
  }
  
  .card-description {
    font-size: var(--f0);
  }
  
  .differential-item {
    padding-left: 2.5rem;
  }
  
  .differential-number {
    font-size: var(--f2);
  }
  
  .differential-title {
    font-size: var(--f1);
  }
  
  .differential-text {
    font-size: var(--f0);
  }
  
  .final-cta {
    padding: 2.5rem 1rem;
  }
  
  .cta-title {
    font-size: var(--f2);
  }
  
  .cta-description {
    font-size: var(--f1);
    margin-bottom: 2rem;
  }
  
  .cta-button {
    padding: 0.8rem 1.5rem;
    font-size: var(--f1);
  }
  
  .cta-button svg {
    width: 16px;
    height: 16px;
  }
}
</style>

