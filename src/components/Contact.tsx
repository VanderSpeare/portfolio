import React from "react";
import type { Lang } from "../types";
import LOGO from "../assets/logo";
import { GhIcon, MailIcon } from "./Shared";

interface Props { lang: Lang }

const Contact: React.FC<Props> = ({ lang }) => {
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  return (
    <div className="cblock rv" id="contact">
      <span className="block-label">
        {t("— Get In Touch —", "— Liên hệ —", "— お問い合わせ —")}
      </span>

      <h2 className="block-title">
        {lang === "en" && <>Let's <em>Connect</em></>}
        {lang === "vi" && <>Hãy <em>Kết nối</em></>}
        {lang === "ja" && <><em>繋がり</em>ましょう</>}
      </h2>

      <p className="bio" style={{ maxWidth: 400 }}>
        {t(
          "Open to collaborations, internship opportunities, or a conversation about code and design.",
          "Sẵn sàng hợp tác dự án, cơ hội thực tập, hay chỉ là một cuộc trò chuyện về lập trình.",
          "コラボレーション、インターンシップ、コードとデザインについての会話を歓迎します。"
        )}
      </p>

      <div className="c-links rv">
        <a href={`mailto:${import.meta.env.VITE_APP_EMAIL}`} className="c-lnk">
          <span className="c-icon"><MailIcon /></span>
          {import.meta.env.VITE_APP_EMAIL}
        </a>
        <a href={import.meta.env.VITE_APP_GITHUB} target="_blank" rel="noreferrer" className="c-lnk">
          <span className="c-icon"><GhIcon /></span>
          {import.meta.env.VITE_APP_GITHUB.replace("https://", "")}
        </a>
      </div>

      {/* Rotating geo decoration */}
      <div className="geo rv">
        <img src={LOGO} alt="logo" />
      </div>
    </div>
  );
};

export default Contact;
