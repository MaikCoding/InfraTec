<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../stores/auth.js'

const router = useRouter()
const submissions = ref([])
const loading = ref(true)
const error = ref(null)
const selectedId = ref(null)
const deleteConfirmId = ref(null)
const searchQuery = ref('')
const filterRead = ref('all') // 'all' | 'unread' | 'read'

// ── Computed ──────────────────────────────────────────────
const selected = computed(() =>
  submissions.value.find(s => s.id === selectedId.value) || null
)

const filtered = computed(() => {
  let list = submissions.value
  if (filterRead.value === 'unread') list = list.filter(s => !s.read)
  if (filterRead.value === 'read') list = list.filter(s => s.read)
  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    list = list.filter(s =>
      s.name?.toLowerCase().includes(q) ||
      s.email?.toLowerCase().includes(q) ||
      s.message?.toLowerCase().includes(q)
    )
  }
  return list
})

const unreadCount = computed(() => submissions.value.filter(s => !s.read).length)

// ── Data fetching ─────────────────────────────────────────
async function load() {
  loading.value = true
  error.value = null
  try {
    const data = await auth.apiFetch(
      '/api/contact-submissions?sort=createdAt:desc&pagination[pageSize]=200'
    )
    submissions.value = data.data.map(item => {
      // Strapi v5: flat response (no .attributes wrapper)
      // Strapi v4: nested .attributes
      const attrs = item.attributes ?? item
      return {
        id: item.id,
        documentId: attrs.documentId ?? item.documentId ?? String(item.id),
        name: attrs.name,
        email: attrs.email,
        phone: attrs.phone,
        message: attrs.message,
        read: attrs.read ?? false,
        createdAt: attrs.createdAt ?? item.createdAt,
      }
    })
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

async function selectSubmission(item) {
  selectedId.value = item.id
}

async function markRead(item) {
  try {
    await auth.apiFetch(`/api/contact-submissions/${item.documentId}`, {
      method: 'PUT',
      body: JSON.stringify({ data: { read: true } }),
    })
    const idx = submissions.value.findIndex(s => s.id === item.id)
    if (idx !== -1) submissions.value[idx].read = true
  } catch {
    // non-critical, ignore
  }
}

async function toggleRead(item) {
  const newValue = !item.read
  try {
    await auth.apiFetch(`/api/contact-submissions/${item.documentId}`, {
      method: 'PUT',
      body: JSON.stringify({ data: { read: newValue } }),
    })
    const idx = submissions.value.findIndex(s => s.id === item.id)
    if (idx !== -1) submissions.value[idx].read = newValue
  } catch (err) {
    alert('Status konnte nicht geändert werden: ' + err.message)
  }
}

async function deleteSubmission(item) {
  try {
    await auth.apiFetch(`/api/contact-submissions/${item.documentId}`, { method: 'DELETE' })
    submissions.value = submissions.value.filter(s => s.id !== item.id)
    if (selectedId.value === item.id) selectedId.value = null
    deleteConfirmId.value = null
  } catch (err) {
    alert('Löschen fehlgeschlagen: ' + err.message)
  }
}

function logout() {
  auth.logout()
  router.push('/admin/login')
}

function formatDate(dateStr) {
  if (!dateStr) return '—'
  return new Date(dateStr).toLocaleString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

onMounted(load)
</script>

<template>
  <div class="admin-layout">
    <!-- ── Sidebar ───────────────────────────────────────── -->
    <aside class="sidebar" aria-label="Verwaltungsmenü">
      <div class="sidebar-header">
        <div class="sidebar-brand">
          <img src="/logo.png" alt="OS InfraTec GmbH" class="sidebar-logo" />
          <p class="brand-role">Admin</p>
        </div>
      </div>

      <nav class="sidebar-nav" aria-label="Admin-Navigation">
        <a href="#" class="nav-item nav-item--active" aria-current="page">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <span>Posteingang</span>
          <span v-if="unreadCount > 0" class="nav-badge" aria-label="{{ unreadCount }} ungelesen">
            {{ unreadCount }}
          </span>
        </a>
      </nav>

      <div class="sidebar-footer">
        <div class="user-info" v-if="auth.user">
          <div class="user-avatar" aria-hidden="true">
            {{ (auth.user.username || auth.user.email || '?')[0].toUpperCase() }}
          </div>
          <div class="user-meta">
            <p class="user-name">{{ auth.user.username || 'Admin' }}</p>
            <p class="user-email">{{ auth.user.email }}</p>
          </div>
        </div>
        <button class="btn-logout" @click="logout" aria-label="Abmelden">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Abmelden
        </button>
      </div>
    </aside>

    <!-- ── Main ──────────────────────────────────────────── -->
    <div class="main-area">
      <!-- Top bar -->
      <header class="topbar">
        <div>
          <h1 class="topbar-title">Posteingang</h1>
          <p class="topbar-sub">
            {{ submissions.length }} {{ submissions.length === 1 ? 'Anfrage' : 'Anfragen' }}
            <span v-if="unreadCount > 0" class="topbar-unread">&nbsp;· {{ unreadCount }} ungelesen</span>
          </p>
        </div>
        <button class="btn-refresh" @click="load" :disabled="loading" aria-label="Aktualisieren">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            :class="{ 'spin': loading }" aria-hidden="true">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
        </button>
      </header>

      <!-- Filters -->
      <div class="filters-bar">
        <div class="search-wrapper">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="search-icon" aria-hidden="true">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Name, E-Mail oder Nachricht suchen…"
            class="search-input"
            aria-label="Anfragen durchsuchen"
          >
        </div>
        <div class="filter-tabs" role="group" aria-label="Filter">
          <button
            v-for="tab in [{ value: 'all', label: 'Alle' }, { value: 'unread', label: 'Ungelesen' }, { value: 'read', label: 'Gelesen' }]"
            :key="tab.value"
            :class="['filter-tab', { 'filter-tab--active': filterRead === tab.value }]"
            :aria-pressed="filterRead === tab.value"
            @click="filterRead = tab.value"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Content area -->
      <div class="content-split">
        <!-- List panel -->
        <section class="list-panel" aria-label="Anfragenliste">
          <!-- Loading -->
          <div v-if="loading" class="state-center" aria-live="polite" aria-busy="true">
            <div class="big-spinner" aria-hidden="true" />
            <p class="state-text">Anfragen werden geladen…</p>
          </div>

          <!-- Error -->
          <div v-else-if="error" class="state-center error-state" role="alert">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p class="state-text">{{ error }}</p>
            <button class="btn-sm btn-primary" @click="load">Erneut versuchen</button>
          </div>

          <!-- Empty -->
          <div v-else-if="filtered.length === 0" class="state-center" aria-live="polite">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="empty-icon" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <p class="state-text state-text--muted">
              {{ searchQuery || filterRead !== 'all' ? 'Keine Ergebnisse gefunden.' : 'Noch keine Anfragen vorhanden.' }}
            </p>
          </div>

          <!-- List -->
          <ul v-else class="submission-list" role="list">
            <li
              v-for="item in filtered"
              :key="item.id"
              :class="['submission-item', {
                'submission-item--active': selectedId === item.id,
                'submission-item--unread': !item.read
              }]"
              role="button"
              tabindex="0"
              :aria-selected="selectedId === item.id"
              :aria-label="`Anfrage von ${item.name}, ${item.read ? 'gelesen' : 'ungelesen'}`"
              @click="selectSubmission(item)"
              @keydown.enter.space.prevent="selectSubmission(item)"
            >
              <div class="item-left">
                <div class="item-avatar" aria-hidden="true">
                  {{ (item.name || '?')[0].toUpperCase() }}
                </div>
                <div class="unread-dot" v-if="!item.read" aria-hidden="true" />
              </div>
              <div class="item-content">
                <div class="item-row">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-date">{{ formatDate(item.createdAt) }}</span>
                </div>
                <p class="item-email">{{ item.email }}</p>
                <p class="item-preview">{{ item.message }}</p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Detail panel -->
        <section class="detail-panel" aria-label="Anfragedetails" aria-live="polite">
          <!-- Placeholder -->
          <div v-if="!selected" class="state-center detail-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
              class="empty-icon" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <p class="state-text state-text--muted">Anfrage auswählen, um Details anzuzeigen.</p>
          </div>

          <!-- Detail -->
          <div v-else class="detail-content">
            <div class="detail-header">
              <div class="detail-avatar" aria-hidden="true">
                {{ (selected.name || '?')[0].toUpperCase() }}
              </div>
              <div class="detail-meta">
                <h2 class="detail-name">{{ selected.name }}</h2>
                <p class="detail-date">{{ formatDate(selected.createdAt) }}</p>
              </div>
              <!-- Toggle read/unread -->
              <button
                v-if="deleteConfirmId !== selected.documentId"
                :class="['btn-icon', selected.read ? 'btn-read-active' : 'btn-read-ghost']"
                :aria-label="selected.read ? 'Als ungelesen markieren' : 'Als gelesen markieren'"
                :title="selected.read ? 'Als ungelesen markieren' : 'Als gelesen markieren'"
                @click="toggleRead(selected)"
              >
                <!-- Envelope open (read) -->
                <svg v-if="selected.read" width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6z"/>
                  <polyline points="22,10 12,17 2,10"/>
                </svg>
                <!-- Envelope closed (unread) -->
                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </button>

              <!-- Delete button -->
              <button
                v-if="deleteConfirmId !== selected.documentId"
                class="btn-icon btn-danger-ghost"
                aria-label="Anfrage löschen"
                @click="deleteConfirmId = selected.documentId"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/>
                  <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                </svg>
              </button>
              <!-- Confirm delete -->
              <div v-else class="delete-confirm" role="group" aria-label="Löschen bestätigen">
                <span class="delete-confirm-label">Wirklich löschen?</span>
                <button class="btn-sm btn-danger" @click="deleteSubmission(selected)">Ja</button>
                <button class="btn-sm btn-ghost" @click="deleteConfirmId = null">Abbrechen</button>
              </div>
            </div>

            <!-- Contact details -->
            <dl class="detail-fields">
              <div class="detail-field">
                <dt class="field-dt">E-Mail</dt>
                <dd class="field-dd">
                  <a :href="`mailto:${selected.email}`" class="field-link">{{ selected.email }}</a>
                </dd>
              </div>
              <div v-if="selected.phone" class="detail-field">
                <dt class="field-dt">Telefon</dt>
                <dd class="field-dd">
                  <a :href="`tel:${selected.phone}`" class="field-link">{{ selected.phone }}</a>
                </dd>
              </div>
              <div class="detail-field">
                <dt class="field-dt">Status</dt>
                <dd class="field-dd">
                  <span :class="['status-badge', selected.read ? 'status-badge--read' : 'status-badge--unread']">
                    {{ selected.read ? 'Gelesen' : 'Ungelesen' }}
                  </span>
                </dd>
              </div>
            </dl>

            <!-- Message -->
            <div class="detail-message">
              <p class="message-label">Nachricht</p>
              <div class="message-body" lang="de">{{ selected.message }}</div>
            </div>

            <!-- Actions -->
            <div class="detail-actions">
              <a
                :href="`mailto:${selected.email}?subject=Re: Ihre Anfrage bei OS InfraTec GmbH`"
                class="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Antworten
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ── Layout ─────────────────────────────────────────────── */
.admin-layout {
  display: flex;
  min-height: 100dvh;
  background: var(--background-soft);
  font-family: 'Inter', 'Manrope', sans-serif;
}

/* ── Sidebar ────────────────────────────────────────────── */
.sidebar {
  width: 260px;
  min-height: 100dvh;
  background: var(--primary);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 0;
}

.sidebar-header {
  padding: var(--space-5) var(--space-5) var(--space-4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
}

.sidebar-logo {
  height: 40px;
  width: auto;
  max-width: 160px;
  object-fit: contain;
  display: block;
  filter: brightness(0) invert(1);
}

.sidebar-icon {
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.brand-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.brand-role {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* ── Sidebar Nav ────────────────────────────────────────── */
.sidebar-nav {
  flex: 1;
  padding: var(--space-4) var(--space-3);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: 10px var(--space-3);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: background var(--transition), color var(--transition);
  min-height: 44px;
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.nav-item--active {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.nav-badge {
  margin-left: auto;
  background: #fff;
  color: var(--primary);
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 99px;
  min-width: 24px;
  text-align: center;
}

/* ── Sidebar Footer ─────────────────────────────────────── */
.sidebar-footer {
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
}

.user-avatar {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.user-name {
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-email {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.55);
  margin: 2px 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-logout {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.85rem;
  font-weight: 500;
  font-family: inherit;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px var(--space-3);
  border-radius: 6px;
  transition: background var(--transition), color var(--transition);
  min-height: 44px;
  width: 100%;
}

.btn-logout:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* ── Main Area ──────────────────────────────────────────── */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* ── Topbar ─────────────────────────────────────────────── */
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6);
  background: #fff;
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

.topbar-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text);
  margin: 0;
}

.topbar-sub {
  font-size: 0.82rem;
  color: var(--text-light);
  margin: 2px 0 0;
}

.topbar-unread {
  color: var(--primary);
  font-weight: 600;
}

.btn-refresh {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-soft);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-light);
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
}

.btn-refresh:hover:not(:disabled) {
  background: var(--primary-light);
  color: var(--primary);
}

.btn-refresh:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Filters ────────────────────────────────────────────── */
.filters-bar {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-6);
  background: #fff;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
  flex-shrink: 0;
}

.search-wrapper {
  position: relative;
  flex: 1;
  min-width: 200px;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-light);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 9px 12px 9px 38px;
  font-size: 0.88rem;
  font-family: inherit;
  color: var(--text);
  background: var(--background-soft);
  border: 1.5px solid var(--border);
  border-radius: 8px;
  outline: none;
  min-height: 40px;
  transition: border-color var(--transition);
}

.search-input:focus {
  border-color: var(--primary);
  background: #fff;
}

.filter-tabs {
  display: flex;
  gap: var(--space-1);
  background: var(--background-soft);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 3px;
}

.filter-tab {
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 500;
  font-family: inherit;
  color: var(--text-light);
  background: none;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  min-height: 36px;
  transition: background var(--transition), color var(--transition);
}

.filter-tab:hover {
  color: var(--text);
}

.filter-tab--active {
  background: #fff;
  color: var(--primary);
  font-weight: 600;
  box-shadow: 0 1px 4px rgba(3, 42, 99, 0.08);
}

/* ── Content split ──────────────────────────────────────── */
.content-split {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden;
}

/* ── List Panel ─────────────────────────────────────────── */
.list-panel {
  width: 380px;
  min-width: 280px;
  border-right: 1px solid var(--border);
  overflow-y: auto;
  background: #fff;
  flex-shrink: 0;
}

/* ── States ─────────────────────────────────────────────── */
.state-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-8) var(--space-5);
  text-align: center;
  height: 100%;
  min-height: 200px;
}

