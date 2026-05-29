"use client";

import Link from "next/link";
import { Menu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/components", label: "컴포넌트" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <Link href="/" className="mr-6 flex items-center gap-2">
          <Layers className="h-5 w-5" />
          <span className="font-bold hidden sm:inline-block">
            Next.js Starter
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm flex-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex" size="sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <Layers className="h-5 w-5" />
                <span className="font-bold">Next.js Starter</span>
              </Link>
              <Separator className="mb-4" />
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
