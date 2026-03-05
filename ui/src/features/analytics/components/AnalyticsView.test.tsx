import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../api/analyticsApi", () => ({
	fetchAnalyticsSummary: vi.fn(),
	fetchAnalyticsCategory: vi.fn(),
	refreshAnalytics: vi.fn(),
}));

const mockDispatch = vi.fn();
vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: mockDispatch,
	}),
}));

import * as analyticsApi from "../api/analyticsApi";
import { AnalyticsView } from "./AnalyticsView";

const mockSummary = {
	total_images: 42,
	positive_prompts: [{ name: "1girl", count: 10 }],
	negative_prompts: [],
	tags: [{ name: "landscape", count: 5 }],
	models: [{ name: "sd15", count: 20 }],
	by_date: [{ date: "2025-03-06", count: 3 }],
	by_resolution: [{ resolution: "512x512", count: 15 }],
};

describe("AnalyticsView", () => {
	const mockOnClose = vi.fn();
	const mockOnSearchAndNavigate = vi.fn();
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(() => {
		user = userEvent.setup();
		vi.clearAllMocks();
		vi.mocked(analyticsApi.fetchAnalyticsSummary).mockResolvedValue(mockSummary);
		vi.mocked(analyticsApi.fetchAnalyticsCategory).mockResolvedValue({
			data: [{ name: "1girl", count: 10 }],
			total: 1,
		});
		vi.mocked(analyticsApi.refreshAnalytics).mockResolvedValue(undefined);
	});

	it("renders header, close button, and refresh button", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getByText("Image Analytics")).toBeInTheDocument();
		});
		expect(screen.getByTitle("Close and return to gallery")).toBeInTheDocument();
		expect(screen.getByTitle("Refresh analytics")).toBeInTheDocument();
	});

	it("shows loading state initially", () => {
		render(<AnalyticsView onClose={mockOnClose} />);
		expect(screen.getByText("Loading analytics...")).toBeInTheDocument();
	});

	it("displays summary after loading", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getByText("Total Images")).toBeInTheDocument();
		});
		expect(screen.getByText("42")).toBeInTheDocument();
		expect(screen.getByText("1girl")).toBeInTheDocument();
		expect(screen.getByText("landscape")).toBeInTheDocument();
		expect(screen.getByText("sd15")).toBeInTheDocument();
	});

	it("shows error message when fetch fails", async () => {
		vi.mocked(analyticsApi.fetchAnalyticsSummary).mockRejectedValueOnce(new Error("Network error"));
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getByText("Failed to load analytics.")).toBeInTheDocument();
		});
	});

	it("calls onClose when close button is clicked", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getByTitle("Close and return to gallery")).toBeInTheDocument();
		});
		await user.click(screen.getByTitle("Close and return to gallery"));
		expect(mockOnClose).toHaveBeenCalled();
	});

	it("calls refreshAnalytics and dispatch on refresh button click", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getByTitle("Refresh analytics")).toBeInTheDocument();
		});
		await user.click(screen.getByTitle("Refresh analytics"));

		await waitFor(() => {
			expect(analyticsApi.refreshAnalytics).toHaveBeenCalled();
		});
		await waitFor(() => {
			expect(mockDispatch).toHaveBeenCalledWith({
				type: "SHOW_TOAST",
				payload: "Analytics refreshed",
			});
		});
	});

	it("expands category on See all click and shows full list", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getAllByRole("button", { name: /See all/ }).length).toBeGreaterThan(0);
		});

		const seeAllButtons = screen.getAllByRole("button", { name: /See all/ });
		await user.click(seeAllButtons[0]!);

		await waitFor(() => {
			expect(screen.getByText("Back")).toBeInTheDocument();
		});
		await waitFor(() => {
			expect(analyticsApi.fetchAnalyticsCategory).toHaveBeenCalled();
		});
		expect(screen.getByText("1. 1girl")).toBeInTheDocument();
	});

	it("calls onSearchAndNavigate with correct query when item is clicked (does not call onClose)", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} onSearchAndNavigate={mockOnSearchAndNavigate} />);
		});
		await waitFor(() => {
			expect(screen.getByText("1girl")).toBeInTheDocument();
		});

		await user.click(screen.getByText("1girl"));

		expect(mockOnSearchAndNavigate).toHaveBeenCalledWith("pos:1girl");
		expect(mockOnClose).not.toHaveBeenCalled();
	});

	it("calls onClose when Escape is pressed and no category expanded", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getByText("Image Analytics")).toBeInTheDocument();
		});

		window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

		expect(mockOnClose).toHaveBeenCalled();
	});

	it("collapses expanded category when Escape is pressed", async () => {
		await act(async () => {
			render(<AnalyticsView onClose={mockOnClose} />);
		});
		await waitFor(() => {
			expect(screen.getAllByRole("button", { name: /See all/ }).length).toBeGreaterThan(0);
		});

		const seeAllButtons = screen.getAllByRole("button", { name: /See all/ });
		await user.click(seeAllButtons[0]!);

		await waitFor(() => {
			expect(screen.getByText("Back")).toBeInTheDocument();
		});

		window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));

		await waitFor(() => {
			expect(screen.queryByText("Back")).not.toBeInTheDocument();
		});
		expect(mockOnClose).not.toHaveBeenCalled();
	});
});
