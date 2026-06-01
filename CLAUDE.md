# CLAUDE.md

이 파일은 Claude Code가 이 저장소에서 작업할 때 참조하는 가이드입니다.

## 명령어

```bash
npm run dev       # Turbopack 개발 서버 (기본 포트 3000)
npm run build     # 프로덕션 빌드
npm run start     # 프로덕션 서버 실행
npm run lint      # ESLint 검사
```

별도의 테스트 프레임워크는 설정되어 있지 않습니다.

## 기술 스택 버전

- **Next.js 15** (App Router, Turbopack)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (`@import "tailwindcss"` 방식, `tailwind.config.ts` 없음)
- **Zod v4** (`zod@^4`)
- **shadcn/ui** (style: `new-york`, baseColor: `zinc`)
- **Geist** 폰트 (Sans: `--font-geist-sans`, Mono: `--font-geist-mono`)

## 아키텍처

**Next.js 15 App Router** 기반. `src/app/` 하위에 두 개의 라우트 그룹이 존재하며, 각기 다른 레이아웃을 가집니다:

| 라우트 그룹 | 레이아웃 | 포함 페이지 |
|---|---|---|
| `(marketing)/` | Navbar + Footer | `/` (홈), `/components` (쇼케이스), `/forms` (폼 예시) |
| `(dashboard)/` | AppSidebar + DashboardHeader | `/dashboard`, `/dashboard/settings` |

**전역 파일 (`src/app/`):**
- `layout.tsx` — 루트 레이아웃. `ThemeProvider` + `<Toaster richColors />` 포함
- `globals.css` — Tailwind v4 설정 + CSS 변수 (light/dark 테마)
- `error.tsx` — 에러 바운더리 (Client Component)
- `global-error.tsx` — 루트 레벨 에러 바운더리
- `not-found.tsx` — 404 페이지
- `loading.tsx` — 로딩 상태

**페이지 섹션 패턴**: 각 페이지는 해당 라우트 폴더 내 `_sections/` 디렉토리의 섹션 컴포넌트를 조합하여 구성합니다.

```
src/app/
├── (marketing)/
│   ├── _sections/          # 홈페이지 섹션들
│   │   ├── hero-section.tsx
│   │   ├── features-section.tsx
│   │   ├── tech-stack-section.tsx
│   │   ├── components-preview-section.tsx
│   │   └── cta-section.tsx
│   ├── components/
│   │   └── _sections/      # 컴포넌트 쇼케이스 섹션들 (5개 탭 카테고리)
│   ├── forms/page.tsx
│   └── page.tsx
└── (dashboard)/
    └── dashboard/
        ├── page.tsx          # 통계 카드 + 활동 테이블 (Server Component)
        └── settings/page.tsx # 탭 기반 설정 (Client Component)
```

## 컴포넌트 계층

**`src/components/ui/`** — shadcn/ui 컴포넌트 (직접 수정 가능)

현재 설치된 컴포넌트:
`alert` `alert-dialog` `avatar` `badge` `breadcrumb` `button` `calendar` `card` `checkbox` `command` `dialog` `dropdown-menu` `form` `input` `label` `pagination` `popover` `progress` `radio-group` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `sonner` `switch` `table` `tabs` `textarea` `tooltip`

새 컴포넌트 추가: `npx shadcn@latest add <component>`

**`src/components/layout/`** — 레이아웃 컴포넌트
- `navbar.tsx` — 마케팅 상단 네비게이션 (sticky, ThemeToggle + Sheet 모바일 메뉴, `navLinks` 하드코딩)
- `footer.tsx` — 마케팅 하단 푸터
- `app-sidebar.tsx` — 대시보드 사이드바 (`collapsible="icon"`, `navItems` 하드코딩)
- `dashboard-header.tsx` — 대시보드 헤더 (사이드바 트리거 + 브레드크럼)
- `nav-main.tsx` — 사이드바 네비게이션 아이템
- `nav-user.tsx` — 사이드바 하단 유저 메뉴 (현재 `demoUser` 더미 데이터)
- `theme-toggle.tsx` — 라이트/다크 테마 전환 버튼 (Navbar에서만 사용)

**`src/components/forms/`** — 폼 컴포넌트 (react-hook-form + Zod 패턴 참조용)
- `login-form.tsx`, `signup-form.tsx`, `contact-form.tsx`

**`src/components/providers/`**
- `theme-provider.tsx` — `next-themes` ThemeProvider 래퍼

## 유틸리티

**`src/lib/utils.ts`** — `cn()` 함수 (clsx + tailwind-merge). Tailwind 클래스 조합 시 항상 사용

