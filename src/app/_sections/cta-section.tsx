import Link from "next/link";
import { ArrowRight, GitBranch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-24 px-4 text-center bg-muted/30">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          지금 바로 시작하세요
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          레포지토리를 클론하고, 의존성을 설치하고, 개발을 시작하세요.
          몇 분이면 충분합니다.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Button asChild size="lg">
            <Link href="/components">
              컴포넌트 탐색 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="mr-2 h-4 w-4" /> GitHub에서 보기
            </a>
          </Button>
        </div>
        <p className="mt-8 text-xs text-muted-foreground font-mono bg-muted rounded-md px-4 py-2 inline-block">
          npx create-next-app@latest --example nextjs-starter-kit my-app
        </p>
      </div>
    </section>
  );
}
