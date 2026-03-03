import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../../test/helpers/renderWithGallery";
import { SearchBar } from "./SearchBar";

// useGallery をモック
vi.mock("../../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

// useSearchLogic のモック（戻り値の全プロパティを網羅）
const mockSearchLogic = {
	inputValue: "",
	setInputValue: vi.fn(),
	showSuggestions: false,
	setShowSuggestions: vi.fn(),
	suggestions: [] as { type: string; value: string; count: number }[],
	selectedIndex: -1,
	setSelectedIndex: vi.fn(),
	applySuggestion: vi.fn(),
	handleKeyDown: vi.fn(),
	handleSearch: vi.fn(),
	clearSearch: vi.fn(),
	inputRef: { current: null },
	searchSuggestions: [] as { type: string; value: string }[],
	allKeywords: [] as { type: string; value: string }[],
	showAllKeywords: false,
	toggleShowAllKeywords: vi.fn(),
	applySearchSuggestion: vi.fn(),
	isQueryChanged: false,
	handleInputChange: vi.fn(),
	handleInputFocus: vi.fn(),
	handleInputBlur: vi.fn(),
};
vi.mock("../hooks/useSearchLogic", () => ({
	useSearchLogic: vi.fn(() => mockSearchLogic),
}));

// useFavoritesLogic のモック
const mockFavoritesLogic = {
	favorites: [],
	editingFavorite: null,
	editName: "",
	setEditName: vi.fn(),
	handleSaveEdit: vi.fn(),
	handleCancelEdit: vi.fn(),
	handleDeleteFavorite: vi.fn(),
	handleStartEdit: vi.fn(),
	handleSelectFavorite: vi.fn(),
};
vi.mock("../hooks/useFavoritesLogic", () => ({
	useFavoritesLogic: vi.fn(() => mockFavoritesLogic),
}));

// サポートフックのモック
vi.mock("../../../hooks/useEscapeToClose", () => ({
	useEscapeToClose: vi.fn(),
}));
vi.mock("../../../hooks/useOnPointerDownOutside", () => ({
	useOnPointerDownOutside: vi.fn(),
}));

// SearchSuggestions のモック
vi.mock("./SearchSuggestions", () => ({
	SearchSuggestions: () => <div data-testid="search-suggestions" />,
}));

import { useGallery } from "../../../store/GalleryContext";
import { useSearchLogic } from "../hooks/useSearchLogic";

describe("SearchBar", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		ctx = createMockGalleryContext();
		vi.mocked(useGallery).mockReturnValue(ctx);
		vi.mocked(useSearchLogic).mockReturnValue(mockSearchLogic);
	});

	it("renders the search input field", () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText(/search/i);
		expect(input).toBeInTheDocument();
	});

	it("renders with empty input value", () => {
		vi.mocked(useSearchLogic).mockReturnValue({
			...mockSearchLogic,
			inputValue: "",
		});
		render(<SearchBar />);
		const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
		expect(input.value).toBe("");
	});

	it("renders with an existing search value", () => {
		vi.mocked(useSearchLogic).mockReturnValue({
			...mockSearchLogic,
			inputValue: "tag:nature",
			isQueryChanged: true,
		});
		render(<SearchBar />);
		const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
		expect(input.value).toBe("tag:nature");
	});

	it("shows clear button when search query is changed", () => {
		vi.mocked(useSearchLogic).mockReturnValue({
			...mockSearchLogic,
			isQueryChanged: true,
			inputValue: "test",
		});

		render(<SearchBar />);
		// クリアボタンが表示されていること
		const buttons = document.querySelectorAll("button");
		expect(buttons.length).toBeGreaterThan(0);
	});
});
