import Link from "next/link";
import { ArrowRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-24 md:py-36 text-center px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(240_5.9%_10%/0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(0_0%_98%/0.06),transparent)]" />

      <Badge variant="secondary" className="mb-4">
        Next.js 15 + TailwindCSS v4
      </Badge>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl">
        웹 개발을 더 빠르게,{" "}
        <span className="text-primary">모던 스타터 킷</span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
        Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui를 기반으로 한
        프로덕션 레디 스타터 킷. 다크 모드와 반응형 디자인을 기본 제공합니다.
      </p>

      <div className="mt-10 flex items-center gap-4 flex-wrap justify-center">
        <Button asChild size="lg">
          <Link href="/components">
            컴포넌트 탐색
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitBranch className="mr-2 h-4 w-4" />
            GitHub 보기
          </a>
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
        {[
          "Next.js 15",
          "React 19",
          "TypeScript 5",
          "Tailwind v4",
          "shadcn/ui",
        ].map((tag) => (
          <span key={tag} className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
