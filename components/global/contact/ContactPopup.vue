<template>
  <div class="contact-popup-overlay" :class="{ 'active': isOpen }" @click.self="closePopup">
    <div class="contact-popup" data-aos="zoom-in" data-aos-duration="400">
      <!-- Cabeçalho do popup -->
      <div class="popup-header">
        <h3 class="popup-title">Vamos conversar</h3>
        <button class="close-button" @click="closePopup" aria-label="Fechar formulário">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Formulário de contato -->
      <form class="popup-form" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="fullName">Nome Completo</label>
          <input 
            id="fullName" 
            type="text" 
            v-model="formData.fullName" 
            required 
            placeholder="Seu nome completo"
            :class="{ 'error': errors.fullName }"
          />
          <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
        </div>

        <div class="form-group">
          <label for="whatsapp">WhatsApp</label>
          <input 
            id="whatsapp" 
            type="tel" 
            v-model="formData.whatsapp" 
            required 
            placeholder="(00) 00000-0000"
            :class="{ 'error': errors.whatsapp }"
            @input="formatWhatsApp"
          />
          <span class="error-message" v-if="errors.whatsapp">{{ errors.whatsapp }}</span>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input 
            id="email" 
            type="email" 
            v-model="formData.email" 
            required 
            placeholder="seu@email.com"
            :class="{ 'error': errors.email }"
          />
          <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="website">Site da Empresa</label>
          <input 
            id="website" 
            type="url" 
            v-model="formData.website" 
            placeholder="https://www.exemplo.com.br"
            :class="{ 'error': errors.website }"
          />
          <span class="error-message" v-if="errors.website">{{ errors.website }}</span>
        </div>

        <button type="submit" class="submit-button" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Enviar</span>
          <div class="loading-spinner" v-else></div>
        </button>

        <!-- Mensagem de sucesso -->
        <div class="success-message" v-if="submitSuccess">
          Obrigado! Recebemos seu contato e responderemos em breve.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'

// Props e emits
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

// Estado do formulário
const formData = reactive({
  fullName: '',
  whatsapp: '',
  email: '',
  website: ''
})

// Estado de validação
const errors = reactive({
  fullName: '',
  whatsapp: '',
  email: '',
  website: ''
})

// Estado de submissão
const isSubmitting = ref(false)
const submitSuccess = ref(false)

