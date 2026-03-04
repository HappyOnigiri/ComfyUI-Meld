import { act, type RenderResult, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock tagsApi before importing the component
vi.mock("../api/tagsApi", () => ({
	fetchTags: vi.fn(),
	createTag: vi.fn(),
	deleteTag: vi.fn(),
	renameTag: vi.fn(),
}));

// Mock logger
vi.mock("../../../logger", () => ({
	logger: { log: vi.fn(), error: vi.fn(), warn: vi.fn() },
}));

import { RESERVED_TAG_KEYWORD } from "../../../constants";
import { logger } from "../../../logger";
import * as tagsApi from "../api/tagsApi";
import { TagManagerView } from "./TagManagerView";

describe("TagManagerView", () => {
	const mockOnClose = vi.fn();
	const mockOnSearch = vi.fn();
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(() => {
		user = userEvent.setup();
		vi.clearAllMocks();
		vi.mocked(tagsApi.fetchTags).mockResolvedValue([
			{ id: 1, name: "landscape" },
			{ id: 2, name: "portrait" },
		]);
		// Mock window.confirm and alert
		vi.spyOn(window, "confirm").mockImplementation(() => true);
		vi.spyOn(window, "alert").mockImplementation(() => {});
	});

	const renderComponent = async () => {
		let view!: RenderResult;
		await act(async () => {
			view = render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		});
		return view;
	};

	it("renders header and close button", async () => {
		await renderComponent();
		expect(screen.getByText("Tag Manager")).toBeInTheDocument();
		expect(screen.getByTitle("Close and return to gallery")).toBeInTheDocument();
	});

	it("calls onClose when close button is clicked", async () => {
		await renderComponent();
		await user.click(screen.getByTitle("Close and return to gallery"));
		expect(mockOnClose).toHaveBeenCalled();
	});

	it("shows loading state initially", () => {
		// Do not wait for load
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		expect(screen.getByText("Loading tags...")).toBeInTheDocument();
	});

	it("displays tags after loading", async () => {
		await renderComponent();
		expect(screen.getByText("landscape")).toBeInTheDocument();
		expect(screen.getByText("portrait")).toBeInTheDocument();
	});

	it("shows empty message when no tags match filter", async () => {
		vi.mocked(tagsApi.fetchTags).mockResolvedValue([]);
		await renderComponent();
		expect(screen.getByText("No tags found.")).toBeInTheDocument();
	});

	it("shows empty message and logs error when fetch fails", async () => {
		const error = new Error("fetch failed");
		vi.mocked(tagsApi.fetchTags).mockRejectedValueOnce(error);
		await renderComponent();

		expect(screen.getByText("No tags found.")).toBeInTheDocument();
		expect(logger.error).toHaveBeenCalledWith("Failed to fetch tags:", error);
	});

	describe("Adding Tags", () => {
		it("adds a new tag successfully", async () => {
			await renderComponent();
			const input = screen.getByPlaceholderText("Add new tag...");
			const button = screen.getByText("Add");

			await act(async () => {
				await user.type(input, "new-tag");
			});
			await act(async () => {
				await user.click(button);
			});

			expect(tagsApi.createTag).toHaveBeenCalledWith("new-tag");
			expect(tagsApi.fetchTags).toHaveBeenCalledTimes(2); // Initial load + after add
		});

		it("prevents adding an empty tag", async () => {
			await renderComponent();
			const button = screen.getByText("Add");

			expect(button).toBeDisabled();
			await act(async () => {
				await user.click(button); // Should not submit
			});
			expect(tagsApi.createTag).not.toHaveBeenCalled();
		});

		it("prevents adding a reserved tag keyword", async () => {
			await renderComponent();
			const input = screen.getByPlaceholderText("Add new tag...");
			const button = screen.getByText("Add");

			await act(async () => {
				await user.type(input, RESERVED_TAG_KEYWORD);
				await user.click(button);
			});

			expect(window.alert).toHaveBeenCalledWith(expect.stringContaining("is reserved for search"));
			expect(tagsApi.createTag).not.toHaveBeenCalled();
		});

		it("prevents adding a duplicate tag", async () => {
			await renderComponent();
			const input = screen.getByPlaceholderText("Add new tag...");
			const button = screen.getByText("Add");

			await act(async () => {
				await user.type(input, "landscape"); // Already exists
				await user.click(button);
			});

			expect(window.alert).toHaveBeenCalledWith('Tag "landscape" already exists.');
			expect(tagsApi.createTag).not.toHaveBeenCalled();
		});

		it("logs error if create tag fails", async () => {
			const error = new Error("create failed");
			vi.mocked(tagsApi.createTag).mockRejectedValueOnce(error);

			await renderComponent();
			const input = screen.getByPlaceholderText("Add new tag...");
			const button = screen.getByText("Add");

			await act(async () => {
				await user.type(input, "new-fail-tag");
				await user.click(button);
			});

			expect(logger.error).toHaveBeenCalledWith("Failed to add tag:", error);
		});
	});

	describe("Deleting Tags", () => {
		it("deletes a tag when confirmed", async () => {
			await renderComponent();
			const deleteButtons = screen.getAllByTitle("Delete tag");

			await act(async () => {
				await user.click(deleteButtons[0]!);
			});

			expect(window.confirm).toHaveBeenCalled();
			expect(tagsApi.deleteTag).toHaveBeenCalledWith(1);
			expect(tagsApi.fetchTags).toHaveBeenCalledTimes(2);
		});

		it("does not delete tag when cancelled", async () => {
			vi.spyOn(window, "confirm").mockImplementationOnce(() => false);
			await renderComponent();
			const deleteButtons = screen.getAllByTitle("Delete tag");

			await act(async () => {
				await user.click(deleteButtons[0]!);
			});

			expect(tagsApi.deleteTag).not.toHaveBeenCalled();
		});

		it("logs error if delete fails", async () => {
			const error = new Error("delete failed");
			vi.mocked(tagsApi.deleteTag).mockRejectedValueOnce(error);

			await renderComponent();
			const deleteButtons = screen.getAllByTitle("Delete tag");

			await act(async () => {
				await user.click(deleteButtons[0]!);
			});

			expect(logger.error).toHaveBeenCalledWith("Failed to delete tag:", error);
		});
	});

	describe("Renaming Tags", () => {
		it("starts and cancels rename", async () => {
			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			// Start rename
			await act(async () => {
				await user.click(renameButtons[0]!);
			});

			const input = screen.getByDisplayValue("landscape");
			expect(input).toBeInTheDocument();
			expect(input).toHaveFocus();

			// Cancel rename via button
			const cancelBtn = screen.getByTitle("Cancel");
			await act(async () => {
				await user.click(cancelBtn);
			});
			expect(screen.queryByDisplayValue("landscape")).not.toBeInTheDocument();
			expect(screen.getByText("landscape")).toBeInTheDocument();
		});

		it("cancels rename via Escape key", async () => {
			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			await act(async () => {
				await user.click(renameButtons[0]!);
			});

			// Cancel via Escape key
			const input = screen.getByDisplayValue("landscape");
			await act(async () => {
				await user.type(input, "{Escape}");
			});
			expect(screen.queryByDisplayValue("landscape")).not.toBeInTheDocument();
			expect(screen.getByText("landscape")).toBeInTheDocument();
		});

		it("renames a tag successfully", async () => {
			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			await act(async () => {
				await user.click(renameButtons[0]!);
			});

			const input = screen.getByDisplayValue("landscape");
			await act(async () => {
				await user.clear(input);
				await user.type(input, "new-landscape");
			});

			const saveBtn = screen.getByTitle("Save");
			await act(async () => {
				await user.click(saveBtn);
			});

			expect(tagsApi.renameTag).toHaveBeenCalledWith(1, "new-landscape");
			expect(tagsApi.fetchTags).toHaveBeenCalledTimes(2);
		});

		it("does nothing if renamed to the same name", async () => {
			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			await act(async () => {
				await user.click(renameButtons[0]!);
			});

			const saveBtn = screen.getByTitle("Save");
			await act(async () => {
				await user.click(saveBtn);
			});

			expect(tagsApi.renameTag).not.toHaveBeenCalled();
		});

		it("prevents renaming to a reserved keyword", async () => {
			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			await act(async () => {
				await user.click(renameButtons[0]!);
			});

			const input = screen.getByDisplayValue("landscape");
			await act(async () => {
				await user.clear(input);
				await user.type(input, RESERVED_TAG_KEYWORD);
			});

			const saveBtn = screen.getByTitle("Save");
			await act(async () => {
				await user.click(saveBtn);
			});

			expect(window.alert).toHaveBeenCalledWith(expect.stringContaining("is reserved for search"));
			expect(tagsApi.renameTag).not.toHaveBeenCalled();
		});

		it("prevents renaming to a duplicate tag name", async () => {
			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			await act(async () => {
				await user.click(renameButtons[0]!); // landscape
			});

			const input = screen.getByDisplayValue("landscape");
			await act(async () => {
				await user.clear(input);
				await user.type(input, "portrait"); // duplicate
			});

			const saveBtn = screen.getByTitle("Save");
			await act(async () => {
				await user.click(saveBtn);
			});

			expect(window.alert).toHaveBeenCalledWith('Tag "portrait" already exists.');
			expect(tagsApi.renameTag).not.toHaveBeenCalled();
		});

		it("logs error and alerts if rename fails", async () => {
			const error = new Error("rename failed");
			vi.mocked(tagsApi.renameTag).mockRejectedValueOnce(error);

			await renderComponent();
			const renameButtons = screen.getAllByTitle("Rename tag");

			await act(async () => {
				await user.click(renameButtons[0]!);
			});

			const input = screen.getByDisplayValue("landscape");
			await act(async () => {
				await user.clear(input);
				await user.type(input, "fail-scape");
			});

			const saveBtn = screen.getByTitle("Save");
			await act(async () => {
				await user.click(saveBtn);
			});

			expect(logger.error).toHaveBeenCalledWith("Failed to rename tag:", error);
			expect(window.alert).toHaveBeenCalledWith("rename failed");
		});
	});

	describe("Searching", () => {
		it("calls onSearch when search button is clicked", async () => {
			await renderComponent();
			const searchButtons = screen.getAllByTitle("Search by this tag");

			await act(async () => {
				await user.click(searchButtons[0]!);
			});

			expect(mockOnSearch).toHaveBeenCalledWith("tag:landscape");
		});

		it("filters tags by search query", async () => {
			await renderComponent();
			const searchInput = screen.getByPlaceholderText("Filter tags...");

			await act(async () => {
				await user.type(searchInput, "land");
			});

			expect(screen.getByText("landscape")).toBeInTheDocument();
			expect(screen.queryByText("portrait")).not.toBeInTheDocument();
		});
	});
});
