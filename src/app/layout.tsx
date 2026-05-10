import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeInitScript = `
(() => {
  try {
    const stored = window.localStorage.getItem("portfolio-theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.dataset.theme = stored;
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  } catch {
    document.documentElement.removeAttribute("data-theme");
  }
})();
`;

export const metadata: Metadata = {
  title: "刘欢 · 前端架构与工程化",
  description:
    "刘欢：10+ 年前端与架构，腾讯音乐 Supersonic ChatBI 前端负责人；曾任平安智慧城市高级前端。西安财经大学本科；方向涵盖平台工程、BI、开源与 AI Agent 等。",
  keywords: [
    "前端架构",
    "腾讯音乐",
    "Supersonic",
    "ChatBI",
    "平安智慧城市",
    "平台工程",
    "BI",
    "AI Agent",
    "Apache Superset",
    "React Native",
    "Three.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-base)] text-[var(--text-primary)]">
        {children}
      </body>
    </html>
  );
}
