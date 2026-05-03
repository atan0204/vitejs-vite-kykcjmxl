import { useEffect, useRef } from 'react'

/**
 * Sets a `--parallax-y` CSS variable on the element based on
 * scroll position. Pairs with the `.parallax` CSS class.
 */
export default function useParallax({ speed = 0.3, max = 200 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* Respect reduced-motion: no parallax */
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) return

    let rafId = null

    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const viewportCenter = window.innerHeight / 2
        const elCenter = rect.top + rect.height / 2
        const offset = (elCenter - viewportCenter) * speed
        const clamped = Math.max(-max, Math.min(max, offset))
        el.style.setProperty('--parallax-y', `${clamped}px`)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial position

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [speed, max])

  return ref
}
