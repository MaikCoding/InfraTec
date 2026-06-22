<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const scrolled = ref(false)
const mobileOpen = ref(false)
const router = useRouter()

function onScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

function scrollTo(id) {
  mobileOpen.value = false
  if (router.currentRoute.value.path !== '/') {
    router.push({ path: '/', hash: '#' + id })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="header" :class="{ scrolled }">
    <div class="container header-inner">
      <!-- Logo -->
      <RouterLink to="/" class="logo" aria-label="OS InfraTec GmbH – Startseite">
        <img src="/logo.png" alt="OS InfraTec GmbH" class="logo-img" />
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="nav-desktop" aria-label="Hauptnavigation">
        <button class="nav-link" @click="scrollTo('ueber-uns')">Über uns</button>
        <button class="nav-link" @click="scrollTo('leistungen')">Leistungen</button>
        <button class="nav-link" @click="scrollTo('produkte')">Produkte</button>
        <button class="nav-link" @click="scrollTo('kontakt')">Kontakt</button>
      </nav>

      <!-- CTA -->
      <button class="btn-cta" @click="scrollTo('kontakt')">
        Kontakt aufnehmen
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Hamburger -->
      <button
        class="hamburger"
        :class="{ open: mobileOpen }"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        aria-label="Menü öffnen"
      >
        <span class="bar" />
        <span class="bar" />
        <span class="bar" />
      </button>
    </div>

    <!-- Mobile Nav -->
    <nav
      id="mobile-nav"
      class="nav-mobile"
      :class="{ open: mobileOpen }"
      aria-label="Mobile Navigation"
    >
      <div class="container">
        <button class="nav-link-mobile" @click="scrollTo('ueber-uns')">Über uns</button>
        <button class="nav-link-mobile" @click="scrollTo('leistungen')">Leistungen</button>
        <button class="nav-link-mobile" @click="scrollTo('produkte')">Produkte</button>
        <button class="nav-link-mobile" @click="scrollTo('kontakt')">Kontakt</button>
        <button class="btn-cta btn-cta--mobile" @click="scrollTo('kontakt')">Kontakt aufnehmen</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* ---- Layout ---- */
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: var(--background);
  border-bottom: 1px solid var(--border);
  box-shadow: none;
  transition: box-shadow 0.3s ease-out;
}

.header.scrolled {
  box-shadow: 0 2px 12px rgba(3, 42, 99, 0.10);
}

.header-inner {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  height: 68px;
}

/* ---- Logo ---- */
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  height: 44px;
  width: auto;
  display: block;
  object-fit: contain;
}

/* ---- Desktop Nav ---- */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-left: auto;
}

.nav-link {
  position: relative;
  padding: var(--space-2) var(--space-3);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text);
  background: none;
  border: none;
  cursor: pointer;
  transition: color var(--transition);
  touch-action: manipulation;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 2px;
  left: var(--space-3);
  right: var(--space-3);
  height: 2px;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease-out;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

/* ---- CTA Button ---- */
.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px 22px;
  background: var(--primary);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--transition), transform var(--transition);
  touch-action: manipulation;
}

.btn-cta:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.btn-cta:active {
  transform: translateY(0);
}

/* ---- Hamburger ---- */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  flex-shrink: 0;
}

.bar {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.25s ease-out, opacity 0.2s ease-out;
}

.hamburger.open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ---- Mobile Nav ---- */
.nav-mobile {
  display: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease-out;
  border-top: 1px solid var(--border);
}

.nav-mobile.open {
  max-height: 320px;
}

.nav-link-mobile {
  display: block;
  width: 100%;
  text-align: left;
  padding: 14px 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
  background: none;
  border: none;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: color var(--transition);
  touch-action: manipulation;
}

.nav-link-mobile:hover {
  color: var(--primary);
}

.btn-cta--mobile {
  margin-top: var(--space-4);
  margin-bottom: var(--space-5);
  width: 100%;
  justify-content: center;
}

/* ---- Responsive ---- */
@media (max-width: 767px) {
  .nav-desktop,
  .btn-cta:not(.btn-cta--mobile) {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-mobile {
    display: block;
  }
}
</style>
