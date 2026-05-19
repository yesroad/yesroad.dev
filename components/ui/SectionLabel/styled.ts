'use client'

import styled from '@emotion/styled'
import { colors, typography } from '@/styles/tokens'

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`

export const LabelText = styled.span`
  ${typography.sectionLabel}
  text-transform: uppercase;
  color: ${colors.textMuted};
  white-space: nowrap;
`

export const LabelLine = styled.div`
  height: 1px;
  flex: 1;
  background: ${colors.border};
`
