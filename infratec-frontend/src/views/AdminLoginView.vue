<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../stores/auth.js'

const router = useRouter()
const form = reactive({ identifier: '', password: '' })
const showPassword = ref(false)

async function submit() {
  if (!form.identifier.trim() || !form.password) return
  try {
    await auth.login(form.identifier.trim(), form.password)
    router.push('/admin/dashboard')
  } catch {
    // error displayed via auth.error
  }
}
</script>

<template>
  <div class="login-page" role="main">
    <div class="login-card" aria-labelledby="login-heading">
      <!-- Logo / Brand -->
      <div class="login-brand">
        <img src="/logo.png" alt="OS InfraTec GmbH" class="login-logo" />
        <p class="brand-sub">Verwaltungsbereich</p>
      </div>

      <h1 id="login-heading" class="login-title">Anmelden</h1>
      <p class="login-desc">Bitte melden Sie sich mit Ihren Zugangsdaten an.</p>

      <!-- Error message -->
      <div v-if="auth.error" class="login-error" role="alert" aria-live="assertive">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        {{ auth.error }}
      </div>

      <form novalidate @submit.prevent="submit" aria-label="Admin-Anmeldeformular">
        <!-- Identifier -->
        <div class="field-group">
          <label class="field-label" for="login-identifier">E-Mail oder Benutzername</label>
          <input
            id="login-identifier"
            v-model="form.identifier"
            type="text"
            class="field-input"
            autocomplete="username"
            aria-required="true"
            :disabled="auth.loading"
            placeholder="admin@os-infratec.de"
          >
        </div>

        <!-- Password -->
        <div class="field-group">
          <label class="field-label" for="login-password">Passwort</label>
          <div class="password-wrapper">
            <input
              id="login-password"
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              class="field-input password-input"
              autocomplete="current-password"
              aria-required="true"
              :disabled="auth.loading"
            >
            <button
              type="button"
              class="password-toggle"
              :aria-label="showPassword ? 'Passwort verbergen' : 'Passwort anzeigen'"
              :aria-pressed="showPassword"
              @click="showPassword = !showPassword"
            >
              <!-- Eye open -->
              <svg v-if="!showPassword" width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              <!-- Eye closed -->
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" aria-hidden="true">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                <line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="btn-login"
          :disabled="auth.loading || !form.identifier || !form.password"
          :aria-busy="auth.loading"
        >
          <span v-if="auth.loading" class="spinner" aria-hidden="true" />
          <span>{{ auth.loading ? 'Anmelden…' : 'Anmelden' }}</span>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-soft);
  padding: var(--space-5);
}

.login-card {
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: var(--radius);
  padding: var(--space-7) var(--space-6);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--border);
}

/* ── Brand ────────────────────────────── */
.login-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-5);
  border-bottom: 1px solid var(--border);
}

.login-logo {
  height: 52px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
  display: block;
}

.brand-sub {
  font-size: 0.78rem;
  color: var(--text-light);
  margin: 0;
  text-align: center;
}

/* ── Heading ──────────────────────────── */
.login-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 var(--space-2);
}

.login-desc {
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0 0 var(--space-6);
  line-height: 1.5;
}

/* ── Error ────────────────────────────── */
.login-error {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  background: #fef2f2;
  color: var(--danger);
  font-size: 0.88rem;
  font-weight: 500;
  padding: var(--space-3) var(--space-4);
  border-radius: 8px;
  border: 1px solid #fecaca;
  margin-bottom: var(--space-5);
  line-height: 1.4;
}

/* ── Fields ───────────────────────────── */
.field-group {
  margin-bottom: var(--space-5);
}

.field-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space-2);
}

.field-input {
  width: 100%;
  padding: 11px 14px;
  font-size: 0.95rem;
  font-family: inherit;
  color: var(--text);
  background: var(--background-soft);
  border: 1.5px solid var(--border);
  border-radius: 8px;
  transition: border-color var(--transition), box-shadow var(--transition);
  outline: none;
  min-height: 44px;
}

.field-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(3, 42, 99, 0.12);
  background: #fff;
}

.field-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ── Password toggle ──────────────────── */
.password-wrapper {
  position: relative;
}

.password-input {
  padding-right: 46px;
}

.password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;
  border-radius: 6px;
  transition: color var(--transition);
}

.password-toggle:hover {
  color: var(--primary);
}

/* ── Submit ───────────────────────────── */
.btn-login {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  width: 100%;
  padding: 13px;
  background: var(--primary);
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  min-height: 48px;
  margin-top: var(--space-2);
  transition: background var(--transition), transform var(--transition);
  touch-action: manipulation;
}

.btn-login:hover:not(:disabled) {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

.btn-login:active:not(:disabled) {
  transform: translateY(0);
}

.btn-login:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

/* ── Spinner ──────────────────────────── */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spinner {
  display: inline-block;
  width: 17px;
  height: 17px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
</style>
