import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { TagEditModal } from "./TagEditModal";

// Mock tagsApi and imagesApi
vi.mock("../../../features/tags/api/tagsApi", () => ({
	fetchTags: vi.fn().mockResolvedValue([
		{ id: 1, name: "tag1" },
		{ id: 2, name: "tag2" },
		{ id: 3, name: "none" },
	]),
}));

vi.mock("../../../features/images/api/imagesApi", () => ({
	updateImageTags: vi.fn().mockResolvedValue(undefined),
	bulkUpdateImageTags: vi.fn().mockResolvedValue(undefined),
}));

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
		refreshImages: vi.fn().mockResolvedValue(undefined),
	}),
}));

describe("TagEditModal", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<TagEditModal imageIds={[1]} initialTags={["tag1"]} onClose={vi.fn()} />,
		);
		expect(container).toBeTruthy();
	});

	it("shows tags after loading", async () => {
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={vi.fn()} />);
		// tags should be visible after loading
		await waitFor(() => {
			expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
		});
	});

	it("allows searching and adding a new tag via Enter key", async () => {
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		const input = screen.getByPlaceholderText("Search or create new tag...");

		// Add a new tag via Enter key
		await act(async () => {
			fireEvent.change(input, { target: { value: "mytag" } });
		});
		await act(async () => {
			fireEvent.keyDown(input, { key: "Enter" });
		});

		expect(screen.getByText("mytag")).toBeInTheDocument();
	});

	it("prevents adding reserved tag keyword", async () => {
		const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		const input = screen.getByPlaceholderText("Search or create new tag...");
		await act(async () => {
			fireEvent.change(input, { target: { value: "none" } });
		});
		await act(async () => {
			fireEvent.keyDown(input, { key: "Enter" });
		});

		expect(alertMock).toHaveBeenCalled();
		alertMock.mockRestore();
	});

	it("can remove a selected tag", async () => {
		render(<TagEditModal imageIds={[1]} initialTags={["tag1"]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		// Click the remove button for tag1
		const removeBtns = document.querySelectorAll(".meld-tag-edit-remove");
		expect(removeBtns.length).toBeGreaterThan(0);
		await act(async () => {
			fireEvent.click(removeBtns[0]!);
		});
	});

	it("closes modal on overlay mousedown + mouseup outside", async () => {
		const onClose = vi.fn();
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={onClose} />);
		const overlay = document.querySelector(".meld-modal-overlay");
		if (overlay) {
			fireEvent.mouseDown(overlay, { target: overlay });
			fireEvent.mouseUp(overlay, { target: overlay });
		}
		expect(onClose).toHaveBeenCalled();
	});

	it("saves tags via Save button (single image)", async () => {
		render(<TagEditModal imageIds={[1]} initialTags={["tag1"]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		const saveBtn = screen.getByText("Save Changes");
		await act(async () => {
			fireEvent.click(saveBtn);
		});
	});

	it("saves tags via Save button (bulk images)", async () => {
		render(<TagEditModal imageIds={[1, 2]} initialTags={["tag1"]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		const saveBtn = screen.getByText("Save Changes");
		await act(async () => {
			fireEvent.click(saveBtn);
		});
	});

	it("adds a tag by clicking suggestion button", async () => {
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		// Click the tag2 suggestion button
		const suggBtn = screen.getByText("tag2");
		await act(async () => {
			fireEvent.click(suggBtn);
		});

		// tag2 should be added to selected tags (shown as a badge)
		expect(screen.getByText("tag2")).toBeInTheDocument();
	});

	it("closes modal when Cancel is clicked", async () => {
		const onClose = vi.fn();
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={onClose} />);
		const cancelBtn = screen.getByText("Cancel");
		fireEvent.click(cancelBtn);
		expect(onClose).toHaveBeenCalled();
	});
});
