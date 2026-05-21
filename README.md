# yesroad.dev — 포트폴리오

**[https://yesroad.dev](https://yesroad.dev)**

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Styling**: Emotion (CSS-in-JS) + CSS 변수 기반 테마
- **UI**: Radix UI (Dialog)
- **Content**: MDX (next-mdx-remote)
- **Language**: TypeScript
- **Package Manager**: pnpm

## 주요 기능

- 다크 / 라이트 테마 전환
- 커서 스포트라이트 인터랙션
- 프로젝트 상세 모달 (MDX 콘텐츠 렌더링)
- 전체 프로젝트 테이블 (`/projects`)
- 반응형 레이아웃 (모바일 대응)

## 로컬 실행

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000)

## 프로젝트 구조

```
app/                  # Next.js App Router
views/                # 페이지 단위 뷰 컴포넌트
  home/               # 메인 페이지
  projects/           # 전체 프로젝트 페이지 (/projects)
components/           # 공유 컴포넌트
  ui/                 # Tag, CompanyBadge, ResultBadge 등
  interactive/        # ThemeSwitcher, CursorSpotlight
  ProjectModal/       # 프로젝트 상세 모달
content/projects/     # 프로젝트별 MDX 콘텐츠
data/                 # 프로젝트·경력 정적 데이터
styles/tokens/        # 디자인 토큰 (color, typography)
```
