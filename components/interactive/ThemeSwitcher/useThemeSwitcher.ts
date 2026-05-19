'use client'

import { useState, useEffect, useCallback } from 'react'

export type ThemeMode = 'dark' | 'light'

function applyTheme(mode: ThemeMode) {
  if (mode === 'light') {
    document.documentElement.setAttribute('data-theme', 'indigo')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

export function useThemeSwitcher() {
  // SSR-safe: always start with 'dark' to match server render
  const [theme, setTheme] = useState<ThemeMode>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as ThemeMode | null
    const initial: ThemeMode = saved === 'light' ? 'light' : 'dark'
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemeMode = prev === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      localStorage.setItem('theme', next)
      return next
    })
  }, [])

  return { theme, toggleTheme }
}
