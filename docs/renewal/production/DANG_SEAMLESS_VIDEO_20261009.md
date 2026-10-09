# 댕이톡 v4 — 같은 구도의 연속 루프

2026-10-09. 사용자는 v3의 걷기→가족 확대 컷 이후에도 영상이 끊기지 않고 이어지길 요청했다. 현재 primary/high로 계속 재생+연결 편집+적용·배포를 명시 승인했다. 기존 원본을 먼저 활용하고, 새 유료 생성이 필요하면 별도 확인한다는 조건이다. 새 유료 생성은 수행하지 않았다.

## 현재 결정과 원본

v2의2초순방향+2초역방향 부메랑은 폐기했다. v3는 역재생 없이 걷기2초+가족확대2초였으나 컷 전환과2회후정지가 남아 있었다. 사용자 최신 지시에 따라 v4는 같은 구도의 한 장면과 네이티브 무한 반복을 사용한다. 걷는 장면의 시작/끝 위치를 강제로 되돌리지 않고, 가족이 웃고 강아지가 꼬리를 흔드는 움직임이 작은 원본 후반으로 바꾼다. 부모·아이·강아지가 함께 있는 구성, 자녀수 제한없음, 애니메이션, 경량 파일이라는 조건을 유지한다. 앱 UI/기능/로고/카피는 변경하지 않는다.

원본 `docs/renewal/media-review/family-reaction-source.mp4`, Higgsfield job `f5bb8832-7f79-4535-94a5-097b8edee435`, SHA256 `8e7051af44955529c160b6753764bc0ccb9a1b8d81d20241048ef7543032f425`는 기존과 같다. 현재 타임라인은 원본9.5–11.25초의1.75초 본문+원본11.25–11.5초 tail과9.25–9.5초 head를0.25초 겹친 연결부다. 연결부 마지막은 head9.5초 직전 프레임으로 끝나고, 반복 시작은9.5초로 이어진다. 마지막 혼합 프레임은100%head가 되도록 fps별 가중치를 보정했다. 역재생/확대컷/검은페이드/새인물/새카메라각도/AI보간은 없다. 실제 몸동작 전체를 무봉합으로 새로 생성한 영상이라고 주장하지 않는다. 기존 동작의 짧은 중첩 루프이며 꼬리 등 움직이는 부분의 약한 중첩 흔적은 가능하다.

초기 검토3초 루프(원본8.5–12초,0.5초중첩)는 구도·얼굴·꼬리 겹침이 눈에 띄어 채택하지 않았다.9–12초 범위의0.25초중첩4후보를 가족·강아지 ROI의6쌍회색프레임 차이로 비교하고,9.25–11.5초 후보가 가장 작은 차이를 보였다. 수치는 선택 보조이고 시각적 검수를 대신하지 않는다. 후보 기록 `media/dang-seamless-v4/OVERLAP_CANDIDATES.json`.

## 최종 출력과 정책

운영 자산3개: `public/renewal/assets/landing-motion/dang-mobile-v4.mp4`91,888바이트/480×854/20fps, `dang-desktop-v4.mp4`204,220바이트/720×1280/24fps, `dang-poster-v4.webp`33,756바이트. 두MP4는2초/H.264/yuv420p/무음/faststart/전체디코드PASS. v2/v3와 원본은 보존하며 새 파일명으로캐시혼동을 피한다. 정확한필터/해시/규격은 `media/dang-seamless-v4/MEDIA.json`.

`app/dangitalk/page.tsx`의3개경로를v4로 바꾸고 `repeatWhileVisible nativeLoop`를 전달한다. `components/landing-motion.tsx`는 선택속성 `nativeLoop`(기본false)를 추가하고 `nativeLoop && repeatWhileVisible`에서만 `<video loop>`를 사용한다. 네이티브 경로는 `ended`로 다시play를 호출하지 않는다. 회사 페이지는 기존속성만 사용하므로 기존ended기반연속재생이 유지된다. 모바일/절약/동작감소는 수동시작이며, 수동시작 뒤화면안에서는계속루프한다. 화면밖/숨김정지·복귀재개, 직접일시정지유지,무음,기기별파일하나선택,포스터초기표시,cleanup/request토큰은 유지한다. 두 번 뒤 종료는 현재 댕이톡에서 더 이상 사용하지 않는다.

## 재빌드와 검수

`node scripts/build-dang-loop.cjs`는 위 원본을 필요로 하며 최종v4자산·MEDIA를 만든다. `node scripts/verify-dang-loop.cjs`는 최종v4와 보존v3의실제인코딩 프레임을 비교한다. 처음분석의Node기본1MiB출력버퍼가 v3회색프레임을 담지못해ENOBUFS였고,검수스크립트는8MiB명시버퍼로 수정해통과했다. 이는 영상오류가 아니며 실패는숨기지않는다. 인코딩후가족·강아지 ROI의끝→시작 평균차이는 v3 60.1465→v4 1.9434(0–255회색척도), v4인접프레임중앙값2.1776/p95 2.7415다. `BOUNDARY_QA.json`에저장했다. 완벽한체감연결/모든기기무정지보장은 아니다.

