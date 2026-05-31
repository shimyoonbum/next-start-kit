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

**Next.js 15 App Router** 기반. `src/app/` 하위에 두 개의 라우트 그룹이 존재하며, 각기 다른 레이아웃을 가집니다:

- `(marketing)/` — Navbar + Footer 레이아웃. 홈(`/`), 컴포넌트 쇼케이스(`/components`), 폼 예시(`/forms`) 포함
- `(dashboard)/` — AppSidebar + DashboardHeader 레이아웃. 대시보드(`/dashboard`), 설정(`/dashboard/settings`) 포함

**페이지 섹션 패턴**: 각 페이지는 해당 라우트 폴더 내 `_sections/` 디렉토리의 섹션 컴포넌트를 조합하여 구성합니다.

**컴포넌트 계층:**
- `src/components/ui/` — shadcn/ui 컴포넌트 (직접 수정 가능, CLI로 추가: `npx shadcn@latest add <component>`)
- `src/components/layout/` — Navbar, Footer, AppSidebar, DashboardHeader, NavMain, NavUser, ThemeToggle
- `src/components/forms/` — LoginForm, SignupForm, ContactForm (react-hook-form + Zod 패턴 참조용)
- `src/components/providers/` — 클라이언트 전용 컨텍스트 프로바이더 (ThemeProvider)

**유틸리티:**
- `src/lib/utils.ts` — `cn()` 함수 (clsx + tailwind-merge). Tailwind 클래스 조합 시 항상 사용
- `src/lib/validations/` — Zod 스키마 모음 (`auth.ts`, `contact.ts`, `settings.ts`)
- `src/hooks/` — `useIsMobile` (768px 브레이크포인트), `useBreadcrumb` (pathname → 한국어 라벨 변환)

## 주요 패턴

**폼 패턴**: 모든 폼은 `react-hook-form` + `zodResolver` + `src/lib/validations/` 스키마를 사용합니다. 제출 결과는 `sonner`의 `toast()`로 피드백합니다.

```tsx
const form = useForm<FormType>({ resolver: zodResolver(schema) })
// 제출 후: toast.success("완료") 또는 toast.error("오류")
```

**Tailwind CSS v4**: `container` 클래스는 `width: 100%`만 적용하므로, 중앙 정렬 시 반드시 `mx-auto`를 함께 사용해야 합니다.

```tsx
<div className="container mx-auto max-w-screen-2xl px-4">
```

**클라이언트 컴포넌트**: 훅(`useState`, `usePathname` 등) 또는 이벤트 핸들러를 사용하는 모든 컴포넌트에는 `"use client"` 지시어가 필요합니다.

**브레드크럼 네비게이션**: `useBreadcrumb` 훅이 pathname을 파싱하여 한국어 라벨(`PATH_LABELS`)로 변환합니다. 새 라우트 추가 시 `src/hooks/use-breadcrumb.ts`의 `PATH_LABELS`에 항목을 추가하세요.

**shadcn/ui 설정**: `components.json`에 style `new-york`, baseColor `zinc`로 설정되어 있습니다. 새 컴포넌트 추가 시 이 설정이 자동 적용됩니다.

**테마**: `next-themes`의 `ThemeProvider`가 루트 레이아웃에서 감싸고 있으며, CSS 변수(`--background`, `--foreground` 등)로 light/dark 모드를 전환합니다. 색상은 `src/app/globals.css`의 `@layer base`에서 정의합니다.

**경로 별칭**: `@/` → `src/` (예: `@/components/ui/button`, `@/lib/utils`)