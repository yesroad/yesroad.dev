'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import {
  ContactCard,
  ContactEyebrow,
  ContactTitle,
  ContactDesc,
  ContactLinks,
  ContactLink,
} from './styled'

export function ContactSection() {
  return (
    <section id="contact">
      <SectionLabel>Contact</SectionLabel>
      <ContactCard>
        <ContactEyebrow>Get In Touch</ContactEyebrow>
        <ContactTitle>새로운 기회를 검토 중입니다.</ContactTitle>
        <ContactDesc>
          현재 이직을 준비하고 있습니다. 좋은 팀과 의미 있는 문제를 함께 풀고 싶습니다. 편하게 연락 주세요.
        </ContactDesc>
        <ContactLinks>
          <ContactLink $variant="primary" href="mailto:yesroad.dev@gmail.com">
            이메일 보내기 →
          </ContactLink>
          <ContactLink $variant="secondary" href="https://github.com/yesroad" target="_blank" rel="noreferrer">
            GitHub ↗
          </ContactLink>
        </ContactLinks>
      </ContactCard>
    </section>
  )
}
