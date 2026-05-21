import type { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    period: '2022.05 — 현재 · 4년',
    company: '여기어때컴퍼니',
    role: 'Frontend Developer',
    desc: [
      '광고·파트너·CMS 도메인에서 Next.js 기반 서비스를 개발했습니다. Turborepo 기반 모노레포 설계와 빌드 최적화로 배포 시간을 43% 단축했고, GrapesJS 기반 웹빌더와 광고 상품 PG 결제 플로우를 구축했습니다.',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Turborepo',
      'TanStack Query',
      'Jotai',
      'Emotion',
      'GrapesJS',
      'Jenkins',
      'AWS S3',
    ],
  },
  {
    period: '2021.12 — 2022.04 · 5개월',
    company: '코코네(cocone)',
    role: 'Frontend Developer',
    desc: [
      '사내 인트라넷 구축과 다국어 기업 소개 홈페이지를 개발했습니다. 공통 보일러플레이트와 CI/CD 파이프라인을 정립하고 GitLab MR 기반 코드 리뷰 문화를 도입했습니다.',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Jenkins',
      'GitLab',
      'next-i18next',
      'Google Sheets API',
    ],
  },
  {
    period: '2021.03 — 2021.11 · 9개월',
    company: '브랜디(Brandi)',
    role: 'Frontend Developer',
    desc: [
      '브랜디·하이버 서비스에서 공통으로 사용할 Storybook 기반 디자인 시스템을 구축하고 사내 npm 패키지로 배포했습니다. Vue 2 기반 셀러 어드민 개발과 A/B 테스트도 담당했습니다.',
    ],
    tags: [
      'Vue 2',
      'React',
      'TypeScript',
      'Storybook',
    ],
  },
];