// Formatar número de WhatsApp automaticamente
const formatWhatsApp = () => {
  let value = formData.whatsapp.replace(/\D/g, '')
  
  if (value.length <= 11) {
    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`
    }
    
    if (value.length > 10) {
      value = `${value.substring(0, 10)}-${value.substring(10)}`
    }
    
    formData.whatsapp = value
  }
}

// Validar formulário
const validateForm = () => {
  let isValid = true
  
  // Validar nome
  if (!formData.fullName.trim()) {
    errors.fullName = 'Nome completo é obrigatório'
    isValid = false
  } else if (formData.fullName.trim().length < 3) {
    errors.fullName = 'Nome deve ter pelo menos 3 caracteres'
    isValid = false
  } else {
    errors.fullName = ''
  }
  
  // Validar WhatsApp
  const whatsappClean = formData.whatsapp.replace(/\D/g, '')
  if (!whatsappClean) {
    errors.whatsapp = 'WhatsApp é obrigatório'
    isValid = false
  } else if (whatsappClean.length < 10 || whatsappClean.length > 11) {
    errors.whatsapp = 'Número de WhatsApp inválido'
    isValid = false
  } else {
    errors.whatsapp = ''
  }
  
  // Validar email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!formData.email.trim()) {
    errors.email = 'E-mail é obrigatório'
    isValid = false
  } else if (!emailRegex.test(formData.email)) {
    errors.email = 'E-mail inválido'
    isValid = false
  } else {
    errors.email = ''
  }
  
  // Validar site (opcional)
  if (formData.website.trim()) {
    const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*)?$/
    if (!urlRegex.test(formData.website)) {
      errors.website = 'URL inválida'
      isValid = false
    } else {
      errors.website = ''
    }
  } else {
    errors.website = ''
  }
  
  return isValid
}

// Fechar popup
const closePopup = () => {
  emit('close')
  
  // Reset do formulário após fechar
  setTimeout(() => {
    Object.keys(formData).forEach(key => {
      formData[key] = ''
    })
    Object.keys(errors).forEach(key => {
      errors[key] = ''
    })
    submitSuccess.value = false
  }, 300)
}

// Enviar formulário
const handleSubmit = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  
  try {
    // Aqui será implementado o envio para o webhook quando disponível
    // Por enquanto, simulamos o envio com um timeout
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Sucesso
    submitSuccess.value = true
    
    // Fechar popup após sucesso
    setTimeout(() => {
      closePopup()
    }, 3000)
    
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}

// Previnir scroll quando o popup estiver aberto
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Limpar event listener quando o componente for desmontado
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
.contact-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  padding: 1.5rem;
}

.contact-popup-overlay.active {
  opacity: 1;
  visibility: visible;
}

.contact-popup {
  background: rgba(25, 25, 25, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3),
              0 1px 0 rgba(255, 255, 255, 0.05) inset;
  position: relative;
  overflow: hidden;
  color: var(--cor-branco);
}

.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.popup-title {
  font-family: var(--bold);
  font-size: var(--f4);
  margin: 0;
  background: linear-gradient(135deg, var(--verde-conectado) 0%, var(--azul-digital) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.close-button {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--cor-branco);
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.close-button svg {
  width: 20px;
  height: 20px;
}

.popup-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--cor-branco);
  opacity: 0.9;
}

.form-group input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  font-family: var(--regular);
  font-size: var(--f2);
  color: var(--cor-branco);
  transition: all 0.3s ease;
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus {
  outline: none;
  border-color: var(--verde-conectado);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 3px rgba(0, 204, 153, 0.2);
}

.form-group input.error {
  border-color: #ff4747;
  background: rgba(255, 71, 71, 0.05);
}

.error-message {
  font-family: var(--regular);
  font-size: var(--f0);
  color: #ff4747;
}

.submit-button {
  background: linear-gradient(135deg, var(--azul-digital) 0%, var(--verde-conectado) 100%);
  color: var(--cor-branco);
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-family: var(--bold);
  font-size: var(--f2);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
}

.submit-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 51, 255, 0.3);
}

.submit-button:hover::before {
  left: 100%;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.success-message {
  background: rgba(0, 204, 153, 0.1);
  border: 1px solid rgba(0, 204, 153, 0.3);
  border-radius: 12px;
  padding: 1rem;
  font-family: var(--regular);
  font-size: var(--f1);
  color: var(--verde-conectado);
  text-align: center;
  margin-top: 0.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Responsividade */
@media screen and (max-width: 768px) {
  .contact-popup {
    padding: 1.5rem;
    max-width: 90%;
  }
  
  .popup-title {
    font-size: var(--f3);
  }
  
  .form-group input {
    font-size: var(--f1);
    padding: 0.7rem 0.9rem;
  }
  
  .submit-button {
    font-size: var(--f1);
    height: 3.2rem;
  }
}

@media screen and (max-width: 480px) {
  .contact-popup-overlay {
    padding: 1rem;
  }
  
  .contact-popup {
    padding: 1.2rem;
    max-width: 100%;
    border-radius: 16px;
  }
  
  .popup-title {
    font-size: var(--f2);
  }
  
  .close-button {
    width: 32px;
    height: 32px;
  }
  
  .close-button svg {
    width: 18px;
    height: 18px;
  }
  
  .form-group {
    gap: 0.3rem;
  }
  
  .popup-form {
    gap: 1rem;
  }
  
  .form-group label {
    font-size: var(--f0);
  }
  
  .form-group input {
    padding: 0.6rem 0.8rem;
  }
  
  .submit-button {
    height: 3rem;
  }
}
</style>
