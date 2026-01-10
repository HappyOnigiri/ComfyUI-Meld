// Global type definitions for ComfyUI
declare global {
    interface Window {
        app: any;
        api: any;
    }
}

// Declare to resolve any path format imports
declare module "*/scripts/app.js" {
    export const app: any;
}

declare module "*/scripts/api.js" {
    export const api: any;
}

// Declare relative paths individually (match tsc resolution rules)
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

// Treat as a module
export {};
