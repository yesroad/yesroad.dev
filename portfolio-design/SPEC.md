# 포트폴리오 Next.js 신규 프로젝트 구축 계획

## Context

`portfolio-mock-a.html` 디자인을 확정하고, **독립 Next.js 프로젝트**로 구현한다.
- 기존 frontend-job-prep 모노레포와 무관한 별도 레포
- 콘텐츠(Background/Approach)는 MDX로 관리
- 라우트: `/` (메인), `/archive` (전체 목록), `/projects/[slug]` (상세)

---

## 디자인 레퍼런스 폴더 정리 (사전 작업)

구현 전 목업 파일과 계획 문서를 한 곳에 모아둔다:

```
frontend-job-prep/
└── portfolio-design/          ← 신규 폴더
    ├── mock-main.html          (← portfolio-mock-a.html 이동)
    ├── mock-archive.html       (← portfolio-archive.html 이동)
    └── SPEC.md                 (← 이 계획 문서 복사)
```

- `portfolio-mock-b.html`, `portfolio-mock-c.html`은 미채택이므로 삭제
- 로컬 서버(`python3 -m http.server 8787`) 경로도 `portfolio-design/` 기준으로 변경

---

## 프로젝트 초기화

```bash
# 이름은 구현 시점에 결정
npx create-next-app@latest <name> \
  --typescript \
  --no-tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

추가 패키지:
```bash
yarn add next-mdx-remote gray-matter
yarn add @emotion/react @emotion/styled
yarn add -D @emotion/babel-plugin
```

---

## 라우트 구조

| 경로 | 설명 |
|---|---|
| `/` | 메인 (About / Skills / Experience / Projects / Contact) |
| `/archive` | 전체 프로젝트 목록 (표 형태) |
| `/projects/[slug]` | 프로젝트 상세 페이지 (MDX 렌더링) |

---

## 파일 구조

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx               # 폰트(Inter, JetBrains Mono), html[data-theme]
│   │   ├── page.tsx                 # 메인 페이지
│   │   ├── globals.css              # CSS 변수 + 4개 테마 + Tailwind
│   │   ├── archive/
│   │   │   └── page.tsx             # 전체 프로젝트 표
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx         # MDX 상세 + generateStaticParams
│   ├── components/
│   │   ├── layout/
│   │   │   ├── LeftPanel.tsx        # 이름/직책/nav/소셜 (sticky)
│   │   │   └── RightPanel.tsx       # 섹션들 컨테이너
│   │   ├── sections/
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx         # featured 프로젝트 리스트
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Tag.tsx
│   │   │   ├── ResultBadge.tsx
│   │   │   ├── CompanyBadge.tsx
│   │   │   └── SectionLabel.tsx
│   │   └── interactive/             # 'use client'
│   │       ├── NavHighlighter.tsx   # IntersectionObserver → nav active
│   │       ├── CursorSpotlight.tsx  # mousemove → --cx/--cy
│   │       └── ThemeSwitcher.tsx    # 4개 테마 전환 + localStorage
│   ├── data/
│   │   ├── projects.ts              # 프로젝트 목록 데이터
│   │   └── experience.ts            # 경력 데이터
│   └── lib/
│       └── mdx.ts                   # MDX 파일 읽기 유틸
├── content/
│   └── projects/
│       ├── cms-monorepo.mdx
│       ├── webbuilder.mdx
│       ├── pg-payment.mdx
│       ├── partner-center.mdx
│       ├── cocone-i18n.mdx
│       └── design-system.mdx
├── public/
│   └── projects/                    # 스크린샷 이미지 (추후)
├── next.config.ts
└── next.config.ts
```

---

## 디자인 시스템

**스타일링: Emotion (`@emotion/styled` + `@emotion/react`)**

Next.js App Router + Emotion 조합은 서버 컴포넌트에서 스타일 추출을 위해 `EmotionRegistry` 설정이 필요:

```tsx
// src/components/EmotionRegistry.tsx  ('use client')
// useServerInsertedHTML + createEmotionCache 로 SSR 스타일 주입
```

**테마 토큰**: CSS 변수로 정의 → Emotion 컴포넌트에서 `var(--accent)` 참조

```css
/* globals.css */
:root {
  --bg: #0f172a; --surface: #1e293b; --surface2: #263348;
  --text: #cbd5e1; --text-strong: #f1f5f9; --text-muted: #64748b;
  --accent: #2dd4bf; --accent-hover: #99f6e4; --border: #334155;
}
[data-theme="amber"] { --bg: #0c0a09; --accent: #f59e0b; }
[data-theme="indigo"] { --bg: #f8fafc; --accent: #6366f1; }
[data-theme="rose"] { --bg: #0f0a0a; --accent: #fb7185; }
```

Emotion 컴포넌트에서:
```ts
const Container = styled.div`
  background: var(--bg);
  color: var(--text);
`
```

**`next.config.ts`**: `@emotion/babel-plugin` 적용 (swc emotion transform)  
**폰트**: `next/font/google` — Inter + JetBrains Mono

---

## 콘텐츠 관리

### `src/data/projects.ts`
```ts
export interface Project {
  slug: string
  title: string
  company: string
  year: string
  desc: string          // 한 줄 요약 (리스트용)
  results: string[]
  tags: string[]
  thumb: string | null
  featured: boolean     // 메인 페이지 노출 여부
}
```

### `content/projects/cms-monorepo.mdx`
```mdx
---
title: 통합 CMS 모노레포 설계 및 구축
---

## Background
도메인별로 분산된 멀티레포 구조에서...

## Approach
Turborepo 기반 병렬 빌드 도입 및...
```

### `src/lib/mdx.ts`
- `getProjectContent(slug)` → fs로 MDX 읽기 + `next-mdx-remote/rsc` 컴파일
- `getAllSlugs()` → `generateStaticParams` 용

---

## 구현 단계

| # | 작업 | 세부 내용 |
|---|---|---|
| 1 | 프로젝트 생성 | create-next-app, 추가 패키지 설치 |
| 2 | globals.css + Emotion 세팅 | CSS 변수 4개 테마, EmotionRegistry, next.config emotion transform |
| 3 | 데이터 파일 | `src/data/projects.ts`, `experience.ts` |
| 4 | MDX 콘텐츠 | `content/projects/*.mdx` 6개 + `src/lib/mdx.ts` |
| 5 | 레이아웃 | `app/layout.tsx` 폰트/ThemeProvider, LeftPanel/RightPanel |
| 6 | 메인 섹션 | About / Skills / Experience / Projects / Contact |
| 7 | 인터랙션 | NavHighlighter / CursorSpotlight / ThemeSwitcher (client) |
| 8 | /archive | ArchiveTable, 행 클릭 → `/projects/[slug]` |
| 9 | /projects/[slug] | MDX 렌더링, generateStaticParams, 뒤로가기 |
| 10 | 반응형 | 모바일 단일 컬럼, sticky 해제 |
| 11 | 검증 | dev 서버, 라우팅, 테마, 모바일 확인 |

---

## 검증

- `yarn dev` → http://localhost:3000
- `/` 메인: nav 하이라이트, 커서 spotlight, 테마 전환
- `/archive`: 표 렌더링, 행 클릭 → 상세 이동
- `/projects/cms-monorepo`: MDX 렌더링, 뒤로가기
- 모바일(375px): 단일 컬럼 레이아웃
- `yarn build`: 빌드 성공 확인
