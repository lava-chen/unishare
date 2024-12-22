import type { Metadata } from "next";
//import { Nunito } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
// const font = Nunito({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "unishare",
  description: "A social media platform for sharing universities' resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="zh-cn">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Noto+Sans+SC:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={`antialiased`}>
          <Sidebar />
          <main className="mx-5 mt-16 sm:ml-[300px] sm:mt-3">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
