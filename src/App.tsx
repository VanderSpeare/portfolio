import { useEffect } from "react";
import { useCursor, useReveal, useScrollState, useTheme, useLang } from "./hooks";
import { applyThemeCSS } from "./styles/css";
import { THEME_TOKENS } from "./data";
import LeftSidebar  from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Hero         from "./components/Hero";
import About        from "./components/About";
import Work         from "./components/Work";
import Skills       from "./components/Skills";
import Contact      from "./components/Contact";
import FinalRoll    from "./components/FinalRoll";

export default function App() {
  const { theme, toggle: toggleTheme } = useTheme();
  const { lang,  cycle: cycleLang    } = useLang();
  const { scrolled, active }           = useScrollState();

  useCursor();
  useReveal();

  // Re-apply CSS only when theme changes.
  // Initial CSS already applied in main.tsx before first render.
  useEffect(() => {
    applyThemeCSS(THEME_TOKENS[theme]);
  }, [theme]);

  return (
    <>
      <div id="cur"  />
      <div id="curR" />
      <div id="noise" />

      <LeftSidebar  lang={lang} active={active} />
      <RightSidebar
        lang={lang}
        theme={theme}
        scrolled={scrolled}
        onLang={cycleLang}
        onTheme={toggleTheme}
      />

      <div id="main">
        <div id="box">
          <Hero      lang={lang} />
          <About     lang={lang} />
          <Work      lang={lang} />
          <Skills    lang={lang} />
          <Contact   lang={lang} />
          <FinalRoll lang={lang} />
        </div>
      </div>
    </>
  );
}
