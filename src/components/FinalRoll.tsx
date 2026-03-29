import React from "react";
import type { Lang } from "../types";

interface Props { lang: Lang }

const FinalRoll: React.FC<Props> = ({ lang }) => {
  const t = (en: string, vi: string, ja: string) =>
    lang === "en" ? en : lang === "vi" ? vi : ja;

  return (
    <div className="final-roll rv">
      <p className="fr-produced">{t("A production by", "Được tạo bởi", "制作者")}</p>
      <p className="fr-name">Phạm Đại Trí</p>
      <p className="fr-sub">Phạm Đại Trí · ファム・ダイ・チ · Ho Chi Minh City</p>
      <p className="fr-year">
        {t(
          "Information Technology · HCMUNRE · 2026",
          "Công nghệ Thông tin · Đại học TNMT HCM · 2026",
          "情報技術 · HCMUNRE · 2026"
        )}
      </p>
    </div>
  );
};

export default FinalRoll;
