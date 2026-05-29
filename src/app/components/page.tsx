import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "컴포넌트",
  description:
    "스타터 킷에 포함된 모든 shadcn/ui 컴포넌트를 확인하세요.",
};

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Separator />
      <div>{children}</div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <div className="container max-w-screen-xl py-12 px-4 space-y-16">
      <div>
        <h1 className="text-4xl font-bold tracking-tight">컴포넌트</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          스타터 킷에 포함된 10개의 shadcn/ui 컴포넌트
        </p>
      </div>

      <Section
        title="Button"
        description="버튼 또는 버튼처럼 보이는 컴포넌트를 표시합니다."
      >
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon" aria-label="아이콘 버튼">
              +
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button disabled>Disabled</Button>
            <Button variant="outline" disabled>
              Disabled Outline
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="Card"
        description="헤더, 콘텐츠, 푸터로 구성된 카드 컴포넌트입니다."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>프로젝트 생성</CardTitle>
              <CardDescription>원클릭으로 새 프로젝트를 배포하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                모던 스택으로 다음 프로젝트를 시작하세요.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">배포</Button>
              <Button size="sm" variant="outline">
                취소
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>프로젝트 지표를 추적하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                실시간 애널리틱스와 인사이트를 확인하세요.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        title="Badge"
        description="배지 또는 배지처럼 보이는 컴포넌트를 표시합니다."
      >
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </Section>

      <Section
        title="Input & Label"
        description="접근성 높은 레이블이 있는 폼 입력 요소입니다."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">비활성화</Label>
            <Input id="disabled-input" placeholder="비활성화된 입력" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="search">검색</Label>
            <Input id="search" type="search" placeholder="검색어 입력..." />
          </div>
        </div>
      </Section>

      <Section
        title="Separator"
        description="콘텐츠를 시각적 또는 의미적으로 구분합니다."
      >
        <div className="space-y-4 max-w-md">
          <p className="text-sm">구분선 위</p>
          <Separator />
          <p className="text-sm">구분선 아래</p>
          <div className="flex items-center gap-4">
            <span className="text-sm">왼쪽</span>
            <Separator orientation="vertical" className="h-6" />
            <span className="text-sm">오른쪽</span>
          </div>
        </div>
      </Section>

      <Section
        title="Avatar"
        description="사용자를 나타내는 이미지 요소와 폴백입니다."
      >
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
      </Section>

      <Section
        title="Skeleton"
        description="콘텐츠 로딩 중 플레이스홀더를 표시합니다."
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <Skeleton className="h-[120px] w-full max-w-sm rounded-xl" />
        </div>
      </Section>
    </div>
  );
}
