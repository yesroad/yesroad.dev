import { readFileSync } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export async function getProjectContent(slug: string): Promise<React.ReactNode> {
  const filePath = path.join(process.cwd(), 'content/projects', `${slug}.mdx`)
  const source = readFileSync(filePath, 'utf-8')
  const { content } = await compileMDX({ source })
  return content
}