.state-center.error-state {
  color: var(--danger);
}

.empty-icon {
  color: var(--border);
}

.state-text {
  font-size: 0.9rem;
  color: var(--text);
  margin: 0;
}

.state-text--muted {
  color: var(--text-light);
}

/* ── Spinner ────────────────────────────────────────────── */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.spin {
  animation: spin 0.7s linear infinite;
}

.big-spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* ── Submission List ────────────────────────────────────── */
.submission-list {
  list-style: none;
}

.submission-item {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-4);
  cursor: pointer;
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
  position: relative;
}

.submission-item:hover {
  background: var(--background-soft);
}

.submission-item--active {
  background: var(--primary-light) !important;
  border-left: 3px solid var(--primary);
}

.item-left {
  position: relative;
  flex-shrink: 0;
}

.item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95rem;
}

.submission-item--active .item-avatar {
  background: var(--primary);
  color: #fff;
}

.unread-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 10px;
  height: 10px;
  background: var(--primary);
  border-radius: 50%;
  border: 2px solid #fff;
}

.item-content {
  flex: 1;
  min-width: 0;
}

.item-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-2);
  margin-bottom: 2px;
}

.item-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.submission-item--unread .item-name {
  font-weight: 700;
}

.item-date {
  font-size: 0.72rem;
  color: var(--text-light);
  white-space: nowrap;
  flex-shrink: 0;
}

