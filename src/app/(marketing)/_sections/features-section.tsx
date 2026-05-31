import { Zap, Palette, Shield, Code2, Moon, Package } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Next.js 15 + Turbopack",
    description:
      "Turbopack을 활용한 초고속 빌드와 최신 App Router 패턴으로 개발 경험을 극대화합니다.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description:
      "CSS-first 설정 방식(@theme{})으로 별도 설정 파일 없이 강력한 스타일링을 지원합니다.",
  },
  {
    icon: Package,
    title: "shadcn/ui 컴포넌트",
    description:
      "Radix UI 기반의 접근성 높은 아름다운 컴포넌트 10개가 바로 사용 가능합니다.",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description:
      "next-themes를 활용한 시스템 연동 다크/라이트 모드가 기본으로 제공됩니다.",
  },
  {
    icon: Shield,
    title: "TypeScript 완벽 지원",
    description:
      "TypeScript 5 strict 모드로 엔드-투-엔드 타입 안전성을 보장합니다.",
  },
  {
    icon: Code2,
    title: "개발자 경험",
    description:
      "ESLint, 경로 별칭(@/*), 깔끔한 폴더 구조로 즉시 개발을 시작할 수 있습니다.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            필요한 모든 것이 포함되어 있습니다
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            제로에서 프로덕션까지, 신중하게 선별된 도구와 패턴으로 빠르게
            시작하세요.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
