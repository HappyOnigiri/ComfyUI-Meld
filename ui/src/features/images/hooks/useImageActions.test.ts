import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { injectImageToGraph } from "../../workflows/utils/injectImageToGraph";
import * as imagesApi from "../api/imagesApi";
import { useImageActions } from "./useImageActions";

vi.mock("../api/imagesApi", () => ({
	restoreImages: vi.fn().mockResolvedValue({ restored_ids: [1] }),
	bulkUpdateImageTags: vi.fn(),
	fetchImageWorkflow: vi.fn().mockResolvedValue({ workflow: {} }),
	fetchSnapshotData: vi.fn().mockResolvedValue({ is_flux: true, model_name: "test" }),
	updateImageNotes: vi.fn().mockResolvedValue({ id: 1 }),
}));

vi.mock("../../workflows/api/workflowsApi", () => ({
	fetchWorkflows: vi.fn().mockResolvedValue([{ valid: true, mask_count: 1 }]),
}));

vi.mock("../../workflows/utils/injectImageToGraph", () => ({
	injectImageToGraph: vi.fn().mockReturnValue({ ok: true }),
}));

const mockApp = {
	loadGraphData: vi.fn(),
	graph: {
		add: vi.fn(),
		_nodes: [
			{ type: "Meld Image Loader", id: 1, title: "Loader", name: "Loader" },
			{ type: "Load Image (as Mask)", id: 2, title: "Mask", name: "Mask" },
			{ type: "Meld Image Loader", id: 3, title: "Loader2", name: "Loader" },
		],
	},
	canvas: {
		ds: { offset: [0, 0], scale: 1 },
		selectNode: vi.fn(),
		centerOnNode: vi.fn(),
	},
};
Object.assign(window, { app: mockApp });

const mockLiteGraph = {
	createNode: vi.fn().mockReturnValue({
		widgets: [{ name: "model_name", value: "" }],
		pos: [0, 0],
	}),
};
Object.assign(window, { LiteGraph: mockLiteGraph });

describe("useImageActions Coverage", () => {
	it("covers all action paths", async () => {
		const dispatch = vi.fn();
		const { result } = renderHook(() =>
			useImageActions({ viewScope: "default" } as never, dispatch),
		);

		const image = { id: 1, filename: "test.jpg" } as never;

		await act(async () => {
			await result.current.restoreImages([1]);
			expect(imagesApi.restoreImages).toHaveBeenCalledWith([1]);

			await result.current.bulkUpdateImageTags([1], ["tag"], []);
			expect(imagesApi.bulkUpdateImageTags).toHaveBeenCalledWith([1], ["tag"], []);

			await result.current.handleRestoreWorkflow(image);
			await result.current.handleAddUnifiedLoader(image);
			result.current.handleEditTags(image);
			result.current.handleEditSource(image);
			result.current.handleSendToWorkflow(image); // Multiple loaders branch
			result.current.handleRunWithWorkflow(image);
			await result.current.handleRunWithMask(image, "apply");
			await result.current.handleRunWithMask([image, image], "apply"); // Multiple images apply
			await result.current.handleRunWithMask(image, "run");

			await result.current.handleRestore(image);
			expect(dispatch).toHaveBeenCalled();

			result.current.handleDelete(image);
			expect(dispatch).toHaveBeenCalled();

			result.current.handleEditNotes(image);
			expect(dispatch).toHaveBeenCalled();

			await result.current.handleUpdateUserNotes(1, "notes");
			expect(dispatch).toHaveBeenCalled();
		});

		// Test with no Graph
		mockApp.graph = null as never;
		await act(async () => {
			result.current.handleSendToWorkflow(image);
			await result.current.handleAddUnifiedLoader(image);
		});

		// Test with graph but NO loaders
		mockApp.graph = {
			add: vi.fn(),
			_nodes: [],
		} as never;

		await act(async () => {
			result.current.handleSendToWorkflow(image);
			await result.current.handleRunWithMask(image, "apply");
			expect(injectImageToGraph).not.toHaveBeenCalled();
		});

		// Test with single loader
		mockApp.graph._nodes = [
			{ type: "Meld Image Loader", id: 1, title: "Loader", name: "Loader" },
		] as never;
		await act(async () => {
			result.current.handleSendToWorkflow(image);
			expect(injectImageToGraph).toHaveBeenCalledTimes(1);
			expect(injectImageToGraph).toHaveBeenCalledWith(image);
		});
	});
});
