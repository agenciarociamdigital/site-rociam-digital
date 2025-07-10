<template>
  <transition name="fade">
    <div v-if="show" class="cookie-consent">
      <span>
        Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <a href='/politica-de-privacidade' target='_blank'>Política de Privacidade</a>.
      </span>
      <button @click="acceptCookies" aria-label="Aceitar cookies">OK</button>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookieConsent')) {
    show.value = true
  }
})

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'true')
  show.value = false
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  background: var(--cinza-solido);
  color: var(--cor-branco);
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: var(--f2);
  font-family: var(--regular), Arial, sans-serif;
  z-index: 2000;
  max-width: 90vw;
  width: auto;
}

.cookie-consent a {
  color: var(--azul-digital);
  text-decoration: underline;
  font-family: var(--regular), Arial, sans-serif;
}

.cookie-consent button {
  background: var(--azul-digital);
  color: var(--cor-branco);
  border: none;
  border-radius: 8px;
  padding: 0.4rem 1.2rem;
  font-size: var(--f2);
  font-family: var(--bold), Arial, sans-serif;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.cookie-consent button:hover {
  background: var(--cor-branco);
  color: var(--azul-digital);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .cookie-consent {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    transform: none;
    flex-direction: column;
    gap: 0.8rem;
    padding: 1rem;
    border-radius: 8px;
    font-size: 0.85rem;
    max-width: none;
    width: auto;
  }
  
  .cookie-consent span {
    text-align: center;
    line-height: 1.4;
  }
  
  .cookie-consent button {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .cookie-consent {
    left: 0.8rem;
    right: 0.8rem;
    bottom: 0.8rem;
    padding: 0.8rem;
    gap: 0.6rem;
    font-size: 0.8rem;
  }
  
  .cookie-consent span {
    line-height: 1.5;
  }
  
  .cookie-consent button {
    padding: 0.5rem 1.2rem;
    font-size: 0.85rem;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 