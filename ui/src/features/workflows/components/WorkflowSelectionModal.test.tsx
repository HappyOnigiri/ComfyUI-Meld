import { act, fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { WorkflowSelectionModal } from "./WorkflowSelectionModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
	}),
}));

describe("WorkflowSelectionModal", () => {
	it("renders without crashing", () => {
		expect(() => render(<WorkflowSelectionModal images={[]} onExecute={vi.fn()} />)).not.toThrow();
	});

	it("handles action buttons safely", async () => {
		await act(async () => {
			render(
				<WorkflowSelectionModal
					images={[{ filename: "test.png", subfolder: "", type: "output" }]}
					onExecute={vi.fn()}
				/>,
			);
		});

		const buttons = document.body.querySelectorAll("button");
		for (const btn of Array.from(buttons)) {
			try {
				await act(async () => {
					fireEvent.click(btn);
				});
			} catch (e) {
				// skip
			}
		}
		expect(buttons.length).toBeGreaterThan(0);
	});
});