.item-email {
  font-size: 0.8rem;
  color: var(--text-light);
  margin: 0 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-preview {
  font-size: 0.82rem;
  color: var(--text-light);
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── Detail Panel ───────────────────────────────────────── */
.detail-panel {
  flex: 1;
  overflow-y: auto;
  background: var(--background-soft);
  min-width: 0;
}

.detail-placeholder {
  min-height: calc(100dvh - 200px);
}

.detail-content {
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-6);
}

.detail-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-5);
}

.detail-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.detail-meta {
  flex: 1;
  min-width: 0;
}

.detail-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 2px;
}

.detail-date {
  font-size: 0.82rem;
  color: var(--text-light);
  margin: 0;
}

/* Delete confirm */
.delete-confirm {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.delete-confirm-label {
  font-size: 0.82rem;
  color: var(--danger);
  white-space: nowrap;
}

.btn-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;
}

.btn-danger-ghost {
  background: none;
  color: var(--text-light);
}

.btn-danger-ghost:hover {
  background: #fef2f2;
  color: var(--danger);
}

.btn-read-ghost {
  background: none;
  color: var(--text-light);
}

.btn-read-ghost:hover {
  background: var(--primary-light);
  color: var(--primary);
}

.btn-read-active {
  background: var(--primary-light);
  color: var(--primary);
}

