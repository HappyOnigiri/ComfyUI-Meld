import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../test/helpers/renderWithGallery";
import { DeleteConfirmModal } from "./DeleteConfirmModal";

// Mock useGallery
vi.mock("../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

// Mock useEscapeToClose
vi.mock("../../hooks/useEscapeToClose", () => ({
	useEscapeToClose: vi.fn(),
}));

// Mock useLightTableStore
vi.mock("../../features/light-table/store", () => ({
	useLightTableStore: Object.assign(
		vi.fn(() => ({})),
		{
			getState: vi.fn(() => ({ buckets: {} })),
		},
	),
}));

// Mock delete helpers
vi.mock("../../features/images/hooks/deleteHelpers", () => ({
	deleteImagesAndSyncLightTable: vi.fn().mockResolvedValue(undefined),
}));

// Mock images API
vi.mock("../../features/images/api/imagesApi", () => ({
	fetchLineage: vi.fn().mockResolvedValue([]),
}));

import { useGallery } from "../../store/GalleryContext";

describe("DeleteConfirmModal", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		ctx = createMockGalleryContext({
			activeModal: { type: "delete_confirm", imageIds: [1, 2], hasLineage: false },
		});
		vi.mocked(useGallery).mockReturnValue(ctx);
	});

	it("renders 'Move to Trash' header by default", () => {
		render(<DeleteConfirmModal imageIds={[1, 2]} hasLineage={false} />);
		const heading = document.querySelector(".meld-modal-header h2");
		expect(heading?.textContent).toContain("Move to Trash");
	});

	it("renders 'Permanent Deletion' header when isPermanent is true", () => {
		render(<DeleteConfirmModal imageIds={[1, 2]} hasLineage={false} isPermanent />);
		const heading = document.querySelector(".meld-modal-header h2");
		expect(heading?.textContent).toContain("Permanent Deletion");
	});

	it("displays the number of selected items", () => {
		render(<DeleteConfirmModal imageIds={[1, 2, 3]} hasLineage={false} />);
		expect(screen.getByText("3")).toBeInTheDocument();
	});

	it("dispatches CLOSE_MODAL when Cancel button is clicked", async () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage={false} />);
		await userEvent.click(screen.getByText("Cancel"));
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
	});

	it("shows lineage buttons when hasLineage is true", () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage />);
		expect(screen.getByText("Move All Related")).toBeInTheDocument();
	});

	it("does not show lineage buttons when hasLineage is false", () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage={false} />);
		expect(screen.queryByText("Move All Related")).not.toBeInTheDocument();
	});

	it("shows permanent delete labels when isPermanent is true with lineage", () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage isPermanent />);
		expect(screen.getByText("Delete Permanently")).toBeInTheDocument();
		expect(screen.getByText("Delete All Related")).toBeInTheDocument();
	});

	it("shows warning message for permanent deletion", () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage={false} isPermanent />);
		expect(screen.getByText(/permanently deleted/)).toBeInTheDocument();
	});

	it("shows info message for trash mode", () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage={false} />);
		expect(screen.getByText(/moved to the trash bin/)).toBeInTheDocument();
	});

	it("dispatches CLOSE_MODAL when close (X) button is clicked", async () => {
		render(<DeleteConfirmModal imageIds={[1]} hasLineage={false} />);
		// Close button is the one with the X icon
		const closeButton = document.querySelector(".meld-modal-close");
		expect(closeButton).toBeTruthy();
		await userEvent.click(closeButton as HTMLElement);
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
	});
});
