import { vi } from "vitest";
import type { ComfyApp } from "../../types";

export const app: ComfyApp = {
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
