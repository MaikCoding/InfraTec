import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../stores/auth.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: () => import('../views/ImpressumView.vue'),
  },
  {
    path: '/datenschutz',
    name: 'datenschutz',
    component: () => import('../views/DatenschutzView.vue'),
  },
  // ── Admin ──────────────────────────────────────────────────────────────────
  {
    path: '/admin',
    redirect: '/admin/dashboard',
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/AdminLoginView.vue'),
    meta: { requiresGuest: true },
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('../views/AdminDashboardView.vue'),
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

// ── Navigation Guards ──────────────────────────────────────────────────────
router.beforeEach(async (to) => {
  // Protected admin routes: validate session if token exists
  if (to.meta.requiresAuth) {
    if (!auth.isAuthenticated) {
      return { name: 'admin-login', query: { redirect: to.fullPath } }
    }
    // Lazy-load user info if missing (page reload)
    if (!auth.user) {
      const valid = await auth.restoreSession()
      if (!valid) {
        return { name: 'admin-login', query: { redirect: to.fullPath } }
      }
    }
  }

  // Guest-only routes: redirect logged-in users to dashboard
  if (to.meta.requiresGuest && auth.isAuthenticated) {
    return { name: 'admin-dashboard' }
  }
})

export default router
