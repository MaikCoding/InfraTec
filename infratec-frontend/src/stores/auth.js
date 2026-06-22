// src/stores/auth.js
// Simple reactive auth store backed by localStorage.
// Uses Strapi Users & Permissions JWT flow.

import { reactive, computed } from 'vue'

const STORAGE_KEY = 'infratec_admin_token'
const API_BASE = 'http://localhost:1337'

const state = reactive({
  token: localStorage.getItem(STORAGE_KEY) || null,
  user: null,
  loading: false,
  error: null,
})

export const auth = {
  // ── Computed ────────────────────────────────────────────
  get isAuthenticated() {
    return !!state.token
  },
  get user() {
    return state.user
  },
  get loading() {
    return state.loading
  },
  get error() {
    return state.error
  },

  // ── Actions ─────────────────────────────────────────────
  async login(identifier, password) {
    state.loading = true
    state.error = null
    try {
      const res = await fetch(`${API_BASE}/api/auth/local`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      })
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.error?.message || 'Anmeldung fehlgeschlagen.')
      }
      state.token = data.jwt
      state.user = data.user
      localStorage.setItem(STORAGE_KEY, data.jwt)
    } catch (err) {
      state.error = err.message
      throw err
    } finally {
      state.loading = false
    }
  },

  logout() {
    state.token = null
    state.user = null
    localStorage.removeItem(STORAGE_KEY)
  },

  /** Validate existing token and load user info */
  async restoreSession() {
    if (!state.token) return false
    try {
      const res = await fetch(`${API_BASE}/api/users/me`, {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      if (!res.ok) {
        this.logout()
        return false
      }
      state.user = await res.json()
      return true
    } catch {
      this.logout()
      return false
    }
  },

  // ── Convenience fetch wrapper (authenticated) ────────────
  async apiFetch(path, options = {}) {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.token}`,
        ...(options.headers || {}),
      },
    })
    if (res.status === 401) {
      this.logout()
      throw new Error('Session abgelaufen. Bitte neu anmelden.')
    }
    if (!res.ok) {
      const body = await res.json().catch(() => ({}))
      throw new Error(body?.error?.message || `HTTP ${res.status}`)
    }
    // 204 No Content or empty body (e.g. DELETE)
    const text = await res.text()
    return text ? JSON.parse(text) : null
  },
}
