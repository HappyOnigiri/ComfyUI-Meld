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

// requestAnimationFrame/cancelAnimationFrame are not available in jsdom; required by portalRoots.ts
if (typeof global.requestAnimationFrame === "undefined") {
	global.requestAnimationFrame = (cb: FrameRequestCallback) =>
		setTimeout(cb, 0) as unknown as number;
}
if (typeof global.cancelAnimationFrame === "undefined") {
	global.cancelAnimationFrame = (id: number) => clearTimeout(id);
}

declare global {
	// Test environment shims for ComfyUI globals.
	// Keep these declarations in setup so production code stays strict.
	var api: ComfyApi;
	var app: ComfyApp;
}

global.Node = window.Node;
HTMLCanvasElement.prototype.getContext = vi
	.fn()
	.mockReturnValue(null) as unknown as HTMLCanvasElement["getContext"];
HTMLElement.prototype.requestFullscreen = vi.fn().mockResolvedValue(undefined);
document.exitFullscreen = vi.fn().mockResolvedValue(undefined);

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
