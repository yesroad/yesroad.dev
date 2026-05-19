import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    period: '2022.05 — 현재 · 3년 11개월',
    company: '여기어때컴퍼니',
    role: 'Frontend Developer',
    desc: [
      '광고·파트너·CMS 도메인에서 Next.js 기반 서비스를 개발했습니다. 멀티레포로 흩어진 백오피스를 Turborepo 모노레포로 전환해 배포 시간을 43% 단축했고, GrapesJS 기반 노코드 웹빌더를 구축해 5,000개 펜션 홈페이지를 무서버로 운영하는 구조를 설계했습니다.',
      '최근에는 AI 코드 생성 도구를 팀 워크플로우에 도입해 BFF 반복 코드를 자동화하고, 사내 코딩 컨벤션 정착에 기여하고 있습니다.',
    ],
    tags: ['Next.js', 'TypeScript', 'Turborepo', 'TanStack Query', 'Jotai', 'Emotion', 'Jenkins', 'AWS S3', 'CloudFront'],
  },
  {
    period: '2021.12 — 2022.04 · 5개월',
    company: '코코네(cocone)',
    role: 'Frontend Developer',
    desc: [
      '일본계 소셜 플랫폼 기업에서 다국어 소개 홈페이지를 개발했습니다. Google Sheets API를 i18n 소스로 연결해 비개발자가 번역을 직접 관리할 수 있는 구조를 만들었고, Jenkins + GitLab Webhook 기반 CI/CD 파이프라인을 구성했습니다.',
    ],
    tags: ['Next.js', 'TypeScript', 'Jenkins', 'GitLab', 'i18n'],
  },
  {
    period: '2021.03 — 2021.11 · 9개월',
    company: '브랜디(Brandi)',
    role: 'Frontend Developer',
    desc: [
      '패션 커머스 플랫폼에서 첫 커리어를 시작했습니다. 브랜디·하이버 서비스 간 UI 불일치 해소를 위한 Storybook 기반 디자인 시스템을 구축하고 AWS CodeArtifact를 통해 npm 패키지로 배포했습니다. Vue 2 기반 셀러 어드민 개발과 Google Optimize A/B 테스트 실험도 담당했습니다.',
    ],
    tags: ['Vue 2', 'React', 'TypeScript', 'Storybook', 'Rollup', 'AWS CodeArtifact'],
  },
]
