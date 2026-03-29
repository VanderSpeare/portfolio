import React from "react";
import type { Lang } from "../types";
import { G } from "./Shared";

interface Props { lang: Lang }

const STATS = [
  { n: "2+",  en: "Years Coding",  vi: "Năm lập trình", ja: "コーディング年数" },
  { n: "15+", en: "Projects",      vi: "Dự án",          ja: "プロジェクト"    },
  { n: "IT",  en: "@ HCMUNRE",    vi: "@ TNMT HCM",     ja: "@ TNMT HCM"     },
];

const About: React.FC<Props> = ({ lang }) => {
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  return (
    <div className="cblock rv" id="about">
      <span className="block-label">
        {t("— About the Developer —", "— Giới thiệu —", "— 開発者について —")}
      </span>

      <h2 className="block-title">
        {lang === "en" && <>About <em>Me</em></>}
        {lang === "vi" && <>Về <em>Tôi</em></>}
        {lang === "ja" && <>私に<em>ついて</em></>}
      </h2>

      <p className="bio">
        {lang === "en" && (
          <>Hi! I'm <G c="Phạm Đại Trí" />, a <G c="full-stack web developer" /> with a knack for{" "}
            <G c="problem-solving" /> and a strong foundation in <G c="balanced page layout design" /> and{" "}
            <G c="algorithms" />. Experienced in <G c="full-stack web applications" /> and anything requiring{" "}
            <em style={{ fontStyle: "italic" }}>layout performance</em>.
            <br /><br />
            Currently attending <G c="Ho Chi Minh University of Natural Resources and Environment" /> as an{" "}
            <G c="Information Technology" /> major.
          </>
        )}
        {lang === "vi" && (
          <>Tôi là <G c="Phạm Đại Trí" />, một <G c="lập trình viên full-stack" /> với khả năng{" "}
            <G c="giải quyết vấn đề" /> và nền tảng vững chắc về <G c="thiết kế bố cục trang cân bằng" /> và{" "}
            <G c="thuật toán" />. Có kinh nghiệm xây dựng <G c="ứng dụng web full-stack" />.
            <br /><br />
            Đang theo học tại <G c="Đại học Tài nguyên và Môi trường TP. HCM" />, chuyên ngành{" "}
            <G c="Công nghệ Thông tin" />.
          </>
        )}
        {lang === "ja" && (
          <>私は<G c="ファム・ダイ・チ" />、<G c="フルスタックWebデベロッパー" />です。
            <G c="問題解決" />と<G c="バランスの取れたページレイアウト設計" />に強みを持ちます。
            <br /><br />
            現在、<G c="ホーチミン市天然資源環境大学" />にて<G c="情報技術" />を専攻しています。
          </>
        )}
      </p>

      <div className="quote-block rv">
        <p>{t(
          `"Every layout tells a story — I make sure it's one worth reading."`,
          `"Mỗi bố cục đều kể một câu chuyện — tôi đảm bảo đó là câu chuyện đáng đọc."`,
          `"すべてのレイアウトは物語を語る — 読む価値のある物語にする。"`
        )}</p>
      </div>

      <div className="stats-row rv">
        {STATS.map((s) => (
          <div key={s.n} style={{ textAlign: "center" }}>
            <div className="stat-n">{s.n}</div>
            <div className="stat-l">{t(s.en, s.vi, s.ja)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
