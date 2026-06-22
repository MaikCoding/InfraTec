<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

// Parallax — background layer moves at 0.2x scroll speed
const parallaxY = ref(0)
let ticking = false

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      parallaxY.value = window.scrollY * 0.2
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReducedMotion) {
    window.addEventListener('scroll', onScroll, { passive: true })
  }
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <section id="hero" class="hero" aria-label="Hero — OS InfraTec GmbH">
    <!-- Parallax background layer -->
    <div
      class="hero-parallax-bg"
      :style="{ transform: `translateY(${parallaxY}px)` }"
      aria-hidden="true"
    />
    <div class="container hero-inner">
      <!-- Left: Text -->
      <div class="hero-content">
        <p class="eyebrow animate-1">ZUGANG KONTROLLIEREN. PROZESSE OPTIMIEREN.</p>
        <h1 class="hero-title animate-2">Intelligente<br>Zugangslösungen.</h1>
        <p class="hero-body animate-3">
          OS InfraTec GmbH ist Ihr zuverlässiger Partner für moderne Zutrittslösungen
          und integrierte Systeme zur Personensteuerung und Abrechnung. Wir bieten
          technologieübergreifende Lösungen für mehr Sicherheit, Effizienz und
          Transparenz – individuell abgestimmt auf Ihre Anforderungen.
        </p>
        <div class="hero-cta animate-4">
          <button class="btn-primary" @click="scrollTo('kontakt')">
            Kontakt aufnehmen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button class="btn-secondary" @click="scrollTo('leistungen')">
            Unsere Leistungen
          </button>
        </div>
      </div>

      <!-- Right: Image Placeholder -->
      <div
        class="hero-image float-animation"
        role="img"
        aria-label="Bild: Intelligentes Zugangssystem / Drehkreuz"
      >
        <span class="image-label">[ Bild: Zugangssystem / Drehkreuz ]</span>
      </div>
    </div>

    <!-- Decorative bottom wave -->
    <div class="hero-wave" aria-hidden="true">
      <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 56L60 46.7C120 37.3 240 18.7 360 14C480 9.3 600 18.7 720 28C840 37.3 960 46.7 1080 46.7C1200 46.7 1320 37.3 1380 32.7L1440 28V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V56Z" fill="#F8FAFC"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
/* ---- Section ---- */
.hero {
  position: relative;
  background: var(--background);
  min-height: 90dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-block: var(--space-9) var(--space-8);
  overflow: hidden;
}

/* ---- Parallax background layer ---- */
.hero-parallax-bg {
  position: absolute;
  inset: -15% 0;
  background:
    radial-gradient(ellipse 80% 60% at 70% 40%, rgba(3,42,99,0.06) 0%, transparent 70%),
    radial-gradient(ellipse 40% 40% at 20% 70%, rgba(3,42,99,0.03) 0%, transparent 60%);
  pointer-events: none;
  will-change: transform;
}

/* ---- Inner Grid ---- */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: center;
}

/* ---- Content Left ---- */
.hero-content {
  max-width: 580px;
}

.eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: var(--space-5);
}

.hero-body {
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--text-light);
  max-width: 520px;
  margin-bottom: var(--space-6);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
}

/* ---- Buttons ---- */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 13px 26px;
  background: var(--primary);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  touch-action: manipulation;
  min-height: 48px;
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(3, 42, 99, 0.25);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  padding: 13px 26px;
  background: transparent;
  color: var(--primary);
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: var(--radius);
  border: 2px solid var(--primary);
  cursor: pointer;
  transition: background var(--transition), color var(--transition), transform var(--transition);
  touch-action: manipulation;
  min-height: 48px;
}

.btn-secondary:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
}

.btn-secondary:active {
  transform: translateY(0);
}

/* ---- Image Placeholder Right ---- */
.hero-image {
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary) 100%);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.hero-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(3,42,99,0.06) 0%, transparent 60%);
}

.image-label {
  position: relative;
  font-size: 0.9rem;
  font-style: italic;
  color: var(--text-light);
  text-align: center;
  padding: var(--space-4);
}

/* ---- Float Animation ---- */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-10px); }
}

.float-animation {
  animation: float 4s ease-in-out infinite;
}

/* ---- Stagger Fade-Up Animations ---- */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-1 { animation: fadeInUp 0.6s ease-out 0ms    both; }
.animate-2 { animation: fadeInUp 0.6s ease-out 120ms  both; }
.animate-3 { animation: fadeInUp 0.6s ease-out 240ms  both; }
.animate-4 { animation: fadeInUp 0.6s ease-out 360ms  both; }

/* ---- Wave ---- */
.hero-wave {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  line-height: 0;
}

.hero-wave svg {
  width: 100%;
  height: 56px;
}

/* ---- Responsive ---- */
@media (max-width: 1023px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }

  .hero-content {
    max-width: 100%;
    text-align: center;
  }

  .hero-body {
    margin-inline: auto;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-image {
    max-width: 560px;
    margin-inline: auto;
    width: 100%;
  }

  .float-animation {
    animation: none;
  }
}

@media (max-width: 767px) {
  .hero {
    min-height: auto;
    padding-block: var(--space-8) var(--space-7);
  }

  .hero-title {
    font-size: clamp(2rem, 8vw, 2.8rem);
  }
}
</style>