**`src/lib/validations/`** — Zod 스키마 모음
- `auth.ts` — `loginSchema`, `signupSchema`
- `contact.ts` — `contactSchema`
- `settings.ts` — `settingsSchema`

**`src/hooks/`**
- `use-mobile.ts` — `useIsMobile()` (768px 브레이크포인트)
- `use-breadcrumb.ts` — `useBreadcrumb()` (pathname → 한국어 라벨 변환)

## 주요 패턴

### 폼 패턴

모든 폼은 `react-hook-form` + `zodResolver` + `src/lib/validations/` 스키마를 사용합니다. 제출 결과는 `sonner`의 `toast()`로 피드백합니다.

```tsx
"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const form = useForm<FormType>({
  resolver: zodResolver(schema),
  defaultValues: { ... },
});

function onSubmit(data: FormType) {
  toast.success("완료") // 또는 toast.error("오류")
}
```

### Tailwind CSS v4 주의사항

`container` 클래스는 `width: 100%`만 적용하므로, 중앙 정렬 시 반드시 `mx-auto`를 함께 사용해야 합니다.

```tsx
<div className="container mx-auto max-w-screen-xl px-4">
```

### 클라이언트 컴포넌트

훅(`useState`, `usePathname` 등) 또는 이벤트 핸들러를 사용하는 모든 컴포넌트에는 `"use client"` 지시어가 필요합니다. `src/app/layout.tsx`는 `suppressHydrationWarning`이 `<html>`에 설정되어 있으며 ThemeProvider가 SSR hydration 불일치를 방지합니다.

### 브레드크럼 네비게이션

`useBreadcrumb` 훅이 pathname을 파싱하여 한국어 라벨로 변환합니다. **새 대시보드 라우트 추가 시 `src/hooks/use-breadcrumb.ts`의 `PATH_LABELS`에 항목을 추가해야 합니다.**

```ts
const PATH_LABELS: Record<string, string> = {
  dashboard: "대시보드",
  settings: "설정",
  // 새 라우트 추가 시 여기에 추가
};
```

### 사이드바 네비게이션 추가

새 대시보드 페이지 추가 시 `src/components/layout/app-sidebar.tsx`의 `navItems` 배열에도 항목을 추가해야 합니다.

```ts
const navItems: NavItem[] = [
  { title: "대시보드", url: "/dashboard", icon: LayoutDashboard },
  { title: "설정", url: "/dashboard/settings", icon: Settings },
  // 새 항목 추가 시 여기에
];
```

### 테마 색상

CSS 변수(`--background`, `--foreground`, `--primary` 등)로 light/dark 모드를 전환합니다. 색상은 `src/app/globals.css`의 `@layer base`에서 정의합니다. 커스텀 색상 추가 시 `:root`와 `.dark` 블록 양쪽에 추가해야 합니다.

### 메타데이터

각 페이지에서 `export const metadata: Metadata = { title, description }` 형태로 내보냅니다. 타이틀은 루트 레이아웃의 `template: "%s | Next.js Starter Kit"` 패턴이 자동 적용됩니다.

### 신규 페이지 추가 체크리스트

**마케팅 페이지** (`/새경로`) 추가 시:
1. `src/app/(marketing)/새경로/page.tsx` 생성
2. `src/components/layout/navbar.tsx`의 `navLinks` 배열에 항목 추가

**대시보드 페이지** (`/dashboard/새경로`) 추가 시:
1. `src/app/(dashboard)/dashboard/새경로/page.tsx` 생성
2. `src/components/layout/app-sidebar.tsx`의 `navItems` 배열에 항목 추가
3. `src/hooks/use-breadcrumb.ts`의 `PATH_LABELS`에 한국어 라벨 추가

## shadcn/ui 설정

`components.json`에 style `new-york`, baseColor `zinc`로 설정되어 있습니다. 새 컴포넌트 추가 시 이 설정이 자동 적용됩니다.

**경로 별칭**: `@/` → `src/` (예: `@/components/ui/button`, `@/lib/utils`)

## 아직 설치되지 않은 주요 shadcn/ui 컴포넌트

필요 시 `npx shadcn@latest add <name>`으로 추가:

`accordion` `aspect-ratio` `carousel` `chart` `collapsible` `combobox` `context-menu` `drawer` `hover-card` `input-otp` `menubar` `navigation-menu` `resizable` `slider` `spinner` `toggle` `toggle-group`

> `chart`는 Recharts 기반 대시보드 차트 컴포넌트로, 현재 대시보드 통계 카드를 시각화할 때 유용합니다.
