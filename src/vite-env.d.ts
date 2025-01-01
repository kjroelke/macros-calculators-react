/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly WP_AUTH: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
