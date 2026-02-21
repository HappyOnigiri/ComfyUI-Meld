import type { ComfyApi, ComfyApp } from "./types";

// Global type definitions for ComfyUI
declare global {
	interface Window {
		app: ComfyApp;
		api: ComfyApi;
	}
}

declare const __APP_VERSION__: string;

// Declare to resolve any path format imports
declare module "*/scripts/app.js" {
	export const app: ComfyApp;
}

declare module "*/scripts/api.js" {
	export const api: ComfyApi;
}

// Declare relative paths individually (match tsc resolution rules)
declare module "../../scripts/app.js" {
	export const app: ComfyApp;
}

declare module "../../scripts/api.js" {
	export const api: ComfyApi;
}

declare module "/scripts/app.js" {
	export const app: ComfyApp;
}

declare module "/scripts/api.js" {
	export const api: ComfyApi;
}

declare module "/scripts/app.js" {
	export const app: ComfyApp;
}

declare module "/scripts/api.js" {
	export const api: ComfyApi;
}

// CSS Modules
declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

// Treat as a module
