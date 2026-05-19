'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const ContactCard = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`

export const ContactEyebrow = styled.div`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: ${colors.accent};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`

export const ContactTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${colors.textStrong};
  margin-bottom: 0.6rem;
`

export const ContactDesc = styled.p`
  font-size: 0.9rem;
  color: ${colors.textMuted};
  margin-bottom: 1.8rem;
  max-width: 380px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`

export const ContactLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`

export const ContactLink = styled.a<{ $variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.3rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;

  ${({ $variant }) =>
    $variant === 'primary'
      ? `
    background: var(--accent);
    color: #0f172a;
    &:hover { background: var(--accent-hover); }
  `
      : `
    border: 1px solid var(--border);
    color: var(--text-muted);
    &:hover { border-color: var(--accent); color: var(--accent); }
  `}
`
