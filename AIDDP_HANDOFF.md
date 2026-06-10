# AI&DDP / 하나RCPS 프로젝트 핸드오프

> 마지막 업데이트: 2026-06-10 (Cowork 세션 3: 하나RCPS에 세션2 변경 전체 반영 — **커밋/푸시 대기**). 새 세션에서 이 파일을 먼저 읽고 이어서 작업.

## 1. 개요
회사 홈페이지 2개를 운영. **동일 Next.js 코드베이스**를 복제해 브랜딩만 다르게 함.

| 사이트 | 도메인 | 로컬 폴더 | GitHub | Vercel 프로젝트 |
|---|---|---|---|---|
| 하나RCPS | hanarcps.com (라이브) | `C:\Users\ggyeo\hana-rcps-homepage` | `yunagunwoo-netizen/hana-rcps-homepage` | hana-rcps-homepage |
| AI&DDP | www.ddp.ai.kr / ddp.ai.kr (라이브) | `C:\Users\ggyeo\AIDDP\aiddp-homepage` | `yunagunwoo-netizen/aiddp-site` | aiddp-site |

AI&DDP는 하나RCPS를 복제해 회사명/로고/도메인/연락처만 리브랜딩한 사이트.

## 2. 기술 스택 / 배포
- Next.js 16.2.6 · React 19 · TypeScript · Tailwind CSS v4 · framer-motion · lucide-react
- 단일 페이지: `app/page.tsx` (상단 `// @ts-nocheck`) · `app/layout.tsx` · `app/globals.css`
- 정적 에셋: `public/images/*` · `public/videos/*.mp4`
- 배포: GitHub `main` push → Vercel 자동 빌드. **Claude는 자격증명이 없어 직접 push 불가 → 사용자가 PowerShell/GitHub Desktop으로 push.**
- ⚠️ **AI&DDP 레포에 `.git/index.lock`이 종종 잔존** → commit 전 PowerShell에서 `Remove-Item .git\index.lock -ErrorAction SilentlyContinue` 실행.
- 표준 push:
  ```powershell
  cd C:\Users\ggyeo\AIDDP\aiddp-homepage
  Remove-Item .git\index.lock -ErrorAction SilentlyContinue
  git add . ; git commit -m "..." ; git push origin main
  ```

## 3. 도메인
- 가비아 ddp.ai.kr → 가비아 DNS: `CNAME` www → `c499d754879860cf.vercel-dns-017.com.`, `A` @ → `216.198.79.1`
- Vercel Domains: www/apex 모두 Valid, https 자동. **apex→www 308 리다이렉트 설정 완료** (Settings→Domains→ddp.ai.kr Edit→Redirect to www.ddp.ai.kr).

## 4. 브랜딩 / 연락처
- AI&DDP 로고 `aiddp_logo.png` (엠블럼: 머리+뇌회로+달리는 사람+책, 파랑→청록→초록 그라데이션). 하나RCPS는 `hana_rcps_logo.png`.
- AI&DDP Contact: **김청현 이사 / 010-7744-8186 / ggyeong567@gmail.com**, 주소 **서울 종로구 삼일대로 461 운현궁 SK허브 B-114**, 웹 www.ddp.ai.kr
- 하나RCPS Contact: 경기 수원 광교, yunagunwoo@gmail.com
- 제품 2종: **BookQuest**(AI 독서 성장, bookquest.co.kr) · **iCoach**(AI 야구 자세분석, icoach.ai.kr) + **Iron Arm**(AI 투구분석, 출시예정 티저)
- 슬로건: "AI App Development Company" / "AI로 더 나은 학습과 성장을 설계합니다"

## 5. 에셋 (영상은 Higgsfield seedance_2_0, 이미지는 nano_banana_pro)
> 세션3: 세션2 신규 에셋(why/tech/ironarm 이미지 10개 + about_loop/main_loop/main_loop_portrait 영상 3개)을 하나RCPS `public/`에도 복사 완료(md5 검증). 하나RCPS `og_image.png`는 별도 합성본.
영상 `public/videos/` (AI&DDP):
- `main_loop.mp4` — 가로 16:9, **데스크톱** 히어로 배경.
- `main_loop_portrait.mp4` — 세로 9:16, 8초, **모바일** 히어로 배경. 독서→야외활동 전환 + 청록 AI 에너지 라인.
- `about_loop.mp4` — **신규(세션2)**: 가로 16:9, 5초. About 섹션 배경 루프(햇살 속 날아가는 책장/종이).
- `product_bookquest.mp4` · `product_icoach.mp4` — Products FeatureCard 영상.
- `demo_bookquest.mp4` · `demo_icoach.mp4` — ⚠️ **데모 섹션 제거로 현재 미사용**(파일은 잔존).

