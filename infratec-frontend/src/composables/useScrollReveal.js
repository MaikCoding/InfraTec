import { onMounted, onUnmounted } from 'vue'

/**
 * Observes all [data-scroll] elements in the document and adds
 * the class `is-visible` when they enter the viewport.
 * Immediately marks all as visible when prefers-reduced-motion is set.
 */
export function useScrollReveal() {
  let observer = null

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const targets = document.querySelectorAll('[data-scroll]')

    if (prefersReducedMotion) {
      targets.forEach(el => el.classList.add('is-visible'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    targets.forEach(el => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())
}
