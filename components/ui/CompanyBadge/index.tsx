'use client'

import { BadgeItem } from './styled'

interface CompanyBadgeProps {
  children: React.ReactNode
  personal?: boolean
}

export function CompanyBadge({ children, personal }: CompanyBadgeProps) {
  return <BadgeItem $personal={personal}>{children}</BadgeItem>
}
