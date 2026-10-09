/* eslint-disable @next/next/no-img-element -- Approved fixed-size WebP assets preserve the reviewed layout. */
import type { Metadata } from "next";
import Link from "next/link";
import CompanyHeader from "@/components/company-header";
import LandingMotion from "@/components/landing-motion";
import "./company.css";

export const metadata: Metadata = {
 title: "하나RCPS — 일상을 잇는 디지털 서비스",
 description: "사진으로 나누는 안부, 가족만의 대화, 배움과 훈련의 경험. 하나RCPS의 대표 서비스 핑과 댕이톡을 만나보세요.",
 alternates: { canonical: "https://hanarcps.com/" },
};

export default function Home() {
 return (<div className="company-site">
  <a className="skip-link" href="#main">본문 바로가기</a>
  <CompanyHeader />
  <main id="main">
    <section className="hero" id="top" aria-labelledby="hero-title">
      <svg className="hero-lines" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-80 690C360 790 990 390 1560 340"/><path d="M-80 625C420 735 880 270 1560 260"/><path d="M-80 565C480 660 880 190 1560 185"/></svg>
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow"><span className="signal-dot" aria-hidden="true"></span> DIGITAL EXPERIENCES, CLOSER TO LIFE</p>
          <h1 id="hero-title">일상은 더 가깝게.<br />연결은 더 <em>새롭게.</em></h1>
          <p className="hero-description">기록하고, 대화하고, 배우는 순간.<br />하나RCPS는 사람과 일상을 잇는 서비스를 만듭니다.</p>
          <div className="hero-actions"><a className="button button-white" href="#services">우리의 서비스 <span aria-hidden="true">↘</span></a><a className="hero-ping-link" href="https://ping.ai.kr/" target="_blank" rel="noopener">대표 서비스 핑 만나보기 <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-art">
          <div className="art-orbit orbit-one" aria-hidden="true"></div><div className="art-orbit orbit-two" aria-hidden="true"></div>
          <span className="art-word art-word-ping" aria-hidden="true">PING<span>사진으로 나누는 안부</span></span>
          <LandingMotion id="company-family-video" name="가족의 일상 애니메이션" className="brand-motion" poster="/renewal/assets/landing-motion/ping-poster-v1.webp" posterAlt="부모와 아이가 강아지와 함께 웃는 가족 애니메이션" mobile="/renewal/assets/landing-motion/ping-mobile-v1.mp4" desktop="/renewal/assets/landing-motion/ping-desktop-v1.mp4" priority repeatWhileVisible minimalControls />
          <span className="art-word art-word-dang" aria-hidden="true">댕이톡<span>우리 가족만의 대화</span></span>
          <p className="art-caption">작은 순간이, 우리를 이어주니까.</p>
        </div>
      </div>
      <div className="shell hero-bottom"><span>EVERYDAY, MORE CONNECTED.</span><a href="#services">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
    </section>

    <section className="portfolio shell" id="services" aria-labelledby="services-title">
      <div className="section-heading"><div><p className="eyebrow">01 / OUR SERVICES</p><h2 id="services-title">서로 다른 경험.<br />하나로 이어지는 일상.</h2></div><p className="section-description">가족의 안부부터 배움과 훈련까지.<br />일상에 필요한 연결을 서비스로 만듭니다.</p></div>
      <div className="featured-services">
        <article className="service-feature service-ping">
          <a className="service-visual ping-visual" href="https://ping.ai.kr/" target="_blank" rel="noopener" aria-label="대표 서비스 핑 알아보기"><img src="/renewal/assets/ping-photos.webp" width="1536" height="1024" alt="강아지, 식사, 산책 등 사진으로 남기는 일상 여섯 가지 구성 예시" loading="lazy" decoding="async" /><span className="visual-caption">각자의 오늘이, 우리 가족의 기록으로.</span><span className="visual-arrow" aria-hidden="true">↗</span></a>
          <div className="service-meta"><div className="service-title-line"><h3>핑 <span>PING</span></h3><span className="featured-label">대표 서비스</span></div><p className="service-promise">한 장의 사진으로 나누는 가족의 안부.</p><p className="service-description">오늘의 순간을 나누고, 가족만의 추억을 쌓아요.</p><a className="text-link" href="https://ping.ai.kr/" target="_blank" rel="noopener">핑 만나보기 <span aria-hidden="true">↗</span></a></div>
        </article>
        <article className="service-feature service-dang">
          <Link className="service-visual dang-visual" href="/dangitalk" aria-label="댕이톡 알아보기"><span className="dang-visual-ring" aria-hidden="true"></span><div className="app-frame"><img src="/renewal/assets/app/dang-family.jpg" width="390" height="844" alt="강아지 캐릭터가 가족의 대화에 참여하는 댕이톡 실제 앱 화면 · 데모 대화" loading="lazy" decoding="async" /></div><span className="visual-caption">가족의 대화에, 우리 집 막내도 함께.</span><span className="visual-arrow" aria-hidden="true">↗</span></Link>
          <div className="service-meta"><div className="service-title-line"><h3><img src="/renewal/assets/brand/dangitalk-dubi-d.webp" width="28" height="28" alt="" />댕이톡</h3><span className="service-category">FAMILY MESSENGER</span></div><p className="service-promise">우리 가족만의 메신저. 강아지도 함께.</p><p className="service-description">단독 사용을 기본으로, 핑 아바타는 선택으로.</p><Link className="text-link" href="/dangitalk">댕이톡 만나보기 <span aria-hidden="true">↗</span></Link></div>
        </article>
      </div>
      <div className="more-services"><p className="eyebrow">AND MORE, IN EVERYDAY LIFE</p><div className="service-directory"><a href="https://bookquest.co.kr" target="_blank" rel="noopener"><span className="directory-index">03</span><div><h3>BookQuest</h3><p>읽고 배우며 성장하는 독서 경험</p></div><span className="directory-arrow" aria-hidden="true">↗</span></a><a href="https://icoach.ai.kr" target="_blank" rel="noopener"><span className="directory-index">04</span><div><h3>iCoach</h3><p>움직임을 분석하는 스포츠 훈련 경험</p></div><span className="directory-arrow" aria-hidden="true">↗</span></a></div></div>
    </section>

    <section className="approach" id="approach" aria-labelledby="approach-title"><div className="shell">
      <div className="section-heading"><div><p className="eyebrow">02 / OUR APPROACH</p><h2 id="approach-title">좋은 서비스는,<br />생활에서 시작됩니다.</h2></div><p className="section-description">더 많은 기능보다,<br />사람에게 필요한 경험을 먼저 생각합니다.</p></div>
      <div className="principles"><article><span className="principle-number">01</span><h3>가볍게 시작하는 경험</h3><p>핑에서는 긴 설명 대신 한 장의 사진으로.<br />일상에서 자연스럽게 사용할 수 있는<br />간결한 흐름을 생각합니다.</p></article><article><span className="principle-number">02</span><h3>사람에 맞추는 경험</h3><p>댕이톡의 이름, 견종, 테마와 참여 설정.<br />모두에게 같은 방식보다<br />우리 가족에게 맞는 경험을 만듭니다.</p></article><article><span className="principle-number">03</span><h3>목적이 분명한 경험</h3><p>가족에게 안부를 전하고, 책을 읽고,<br />움직임을 돌아보는 순간까지.<br />각 서비스의 본질에 집중합니다.</p></article></div>
    </div></section>

    <section className="about shell" id="about" aria-labelledby="about-title">
      <div className="about-copy"><p className="eyebrow">03 / ABOUT HANA RCPS</p><h2 id="about-title">일상의 다음 연결을<br />만드는 회사.</h2><p>하나RCPS는 기록과 소통, 배움과 훈련을 위한<br />디지털 서비스를 기획하고 개발합니다.</p><span className="about-wordmark" aria-hidden="true">HANA<span>RCPS</span></span></div>
      <dl className="company-facts"><div><dt>회사명</dt><dd>하나RCPS <span>HANA RCPS</span></dd></div><div><dt>서비스</dt><dd>핑 · 댕이톡 · BookQuest · iCoach</dd></div><div><dt>소재지</dt><dd>경기도 수원시 영통구<br />광교중앙로248번길 7-3, 3층</dd></div><div><dt>문의</dt><dd><a href="mailto:yunagunwoo@gmail.com">yunagunwoo@gmail.com <span aria-hidden="true">↗</span></a></dd></div></dl>
    </section>

    <section className="contact" id="contact" aria-labelledby="contact-title"><div className="shell contact-grid"><div><p className="eyebrow">LET’S CONNECT</p><h2 id="contact-title">이야기의 시작은,<br />하나의 연결에서.</h2><p>서비스에 관한 문의와 협업 제안을 들려주세요.</p><a className="contact-email" href="mailto:yunagunwoo@gmail.com">yunagunwoo@gmail.com <span aria-hidden="true">↗</span></a></div><div className="support-directory"><p>서비스 이용 안내</p><a href="https://ping.ai.kr/" target="_blank" rel="noopener">핑 <span>서비스 소개 및 이용 안내</span><b aria-hidden="true">↗</b></a><Link href="/dangitalk#faq">댕이톡 <span>가족 공간 및 이용 범위</span><b aria-hidden="true">↗</b></Link></div></div></section>
  </main>
  <footer className="site-footer"><div className="shell footer-inner"><span className="footer-brand">하나RCPS</span><span>© 2026 HANA RCPS</span><a href="#top">맨 위로 <span aria-hidden="true">↑</span></a></div></footer>
</div>);
}
