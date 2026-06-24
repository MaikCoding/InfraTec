<script setup>
// Scroll-reveal is driven by useScrollReveal() called once in HomeView.
</script>

<template>
  <!-- ══════════════════════════════════════════════════
       LEISTUNGEN — Service Cards
  ══════════════════════════════════════════════════ -->
  <section id="leistungen" class="services-section" aria-labelledby="services-heading">
    <div class="container">

      <p class="eyebrow" data-scroll="fade-up" style="--reveal-delay: 0ms">UNSERE LEISTUNGEN</p>
      <div data-scroll="scan-block" style="--reveal-delay: 100ms; text-align: center; margin-bottom: var(--space-4)">
        <h2 id="services-heading" class="section-title">Was wir für Sie tun</h2>
      </div>
      <p class="section-intro" data-scroll="fade-up" style="--reveal-delay: 180ms">
        Von der Planung über die Installation bis zum langfristigen Service – wir begleiten Sie
        in jedem Schritt. Unser Team deckt das gesamte Spektrum moderner Zugangstechnologien ab.
      </p>

      <!-- Primary service cards -->
      <div class="cards-grid">

        <!-- Card 1: Personenzugänge -->
        <article class="card" data-scroll="card-3d" style="--reveal-delay: 0ms"
          aria-label="Leistung: Personenzugänge">
          <div class="card-image">
            <img src="/images/personenzugang.webp" alt="Personenzugang über moderne Zugangsschleusen"
              class="card-img" width="1280" height="895" loading="lazy" decoding="async" />
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
            <p class="card-desc">
              Intelligente Lösungen zur Steuerung und Überwachung von Personenströmen –
              zuverlässig, schnell und benutzerfreundlich.
            </p>
            <ul class="card-list" aria-label="Leistungsmerkmale Personenzugänge">
              <li>Steuerung und Überwachung von Personenströmen</li>
              <li>Intuitive und zuverlässige Zugangstechnologien</li>
              <li>Für Unternehmen, Behörden und Freizeiteinrichtungen</li>
              <li>Integration in bestehende IT-Infrastrukturen</li>
            </ul>
          </div>
        </article>

        <!-- Card 2: Personenvereinzelung -->
        <article class="card" data-scroll="card-3d" style="--reveal-delay: 120ms"
          aria-label="Leistung: Personenvereinzelung">
          <div class="card-image">
            <img src="/images/drehsperre.webp" alt="Vollhöhen-Drehkreuz zur sicheren Personenvereinzelung"
              class="card-img" width="1280" height="896" loading="lazy" decoding="async" />
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
            <p class="card-desc">
              Hochsichere Einzel-Durchgangssysteme, die unbefugtes Mitgehen
              (Tailgating) zuverlässig verhindern.
            </p>
            <ul class="card-list" aria-label="Leistungsmerkmale Personenvereinzelung">
              <li>Kontrolliertes Passieren von Ein- und Ausgängen</li>
              <li>Verhindert Tailgating und unbefugten Zutritt</li>
              <li>Robuste Systeme für Innen- und Außenbereiche</li>
              <li>Vandalensichere Konstruktionen verfügbar</li>
            </ul>
          </div>
        </article>

        <!-- Card 3: Zutrittskontrolle -->
        <article class="card" data-scroll="card-3d" style="--reveal-delay: 240ms"
          aria-label="Leistung: Zutrittskontrolle">
          <div class="card-image">
            <img src="/images/rfid.webp" alt="RFID-Kartenleser für die Zutrittskontrolle"
              class="card-img" width="1280" height="895" loading="lazy" decoding="async" />
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
            <p class="card-desc">
              Flexible Rechteverwaltung und Zonensteuerung mit modernsten
              Identifikationsmedien – vom Chip bis zur Biometrie.
            </p>
            <ul class="card-list" aria-label="Leistungsmerkmale Zutrittskontrolle">
              <li>Rechteverwaltung und Zonensteuerung</li>
              <li>Karten, PIN, Biometrie &amp; Mobile Credentials</li>
              <li>Echtzeit-Überwachung und lückenlose Protokollierung</li>
              <li>Anbindung an HR- und ERP-Systeme</li>
            </ul>
          </div>
        </article>

        <!-- Card 4: Kassensysteme -->
        <article class="card" data-scroll="card-3d" style="--reveal-delay: 360ms"
          aria-label="Leistung: Abrechnungs- und Kassiersysteme">
          <div class="card-image">
            <img src="/images/parkhaus.webp" alt="Zufahrts- und Kassenterminal an einer Parkhaus-Schranke"
              class="card-img" width="1280" height="895" loading="lazy" decoding="async" />
          </div>
          <div class="card-body">
            <div class="card-icon-wrap" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/>
                <line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <h3 class="card-title">Abrechnungs- &amp; Kassiersysteme</h3>
            <p class="card-desc">
              Vollständig integrierte Kassenlösungen für jedes Geschäftsmodell –
              von Barzahlung bis Online-Ticketing.
            </p>
            <ul class="card-list" aria-label="Leistungsmerkmale Kassiersysteme">
              <li>Bar, Karte, Online &amp; Gutscheine</li>
              <li>Detaillierte Auswertungen und Reports</li>
              <li>Verknüpfung mit Zutrittskontrolle möglich</li>
              <li>TSE-konforme Kassenlösungen (GoBD)</li>
            </ul>
          </div>
        </article>

      </div>

      <!-- Process steps strip -->
      <div class="process-strip" aria-label="Unser Ablauf">
        <p class="process-title" data-scroll="fade-up" style="--reveal-delay: 0ms">
          So arbeiten wir mit Ihnen zusammen
        </p>
        <div class="process-steps">
          <div class="process-step" data-scroll="gate-item" style="--reveal-delay: 0ms">
            <div class="step-number" aria-hidden="true">01</div>
            <h4 class="step-heading">Beratung</h4>
            <p class="step-text">Persönliche Analyse Ihrer Anforderungen und Ziele.</p>
          </div>
          <div class="process-connector" aria-hidden="true" />
          <div class="process-step" data-scroll="gate-item" style="--reveal-delay: 100ms">
            <div class="step-number" aria-hidden="true">02</div>
            <h4 class="step-heading">Planung</h4>
            <p class="step-text">Individuelle Systemplanung und Angebotserstellung.</p>
          </div>
          <div class="process-connector" aria-hidden="true" />
          <div class="process-step" data-scroll="gate-item" style="--reveal-delay: 200ms">
            <div class="step-number" aria-hidden="true">03</div>
            <h4 class="step-heading">Installation</h4>
            <p class="step-text">Professionelle Montage und Inbetriebnahme vor Ort.</p>
          </div>
          <div class="process-connector" aria-hidden="true" />
          <div class="process-step" data-scroll="gate-item" style="--reveal-delay: 300ms">
            <div class="step-number" aria-hidden="true">04</div>
            <h4 class="step-heading">Service</h4>
            <p class="step-text">Langfristige Wartung, Updates und 24/7-Support.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ---- Section ---- */
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

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 0;
}

