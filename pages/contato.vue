<template>
  <div>
    <Nav />
    <div class="contact-page">
      <!-- Header espaçamento -->
      <div class="header-spacer"></div>
      
      <!-- Hero Section de Contato -->
      <section class="contact-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="page-title" data-aos="fade-up">
              Vamos Conversar?
            </h1>
            <p class="page-description" data-aos="fade-up" data-aos-delay="200">
              Entre em contato conosco e descubra como podemos transformar 
              suas ideias em soluções digitais inovadoras.
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Content -->
      <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Formulário de Contato -->
          <div class="contact-form-section" data-aos="fade-right">
            <div class="form-header">
              <h2>Envie sua Mensagem</h2>
              <p>Preencha o formulário e retornaremos o mais rápido possível.</p>
            </div>
            
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Nome Completo *</label>
                <input 
                  type="text" 
                  id="name"
                  v-model="form.name"
                  placeholder="Digite seu nome completo"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="email">E-mail *</label>
                <input 
                  type="email" 
                  id="email"
                  v-model="form.email"
                  placeholder="seu@email.com"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Telefone *</label>
                <input 
                  type="tel" 
                  id="phone"
                  v-model="form.phone"
                  placeholder="(00) 00000-0000"
                  required
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Assunto *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Selecione um assunto</option>
                  <option value="desenvolvimento">Desenvolvimento Web</option>
                  <option value="design">Tráfego Pago</option>
                  <option value="marketing">Automação de Marketing</option>
                  <option value="consultoria">Inteligência Artificial</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mensagem *</label>
                <textarea 
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="submit-button"
                :disabled="isSubmitting"
                aria-label="Enviar formulário de contato"
              >
                <span v-if="!isSubmitting">Enviar Mensagem</span>
                <span v-else>Enviando...</span>
                <svg class="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </form>
          </div>

          <!-- Popup de Confirmação -->
          <div v-if="showSuccessPopup" class="popup-overlay" @click="closePopup">
            <div class="popup-content" @click.stop>
              <div class="popup-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <h3>Mensagem Enviada!</h3>
              <p>Sua mensagem foi enviada com sucesso. Retornaremos o contato em breve!</p>
              <button @click="closePopup" class="popup-button" aria-label="Fechar popup de confirmação">
                Fechar
              </button>
            </div>
          </div>

          <!-- Informações de Contato -->
          <div class="contact-info-section" data-aos="fade-left">
            <div class="info-card">
              <h3>Informações de Contato</h3>
              
              <div class="contact-items">
                <div class="contact-item">
                  <div class="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>Telefone</h4>
                    <p>(51) 98243-5512</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>E-mail</h4>
                    <p>contato@rociamdigital.com</p>
                  </div>
                </div>
                
                <div class="contact-item">
                  <div class="contact-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div class="contact-details">
                    <h4>Localização</h4>
                    <p>Lajeado, RS - Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mapa -->
            <div class="map-container">
              <h3>Nossa Localização</h3>
              <div class="map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442789.37584929073!2d-51.40055225000001!3d-30.027507449999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977fddfdfdfdf%3A0x5d7d5a5d5d5d5d5d!2sRio%20Grande%20do%20Sul%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1640000000000!5m2!1spt-BR!2sbr"
                  class="google-map"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
          </div>        </div>
      </div>
    </section>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Meta tags para SEO (temporariamente comentado)
// useHead({
//   title: 'Contato - Rociam Digital',
//   meta: [
//     { name: 'description', content: 'Entre em contato com a Rociam Digital. Vamos transformar suas ideias em soluções digitais inovadoras.' }
//   ]
// })

// Estado do formulário
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccessPopup = ref(false)

// Função para fechar o popup
const closePopup = () => {
  showSuccessPopup.value = false
}

