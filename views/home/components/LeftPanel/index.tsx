'use client'

import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { ThemeSwitcher } from '@/components/interactive/ThemeSwitcher'
import { useNavHighlighter } from '../NavHighlighter/useNavHighlighter'
import {
  Aside,
  LeftTop,
  Name,
  Role,
  Tagline,
  Nav,
  NavLink,
  LeftBottom,
  Socials,
} from './styled'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const

export function LeftPanel() {
  const { activeSection } = useNavHighlighter()

  return (
    <Aside>
      <LeftTop>
        <Name>김응길</Name>
        <Role>Frontend Developer</Role>
        <Nav>
          {NAV_ITEMS.map(({ id, label }) => (
            <NavLink key={id} href={`#${id}`} $active={activeSection === id}>
              {label}
            </NavLink>
          ))}
        </Nav>

        <ThemeSwitcher />
      </LeftTop>

      <LeftBottom>
        <Socials>
          <a href="https://github.com/yesroad" target="_blank" rel="noreferrer">
            <FaGithub size={18} />
            GitHub
          </a>
          <a href="mailto:yesroad.dev@gmail.com">
            <MdEmail size={18} />
            Email
          </a>
        </Socials>
      </LeftBottom>
    </Aside>
  )
}