.btn-read-active:hover {
  background: var(--secondary);
  color: var(--text);
}

.btn-sm {
  padding: 6px 14px;
  font-size: 0.82rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  min-height: 36px;
  transition: background var(--transition);
}

.btn-sm.btn-primary {
  background: var(--primary);
  color: #fff;
}

.btn-sm.btn-primary:hover {
  background: var(--primary-hover);
}

.btn-sm.btn-danger {
  background: var(--danger);
  color: #fff;
}

.btn-sm.btn-danger:hover {
  background: #b91c1c;
}

.btn-sm.btn-ghost {
  background: var(--border);
  color: var(--text);
}

.btn-sm.btn-ghost:hover {
  background: var(--secondary);
}

/* ── Detail Fields ──────────────────────────────────────── */
.detail-fields {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-5);
  margin-bottom: var(--space-5);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: var(--space-4);
}

.detail-field {}

.field-dt {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 4px;
}

.field-dd {
  font-size: 0.9rem;
  color: var(--text);
  margin: 0;
}

.field-link {
  color: var(--primary);
  text-decoration: none;
}

.field-link:hover {
  text-decoration: underline;
}

.status-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 600;
}

.status-badge--read {
  background: #dcfce7;
  color: #16a34a;
}

.status-badge--unread {
  background: var(--primary-light);
  color: var(--primary);
}

