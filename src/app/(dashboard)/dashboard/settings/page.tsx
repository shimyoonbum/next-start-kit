"use client";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { settingsSchema, type SettingsInput } from "@/lib/validations/settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  const form = useForm<SettingsInput>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      displayName: "홍길동",
      language: "ko",
      timezone: "Asia/Seoul",
      emailNotifications: true,
      pushNotifications: false,
      marketingEmails: false,
    },
  });

  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  function onSubmit(data: SettingsInput) {
    console.log(data);
    toast.success("설정이 저장되었습니다!");
  }

  function handlePasswordChange() {
    const current = currentPasswordRef.current?.value ?? "";
    const next = newPasswordRef.current?.value ?? "";
    const confirm = confirmPasswordRef.current?.value ?? "";

    if (!current || !next || !confirm) {
      toast.error("모든 비밀번호 필드를 입력해주세요.");
      return;
    }
    if (next.length < 8) {
      toast.error("새 비밀번호는 8자 이상이어야 합니다.");
      return;
    }
    if (next !== confirm) {
      toast.error("새 비밀번호가 일치하지 않습니다.");
      return;
    }
    toast.success("비밀번호가 변경되었습니다!");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">계정 및 알림 설정을 관리하세요.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Tabs defaultValue="general">
            <TabsList>
              <TabsTrigger value="general">일반</TabsTrigger>
              <TabsTrigger value="notifications">알림</TabsTrigger>
              <TabsTrigger value="security">보안</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-4 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>일반 설정</CardTitle>
                  <CardDescription>기본 계정 정보를 수정하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="displayName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>표시 이름</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>서비스에서 표시될 이름입니다.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="language"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>언어</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="언어 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ko">한국어</SelectItem>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="ja">日本語</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timezone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>시간대</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="시간대 선택" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Asia/Seoul">서울 (UTC+9)</SelectItem>
                            <SelectItem value="America/New_York">뉴욕 (UTC-5)</SelectItem>
                            <SelectItem value="Europe/London">런던 (UTC+0)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>알림 설정</CardTitle>
                  <CardDescription>원하는 알림 유형을 선택하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-0">
                  <FormField
                    control={form.control}
                    name="emailNotifications"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between py-4">
                        <div>
                          <FormLabel>이메일 알림</FormLabel>
                          <FormDescription>중요한 업데이트를 이메일로 받습니다.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <FormField
                    control={form.control}
                    name="pushNotifications"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between py-4">
                        <div>
                          <FormLabel>푸시 알림</FormLabel>
                          <FormDescription>브라우저 푸시 알림을 받습니다.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Separator />
                  <FormField
                    control={form.control}
                    name="marketingEmails"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between py-4">
                        <div>
                          <FormLabel>마케팅 이메일</FormLabel>
                          <FormDescription>프로모션 및 뉴스레터를 받습니다.</FormDescription>
                        </div>
                        <FormControl>
                          <Switch checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>보안 설정</CardTitle>
                  <CardDescription>계정 보안을 강화하세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">현재 비밀번호</Label>
                    <Input id="current-password" type="password" placeholder="••••••••" ref={currentPasswordRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">새 비밀번호</Label>
                    <Input id="new-password" type="password" placeholder="••••••••" ref={newPasswordRef} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">새 비밀번호 확인</Label>
                    <Input id="confirm-password" type="password" placeholder="••••••••" ref={confirmPasswordRef} />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePasswordChange}
                  >
                    비밀번호 변경
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-4 flex justify-end">
            <Button type="submit">설정 저장</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
