import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ComfyApp, ComfyGraphNode, MeldImage } from "../../../types";
import { buildComfyImagePath, injectImageToGraph } from "./injectImageToGraph";

const makeImage = (overrides?: Partial<MeldImage>): MeldImage =>
	({
		filename: "test.png",
		...overrides,
	}) as MeldImage;

describe("buildComfyImagePath", () => {
	it("builds simple path", () => {
		expect(buildComfyImagePath(makeImage({ filename: "test.png" }))).toBe("test.png");
	});
	it("builds path with subfolder", () => {
		expect(buildComfyImagePath(makeImage({ filename: "test.png", subfolder: "my-folder" }))).toBe(
			"my-folder/test.png",
		);
	});
	it("builds path with type", () => {
		expect(buildComfyImagePath(makeImage({ filename: "test.png", type: "temp" }))).toBe(
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

	let originalApp: typeof window.app;

	beforeEach(() => {
		originalApp = window.app;
		window.app = mockApp;
		if (mockApp.graph) {
			mockApp.graph._nodes = [];
			if (mockApp.graph.afterChange) vi.mocked(mockApp.graph.afterChange).mockClear();
			if (mockApp.graph.setDirtyCanvas) vi.mocked(mockApp.graph.setDirtyCanvas).mockClear();
		}
	});

	afterEach(() => {
		window.app = originalApp;
		if (mockApp.graph) {
			mockApp.graph._nodes = [];
			if (mockApp.graph.afterChange) vi.mocked(mockApp.graph.afterChange).mockClear();
			if (mockApp.graph.setDirtyCanvas) vi.mocked(mockApp.graph.setDirtyCanvas).mockClear();
		}
	});

	it("returns no_app_graph if graph is missing", () => {
		window.app = {} as unknown as ComfyApp;
		expect(injectImageToGraph(makeImage({ filename: "test.png" }))).toEqual({
			ok: false,
			reason: "no_app_graph",
		});
	});

	it("returns no_loader_node if _nodes is not array", () => {
		window.app = { graph: {} } as unknown as ComfyApp;
		expect(injectImageToGraph(makeImage({ filename: "test.png" }))).toEqual({
			ok: false,
			reason: "no_loader_node",
		});
	});

	it("returns no_loader_node if no LoadImage nodes exist", () => {
		if (mockApp.graph) {
			mockApp.graph._nodes = [{ type: "OtherNode" } as unknown as ComfyGraphNode];
		}
		expect(injectImageToGraph(makeImage({ filename: "test.png" }))).toEqual({
			ok: false,
			reason: "no_loader_node",
		});
	});

	it("returns no_widgets if node has no widgets", () => {
		if (mockApp.graph) {
			mockApp.graph._nodes = [{ type: "LoadImage" } as unknown as ComfyGraphNode];
		}
		expect(injectImageToGraph(makeImage({ filename: "test.png" }))).toEqual({
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
		expect(injectImageToGraph(makeImage({ filename: "test.png" }))).toEqual({
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

		const res = injectImageToGraph(makeImage({ filename: "test.png" }));
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

		const res = injectImageToGraph(makeImage({ filename: "test.png" }), "2");
		expect(res).toEqual({ ok: true });
		expect(mockWidget1.value).toBe("");
		expect(mockWidget2.value).toBe("test.png");
	});
});
