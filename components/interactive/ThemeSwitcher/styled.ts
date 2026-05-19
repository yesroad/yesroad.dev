'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
`

export const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.border};
  background: ${colors.surface};
  color: ${colors.accent};
  cursor: pointer;
  padding: 0;
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${colors.accent};
  }

  svg {
    flex-shrink: 0;
  }
`

export const ToggleLabel = styled.span`
  font-family: var(--mono);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${colors.textMuted};
`
