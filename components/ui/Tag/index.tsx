'use client'

import { TagItem } from './styled'

interface TagProps {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  return <TagItem>{children}</TagItem>
}
