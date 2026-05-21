'use client'

import { useState } from 'react'
import type { Project } from '@/types'

export function useArchiveView() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const openModal = (project: Project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

  return {
    selectedProject,
    openModal,
    closeModal,
  }
}
