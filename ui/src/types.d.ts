import type { ComfyApi, ComfyApp } from "./types";

// Global type definitions for ComfyUI
declare global {
	interface Window {
		app: ComfyApp;
		api: ComfyApi;
		LiteGraph?: {
			createNode: (type: string) => import("./types").ComfyGraphNode | null;
		};
	}
}

declare const __APP_VERSION__: string;

// ComfyUI script modules. Vite externals resolve these at build time.
// Absolute paths (/scripts/...) are required per .cursor/rules/web.mdc.
declare module "/scripts/app.js" {
	export const app: ComfyApp;
}
declare module "/scripts/api.js" {
	export const api: ComfyApi;
}

// Glob patterns for alternative path formats (e.g. tsc resolution from different depths).
declare module "*/scripts/app.js" {
	export const app: ComfyApp;
}
declare module "*/scripts/api.js" {
	export const api: ComfyApi;
}

// CSS Modules
declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

// Treat as a module
