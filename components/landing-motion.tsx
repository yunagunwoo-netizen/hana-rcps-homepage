"use client";
/* eslint-disable @next/next/no-img-element -- A pre-sized poster must remain visible without JavaScript. */
import { useEffect, useRef } from "react";

type Props = { id: string; name: string; poster: string; posterAlt: string; mobile: string; desktop: string; className?: string; priority?: boolean; repeatWhileVisible?: boolean; nativeLoop?: boolean };
type Connection = EventTarget & { saveData?: boolean };

export default function LandingMotion({ id, name, poster, posterAlt, mobile, desktop, className = "motion-card", priority = false, repeatWhileVisible = false, nativeLoop = false }: Props) {
  const shouldNativeLoop = nativeLoop && repeatWhileVisible;
  const rootRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const video = root.querySelector("video")!, button = root.querySelector("button")!, image = root.querySelector("img")!;
    const label = root.querySelector<HTMLElement>("[data-motion-label]")!, icon = root.querySelector<HTMLElement>("[data-motion-icon]")!, status = root.querySelector<HTMLElement>("[data-motion-status]")!;
    const small = window.matchMedia("(max-width:700px)"), reduced = window.matchMedia("(prefers-reduced-motion:reduce)");
    const connection = (navigator as Navigator & { connection?: Connection }).connection;
    const canObserve = "IntersectionObserver" in window;
    let visible = !canObserve, loaded = false, autoAttempted = false, userPaused = false, intent = false, alive = true;
    let completed = 0, request = 0, mode = "manual";
    const update = (state: string) => {
      root.dataset.motionState = state;
      const playing = state === "playing" || state === "loading";
      const text = playing ? "일시정지" : state === "finished" ? "다시 보기" : "영상 보기";
      label.textContent = text; icon.textContent = playing ? "Ⅱ" : "▷";
      button.setAttribute("aria-label", name + " " + text); button.setAttribute("aria-pressed", String(playing));
      status.textContent = state === "playing" ? "무음 영상 재생 중" : state === "loading" ? "영상을 불러오는 중" : state === "error" ? "정지 화면입니다. 다시 재생할 수 있습니다." : state === "finished" ? "영상 재생 완료" : "";
    };
    const blocksAuto = () => small.matches || reduced.matches || connection?.saveData === true;
    const stop = (manual = false, keepIntent = false) => {
      request++; if (manual) userPaused = true; if (!keepIntent) intent = false; video.pause();
      if (root.dataset.motionState !== "finished") update(root.classList.contains("has-motion-frame") ? "paused" : "idle");
    };
    const play = async (reset = false) => {
      if (document.hidden || !alive) return;
      if (reset) { completed = 0; userPaused = false; }
      intent = true; const currentRequest = ++request;
      if (loaded && root.dataset.motionState === "error") video.load();
      if (!loaded) {
        const variant = small.matches ? "mobile" : "desktop";
        video.src = variant === "mobile" ? mobile : desktop; root.dataset.motionVariant = variant; loaded = true; video.load();
      }
      if (reset || video.ended) video.currentTime = 0;
      video.muted = true; update("loading");
      try { await video.play(); if (!alive || currentRequest !== request) return; root.classList.add("has-motion-frame"); update("playing"); }
      catch { if (!alive || currentRequest !== request) return; intent = false; root.classList.remove("has-motion-frame"); update("error"); }
    };
    const maybeStart = () => {
      if (!visible || document.hidden || document.readyState !== "complete" || (!canObserve && !intent)) return;
      if (["playing", "loading"].includes(root.dataset.motionState || "")) return;
      if (intent && !userPaused && (mode === "manual" || !blocksAuto())) { void play(); return; }
      if (autoAttempted || userPaused || blocksAuto() || !image.complete || !image.naturalWidth) return;
      autoAttempted = true; mode = "auto"; void play(true);
    };
    const click = () => {
      if (["playing", "loading"].includes(root.dataset.motionState || "")) stop(true);
      else { mode = "manual"; autoAttempted = true; userPaused = false; void play(["finished", "error"].includes(root.dataset.motionState || "") || !loaded); }
    };
    const ended = () => { if (shouldNativeLoop) return; completed++; if (!repeatWhileVisible && completed >= 2) { intent = false; autoAttempted = true; update("finished"); } else if (visible && !document.hidden && intent) void play(); };
    const error = () => { request++; intent = false; root.classList.remove("has-motion-frame"); update("error"); };
    const visibility = () => { if (document.hidden) stop(false, intent); else maybeStart(); };
    const preference = () => { if (blocksAuto() && mode === "auto") { autoAttempted = true; stop(); } };
    const observer = canObserve ? new IntersectionObserver(entries => { visible = entries[0].isIntersecting && entries[0].intersectionRatio >= .25; if (visible) maybeStart(); else stop(false, intent); }, { threshold: [0, .25] }) : null;
    const cleanup: Array<() => void> = [];
    const listen = (target: EventTarget, type: string, action: () => void) => { target.addEventListener(type, action); cleanup.push(() => target.removeEventListener(type, action)); };
    button.hidden = false; update("idle");
    listen(button, "click", click); listen(video, "ended", ended); listen(video, "error", error);
    listen(document, "visibilitychange", visibility); listen(reduced, "change", preference); listen(small, "change", preference);
    if (connection) listen(connection, "change", preference);
    listen(window, "load", maybeStart); listen(image, "load", maybeStart); observer?.observe(root); maybeStart();
    return () => { alive = false; request++; observer?.disconnect(); cleanup.forEach(action => action()); video.pause(); video.removeAttribute("src"); video.load(); };
  }, [desktop, mobile, name, repeatWhileVisible, shouldNativeLoop]);
  return (
    <figure ref={rootRef} className={className} data-landing-motion data-motion-name={name} data-motion-repeat={repeatWhileVisible ? "visible" : "twice"}>
      <img data-motion-poster src={poster} width={480} height={854} alt={posterAlt} loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async" />
      <video id={id} aria-hidden="true" data-mobile={mobile} data-desktop={desktop} muted playsInline preload="none" loop={shouldNativeLoop} />
      <button className="motion-control" data-motion-control type="button" aria-controls={id} aria-pressed="false" hidden><span data-motion-icon aria-hidden="true">▷</span><span data-motion-label>영상 보기</span></button>
      <span className="motion-status" data-motion-status aria-live="polite" />
    </figure>
  );
}
