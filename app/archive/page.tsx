import { projects } from '@/data/projects'
import { getProjectContent } from '@/lib/mdx'
import { ArchiveView } from '@/views/archive'

export default async function ArchivePage() {
  const projectContents: Record<string, React.ReactNode> = {}

  await Promise.all(
    projects.map(async (project) => {
      projectContents[project.slug] = await getProjectContent(project.slug)
    }),
  )

  return <ArchiveView projects={projects} projectContents={projectContents} />
}
