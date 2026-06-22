import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Returns a reactive `progress` value (0–100) representing
 * how far the user has scrolled down the page.
 */
export function useScrollProgress() {
  const progress = ref(0)

  function update() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    progress.value = scrollable > 0 ? Math.min((window.scrollY / scrollable) * 100, 100) : 0
  }

  onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
  })

  onUnmounted(() => window.removeEventListener('scroll', update))

  return { progress }
}
