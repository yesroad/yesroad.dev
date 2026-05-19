'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 0.95rem;
    color: ${colors.text};
    line-height: 1.7;
    margin: 0;
  }

  a {
    color: ${colors.text};
    border-bottom: 1px solid ${colors.border};
    text-decoration: none;
    transition: border-color 0.2s;

    &:hover {
      border-color: ${colors.accent};
    }
  }
`
