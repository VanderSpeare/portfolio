import type { NavItem, WorkItem, SkillCol, ThemeTokens } from "../types";

export const NAVS: NavItem[] = [
  { id: "about",   en: "About",   vi: "Giới thiệu", ja: "について" },
  { id: "work",    en: "Work",    vi: "Dự án",       ja: "作品"     },
  { id: "skills",  en: "Skills",  vi: "Kỹ năng",     ja: "スキル"   },
  { id: "contact", en: "Contact", vi: "Liên hệ",     ja: "連絡"     },
];

export const WORKS: WorkItem[] = [
  {
    n: "001",
    en: { t: "Full-Stack Web Application",  d: "Complete web app combining responsive front-end with robust back-end API. Focused on performance, clean architecture and balanced layout." },
    vi: { t: "Ứng dụng Web Full-Stack",      d: "Ứng dụng web hoàn chỉnh kết hợp front-end responsive với back-end API vững chắc." },
    ja: { t: "フルスタックWebアプリ",          d: "レスポンシブフロントエンドと堅牢なバックエンドAPIを組み合わせた完全なWebアプリ。" },
    tags: ["React", "Node.js", "SQL", "REST API"],
  },
  {
    n: "002",
    en: { t: "Algorithm Visualiser",        d: "Interactive tool rendering sorting & pathfinding algorithms in real-time, bridging intuition and logic." },
    vi: { t: "Trực quan hoá thuật toán",    d: "Công cụ tương tác hiển thị thuật toán sắp xếp và tìm đường theo thời gian thực." },
    ja: { t: "アルゴリズム可視化",            d: "ソートと経路探索アルゴリズムをリアルタイムでレンダリング。" },
    tags: ["JavaScript", "Canvas API", "Algorithms"],
  },
  {
    n: "003",
    en: { t: "Layout Performance Lab",      d: "Research into CSS grid systems, spacing ratios and typographic rhythm for maximum readability." },
    vi: { t: "Phòng thí nghiệm bố cục",    d: "Nghiên cứu CSS grid, tỷ lệ khoảng cách và nhịp điệu typography." },
    ja: { t: "レイアウト研究",                d: "CSSグリッドシステム、スペーシング比率の研究。" },
    tags: ["CSS", "Typography", "Design Systems"],
  },
  {
    n: "004",
    en: { t: "Portfolio Site",              d: "Bilingual portfolio inspired by KAMITSUBAKI Studio — geometry, restraint, and cinematic flow." },
    vi: { t: "Trang portfolio này",         d: "Portfolio song ngữ lấy cảm hứng từ KAMITSUBAKI Studio." },
    ja: { t: "ポートフォリオサイト",          d: "KAMITSUBAKI Studioにインスパイアされた多言語ポートフォリオ。" },
    tags: ["React", "TypeScript", "CSS"],
  },
];

export const SKILLS: SkillCol[] = [
  { en: "Front-End",  vi: "Giao diện", ja: "フロントエンド", items: ["HTML / CSS / JS", "React.js", "Responsive Layout", "CSS Grid & Flexbox", "UI / UX Design"] },
  { en: "Back-End",   vi: "Máy chủ",   ja: "バックエンド",   items: ["Node.js / Express", "Python", "REST APIs", "MySQL / PostgreSQL", "MongoDB"] },
  { en: "Foundation", vi: "Nền tảng",  ja: "基礎技術",       items: ["Data Structures", "Algorithms", "Git / GitHub", "Problem Solving", "Technical Writing"] },
];

export const THEME_TOKENS: Record<"dark" | "light", ThemeTokens> = {
  dark: {
    bg:      "#09090d",
    page:    "rgba(11,11,18,0.97)",
    text:    "#dcdcf0",
    text2:   "#6a6a92",
    text3:   "#32324e",
    accent:  "#5555aa",
    shadow:  "rgba(0,0,0,0.72)",
    sideBg:  "rgba(9,9,16,0.97)",
    logoF:   "brightness(.82) saturate(.5) hue-rotate(232deg)",
  },
  light: {
    bg:      "#efefef",
    page:    "rgba(252,252,255,0.97)",
    text:    "#141420",
    text2:   "#505068",
    text3:   "#9898b0",
    accent:  "#3c3ca0",
    shadow:  "rgba(0,0,0,0.1)",
    sideBg:  "rgba(238,238,248,0.97)",
    logoF:   "brightness(.68) saturate(.45) hue-rotate(235deg)",
  },
};
