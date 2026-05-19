'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const BadgeItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: ${colors.textStrong};
  background: color-mix(in srgb, var(--accent) 7%, transparent);
  border-radius: 4px;
  padding: 0.25rem 0.6rem;

  &::before {
    content: '✓';
    color: ${colors.accent};
    font-weight: 700;
    flex-shrink: 0;
  }
`
