import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../../test/helpers/renderWithGallery";
import { BulkActionBar } from "./BulkActionBar";

// Mock useGallery
vi.mock("../../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

// Mock useImageActions
vi.mock("../../images/hooks/useImageActions", () => ({
	useImageActions: vi.fn(() => ({
		handleRunWithWorkflow: vi.fn(),
		handleRunWithMask: vi.fn(),
	})),
}));

// Mock portalRoots - return document.body for portal rendering
vi.mock("../../../portals/portalRoots", () => ({
	getPortalRoot: vi.fn(() => document.body),
}));

// Mock useEscapeToClose and useOnPointerDownOutside
vi.mock("../../../hooks/useEscapeToClose", () => ({
	useEscapeToClose: vi.fn(),
}));
vi.mock("../../../hooks/useOnPointerDownOutside", () => ({
	useOnPointerDownOutside: vi.fn(),
}));

import { useGallery } from "../../../store/GalleryContext";

describe("BulkActionBar", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		resetImageIdCounter();
	});

	it("renders nothing when no items are selected", () => {
		ctx = createMockGalleryContext({ selectedIds: new Set<number>() });
		vi.mocked(useGallery).mockReturnValue(ctx);

		const { container } = render(<BulkActionBar />);
		// BulkActionBar returns null via portal when count === 0
		expect(container.querySelector(".meld-bulk-bar")).not.toBeInTheDocument();
	});

	it("renders the selection count", () => {
		const img1 = createTestImage();
		const img2 = createTestImage();
		const img3 = createTestImage();
		ctx = createMockGalleryContext({
			images: [img1, img2, img3],
			selectedIds: new Set([img1.id, img2.id, img3.id]),
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		expect(screen.getByText("3 items selected")).toBeInTheDocument();
	});

	it("dispatches CLEAR_SELECTION when Cancel is clicked", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Cancel"));
		expect(ctx.dispatch).toHaveBeenCalledWith({ type: "CLEAR_SELECTION" });
	});

	it("shows Action button", () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		expect(screen.getByText("Action")).toBeInTheDocument();
	});

	it("shows trash mode actions when viewScope is trash", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "trash",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		// Click Action to open menu
		await userEvent.click(screen.getByText("Action"));
		expect(screen.getByText("Restore")).toBeInTheDocument();
		expect(screen.getByText("Delete Permanently")).toBeInTheDocument();
	});

	it("shows normal mode actions when viewScope is default", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "default",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		expect(screen.getByText("Edit Tags")).toBeInTheDocument();
		expect(screen.getByText("Queue Workflow")).toBeInTheDocument();
		expect(screen.getByText("Move to Trash")).toBeInTheDocument();
		expect(screen.getByText("Download")).toBeInTheDocument();
	});

	it("clicks Edit Tags menu item to dispatch OPEN_MODAL", async () => {
		const img = createTestImage({ tags: ["a", "b"] });
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "default",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		await userEvent.click(screen.getByText("Edit Tags"));
		expect(ctx.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: "OPEN_MODAL" }));
	});

	it("clicks Download menu item to dispatch OPEN_MODAL", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "default",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		await userEvent.click(screen.getByText("Download"));
		expect(ctx.dispatch).toHaveBeenCalledWith(expect.objectContaining({ type: "OPEN_MODAL" }));
	});

	it("clicks Move to Trash menu item", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "default",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		await userEvent.click(screen.getByText("Move to Trash"));
		expect(ctx.deleteSelected).toHaveBeenCalled();
	});

	it("clicks Restore in trash mode", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "trash",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		await userEvent.click(screen.getByText("Restore"));
		expect(ctx.restoreSelected).toHaveBeenCalled();
	});

	it("clicks Delete Permanently in trash mode", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
			viewScope: "trash",
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		await userEvent.click(screen.getByText("Delete Permanently"));
		expect(ctx.deleteSelected).toHaveBeenCalled();
	});

	it("toggles menu closed when Action is clicked twice", async () => {
		const img = createTestImage();
		ctx = createMockGalleryContext({
			images: [img],
			selectedIds: new Set([img.id]),
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		render(<BulkActionBar />);
		await userEvent.click(screen.getByText("Action"));
		expect(screen.getByText("Edit Tags")).toBeInTheDocument();
		// Clicking Action twice should close the menu
		await userEvent.click(screen.getByText("Action"));
		expect(screen.queryByText("Edit Tags")).not.toBeInTheDocument();
	});
});
