# 하나RCPS 전체 리뉴얼 실제 반영·배포 기록

사용자가 회사 v6·댕이톡 v7 및 Dubi 기반 D 로고의 전체 실제 반영과 배포를 승인했다. 현재 primary/high를 유지했다. 기존 미리보기와 원본 앱은 보존하며 실제 Next.js 페이지를 새로 구현했다.

## 구현 정본

- 회사: `app/page.tsx`, `app/company.css`, `components/company-header.tsx`, 운영 주소 `https://hanarcps.com/`.
- 댕이톡: `app/dangitalk/page.tsx`, `app/dangitalk/dangitalk.css`, `components/dangitalk.tsx`, 운영 주소 `https://hanarcps.com/dangitalk`.
- 영상: `components/landing-motion.tsx`. 포스터 우선, 모바일/동작 감소/데이터 절약에서 수동 재생, 기기에 맞는 단일 영상 선택, 두 번 재생 뒤 정지, 화면 이탈/탭 숨김 시 정지, 이벤트/관찰자 정리.
- 승인된 정본 자산: `public/renewal/assets/`; 출처·크기·SHA-256는 `ASSETS.json`. D 심볼 `brand/dangitalk-dubi-d.webp`, Apple PNG `brand/dangitalk-dubi-d-apple.png`.
- 메타데이터/정상 크롤링: `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`. 시안 바·noindex·디자인 검토 안내를 공개 페이지에서 제거했다.
- 예전 HTML 경로는 `next.config.ts`에서 정식 페이지로308이동한다. `/ping.html`은 기존 `https://ping.ai.kr/`로 연결한다. 기존 보안 헤더를 유지하고 새 자산도 버전 파일명으로 제공한다.

## 제품 결정과 제공 범위

핑은 메인 서비스이며 공식 랜딩을 계속 활용한다. 댕이톡은 가족 메신저의 단독 사용이 기본이고, 핑에서 만든 가족·강아지 아바타 재사용은 선택 구성이다. 댕이톡 자체 아바타 생성·자동 동기화·브리지 출시 완료를 주장하지 않는다. 사진 프로필 업로드는 아직 미구현/개발 예정이며 외부 링크 제한·개인 공부 모드도 후속 개발로 안내한다. 강아지 참여·가족 대화방/가족1:1·설정 화면은 실제 원본 UI와 데모 데이터로 설명한다. 가족 일러스트와 아바타는 활용 예시이며 고정 가족/자녀 수 제한이 아니다. 실제 앱 화면을 임의 수정하거나 가짜 가입/업로드/결제 기능을 만들지 않았다. D 로고 선택은 최종이며 A/B/C와 사용자 원본 그림은 보존했다.

## 배포 대상과 되돌리기

GitHub `yunagunwoo-netizen/hana-rcps-homepage`, production branch `main`. 도메인 소유 프로젝트는 **Vercel `hana-rcps-homepage-c2nx`**, 팀 `yunagunwoo-netizens-projects`다. 이전 AIDDP_HANDOFF의 `hana-rcps-homepage` 프로젝트 표기는 현재 도메인 소유자와 달랐다. 사용자 수정이 있는 원본 AIDDP_HANDOFF는 덮어쓰지 않는다.

도메인/Production/Git 설정을 읽기 전용 대시보드로 확인했다. main push는 Production을 만들고 custom domain 자동 배정은 활성화돼 있다. 같은 repo의 다른4개 Vercel 프로젝트도 빌드될 수 있으나 `hanarcps.com` 소유자는 c2nx다. 판별할 상태는 `Vercel – hana-rcps-homepage-c2nx`.

배포 전 baseline은 **171aa522ce252eb8c395880459d24e9395b1f005**. 로컬/원격main 및 실제 운영 도메인의 기존 Ready배포가 일치한다. 기준 Vercel deployment ID **DRFRKwyVrvBzENMBuy3HmYFjMXF1**. 문제 발생 시 해당c2nx 프로젝트에서 기준배포로 Instant Rollback하거나, 리뉴얼 커밋만 git revert 후 새 커밋을 push한다. reset/force push/다른 프로젝트 rollback은 하지 않는다. 실제 배포 SHA·CI상태·운영 검수는 이후 같은 폴더의 `LIVE_STATUS.json`에 기록한다.

## 검증과 한계

Next16.2.6 로컬 문서의 routes/client components/CSS/metadata/redirects/deployment 지침을 읽고 구현했다. `next build`는 컴파일/TypeScript/정적 페이지 생성까지 통과했다. 일반 제한 실행의 Google Drive 경로 canonicalize 접근 거부는 허용된 실제PC 빌드에서 해소됐으며 코드 결함으로 처리하지 않았다. ESLint/TypeScript도 검사했다.

별도 헤드리스 브라우저에 대한 사용자 명시 승인 범위에서 fresh Chrome154.0.8037.99로 검수했다. 결과 `qa/local/QA.json`: 회사/댕이톡1280·768·375·320px 가로 넘침0·깨진 이미지0·실행/하이드레이션 오류0; Next회사↔댕이톡 이동 시 스타일/동작 유지; 메뉴 ESC·포커스 복귀; 앱 탭 선택/키보드Home; 실제D 로고28/34px; reduced-motion 첫 진입MP4요청0; 모바일 수동 재생·정지·모바일파일1개; 데스크톱자동재생큰화면파일1개; MP4 Range206; canonical·robots·sitemap·이전경로308. 실제 PC회사/모바일Dang 캡처를 육안 확인했다. 공개 주소도 배포 이후 같은 스크립트로 재검수한다. 물리 기기/Safari/느린4G/전환율은 검사하지 않았다.

재빌드 `npm run build`, 실행 `npm run start -- --hostname 127.0.0.1 --port 48220`, lint `npm run lint`, type `node node_modules/typescript/bin/tsc --noEmit`. QA: 설치된 Playwright 위치로 `PREVIEW_PLAYWRIGHT_ROOT`를 지정하고 `node scripts/verify-renewal.cjs`. `RENEWAL_ORIGIN=https://hanarcps.com`, `RENEWAL_QA_LABEL=live`로 운영 검수한다. 새 유료 생성/서비스 구매0.

## 위임과 통합 검수

- `/root/dang_production`: Standard, routing_standard/gpt-5.6-terra/high 요청. Dang3파일만 소유, 실제 모델/effort 메타데이터 미확인. React탭/범위 안전한 문구/CSS/metadata와 자산 경로를 구현. 소유 lint/type/자산 검수 통과. 주 작업자가 빌드/실제 화면/페이지 이동으로 통합 검증했다.
- `/root/deployment_preflight`: Complex, routing_complex/gpt-5.6-sol/xhigh 요청. 읽기 전용 Git/GitHub/Vercel 점검, 실제 모델/effort 메타데이터 미확인. admin/push연결,baseline,실제 도메인 소유자·배포/되돌리기 경로 확인. 파일/설정/계정/배포 변경0.
- Primary는 회사/root/공유플레이어/자산/검수/배포를 맡았다. 이미지는 새로 생성하지 않고 승인된 버전 자산만 재사용했다. staging은 명시적 생산 파일만 사용하고 사용자 AIDDP_HANDOFF, 거대preview/source/캡처원본/생성마스터를 배포커밋에서 제외한다.
