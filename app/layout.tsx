import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "King Gnu Fan Hub | 非官方粉丝站",
  description:
    "King Gnu 一站式粉丝社区：乐队介绍、听歌、社区讨论、演出购票、周边指引、新闻资讯。",
  openGraph: {
    title: "King Gnu Fan Hub",
    description: "King Gnu 非官方粉丝社区",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="grain min-h-screen flex flex-col font-sans">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
