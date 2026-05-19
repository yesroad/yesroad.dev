'use client'

import { LabelWrapper, LabelText, LabelLine } from './styled'

interface SectionLabelProps {
  children: React.ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <LabelWrapper>
      <LabelText>{children}</LabelText>
      <LabelLine />
    </LabelWrapper>
  )
}
