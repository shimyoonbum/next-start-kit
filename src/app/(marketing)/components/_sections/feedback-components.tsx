"use client";

import { AlertCircle, Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export function FeedbackComponents() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="font-semibold">Alert</h3>
        <div className="space-y-3 max-w-xl">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>안내</AlertTitle>
            <AlertDescription>기본 알림 메시지입니다.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>오류가 발생했습니다. 다시 시도해주세요.</AlertDescription>
          </Alert>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Toast (Sonner)</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => toast.success("성공적으로 완료되었습니다!")}>
            성공 Toast
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.error("오류가 발생했습니다.")}>
            에러 Toast
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.info("참고 사항입니다.")}>
            정보 Toast
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.warning("주의가 필요합니다.")}>
            경고 Toast
          </Button>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Progress</h3>
        <div className="space-y-3 max-w-sm">
          <Progress value={30} />
          <Progress value={60} />
          <Progress value={90} />
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Skeleton</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <Skeleton className="h-[120px] w-full max-w-sm rounded-xl" />
        </div>
      </div>
    </div>
  );
}
