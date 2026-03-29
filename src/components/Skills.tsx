import React from "react";
import type { Lang } from "../types";
import { SKILLS } from "../data";

interface Props { lang: Lang }

const Skills: React.FC<Props> = ({ lang }) => {
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  return (
    <div className="cblock rv" id="skills">
      <span className="block-label">
        {t("— Technical Cast —", "— Công nghệ sử dụng —", "— 技術スタック —")}
      </span>

      <h2 className="block-title">
        {lang === "en" && <><em>Skills</em> &amp; Tools</>}
        {lang === "vi" && <>Kỹ năng <em>&amp; Công cụ</em></>}
        {lang === "ja" && <><em>スキル</em>とツール</>}
      </h2>

      <div className="skills-grid">
        {SKILLS.map((col) => (
          <div key={col.en}>
            <span className="sk-title">{t(col.en, col.vi, col.ja)}</span>
            <ul className="sk-list">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
