// @ts-nocheck
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  BookOpen,
  Dumbbell,
  Mail,
  MapPin,
  Menu,
  Moon,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const LOGO_SRC = "/images/hana_rcps_logo.png";
const BOOKQUEST_SCREEN_1 = "/images/bookquest_avatar.jpg";
const BOOKQUEST_SCREEN_2 = "/images/bookquest_mission.jpg";
const ICOACH_SCREEN_1 = "/images/icoach_main.jpg";
const ICOACH_SCREEN_2 = "/images/icoach_analysis.jpg";

// Higgsfield 생성 비주얼 (따뜻한 휴먼 무드)
const BG_ABOUT = "/images/bg_about.jpg";
const BG_WHY = "/images/bg_why.jpg";
const BG_TECH = "/images/bg_technology.jpg";
const PRODUCT_BOOKQUEST = "/images/product_bookquest.jpg";
const PRODUCT_ICOACH = "/images/product_icoach.jpg";
const DEMO_BOOKQUEST = "/images/demo_bookquest.jpg";
const DEMO_ICOACH = "/images/demo_icoach.jpg";

// WHY 섹션 카드 아이콘 (3D 아이소메트릭, nano_banana_pro)
const WHY_EDUCATION = "/images/why_education.png";
const WHY_SPORTS = "/images/why_sports.png";
const WHY_GAMIFICATION = "/images/why_gamification.png";
const WHY_UX = "/images/why_ux.png";

// Technology 섹션 프로세스 아이콘 (3D 아이소메트릭)
const TECH_UIUX = "/images/tech_uiux.png";
const TECH_AI = "/images/tech_ai.png";
const TECH_FRONTEND = "/images/tech_frontend.png";
const TECH_BACKEND = "/images/tech_backend.png";
const TECH_OPS = "/images/tech_ops.png";

// 아이언암(Iron Arm) 제품 티저
const PRODUCT_IRONARM = "/images/product_ironarm.png";

// Higgsfield 생성 영상 (이미지를 영상화한 루프)
const HERO_VIDEO = "/videos/main_loop.mp4";
const HERO_VIDEO_PORTRAIT = "/videos/main_loop_portrait.mp4";
const ABOUT_VIDEO = "/videos/about_loop.mp4";
const PRODUCT_BOOKQUEST_VIDEO = "/videos/product_bookquest.mp4";
const PRODUCT_ICOACH_VIDEO = "/videos/product_icoach.mp4";
const DEMO_BOOKQUEST_VIDEO = "/videos/demo_bookquest.mp4";
const DEMO_ICOACH_VIDEO = "/videos/demo_icoach.mp4";

