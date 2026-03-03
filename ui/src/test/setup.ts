import "@testing-library/jest-dom/vitest";

declare global {
	// Test environment shims for ComfyUI globals.
	// Keep these declarations in setup so production code stays strict.
	var api: unknown;
	var app: unknown;

	interface Window {
		api?: unknown;
		app?: unknown;
	}
}

globalThis.api = {} as unknown;
globalThis.app = {} as unknown;
window.api = globalThis.api;
window.app = globalThis.app;
