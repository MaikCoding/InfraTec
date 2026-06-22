<script setup>
// The shared useScrollReveal composable (called in HomeView) handles
// all [data-scroll] elements, including the cards here.
// No local observer needed.
</script>

<template>
  <!-- ══════════════════════════════════════
       PART A — Benefits strip
  ══════════════════════════════════════ -->
  <section id="ueber-uns" class="benefits-section" aria-labelledby="benefits-heading">
    <div class="container">
      <div data-scroll="scan-block" style="--reveal-delay: 0ms; text-align: center; margin-bottom: var(--space-7);">
        <h2 id="benefits-heading" class="section-title">Ihre Vorteile mit OS InfraTec</h2>
      </div>
      <div class="benefits-grid">

        <!-- Mehr Sicherheit -->
        <div class="benefit-item" data-scroll="gate-item" style="--reveal-delay: 50ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <strong class="benefit-label">MEHR SICHERHEIT</strong>
          <p class="benefit-text">Zuverlässiger Schutz für Personen und Gebäude</p>
        </div>

        <!-- Effiziente Prozesse -->
        <div class="benefit-item" data-scroll="gate-item" style="--reveal-delay: 150ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>
            </svg>
          </div>
          <strong class="benefit-label">EFFIZIENTE PROZESSE</strong>
          <p class="benefit-text">Automatisierte Abläufe sparen Zeit und Kosten</p>
        </div>

        <!-- Volle Transparenz -->
        <div class="benefit-item" data-scroll="gate-item" style="--reveal-delay: 250ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"/>
              <line x1="12" y1="20" x2="12" y2="4"/>
              <line x1="6" y1="20" x2="6" y2="14"/>
            </svg>
          </div>
          <strong class="benefit-label">VOLLE TRANSPARENZ</strong>
          <p class="benefit-text">Alle Zugänge und Umsätze im Blick – jederzeit</p>
        </div>

        <!-- Individuelle Lösungen -->
        <div class="benefit-item" data-scroll="gate-item" style="--reveal-delay: 350ms">
          <div class="icon-circle" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>
          <strong class="benefit-label">INDIVIDUELLE LÖSUNGEN</strong>
          <p class="benefit-text">Maßgeschneidert für Ihre Anforderungen</p>
        </div>

      </div>
    </div>
  </section>

  <!-- ══════════════════════════════════════
       PART B — Service Cards
  ══════════════════════════════════════ -->
  <section id="leistungen" class="services-section" aria-labelledby="services-heading">
    <div class="container">
      <p class="eyebrow" data-scroll="fade-up" style="--reveal-delay: 0ms">UNSERE LEISTUNGEN</p>
      <div data-scroll="scan-block" style="--reveal-delay: 100ms; text-align: center; margin-bottom: var(--space-7);">
        <h2 id="services-heading" class="section-title">Was wir für Sie tun</h2>
      </div>

      <div class="cards-grid">

        <!-- Card 1: Personenzugänge -->
        <article
          class="card"
          data-scroll="card-3d"
          style="--reveal-delay: 0ms"
          aria-label="Leistung: Personenzugänge"
        >
          <div
            class="card-image"
            role="img"
            aria-label="Bild: Personenzugang – Zugangskontrolle für Personen"
          >
            <span class="card-image-label">[ Bild: Personenzugang ]</span>
          </div>
          <div class="card-body">
            <div class="card-icon-wrap" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 class="card-title">Personenzugänge</h3>
            <ul class="card-list" aria-label="Leistungsmerkmale Personenzugänge">
              <li>Steuerung und Überwachung von Personenströmen</li>
              <li>Intuitive und zuverlässige Zugangstechnologien</li>
              <li>Für Unternehmen, Behörden, Freizeiteinrichtungen u.&nbsp;v.&nbsp;m.</li>
            </ul>
          </div>
        </article>

        <!-- Card 2: Personenvereinzelung -->
        <article
          class="card"
          data-scroll="card-3d"
          style="--reveal-delay: 120ms"
          aria-label="Leistung: Personenvereinzelung"
        >
          <div
            class="card-image"
            role="img"
            aria-label="Bild: Personenvereinzelung – Drehkreuz Eingang"
          >
            <span class="card-image-label">[ Bild: Personenvereinzelung ]</span>
          </div>
          <div class="card-body">
            <div class="card-icon-wrap" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="3" y1="15" x2="21" y2="15"/>
                <line x1="9" y1="3" x2="9" y2="21"/>
              </svg>
            </div>
            <h3 class="card-title">Personenvereinzelung</h3>
            <ul class="card-list" aria-label="Leistungsmerkmale Personenvereinzelung">
              <li>Sicheres und kontrolliertes Passieren von Ein- und Ausgängen</li>
              <li>Verhindert unbefugtes Mitgehen (Tailgating)</li>
              <li>Robuste Lösungen für Innen- und Außenbereiche</li>
            </ul>
          </div>
        </article>

        <!-- Card 3: Zutrittskontrolle -->
        <article
          class="card"
          data-scroll="card-3d"
          style="--reveal-delay: 240ms"
          aria-label="Leistung: Zutrittskontrolle"
        >
          <div
            class="card-image"
            role="img"
            aria-label="Bild: Zutrittskontrolle – Kartenleser an Tür"
          >
            <span class="card-image-label">[ Bild: Zutrittskontrolle ]</span>
          </div>
          <div class="card-body">
            <div class="card-icon-wrap" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3 class="card-title">Zutrittskontrolle</h3>
            <ul class="card-list" aria-label="Leistungsmerkmale Zutrittskontrolle">
              <li>Rechteverwaltung und Zonensteuerung</li>
              <li>Integration von Karten, Codes, Biometrie &amp; Mobil</li>
              <li>Echtzeit-Überwachung und Protokollierung</li>
            </ul>
          </div>
        </article>

        <!-- Card 4: Kassensysteme -->
        <article
          class="card"
          data-scroll="card-3d"
          style="--reveal-delay: 360ms"
          aria-label="Leistung: Abrechnungs- und Kassiersysteme"
        >
          <div
            class="card-image"
            role="img"
            aria-label="Bild: Kassensystem – Point of Sale Terminal"
          >
            <span class="card-image-label">[ Bild: Kassensystem ]</span>
          </div>
          <div class="card-body">
            <div class="card-icon-wrap" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <h3 class="card-title">Abrechnungs- und Kassiersysteme</h3>
            <ul class="card-list" aria-label="Leistungsmerkmale Kassiersysteme">
              <li>Flexible Kassierlösungen für jedes Geschäftsmodell</li>
              <li>Unterstützung von Bar, Karte, Online &amp; Gutscheinen</li>
              <li>Detaillierte Auswertungen und Reports</li>
            </ul>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---- Benefits Section ---- */
