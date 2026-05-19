'use client'

import { useState, useEffect } from 'react'

const NAV_SECTIONS = ['about', 'skills', 'experience', 'projects', 'contact'] as const
export type NavSection = (typeof NAV_SECTIONS)[number]

export function useNavHighlighter() {
  const [activeSection, setActiveSection] = useState<NavSection>('about')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { rootMargin: '-10% 0px -55% 0px', threshold: 0 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    // 페이지 하단에 도달하면 contact 강제 활성화
    const handleScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
      if (scrolledToBottom) {
        setActiveSection('contact')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observers.forEach((o) => o.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { activeSection }
}
