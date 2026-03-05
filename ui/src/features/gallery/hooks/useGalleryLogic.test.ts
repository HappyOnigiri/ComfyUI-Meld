import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useGallery } from "../../../store/GalleryContext";
import { useLightTableStore } from "../../light-table/store";
import type { TrayState } from "../../light-table/types";
import { useGalleryLogic } from "./useGalleryLogic";

vi.mock("../../../store/GalleryContext");
vi.mock("../../light-table/store", () => ({
	useLightTableStore: vi.fn(),
}));

describe("useGalleryLogic", () => {
	beforeEach(() => {
		vi.mocked(useLightTableStore).mockImplementation(<T>(selector: (state: TrayState) => T): T => {
			return selector({ buckets: {} } as TrayState);
		});
	});

	it("returns correct default values and handles view mode changes", () => {
		const mockDispatch = vi.fn();
		const mockLoadMore = vi.fn();
		const mockState = {
			images: [],
			activeModal: { type: "none" },
			selectedIds: new Set(),
			pagination: { hasMore: true, limit: 100 },
			settings: {},
			searchQuery: "",
			viewScope: "default",
			viewerImageId: null,
		};

		vi.mocked(useGallery).mockReturnValue({
			state: mockState,
			dispatch: mockDispatch,
			refreshImages: vi.fn(),
			loadMoreImages: mockLoadMore,
			updateSetting: vi.fn(),
		} as unknown as ReturnType<typeof useGallery>);

		const { result } = renderHook(() => useGalleryLogic());

		expect(result.current.viewMode).toBe("gallery");
		expect(result.current.isSearchActive).toBe(false);

		act(() => {
			result.current.setViewMode("search");
			result.current.setLastSearchQuery("test");
		});

		expect(result.current.viewMode).toBe("search");
		expect(result.current.lastSearchQuery).toBe("test");
	});

	it("filters out hidden images (in light table buckets)", () => {
		vi.mocked(useLightTableStore).mockImplementation(<T>(selector: (state: TrayState) => T): T => {
			return selector({ buckets: { default: [1] } } as unknown as TrayState); // image id 1 is in bucket
		});

		const mockState = {
			images: [
				{ id: 1, has_children: false },
				{ id: 2, has_children: false },
			],
			activeModal: { type: "none" },
			selectedIds: new Set(),
			pagination: { hasMore: false, limit: 100 },
			settings: {},
			searchQuery: "",
			viewScope: "default",
			viewerImageId: null,
		};

		vi.mocked(useGallery).mockReturnValue({
			state: mockState,
			dispatch: vi.fn(),
			loadMoreImages: vi.fn(),
		} as unknown as ReturnType<typeof useGallery>);

		const { result } = renderHook(() => useGalleryLogic());

		expect(result.current.displayedImages).toHaveLength(1);
		expect(result.current.displayedImages[0]?.id).toBe(2);
	});

	it("auto-loads more images if all loaded images are hidden", () => {
		const mockLoadMore = vi.fn();
		vi.mocked(useLightTableStore).mockImplementation(<T>(selector: (state: TrayState) => T): T => {
			return selector({ buckets: { default: [1] } } as unknown as TrayState);
		});

		const mockState = {
			images: [{ id: 1, has_children: false }],
			activeModal: { type: "none" },
			selectedIds: new Set(),
			pagination: { hasMore: true, limit: 100 },
			settings: {},
			searchQuery: "",
			viewScope: "default",
			viewerImageId: null,
			isLoading: false,
		};

		vi.mocked(useGallery).mockReturnValue({
			state: mockState,
			dispatch: vi.fn(),
			loadMoreImages: mockLoadMore,
		} as unknown as ReturnType<typeof useGallery>);

		renderHook(() => useGalleryLogic());

		expect(mockLoadMore).toHaveBeenCalled();
	});
});