.benefits-section {
  background: var(--background-soft);
  padding-block: var(--space-9);
}

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  text-align: center;
  margin-bottom: 0;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.benefit-item {
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
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--text);
}

.benefit-text {
  font-size: 0.9rem;
  color: var(--text-light);
  line-height: 1.5;
}

/* ---- Services Section ---- */
.services-section {
  background: var(--background);
  padding-block: var(--space-9);
}

.eyebrow {
  text-align: center;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
}

/* ---- Card ---- */
.card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
  cursor: default;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--primary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-out;
}

.card:hover::before {
  transform: scaleX(1);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

/* ---- Card Image Placeholder ---- */
.card-image {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-image-label {
  font-size: 0.8rem;
  font-style: italic;
  color: var(--text-light);
  padding: var(--space-4);
  text-align: center;
}

/* ---- Card Body ---- */
.card-body {
  padding: var(--space-5);
}

.card-icon-wrap {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-3);
}

.card-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-4);
  letter-spacing: -0.01em;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.card-list li {
  position: relative;
  padding-left: 1.1em;
  font-size: 0.88rem;
  color: var(--text-light);
  line-height: 1.5;
}

.card-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: 700;
}

/* ---- Responsive ---- */
@media (max-width: 1023px) {
  .benefits-grid,
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .benefits-grid,
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .section-title {
    text-align: left;
  }

  .eyebrow {
    text-align: left;
  }

  .benefit-item {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