이미지 `public/images/` (AI&DDP):
- WHY 카드(3D 아이소메트릭) — **신규(세션2)**: `why_education.png` `why_sports.png` `why_gamification.png` `why_ux.png`.
- Technology 프로세스 아이콘(3D 아이소메트릭) — **신규(세션2)**: `tech_uiux.png` `tech_ai.png` `tech_frontend.png` `tech_backend.png` `tech_ops.png`.
- `product_ironarm.png` — **신규(세션2)**: 아이언암 티저용 (= `ironarm_assets/ironarm_pitching_preview.png` 복사본).
- `og_image.png` (1200×630) — **신규(세션2)**: OG 소셜 공유 이미지. 배경 생성(nano_banana_pro 16:9) + 엠블럼 `app/icon.png`(투명) + 텍스트(Pretendard) PIL 합성.
- 파비콘: 두 사이트 `app/favicon.ico`(16/32/48) + `app/icon.png`(256, 투명 엠블럼) + `app/apple-icon.png`(180).

## 6. page.tsx 히어로/섹션 구조 (현재 상태, 세션2 반영)
- 섹션 순서: Hero → About → Products → Why → Technology → Contact (**데모 섹션 제거됨**, nav에서도 Demo 링크 제거).
- Hero `<section>`: `flex min-h-[100svh] flex-col ... md:block md:min-h-0`. 배경 영상 2개(데스크톱 가로 `HERO_VIDEO` / 모바일 세로 `HERO_VIDEO_PORTRAIT`).
- **히어로 버튼**: `flex flex-row gap-3` (모바일도 한 줄). 각 `<a>` `flex-1 sm:flex-none`, 버튼 모바일 작은 패딩/글씨(`px-3 py-5 text-sm`), 화살표 `hidden sm:inline-block`.
- **h1/본문 모바일 폭 제한**(우상단 캐러셀 겹침 방지): h1 `max-w-[270px] sm:max-w-none`, 본문 `max-w-[250px] sm:max-w-2xl`.
- **모바일 폰 캐러셀**(globals.css `@keyframes heroOrbit` + `.hero-phone p1~p4`): `absolute right-0 top-[40%] z-20 h-[520px] w-[520px] origin-top-right scale-[0.26] md:hidden` → **영상 오른쪽 위에서 작게 회전**. 데스크톱은 grid 우측(`hidden ... md:flex`).
  - 튜닝 노브: 캐러셀 상하 = `top-[40%]`, 텍스트 폭 = h1/본문 `max-w-[...]`.
- ⚠️ **미해결**: 히어로 h1(흰 글씨)이 밝은 배경 영상 위에서 가독성 낮음 → text-shadow나 좌측 오버레이 강화 여지(미적용).
- Why 카드: 상단 이미지(그라데이션 배경) + 제목/설명, `group hover:-translate-y-1.5`. `sm:grid-cols-2 md:grid-cols-4`.
- Technology: 커스텀 섹션(`Section` 컴포넌트 아님) — 헤더 + 5단계 프로세스 grid(`grid-cols-2 md:grid-cols-5`), 카드별 아이콘+01~05.
- About: `Section` 컴포넌트에 `bgVideo={ABOUT_VIDEO}` prop으로 배경 영상(있으면 video, 없으면 bgImage).
- Products: BookQuest·iCoach `FeatureCard` 2개 + 하단 **아이언암 "출시 예정" 티저 카드**(슬레이트 다크, 이미지+텍스트 2열).
- globals.css: 한글 `word-break: keep-all` + heroOrbit.

## 7. ✅ 완료 + 배포됨
**세션1 (06-09~10):** 데모배너 4:3 · 파비콘 교체(두 사이트) · apex→www 리다이렉트 · 모바일 세로 히어로영상 · 새 영상3개. (AI&DDP `4b1a3e3`, 하나RCPS `ca71bc5`)

**세션2 (06-10) — AI&DDP만 배포:**
- 데모 섹션 + nav Demo 링크 제거.
- 모바일 히어로: 버튼 2개 한 줄 + 캐러셀 축소→우상단(top-40%) 재배치 + h1/본문 좌측 폭제한.
- WHY 카드 4개: 3D 아이소메트릭 이미지 + 카드 리디자인.
- Technology: 개발 5단계 프로세스(아이콘 5 + 01~05).
- About: 배경을 `about_loop.mp4` 영상으로 교체.
- Products: 아이언암 "출시 예정" 티저 카드 추가.
- OG 소셜 이미지 + `layout.tsx` openGraph/twitter 메타데이터(`metadataBase: https://www.ddp.ai.kr`).
- commits: `4f54156`(대량 배치: OG/Technology/About/아이언암/데모제거/히어로/WHY), `cc9cafc`(캐러셀 우상단 재배치).
- ~~하나RCPS는 세션2 변경 전부 미적용~~ → **세션3에서 반영 완료.**

