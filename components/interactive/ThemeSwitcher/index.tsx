'use client'

import { FiMoon, FiSun } from 'react-icons/fi'
import { useThemeSwitcher } from './useThemeSwitcher'
import { ToggleWrapper, ToggleBtn, ToggleLabel } from './styled'

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
        {isDark ? <FiMoon size={13} /> : <FiSun size={13} />}
      </ToggleBtn>
      <ToggleLabel>{isDark ? 'Dark' : 'Light'}</ToggleLabel>
    </ToggleWrapper>
  )
}
