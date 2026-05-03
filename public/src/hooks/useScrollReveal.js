import { useEffect, useRef } from 'react'

/**
 * IntersectionObserver hook that adds the `is-visible` class
 * when the element enters the viewport. Pairs with `.reveal` CSS class.
 */
export default function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  once = true,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    /* Respect reduced-motion: reveal immediately */
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionQuery.matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
