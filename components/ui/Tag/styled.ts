'use client'

import styled from '@emotion/styled'
import { colors, typography } from '@/styles/tokens'

export const TagItem = styled.span`
  display: inline-block;
  ${typography.tag}
  color: ${colors.accent};
  background: color-mix(in srgb, var(--accent) 8%, transparent);
  border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
  border-radius: 5px;
  padding: 0.25rem 0.65rem;
  font-family: var(--mono);
  transition: color 0.2s, background 0.2s, border-color 0.2s;
`
