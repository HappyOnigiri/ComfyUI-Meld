import { render, screen, waitFor } from "@testing-library/react";
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

import { logger } from "../../../logger";
import * as tagsApi from "../api/tagsApi";
import { TagManagerView } from "./TagManagerView";

describe("TagManagerView", () => {
	const mockOnClose = vi.fn();
	const mockOnSearch = vi.fn();

	beforeEach(() => {
		vi.clearAllMocks();
		vi.mocked(tagsApi.fetchTags).mockResolvedValue([
			{ id: 1, name: "landscape" },
			{ id: 2, name: "portrait" },
		]);
	});

	it("renders header and close button", async () => {
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		expect(screen.getByText("Tag Manager")).toBeInTheDocument();
		expect(screen.getByTitle("Close and return to gallery")).toBeInTheDocument();
	});

	it("shows loading state initially", () => {
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		expect(screen.getByText("Loading tags...")).toBeInTheDocument();
	});

	it("displays tags after loading", async () => {
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		await waitFor(() => {
			expect(screen.getByText("landscape")).toBeInTheDocument();
		});
		expect(screen.getByText("portrait")).toBeInTheDocument();
	});

	it("renders add tag form", async () => {
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		expect(screen.getByPlaceholderText("Add new tag...")).toBeInTheDocument();
		expect(screen.getByText("Add")).toBeInTheDocument();
	});

	it("renders filter input", async () => {
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		expect(screen.getByPlaceholderText("Filter tags...")).toBeInTheDocument();
	});

	it("shows empty message when no tags match filter", async () => {
		vi.mocked(tagsApi.fetchTags).mockResolvedValue([]);
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);
		await waitFor(() => {
			expect(screen.getByText("No tags found.")).toBeInTheDocument();
		});
	});

	it("shows empty message and logs error when fetch fails", async () => {
		const error = new Error("fetch failed");
		vi.mocked(tagsApi.fetchTags).mockRejectedValueOnce(error);
		render(<TagManagerView onClose={mockOnClose} onSearch={mockOnSearch} />);

		await waitFor(() => {
			expect(screen.getByText("No tags found.")).toBeInTheDocument();
		});
		expect(logger.error).toHaveBeenCalledWith("Failed to fetch tags:", error);
	});
});
