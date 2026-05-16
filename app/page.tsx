// @ts-nocheck
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, BookOpen, Dumbbell, Mail, MapPin, Menu, Moon, Sparkles, Sun, X } from "lucide-react";
// 배포 편의를 위해 shadcn/ui 의존성을 제거하고 로컬 컴포넌트로 대체했습니다.

// 실제 배포 시 public/images 폴더에 아래 파일명으로 저장하면 이미지가 정상 표시됩니다.
const LOGO_SRC = "/images/hana_rcps_logo.png";
const BOOKQUEST_SCREEN_1 = "/images/bookquest_avatar.jpg";
const BOOKQUEST_SCREEN_2 = "/images/bookquest_mission.jpg";
const ICOACH_SCREEN_1 = "/images/icoach_main.jpg";
const ICOACH_SCREEN_2 = "/images/icoach_analysis.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.94, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

export default function HanaRCPSLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Why", href: "#why" },
    { label: "Demo", href: "#demo" },
    { label: "Technology", href: "#technology" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className={isDarkMode ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-slate-50 text-slate-900"}>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-900 text-white">
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
              <a key={item.href} href={item.href} className="hover:text-white">{item.label}</a>
            ))}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="rounded-full border border-white/20 bg-white/10 p-2 hover:bg-white/20"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-2xl border border-white/20 bg-white/10 p-3 text-white md:hidden"
            aria-label="Open mobile menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {isMenuOpen && (
          <div className="relative z-20 mx-6 rounded-3xl border border-white/15 bg-slate-950/90 p-4 text-white shadow-2xl backdrop-blur md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="mt-2 flex items-center gap-2 rounded-2xl px-4 py-3 text-left text-sm hover:bg-white/10"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                {isDarkMode ? "라이트 모드" : "다크 모드"}
              </button>
            </div>
          </div>
        )}

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-28 pt-16 md:grid-cols-2 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-cyan-50 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Human-Centered AI Applications
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              AI로 더 나은
              <br />
              <span className="bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-transparent">학습과 성장</span>을 설계합니다
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              하나RCPS는 AI 기술을 바탕으로 독서, 교육, 스포츠 코칭 분야의 새로운 앱 경험을 만드는 AI 앱 개발회사입니다.
            </p>
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="mt-7 inline-flex items-center rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-sm text-cyan-100 backdrop-blur"
            >
              Official Website · hanarcps.com
            </motion.div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#products">
                <Button className="w-full rounded-2xl bg-white px-6 py-6 text-slate-950 hover:bg-cyan-50 sm:w-auto">
                  개발 서비스 보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="w-full rounded-2xl border-white/30 bg-white/10 px-6 py-6 text-white hover:bg-white/20 sm:w-auto">
                  문의하기
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl md:block" />
            <div className="absolute -bottom-8 right-0 hidden h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl md:block" />

            <div className="relative flex items-center gap-6">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="hidden md:block"
              >
                <div className="w-[220px] overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                  <img
                    src={BOOKQUEST_SCREEN_1}
                    alt="BookQuest App"
                    className="h-[390px] w-full rounded-[2rem] object-contain"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative overflow-hidden rounded-[2.8rem] border border-amber-300/20 bg-black/30 p-3 shadow-[0_0_60px_rgba(255,215,100,0.15)] backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-300/5 via-transparent to-cyan-300/5" />
                  <img
                    src={ICOACH_SCREEN_1}
                    alt="iCoach App"
                    className="relative h-[520px] w-auto rounded-[2.2rem] border border-white/5 object-contain shadow-2xl"
                  />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="hidden lg:block"
              >
                <div className="w-[220px] overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                  <img
                    src={ICOACH_SCREEN_2}
                    alt="iCoach Analysis"
                    className="h-[390px] w-full rounded-[2rem] object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        className="mx-auto max-w-7xl px-6 py-24"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-3xl">
          <p className="mb-3 font-semibold text-emerald-600">ABOUT HANA RCPS</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">사람의 성장을 돕는 AI 기술을 만듭니다</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            하나RCPS는 단순한 앱 제작을 넘어, 데이터와 인공지능을 기반으로 사용자에게 실질적인 도움을 주는 서비스를 개발합니다. 독서 경험을 확장하는 BookQuest와 스포츠 훈련을 돕는 iCoach를 중심으로 AI 기반 성장 플랫폼을 만들어갑니다.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="products"
        className="bg-white py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-semibold text-blue-600">PRODUCTS</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">현재 개발 중인 AI 서비스</h2>
            </div>
            <p className="max-w-xl text-slate-600">교육, 독서, 스포츠 코칭 분야에서 사용자 맞춤형 경험을 제공하는 AI 앱 서비스를 개발하고 있습니다.</p>
          </div>

          <motion.div className="mb-14 grid gap-6 md:grid-cols-2" variants={stagger}>
            <motion.div variants={fadeScale} className="overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-violet-500">BOOKQUEST APP UI</p>
                  <h3 className="text-2xl font-bold text-slate-900">게이미피케이션 독서 플랫폼</h3>
                </div>
                <div className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                  Live Preview
                </div>
              </div>
              <div className="flex justify-center rounded-[1.5rem] bg-white/70 p-4">
                <img
                  src={BOOKQUEST_SCREEN_1}
                  alt="BookQuest Avatar Screen"
                  className="max-h-[620px] rounded-[1.5rem] border border-violet-100 object-contain shadow-lg"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeScale} className="overflow-hidden rounded-[2rem] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-white p-5 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-cyan-500">MISSION & QUEST SYSTEM</p>
                  <h3 className="text-2xl font-bold text-slate-900">AI 기반 독서 성장 경험</h3>
                </div>
                <div className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
                  Quest UI
                </div>
              </div>
              <div className="flex justify-center rounded-[1.5rem] bg-white/70 p-4">
                <img
                  src={BOOKQUEST_SCREEN_2}
                  alt="BookQuest Mission Screen"
                  className="max-h-[620px] rounded-[1.5rem] border border-cyan-100 object-contain shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="mb-14 grid gap-6 md:grid-cols-2" variants={stagger}>
            <motion.div variants={fadeScale} className="overflow-hidden rounded-[2rem] border border-amber-100 bg-gradient-to-br from-[#18120b] to-[#2b1f0f] p-5 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-wide text-amber-300">ICOACH APP UI</p>
                  <h3 className="text-2xl font-bold text-amber-100">AI 야구 자세 분석 플랫폼</h3>
                </div>
                <div className="rounded-full border border-amber-300/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-200">
                  AI Baseball Coach
                </div>
              </div>
              <div className="flex justify-center rounded-[1.5rem] bg-black/30 p-4">
                <img
                  src={ICOACH_SCREEN_1}
                  alt="iCoach Main Screen"
                  className="max-h-[620px] rounded-[1.5rem] border border-amber-300/10 object-contain shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeScale} className="overflow-hidden rounded-[2rem] border border-yellow-100 bg-gradient-to-br from-[#0b0b0b] via-[#141414] to-[#1c1608] p-5 shadow-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-wide text-yellow-300">AI MOTION ANALYSIS</p>
                  <h3 className="text-2xl font-bold text-yellow-100">실시간 자세 피드백 시스템</h3>
                </div>
                <div className="rounded-full border border-yellow-300/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-200">
                  Smart Coaching
                </div>
              </div>
              <div className="flex justify-center rounded-[1.5rem] bg-black/30 p-4">
                <img
                  src={ICOACH_SCREEN_2}
                  alt="iCoach Analysis Screen"
                  className="max-h-[620px] rounded-[1.5rem] border border-yellow-300/10 object-contain shadow-2xl"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="grid gap-6 md:grid-cols-2" variants={stagger}>
            <motion.div variants={fadeUp}>
              <ProductCard
              icon={<BookOpen className="h-7 w-7" />}
              title="BookQuest"
              label="AI Reading Platform"
              description="사용자의 관심사와 독서 취향을 분석해 더 좋은 책과 콘텐츠를 발견하도록 돕는 AI 기반 독서 탐색 플랫폼입니다."
              features={["AI 책 추천", "독서 가이드", "리뷰 탐색", "시리즈 큐레이션"]}
            />
            </motion.div>
            <motion.div variants={fadeUp}>
              <ProductCard
              icon={<Dumbbell className="h-7 w-7" />}
              title="iCoach"
              label="AI Sports Coaching"
              description="야구 자세와 훈련 데이터를 AI로 분석해 더 효율적인 훈련과 자세 교정을 지원하는 스포츠 코칭 플랫폼입니다."
              features={["자세 분석", "AI 피드백", "훈련 기록", "성장 데이터 추적"]}
            />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="why"
        className={isDarkMode ? "bg-slate-900 py-24" : "bg-slate-100 py-24"}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-semibold text-emerald-600">WHY HANA RCPS</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">AI, 교육, 스포츠를 하나의 성장 경험으로 연결합니다</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["AI + Education", "독서와 학습 데이터를 활용해 개인화된 성장 경험을 설계합니다."],
              ["AI + Sports", "동작 분석과 피드백으로 스포츠 훈련의 효율을 높입니다."],
              ["Gamification", "미션, 레벨, 캐릭터 성장 구조로 앱 사용 경험을 재미있게 만듭니다."],
              ["Human-Centered UX", "기술보다 사용자의 이해와 행동 변화를 먼저 생각합니다."],
            ].map(([title, desc]) => (
              <motion.div key={title} variants={fadeUp} className={isDarkMode ? "rounded-3xl bg-white/5 p-7 shadow-sm" : "rounded-3xl bg-white p-7 shadow-sm"}>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className={isDarkMode ? "leading-7 text-slate-300" : "leading-7 text-slate-600"}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="demo"
        className={isDarkMode ? "bg-slate-950 py-24" : "bg-white py-24"}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 font-semibold text-blue-600">AI DEMO EXPERIENCE</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">사용자가 바로 이해할 수 있는 AI 데모</h2>
            <p className={isDarkMode ? "mt-5 text-slate-300" : "mt-5 text-slate-600"}>서비스 출시 전에도 핵심 기능을 직관적으로 보여줄 수 있는 데모형 UI입니다.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-7 text-slate-900 shadow-sm">
              <p className="mb-3 text-sm font-semibold text-violet-600">BookQuest Demo</p>
              <h3 className="mb-5 text-2xl font-bold">AI에게 책을 질문하기</h3>
              <div className="rounded-2xl bg-slate-100 p-4 text-sm">왜 어린왕자는 초등학생에게 좋은 책인가요?</div>
              <div className="mt-4 rounded-2xl bg-violet-600 p-5 text-sm leading-7 text-white shadow-lg">
                어린왕자는 상상력, 관계, 책임이라는 주제를 쉽게 이해할 수 있게 도와줍니다. BookQuest는 아이의 관심사에 맞춰 질문과 독후 활동을 추천합니다.
              </div>
              <a href="https://bookquest.co.kr" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center text-sm font-bold text-violet-700">
                BookQuest 바로가기 <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            <div className="rounded-[2rem] border border-amber-200 bg-gradient-to-br from-slate-950 to-amber-950 p-7 text-white shadow-xl">
              <p className="mb-3 text-sm font-semibold text-amber-300">iCoach Demo</p>
              <h3 className="mb-5 text-2xl font-bold">AI 자세 분석 리포트</h3>
              <div className="rounded-2xl bg-white/10 p-4 text-sm">스윙 영상 업로드 → AI 분석 중</div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-2xl bg-amber-400/10 p-4 text-sm">균형 점수 86점 · 임팩트 구간 안정적</div>
                <div className="rounded-2xl bg-white/10 p-4 text-sm">개선 제안: 팔로스루 각도를 조금 더 크게 유지하세요.</div>
              </div>
              <a href="https://icoach.ai.kr" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center text-sm font-bold text-amber-300">
                iCoach 바로가기 <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="technology"
        className="mx-auto max-w-7xl px-6 py-24"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-semibold text-cyan-600">TECHNOLOGY</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">앱 개발부터 AI 분석까지</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="https://bookquest.co.kr" target="_blank" rel="noreferrer">
              <Button className="w-full rounded-2xl bg-violet-600 px-5 py-5 text-white hover:bg-violet-700 sm:w-auto">BookQuest 보기</Button>
            </a>
            <a href="https://icoach.ai.kr" target="_blank" rel="noreferrer">
              <Button className="w-full rounded-2xl bg-amber-500 px-5 py-5 text-slate-950 hover:bg-amber-400 sm:w-auto">iCoach 보기</Button>
            </a>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <BrainCircuit className="mb-5 h-10 w-10 text-blue-600" />
              <h3 className="mb-3 text-xl font-bold">AI Intelligence</h3>
              <p className="leading-7 text-slate-600">추천, 분석, 피드백 기술을 통해 사용자에게 개인화된 앱 경험을 제공합니다.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <BookOpen className="mb-5 h-10 w-10 text-emerald-600" />
              <h3 className="mb-3 text-xl font-bold">Education Platform</h3>
              <p className="leading-7 text-slate-600">독서와 학습 경험을 확장하는 교육 중심 디지털 플랫폼을 설계합니다.</p>
            </CardContent>
          </Card>
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <Sparkles className="mb-5 h-10 w-10 text-cyan-600" />
              <h3 className="mb-3 text-xl font-bold">Mobile App UX</h3>
              <p className="leading-7 text-slate-600">모바일 환경에 최적화된 직관적이고 신뢰감 있는 사용자 경험을 만듭니다.</p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="bg-slate-950 py-20 text-white"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-semibold text-cyan-300">CONTACT</p>
            <h2 className="text-3xl font-bold md:text-5xl">함께 성장할 AI 서비스를 이야기해보세요</h2>
            <p className="mt-5 text-slate-300">앱 개발, AI 서비스, 제휴 및 협업 문의를 환영합니다.</p>
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://bookquest.co.kr" target="_blank" rel="noreferrer" className="rounded-2xl bg-white px-5 py-3 text-center text-sm font-bold text-slate-950 hover:bg-cyan-50">BookQuest 방문</a>
              <a href="https://icoach.ai.kr" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/20 px-5 py-3 text-center text-sm font-bold text-white hover:bg-white/10">iCoach 방문</a>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-10 text-slate-700">
        <div className="mx-auto max-w-7xl rounded-3xl bg-white p-6 shadow-sm">
          <p className="mb-2 text-sm font-bold text-slate-900">배포용 파일 위치</p>
          <p className="text-sm leading-7">
            이미지 파일은 public/images 폴더에 저장하세요. 사용 파일명: hana_rcps_logo.png, bookquest_avatar.jpg, bookquest_mission.jpg, icoach_main.jpg, icoach_analysis.jpg, og-hanarcps.jpg
          </p>
          <p className="mt-4 text-sm leading-7">
            SEO 권장값 — Title: 하나RCPS | AI 앱 개발회사 · Description: AI 기반 독서, 교육, 스포츠 코칭 앱을 개발하는 하나RCPS 공식 홈페이지 · Keywords: AI 앱 개발, AI 교육 플랫폼, 독서 AI 앱, 야구 자세 분석 AI
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 HANA RCPS. All rights reserved.
          </div>
          <div className="flex flex-col gap-1 md:items-end">
            <p>Official Website · hanarcps.com</p>
            <p>AI App Development Company</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ProductCard({ icon, title, label, description, features }) {
  return (
    <Card className="group overflow-hidden rounded-[2rem] border border-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="p-8">
        <div className="mb-7 flex items-center justify-between">
          <div className="rounded-2xl bg-slate-100 p-4 text-blue-700">{icon}</div>
          <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">{label}</span>
        </div>
        <h3 className="mb-4 text-3xl font-bold">{title}</h3>
        <p className="mb-7 leading-7 text-slate-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {features.map((feature) => (
            <span key={feature} className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">{feature}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function Button({ children, className = "", variant = "default", ...props }) {
  const baseClass = "inline-flex items-center justify-center font-semibold transition disabled:pointer-events-none disabled:opacity-50";
  const variantClass = variant === "outline" ? "border" : "";

  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
