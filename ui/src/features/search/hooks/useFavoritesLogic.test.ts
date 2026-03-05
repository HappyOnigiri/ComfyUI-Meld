import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useGallery } from "../../../store/GalleryContext";
import * as searchApi from "../api/searchApi";
import { useFavoritesLogic } from "./useFavoritesLogic";

vi.mock("../../../store/GalleryContext");
vi.mock("../api/searchApi");
vi.mock("../../../logger");

describe("useFavoritesLogic", () => {
	beforeEach(() => {
		vi.clearAllMocks();
		global.window.confirm = vi.fn(() => true);
	});

	it("returns correct default values", () => {
		vi.mocked(useGallery).mockReturnValue({
			state: { favorites: [], searchQuery: "" },
			refreshFavorites: vi.fn(),
		} as any);

		const { result } = renderHook(() => useFavoritesLogic());

		expect(result.current.isSaving).toBe(false);
		expect(result.current.toastMessage).toBe(null);
		expect(result.current.editingFavorite).toBe(null);
	});

	it("handles deleting a favorite", async () => {
		const mockRefresh = vi.fn();
		vi.mocked(useGallery).mockReturnValue({
			state: { favorites: [], searchQuery: "" },
			refreshFavorites: mockRefresh,
		} as any);

		const { result } = renderHook(() => useFavoritesLogic());

		const mockEvent = { stopPropagation: vi.fn() } as any;

		await act(async () => {
			await result.current.handleDeleteFavorite(mockEvent, 1, "test");
		});

		expect(mockEvent.stopPropagation).toHaveBeenCalled();
		expect(searchApi.deleteFavorite).toHaveBeenCalledWith(1);
		expect(mockRefresh).toHaveBeenCalled();
	});

	it("handles editing and saving a favorite", async () => {
		const mockRefresh = vi.fn();
		vi.mocked(useGallery).mockReturnValue({
			state: { favorites: [], searchQuery: "" },
			refreshFavorites: mockRefresh,
		} as any);

		const { result } = renderHook(() => useFavoritesLogic());

		const mockEvent = { stopPropagation: vi.fn() } as any;
		const mockFav = { id: 1, name: "old name", query: "old query", created_at: "", updated_at: "" };

		act(() => {
			result.current.handleEditFavorite(mockEvent, mockFav);
		});

		expect(result.current.editingFavorite).toEqual(mockFav);
		expect(result.current.editFavoriteName).toBe("old name");

		act(() => {
			result.current.setEditFavoriteName("new name");
			result.current.setEditFavoriteQuery("new query");
		});

		await act(async () => {
			await result.current.handleSaveEditFavorite();
		});

		expect(searchApi.updateFavorite).toHaveBeenCalledWith(1, "new name", "new query");
		expect(mockRefresh).toHaveBeenCalled();
		expect(result.current.editingFavorite).toBe(null);
	});

	it("handles saving a new favorite", async () => {
		const mockRefresh = vi.fn();
		vi.mocked(useGallery).mockReturnValue({
			state: { favorites: [], searchQuery: "my test query" },
			refreshFavorites: mockRefresh,
		} as any);

		const { result } = renderHook(() => useFavoritesLogic());

		let success = false;
		await act(async () => {
			success = await result.current.handleSaveFavorite();
		});

		expect(success).toBe(true);
		expect(searchApi.saveFavorite).toHaveBeenCalledWith("my test query", "my test query");
		expect(mockRefresh).toHaveBeenCalled();
	});

	it("handles deleting a favorite when already favorited", async () => {
		const mockRefresh = vi.fn();
		vi.mocked(useGallery).mockReturnValue({
			state: {
				favorites: [{ id: 1, name: "fav", query: "my test query", created_at: "", updated_at: "" }],
				searchQuery: "my test query",
			},
			refreshFavorites: mockRefresh,
		} as any);

		const { result } = renderHook(() => useFavoritesLogic());

		let success = false;
		await act(async () => {
			success = await result.current.handleSaveFavorite();
		});

		expect(success).toBe(true);
		expect(searchApi.deleteFavorite).toHaveBeenCalledWith(1);
		expect(mockRefresh).toHaveBeenCalled();
	});
});
