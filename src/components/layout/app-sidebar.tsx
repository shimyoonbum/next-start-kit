"use client";

import Link from "next/link";
import { LayoutDashboard, Layers, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMain, type NavItem } from "@/components/layout/nav-main";
import { NavUser } from "@/components/layout/nav-user";

const navItems: NavItem[] = [
  { title: "대시보드", url: "/dashboard", icon: LayoutDashboard },
  { title: "설정", url: "/dashboard/settings", icon: Settings },
];

const demoUser = { name: "홍길동", email: "user@example.com" };

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 py-1">
          <Layers className="h-5 w-5 shrink-0" />
          <span className="font-bold truncate">Next.js Starter</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>메뉴</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavMain items={navItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={demoUser} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
