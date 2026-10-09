# 회사 메인 영상의 화면 안 반복 재생

사용자가 추천 방식과 현재 primary/high 수정·배포를 승인했다. 적용 범위는 회사 메인 영상만이다. 현재4초·PC380,256바이트/모바일181,675바이트의 기존 파일을 재사용하며 새 영상/유료 생성은 없다.

`components/landing-motion.tsx`에 선택 속성 `repeatWhileVisible`(기본false)을 추가하고 `app/page.tsx`의 회사 영상에서만 활성화했다. 회사는 화면에 보이고 탭이 숨겨지지 않은 동안 계속 반복한다. 관찰 기준은 기존 IntersectionObserver의25%로 유지한다. 화면 밖 또는 숨김 시 정지하고, 적절한 상태로 돌아오면 이어 재생한다. 사용자가 직접 일시정지한 상태는 화면/탭 변화로 자동 해제하지 않는다. 모바일·동작 감소·데이터 절약은 자동 재생을 하지 않고 수동 버튼으로 시작한다. 수동 시작 후에는 화면 안에서 반복할 수 있다. 일시정지 버튼/무음/단일기기파일 선택과 비동기 요청 토큰·cleanup은 유지했다. 댕이톡에는 속성을 주지 않아 기존 두 번 재생 후 정지를 유지한다.

보수적 동작: 자동 재생 도중 모바일크기/절약 설정이 활성화돼 정지하면 설정 해제만으로 강제 재개하지 않으며 사용자가 다시 시작할 수 있다. 사용자에게 원치 않는 자동 재생을 강요하지 않는 기존 정책이다. 회사 source 재생성 보조 `design-preview/qa-motion/promote-company.cjs`에도 속성을 반영했다. 미리보기 보조는 Git배포 파일이 아니다.

빌드/TypeScript/대상ESLint 통과. `scripts/verify-renewal.cjs`를 새 정책에 맞춰 갱신했다. 로컬 결과 `qa/continuous-local/QA.json`:8개route/viewport,기존아바타원형·탭/메뉴/이동/메타/206/308검사에 더해 회사2회종료이후계속재생,화면밖정지·복귀재개,직접정지유지,모바일/절약수동재생,Dang2회정지PASS. hidden-tab은 fresh QA 페이지에서 standard visibilitychange/hidden상태를 시뮬레이션해 handler를 검사했다. 실제 사용자 브라우저의 숨김 상태/설정을 변경하지 않았으며 물리 기기/배터리/4G 측정이나 실제 OS탭전환 검사로 표기하지 않는다. 공유플레이어 독립읽기검토 `/root/dang_production` Standard(gpt-5.6-terra/high 요청, 실제model/effort 메타데이터미확인)는 비동기/수동정지/기본Dang범위에 critical문제없음을 확인했다. 에이전트 파일/프로세스/배포 수정0.

배포 대상은 기존 `hana-rcps-homepage-c2nx`의 `https://hanarcps.com/`. 기존 사용자 수정AIDDP_HANDOFF/미커밋보고서/원본앱은 포함하지 않고 이번 source·검수·기록만 명시적으로 커밋한다. 실제 배포SHA/운영검수는 `CONTINUOUS_HERO_STATUS.json`과 `qa/continuous-live/QA.json`에 남긴다. 되돌릴 경우 이번 커밋만 revert하며 이전아바타수정2610e0a를 유지한다.

재빌드 `npm run build`; QA는 설치Playwright로 PREVIEW_PLAYWRIGHT_ROOT 지정 후 `RENEWAL_QA_LABEL=continuous-local node scripts/verify-renewal.cjs`; 운영은 `RENEWAL_ORIGIN=https://hanarcps.com`, label `continuous-live`. 사용자는 현재primary/high를 명시 승인했고 별도 모델 전환은 수행하지 않았다.
