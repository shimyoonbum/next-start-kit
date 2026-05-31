import type { Metadata } from "next";
import { TrendingUp, Users, DollarSign, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "대시보드",
  description: "서비스 현황 및 통계를 확인하세요.",
};

const stats = [
  { title: "총 사용자", value: "12,847", change: "+12%", icon: Users, trend: "up" },
  { title: "월 매출", value: "₩24,500,000", change: "+8%", icon: DollarSign, trend: "up" },
  { title: "활성 세션", value: "1,293", change: "-3%", icon: Activity, trend: "down" },
  { title: "성장률", value: "18.2%", change: "+4%", icon: TrendingUp, trend: "up" },
];

const activities = [
  { user: "김민준", email: "minjun@example.com", status: "완료", date: "2분 전", initials: "KM" },
  { user: "이서연", email: "seoyeon@example.com", status: "처리중", date: "15분 전", initials: "LS" },
  { user: "박지호", email: "jiho@example.com", status: "완료", date: "1시간 전", initials: "PJ" },
  { user: "최수아", email: "sua@example.com", status: "대기", date: "3시간 전", initials: "CS" },
  { user: "정현우", email: "hyunwoo@example.com", status: "완료", date: "1일 전", initials: "JH" },
];

const goals = [
  { label: "월간 목표 달성률", value: 73 },
  { label: "신규 사용자 유치", value: 58 },
  { label: "고객 만족도", value: 91 },
];

const statusVariant: Record<string, "default" | "secondary" | "outline"> = {
  완료: "default",
  처리중: "secondary",
  대기: "outline",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">대시보드</h1>
        <p className="text-muted-foreground">서비스 현황을 한눈에 확인하세요.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <Badge
                variant={stat.trend === "up" ? "default" : "destructive"}
                className="mt-1 text-xs"
              >
                {stat.change} 전월 대비
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>최근 활동</CardTitle>
            <CardDescription>최근 처리된 사용자 요청 목록입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>사용자</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead className="text-right">시간</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.email}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs">
                            {activity.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{activity.user}</div>
                          <div className="text-xs text-muted-foreground">{activity.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={statusVariant[activity.status]}>
                        {activity.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">
                      {activity.date}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>목표 달성률</CardTitle>
            <CardDescription>이번 달 목표 달성 현황입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.label} className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{goal.label}</span>
                  <span className="font-medium">{goal.value}%</span>
                </div>
                <Progress value={goal.value} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
