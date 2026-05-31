import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormComponents } from "./_sections/form-components";
import { FeedbackComponents } from "./_sections/feedback-components";
import { NavigationComponents } from "./_sections/navigation-components";
import { OverlayComponents } from "./_sections/overlay-components";
import { DataComponents } from "./_sections/data-components";

export const metadata: Metadata = {
  title: "컴포넌트",
  description: "스타터 킷에 포함된 모든 shadcn/ui 컴포넌트를 확인하세요.",
};

const categories = [
  { id: "form", label: "폼", component: FormComponents },
  { id: "feedback", label: "피드백", component: FeedbackComponents },
  { id: "navigation", label: "네비게이션", component: NavigationComponents },
  { id: "overlay", label: "오버레이", component: OverlayComponents },
  { id: "data", label: "데이터", component: DataComponents },
];

export default function ComponentsPage() {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-4 space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">컴포넌트</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          스타터 킷에 포함된 30+ shadcn/ui 컴포넌트
        </p>
      </div>

      <Tabs defaultValue="form">
        <TabsList className="flex flex-wrap h-auto gap-1">
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id}>
              {cat.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="mt-6">
            <cat.component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
