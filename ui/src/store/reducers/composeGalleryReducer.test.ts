import { beforeEach, describe, expect, it } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../test/factories/image";
import { initialState } from "../galleryReducer";
import { composeGalleryReducer } from "./index";

describe("composeGalleryReducer", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("REFRESH returns state unchanged", () => {
		const next = composeGalleryReducer(initialState, { type: "REFRESH" });
		expect(next).toBe(initialState);
	});

	it("SET_VIEW_SCOPE resets images, selection, viewer and pagination", () => {
		const img = createTestImage();
		const state = {
			...initialState,
			images: [img],
			selectedIds: new Set([1]),
			viewerImageId: 1,
			pagination: { ...initialState.pagination, offset: 50, total: 100, hasMore: true },
		};
		const next = composeGalleryReducer(state, {
			type: "SET_VIEW_SCOPE",
			payload: "trash",
		});
		expect(next.viewScope).toBe("trash");
		expect(next.images).toEqual([]);
		expect(next.selectedIds.size).toBe(0);
		expect(next.viewerImageId).toBeNull();
		expect(next.pagination.offset).toBe(0);
		expect(next.pagination.hasMore).toBe(false);
	});

	it("delegates SET_LOADING to sub-reducers", () => {
		const next = composeGalleryReducer(initialState, {
			type: "SET_LOADING",
			payload: true,
		});
		expect(next.isLoading).toBe(true);
	});

	it("delegates TOGGLE_SELECT to selectionReducer", () => {
		const next = composeGalleryReducer(initialState, {
			type: "TOGGLE_SELECT",
			payload: 5,
		});
		expect(next.selectedIds.has(5)).toBe(true);
	});

	it("delegates SET_SEARCH_QUERY to uiMetaReducer", () => {
		const next = composeGalleryReducer(initialState, {
			type: "SET_SEARCH_QUERY",
			payload: "test query",
		});
		expect(next.searchQuery).toBe("test query");
	});

	it("delegates OPEN_MODAL to modalReducer", () => {
		const next = composeGalleryReducer(initialState, {
			type: "OPEN_MODAL",
			payload: { type: "settings" },
		});
		expect(next.activeModal).toEqual({ type: "settings" });
	});
});
