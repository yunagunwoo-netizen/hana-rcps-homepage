# 댕이톡 영상 v3 — 순방향 움직임과 가족 표정 컷

2026-10-09. 사용자가 공개 댕이톡 영상의 강아지가 앞뒤로 걸어서 연결감이 약하다고 지적했고, 기존 원본으로 순방향 움직임과 가족 표정 컷을 연결하는 편집을 승인했다. 이어 현재 primary/high로 편집·랜딩 적용을 명시 승인했다. 기존 전체 리뉴얼의 실제 반영·배포 범위 안에서 해당 영상만 교체한다. 새 유료 생성이나 원본 앱 변경은 하지 않는다.

## 원인과 선택

이전 v2는 `design-preview/assets/landing-motion/build-loops.ps1`에서 2초 순방향+2초 역방향으로 만든4초 부메랑이다. 역재생 연결은 자연스러운 걷기에 맞지 않는다는 최신 사용자 판단에 따라 해당 방식은 댕이톡에서 폐기한다. v2와 모든 원본은 보존한다.

v3는 원본 `docs/renewal/media-review/family-reaction-source.mp4` (720×1280/24fps/12.041667초), Higgsfield job `f5bb8832-7f79-4535-94a5-097b8edee435`를 재사용한다. SHA256 `8e7051af44955529c160b6753764bc0ccb9a1b8d81d20241048ef7543032f425`. 타임라인0–2초는 원본2.3–4.3초를 순방향으로 재생하고,2–4초는 원본0.3–2.3초를 `crop=450:800:0:240`으로 확대해 가족 표정 컷으로 재생한다. 두 컷을 직접 연결하고, 반복 끝에서도 가족 표정에서 강아지 전체 컷으로 돌아간다. 단일 장면의 완벽한 무봉합 루프라고 주장하지 않는다. 움직이는 인물/강아지를 겹치는 디졸브나 인공 보간을 사용하지 않아 얼굴 잔상을 피한다. 가족 구성원/자녀 수 제한은 없다.

## 결과와 재생 정책

최종 운영 자산은 `public/renewal/assets/landing-motion/dang-mobile-v3.mp4`228,014바이트(480×854/20fps), `dang-desktop-v3.mp4`475,400바이트(720×1280/24fps), `dang-poster-v3.webp`33,998바이트다. 모두4초/H.264/yuv420p/무음/faststart. 이전 모바일277,413/PC590,883바이트보다 작은 영상이다. 해시/정확한 FFmpeg필터/버전/원본 출처는 `media/dang-forward-v3/MEDIA.json`, atom/디코드 검사는 `TECHNICAL_QA.json`.

`app/dangitalk/page.tsx`의 영상/포스터3개 경로만v3로 교체한다. 공유 플레이어와 회사 메인 영상은 변경하지 않는다. 댕이톡은 기존2회 재생 후 정지, 모바일/동작 감소/데이터 절약은 수동 시작, 화면 밖·숨김 정지, 직접 일시정지 상태 보존, 기기별 영상 하나 선택을 유지한다. 새 이름을 사용해 이전 CDN/브라우저 파일과 혼동을 피한다. 이전 디자인 미리보기v7는 보존본이고 실제Next운영 코드가 현재 정본이다.

## 제작과 검수

설치된Higgsedit CLI가 로컬에 없어, 영상편집 스킬을 읽고 실제 설치된FFmpeg9.0.1로 로컬 편집했다. Higgsfield에는 스킬 사용 기록만 전달했고 영상 업로드/원격 렌더/새 생성/유료 API 호출0이다. 현재 잔액은 조회하지 않았으며 이전972.63을 현재 잔액이라고 주장하지 않는다.

재빌드: 저장소 루트에서 `node scripts/build-dang-video.cjs` (위 원본 필요). 운영 빌드 `npm run build`. 대상ESLint `npx eslint app/dangitalk/page.tsx scripts/verify-renewal.cjs scripts/build-dang-video.cjs`. 기존QA에v3소스/포스터/4초·720×1280·무음 검사와0.04/1.95/2.05/3.95초 실제브라우저 프레임 캡처를 추가했다. `PREVIEW_PLAYWRIGHT_ROOT=C:\Users\SAMSUNG IN W11P_13TH\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\playwright`, `RENEWAL_QA_LABEL=dang-forward-local`, `node scripts/verify-renewal.cjs`. 공개검수는 `RENEWAL_ORIGIN=https://hanarcps.com`, label `dang-forward-live`를 사용한다.

