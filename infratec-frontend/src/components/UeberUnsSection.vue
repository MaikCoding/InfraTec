<script setup>
// Scroll-reveal is driven by useScrollReveal() called once in HomeView.
</script>

<template>
  <!-- ══════════════════════════════════════════════════
       ÜBER UNS — Unternehmen, Werte, Kennzahlen
  ══════════════════════════════════════════════════ -->
  <section id="ueber-uns" class="about-section" aria-labelledby="about-heading">
    <div class="container">

      <!-- Section label -->
      <p class="eyebrow" data-scroll="fade-up" style="--reveal-delay: 0ms">ÜBER UNS</p>

      <!-- Two-column layout: text + stats -->
      <div class="about-grid">

        <!-- Left: Story -->
        <div class="about-text" data-scroll="slide-left" style="--reveal-delay: 100ms">
          <h2 id="about-heading" class="section-title">
            Ihr verlässlicher Partner<br>für intelligente Zugangstechnologien.
          </h2>
          <p class="about-body">
            Die <strong>OS InfraTec GmbH</strong> ist ein spezialisiertes Unternehmen im Bereich
            Zutrittskontrolle, Personensteuerung und integrierter Abrechnungssysteme. Mit
            jahrelanger Erfahrung in der Planung, Installation und dem Service sicherheitskritischer
            Infrastruktur begleiten wir unsere Kunden von der ersten Beratung bis zur
            langfristigen Betreuung nach der Inbetriebnahme.
          </p>
          <p class="about-body">
            Unser Leistungsspektrum reicht von klassischen Drehkreuzanlagen und
            Schrankenanlagen über biometrische Zugangssysteme bis hin zu vollintegrierten
            Kassierlösungen. Wir arbeiten herstellerübergreifend, orientieren uns an den
            individuellen Anforderungen unserer Kunden und legen höchsten Wert auf
            Zuverlässigkeit, Datenschutz und Skalierbarkeit.
          </p>
          <p class="about-body">
            Ob Behörde, Industriebetrieb, Freizeiteinrichtung oder Einzelhandel – wir
            entwickeln die passende Systemlösung. Dabei verstehen wir uns als langfristiger
            Systempartner, nicht nur als Lieferant.
          </p>

          <!-- Core values -->
          <ul class="values-list" aria-label="Unsere Kernwerte">
            <li class="value-item">
              <div class="value-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div>
                <strong class="value-label">Zuverlässigkeit</strong>
                <span class="value-text"> — Systeme, auf die Sie sich täglich verlassen können.</span>
              </div>
            </li>
            <li class="value-item">
              <div class="value-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
                </svg>
              </div>
              <div>
                <strong class="value-label">Innovation</strong>
                <span class="value-text"> — Modernste Technologien, zukunftssicher implementiert.</span>
              </div>
            </li>
            <li class="value-item">
              <div class="value-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <strong class="value-label">Partnerschaft</strong>
                <span class="value-text"> — Persönliche Beratung und langfristige Betreuung.</span>
              </div>
            </li>
            <li class="value-item">
              <div class="value-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div>
                <strong class="value-label">Datenschutz</strong>
                <span class="value-text"> — DSGVO-konforme Systemarchitekturen by design.</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: Stats + highlights -->
        <div class="about-side" data-scroll="slide-right" style="--reveal-delay: 200ms">

          <!-- Image placeholder -->
          <div
            class="about-image"
            role="img"
            aria-label="Bild: OS InfraTec Team oder Anlage"
          >
            <span class="image-label">[ Bild: Unternehmen / Team ]</span>
            <!-- Decorative corner accent -->
            <div class="image-accent" aria-hidden="true" />
          </div>

          <!-- KPI strip -->
          <div class="kpi-grid" aria-label="Kennzahlen">
            <div class="kpi-item">
              <span class="kpi-value">15+</span>
              <span class="kpi-label">Jahre Erfahrung</span>
            </div>
            <div class="kpi-item">
              <span class="kpi-value">500+</span>
              <span class="kpi-label">Installationen</span>
            </div>
            <div class="kpi-item">
              <span class="kpi-value">98%</span>
              <span class="kpi-label">Kundenzufriedenheit</span>
            </div>
            <div class="kpi-item">
              <span class="kpi-value">24/7</span>
              <span class="kpi-label">Service & Support</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits strip -->
      <div class="benefits-strip" data-scroll="scan-block" style="--reveal-delay: 100ms">
        <div class="benefit-tile" data-scroll="gate-item" style="--reveal-delay: 0ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <strong class="benefit-label">MEHR SICHERHEIT</strong>
          <p class="benefit-text">Zuverlässiger Schutz für Personen, Bereiche und Assets</p>
        </div>
        <div class="benefit-tile" data-scroll="gate-item" style="--reveal-delay: 100ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <strong class="benefit-label">EFFIZIENTE PROZESSE</strong>
          <p class="benefit-text">Automatisierte Abläufe reduzieren Aufwand und Kosten spürbar</p>
        </div>
        <div class="benefit-tile" data-scroll="gate-item" style="--reveal-delay: 200ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <strong class="benefit-label">VOLLE TRANSPARENZ</strong>
          <p class="benefit-text">Alle Zugänge, Ereignisse und Umsätze in Echtzeit einsehbar</p>
        </div>
        <div class="benefit-tile" data-scroll="gate-item" style="--reveal-delay: 300ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <strong class="benefit-label">MASSGESCHNEIDERT</strong>
          <p class="benefit-text">Individuelle Systemlösungen exakt nach Ihren Anforderungen</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ---- Section ---- */
.about-section {
  background: var(--background-soft);
  padding-block: var(--space-9);
}

.eyebrow {
  text-align: center;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: var(--space-5);
}

/* ---- Two-column grid ---- */
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: start;
  margin-bottom: var(--space-9);
}

/* ---- Left: Text ---- */
.section-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  line-height: 1.25;
  margin-bottom: var(--space-5);
}

.about-body {
  font-size: 0.97rem;
  line-height: 1.75;
  color: var(--text-light);
  margin-bottom: var(--space-4);
}

/* ---- Values list ---- */
.values-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.value-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.value-icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.value-label {
  font-size: 0.93rem;
  font-weight: 700;
  color: var(--text);
}

.value-text {
  font-size: 0.93rem;
  color: var(--text-light);
}

/* ---- Right: Side column ---- */
.about-side {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

/* ---- Image ---- */
.about-image {
  position: relative;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary) 100%);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-label {
  font-size: 0.85rem;
  font-style: italic;
  color: var(--text-light);
}

.image-accent {
  position: absolute;
  top: -16px;
  right: -16px;
  width: 80px;
  height: 80px;
  border: 4px solid var(--primary);
  border-radius: var(--radius);
  opacity: 0.15;
}

/* ---- KPI grid ---- */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.kpi-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  box-shadow: var(--shadow-card);
}

.kpi-value {
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--primary);
  line-height: 1;
}

.kpi-label {
  font-size: 0.82rem;
  color: var(--text-light);
  font-weight: 500;
}

/* ---- Benefits strip ---- */
.benefits-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  padding-top: var(--space-7);
  border-top: 1px solid var(--border);
}

.benefit-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-3);
}

.icon-circle {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.benefit-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text);
}

.benefit-text {
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.55;
}

/* ---- Responsive ---- */
@media (max-width: 1023px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .benefits-strip {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .section-title {
    font-size: 1.6rem;
  }

  .benefits-strip {
    grid-template-columns: 1fr;
  }

  .kpi-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .benefit-tile {
    align-items: flex-start;
    text-align: left;
  }

  .eyebrow {
    text-align: left;
  }
}
</style>
