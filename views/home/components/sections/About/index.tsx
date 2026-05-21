'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { AboutText } from './styled'

export function AboutSection() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <AboutText>
        <p>
          5년간 React/Next.js 기반의 B2B/B2C 서비스를 개발해 온 프론트엔드 엔지니어입니다.
        </p>
        <p>
          서비스 초기 구축부터 운영까지 전 과정에 참여하며 사용자 경험 개선과 효율적인 개발 환경 구축에 집중해 왔습니다. 신규 백오피스 CMS의 모노레포 아키텍처 구축 및 빌드 최적화를 통해 배포 시간을 약 43% 단축했고, 비개발자도 직접 홈페이지를 제작 및 배포할 수 있는 웹빌더를 개발했습니다. 또한 광고 상품 PG 연동 과정에서 결제 상태 처리와 예외 대응 로직 등을 구현하며 안정적인 결제 프로세스 운영에 기여했습니다.
        </p>
        <p>
          최근에는 AI 코딩 도구를 활용해 반복 작업을 자동화하고, 더 효율적인 개발 환경을 만드는 데 관심을 가지고 있습니다.
        </p>
      </AboutText>
    </section>
  )
}
