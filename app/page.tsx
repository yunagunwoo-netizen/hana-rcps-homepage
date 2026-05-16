"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#f5f7fb] text-slate-900 overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#02142f] via-[#0f1f63] to-[#0b7d68] text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#00e0ff,transparent_35%)]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#00ff99,transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between lg:gap-16">
          {/* LEFT */}
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur">
              Human-Centered AI Applications
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              AI로 더 나은
              <br />
              학습과 성장을
              <br />
              설계합니다
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
              하나RCPS는 AI 기술을 기반으로 교육, 독서, 스포츠 분야의
              새로운 사용자 경험을 만드는 AI 앱 개발 회사입니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                서비스 살펴보기
              </a>

              <a
                href="#contact"
                className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                프로젝트 문의하기
              </a>
            </div>

            <div className="mt-10 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-5 py-3 text-sm text-cyan-100">
              Official Website · hanarcps.com
            </div>
          </div>

          {/* RIGHT */}
          <div className="mt-20 flex justify-center lg:mt-0">
            <div className="relative rounded-[3rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <Image
                src="/bookquest-main.png"
                alt="BookQuest"
                width={380}
                height={760}
                className="rounded-[2rem]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-4xl">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
            ABOUT HANA RCPS
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            기술보다 중요한 것은
            <br />
            사람의 변화입니다
          </h2>

          <p className="mt-10 text-xl leading-10 text-slate-600">
            하나RCPS는 단순한 기능 개발이 아니라,
            <br />
            사용자의 행동과 성장을 만들어내는 AI 서비스를 설계합니다.
            <br />
            <br />
            우리는 AI를 통해 배움이 더 즐거워지고,
            <br />
            훈련이 더 효과적이며,
            <br />
            성장이 더 지속될 수 있다고 믿습니다.
          </p>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-slate-100 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-emerald-500">
            WHY HANA RCPS
          </div>

          <h2 className="max-w-6xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
            AI, 교육, 스포츠를
            <br />
            하나의 성장 경험으로 연결합니다
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "AI + Education",
                text: "독서와 학습 데이터를 기반으로 개인 맞춤형 성장 경험을 제공합니다.",
              },
              {
                title: "AI + Sports",
                text: "동작 분석과 AI 피드백을 통해 훈련 효율과 성장 속도를 높입니다.",
              },
              {
                title: "Gamification",
                text: "레벨, 미션, 보상 구조를 통해 지속 가능한 몰입 경험을 만듭니다.",
              },
              {
                title: "Human-Centered UX",
                text: "기술 중심이 아닌 사용자 중심의 경험 설계를 추구합니다.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] bg-white p-10 shadow-sm"
              >
                <h3 className="text-3xl font-bold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-6 text-lg leading-9 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKQUEST */}
      <section
        id="products"
        className="mx-auto max-w-7xl px-6 py-28 lg:flex lg:items-center lg:gap-20"
      >
        <div className="flex-1">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-violet-500">
            BOOKQUEST
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            AI 독서 성장 플랫폼
          </h2>

          <p className="mt-10 text-xl leading-10 text-slate-600">
            독서를 게임처럼 즐기고,
            <br />
            AI와 함께 질문하며 성장하는
            <br />
            새로운 독서 경험 플랫폼입니다.
          </p>

          <ul className="mt-10 space-y-4 text-lg font-medium text-slate-700">
            <li>✓ AI 독서 질문</li>
            <li>✓ 독후 활동 추천</li>
            <li>✓ 퀘스트 시스템</li>
            <li>✓ 성장형 아바타</li>
            <li>✓ 지식 영역 분석</li>
          </ul>

          <Link
            href="https://bookquest.co.kr"
            target="_blank"
            className="mt-10 inline-flex rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
          >
            BookQuest 바로가기
          </Link>
        </div>

        <div className="mt-20 flex-1 lg:mt-0">
          <div className="rounded-[3rem] bg-violet-100 p-6 shadow-xl">
            <Image
              src="/bookquest-demo.png"
              alt="BookQuest App"
              width={520}
              height={900}
              className="mx-auto rounded-[2rem]"
            />
          </div>
        </div>
      </section>

      {/* ICOACH */}
      <section className="bg-[#050816] py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-20">
          <div className="flex-1">
            <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">
              ICOACH
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
              AI 스포츠 자세 분석
            </h2>

            <p className="mt-10 text-xl leading-10 text-slate-300">
              AI가 자세를 분석하고
              <br />
              개인 맞춤형 피드백과 훈련 방향을 제공합니다.
              <br />
              <br />
              성장 데이터를 기록하고
              <br />
              반복 훈련을 통해 실력 향상을 돕습니다.
            </p>

            <ul className="mt-10 space-y-4 text-lg text-slate-200">
              <li>✓ 투구 분석</li>
              <li>✓ 타격 분석</li>
              <li>✓ AI 코칭 리포트</li>
              <li>✓ 성장 기록</li>
              <li>✓ 랭킹 시스템</li>
            </ul>

            <Link
              href="https://icoach.ai.kr"
              target="_blank"
              className="mt-10 inline-flex rounded-2xl bg-yellow-500 px-8 py-4 text-lg font-semibold text-black transition hover:scale-105"
            >
              iCoach 바로가기
            </Link>
          </div>

          <div className="mt-20 flex-1 lg:mt-0">
            <div className="rounded-[3rem] border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 to-transparent p-6">
              <Image
                src="/icoach-demo.png"
                alt="iCoach App"
                width={520}
                height={900}
                className="mx-auto rounded-[2rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="max-w-5xl">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
            TECHNOLOGY
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
            기획부터 AI 서비스 운영까지
            <br />
            전체 개발 과정을 함께합니다
          </h2>

          <p className="mt-10 text-xl leading-10 text-slate-600">
            UI/UX 디자인,
            <br />
            AI 기능 설계,
            <br />
            프론트엔드 개발,
            <br />
            백엔드 구축,
            <br />
            서비스 운영까지
            <br />
            하나RCPS가 함께합니다.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-gradient-to-br from-[#020617] to-[#071b46] py-28 text-white"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            CONTACT
          </div>

          <h2 className="max-w-5xl text-4xl font-black leading-[1.1] tracking-tight md:text-6xl">
            함께 성장할
            <br />
            AI 서비스를 이야기해보세요
          </h2>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-slate-300">
            AI 앱 개발, 교육 플랫폼, 스포츠 코칭 서비스,
            <br />
            신규 프로젝트 및 협업 문의를 환영합니다.
          </p>

          <div className="mt-14 space-y-4 text-lg text-slate-300">
            <p>경기도 수원시 영통구 광교중앙로248번길 7-3, 3층</p>
            <p>yunagunwoo@gmail.com</p>
            <p>hanarcps.com</p>
          </div>

          <a
            href="mailto:yunagunwoo@gmail.com"
            className="mt-12 inline-flex rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-slate-900 transition hover:scale-105"
          >
            프로젝트 문의하기
          </a>
        </div>
      </section>
    </main>
  );
}