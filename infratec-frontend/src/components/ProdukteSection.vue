<script setup>
// Scroll-reveal is driven by useScrollReveal() called once in HomeView.

function scrollToKontakt() {
  const el = document.getElementById('kontakt')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- ══════════════════════════════════════════════════
       PRODUKTE — Produktkatalog
  ══════════════════════════════════════════════════ -->
  <section id="produkte" class="products-section" aria-labelledby="products-heading">
    <div class="container">

      <p class="eyebrow" data-scroll="fade-up" style="--reveal-delay: 0ms">UNSERE PRODUKTE</p>
      <div data-scroll="scan-block" style="--reveal-delay: 100ms; text-align: center; margin-bottom: var(--space-4)">
        <h2 id="products-heading" class="section-title">Hardware &amp; Software für jeden Bedarf</h2>
      </div>
      <p class="section-intro" data-scroll="fade-up" style="--reveal-delay: 180ms">
        Wir setzen auf bewährte Hersteller und modernste Technologien. Unser Produktportfolio
        deckt die gesamte Bandbreite vom Einzel-Drehkreuz bis zur unternehmensweiten
        Zugangsmanagementsoftware ab.
      </p>

      <!-- Category tabs navigation -->
      <div class="category-strip" role="list" aria-label="Produktkategorien">
        <div class="category-pill active" role="listitem">Drehkreuze &amp; Schranken</div>
        <div class="category-pill" role="listitem">Zutrittskontrolle</div>
        <div class="category-pill" role="listitem">Verkehr &amp; Infrastruktur</div>
        <div class="category-pill" role="listitem">Kassensysteme</div>
        <div class="category-pill" role="listitem">Software</div>
      </div>

      <!-- Product cards -->
      <div class="products-grid">

        <!-- Product 1: Halbhoch-Drehkreuz -->
        <article class="product-card" data-scroll="card-3d" style="--reveal-delay: 0ms"
          aria-label="Produkt: Halbhoch-Drehkreuz">
          <div class="product-badge">Bestseller</div>
          <div class="product-image" role="img" aria-label="Bild: Halbhoch-Drehkreuz">
            <div class="product-image-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="2"/>
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
            </div>
          </div>
          <div class="product-body">
            <span class="product-category">Drehkreuze &amp; Schranken</span>
            <h3 class="product-name">Halbhoch-Drehkreuz</h3>
            <p class="product-desc">
              Kompaktes Drehkreuz für den Innen- und Außenbereich. Ideal für mittlere
              Durchgangsfrequenzen – robust, wartungsarm und optisch ansprechend.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Edelstahl-Gehäuse, IP54
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Bi-direktional, bis 1.200 P/h
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Schnittstellen: RS485, Wiegand, TCP/IP
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Integrierter Notöffner (Fail-Safe)
              </li>
            </ul>
          </div>
        </article>

        <!-- Product 2: Vollhoch-Drehkreuz -->
        <article class="product-card" data-scroll="card-3d" style="--reveal-delay: 120ms"
          aria-label="Produkt: Vollhoch-Drehkreuz">
          <div class="product-image">
            <img src="/images/drehsperre.webp" alt="Vollhoch-Drehkreuz aus Edelstahl"
              class="product-img" width="1280" height="896" loading="lazy" decoding="async" />
          </div>
          <div class="product-body">
            <span class="product-category">Drehkreuze &amp; Schranken</span>
            <h3 class="product-name">Vollhoch-Drehkreuz</h3>
            <p class="product-desc">
              Maximale Sicherheit durch raumhohe Sperrwirkung. Geeignet für
              hochsicherheitsrelevante Bereiche wie Rechenzentren, Behörden und Industrie.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Raumhohe Absicherung (2.200 mm)
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Vandalismusschutz Klasse 2
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Alarm bei Übersteigen oder Sabotage
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Betrieb auch ohne Netzstrom (UPS)
              </li>
            </ul>
          </div>
        </article>

        <!-- Product 3: Speedgate / Flap-Barrier -->
        <article class="product-card" data-scroll="card-3d" style="--reveal-delay: 240ms"
          aria-label="Produkt: Speedgate – Flap-Barrier">
          <div class="product-badge product-badge--new">Neu</div>
          <div class="product-image">
            <img src="/images/personenzugang.webp" alt="Speedgate / Flap-Barrier mit Glasflügeln im Eingangsbereich"
              class="product-img" width="1280" height="895" loading="lazy" decoding="async" />
          </div>
          <div class="product-body">
            <span class="product-category">Drehkreuze &amp; Schranken</span>
            <h3 class="product-name">Speedgate / Flap-Barrier</h3>
            <p class="product-desc">
              Elegante Glasflügel-Barrieren für repräsentative Eingangsbereiche –
              kombinieren hohen Durchsatz mit ästhetischem Design.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Gehärtete Glasflügel, LED-Statusanzeige
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Bis zu 40 Personen/Minute
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Anti-Tailgating-Sensor integriert
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Verschiedene Breiten: 600–1.200 mm
              </li>
            </ul>
          </div>
        </article>

        <!-- Product 4: RFID-Kartenleser -->
        <article class="product-card" data-scroll="card-3d" style="--reveal-delay: 0ms"
          aria-label="Produkt: RFID-Kartenleser">
          <div class="product-image">
            <img src="/images/rfid.webp" alt="RFID-Kartenleser mit vorgehaltener Zutrittskarte"
              class="product-img" width="1280" height="895" loading="lazy" decoding="async" />
          </div>
          <div class="product-body">
            <span class="product-category">Zutrittskontrolle</span>
            <h3 class="product-name">RFID-Kartenleser</h3>
            <p class="product-desc">
              Kompakter und zuverlässiger Kartenleser für MIFARE-, DESFire- und
              Legic-Medien. Einfache Montage, hohe Lesereichweite.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                MIFARE Classic, DESFire, Legic
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Lesereichweite bis 10 cm
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Schutzklasse IP65
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Wiegand &amp; OSDP Protokoll
              </li>
            </ul>
          </div>
        </article>

        <!-- Product 5: Biometrischer Leser -->
        <article class="product-card" data-scroll="card-3d" style="--reveal-delay: 120ms"
          aria-label="Produkt: Biometrischer Fingerabdruckleser">
          <div class="product-image" role="img" aria-label="Bild: Biometrischer Leser">
            <div class="product-image-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
          </div>
          <div class="product-body">
            <span class="product-category">Zutrittskontrolle</span>
            <h3 class="product-name">Biometrischer Fingerprint-Leser</h3>
            <p class="product-desc">
              Sicherheit der höchsten Kategorie: Zugang nur per verifiziertem
              Fingerabdruck – ohne Karte, ohne Code, ohne Kompromiss.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                FAR &lt; 0,0001 %, FRR &lt; 0,1 %
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Bis 10.000 Templates speicherbar
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Live-Finger-Erkennung (Anti-Spoofing)
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                DSGVO-konform, lokale Datenspeicherung
              </li>
            </ul>
          </div>
        </article>

        <!-- Product 6: Access Management Software -->
        <article class="product-card product-card--highlight" data-scroll="card-3d" style="--reveal-delay: 240ms"
          aria-label="Produkt: Access Management Software">
          <div class="product-image product-image--dark" role="img" aria-label="Bild: Software-Dashboard">
            <div class="product-image-icon" aria-hidden="true">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            </div>
          </div>
          <div class="product-body">
            <span class="product-category product-category--software">Software</span>
            <h3 class="product-name">InfraTec Access Manager</h3>
            <p class="product-desc">
              Zentrale Managementsoftware für alle angebundenen Zutritts- und
              Abrechnungssysteme. Webbasiert, mandantenfähig und DSGVO-konform.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Web-Dashboard mit Echtzeit-Monitoring
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                REST-API für ERP/HR-Integration
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Revisionsicheres Ereignisprotokoll
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                On-Premise oder Cloud-Hosting
              </li>
            </ul>
          </div>
        </article>

        <!-- Featured product: Vehicle / tunnel infrastructure -->
        <article class="product-card product-card--featured" data-scroll="fade-up" style="--reveal-delay: 0ms"
          aria-label="Produkt: Schranken-, Zufahrts- und Tunnelsysteme">
          <div class="featured-body">
            <span class="product-category">Verkehr &amp; Infrastruktur</span>
            <h3 class="product-name featured-name">Schranken-, Zufahrts- &amp; Tunnelsysteme</h3>
            <p class="product-desc">
              Zutritts- und Abfertigungstechnik nicht nur für Personen, sondern auch für Fahrzeuge:
              Von der Parkhaus-Schranke über die Zufahrtskontrolle bis hin zur Verkehrs- und
              Sicherheitstechnik in Tunneln steuern wir den Verkehrsfluss zuverlässig – für PKW
              und LKW, bei jedem Verkehrsaufkommen.
            </p>
            <ul class="product-features" aria-label="Produktmerkmale">
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Schranken- &amp; Zufahrtsanlagen für PKW und LKW
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Kennzeichenerkennung (ANPR) &amp; RFID-Fahrzeugidentifikation
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Verkehrsleit-, Signal- &amp; Sicherheitstechnik für Tunnel
              </li>
              <li>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Integrierte Abrechnung &amp; Auslastungsanzeige in Echtzeit
              </li>
            </ul>
          </div>
          <div class="featured-gallery" role="group" aria-label="Einsatzbereiche im Tunnel">
            <figure class="gallery-item">
              <img src="/images/tunnel-leer.webp" alt="Beleuchteter Verkehrstunnel ohne Fahrzeuge"
                width="1280" height="905" loading="lazy" decoding="async" />
              <figcaption>Ohne Verkehr</figcaption>
            </figure>
            <figure class="gallery-item">
              <img src="/images/tunnel-pkw.webp" alt="Verkehrstunnel mit fahrenden PKW"
                width="1000" height="707" loading="lazy" decoding="async" />
              <figcaption>PKW-Verkehr</figcaption>
            </figure>
            <figure class="gallery-item">
              <img src="/images/tunnel-lkw.webp" alt="Verkehrstunnel mit einem LKW im Schwerlastverkehr"
                width="1280" height="905" loading="lazy" decoding="async" />
              <figcaption>LKW-Verkehr</figcaption>
            </figure>
          </div>
        </article>

      </div>

      <!-- CTA row -->
      <div class="products-cta" data-scroll="fade-up" style="--reveal-delay: 100ms">
        <p class="cta-text">
          Interesse an einem Produkt oder einer maßgeschneiderten Systemlösung?
        </p>
        <button
          class="btn-primary"
          @click="scrollToKontakt"
        >
          Jetzt Beratung anfragen
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ---- Section ---- */
.products-section {
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
  margin-bottom: var(--space-6);
}

/* ---- Category strip ---- */
.category-strip {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  justify-content: center;
  margin-bottom: var(--space-7);
}

.category-pill {
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: #fff;
  font-size: 0.82rem;
  font-weight: 500;
  color: var(--text-light);
  user-select: none;
  cursor: default;
}

.category-pill.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

/* ---- Products grid ---- */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  margin-bottom: var(--space-7);
}

