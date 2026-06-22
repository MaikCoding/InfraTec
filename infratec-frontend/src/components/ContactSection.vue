<script setup>
import { ref, reactive } from 'vue'

const state = ref('idle') // idle | loading | success | error

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  dsgvo: false,
})

const errors = reactive({
  name: '',
  email: '',
  message: '',
  dsgvo: '',
})

function validateField(field) {
  errors[field] = ''
  if (field === 'name' && !form.name.trim()) {
    errors.name = 'Bitte geben Sie Ihren Namen ein.'
  }
  if (field === 'email') {
    if (!form.email.trim()) {
      errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
  }
  if (field === 'message' && !form.message.trim()) {
    errors.message = 'Bitte geben Sie Ihre Nachricht ein.'
  }
  if (field === 'dsgvo' && !form.dsgvo) {
    errors.dsgvo = 'Bitte stimmen Sie der Datenschutzerklärung zu.'
  }
}

function validateAll() {
  validateField('name')
  validateField('email')
  validateField('message')
  validateField('dsgvo')
  return !errors.name && !errors.email && !errors.message && !errors.dsgvo
}

async function submit() {
  if (!validateAll()) {
    // Focus first invalid field
    const firstError = ['name', 'email', 'message', 'dsgvo'].find(f => errors[f])
    if (firstError) {
      const el = document.getElementById('field-' + firstError)
      if (el) el.focus()
    }
    return
  }
  state.value = 'loading'
  try {
    const res = await fetch('http://localhost:1337/api/contact-submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || null,
          message: form.message.trim(),
        },
      }),
    })
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body?.error?.message || `HTTP ${res.status}`)
    }
    state.value = 'success'
  } catch (err) {
    console.error('Kontaktformular Fehler:', err)
    state.value = 'error'
  }
}
</script>

<template>
  <section id="kontakt" class="contact-section" aria-labelledby="contact-heading">
    <div class="container contact-inner">

      <!-- Left: Company info -->
      <div class="contact-info" data-scroll="slide-left" style="--reveal-delay: 0ms">
        <h2 id="contact-heading" class="contact-title">Sprechen Sie uns an.</h2>
        <p class="contact-subtitle">
          Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu unseren
          Lösungen – persönlich, schnell und kompetent.
        </p>

        <ul class="info-list" aria-label="Kontaktinformationen">
          <li class="info-row">
            <div class="info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <span>Gartenkamp 137a, 49492 Westerkappeln</span>
          </li>
          <li class="info-row">
            <div class="info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
              </svg>
            </div>
            <a href="tel:+4922389669360" class="info-link">+49 2238 96693 60</a>
          </li>
          <li class="info-row">
            <div class="info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <a href="mailto:info@os-infratec.de" class="info-link">info@os-infratec.de</a>
          </li>
          <li class="info-row">
            <div class="info-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <a href="https://www.os-infratec.de" target="_blank" rel="noopener noreferrer" class="info-link">
              www.os-infratec.de
            </a>
          </li>
        </ul>
      </div>

      <!-- Right: Contact form -->
      <div class="form-card" data-scroll="slide-right" style="--reveal-delay: 150ms">
        <!-- Success state -->
        <div v-if="state === 'success'" class="success-state" role="alert" aria-live="polite">
          <div class="success-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3 class="success-title">Vielen Dank!</h3>
          <p class="success-text">Ihre Nachricht wurde gesendet. Wir melden uns bald bei Ihnen.</p>
        </div>

        <!-- Error state -->
        <div v-else-if="state === 'error'" class="error-state" role="alert" aria-live="polite">
          <div class="error-icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <h3 class="error-title">Fehler beim Senden</h3>
          <p class="error-text">Ihre Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.</p>
          <button type="button" class="btn-retry" @click="state = 'idle'">Erneut versuchen</button>
        </div>

        <!-- Form -->
        <form v-else novalidate @submit.prevent="submit" aria-label="Kontaktformular">
          <!-- Name -->
          <div class="field-group">
            <label class="field-label" for="field-name">
              Name <span class="required" aria-label="Pflichtfeld">*</span>
            </label>
            <input
              id="field-name"
              v-model="form.name"
              type="text"
              autocomplete="name"
              :class="['field-input', { 'field-input--error': errors.name }]"
              aria-required="true"
              :aria-describedby="errors.name ? 'error-name' : undefined"
              @blur="validateField('name')"
            >
            <p v-if="errors.name" id="error-name" class="field-error" role="alert">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="field-group">
            <label class="field-label" for="field-email">
              E-Mail <span class="required" aria-label="Pflichtfeld">*</span>
            </label>
            <input
              id="field-email"
              v-model="form.email"
              type="email"
              autocomplete="email"
              :class="['field-input', { 'field-input--error': errors.email }]"
              aria-required="true"
              :aria-describedby="errors.email ? 'error-email' : undefined"
              @blur="validateField('email')"
            >
            <p v-if="errors.email" id="error-email" class="field-error" role="alert">{{ errors.email }}</p>
          </div>

          <!-- Phone -->
          <div class="field-group">
            <label class="field-label" for="field-phone">Telefon</label>
            <input
              id="field-phone"
              v-model="form.phone"
              type="tel"
              autocomplete="tel"
              class="field-input"
            >
          </div>

          <!-- Message -->
          <div class="field-group">
            <label class="field-label" for="field-message">
              Nachricht <span class="required" aria-label="Pflichtfeld">*</span>
            </label>
            <textarea
              id="field-message"
              v-model="form.message"
              rows="5"
              :class="['field-input', 'field-textarea', { 'field-input--error': errors.message }]"
              aria-required="true"
              :aria-describedby="errors.message ? 'error-message' : undefined"
              @blur="validateField('message')"
            />
            <p v-if="errors.message" id="error-message" class="field-error" role="alert">{{ errors.message }}</p>
          </div>

          <!-- DSGVO -->
          <div class="field-group field-group--checkbox">
            <label class="checkbox-label" for="field-dsgvo">
              <input
                id="field-dsgvo"
                v-model="form.dsgvo"
                type="checkbox"
                aria-required="true"
                :aria-describedby="errors.dsgvo ? 'error-dsgvo' : undefined"
                @change="validateField('dsgvo')"
              >
              <span>
                Ich stimme der Verarbeitung meiner Daten gemäß
                <RouterLink to="/datenschutz" class="form-link">Datenschutzerklärung</RouterLink>
                zu. <span class="required" aria-label="Pflichtfeld">*</span>
              </span>
            </label>
            <p v-if="errors.dsgvo" id="error-dsgvo" class="field-error" role="alert">{{ errors.dsgvo }}</p>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="btn-submit"
            :disabled="state === 'loading'"
            :aria-busy="state === 'loading'"
          >
            <span v-if="state === 'loading'" class="spinner" aria-hidden="true" />
            <span>{{ state === 'loading' ? 'Wird gesendet…' : 'Nachricht senden' }}</span>
          </button>

          <p class="form-hint">* Pflichtfelder</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ---- Section ---- */
