'use client'

import type { Project } from '@/types'
import { Tag } from '@/components/ui/Tag'
import { CompanyBadge } from '@/components/ui/CompanyBadge'
import {
  Table,
  TableHead,
  TableBody,
  HeadRow,
  HeadCell,
  BodyRow,
  YearCell,
  CompanyCell,
  ProjectCell,
  TagCell,
  ProjectName,
  ProjectSummary,
  TagList,
  ExpandCell,
} from './styled'

interface ArchiveTableProps {
  projects: Project[]
  onRowClick: (project: Project) => void
}

export function ArchiveTable({ projects, onRowClick }: ArchiveTableProps) {
  return (
    <Table>
      <TableHead>
        <HeadRow>
          <HeadCell>연도</HeadCell>
          <HeadCell>소속</HeadCell>
          <HeadCell>프로젝트</HeadCell>
          <HeadCell>기술 스택</HeadCell>
          <HeadCell />
        </HeadRow>
      </TableHead>
      <TableBody>
        {projects.map((project) => (
          <BodyRow key={project.slug} onClick={() => onRowClick(project)}>
            <YearCell>{project.year}</YearCell>
            <CompanyCell>
              <CompanyBadge personal={project.type === 'personal'}>{project.company}</CompanyBadge>
            </CompanyCell>
            <ProjectCell>
              <ProjectName>{project.title}</ProjectName>
              <ProjectSummary>{project.desc}</ProjectSummary>
            </ProjectCell>
            <TagCell>
              <TagList>
                {project.previewTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagList>
            </TagCell>
            <ExpandCell aria-hidden>⤢</ExpandCell>
          </BodyRow>
        ))}
      </TableBody>
    </Table>
  )
}