/* ---- Product card ---- */
.product-card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform var(--transition), box-shadow var(--transition);
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-hover);
}

.product-card--highlight {
  border-color: var(--primary);
  border-width: 2px;
}

/* ---- Badge ---- */
.product-badge {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  z-index: var(--z-card);
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--primary);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.product-badge--new {
  background: var(--success);
}

/* ---- Product image ---- */
.product-image {
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--secondary) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image--dark {
  background: linear-gradient(135deg, var(--primary) 0%, #0A3E8E 100%);
}

.product-image--dark .product-image-icon {
  color: rgba(255, 255, 255, 0.5);
}

.product-image-icon {
  color: var(--primary);
  opacity: 0.4;
}

.product-image {
  overflow: hidden;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform var(--transition);
}

.product-card:hover .product-img {
  transform: scale(1.04);
}

/* ---- Featured product (vehicle / tunnel) ---- */
.product-card--featured {
  grid-column: 1 / -1;
  flex-direction: row;
  align-items: stretch;
  border: 2px solid var(--primary);
}

.featured-body {
  flex: 1 1 50%;
  min-width: 0;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-name {
  font-size: 1.25rem;
}

.featured-gallery {
  flex: 1 1 50%;
  min-width: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  align-content: center;
  padding: var(--space-5);
  padding-left: 0;
  background: var(--background-soft);
}

.gallery-item {
  margin: 0;
  min-width: 0;
}

.gallery-item img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  box-shadow: var(--shadow-card);
}

.gallery-item figcaption {
  margin-top: var(--space-2);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--text-light);
  text-align: center;
  overflow-wrap: break-word;
  hyphens: auto;
}

