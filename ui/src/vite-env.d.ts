/// <reference types="vite/client" />
import type { ComfyApi, ComfyApp } from "./types";

declare global {
	const __APP_VERSION__: string;

	interface Window {
		app: ComfyApp;
		api: ComfyApi;
		LiteGraph?: unknown;
	}
}
