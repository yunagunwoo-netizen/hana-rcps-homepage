"use client";
/* eslint-disable @next/next/no-img-element -- A changing fixed-size app capture is a native image, not a layout image. */

import { useId, useRef, useState } from "react";

const screens = [
  {
    key: "family",
    number: "01",
    label: "가족 대화방",
    tag: "FAMILY CHAT",
    title: "함께 나누는 우리 집의 오늘.",
    copy: "가족의 안부와 사진, 강아지의 이야기가 한곳에 모여요.",
    image: "/renewal/assets/app/dang-family.jpg",
    alt: "댕이톡 가족 대화방 실제 UI · 데모 데이터",
  },
  {
    key: "dm",
    number: "02",
    label: "가족과 1:1",
    tag: "FAMILY DIRECT MESSAGE",
    title: "따로 전하고 싶은 안부도.",
    copy: "같은 가족과 1:1로 편하게 연락해요.",
    image: "/renewal/assets/app/dang-dm.jpg",
    alt: "댕이톡 같은 가족 1:1 실제 UI · 데모 데이터",
  },
  {
    key: "settings",
    number: "03",
    label: "강아지 설정",
    tag: "OUR DOG SETTINGS",
    title: "우리 가족의 생활에 맞게.",
    copy: "강아지의 수다 정도와 조용한 시간, 학교 시간 설정을 조절해요.",
    image: "/renewal/assets/app/dang-settings.jpg",
    alt: "댕이톡 강아지 설정 실제 UI · 데모 데이터",
  },
  {
    key: "theme",
    number: "04",
    label: "이름·견종·테마",
    tag: "OUR FAMILY THEME",
    title: "이름과 모습, 색까지 우리 집답게.",
    copy: "우리 강아지의 견종과 이름, 여섯 가지 테마 색을 선택해요.",
    image: "/renewal/assets/app/dang-theme.jpg",
    alt: "댕이톡 이름·견종·테마 설정 실제 UI · 데모 데이터",
  },
] as const;

export default function DangitalkScreenTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabIds = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = screens[activeIndex];
  const panelId = `${tabIds}-screen-panel`;

  const activate = (index: number, shouldFocus = false) => {
    setActiveIndex(index);
    if (shouldFocus) tabRefs.current[index]?.focus();
  };

  return (
    <div className="screen-layout">
      <div>
        <span className="dkicker">INSIDE DANGITALK</span>
        <h2>설명보다,<br />화면으로 만나보세요.</h2>
        <p className="dtext">실제 앱의 대화방과 설정 화면을 담았습니다.<br />캡처 속 가족과 대화는 데모 데이터입니다.</p>
        <div className="screen-switch" role="tablist" aria-label="실제 앱 화면 선택" aria-orientation="vertical">
          {screens.map((screen, index) => {
            const isActive = index === activeIndex;
            const tabId = `${tabIds}-screen-tab-${screen.key}`;
            return (
              <button
                key={screen.key}
                ref={(node) => { tabRefs.current[index] = node; }}
                id={tabId}
                type="button"
                role="tab"
                aria-controls={panelId}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => activate(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % screens.length;
                  else if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index + screens.length - 1) % screens.length;
                  else if (event.key === "Home") next = 0;
                  else if (event.key === "End") next = screens.length - 1;
                  else return;
                  event.preventDefault();
                  activate(next, true);
                }}
              >
                <span>{screen.number}</span>{screen.label} <b aria-hidden="true">↗</b>
              </button>
            );
          })}
        </div>
      </div>
      <div className="screen-stage">
        <div id={panelId} className="device" role="tabpanel" aria-labelledby={`${tabIds}-screen-tab-${active.key}`}>
          <img src={active.image} alt={active.alt} width="390" height="844" />
        </div>
        <div className="screen-description" aria-live="polite">
          <span>{active.tag}</span>
          <h3>{active.title}</h3>
          <p>{active.copy}</p>
        </div>
      </div>
    </div>
  );
}
