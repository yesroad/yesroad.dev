'use client'

import { useThemeSwitcher } from './useThemeSwitcher'
import { ToggleWrapper, ToggleBtn, ToggleLabel } from './styled'

function MoonIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeSwitcher()
  const isDark = theme === 'dark'

  return (
    <ToggleWrapper>
      <ToggleBtn
        onClick={toggleTheme}
        aria-label={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
        title={isDark ? 'Switch to Light' : 'Switch to Dark'}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </ToggleBtn>
      <ToggleLabel>{isDark ? 'Dark' : 'Light'}</ToggleLabel>
    </ToggleWrapper>
  )
}
