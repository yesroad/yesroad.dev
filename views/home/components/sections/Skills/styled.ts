'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const SkillsGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const SkillGroup = styled.div``

export const SkillGroupLabel = styled.div`
  font-family: var(--mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  margin-bottom: 0.6rem;
`

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`
