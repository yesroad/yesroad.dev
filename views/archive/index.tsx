'use client'

import styled from '@emotion/styled'
import { FiArrowLeft } from 'react-icons/fi'
import type { Project } from '@/types'
import { colors } from '@/styles/tokens'
import { ProjectModal } from '@/components/ProjectModal'
import { ArchiveTable } from './components/ArchiveTable'
import { useArchiveView } from './useArchiveView'

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 4rem 8rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 4rem 2rem 6rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1.2rem 6rem;
  }
`

const BackLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: ${colors.textMuted};
  text-decoration: none;
  letter-spacing: 0.04em;
  margin-bottom: 3rem;
  transition: color 0.2s, gap 0.2s;

  &:hover {
    color: ${colors.accent};
    gap: 0.7rem;
  }
`

const PageHeader = styled.div`
  margin-bottom: 3.5rem;
`

const PageEyebrow = styled.div`
  font-family: var(--mono);
  font-size: 0.72rem;
  color: ${colors.accent};
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
`

const PageTitle = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: ${colors.textStrong};
  letter-spacing: -0.02em;
`

interface ArchiveViewProps {
  projects: Project[]
  projectContents: Record<string, React.ReactNode>
}

export function ArchiveView({ projects, projectContents }: ArchiveViewProps) {
  const { selectedProject, openModal, closeModal } = useArchiveView()

  return (
    <PageWrapper>
      <BackLink href="/">
        <FiArrowLeft size={13} />
        뒤로가기
      </BackLink>

      <PageHeader>
        <PageEyebrow>All Projects</PageEyebrow>
        <PageTitle>전체 프로젝트 아카이브</PageTitle>
      </PageHeader>

      <ArchiveTable projects={projects} onRowClick={openModal} />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          content={projectContents[selectedProject.slug]}
          open={!!selectedProject}
          onOpenChange={(open) => { if (!open) closeModal() }}
        />
      )}
    </PageWrapper>
  )
}
