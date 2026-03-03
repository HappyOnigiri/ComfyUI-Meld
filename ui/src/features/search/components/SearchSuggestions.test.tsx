import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SearchSuggestions } from "./SearchSuggestions";

// Mock FavoriteItem
vi.mock("./FavoriteItem", () => ({
	FavoriteItem: ({ fav }: { fav: { name: string } }) => (
		<div data-testid="favorite-item">{fav.name}</div>
	),
}));

// Mock constants
vi.mock("../../../constants", () => ({
	RESERVED_TAG_KEYWORD: "__none__",
}));

const defaultProps = {
	showSuggestions: false,
	suggestions: [] as { type: string; value: string; count: number }[],
	selectedIndex: -1,
	setSelectedIndex: vi.fn(),
	applySuggestion: vi.fn(),
	inputValue: "",
	searchQuery: "",
	searchSuggestions: [] as { type: string; value: string }[],
	allKeywords: [] as { type: string; value: string }[],
	showAllKeywords: false,
	toggleShowAllKeywords: vi.fn(),
	applySearchSuggestion: vi.fn(),
	favorites: [] as { id: number; name: string; query: string; created_at: number }[],
	onSelectFavorite: vi.fn(),
	onEditFavorite: vi.fn(),
	onDeleteFavorite: vi.fn(),
};

describe("SearchSuggestions", () => {
	it("renders a wrapper div even when nothing is shown", () => {
		const { container } = render(<SearchSuggestions {...defaultProps} />);
		// Component always renders a wrapper div
		expect(container.firstChild).toBeTruthy();
	});

	it("renders search suggestion items when showSuggestions is true and suggestions exist", () => {
		const suggestions = [
			{ type: "tag", value: "nature", count: 5 },
			{ type: "tag", value: "portrait", count: 3 },
		];
		render(
			<SearchSuggestions
				{...defaultProps}
				showSuggestions={true}
				suggestions={suggestions}
				inputValue="nat"
			/>,
		);
		// Suggestion items render with the value text
		expect(screen.getByText("nature")).toBeInTheDocument();
		expect(screen.getByText("portrait")).toBeInTheDocument();
	});

	it("does not render suggestion list when showSuggestions is false", () => {
		const suggestions = [{ type: "tag", value: "nature", count: 5 }];
		render(
			<SearchSuggestions {...defaultProps} showSuggestions={false} suggestions={suggestions} />,
		);
		const panel = document.querySelector(".meld-search-suggestions");
		expect(panel).not.toBeInTheDocument();
	});

	it("renders favorites section when favorites are provided and input is empty", () => {
		const favorites = [{ id: 1, name: "landscapes", query: "tag:landscape", created_at: 0 }];
		render(
			<SearchSuggestions {...defaultProps} favorites={favorites} inputValue="" searchQuery="" />,
		);
		expect(screen.getByText("Favorites")).toBeInTheDocument();
	});

	it("hides favorites when inputValue matches searchQuery", () => {
		const favorites = [{ id: 1, name: "landscapes", query: "tag:landscape", created_at: 0 }];
		render(
			<SearchSuggestions
				{...defaultProps}
				favorites={favorites}
				inputValue="tag:landscape"
				searchQuery="tag:landscape"
			/>,
		);
		expect(screen.queryByText("Favorites")).not.toBeInTheDocument();
	});

	it("renders quick suggestions when searchSuggestions are provided", () => {
		const searchSuggestions = [
			{ type: "tag", value: "nature" },
			{ type: "model", value: "sdxl" },
		];
		render(
			<SearchSuggestions
				{...defaultProps}
				searchSuggestions={searchSuggestions}
				inputValue=""
				searchQuery=""
			/>,
		);
		const quickPanel = document.querySelector(".meld-search-quick-suggestions");
		expect(quickPanel).toBeInTheDocument();
	});
});