// Função para submeter o formulário
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    // Validar se todos os campos obrigatórios estão preenchidos
    if (!form.value.name || !form.value.email || !form.value.phone || !form.value.subject || !form.value.message) {
      alert('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    
    // Preparar dados para o webhook do CRM
    const webhookData = {
      name: form.value.name.trim(),
      email: form.value.email.trim(),
      phone: form.value.phone.trim(),
      subject: form.value.subject,
      message: form.value.message.trim(),
      source: 'Website Rociam Digital',
      timestamp: new Date().toISOString()
    }
    
    console.log('Enviando dados:', webhookData)
    
    // Enviar para o webhook do CRM
    const response = await fetch('https://services.leadconnectorhq.com/hooks/OENr4Dm8dvAwqM3OCwUk/webhook-trigger/bfbcfd53-1ab9-420c-bfc2-8c3a41647c27', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(webhookData)
    })
    
    console.log('Resposta do webhook:', response.status, response.statusText)
    
    if (response.ok) {
      const result = await response.text()
      console.log('Resultado:', result)
      
      // Limpar formulário
      form.value = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
      
      // Mostrar popup de sucesso APENAS se o envio foi bem-sucedido
      showSuccessPopup.value = true
    } else {
      // Se o webhook retornou erro, não mostrar popup de sucesso
      throw new Error(`Erro HTTP: ${response.status} - ${response.statusText}`)
    }
    
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    
    // Fallback: abrir email com dados preenchidos
    const mailtoLink = `mailto:contato@rociamdigital.com?subject=${encodeURIComponent(form.value.subject)}&body=${encodeURIComponent(`
Nome: ${form.value.name}
Email: ${form.value.email}
Telefone: ${form.value.phone}
Assunto: ${form.value.subject}

Mensagem:
${form.value.message}
    `)}`
    
    alert('Erro ao enviar mensagem. Clique OK para abrir seu email com a mensagem preenchida.')
    window.open(mailtoLink, '_blank')
    
  } finally {
    isSubmitting.value = false
  }
}

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
.contact-page {
  background: #000000;
  min-height: 100vh;
}

/* Header Spacer */
.header-spacer {
  height: 120px;
}

/* Hero Section */
.contact-hero {
  padding: 4rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.page-title {
  font-family: var(--bold);
  font-size: var(--f6);
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.page-description {
  font-family: var(--regular);
  font-size: var(--f3);
  color: var(--cor-gelo);
  line-height: 1.6;
  opacity: 0.9;
}

/* Contact Content */
.contact-content {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Formulário */
.contact-form-section {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(20px);
}

.form-header {
  margin-bottom: 2rem;
}

.form-header h2 {
  font-family: var(--bold);
  font-size: var(--f4);
  color: var(--cor-branco);
  margin-bottom: 0.5rem;
}

.form-header p {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-gelo);
  opacity: 0.8;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: var(--bold);
  font-size: var(--f1);
  color: var(--cor-branco);
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-branco);
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--azul-digital);
  box-shadow: 0 0 0 3px rgba(0, 51, 255, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-group select option {
  background: var(--cinza-solido);
  color: var(--cor-branco);
}

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f2);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 51, 255, 0.3);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.button-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.submit-button:hover .button-icon {
  transform: translateX(3px);
}

/* Informações de Contato */
.contact-info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(20px);
}

.info-card h3 {
  font-family: var(--bold);
  font-size: var(--f4);
  color: var(--cor-branco);
  margin-bottom: 2rem;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  border-radius: 12px;
  color: var(--cor-branco);
  flex-shrink: 0;
}

.contact-icon svg {
  width: 24px;
  height: 24px;
}

.contact-details h4 {
  font-family: var(--bold);
  font-size: var(--f2);
  color: var(--cor-branco);
  margin-bottom: 0.25rem;
}

.contact-details p {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-gelo);
  opacity: 0.9;
}

/* Mapa */
.map-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  backdrop-filter: blur(20px);
}

.map-container h3 {
  font-family: var(--bold);
  font-size: var(--f3);
  color: var(--cor-branco);
  margin-bottom: 1.5rem;
}

.map-wrapper {
  border-radius: 16px;
  overflow: hidden;
  height: 300px;
}

.google-map {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(100%) invert(92%) contrast(83%);
}

