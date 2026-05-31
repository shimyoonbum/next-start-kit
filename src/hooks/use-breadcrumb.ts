"use client";

import { usePathname } from "next/navigation";

const PATH_LABELS: Record<string, string> = {
  dashboard: "대시보드",
  settings: "설정",
};

export function useBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, index) => ({
    label: PATH_LABELS[segment] ?? segment,
    href: "/" + segments.slice(0, index + 1).join("/"),
    isLast: index === segments.length - 1,
  }));
}
