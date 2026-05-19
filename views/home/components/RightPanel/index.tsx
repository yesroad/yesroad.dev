'use client'

import type { Project } from '@/types'
import type { Experience } from '@/types'
import { AboutSection } from '../sections/About'
import { SkillsSection } from '../sections/Skills'
import { ExperienceSection } from '../sections/Experience'
import { ProjectsSection } from '../sections/Projects'
import { ContactSection } from '../sections/Contact'
import { Main } from './styled'

interface RightPanelProps {
  experiences: Experience[]
  projects: Project[]
  projectContents: Record<string, React.ReactNode>
}

export function RightPanel({ experiences, projects, projectContents }: RightPanelProps) {
  return (
    <Main>
      <AboutSection />
      <SkillsSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} projectContents={projectContents} />
      <ContactSection />
    </Main>
  )
}
