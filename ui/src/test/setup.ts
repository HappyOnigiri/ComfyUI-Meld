import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import type { ComfyApi, ComfyApp } from "../types";

// ResizeObserver is not available in jsdom, so we mock it
global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

global.IntersectionObserver = class IntersectionObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
} as unknown as typeof IntersectionObserver;

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

const testApi: ComfyApi = {
	clientId: "vitest-client",
	fetchApi: vi.fn(
		async () =>
			new Response(
				JSON.stringify({
					success: true,
					data: {},
				}),
				{
					status: 200,
					headers: { "Content-Type": "application/json" },
				},
			),
	),
	addEventListener: vi.fn(),
};

const testApp: ComfyApp = {
	registerExtension: vi.fn(),
	graph: {
		_nodes: [],
		add: vi.fn(),
		afterChange: vi.fn(),
		setDirtyCanvas: vi.fn(),
	},
	canvas: {
		ds: {
			offset: [0, 0],
			scale: 1,
		},
		selectNode: vi.fn(),
		centerOnNode: vi.fn(),
	},
	loadGraphData: vi.fn().mockResolvedValue(undefined),
	queuePrompt: vi.fn().mockResolvedValue(undefined),
	ui: {},
};

globalThis.api = testApi;
globalThis.app = testApp;
window.api = testApi;
window.app = testApp;
