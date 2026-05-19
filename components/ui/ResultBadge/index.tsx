'use client'

import { BadgeItem } from './styled'

interface ResultBadgeProps {
  children: React.ReactNode
}

export function ResultBadge({ children }: ResultBadgeProps) {
  return <BadgeItem>{children}</BadgeItem>
}
