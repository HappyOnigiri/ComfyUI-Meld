import { act, renderHook } from "@testing-library/react";
import type React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

const mockDispatch = vi.fn();
const mockUpdateSetting = vi.fn();
let mockSettings: Record<string, unknown> = {};

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			searchQuery: "",
			settings: mockSettings,
		},
		dispatch: mockDispatch,
		updateSetting: mockUpdateSetting,
	}),
}));

vi.mock("../api/searchApi", () => ({
	fetchSearchKeywords: vi.fn().mockResolvedValue([{ type: "p", value: "test" }]),
	fetchSearchConfig: vi.fn().mockResolvedValue({
		all_prefixes: ["pos", "neg", "tag"],
		boolean_prefixes: [],
		date_prefixes: [],
		sort_prefix: "sort",
		no_quote_prefixes: ["sort"],
	}),
	fetchSearchSuggestions: vi.fn().mockResolvedValue([{ type: "quick", value: "suggestion" }]),
	fetchSuggestions: vi.fn().mockResolvedValue([{ type: "tag", value: "anime", count: 10 }]),
}));

import { useSearchLogic } from "./useSearchLogic";

describe("useSearchLogic", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		mockSettings = {
			"search.show_all_keywords": false,
			"search.quick_suggestions": false,
			"search.input_suggest": true,
		};
	});

	it("initializes with default values", () => {
		const { result } = renderHook(() => useSearchLogic());
		expect(result.current.inputValue).toBe("");
		expect(result.current.showSuggestions).toBe(false);
	});

	it("handles input change and search", () => {
		const { result } = renderHook(() => useSearchLogic());

		act(() => {
			result.current.handleInputChange("test query");
		});
		expect(result.current.inputValue).toBe("test query");

		act(() => {
			result.current.handleSearch("test query", true);
		});
		expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_SEARCH_QUERY", payload: "test query" });
	});

	it("handles clear search", () => {
		const { result } = renderHook(() => useSearchLogic());

		act(() => {
			result.current.handleInputChange("start");
			result.current.handleSearch("start");
		});

		act(() => {
			result.current.clearSearch();
		});
		expect(result.current.inputValue).toBe("");
		expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_SEARCH_QUERY", payload: "" });
	});

	it("handles various events to cover branches", () => {
		const { result } = renderHook(() => useSearchLogic());

		act(() => {
			result.current.handleInputFocus();
			result.current.handleInputBlur();
			result.current.toggleShowAllKeywords();
			result.current.applySearchSuggestion("tag", "anime", false);
			result.current.setShowSuggestions(true);
			result.current.setSelectedIndex(0);
		});

		expect(mockUpdateSetting).toHaveBeenCalled();
	});

	it("handles keyboard events", () => {
		const { result } = renderHook(() => useSearchLogic());

		const nativeEvent = { stopImmediatePropagation: vi.fn() };

		act(() => {
			const mockEvent = {
				key: "Enter",
				preventDefault: vi.fn(),
				stopPropagation: vi.fn(),
				nativeEvent,
			} as unknown as React.KeyboardEvent<HTMLInputElement>;
			result.current.handleKeyDown(mockEvent);
		});

		act(() => {
			const mockEventEscape = {
				key: "Escape",
				preventDefault: vi.fn(),
				stopPropagation: vi.fn(),
				nativeEvent,
			} as unknown as React.KeyboardEvent<HTMLInputElement>;
			result.current.handleKeyDown(mockEventEscape);
		});

		expect(result.current.showSuggestions).toBe(false);
	});
});
