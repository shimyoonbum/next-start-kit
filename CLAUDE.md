# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev       # Turbopack 개발 서버 (기본 포트 3000)
npm run build     # 프로덕션 빌드
npm run start     # 프로덕션 서버 실행
npm run lint      # ESLint 검사
```

별도의 테스트 프레임워크는 설정되어 있지 않습니다.

## 아키텍처

**Next.js 15 App Router** 기반. 모든 라우트는 `src/app/` 아래에 위치하며, 페이지별 섹션 컴포넌트는 해당 라우트 폴더 내 `_sections/` 디렉토리에 배치합니다(`src/app/_sections/`가 홈 페이지 섹션의 예시).

**컴포넌트 계층:**
- `src/components/ui/` — shadcn/ui 컴포넌트 (직접 수정 가능, CLI로 추가: `npx shadcn@latest add <component>`)
- `src/components/layout/` — Navbar, Footer, ThemeToggle
- `src/components/providers/` — 클라이언트 전용 컨텍스트 프로바이더 (ThemeProvider)

**유틸리티:**
- `src/lib/utils.ts` — `cn()` 함수 (clsx + tailwind-merge). Tailwind 클래스 조합 시 항상 사용
- `src/hooks/` — 클라이언트 전용 커스텀 훅 (`useIsMobile` 등)

## 주요 패턴

**Tailwind CSS v4**: `container` 클래스는 `width: 100%`만 적용하므로, 중앙 정렬이 필요한 경우 반드시 `mx-auto`를 함께 사용해야 합니다.

```tsx
// 올바른 사용
<div className="container mx-auto max-w-screen-2xl px-4">
```

**shadcn/ui 설정**: `components.json`에 style `new-york`, baseColor `zinc`로 설정되어 있습니다. 새 컴포넌트 추가 시 이 설정이 자동 적용됩니다.

**테마**: `next-themes`의 `ThemeProvider`가 루트 레이아웃에서 감싸고 있으며, CSS 변수(`--background`, `--foreground` 등)로 light/dark 모드를 전환합니다. 색상은 `src/app/globals.css`의 `@layer base`에서 정의합니다.

**경로 별칭**: `@/` → `src/` (예: `@/components/ui/button`, `@/lib/utils`)
