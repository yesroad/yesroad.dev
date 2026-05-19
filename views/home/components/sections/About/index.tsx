'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { AboutText } from './styled'

export function AboutSection() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <AboutText>
        <p>
          5년간 React/Next.js 기반 실서비스를 개발하며, 서비스 확장성과 운영 효율을 함께 고려한 구조 설계를 지향해왔습니다.
        </p>
        <p>
          분산된 백오피스 CMS의 모노레포 전환, 비개발자 대상 노코드 웹빌더 구축, PG 결제 플로우 구현 등을 진행했으며, 최근에는 다양한 AI 도구를 활용해 팀 컨벤션 정착 및 코드 생산성 향상에 기여하고 있습니다.
        </p>
      </AboutText>
    </section>
  )
}
