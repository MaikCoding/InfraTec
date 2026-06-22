<script setup>
import TheHeader from '../components/TheHeader.vue'
import HeroSection from '../components/HeroSection.vue'
import UeberUnsSection from '../components/UeberUnsSection.vue'
import LeistungenSection from '../components/LeistungenSection.vue'
import ProdukteSection from '../components/ProdukteSection.vue'
import ContactSection from '../components/ContactSection.vue'
import TheFooter from '../components/TheFooter.vue'
import { useScrollProgress } from '../composables/useScrollProgress.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { progress } = useScrollProgress()
useScrollReveal()
</script>

<template>
  <div class="page-wrapper">
    <!-- Scroll progress indicator -->
    <div
      class="scroll-progress"
      :style="{ transform: `scaleX(${progress / 100})` }"
      aria-hidden="true"
    />

    <TheHeader />
    <main id="main-content">
      <HeroSection />
      <UeberUnsSection />
      <LeistungenSection />
      <ProdukteSection />
      <ContactSection />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1;
}
</style>