원본시트와 최종16프레임시트를 실제 확인했다. 강아지의 순방향 이동 뒤 부모·아이 표정으로 전환되고, 확대 컷에서 세 사람의 얼굴이 보인다. 프레임시트 `media/dang-forward-v3/final-sheet.jpg`; 원본/크롭 보조 이미지는 같은 폴더. 실행기 QA는 움직임의 미적 품질을 판정하지 않으므로 프레임/전환 육안 검수와 구분한다. 헤드리스Chrome의 PC/모바일 크기 검수이며 물리iPhone/Safari/4G/전환율 측정은 아니다. 동작이 같은 완벽한 루프나 새카메라각도로 생성한 반응컷이라고 주장하지 않는다.

독립위임: `/root/dang_production`, Standard tier gpt-5.6-terra/high **요청**, 실제model/effort 메타데이터 미확인. 운영경로/확인범위/이전 부메랑 원인을 읽기전용으로 추적했고3개경로만교체,cache-busting,4초·포스터 확인을 권고했다. primary가 실제파일/빌드/프레임/브라우저 결과로 통합검증한다. 해당 에이전트의 파일/프로세스/배포 수정0, 추가 위임0.

## 안전한 재개와 배포

1. `docs/renewal/README.md`, `LIVE_STATUS.json`, 이 기록의 후속 배포결과를 읽고 최신운영SHA를 확인한다.
2. 사용자 수정 `AIDDP_HANDOFF.md`와 기존 미커밋배포후보고서, 원본앱, 옛미리보기/ZIP를 보존한다. 재생성기로기존랜딩을덮어쓰지 않는다.
3. 영상 재편집시 위 원본/타임라인과 `scripts/build-dang-video.cjs`를 기준으로 새버전명을 만들고, 프레임/규격/크기/실제브라우저재생을 확인한다.
4. 승인범위의 정확한 소스·3자산·QA/기록만 커밋하고 일반main push를 한다. .git sandbox쓰기 필요시 정식escalation사용, reset/forcepush금지.
5. 실제도메인 소유 Vercel `hana-rcps-homepage-c2nx` 성공을 확인하고 `https://hanarcps.com/dangitalk`에서 새소스·재생·반복·206·아바타/메뉴/페이지이동 회귀를 확인한다. 다른4연결프로젝트 성공을 운영근거로 삼지 않는다.
6. 후속배포SHA/ID/공개QA를 기록·레지스트리에 저장한다. 되돌릴때 이번편집커밋만revert하고 기존회사반복정책d5fdd0e와아바타비율수정2610e0a를 유지한다. 기록만추가배포를일으키지 않는다.

배포 전 기준 운영커밋: `d5fdd0eccfb65f08e5341271a426477ab15cb835`, Vercel `5mUhXgUv3oYNiHPyasnec4Xi2iRR`. 최신 배포결과는 완료 후 `DANG_FORWARD_VIDEO_STATUS.json`과 본 기록에 추가한다.

초기 내부 편집(순방향2.5초,원본3–5.5초)은 전환 직전 강아지가 아이 얼굴을 가려 채택하지 않았다. 최종은 순방향2초(2.3–4.3초)+가족확대2초다. 초기243,233/505,022바이트는 검토중 수치이며 최종228,014/475,400바이트를 따른다.

최종 로컬검수 완료: 빌드/TypeScript/대상ESLint PASS. 최종 v3 4초2컷으로 실제Chrome1280/768/375/320의8개페이지,아바타5개비율,새모바일단일소스·무음·정지,PC새소스/포스터·2회종료,전환전후프레임,회사계속반복/화면이탈·복귀·직접정지보존,206/308/메타/탭·메뉴·Next페이지이동 모두PASS. 결과 qa/dang-forward-local/QA.json; 실제 전환 직전1.95초·직후2.05초 캡처도 육안확인했다. 운영검수는 배포후별도로수행한다.
