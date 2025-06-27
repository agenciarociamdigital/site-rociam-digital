<template>
  <div>
    <Nav />
    <main>
      <SectionApresentacao />
      <InteractiveSection />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import SectionApresentacao from '@/components/pages/index/SectionApresentacao.vue'
import InteractiveSection from '@/components/pages/index/InteractiveSection.vue'
</script>
