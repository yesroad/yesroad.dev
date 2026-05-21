'use client'

import styled from '@emotion/styled'
import { colors } from '@/styles/tokens'

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const HeadRow = styled.tr``

export const HeadCell = styled.th`
  font-family: var(--mono);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${colors.textMuted};
  text-align: left;
  padding: 0 1rem 1rem 0;
  border-bottom: 1px solid ${colors.border};

  &:first-of-type {
    padding-left: 0.85rem;
  }

  &:last-child {
    padding-right: 0.85rem;
  }
`

export const BodyRow = styled.tr`
  border-bottom: 1px solid ${colors.border};
  transition: background 0.15s;
  cursor: pointer;

  &:hover {
    background: ${colors.surface};
  }
`

export const Cell = styled.td`
  padding: 1rem 1rem 1rem 0;
  vertical-align: top;

  &:last-child {
    padding-right: 0;
  }
`

export const YearCell = styled(Cell)`
  font-family: var(--mono);
  font-size: 0.78rem;
  color: ${colors.textMuted};
  white-space: nowrap;
  width: 4.5rem;
  padding-top: 1.1rem;
  padding-left: 0.85rem;
`

export const CompanyCell = styled(Cell)`
  width: 9rem;
  padding-top: 1rem;
`

export const ProjectCell = styled(Cell)`
  min-width: 200px;
`

export const TagCell = styled(Cell)`
  width: 40%;

  @media (max-width: 640px) {
    display: none;
  }
`

export const ProjectName = styled.div`
  font-size: 0.92rem;
  font-weight: 600;
  color: ${colors.textStrong};
  margin-bottom: 0.3rem;
  transition: color 0.2s;

  ${BodyRow}:hover & {
    color: ${colors.accent};
  }
`

export const ProjectSummary = styled.div`
  font-size: 0.8rem;
  color: ${colors.textMuted};
  line-height: 1.5;
`

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding-top: 0.6rem;
`

export const ExpandCell = styled(Cell)`
  width: 2rem;
  text-align: right;
  vertical-align: top;
  color: ${colors.textMuted};
  font-size: 0.85rem;
  opacity: 0.3;
  transition: color 0.15s ease, opacity 0.15s ease;
  white-space: nowrap;
  padding-right: 0.85rem;

  &:last-child {
    padding-right: 0.85rem;
  }

  ${BodyRow}:hover & {
    color: ${colors.accent};
    opacity: 1;
  }
`
