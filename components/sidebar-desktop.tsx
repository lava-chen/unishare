"use client";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { SidebarButton } from "./sidebar-button";
import { SidebarItems } from "@/types";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut, MoreHorizontal, Settings, Loader } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();

  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <div className=" pl-4  flex items-center gap-x-3">
          <Image src="/logo.svg" height={40} width={40} alt="logo" />
          <h1 className="text-3xl font-extrabold text-slate-700 tracking-wide">
            Unishare
          </h1>
        </div>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  icon={link.icon}
                  className="w-full font-bold"
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {props.sidebarItems.extras}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <ClerkLoading>
              <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
            </ClerkLoading>
            <ClerkLoaded>
              <SignedIn>
                <div className="flex items-center">
                  <UserButton />
                  <span className="ml-2 font-bold">
                    {useUser().user?.fullName}
                  </span>
                </div>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <Button size="lg" variant="ghost" className="w-full">
                    Login
                  </Button>
                </SignInButton>
              </SignedOut>
            </ClerkLoaded>
            <>
              {/* <Button variant="ghost" className="w-full justify-start">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src="https://github.com/max-programming.png" />
                    <AvatarFallback>Max Programming</AvatarFallback>
                  </Avatar>
                  <span>Max Programming</span>
                </div>
                <MoreHorizontal size={20} />
              </div>
            </Button> */}
              {/* <Popover>
              <PopoverTrigger asChild>
                
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link href="/">
                    <SidebarButton size="sm" icon={Settings} className="w-full">
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size="sm" icon={LogOut} className="w-full">
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover> */}
            </>
          </div>
        </div>
      </div>
    </aside>
  );
}
