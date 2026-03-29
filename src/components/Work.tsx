import React from "react";
import type { Lang } from "../types";
import { WORKS } from "../data";

interface Props { lang: Lang }

const Work: React.FC<Props> = ({ lang }) => {
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  return (
    <div className="cblock rv" id="work">
      <span className="block-label">
        {t("— Selected Works —", "— Dự án nổi bật —", "— 選択された作品 —")}
      </span>

      <h2 className="block-title">
        {lang === "en" && <>Selected <em>Work</em></>}
        {lang === "vi" && <>Dự án <em>Nổi bật</em></>}
        {lang === "ja" && <>選択された<em>作品</em></>}
      </h2>

      <div className="work-list">
        {WORKS.map((w, i) => {
          const info = lang === "en" ? w.en : lang === "vi" ? w.vi : w.ja;
          return (
            <div key={w.n}>
              <div className="w-entry rv">
                <span className="w-num">{w.n}</span>
                <div className="w-title">{info.t}</div>
                <p className="w-desc">{info.d}</p>
                <div className="w-tags">
                  {w.tags.map((tag) => (
                    <span key={tag} className="w-tag">{tag}</span>
                  ))}
                </div>
              </div>
              {i < WORKS.length - 1 && <div className="w-div" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