/* ── Detail Message ─────────────────────────────────────── */
.detail-message {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: var(--space-5);
  margin-bottom: var(--space-5);
}

.message-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-light);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 var(--space-3);
}

.message-body {
  font-size: 0.95rem;
  color: var(--text);
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
}

/* ── Actions ────────────────────────────────────────────── */
.detail-actions {
  display: flex;
  gap: var(--space-3);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 11px 22px;
  background: var(--primary);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  min-height: 44px;
  transition: background var(--transition), transform var(--transition);
}

.btn-primary:hover {
  background: var(--primary-hover);
  transform: translateY(-1px);
}

/* ── Responsive ─────────────────────────────────────────── */
@media (max-width: 1023px) {
  .sidebar {
    width: 220px;
  }
  .list-panel {
    width: 300px;
  }
}

@media (max-width: 767px) {
  .admin-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    min-height: auto;
    position: relative;
  }

  .sidebar-nav {
    display: flex;
    padding: var(--space-3);
  }

  .sidebar-footer {
    display: none;
  }

  .content-split {
    flex-direction: column;
    overflow: visible;
  }

  .list-panel {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border);
    max-height: 50dvh;
  }

  .detail-panel {
    min-height: 50dvh;
  }

  .detail-content {
    padding: var(--space-4);
  }

  .filters-bar {
    padding: var(--space-3) var(--space-4);
  }

  .topbar {
    padding: var(--space-4);
  }
}
</style>
