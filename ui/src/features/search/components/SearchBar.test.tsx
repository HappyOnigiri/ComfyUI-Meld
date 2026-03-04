import { act, type RenderResult, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock resize observer and matchMedia for any UI components
beforeEach(() => {
	vi.stubGlobal(
		"ResizeObserver",
		class {
			observe() {}
			unobserve() {}
			disconnect() {}
		},
	);
	Object.defineProperty(window, "matchMedia", {
		writable: true,
		value: vi.fn().mockImplementation((query) => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: vi.fn(),
			removeListener: vi.fn(),
			addEventListener: vi.fn(),
			removeEventListener: vi.fn(),
			dispatchEvent: vi.fn(),
		})),
	});
});

// Mock APIs
vi.mock("../../../features/settings/api/settingsApi", () => ({
	fetchSettings: vi.fn().mockResolvedValue({}),
}));
vi.mock("../../../features/search/api/searchApi", () => ({
	fetchFavorites: vi.fn().mockResolvedValue([]),
	saveFavorite: vi.fn().mockResolvedValue(true),
	updateFavorite: vi.fn().mockResolvedValue(true),
	deleteFavorite: vi.fn().mockResolvedValue(true),
	fetchSearchConfig: vi.fn().mockResolvedValue({ all_prefixes: [] }),
	fetchSearchKeywords: vi.fn().mockResolvedValue([]),
	fetchSearchSuggestions: vi.fn().mockResolvedValue([]),
}));
vi.mock("../../../features/images/api/imagesApi", () => ({
	fetchImages: vi.fn().mockResolvedValue({ images: [], total: 0, offset: 0 }),
	getAllKeywords: vi.fn().mockResolvedValue(["test-keyword"]),
}));

import { GalleryProvider } from "../../../store/GalleryContext";
import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
	let user: ReturnType<typeof userEvent.setup>;

	beforeEach(() => {
		user = userEvent.setup();
		vi.clearAllMocks();
	});

	const renderComponent = async () => {
		let view!: RenderResult;
		await act(async () => {
			view = render(
				<GalleryProvider>
					<SearchBar />
				</GalleryProvider>,
			);
		});
		return view;
	};

	it("renders search input", async () => {
		await renderComponent();
		expect(
			screen.getByPlaceholderText(
				"Search anything: prompts, tags, models, dates, or free keywords...",
			),
		).toBeInTheDocument();
	});

	it("updates input value on typing", async () => {
		await renderComponent();
		const input = screen.getByPlaceholderText(
			"Search anything: prompts, tags, models, dates, or free keywords...",
		);

		await act(async () => {
			await user.type(input, "test query");
		});

		expect(input).toHaveValue("test query");
	});

	it("clears search input when clear button is clicked", async () => {
		await renderComponent();
		const input = screen.getByPlaceholderText(
			"Search anything: prompts, tags, models, dates, or free keywords...",
		);

		await act(async () => {
			await user.type(input, "testing");
		});
		expect(input).toHaveValue("testing");

		const clearButton = screen.getByRole("button", { name: /clear/i });

		await act(async () => {
			await user.click(clearButton);
		});
		expect(input).toHaveValue("");
	});

	it("submits search on Enter key", async () => {
		await renderComponent();
		const input = screen.getByPlaceholderText(
			"Search anything: prompts, tags, models, dates, or free keywords...",
		);

		await act(async () => {
			await user.type(input, "submission{Enter}");
		});

		// By pressing enter, search logic dispatches SET_SEARCH_QUERY.
		// Since we rendered with real GalleryProvider, we can verify if the star button appears
		// (star button appears when state.searchQuery is truthy)
		expect(screen.getByTitle("Add to Favorites")).toBeInTheDocument();
	});

	it("submits search when search button is clicked", async () => {
		await renderComponent();
		const input = screen.getByPlaceholderText(
			"Search anything: prompts, tags, models, dates, or free keywords...",
		);

		await act(async () => {
			await user.type(input, "click search");
		});

		const searchButton = screen.getByTitle("Search (Enter)");
		await act(async () => {
			await user.click(searchButton);
		});

		expect(screen.getByTitle("Add to Favorites")).toBeInTheDocument();
	});
});
