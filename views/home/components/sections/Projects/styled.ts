'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

export const ProjectItem = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0 1.4rem;
  padding: 1.2rem 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
  cursor: pointer;
  align-items: start;

  &:hover {
    background: ${colors.surface};
    border-color: ${colors.accent};
  }
`

export const ExpandIcon = styled.span`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  color: ${colors.textMuted};
  opacity: 0.3;
  font-size: 0.85rem;
  line-height: 1;
  transition: color 0.15s ease, opacity 0.15s ease;
  pointer-events: none;

  ${ProjectItem}:hover & {
    color: ${colors.accent};
    opacity: 1;
  }
`

export const ProjectThumb = styled.div`
  width: 120px;
  aspect-ratio: 16 / 10;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid ${colors.border};
  flex-shrink: 0;
  background: ${colors.surface2};
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 1.4rem;
  color: ${colors.border};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const ProjectContent = styled.div``

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`

export const ProjectTitle = styled.span`
  font-size: 0.97rem;
  font-weight: 600;
  color: ${colors.textStrong};
  transition: color 0.2s;

  ${ProjectItem}:hover & {
    color: ${colors.accent};
  }
`

export const ProjectDesc = styled.p`
  font-size: 0.85rem;
  color: ${colors.textMuted};
  line-height: 1.6;
  margin-bottom: 0.8rem;
`

export const ResultsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
`

export const ProjectTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`

export const ArchiveLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 2rem;
  font-family: var(--mono);
  font-size: 0.8rem;
  font-weight: 600;
  color: ${colors.textMuted};
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s, gap 0.2s;
  padding: 0 1rem;

  &:hover {
    color: ${colors.accent};
    gap: 0.7rem;
  }
`
