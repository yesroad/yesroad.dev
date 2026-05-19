export interface Project {
  slug: string
  title: string
  company: string
  year: string
  type: 'work' | 'personal'
  desc: string
  results: string[]
  tags: string[]
  previewTags: string[]
  thumb: string | null
  featured: boolean
}
