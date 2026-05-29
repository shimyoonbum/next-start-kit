import { Separator } from "@/components/ui/separator";

const stack = [
  { name: "Next.js", version: "15.x" },
  { name: "React", version: "19.x" },
  { name: "TypeScript", version: "5.x" },
  { name: "Tailwind CSS", version: "4.x" },
  { name: "shadcn/ui", version: "latest" },
  { name: "Lucide React", version: "latest" },
  { name: "next-themes", version: "0.4.x" },
  { name: "Radix UI", version: "latest" },
];

export function TechStackSection() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">기술 스택</h2>
          <p className="mt-3 text-muted-foreground">
            검증된 최신 버전의 패키지들로 구성되어 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"
            >
              <span className="font-medium text-sm">{item.name}</span>
              <Separator orientation="vertical" className="h-4" />
              <span className="text-xs text-muted-foreground">
                {item.version}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
