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

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-14 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-20 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-cyan-50 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Human-Centered AI Applications
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
              AI로 더 나은
              <br />
              학습과 성장을
              <br />
              설계합니다
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              하나RCPS는 AI 기술을 기반으로 교육, 독서, 스포츠 분야의 새로운 사용자 경험을 만드는 AI 앱 개발 회사입니다.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#products">
                <Button className="w-full rounded-2xl bg-white px-6 py-6 text-slate-950 hover:bg-cyan-50 sm:w-auto">
                  서비스 살펴보기 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="#contact">
                <Button className="w-full rounded-2xl border border-white/30 bg-white/10 px-6 py-6 text-white hover:bg-white/20 sm:w-auto">
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
            className="relative flex justify-center"
          >
            <div className="relative flex w-full items-center justify-center gap-5 lg:gap-6">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="hidden md:block"
              >
                <div className="w-[200px] overflow-hidden rounded-[2.5rem] border border-violet-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl xl:w-[220px]">
                  <img src={BOOKQUEST_SCREEN_1} alt="BookQuest App" className="h-[390px] w-full rounded-[2rem] object-contain" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative overflow-hidden rounded-[2.8rem] border border-amber-300/20 bg-black/30 p-3 shadow-2xl backdrop-blur-2xl">
                  <img src={ICOACH_SCREEN_1} alt="iCoach App" className="relative h-[460px] w-auto rounded-[2.2rem] object-contain shadow-2xl xl:h-[520px]" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="hidden lg:block"
              >
                <div className="w-[200px] overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl xl:w-[220px]">
                  <img src={ICOACH_SCREEN_2} alt="iCoach Analysis" className="h-[390px] w-full rounded-[2rem] object-contain" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section id="about" label="ABOUT HANA RCPS" title={<>기술보다 중요한 것은<br />사람의 변화입니다</>}>
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

          <motion.div className="mb-14 grid gap-6 md:grid-cols-2" variants={stagger}>
            <AppCard title="BookQuest" subtitle="AI 독서 성장 플랫폼" image={BOOKQUEST_SCREEN_1} color="violet" />
            <AppCard title="BookQuest Mission" subtitle="퀘스트 기반 독서 성장 경험" image={BOOKQUEST_SCREEN_2} color="cyan" />
            <AppCard title="iCoach" subtitle="AI 야구 자세 분석 플랫폼" image={ICOACH_SCREEN_1} color="amber" dark />
            <AppCard title="iCoach Analysis" subtitle="실시간 자세 피드백 시스템" image={ICOACH_SCREEN_2} color="yellow" dark />
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
          <div className="mb-12 max-w-7xl">
            <p className="mb-3 font-semibold text-emerald-600">WHY HANA RCPS</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              AI, 교육, 스포츠를
              <br />
              하나의 성장 경험으로 연결합니다
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["AI + Education", "독서와 학습 데이터를 기반으로 개인 맞춤형 성장 경험을 제공합니다."],
              ["AI + Sports", "동작 분석과 AI 피드백을 통해 훈련 효율과 성장 속도를 높입니다."],
              ["Gamification", "레벨, 미션, 보상 구조를 통해 지속 가능한 몰입 경험을 만듭니다."],
              ["Human-Centered UX", "기술 중심이 아닌 사용자 중심의 경험 설계를 추구합니다."],
            ].map(([title, desc]) => (
              <motion.div key={title} variants={fadeUp} className="rounded-3xl bg-white p-7 text-slate-900 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="leading-7 text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="demo" className="bg-white py-24" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 font-semibold text-blue-600">AI DEMO EXPERIENCE</p>
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">사용자가 바로 이해할 수 있는 AI 데모</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DemoCard
              title="AI에게 책을 질문하기"
              label="BookQuest Demo"
              question="왜 어린왕자는 초등학생에게 좋은 책인가요?"
              answer="어린왕자는 상상력, 관계, 책임이라는 주제를 쉽게 이해할 수 있게 도와줍니다. BookQuest는 아이의 관심사에 맞춰 질문과 독후 활동을 추천합니다."
              href={BOOKQUEST_URL}
              button="BookQuest 바로가기"
              theme="violet"
            />
            <DemoCard
              title="AI 자세 분석 리포트"
              label="iCoach Demo"
              question="스윙 영상 업로드 → AI 분석 중"
              answer="균형 점수 86점 · 임팩트 구간 안정적. 개선 제안: 팔로스루 각도를 조금 더 크게 유지하세요."
              href={ICOACH_URL}
              button="iCoach 바로가기"
              theme="amber"
            />
          </div>
        </div>
      </motion.section>

      <Section id="technology" label="TECHNOLOGY" title={<>기획부터 AI 서비스 운영까지<br />전체 개발 과정을 함께합니다</>}>
        UI/UX 디자인, AI 기능 설계, 프론트엔드 개발, 백엔드 구축, 서비스 운영까지 하나RCPS가 함께합니다.
      </Section>

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

function Section({ id, label, title, children }) {
  return (
    <motion.section id={id} className="mx-auto max-w-7xl px-6 py-24" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <div className="max-w-4xl">
        <p className="mb-3 font-semibold text-emerald-600">{label}</p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight md:text-5xl">{title}</h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">{children}</p>
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

function DemoCard({ title, label, question, answer, href, button, theme }) {
  const isAmber = theme === "amber";
  return (
    <div className={isAmber ? "rounded-[2rem] bg-gradient-to-br from-slate-950 to-amber-950 p-7 text-white shadow-xl" : "rounded-[2rem] bg-gradient-to-br from-violet-50 to-white p-7 text-slate-900 shadow-sm"}>
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