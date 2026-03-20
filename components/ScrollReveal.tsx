'use client'

import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    const observe = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      )
      document.querySelectorAll('.reveal:not(.in-view)').forEach((el) => observer.observe(el))
      return observer
    }

    // Initial observe after hydration
    const timer = setTimeout(() => {
      const obs = observe()
      return () => obs.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return null
}
