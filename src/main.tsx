import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { applyThemeCSS } from "./styles/css";
import { THEME_TOKENS } from "./data";
import './index.css';
import "./styles/css.ts";
import "./types/index.ts";
// Apply theme CSS synchronously BEFORE first render — eliminates white flash.
// Fonts are loaded via <link> in index.html (not injected by JS).
applyThemeCSS(THEME_TOKENS["dark"]);

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
