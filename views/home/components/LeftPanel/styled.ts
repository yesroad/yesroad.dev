'use client'

import styled from '@emotion/styled'
import { colors, typography } from '@/styles/tokens'

export const Aside = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 5rem 3rem 5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: static;
    height: auto;
    padding: 3rem 1.5rem 2rem;
  }
`

export const LeftTop = styled.div``

export const Name = styled.h1`
  ${typography.name}
  color: ${colors.textStrong};
  margin-bottom: 0.5rem;
`

export const Role = styled.div`
  ${typography.title}
  color: ${colors.accent};
  font-family: var(--mono);
  margin-bottom: 1.2rem;
`

export const Tagline = styled.p`
  ${typography.tagline}
  color: ${colors.text};
  max-width: 280px;
`

export const Nav = styled.nav`
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavLink = styled.a<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  ${typography.navItem}
  text-transform: uppercase;
  color: ${({ $active }) => ($active ? colors.textStrong : colors.textMuted)};
  padding: 0.45rem 0;
  text-decoration: none;
  transition: color 0.2s;

  &::before {
    content: '';
    height: 1px;
    width: ${({ $active }) => ($active ? '4rem' : '2rem')};
    background: ${({ $active }) => ($active ? colors.textStrong : colors.textMuted)};
    transition: width 0.2s, background 0.2s;
  }

  &:hover {
    color: ${colors.textStrong};
    &::before {
      width: 4rem;
      background: ${colors.textStrong};
    }
  }
`

export const ResumeBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.5rem;
  ${typography.tag}
  color: ${colors.textMuted};
  border: 1px solid ${colors.border};
  border-radius: 6px;
  padding: 0.45rem 0.9rem;
  text-decoration: none;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${colors.accent};
    border-color: ${colors.accent};
  }
`

export const LeftBottom = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    ${typography.small}
    color: ${colors.textMuted};
    text-decoration: none;
    transition: color 0.2s;

    svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
      flex-shrink: 0;
    }

    &:hover {
      color: ${colors.accent};
    }
  }
`
