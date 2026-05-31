"use client";

import { useEffect } from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 max-w-md mx-auto">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>오류가 발생했습니다</AlertTitle>
        <AlertDescription>
          {error.message || "예상치 못한 오류가 발생했습니다. 다시 시도해주세요."}
        </AlertDescription>
      </Alert>
      <Button onClick={reset} variant="outline">
        다시 시도
      </Button>
    </div>
  );
}
