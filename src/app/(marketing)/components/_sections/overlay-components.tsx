"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Separator } from "@/components/ui/separator";

export function OverlayComponents() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="font-semibold">Dialog</h3>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">다이얼로그 열기</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>다이얼로그 제목</DialogTitle>
              <DialogDescription>
                다이얼로그 내용을 여기에 작성합니다. 사용자에게 중요한 정보를 표시합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="submit">확인</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">AlertDialog</h3>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">삭제 확인</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>정말 삭제하시겠습니까?</AlertDialogTitle>
              <AlertDialogDescription>
                이 작업은 되돌릴 수 없습니다. 데이터가 영구적으로 삭제됩니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction>삭제</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Tooltip</h3>
        <TooltipProvider>
          <div className="flex gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">기본 Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>툴팁 내용입니다</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm">위쪽 Tooltip</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>위에 표시됩니다</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Popover</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">팝오버 열기</Button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">팝오버</h4>
              <p className="text-sm text-muted-foreground">
                팝오버는 특정 요소에 대한 추가 정보를 표시합니다.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <Separator />

      <div className="space-y-3">
        <h3 className="font-semibold">Command</h3>
        <div className="border rounded-lg max-w-sm">
          <Command>
            <CommandInput placeholder="검색..." />
            <CommandList>
              <CommandEmpty>결과 없음</CommandEmpty>
              <CommandGroup heading="제안">
                <CommandItem>달력</CommandItem>
                <CommandItem>이모지 검색</CommandItem>
                <CommandItem>계산기</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </div>
    </div>
  );
}
