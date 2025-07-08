<template>
  <div>
    <Nav />
    <main>
      <SectionApresentacao />
      <InteractiveSection />
    </main>
    <Footer />
    <BotaoVoltarTopo />
  </div>
</template>

<script setup>
import SectionApresentacao from '@/components/pages/index/SectionApresentacao.vue'
import BotaoVoltarTopo from '@/components/global/BotaoVoltarTopo.vue'
</script>
