import React from "react";
import type { Lang } from "../types";
import LOGO from "../assets/logo";
import { goto } from "./Shared";
import { useGreeting } from "../hooks";

interface Props { lang: Lang }

const Hero: React.FC<Props> = ({ lang }) => {
  const greeting = useGreeting(lang);
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  // Split greeting: first word on line 1, rest italic on line 2
  const parts = greeting.split(" ");
  const first = parts[0];
  const rest  = parts.slice(1).join(" ");

  return (
    <div className="c-hero">
      {/* Orbit system */}
      <div className="orbit-scene">
        <div className="o-ring o-ring-1" />
        <div className="o-ring o-ring-2" />
        <div className="o-ring o-ring-3" />
        <div className="o-sat o-s1" />
        <div className="o-sat o-s2" />
        <div className="o-sat o-s3" />
        <img src={LOGO} alt="logo" className="o-logo" />
      </div>

      <span className="c-role">
        {t("Portfolio — Full Stack Developer", "Hồ sơ — Lập trình viên Full-Stack", "ポートフォリオ — フルスタック開発者")}
      </span>

      <h1 className="c-title">
        {first}
        {rest && <><br /><em>{rest}</em></>}
      </h1>

      <p className="c-alias">Phạm Đại Trí · ファム・ダイ・チ</p>

      <p className="c-tagline">
        {t(
          "Crafting full-stack solutions with an eye for balanced layout and algorithmic elegance.",
          "Xây dựng giải pháp full-stack với tư duy bố cục cân bằng và thuật toán tinh tế.",
          "バランスの取れたレイアウトとアルゴリズムの洗練さでフルスタックソリューションを構築。"
        )}
      </p>

      <div className="c-cta">
        <a href="#work" className="cbtn cbtn-p"
          onClick={(e) => { e.preventDefault(); goto("work"); }}>
          {t("View Work", "Xem dự án", "作品を見る")}
        </a>
        <a href="#contact" className="cbtn"
          onClick={(e) => { e.preventDefault(); goto("contact"); }}>
          {t("Contact", "Liên hệ", "連絡する")}
        </a>
      </div>
    </div>
  );
};

export default Hero;
