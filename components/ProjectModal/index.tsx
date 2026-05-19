'use client'

import * as Dialog from '@radix-ui/react-dialog'
import type { Project } from '@/types'
import { CompanyBadge } from '@/components/ui/CompanyBadge'
import { ResultBadge } from '@/components/ui/ResultBadge'
import { Tag } from '@/components/ui/Tag'
import {
  Overlay,
  Content,
  CloseButton,
  MetaRow,
  ModalTitle,
  StorySection,
  ResultsList,
  TagList,
} from './styled'

interface ProjectModalProps {
  project: Project
  content: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProjectModal({ project, content, open, onOpenChange }: ProjectModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Overlay />
        <Content aria-describedby={undefined}>
          <CloseButton aria-label="닫기">×</CloseButton>
          <MetaRow>
            <CompanyBadge personal={project.type === 'personal'}>{project.company}</CompanyBadge>
          </MetaRow>
          <ModalTitle>{project.title}</ModalTitle>
          <StorySection>{content}</StorySection>
          <ResultsList>
            {project.results.map((r) => (
              <ResultBadge key={r}>{r}</ResultBadge>
            ))}
          </ResultsList>
          <TagList>
            {project.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </TagList>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
