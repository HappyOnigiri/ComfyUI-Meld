import { beforeEach, describe, expect, it, vi } from "vitest";
import type { ComfyApp, ComfyGraphNode, MeldImage } from "../../../types";
import { buildComfyImagePath, injectImageToGraph } from "./injectImageToGraph";

describe("buildComfyImagePath", () => {
	it("builds simple path", () => {
		expect(buildComfyImagePath({ filename: "test.png" } as MeldImage)).toBe("test.png");
	});
	it("builds path with subfolder", () => {
		expect(buildComfyImagePath({ filename: "test.png", subfolder: "my-folder" } as MeldImage)).toBe(
			"my-folder/test.png",
		);
	});
	it("builds path with type", () => {
		expect(buildComfyImagePath({ filename: "test.png", type: "temp" } as MeldImage)).toBe(
			"test.png [temp]",
		);
	});
});

describe("injectImageToGraph", () => {
	const mockApp = {
		graph: {
			_nodes: [] as ComfyGraphNode[],
			afterChange: vi.fn(),
			setDirtyCanvas: vi.fn(),
		},
		registerExtension: vi.fn(),
		ui: {},
		loadGraphData: vi.fn(),
	} as unknown as ComfyApp;

	beforeEach(() => {
		window.app = mockApp;
		if (mockApp.graph) {
			mockApp.graph._nodes = [];
			if (mockApp.graph.afterChange) vi.mocked(mockApp.graph.afterChange).mockClear();
			if (mockApp.graph.setDirtyCanvas) vi.mocked(mockApp.graph.setDirtyCanvas).mockClear();
		}
	});

	it("returns no_app_graph if graph is missing", () => {
		window.app = {} as unknown as ComfyApp;
		expect(injectImageToGraph({ filename: "test.png" } as unknown as MeldImage)).toEqual({
			ok: false,
			reason: "no_app_graph",
		});
	});

	it("returns no_loader_node if _nodes is not array", () => {
		window.app = { graph: {} } as unknown as ComfyApp;
		expect(injectImageToGraph({ filename: "test.png" } as unknown as MeldImage)).toEqual({
			ok: false,
			reason: "no_loader_node",
		});
	});

	it("returns no_loader_node if no LoadImage nodes exist", () => {
		if (mockApp.graph) {
			mockApp.graph._nodes = [{ type: "OtherNode" } as unknown as ComfyGraphNode];
		}
		expect(injectImageToGraph({ filename: "test.png" } as MeldImage)).toEqual({
			ok: false,
			reason: "no_loader_node",
		});
	});

	it("returns no_widgets if node has no widgets", () => {
		if (mockApp.graph) {
			mockApp.graph._nodes = [{ type: "LoadImage" } as unknown as ComfyGraphNode];
		}
		expect(injectImageToGraph({ filename: "test.png" } as MeldImage)).toEqual({
			ok: false,
			reason: "no_widgets",
		});
	});

	it("returns no_image_widget if node has no image widget", () => {
		if (mockApp.graph) {
			mockApp.graph._nodes = [
				{ type: "LoadImage", widgets: [{ name: "other" }] } as unknown as ComfyGraphNode,
			];
		}
		expect(injectImageToGraph({ filename: "test.png" } as MeldImage)).toEqual({
			ok: false,
			reason: "no_image_widget",
		});
	});

	it("injects image and triggers updates", () => {
		const mockWidget = { name: "image", value: "", callback: vi.fn() };
		if (mockApp.graph) {
			mockApp.graph._nodes = [
				{ id: "1", type: "LoadImage", widgets: [mockWidget] } as unknown as ComfyGraphNode,
			];
		}

		const res = injectImageToGraph({ filename: "test.png" } as MeldImage);
		expect(res).toEqual({ ok: true });
		expect(mockWidget.value).toBe("test.png");
		expect(mockWidget.callback).toHaveBeenCalledWith("test.png");
		expect(mockApp.graph?.afterChange).toHaveBeenCalled();
		expect(mockApp.graph?.setDirtyCanvas).toHaveBeenCalledWith(true, true);
	});

	it("targets specific node id", () => {
		const mockWidget1 = { name: "image", value: "" };
		const mockWidget2 = { name: "image", value: "" };
		if (mockApp.graph) {
			mockApp.graph._nodes = [
				{ id: "1", type: "LoadImage", widgets: [mockWidget1] } as unknown as ComfyGraphNode,
				{ id: "2", type: "LoadImage", widgets: [mockWidget2] } as unknown as ComfyGraphNode,
			];
		}

		const res = injectImageToGraph({ filename: "test.png" } as MeldImage, "2");
		expect(res).toEqual({ ok: true });
		expect(mockWidget1.value).toBe("");
		expect(mockWidget2.value).toBe("test.png");
	});
});
