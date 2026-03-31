import { act, fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { MeldImage } from "../../../types";
import { WorkflowSelectionModal } from "./WorkflowSelectionModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
	}),
}));

vi.mock("../api/workflowsApi", () => ({
	fetchWorkflows: vi.fn().mockResolvedValue({
		ok: true,
		data: [
			{
				name: "test-workflow",
				valid: true,
				loader_count: 1,
				load_image_count: 0,
				mask_count: 0,
				reason: "",
			},
		],
	}),
	fetchWorkflowRaw: vi.fn(),
}));

describe("WorkflowSelectionModal", () => {
	it("renders without crashing", () => {
		expect(() => render(<WorkflowSelectionModal images={[]} onExecute={vi.fn()} />)).not.toThrow();
	});

	it("handles execute button clicks", async () => {
		const mockExecute = vi.fn().mockResolvedValue(true);
		await act(async () => {
			render(
				<WorkflowSelectionModal
					images={[{ filename: "test.png", subfolder: "", type: "output" } as unknown as MeldImage]}
					onExecute={mockExecute}
				/>,
			);
		});

		const queueBtn = document.body.querySelector(".meld-btn--primary");
		if (queueBtn) {
			await act(async () => {
				fireEvent.click(queueBtn);
			});
		}

		expect(mockExecute).toHaveBeenCalledWith("test-workflow", undefined);
	});
});
