'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const ExpList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
`

export const ExpItem = styled.div``

export const ExpPeriod = styled.div`
  font-family: var(--mono);
  font-size: 0.72rem;
  color: ${colors.textMuted};
  margin-bottom: 0.3rem;
`

export const ExpCompany = styled.div`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${colors.textStrong};
  margin-bottom: 0.2rem;
`

export const ExpRole = styled.div`
  font-size: 0.8rem;
  color: ${colors.accent};
  font-family: var(--mono);
  margin-bottom: 1rem;
`

export const ExpDesc = styled.p`
  font-size: 0.88rem;
  color: ${colors.text};
  line-height: 1.7;
  margin-bottom: 0.6rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ExpTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.9rem;
`
