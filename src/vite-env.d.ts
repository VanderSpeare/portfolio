/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE:  string;
  readonly VITE_APP_EMAIL:  string;
  readonly VITE_APP_GITHUB: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