/* Responsividade */
@media screen and (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .contact-form-section,
  .info-card,
  .map-container {
    padding: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .header-spacer {
    height: 85px;
  }
  
  .contact-hero {
    padding: 3rem 0;
  }
  
  .container {
    padding: 0 1.5rem;
  }
  
  .page-title {
    font-size: 2.8rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  .page-description {
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 100%;
  }
  
  .contact-content {
    padding: 3rem 0;
  }
  
  .contact-grid {
    gap: 2.5rem;
  }
  
  .contact-form-section,
  .info-card,
  .map-container {
    padding: 2rem;
    border-radius: 20px;
  }
  
  .form-header h2 {
    font-size: 1.8rem;
  }
  
  .form-header p {
    font-size: 1rem;
  }
  
  .form-group label {
    font-size: 1rem;
    margin-bottom: 0.7rem;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 12px;
  }
  
  .submit-button {
    padding: 1.2rem 2rem;
    font-size: 1rem;
    border-radius: 14px;
  }
  
  .map-wrapper {
    height: 280px;
    border-radius: 16px;
  }
  
  .contact-item h4 {
    font-size: 1.1rem;
  }
  
  .contact-item p {
    font-size: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .header-spacer {
    height: 75px;
  }
  
  .contact-hero {
    padding: 2.5rem 0;
  }
  
  .container {
    padding: 0 1.25rem;
  }
  
  .page-title {
    font-size: 2.2rem;
    line-height: 1.25;
    margin-bottom: 1.2rem;
    font-weight: 800;
  }
  
  .page-description {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 100%;
    opacity: 0.95;
  }
  
  .contact-content {
    padding: 2.5rem 0;
  }
  
  .contact-grid {
    gap: 2rem;
  }
  
  .contact-form-section,
  .info-card,
  .map-container {
    padding: 1.5rem;
    border-radius: 18px;
  }
  
  .form-header h2 {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
  
  .form-header p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    font-size: 0.95rem;
    margin-bottom: 0.6rem;
    font-weight: 600;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 1rem;
    font-size: 0.95rem;
    border-radius: 12px;
    line-height: 1.4;
  }
  
  .form-group textarea {
    min-height: 120px;
  }
  
  .submit-button {
    padding: 1.3rem 2.2rem;
    font-size: 1rem;
    border-radius: 16px;
    font-weight: 700;
    width: 100%;
  }
  
  .button-icon {
    width: 20px;
    height: 20px;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
    padding: 1.2rem;
  }
  
  .contact-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  
  .contact-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .contact-item h4 {
    font-size: 1rem;
    font-weight: 700;
  }
  
  .contact-item p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .map-wrapper {
    height: 250px;
    border-radius: 14px;
  }
}

/* Popup de Confirmação */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  backdrop-filter: blur(20px);
  text-align: center;
  max-width: 400px;
  margin: 2rem;
  animation: slideUp 0.3s ease;
}

.popup-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  color: var(--cor-branco);
}

.popup-icon svg {
  width: 40px;
  height: 40px;
}

.popup-content h3 {
  font-family: var(--bold);
  font-size: var(--f3);
  color: var(--cor-branco);
  margin-bottom: 1rem;
}

.popup-content p {
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-gelo);
  line-height: 1.5;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.popup-button {
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f2);
  cursor: pointer;
  transition: all 0.3s ease;
}

.popup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 51, 255, 0.3);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade do Popup */
@media screen and (max-width: 768px) {
  .popup-content {
    padding: 2.5rem;
    margin: 1.5rem;
    border-radius: 20px;
  }
  
  .popup-icon {
    width: 70px;
    height: 70px;
  }
  
  .popup-icon svg {
    width: 35px;
    height: 35px;
  }
  
  .popup-content h3 {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  
  .popup-content p {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .popup-button {
    padding: 1.2rem 2rem;
    font-size: 1rem;
    border-radius: 14px;
  }
}

@media screen and (max-width: 480px) {
  .popup-content {
    padding: 2rem;
    margin: 1rem;
    border-radius: 18px;
  }
  
  .popup-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 1.2rem;
  }
  
  .popup-icon svg {
    width: 30px;
    height: 30px;
  }
  
  .popup-content h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .popup-content p {
    font-size: 0.95rem;
    margin-bottom: 1.8rem;
    line-height: 1.6;
  }
  
  .popup-button {
    padding: 1.3rem 2.2rem;
    font-size: 1rem;
    border-radius: 16px;
    font-weight: 700;
    width: 100%;
  }
}
</style>
