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

export const metadata: Metadata = {
  metadataBase: new URL("https://hanarcps.com"),
  title: "하나RCPS · AI App Development Company",
  description: "하나RCPS — AI 기술 기반으로 교육·독서·스포츠 분야의 AI 앱을 개발하는 회사",
  openGraph: {
    type: "website",
    url: "https://hanarcps.com",
    siteName: "하나RCPS",
    title: "하나RCPS · AI App Development Company",
    description: "AI 기술 기반으로 교육·독서·스포츠 분야의 새로운 사용자 경험을 만드는 AI 앱 개발 회사",
    locale: "ko_KR",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "하나RCPS · AI App Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하나RCPS · AI App Development Company",
    description: "AI 기술 기반으로 교육·독서·스포츠 분야의 새로운 사용자 경험을 만드는 AI 앱 개발 회사",
    images: ["/images/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
