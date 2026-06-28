'use client'

import { SectionLabel } from '@/components/ui/SectionLabel'
import { AboutText } from './styled'

export function AboutSection() {
  return (
    <section id="about">
      <SectionLabel>About</SectionLabel>
      <AboutText>
        <p>
          5년간 React / Next.js 기반 서비스를 개발해 온 프론트엔드 엔지니어입니다.
        </p>
        <p>
          백오피스, B2B 플랫폼, 웹뷰 등 다양한 서비스의 신규 개발과 운영을 경험하며, 효율적인 프론트엔드 개발 환경을 구축하는 데 집중해 왔습니다.
          대표적으로 신규 백오피스 CMS에서는 모노레포 구조 구축과 빌드 및 번들 최적화를 수행했으며,
          비개발자도 직접 홈페이지를 제작 및 배포할 수 있는 웹빌더를 개발했습니다.
          광고 상품 PG 연동 과정에서는 주문서, 결제 상세 등 주요 결제 화면과 결제 상태 처리 로직을 구현하며 안정적인 결제 프로세스 운영에 기여했습니다.
        </p>
        <p>
          최근에는 AI 코딩 도구를 활용해 반복적인 구현 작업과 빌드 및 테스트 검증 과정을 효율화하며, 개발 생산성을 높이는 데 관심을 가지고 있습니다.
        </p>
      </AboutText>
    </section>
  )
}
