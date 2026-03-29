import { useState, useEffect, useCallback } from "react";
import type { Theme, Lang } from "../types";

// ── Cursor: tracks mouse, drives two DOM elements directly (no React state)
export function useCursor(): void {
  useEffect(() => {
    const cur  = document.getElementById("cur");
    const ring = document.getElementById("curR");
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0, raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      cur.style.left = mx + "px"; cur.style.top = my + "px";
    };
    const loop = () => {
      rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

// ── Scroll-reveal: IntersectionObserver adds ".in" class to .rv elements
export function useReveal(): void {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ── Scroll position: back-to-top visibility + active nav section
export function useScrollState() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 240);
      const ids = ["about", "work", "skills", "contact"];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 150) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { scrolled, active };
}

// ── Real-time greeting based on local hour; refreshes every 60 s
export function useGreeting(lang: Lang): string {
  const get = useCallback((): string => {
    const h = new Date().getHours();
    if (h >= 5  && h < 12) return lang === "en" ? "Good Morning"   : lang === "vi" ? "Chào Buổi Sáng" : "おはようございます";
    if (h >= 12 && h < 17) return lang === "en" ? "Good Afternoon" : lang === "vi" ? "Chào Buổi Chiều" : "こんにちは";
    if (h >= 17 && h < 21) return lang === "en" ? "Good Evening"   : lang === "vi" ? "Chào Buổi Tối"  : "こんばんは";
    return                         lang === "en" ? "Good Night"     : lang === "vi" ? "Chúc Ngủ Ngon"  : "おやすみなさい";
  }, [lang]);

  const [greeting, setGreeting] = useState(get);

  useEffect(() => {
    setGreeting(get());
    const id = setInterval(() => setGreeting(get()), 60_000);
    return () => clearInterval(id);
  }, [get]);

  return greeting;
}

// ── Theme toggle
export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}

// ── Language cycle: en → vi → ja → en
export function useLang() {
  const [lang, setLang] = useState<Lang>("en");
  const cycle = useCallback(() => setLang((l) => (l === "en" ? "vi" : l === "vi" ? "ja" : "en")), []);
  return { lang, cycle };
}
