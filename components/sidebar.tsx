"use client";

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from "lucide-react";
import { SidebarDesktop } from "./sidebar-desktop";
import { SidebarItems } from "@/types";
import { SidebarButton } from "./sidebar-button";
import { useMediaQuery } from "usehooks-ts";
import { SidebarMobile } from "./sidebar-mobile";

const sidebarItems: SidebarItems = {
  links: [
    { label: "Home", href: "/", icon: Home },
    {
      href: "/institutes",
      icon: List,
      label: "学院及专业",
    },
    {
      href: "/bookmarks",
      icon: Bookmark,
      label: "收藏",
    },
    {
      href: "/profile",
      icon: User,
      label: "Profile",
    },
  ],
  extras: <div className="flex flex-col gap-2"></div>,
};

export function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
