'use client'

import type { Experience } from '@/types'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { ExpList, ExpItem, ExpPeriod, ExpCompany, ExpRole, ExpDesc, ExpTags } from './styled'

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <section id="experience">
      <SectionLabel>Experience</SectionLabel>
      <ExpList>
        {experiences.map((exp) => (
          <ExpItem key={exp.company}>
            <ExpPeriod>{exp.period}</ExpPeriod>
            <ExpCompany>{exp.company}</ExpCompany>
            <ExpRole>{exp.role}</ExpRole>
            {exp.desc.map((line, i) => (
              <ExpDesc key={i}>{line}</ExpDesc>
            ))}
            {exp.tags && (
              <ExpTags>
                {exp.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </ExpTags>
            )}
          </ExpItem>
        ))}
      </ExpList>
    </section>
  )
}