.contact-section {
  background: var(--primary);
  padding-block: var(--space-9);
  color: #fff;
}

/* ---- Grid ---- */
.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
  align-items: start;
}

/* ---- Info Left ---- */
.contact-title {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: var(--space-4);
}

.contact-subtitle {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: var(--space-6);
  max-width: 420px;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}

.info-icon {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--secondary);
  margin-top: 1px;
}

.info-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  transition: color var(--transition);
}

.info-link:hover {
  color: #fff;
  text-decoration: underline;
}

/* ---- Form Card Right ---- */
.form-card {
  background: #fff;
  border-radius: var(--radius);
  padding: var(--space-6);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
}

/* ---- Field Groups ---- */
.field-group {
  margin-bottom: var(--space-5);
}

.field-label {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space-2);
}

.required {
  color: var(--danger);
  margin-left: 2px;
}

.field-input {
  width: 100%;
  padding: 12px 14px;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--text);
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 8px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  min-height: 48px;
}

.field-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-light);
}

.field-input--error {
  border-color: var(--danger);
}

.field-input--error:focus {
  box-shadow: 0 0 0 3px rgba(217, 45, 32, 0.12);
}

.field-textarea {
  resize: vertical;
  min-height: 120px;
}

.field-error {
  margin-top: var(--space-1);
  font-size: 0.82rem;
  color: var(--danger);
}

/* ---- Checkbox ---- */
.field-group--checkbox {
  margin-bottom: var(--space-5);
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  font-size: 0.88rem;
  color: var(--text);
  cursor: pointer;
  line-height: 1.5;
}

.checkbox-label input[type='checkbox'] {
  width: 18px;
  height: 18px;
  min-width: 18px;
  accent-color: var(--primary);
  cursor: pointer;
  margin-top: 2px;
}

.form-link {
  color: var(--primary);
  text-decoration: underline;
}

/* ---- Submit Button ---- */
.btn-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  width: 100%;
  padding: 14px;
  background: var(--primary);
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  min-height: 52px;
  transition: background var(--transition), transform var(--transition);
  touch-action: manipulation;
}

.btn-submit:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.btn-submit:active:not(:disabled) {
  transform: translateY(0);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* ---- Spinner ---- */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}

.form-hint {
  margin-top: var(--space-3);
  font-size: 0.78rem;
  color: var(--text-light);
  text-align: right;
}

/* ---- Success State ---- */
.success-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-7) var(--space-5);
  gap: var(--space-4);
}

.success-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--success);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}

.success-text {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
}

/* ---- Error State ---- */
.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: var(--space-7) var(--space-5);
  gap: var(--space-4);
}

.error-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--danger);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
}

.error-text {
  font-size: 0.95rem;
  color: var(--text-light);
  line-height: 1.6;
}

.btn-retry {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 10px 24px;
  background: var(--primary);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background var(--transition);
  touch-action: manipulation;
  min-height: 44px;
}

.btn-retry:hover {
  background: var(--primary-hover);
}

/* ---- Responsive ---- */
@media (max-width: 1023px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: var(--space-7);
  }

  .contact-subtitle {
    max-width: 100%;
  }
}

@media (max-width: 767px) {
  .form-card {
    padding: var(--space-5);
  }
}
</style>