const BOOKQUEST_URL = "https://bookquest.co.kr";
const ICOACH_URL = "https://icoach.ai.kr";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.75 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why", href: "#why" },
    { label: "Technology", href: "#technology" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className={isDarkMode ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-slate-50 text-slate-900"}>
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white md:block md:min-h-0">
        {/* 배경 영상: 데스크톱=가로(main_loop), 모바일=세로(portrait). 둘 다 화면을 채우며 위로 텍스트 오버레이 */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BG_WHY}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <video
          className="absolute inset-0 h-full w-full object-cover md:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={BG_WHY}
        >
          <source src={HERO_VIDEO_PORTRAIT} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-blue-950/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        <div className="absolute inset-0 overflow-hidden opacity-20">
          <motion.div
            animate={{ x: [0, 120, 0], y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute left-1/4 top-20 h-[1px] w-72 bg-cyan-300/60"
          />
          <motion.div
            animate={{ x: [0, -140, 0], y: [0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute right-1/4 top-40 h-[1px] w-80 bg-emerald-300/60"
          />
          <div className="absolute left-[-120px] top-[-120px] h-96 w-96 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full bg-emerald-400 blur-3xl" />
        </div>

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="하나RCPS 로고" className="h-12 w-12 rounded-2xl object-cover shadow-lg" />
            <div>
              <p className="text-lg font-bold tracking-tight">하나RCPS</p>
              <p className="text-xs text-cyan-100">hanarcps.com · AI App Development Company</p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm text-cyan-50 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-2xl border border-white/20 bg-white/10 p-3 text-white md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="relative z-20 mx-6 rounded-3xl border border-white/15 bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        <div className="relative z-10 mx-auto my-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-16 pt-10 md:my-0 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-20 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-cyan-50 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Human-Centered AI Applications
            </div>

            <h1 className="max-w-[270px] text-5xl font-extrabold leading-[1.12] tracking-tight sm:max-w-none md:text-6xl lg:text-7xl">
              AI로 더 나은
              <br />
              학습과 성장을
              <br />
              설계합니다
            </h1>

            <p className="mt-6 max-w-[250px] text-lg leading-8 text-slate-200 sm:max-w-2xl md:text-xl md:leading-9">
              하나RCPS는 AI 기술을 기반으로 교육, 독서, 스포츠 분야의 새로운 사용자 경험을 만드는 AI 앱 개발 회사입니다.
            </p>

            <div className="mt-8 flex flex-row gap-3 md:mt-9">
              <a href="#products" className="flex-1 sm:flex-none">
                <Button className="w-full whitespace-nowrap rounded-2xl bg-white px-3 py-5 text-sm text-slate-950 hover:bg-cyan-50 sm:w-auto sm:px-6 sm:py-6 sm:text-base">
                  서비스 살펴보기 <ArrowRight className="ml-1.5 hidden h-4 w-4 sm:ml-2 sm:inline-block" />
                </Button>
              </a>
              <a href="#contact" className="flex-1 sm:flex-none">
                <Button className="w-full whitespace-nowrap rounded-2xl border border-white/30 bg-white/10 px-3 py-5 text-sm text-white hover:bg-white/20 sm:w-auto sm:px-6 sm:py-6 sm:text-base">
                  프로젝트 문의하기
                </Button>
              </a>
            </div>

            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mt-7 inline-flex items-center rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur"
            >
              Official Website · hanarcps.com
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative hidden justify-center md:flex"
          >
            <div className="relative mx-auto h-[520px] w-full max-w-[520px]">
              <motion.div
                aria-hidden
                animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl"
              />
              <div className="hero-phone p1">
                <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl xl:w-[230px]">
                  <img src={BOOKQUEST_SCREEN_1} alt="BookQuest App" className="h-[430px] w-full rounded-[2rem] object-cover" />
                </div>
              </div>
              <div className="hero-phone p2">
                <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-amber-300/20 bg-black/30 p-3 shadow-2xl backdrop-blur-xl xl:w-[230px]">
                  <img src={ICOACH_SCREEN_1} alt="iCoach App" className="h-[430px] w-full rounded-[2rem] object-cover" />
                </div>
              </div>
              <div className="hero-phone p3">
                <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl xl:w-[230px]">
                  <img src={BOOKQUEST_SCREEN_2} alt="BookQuest Mission" className="h-[430px] w-full rounded-[2rem] object-cover" />
                </div>
              </div>
              <div className="hero-phone p4">
                <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl xl:w-[230px]">
                  <img src={ICOACH_SCREEN_2} alt="iCoach Analysis" className="h-[430px] w-full rounded-[2rem] object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 모바일 전용: 폰 캐러셀을 작게 줄여 영상 오른쪽 아래에 회전 오버레이 (스크롤 추가 없음) */}
        <div className="pointer-events-none absolute right-0 top-[40%] z-20 h-[520px] w-[520px] origin-top-right scale-[0.26] md:hidden">
          <div className="relative h-full w-full">
            <motion.div
              aria-hidden
              animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl"
            />
            <div className="hero-phone p1">
              <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <img src={BOOKQUEST_SCREEN_1} alt="BookQuest App" className="h-[430px] w-full rounded-[2rem] object-cover" />
              </div>
            </div>
            <div className="hero-phone p2">
              <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-amber-300/20 bg-black/30 p-3 shadow-2xl backdrop-blur-xl">
                <img src={ICOACH_SCREEN_1} alt="iCoach App" className="h-[430px] w-full rounded-[2rem] object-cover" />
              </div>
            </div>
            <div className="hero-phone p3">
              <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <img src={BOOKQUEST_SCREEN_2} alt="BookQuest Mission" className="h-[430px] w-full rounded-[2rem] object-cover" />
              </div>
            </div>
            <div className="hero-phone p4">
              <div className="w-[210px] overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <img src={ICOACH_SCREEN_2} alt="iCoach Analysis" className="h-[430px] w-full rounded-[2rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" label="ABOUT HANA RCPS" title={<>기술보다 중요한 것은<br />사람의 변화입니다</>} bgImage={BG_ABOUT} bgVideo={ABOUT_VIDEO}>
        하나RCPS는 단순한 기능 개발이 아니라, 사용자의 행동과 성장을 만들어내는 AI 서비스를 설계합니다.
        <br />
        우리는 AI를 통해 배움이 더 즐거워지고, 훈련이 더 효과적이며, 성장이 더 지속될 수 있다고 믿습니다.
      </Section>

      <motion.section
        id="products"
        className="bg-white py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="mb-3 font-semibold text-blue-600">PRODUCTS</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">현재 개발 중인 AI 서비스</h2>
          </div>

          <motion.div className="mb-16 grid gap-6 md:grid-cols-2" variants={stagger}>
            <FeatureCard
              image={PRODUCT_BOOKQUEST}
              video={PRODUCT_BOOKQUEST_VIDEO}
              eyebrow="BookQuest"
              title="AI 독서 성장 플랫폼"
              desc="아이의 관심사에 맞춰 AI가 질문과 독후 활동을 추천하고, 퀘스트로 독서 습관을 만듭니다."
              href={BOOKQUEST_URL}
              accent="violet"
            />
            <FeatureCard
              image={PRODUCT_ICOACH}
              video={PRODUCT_ICOACH_VIDEO}
              eyebrow="iCoach"
              title="AI 야구 자세 분석"
              desc="스윙·투구 영상을 AI가 분석해 균형과 임팩트를 점수화하고 개선점을 제안합니다."
              href={ICOACH_URL}
              accent="amber"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-950 shadow-md"
          >
            <div className="grid items-center md:grid-cols-2">
              <div className="relative h-56 overflow-hidden md:h-full md:min-h-[320px]">
                <img src={PRODUCT_IRONARM} alt="Iron Arm" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 to-transparent md:bg-gradient-to-l" />
              </div>
              <div className="p-8 text-white md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
                  COMING SOON · 출시 예정
                </span>
                <h3 className="mt-4 text-2xl font-bold md:text-3xl">Iron Arm · AI 투구 분석</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  성인·선수용 투구 영상을 AI가 분석해 어깨·팔 동작과 밸런스를 정밀 진단하고, 부상 위험과 개선 포인트를 리포트로 제공합니다.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>

      <motion.section
        id="why"
        className={isDarkMode ? "relative overflow-hidden bg-slate-900 py-28" : "relative overflow-hidden bg-slate-100 py-28"}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={BG_WHY} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className={isDarkMode ? "absolute inset-0 bg-slate-900/85" : "absolute inset-0 bg-gradient-to-b from-slate-100/90 via-slate-50/78 to-slate-100/92"} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-7xl">
            <p className="mb-3 font-semibold text-emerald-600">WHY HANA RCPS</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              AI, 교육, 스포츠를
              <br />
              하나의 성장 경험으로 연결합니다
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {[
              ["AI + Education", "독서와 학습 데이터를 기반으로 개인 맞춤형 성장 경험을 제공합니다.", WHY_EDUCATION],
              ["AI + Sports", "동작 분석과 AI 피드백을 통해 훈련 효율과 성장 속도를 높입니다.", WHY_SPORTS],
              ["Gamification", "레벨, 미션, 보상 구조를 통해 지속 가능한 몰입 경험을 만듭니다.", WHY_GAMIFICATION],
              ["Human-Centered UX", "기술 중심이 아닌 사용자 중심의 경험 설계를 추구합니다.", WHY_UX],
            ].map(([title, desc, img]) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 p-6">
                  <img
                    src={img}
                    alt={title}
                    className="h-28 w-28 object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-7 text-slate-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="technology"
        className="relative overflow-hidden"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img src={BG_TECH} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/92 via-slate-50/88 to-white/92" />
        <div className="relative mx-auto max-w-7xl px-6 py-28">
          <div className="max-w-4xl">
            <p className="mb-3 font-semibold text-emerald-600">TECHNOLOGY</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              기획부터 AI 서비스 운영까지
              <br />
              전체 개발 과정을 함께합니다
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              UI/UX 디자인, AI 기능 설계, 프론트엔드 개발, 백엔드 구축, 서비스 운영까지 하나RCPS가 전 과정을 함께합니다.
            </p>
          </div>

          <motion.div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-5" variants={stagger}>
            {[
              ["01", "UI/UX 디자인", "사용자 흐름과 화면을 설계", TECH_UIUX],
              ["02", "AI 기능 설계", "AI 모델·기능 아키텍처 기획", TECH_AI],
              ["03", "프론트엔드 개발", "반응형 화면을 구현", TECH_FRONTEND],
              ["04", "백엔드 구축", "서버·DB·API 구축", TECH_BACKEND],
              ["05", "서비스 운영", "배포·모니터링·개선", TECH_OPS],
            ].map(([no, t, d, img]) => (
              <motion.div
                key={no}
                variants={fadeUp}
                className="group flex flex-col items-center rounded-3xl border border-white/60 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50">
                  <img src={img} alt={t} className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-xs font-bold tracking-widest text-cyan-600">{no}</span>
                <h3 className="mt-1 text-base font-bold text-slate-900">{t}</h3>
                <p className="mt-1 text-xs leading-6 text-slate-500">{d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section id="contact" className="bg-slate-950 py-20 text-white" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-semibold text-cyan-300">CONTACT</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              함께 성장할
              <br />
              AI 서비스를 이야기해보세요
            </h2>
            <p className="mt-5 text-slate-300">AI 앱 개발, 교육 플랫폼, 스포츠 코칭 서비스, 신규 프로젝트 및 협업 문의를 환영합니다.</p>
          </div>
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur">
            <div className="mb-5 flex gap-4">
              <MapPin className="mt-1 h-5 w-5 text-cyan-300" />
              <p>경기도 수원시 영통구 광교중앙로248번길 7-3, 3층</p>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 text-cyan-300" />
              <a href="mailto:yunagunwoo@gmail.com" className="hover:text-cyan-200">yunagunwoo@gmail.com</a>
            </div>
          </div>
        </div>
      </motion.section>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>© 2026 HANA RCPS. All rights reserved.</div>
          <div className="flex flex-col gap-1 md:items-end">
            <p>Official Website · hanarcps.com</p>
            <p>AI App Development Company</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, label, title, children, bgImage, bgVideo }) {
  return (
    <motion.section id={id} className="relative overflow-hidden" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      {(bgImage || bgVideo) && (
        <>
          {bgVideo ? (
            <video
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={bgImage}
            >
              <source src={bgVideo} type="video/mp4" />
            </video>
          ) : (
            <img src={bgImage} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/92 via-slate-50/86 to-white/90" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-4xl">
          <p className="mb-3 font-semibold text-emerald-600">{label}</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">{children}</p>
        </div>
      </div>
    </motion.section>
  );
}

function AppCard({ title, subtitle, image, dark = false }) {
  return (
    <motion.div variants={fadeScale} className={dark ? "overflow-hidden rounded-[2rem] bg-slate-950 p-5 shadow-xl" : "overflow-hidden rounded-[2rem] bg-slate-50 p-5 shadow-sm"}>
      <div className="mb-5">
        <p className={dark ? "text-sm font-semibold text-amber-300" : "text-sm font-semibold text-violet-600"}>{title}</p>
        <h3 className={dark ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-900"}>{subtitle}</h3>
      </div>
      <div className={dark ? "flex justify-center rounded-[1.5rem] bg-black/30 p-4" : "flex justify-center rounded-[1.5rem] bg-white p-4"}>
        <img src={image} alt={title} className="max-h-[620px] rounded-[1.5rem] object-contain shadow-lg" />
      </div>
    </motion.div>
  );
}

function FeatureCard({ image, video, eyebrow, title, desc, href, accent }) {
  const isAmber = accent === "amber";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      variants={fadeScale}
      whileHover={{ y: -6 }}
      className="group block overflow-hidden rounded-[2rem] bg-white shadow-md ring-1 ring-slate-100 transition hover:shadow-2xl"
    >
      <div className="relative h-60 overflow-hidden">
        {video ? (
          <video
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={image}
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={image}
            alt={eyebrow}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-5 left-6 right-6">
          <p className={isAmber ? "text-sm font-semibold text-amber-300" : "text-sm font-semibold text-violet-200"}>{eyebrow}</p>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-7">
        <p className="leading-7 text-slate-600">{desc}</p>
        <span className={isAmber ? "mt-5 inline-flex items-center text-sm font-bold text-amber-600" : "mt-5 inline-flex items-center text-sm font-bold text-violet-700"}>
          자세히 보기 <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
}

function DemoCard({ title, label, image, video, question, answer, href, button, theme }) {
  const isAmber = theme === "amber";
  return (
    <div className={isAmber ? "rounded-[2rem] bg-gradient-to-br from-slate-950 to-amber-950 p-7 text-white shadow-xl" : "rounded-[2rem] bg-gradient-to-br from-violet-50 to-white p-7 text-slate-900 shadow-sm"}>
      {(video || image) && (
        <div className={isAmber ? "mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5" : "mb-6 overflow-hidden rounded-2xl border border-violet-100 bg-white"}>
          {video ? (
            <video className="aspect-[4/3] w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster={image}>
              <source src={video} type="video/mp4" />
            </video>
          ) : (
            <img src={image} alt="" className="aspect-[4/3] w-full object-cover" />
          )}
        </div>
      )}
      <p className={isAmber ? "mb-3 text-sm font-semibold text-amber-300" : "mb-3 text-sm font-semibold text-violet-600"}>{label}</p>
      <h3 className="mb-5 text-2xl font-bold">{title}</h3>
      <div className={isAmber ? "rounded-2xl bg-white/10 p-4 text-sm" : "rounded-2xl bg-slate-100 p-4 text-sm"}>{question}</div>
      <div className={isAmber ? "mt-4 rounded-2xl bg-amber-400/10 p-5 text-sm leading-7" : "mt-4 rounded-2xl bg-violet-600 p-5 text-sm leading-7 text-white"}>{answer}</div>
      <a href={href} target="_blank" rel="noreferrer" className={isAmber ? "mt-6 inline-flex items-center text-sm font-bold text-amber-300" : "mt-6 inline-flex items-center text-sm font-bold text-violet-700"}>
        {button} <ArrowRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  );
}

function Button({ children, className = "", ...props }) {
  return (
    <button className={`inline-flex items-center justify-center font-semibold transition ${className}`} {...props}>
      {children}
    </button>
  );
}
