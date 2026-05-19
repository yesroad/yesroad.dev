'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const BadgeItem = styled.span<{ $personal?: boolean }>`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  font-family: var(--mono);
  color: ${({ $personal }) => ($personal ? colors.accentPersonal : colors.accent)};
  background: ${({ $personal }) =>
    $personal
      ? 'color-mix(in srgb, var(--accent-personal) 10%, transparent)'
      : 'color-mix(in srgb, var(--accent) 8%, transparent)'};
  border: 1px solid
    ${({ $personal }) =>
      $personal
        ? 'color-mix(in srgb, var(--accent-personal) 25%, transparent)'
        : 'color-mix(in srgb, var(--accent) 20%, transparent)'};
  border-radius: 4px;
  padding: 0.2rem 0.55rem;
  white-space: nowrap;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
`
