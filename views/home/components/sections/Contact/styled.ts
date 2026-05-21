'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 520px;
  margin: 1.5rem auto 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.9rem;
`

export const IconWrap = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  border-radius: 16px;
  background: ${colors.surface2};
  color: ${colors.text};
  transition: background 0.2s, color 0.2s, transform 0.2s;

  svg {
    width: 44px;
    height: 44px;
    fill: currentColor;
  }

  &:hover {
    background: color-mix(in srgb, var(--accent) 14%, transparent);
    color: ${colors.accent};
    transform: translateY(-2px);
  }
`

export const ItemLabel = styled.div`
  font-family: var(--mono);
  font-size: 0.7rem;
  color: ${colors.accent};
  letter-spacing: 0.12em;
  text-transform: uppercase;
`

export const ItemValue = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: ${colors.textMuted};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.2s;

  svg {
    width: 12px;
    height: 12px;
    stroke: currentColor;
    stroke-width: 1.6;
    fill: none;
  }

  &:hover {
    color: ${colors.accent};
  }
`
