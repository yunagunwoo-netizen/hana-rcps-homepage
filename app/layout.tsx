import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://hanarcps.com"),
  title: "하나RCPS — 일상을 잇는 디지털 서비스",
  description: "사진으로 나누는 안부, 가족만의 대화, 배움과 훈련의 경험. 하나RCPS의 대표 서비스 핑과 댕이톡을 만나보세요.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", url: "https://hanarcps.com/", siteName: "하나RCPS",
    title: "하나RCPS — 일상을 잇는 디지털 서비스",
    description: "핑과 댕이톡, BookQuest와 iCoach. 하나RCPS는 사람과 일상을 잇는 서비스를 만듭니다.",
    locale: "ko_KR", images: [{ url: "/images/og_image.png", width: 1200, height: 630, alt: "하나RCPS" }],
  },
  twitter: {
    card: "summary_large_image", title: "하나RCPS — 일상을 잇는 디지털 서비스",
    description: "핑과 댕이톡, BookQuest와 iCoach. 사람과 일상을 잇는 디지털 서비스.", images: ["/images/og_image.png"],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
