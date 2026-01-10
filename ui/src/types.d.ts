// ComfyUIのグローバルな型定義
declare global {
    interface Window {
        app: any;
        api: any;
    }
}

// どのようなパス形式のインポートでも解決できるように宣言
declare module "*/scripts/app.js" {
    export const app: any;
}

declare module "*/scripts/api.js" {
    export const api: any;
}

// 相対パスを個別に宣言（tscの解決ルールに合わせる）
declare module "../../scripts/app.js" {
    export const app: any;
}

declare module "../../scripts/api.js" {
    export const api: any;
}

declare module "/scripts/app.js" {
    export const app: any;
}

declare module "/scripts/api.js" {
    export const api: any;
}

// CSS Modules
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}

export {}; // モジュールとして扱わせる
