<template>
  <transition name="fade">
    <button
      v-if="visivel"
      class="botao-voltar-topo"
      @click="voltarAoTopo"
      aria-label="Voltar ao topo"
    >
      <svg class="icone-seta" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="var(--azul-digital)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visivel = ref(false)

function checarScroll() {
  visivel.value = window.scrollY > 200
}

function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', checarScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', checarScroll)
})
</script>

<style scoped>
.botao-voltar-topo {
  position: fixed;
  left: 1.5rem;
  bottom: 1.5rem;
  z-index: 1000;
  background: rgba(255,255,255,0.85);
  border: 1.5px solid var(--azul-digital);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: background 0.2s, box-shadow 0.2s, transform 0.18s;
  padding: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.botao-voltar-topo:hover {
  background: rgba(0,51,255,0.08);
  box-shadow: 0 4px 18px rgba(0,51,255,0.10);
  transform: translateY(-2px) scale(1.08);
}

.icone-seta {
  width: 22px;
  height: 22px;
  display: block;
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .botao-voltar-topo {
    left: 1rem;
    right: auto;
    bottom: 1rem;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(0, 51, 255, 0.9);
    border: none;
    box-shadow: 0 4px 20px rgba(0, 51, 255, 0.3);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
  }
  
  .botao-voltar-topo:hover {
    background: rgba(0, 51, 255, 1);
    box-shadow: 0 6px 25px rgba(0, 51, 255, 0.4);
    transform: translateY(-3px) scale(1.1);
  }
  
  .icone-seta {
    width: 24px;
    height: 24px;
  }
  
  .icone-seta path {
    stroke: var(--cor-branco);
    stroke-width: 2.5;
  }
}

@media (max-width: 480px) {
  .botao-voltar-topo {
    left: 0.8rem;
    bottom: 0.8rem;
    width: 44px;
    height: 44px;
  }
  
  .icone-seta {
    width: 22px;
    height: 22px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style> 