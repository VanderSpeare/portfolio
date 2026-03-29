import React from "react";
import type { Lang, Theme } from "../types";
import LOGO from "../assets/logo";
import { GhIcon, MailIcon } from "./Shared";

interface Props {
  lang: Lang;
  theme: Theme;
  scrolled: boolean;
  onLang: () => void;
  onTheme: () => void;
}

const RightSidebar: React.FC<Props> = ({ lang, theme, scrolled, onLang, onTheme }) => {
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  return (
    <div id="rsb">
      {/* Logo */}
      <div id="rsb-logo">
        <img src={LOGO} alt="logo" />
      </div>

      {/* External links */}
      <div id="rsb-links">
        <a href={import.meta.env.VITE_APP_GITHUB} target="_blank" rel="noreferrer" className="rsb-lnk">
          <span className="rsb-icon"><GhIcon /></span>
          <span className="rsb-lbl">GitHub</span>
        </a>
        <a href={`mailto:${import.meta.env.VITE_APP_EMAIL}`} className="rsb-lnk">
          <span className="rsb-icon"><MailIcon /></span>
          <span className="rsb-lbl">Gmail</span>
        </a>
      </div>

      {/* Controls */}
      <div id="rsb-ctrl">
        {/* Back to top */}
        <div id="btt" className={scrolled ? "vis" : ""}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
          >
            <span className="abounce">↑</span>
          </button>
          <span className="ctrl-lbl">{t("Top", "Đầu", "トップ")}</span>
        </div>

        {/* Language */}
        <div className="ctrl-grp">
          <button className="ctrl-btn" onClick={onLang}>
            {lang === "en" ? "VI" : lang === "vi" ? "JA" : "EN"}
          </button>
          <span className="ctrl-lbl">{t("Lang", "Ngôn ngữ", "言語")}</span>
        </div>

        {/* Theme */}
        <div className="ctrl-grp">
          <button className="ctrl-btn" onClick={onTheme}>
            {theme === "dark" ? "◐" : "●"}
          </button>
          <span className="ctrl-lbl">{t("Theme", "Giao diện", "テーマ")}</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
