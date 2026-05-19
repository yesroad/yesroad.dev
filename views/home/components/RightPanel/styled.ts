'use client'

import styled from '@emotion/styled'

export const Main = styled.main`
  padding: 5rem 4rem 8rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
    gap: 4rem;
  }
`
