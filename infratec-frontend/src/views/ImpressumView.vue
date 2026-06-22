<script setup>
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
</script>

<template>
  <div class="page-wrapper">
    <TheHeader />
    <main id="main-content" class="legal-page container">
      <h1>Impressum</h1>
      <p>Inhalt folgt.</p>
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
.page-wrapper { display: flex; flex-direction: column; min-height: 100dvh; }
.legal-page { flex: 1; padding-block: 80px; }
h1 { color: var(--primary); margin-bottom: 24px; }
</style>
