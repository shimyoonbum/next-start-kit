import type { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/forms/login-form";
import { SignupForm } from "@/components/forms/signup-form";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "폼",
  description: "react-hook-form + zod를 활용한 폼 패턴 예시",
};

export default function FormsPage() {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">폼 패턴</h1>
        <p className="mt-2 text-muted-foreground text-lg">
          react-hook-form + zod를 활용한 유효성 검사 예시
        </p>
      </div>

      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="login">로그인</TabsTrigger>
          <TabsTrigger value="signup">회원가입</TabsTrigger>
          <TabsTrigger value="contact">문의</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>로그인</CardTitle>
              <CardDescription>계정에 로그인하세요. 이메일 형식과 비밀번호 8자 이상을 확인합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>회원가입</CardTitle>
              <CardDescription>새 계정을 만드세요. 비밀번호 확인 일치 여부를 검증합니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <SignupForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>문의하기</CardTitle>
              <CardDescription>궁금한 점을 남겨주세요. 빠른 시일 내에 답변드리겠습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
