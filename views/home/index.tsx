import { projects } from '@/data/projects'
import { experiences } from '@/data/experience'
import { getProjectContent } from '@/lib/mdx'
import { LeftPanel } from './components/LeftPanel'
import { RightPanel } from './components/RightPanel'

export async function HomeView() {
  const projectContents: Record<string, React.ReactNode> = {}

  await Promise.all(
    projects.map(async (project) => {
      projectContents[project.slug] = await getProjectContent(project.slug)
    }),
  )

  return (
    <div className="home-layout">
      <LeftPanel />
      <RightPanel
        experiences={experiences}
        projects={projects}
        projectContents={projectContents}
      />
    </div>
  )
}
