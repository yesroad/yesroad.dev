'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiArrowRight, FiMaximize2, FiCode } from 'react-icons/fi'
import type { Project } from '@/types'
import { ProjectModal } from '@/components/ProjectModal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { CompanyBadge } from '@/components/ui/CompanyBadge'
import {
  ProjectList,
  ProjectItem,
  ProjectThumb,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  ProjectDesc,
  ProjectTagList,
  ArchiveLink,
  ExpandIcon,
} from './styled'

interface ProjectsSectionProps {
  projects: Project[]
  projectContents: Record<string, React.ReactNode>
}

export function ProjectsSection({ projects, projectContents }: ProjectsSectionProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section id="projects">
      <SectionLabel>Projects</SectionLabel>
      <ProjectList>
        {featuredProjects.map((project) => (
          <ProjectItem key={project.slug} onClick={() => setSelectedProject(project)}>
            <ExpandIcon aria-hidden>
              <FiMaximize2 size={13} />
            </ExpandIcon>
            <ProjectThumb>
              {project.thumb ? (
                <Image src={project.thumb} alt={project.title} width={120} height={75} />
              ) : (
                <FiCode size={28} />
              )}
            </ProjectThumb>
            <ProjectContent>
              <ProjectHeader>
                <ProjectTitle>{project.title}</ProjectTitle>
                <CompanyBadge personal={project.type === 'personal'}>{project.company}</CompanyBadge>
              </ProjectHeader>
              <ProjectDesc>{project.desc}</ProjectDesc>
              <ProjectTagList>
                {project.previewTags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ProjectTagList>
            </ProjectContent>
          </ProjectItem>
        ))}
      </ProjectList>

      <ArchiveLink href="/projects">
        전체 프로젝트 보기
        <FiArrowRight size={14} />
      </ArchiveLink>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          content={projectContents[selectedProject.slug]}
          open={!!selectedProject}
          onOpenChange={(open) => { if (!open) setSelectedProject(null) }}
        />
      )}
    </section>
  )
}
