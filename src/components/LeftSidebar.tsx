import React from "react";
import type { Lang } from "../types";
import { NAVS } from "../data";
import { goto } from "./Shared";

interface Props {
  lang: Lang;
  active: string;
}

const LeftSidebar: React.FC<Props> = ({ lang, active }) => (
  <div id="lsb">
    <span id="lsb-brand">W. VanderSpeare</span>
    <ul id="lsb-nav">
      {NAVS.map((n, i) => (
        <li key={n.id}>
          <a
            href={`#${n.id}`}
            className={active === n.id ? "act" : ""}
            onClick={(e) => { e.preventDefault(); goto(n.id); }}
          >
            <span className="lnav-num">0{i + 1}</span>
            <span className="lnav-lbl">
              {lang === "en" ? n.en : lang === "vi" ? n.vi : n.ja}
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LeftSidebar;