.section-intro {
  text-align: center;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-light);
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: var(--space-7);
}

/* ---- Cards ---- */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-9);
}

.card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform var(--transition), box-shadow var(--transition);
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

.card:hover::before { transform: scaleX(1); }
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

/* ---- Card Image ---- */
.card-image {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary) 100%);
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition);
}

.card:hover .card-img {
  transform: scale(1.04);
}

/* ---- Card Body ---- */
.card-body { padding: var(--space-5); }

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
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-2);
  letter-spacing: -0.01em;
}

.card-desc {
  font-size: 0.86rem;
  color: var(--text-light);
  line-height: 1.55;
  margin-bottom: var(--space-4);
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.card-list li {
  position: relative;
  padding-left: 1.1em;
  font-size: 0.85rem;
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

/* ---- Process strip ---- */
.process-strip {
  background: var(--background-soft);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-7) var(--space-6);
}

.process-title {
  text-align: center;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-7);
  letter-spacing: -0.01em;
}

.process-steps {
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.process-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: var(--space-4);
}

.step-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  opacity: 0.2;
  line-height: 1;
  margin-bottom: var(--space-3);
}

.step-heading {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space-2);
}

.step-text {
  font-size: 0.85rem;
  color: var(--text-light);
  line-height: 1.55;
}

.process-connector {
  width: 48px;
  height: 2px;
  background: var(--border);
  flex-shrink: 0;
  margin-top: 16px;
}

/* ---- Responsive ---- */
@media (max-width: 1023px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-steps {
    flex-direction: column;
    gap: var(--space-5);
  }

  .process-connector {
    width: 2px;
    height: 24px;
    margin-top: 0;
    align-self: center;
  }
}

@media (max-width: 767px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }

  .section-title,
  .eyebrow {
    text-align: left;
  }

  .section-intro {
    text-align: left;
    margin-inline: 0;
  }

  .process-strip {
    padding: var(--space-6) var(--space-4);
  }

  .process-step {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