/* ---- Product body ---- */
.product-body {
  padding: var(--space-5);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-category {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: var(--space-2);
}

.product-category--software {
  color: var(--success);
}

.product-name {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
  margin-bottom: var(--space-3);
}

.product-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-light);
  margin-bottom: var(--space-4);
  flex: 1;
}

.product-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.product-features li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: 0.84rem;
  color: var(--text-light);
  line-height: 1.45;
}

.product-features li svg {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 2px;
}

/* ---- CTA row ---- */
.products-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  background: var(--primary);
  border-radius: var(--radius);
  padding: var(--space-6) var(--space-7);
}

.cta-text {
  font-size: 1.05rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;
  max-width: 460px;
}

/* ---- Primary button ---- */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 13px 26px;
  background: #fff;
  color: var(--primary);
  font-size: 0.95rem;
  font-weight: 700;
  border-radius: var(--radius);
  border: none;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition), box-shadow var(--transition);
  touch-action: manipulation;
  min-height: 48px;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-primary:hover {
  background: var(--primary-light);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.btn-primary:active { transform: translateY(0); }

/* ---- Responsive ---- */
@media (max-width: 1023px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Stack the featured card: text on top, gallery below */
  .product-card--featured {
    flex-direction: column;
  }

  /* Reset flex basis so children size to content (not 50% of height) */
  .featured-body,
  .featured-gallery {
    flex: 0 0 auto;
  }

  .featured-gallery {
    padding: var(--space-5);
    padding-top: 0;
    align-content: start;
  }
}

@media (max-width: 767px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .featured-body {
    padding: var(--space-5);
  }

  .featured-gallery {
    gap: var(--space-2);
  }

  .section-title,
  .eyebrow {
    text-align: left;
  }

  .section-intro {
    text-align: left;
    margin-inline: 0;
  }

  .category-strip {
    justify-content: flex-start;
  }

  .products-cta {
    flex-direction: column;
    align-items: flex-start;
    padding: var(--space-5);
  }

  .btn-primary {
    width: 100%;
    justify-content: center;
  }
}
</style>