원본후반시트/최종16프레임시트/중첩중간프레임을 육안확인했다. 현재최종시트 `media/dang-seamless-v4/final-sheet.jpg`, 실제페이지프레임/구역은 `qa/dang-seamless-local` 및배포후 `qa/dang-seamless-live`다. 보존v3기록의아동얼굴완전히가리는걷기구간은 사용하지않고후반웃는가족구간을 선택했다. 앞쪽강아지가자연스럽게가족일부와겹치는원본구도는남아있다.

운영빌드 `npm run build`; 대상lint `npx eslint app/dangitalk/page.tsx components/landing-motion.tsx scripts/build-dang-loop.cjs scripts/verify-dang-loop.cjs scripts/verify-renewal.cjs`. QA: `PREVIEW_PLAYWRIGHT_ROOT=C:\Users\SAMSUNG IN W11P_13TH\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\playwright`, `RENEWAL_QA_LABEL=dang-seamless-local`, `node scripts/verify-renewal.cjs`. 운영검수는 `RENEWAL_ORIGIN=https://hanarcps.com`, label `dang-seamless-live`. 실제currentTime감소로3회이상루프를확인하고,그동안pause/ended이벤트0·playing상태·단일소스를검사한다. 화면이탈/복귀·숨김이벤트시뮬레이션·직접정지보존 및모바일/절약수동시작을댕이톡에서도검사한다. 기존회사/아바타비율/탭/메뉴/페이지이동/메타/206/308 검사를유지한다. 숨김은fresh검수페이지의표준이벤트시뮬레이션이며실제OS탭전환검사라고표기하지않는다. Chrome viewport에뮬레이션이며물리Safari/4G/배터리/전환율측정은없다.

## 위임과 보존

사용자승인primary/high유지. `/root/dang_production` Standard(gpt-5.6-terra/high요청,실제메타데이터미확인)가 **components/landing-motion.tsx만** 소유해선택네이티브루프를추가했다. 해당파일lint/tsc통과를보고했고primary가실제diff/빌드/브라우저로통합검증한다. 에이전트배포/프로세스/미디어변경0,추가에이전트0. primary는미디어/페이지/QA/기록/배포를소유한다. 기존Higgsfield영상편집스킬확인후설치된로컬FFmpeg로편집했으며스킬사용기록만호출했다. 업로드/원격렌더/유료생성0,현재크레딧미조회.

사용자 `AIDDP_HANDOFF.md`, 이전배포후보고서, 앱원본과이전시안/ZIP는수정·커밋하지않는다. 새직접소스/자산/검수와이번기록만명시적으로커밋한다. 실제운영도메인은 `hana-rcps-homepage-c2nx`, 기준커밋 `fef8bd88b64e6f2cc2007b155d4914f8824f9331`, 기준배포 `EgcD3GCoXR3j5v7QyTVt7oZbCQTf`. 다른4연결프로젝트와혼동하지않는다.

## 안전한 재개

1. `docs/renewal/README.md`, `production/LIVE_STATUS.json`, 본문후속완료기록과 `DANG_SEAMLESS_VIDEO_STATUS.json`을읽고최신SHA/실제페이지소스를대조한다.
2. 위보존범위와최신‘역재생·컷전환없이같은장면계속루프’결정을유지한다. 새유료생성은별도승인필요하다.
3. 재편집은원본·정확한source시간·build-dang-loop스크립트를사용해새버전명을만들고기술/경계/실제프레임을검사한다. 생성기를전체랜딩에재실행하지않는다.
4. 실제Next빌드와PC·모바일QA가통과하면승인범위만커밋해일반main push한다. reset/forcepush금지.
5. c2nx성공을확인한뒤공개QA와새3자산의SHA256/바이트일치를확인한다. latest상태/레지스트리/캡처를저장하고이번서버만명령줄·포트확인후종료한다. 보고서만추가배포하지않는다.
6. 되돌리기는이번커밋만revert해v3복원한다. 회사계속반복과아바타비율수정은유지한다.

최종 로컬 검수: 빌드/TypeScript/대상ESLint PASS. 실제 Chrome 3회루프동안 pause0/ended0 및 playing,2초무음/네이티브loop/단일PC파일,화면밖정지·복귀/숨김시뮬레이션/직접정지유지 PASS. 회사연속반복·모바일/절약수동과 Dang모바일/절약수동 PASS. 기존8개route/viewport·원형아바타·탭/메뉴/페이지이동/메타/206/308 PASS. 실제페이지중첩중간·구역프레임도육안확인. 첫시도는고정헤더의scrollIntoView가페이지를이동하지않아화면이탈검사가시간초과했고,검수동선을명시적scrollTo(top0,instant)로수정해통과했다. 실패QA-attempt1.json을보존,최종qa/dang-seamless-local/QA.json과구분한다. 운영검수는배포뒤수행한다.
