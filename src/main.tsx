import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { applyThemeCSS, injectFonts } from "./styles/css";
import { THEME_TOKENS } from "./data";

// ── Apply CSS BEFORE first render so there is never a white flash ──
injectFonts();
applyThemeCSS(THEME_TOKENS["dark"]); // default dark theme

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
