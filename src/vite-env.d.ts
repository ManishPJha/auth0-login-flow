/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AUTH0_DOMAIN: string;
  readonly VITE_AUTH0_CLIENT_ID: string;
  readonly VITE_AUTH0_AUDIENCE: string;
  readonly VITE_AUTH0_CONNECTION_NAME: string;
  readonly VITE_AUTH0_RESET_PASSWORD: string;
  readonly VITE_JWT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