**세션3 (06-10) — 하나RCPS에 세션2 전체 포팅 (커밋/푸시 대기):**
- aiddp `page.tsx`(세션2 최신)를 가져와 하나RCPS 브랜딩 치환: 로고 `hana_rcps_logo.png` / 회사명 하나RCPS / hanarcps.com / 주소 수원 광교 / yunagunwoo@gmail.com / © HANA RCPS / "WHY·ABOUT HANA RCPS". 데모제거·모바일히어로 재배치·WHY 이미지카드·Technology 5단계·About 영상·아이언암 티저 모두 포함.
- `layout.tsx`: 기본값("Create Next App", lang=en) → 하나RCPS 타이틀/설명 + openGraph/twitter + `metadataBase: https://hanarcps.com`, lang=ko. ⚠️ canonical이 www인지 apex인지 Vercel Domains에서 확인 — www가 primary면 metadataBase를 www로 수정.
- 하나RCPS용 `og_image.png`(1200×630) 신규: 이미지 생성 MCP 없이 PIL로 배경(네이비→에메랄드 그라데이션 + 입자 네트워크 + 시안 글로우) 직접 생성 + `app/icon.png` 엠블럼 흰카드 + Pretendard 텍스트 합성. **크레딧 사용 0**.
- 검증: 치환 횟수 assert 전건 일치, UTF-8 재독, esbuild 구문 OK, 파일 끝 온전(618줄).
- 푸시(사용자): `cd C:\Users\ggyeo\hana-rcps-homepage` → `git add . ; git commit -m "Port session2: remove demo, mobile hero, WHY/Tech images, About video, Iron Arm teaser, OG" ; git push origin main`. (레포에 untracked `preview.html` 있음 — 커밋 원치 않으면 먼저 삭제.)

## 8. 명함 (AI&DDP) — `C:\Users\ggyeo\AIDDP\namecard\`
- 김청현 이사 양면 명함, **인쇄용 PDF 90×50mm + 도련 3mm**, Pretendard 폰트, 로고 엠블럼(배경제거).
- 3개 시안 (택1 후 다듬기 가능, **최종 선택 미정**):
  - A 미니멀 화이트: `AIDDP_namecard_A_white.pdf`
  - B 다크 프리미엄(앱아이콘 칩): `AIDDP_namecard_B_dark.pdf`
  - C 그라데이션 패널: `AIDDP_namecard_C_panel.pdf`
- 앞/뒷면 미리보기 PNG: `card_A/B/C_*_front/back.png`
- 추가 옵션 가능: 직함/이름 영문 병기, 재단선 보강, 색 톤 조정, QR코드.

## 9. 아이언암(Iron Arm)
- **AI&DDP Products에 "출시 예정" 티저 카드 추가됨**(세션2) — `public/images/product_ironarm.png`.
- 성인 투구 영상(AI 스켈레톤 오버레이): `C:\Users\ggyeo\AIDDP\ironarm_assets\ironarm_pitching_adult.mp4` (+ `ironarm_pitching_preview.png`).
- **독립 아이언암 사이트는 아직 미생성**. 만들 때 위 영상 활용.

## 10. 도구 / 주의사항
- 🚨 **소스 파일 truncation 주의**: 이 마운트에서 `app/page.tsx`·`app/layout.tsx`를 Edit/Write 도구로 저장하면 **파일 끝이 잘리는 현상**이 반복됨(세션2에서 3회 발생). → **source 파일은 샌드박스 python 원자적 쓰기로 저장**: `open(tmp,'w',encoding='utf-8').write(text); os.replace(tmp,path)`. 저장 후 **반드시** ① `python3 -c "open(f,encoding='utf-8').read()"`(UTF-8 검증) ② `npx esbuild app/page.tsx --loader:.tsx=tsx --bundle=false`(구문 검증). 잘렸으면 `git show HEAD:app/page.tsx`에서 뒷부분 잘라 이어붙여 복구.
- **영상 생성(Higgsfield MCP)**: `seedance_2_0`, 9:16·16:9 지원, `get_cost:true`로 비용 선확인. 세로 8초≈36, 가로 5초≈22.5 크레딧. 생성→`job_display` 폴링→완료 시 `rawUrl`(cloudfront) 다운로드.
- **이미지 생성**: `nano_banana_pro`(=내부 nano_banana_2), 1:1·16:9 등, 1k 기본, 1장 2크레딧. WHY/Technology 카드 스타일 프롬프트 프리앰블: "3D isometric illustration, clean modern flat-3D render, soft studio lighting, brand palette blue→cyan→green, pure white background, no text".
- **크레딧 잔여**: 약 **~2032** (세션2 34.5 사용, 세션3 사용 0).
- **에셋 다운로드**: cloudfront URL → workspace bash `curl` → `public/images|videos/`.
- **OG 이미지 합성**: 배경 생성 → `app/icon.png`(투명 엠블럼) + 텍스트(Pretendard) PIL 합성 → `public/images/og_image.png`(1200×630). 카카오톡 OG 캐시는 developers.kakao.com에서 URL 갱신.
- **Pretendard 폰트**: 샌드박스 `npm install pretendard` → `node_modules/pretendard/dist/public/static/alternative/*.ttf`. 시스템엔 한글 폰트 없음.
- 임시 작업영역(outputs/스크래치)은 세션 간 보존 안 됨. 영구본은 프로젝트 폴더에 저장.
- 이 핸드오프는 두 레포 루트(`hana-rcps-homepage`, `AIDDP\aiddp-homepage`)에 동일 사본 유지 — 세션3에서 양쪽 모두 갱신 완료.
