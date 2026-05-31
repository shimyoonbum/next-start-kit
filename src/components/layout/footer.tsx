import Link from "next/link";
import { Layers } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto max-w-screen-2xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-2 max-w-xs">
            <Link href="/" className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <span className="font-bold">Next.js Starter Kit</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui로 구성된
              모던 스타터 킷
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">페이지</h4>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                홈
              </Link>
              <Link
                href="/components"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                컴포넌트
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">기술 스택</h4>
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Next.js
              </a>
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Tailwind CSS
              </a>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                shadcn/ui
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold">링크</h4>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Next.js Starter Kit. Built with
          Next.js 15.
        </p>
      </div>
    </footer>
  );
}
