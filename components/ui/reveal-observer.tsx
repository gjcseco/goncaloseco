'use client'

import { useEffect } from 'react'

const READY_CLASS = 'reveal-ready'
const VISIBLE_CLASS = 'is-visible'

/**
 * Enables the scroll reveal for every `.reveal` element on the page.
 *
 * Elements already on screen are marked visible before the page switches to "reveal mode",
 * so nothing the visitor can already see ever blinks out. Without JavaScript this never runs
 * and all content stays visible.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add(VISIBLE_CLASS))
      return
    }

    const viewportHeight = window.innerHeight
    for (const el of elements) {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewportHeight && rect.bottom > 0) el.classList.add(VISIBLE_CLASS)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add(VISIBLE_CLASS)
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -40px 0px' },
    )

    elements.filter((el) => !el.classList.contains(VISIBLE_CLASS)).forEach((el) => observer.observe(el))
    root.classList.add(READY_CLASS)

    return () => {
      observer.disconnect()
      root.classList.remove(READY_CLASS)
    }
  }, [])

  return null
}
