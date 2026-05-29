import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export function ComponentsPreviewSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-screen-2xl">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">UI 컴포넌트</h2>
            <p className="mt-2 text-muted-foreground">
              10개의 shadcn/ui 컴포넌트가 포함되어 바로 사용 가능합니다.
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/components">
              전체 보기 <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Buttons</CardTitle>
              <CardDescription>다양한 variant와 size</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Button size="sm">Primary</Button>
              <Button variant="secondary" size="sm">
                Secondary
              </Button>
              <Button variant="outline" size="sm">
                Outline
              </Button>
              <Button variant="ghost" size="sm">
                Ghost
              </Button>
              <Button variant="destructive" size="sm">
                Danger
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Badges</CardTitle>
              <CardDescription>상태 표시 배지</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Avatar & Skeleton</CardTitle>
              <CardDescription>유저 표현 & 로딩 상태</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-12" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
