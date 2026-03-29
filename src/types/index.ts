export type Theme = "dark" | "light";
export type Lang  = "en" | "vi" | "ja";

export interface NavItem {
  id: string;
  en: string;
  vi: string;
  ja: string;
}

export interface WorkItem {
  n: string;
  en: { t: string; d: string };
  vi: { t: string; d: string };
  ja: { t: string; d: string };
  tags: string[];
}

export interface SkillCol {
  en: string;
  vi: string;
  ja: string;
  items: string[];
}

export interface ThemeTokens {
  bg: string;
  page: string;
  text: string;
  text2: string;
  text3: string;
  accent: string;
  shadow: string;
  sideBg: string;
  logoF: string;
}
