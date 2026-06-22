<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="container footer-inner">
      <p class="copyright">© {{ year }} OS InfraTec GmbH</p>
      <nav class="footer-nav" aria-label="Rechtliche Links">
        <RouterLink to="/impressum" class="footer-link">Impressum</RouterLink>
        <span class="divider" aria-hidden="true">|</span>
        <RouterLink to="/datenschutz" class="footer-link">Datenschutz</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--text);
  color: rgba(255, 255, 255, 0.7);
  padding-block: var(--space-5);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
}

.copyright {
  font-size: 0.88rem;
}

.footer-nav {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.footer-link {
  font-size: 0.88rem;
  color: var(--secondary);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-link:hover {
  color: #fff;
}

.divider {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.88rem;
}

@media (max-width: 767px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
