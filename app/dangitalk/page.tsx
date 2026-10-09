import type { Metadata } from "next";
import Link from "next/link";
import LandingMotion from "@/components/landing-motion";
import DangitalkScreenTabs from "@/components/dangitalk";
import "./dangitalk.css";

/* eslint-disable @next/next/no-img-element -- These fixed-size app captures need their native dimensions and visual cropping. */

export const metadata: Metadata = {
  title: "댕이톡 | 하나RCPS",
  description: "우리 가족만의 메신저, 우리 강아지도 함께하는 댕이톡을 소개합니다.",
  alternates: { canonical: "https://hanarcps.com/dangitalk" },
  icons: {
    icon: "/renewal/assets/brand/dangitalk-dubi-d.webp",
    apple: "/renewal/assets/brand/dangitalk-dubi-d-apple.png",
  },
  openGraph: {
    title: "댕이톡 | 하나RCPS",
    description: "우리 가족만의 메신저, 우리 강아지도 함께하는 댕이톡을 소개합니다.",
    url: "https://hanarcps.com/dangitalk",
    siteName: "댕이톡",
    locale: "ko_KR",
    type: "website",
    images: [{
      url: "/renewal/assets/toobi-avatars/family-portrait.webp",
      width: 1100,
      height: 737,
      alt: "가족 구성원들과 강아지를 함께 표현한 댕이톡 아바타 활용 예시",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "댕이톡 | 하나RCPS",
    description: "우리 가족만의 메신저, 우리 강아지도 함께하는 댕이톡을 소개합니다.",
    images: ["/renewal/assets/toobi-avatars/family-portrait.webp"],
  },
};

const asset = "/renewal/assets";

export default function DangitalkPage() {
  return (
    <div className="dang-site">
      <header className="dheader">
        <Link className="dlogo" href="#top"><img src={`${asset}/brand/dangitalk-dubi-d.webp`} alt="" width="34" height="34" />댕이톡</Link>
        <nav aria-label="페이지 메뉴">
          <a href="#family">가족 전용 공간</a>
          <a href="#ways">두 가지 이용 방식</a>
          <a href="#custom">우리 집 맞춤</a>
          <a href="#faq">이용 안내</a>
        </nav>
        <a className="dsmall-link" href="#screens">앱 화면 보기 ↘</a>
      </header>

      <main id="top">
        <section className="dhero dwrap davatar-intro">
          <div className="dhero-copy">
            <span className="dkicker">OUR FAMILY, OUR LITTLE DOG</span>
            <h1>우리 가족만의 메신저.<br />우리 강아지도 함께.</h1>
            <p>가족끼리 필요한 대화만, 우리 집에 맞게.<br />단독으로 쓰는 가족 메신저를 기본으로,<br />핑의 가족·강아지 아바타도 선택해 활용하는 구성입니다.</p>
            <div className="dhero-actions">
              <a className="dcta" href="#screens">메신저 화면 살펴보기 <span>↓</span></a>
              <a className="dhero-secondary" href="#ways">이용 방식 알아보기 <span>↗</span></a>
            </div>
            <div className="dhero-points"><span>단독 사용</span><span>가족 전용 대화</span><span>아바타는 선택</span></div>
          </div>
          <figure className="davatar-hero">
            <img src={`${asset}/toobi-avatars/family-portrait.webp`} width="1100" height="737" alt="가족 구성원들과 강아지를 함께 표현한 아바타 활용 예시" fetchPriority="high" decoding="async" />
            <figcaption>선택에 따라 더하는 가족 + 강아지 아바타 활용 예시</figcaption>
          </figure>
        </section>

        <section className="dwhy dwrap" id="family">
          <span className="dkicker">WHY DANGITALK</span>
          <h2>필요한 대화만,<br />우리 가족의 공간에서.</h2>
          <div className="dwhy-grid">
            <article><span>01 / FAMILY ONLY</span><h3>초대한 가족끼리,<br />편하게 연락해요.</h3><p>가족방에서 함께 나누고, 같은 가족과 1:1로 안부를 전해요. 공개 오픈채팅 탐색 없이 우리 가족의 이야기에 집중합니다.</p></article>
            <article><span>02 / MADE FOR YOUR HOME</span><h3>가족의 생활에 맞게,<br />대화의 리듬도 맞춰요.</h3><p>이름과 테마, 강아지의 수다 정도와 조용한 시간까지. 우리 집에 필요한 대화 분위기를 만들어갑니다.</p></article>
            <article><span>03 / OUR LITTLE DOG</span><h3>우리 집 강아지가,<br />대화 속 막내로.</h3><p>강아지의 모습과 이름으로 전하는 인사와 질문. 집안의 막내가 가족의 대화를 시작할 작은 계기가 됩니다.</p></article>
          </div>
        </section>

        <section className="duse-section" id="ways" aria-labelledby="ways-title">
          <div className="dwrap">
            <div className="duse-heading"><div><span className="dkicker">TWO WAYS TO MAKE IT YOURS</span><h2 id="ways-title">댕이톡만으로.<br />핑과 함께라면, <span className="duse-heading-tail">더 우리 집답게.</span></h2></div><p>기본은 우리 가족의 메신저.<br />핑의 아바타 활용은 선택입니다.</p></div>
            <div className="duse-grid">
              <article className="duse-card duse-basic"><div className="duse-card-top"><span>01 / STANDALONE</span><b>기본 이용</b></div><h3>가족 메신저로<br />단독 사용하기.</h3><p>가족끼리 연락하고, 강아지 캐릭터와 함께 대화하는 기본 구성입니다. 이름·테마·강아지 참여 설정으로 우리 가족의 생활에 맞춥니다.</p><ul><li>초대한 가족의 대화방</li><li>같은 가족과 1:1 메시지</li><li>강아지 캐릭터와 우리 집 맞춤 설정</li></ul><a href="#screens">실제 메신저 화면 보기 <span>↗</span></a></article>
              <article className="duse-card duse-ping"><div className="duse-card-top"><span>02 / WITH PING</span><b>선택 기능</b></div><h3>핑에서 만든 아바타로,<br />우리 가족의 모습까지.</h3><p>핑에서 생성한 가족·강아지 아바타를 메신저에서도 재사용하는 확장 구성입니다. 아바타는 <a href="https://ping.ai.kr/" target="_blank" rel="noreferrer">핑</a>에서 만들고, 가족의 대화는 댕이톡에서 이어갑니다.</p><figure className="family-avatar-example"><div className="avatar-example-top"><span>가족 + 강아지 아바타</span><span>활용 예시</span></div><div className="avatar-example-grid">{["avatar-parent-1.webp", "avatar-parent-2.webp", "avatar-member-1.webp", "avatar-member-2.webp", "dog-avatar.webp"].map((name, index) => <img key={name} src={`${asset}/toobi-avatars/${name}`} width="320" height="320" alt={index === 4 ? "우리 강아지 아바타 활용 예시" : `가족 구성원 아바타 예시 ${index + 1}`} loading="lazy" decoding="async" />)}</div><figcaption>핑에서 만든 가족·강아지 아바타를<br />댕이톡에서도 이어 쓰는 활용 예시입니다.</figcaption></figure><a href="#custom">우리 집 맞춤 설정 보기 <span>↗</span></a></article>
            </div>
            <aside className="dprofile-planned" aria-labelledby="profile-planned-title"><span>개발 예정</span><div><h3 id="profile-planned-title">앞으로는, 내 사진으로도.</h3><p>본인 사진을 프로필에 업로드하는 기능은 아직 구현되지 않았습니다. 핑 아바타 활용과 별도로 추가할 예정입니다.</p></div></aside>
          </div>
        </section>

        <section className="dscreens" id="screens"><div className="dwrap"><DangitalkScreenTabs /></div></section>

        <section className="landing-story dang-motion-story" aria-labelledby="dang-motion-title">
          <div><p className="motion-eyebrow">OUR LITTLE MOMENTS</p><h2 id="dang-motion-title">우리 집 막내로,<br />웃음이 이어져요.</h2><p>강아지 이야기로 시작해,<br />가족의 오늘로 이어지는 대화.<br />초대한 가족 안에서 나눠요.</p><a className="motion-link" href="#screens">댕이톡 실제 화면 보기 <span>↗</span></a></div>
          <div><LandingMotion id="dang-landing-video" name="댕이톡 가족 애니메이션" repeatWhileVisible nativeLoop poster={`${asset}/landing-motion/dang-poster-v4.webp`} posterAlt="부모와 아이가 강아지와 함께 웃는 애니메이션" mobile={`${asset}/landing-motion/dang-mobile-v4.mp4`} desktop={`${asset}/landing-motion/dang-desktop-v4.mp4`} /><p className="motion-note">가족의 일상을 표현한 애니메이션</p></div>
        </section>

        <section className="dcustom" id="custom"><div className="dwrap custom-layout"><div className="settings-capture"><div className="device"><img src={`${asset}/app/dang-theme.jpg`} alt="실제 앱의 이름·견종·색상 설정 화면" width="390" height="844" /></div></div><div><span className="dkicker">MADE FOR YOUR HOME</span><h2>이름은 우리 집답게,<br />대화는 우리 리듬대로.</h2><p className="dtext">단독 사용에서도 이름·견종·테마 색을 고르고,<br />강아지 참여 설정을 가족의 생활에 맞춰 조절하는 구성입니다.</p><dl className="custom-facts"><div><dt>수다 정도</dt><dd>강아지가 대화에 함께하는 빈도</dd></div><div><dt>조용한 시간</dt><dd>강아지가 먼저 말 걸지 않을 시간</dd></div><div><dt>학교 시간엔 쉬기</dt><dd>평일 09:00–15:00, 강아지의 선제 메시지 쉬기</dd></div><div><dt>오늘의 질문</dt><dd>가족 모두에게 말을 걸 계기</dd></div></dl><div className="dog-expression-examples"><div><span>표정으로 전하는 막내의 마음</span><p>웃음과 애정도, 우리 강아지의 모습으로.</p></div><img src={`${asset}/toobi-avatars/dog-reaction-laugh.webp`} width="320" height="320" alt="웃는 강아지 아바타 표현 예시" loading="lazy" /><img src={`${asset}/toobi-avatars/dog-reaction-love.webp`} width="320" height="320" alt="애정을 표현하는 강아지 아바타 예시" loading="lazy" /></div><div className="planned"><span>개발 예정</span><p>자녀의 외부 링크 이동 제한과 개인 공부 모드도 준비하는 방향입니다. 현재 앱 설정과 구분해 안내합니다.</p></div></div></div></section>

        <section className="dfaq dwrap" id="faq"><div><span className="dkicker">GOOD TO KNOW</span><h2>가족과 시작하기 전에.</h2><p className="dtext">이용 범위와 제공 상태를 확인해 주세요.</p></div><div><details><summary>핑을 사용하지 않아도 댕이톡을 쓸 수 있나요?</summary><p>댕이톡은 단독으로도 사용하는 가족 메신저로 기획했습니다. 핑의 가족·강아지 아바타를 재사용하는 기능은 선택 사항입니다. 실제 서비스 제공 상태와 이용 경로는 정식 안내를 따라 주세요.</p></details><details><summary>핑의 아바타는 어떻게 활용하나요?</summary><p>핑에서 생성한 가족·강아지 아바타를 댕이톡의 가족 대화 공간에서도 이어 쓰는 확장 구성입니다. 아바타 생성은 핑에서 이루어지며, 실제 연동 범위와 이용 경로는 정식 서비스 안내를 따라 주세요.</p></details><details><summary>본인 사진을 프로필에 올릴 수 있나요?</summary><p>본인 사진을 업로드해 프로필로 사용하는 기능은 아직 구현되지 않았으며 개발 예정입니다.</p></details><details><summary>화면은 실제 댕이톡 앱인가요?</summary><p>대화방과 설정은 실제 댕이톡 UI에 데모 데이터를 넣어 캡처했습니다. 가족·강아지 아바타 이미지는 제공된 원본 자산을 활용한 예시이며, 화면 속 이름과 대화는 실제 이용자의 기록이 아닙니다.</p></details><details><summary>가족 이외의 사람과 대화할 수 있나요?</summary><p>가족 초대 중심의 공간이며 가족방과 같은 가족 구성원 사이의 1:1로 대화합니다. 공개 오픈채팅을 탐색하는 흐름을 두지 않습니다.</p></details><details><summary>자녀의 외부 링크 이동도 제한하나요?</summary><p>외부 링크 제한과 개인 공부 모드는 후속 개발 방향입니다. 휴대폰 전체의 브라우저나 다른 앱을 차단하는 기능을 뜻하지 않습니다.</p></details><details><summary>공신폰에서도 사용할 수 있나요?</summary><p>가족 연락을 남기는 용도로 소개하지만 설치·사용 가능 여부는 기기와 판매사 정책에 따라 확인해야 합니다.</p></details><details><summary>지금 바로 가입할 수 있나요?</summary><p>가입과 이용 가능 여부, 제공 시점은 정식 서비스 안내에서 확인해 주세요.</p></details></div></section>

        <section className="dclosing"><div className="dwrap"><img src={`${asset}/brand/dangitalk-dubi-d.webp`} alt="" width="45" height="45" /><h2>우리 가족의 메신저,<br />우리 집답게.</h2><p>댕이톡만으로 가족끼리 대화하고,<br />선택에 따라 핑의 아바타로 더 가까운 우리 집을 만들어가요.</p><a className="dcta" href="#screens">앱 화면 다시 보기 <span>↑</span></a></div></section>
      </main>

      <footer className="dfooter dwrap"><a className="dlogo" href="#top"><img src={`${asset}/brand/dangitalk-dubi-d.webp`} alt="" width="28" height="28" />댕이톡</a><Link href="/">운영 회사 하나RCPS ↗</Link><span>실제 앱 UI와 데모 데이터로 구성한 화면</span></footer>
    </div>
  );
}
