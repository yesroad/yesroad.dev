'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { Tag } from '@/components/ui/Tag'
import { SkillsGroups, SkillGroup, SkillGroupLabel, SkillTags } from './styled'

const SKILL_GROUPS = [
  {
    label: 'Language',
    skills: ['JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'TanStack Query', 'Jotai', 'Recoil', 'Emotion'],
  },
  {
    label: 'Tooling',
    skills: ['Turborepo', 'Storybook', 'Git', 'Jenkins'],
  },
  {
    label: 'Infra',
    skills: ['AWS S3'],
  },
] as const

export function SkillsSection() {
  return (
    <section id="skills">
      <SectionLabel>Skills</SectionLabel>
      <SkillsGroups>
        {SKILL_GROUPS.map(({ label, skills }) => (
          <SkillGroup key={label}>
            <SkillGroupLabel>{label}</SkillGroupLabel>
            <SkillTags>
              {skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </SkillTags>
          </SkillGroup>
        ))}
      </SkillsGroups>
    </section>
  )
}
