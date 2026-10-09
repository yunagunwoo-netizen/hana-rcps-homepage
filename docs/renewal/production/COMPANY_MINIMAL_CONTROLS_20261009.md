# 회사 메인 영상 — 일시정지 바 제거

2026-10-09. 사용자가 회사 메인 스크린샷에서 영상 아래를 덮는 일시정지 버튼을 없애라고 지시했다. 현재 primary/high로 회사 영상 수정·검수·배포를 명시 승인했고 모바일의 재생 시작 버튼은 유지하기로 했다. 주소창 ambient URL은 댕이톡이었으나 첨부 스크린샷과 확인된 승인 범위는 **회사 메인만**이다.

## 구현과 보존 범위

`components/landing-motion.tsx`에 `minimalControls` 선택속성(기본false)을 추가해 figure의 `data-motion-controls`를 minimal/overlay로 구분한다. `app/page.tsx`의 회사 영상에서만 활성화한다. `app/company.css`의 세 추가규칙은 loading 또는has-motion-frame에서 기존 native button을 투명한 전체영상 클릭영역으로 바꾸고 내부아이콘·문구를숨긴다. 키보드focus-visible에는영상테두리안쪽outline을표시한다. 재생 중/이미 재생한 정지프레임에는 일시정지/다시재생 바가 보이지 않는다. 모바일·데이터절약·동작감소의첫시작(idle) 및error는 기존 눈에보이는재생/재시도버튼을유지한다. 초기loading에서도일시정지문구가잠깐나타나지않는다.

UI에서 바를 제거한 것이며 접근성용 native button과aria-label/aria-pressed/keyboard동작은 유지한다. 영상클릭또는Enter/Space로정지·재개한다. 별도video/figureclickhandler를추가하지않아한번의입력에서두번토글하지않는다. 직접정지한뒤화면/탭을옮겨도임의자동재생하지않는다. 한 번재생후멈춘상태의resume아이콘도투명하며영상자체가재개영역이다. focusoutline은키보드사용시만표시한다. 오류는포스터와시작버튼으로돌아간다.

공유플레이어 재생정책·영상파일/포스터/용량/루프편집/회사자동반복은변경하지않는다. 댕이톡은 `data-motion-controls=overlay`이고v4네이티브연속루프와기존표시버튼을유지한다. 원형아바타/실제앱UI/제품카피/원본앱/기존디자인시안은변경하지않는다. 새미디어/유료생성/API구매0.

## 검수와 재실행

읽은최신인계: `docs/renewal/README.md`, `DANG_SEAMLESS_VIDEO_STATUS.json`, `CONTINUOUS_HERO_20261009.md`. 착수기준운영커밋 `bba92f3cfd8522cf47a3c5501662290ccf565367`, c2nx `75bUEFFJnUUmZy8KbPK1vyE49eF4`.

`npm run build` (Next16.2.6 compile/TypeScript/9entryprerender), `npx eslint app/page.tsx components/landing-motion.tsx scripts/verify-renewal.cjs`. QA는기존 `scripts/verify-renewal.cjs`에실제computedbackground rgba0/border0/padding0/childlabelhidden/figure크기전체hitbox검사,키보드Space정지·Enter재개/focusoutline,영상클릭정지·재개,직접정지유지를추가했다. 모바일·절약첫시작문구보임,시작뒤문구숨김과모바일캡처도검사한다. freshQA페이지에서error이벤트를시뮬레이션해재생버튼복귀를확인한다. 이는실제CDN장애재현이아니다. 회사연속반복·숨김/화면이탈정지·복귀,기존댕이톡연속루프/정지/모바일·절약·아바타/8route-viewport/탭·메뉴·Next페이지이동/메타/206/308검사를유지한다.

명령환경 `PREVIEW_PLAYWRIGHT_ROOT=C:\Users\SAMSUNG IN W11P_13TH\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\playwright`; 실제Next운영빌드서버 `node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 48220`; `RENEWAL_QA_LABEL=company-minimal-local node scripts/verify-renewal.cjs`. 공개검수 `RENEWAL_ORIGIN=https://hanarcps.com`, label `company-minimal-live`. 증거각QA폴더의QA.json, `company-without-pause-bar.png`, `company-mobile-play-button.png`, `company-mobile-no-pause-bar.png`. Chrome viewport에뮬레이션으로물리Safari/모바일/4G/배터리측정은없다. 숨김탭은표준이벤트시뮬레이션이다.

## 라우팅·안전한 재개

승인한현재primary/high유지,모델전환없음. 독립읽기검토 `/root/dang_production`, Standard gpt-5.6-terra/high **요청**, 실제model/effort메타데이터미확인. 실제diff에서company-onlyflag/CSSspecificity/nativekeyboard/클릭1회/idle-error표시/Dang보존을검토해critical문제없다고보고했다. 파일·프로세스·배포수정0. Primary가구현/검수/배포를소유한다.

1. 재개시 `README.md`, `LIVE_STATUS.json`, 본기록과 `COMPANY_MINIMAL_CONTROLS_STATUS.json`을읽고최신SHA/경로를대조한다.
2. 회사의시각적일시정지바제거,모바일첫시작버튼보존,키보드·영상클릭정지/재개의결정을유지한다. 댕이톡에도적용하라는요청없이는범위를넓히지않는다.
3. 위소스/QA만수정하고관련Next로컬문서를읽은뒤대상lint/build/실제PC·모바일검수한다. 숨김CSS로전체영상을제어불능으로만들지않는다.
4. 승인범위의정확한파일만커밋해일반main push한다. 사용자 `AIDDP_HANDOFF.md`, 이전배포후보고서/시안/원본을포함하지않고reset/forcepush를사용하지않는다.
5. 도메인소유 Vercel `hana-rcps-homepage-c2nx` 성공뒤공개검수한다. 다른4프로젝트와혼동하지않는다. 완료SHA/ID/캡처/QA를기록·레지스트리에저장하며보고서만추가배포하지않는다.
6. 되돌릴때이번커밋만revert한다. 댕이톡v4연속루프와회사반복정책/아바타비율수정을유지한다. 작업용48220서버는명령줄·포트로확인한해당프로세스만종료한다.

로컬 최종 검수 완료: lint/build/TypeScript PASS. 실제재생중background투명/border0/padding0/문구·아이콘숨김/영상전체hitbox검사,Space정지·Enter재개/focusoutline,클릭정지·재개와직접정지유지 PASS. PC/모바일실제재생캡처에서바없음을육안확인,모바일첫시작표시/시작후숨김 PASS. simulatederror버튼복귀,기존회사자동반복/숨김·화면이탈및Dangv4루프/모바일·절약/아바타/탭·메뉴·페이지이동/206/308 PASS. qa/company-minimal-local/QA.json 오류0. 공개검수는배포후수행한다.
