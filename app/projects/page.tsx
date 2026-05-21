import { projects } from '@/data/projects'
import { getProjectContent } from '@/lib/mdx'
import { ProjectsView } from '@/views/projects'

export default async function ProjectsPage() {
  const projectContents: Record<string, React.ReactNode> = {}

  await Promise.all(
    projects.map(async (project) => {
      projectContents[project.slug] = await getProjectContent(project.slug)
    }),
  )

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.type !== b.type) return a.type === 'work' ? -1 : 1
    return Number(b.year) - Number(a.year)
  })

  return <ProjectsView projects={sortedProjects} projectContents={projectContents} />
}
