import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import * as imagesApi from "../../images/api/imagesApi";
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
		// After Loading... disappears, verify that specific tag suggestions are shown
		await waitFor(() => {
			expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
		});
		// tag1 registered in the mock should appear in the suggestion list
		expect(screen.getByText("tag1")).toBeInTheDocument();
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

		// After removal: verify the tag1 badge disappears from the selected-tags area
		await waitFor(() => {
			// Ensure no .meld-tag-edit-badge element contains the text "tag1"
			const badges = document.querySelectorAll(".meld-tag-edit-badge");
			const tag1Badge = Array.from(badges).find((b) => b.textContent?.includes("tag1"));
			expect(tag1Badge).toBeUndefined();
		});
	});

	it("closes modal on overlay mousedown + mouseup outside", async () => {
		const onClose = vi.fn();
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={onClose} />);
		const overlay = document.querySelector(".meld-modal-overlay");
		expect(overlay).not.toBeNull();
		fireEvent.mouseDown(overlay!, { target: overlay });
		fireEvent.mouseUp(overlay!, { target: overlay });
		expect(onClose).toHaveBeenCalled();
	});

	it("saves tags via Save button (single image)", async () => {
		const onCloseMock = vi.fn();
		const updateSpy = vi.spyOn(imagesApi, "updateImageTags");
		render(<TagEditModal imageIds={[1]} initialTags={["tag1"]} onClose={onCloseMock} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		const saveBtn = screen.getByText("Save Changes");
		await act(async () => {
			fireEvent.click(saveBtn);
		});

		// Verify updateImageTags is called with imageId=1 and selected tags, and onClose is called
		await waitFor(() => {
			expect(updateSpy).toHaveBeenCalledWith(1, ["tag1"]);
			expect(onCloseMock).toHaveBeenCalled();
		});
		updateSpy.mockRestore();
	});

	it("saves tags via Save button (bulk images)", async () => {
		const onCloseMock = vi.fn();
		const bulkSpy = vi.spyOn(imagesApi, "bulkUpdateImageTags");
		render(<TagEditModal imageIds={[1, 2]} initialTags={["tag1"]} onClose={onCloseMock} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		const saveBtn = screen.getByText("Save Changes");
		await act(async () => {
			fireEvent.click(saveBtn);
		});

		// Verify bulkUpdateImageTags is called with imageIds=[1,2] and onClose is called
		await waitFor(() => {
			expect(bulkSpy).toHaveBeenCalledWith([1, 2], [], []);
			expect(onCloseMock).toHaveBeenCalled();
		});
		bulkSpy.mockRestore();
	});

	it("adds a tag by clicking suggestion button", async () => {
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={vi.fn()} />);
		await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());

		// Click the tag2 suggestion button
		const suggBtn = screen.getByText("tag2");
		await act(async () => {
			fireEvent.click(suggBtn);
		});

		// Verify tag2 is shown as a badge (.meld-tag-edit-badge) in the selected-tags area
		// Use badge elements instead of plain getByText to confirm selection state
		await waitFor(() => {
			const badges = document.querySelectorAll(".meld-tag-edit-badge");
			const tag2Badge = Array.from(badges).find((b) => b.textContent?.includes("tag2"));
			expect(tag2Badge).toBeDefined();
		});
	});

	it("closes modal when Cancel is clicked", async () => {
		const onClose = vi.fn();
		render(<TagEditModal imageIds={[1]} initialTags={[]} onClose={onClose} />);
		const cancelBtn = screen.getByText("Cancel");
		fireEvent.click(cancelBtn);
		expect(onClose).toHaveBeenCalled();
	});
});
