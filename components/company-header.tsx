"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CompanyHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width:700px)");
    const close = () => setOpen(false);
    const outside = (event: MouseEvent) => {
      if (!header.current?.contains(event.target as Node)) close();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        close();
        button.current?.focus();
      }
    };
    media.addEventListener("change", close);
    document.addEventListener("click", outside);
    document.addEventListener("keydown", escape);
    return () => {
      media.removeEventListener("change", close);
      document.removeEventListener("click", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="하나RCPS 처음으로">
          <Image src="/renewal/assets/company-logo.webp" width={34} height={34} alt="" unoptimized />
          <span>하나RCPS</span>
        </a>
        <nav className={`main-nav${open ? " open" : ""}`} id="main-nav" aria-label="주 메뉴">
          <a href="#services" onClick={() => setOpen(false)}>서비스</a>
          <a href="#approach" onClick={() => setOpen(false)}>만드는 방식</a>
          <a href="#about" onClick={() => setOpen(false)}>회사 소개</a>
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>문의하기 <span aria-hidden="true">↗</span></a>
        </nav>
        <button ref={button} className="menu-button" type="button" aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
          메뉴 <span aria-hidden="true">{open ? "−" : "＋"}</span>
        </button>
      </div>
    </header>
  );
}
