import { beforeEach, describe, expect, it } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../test/factories/image";
import { initialState } from "../galleryReducer";
import { selectionReducer } from "./selectionReducer";

describe("selectionReducer", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("TOGGLE_SELECT adds an unselected id", () => {
		const next = selectionReducer(initialState, {
			type: "TOGGLE_SELECT",
			payload: 1,
		});
		expect(next.selectedIds.has(1)).toBe(true);
		expect(next.lastSelectedId).toBe(1);
	});

	it("TOGGLE_SELECT removes an already selected id", () => {
		const state = {
			...initialState,
			selectedIds: new Set([1]),
			lastSelectedId: 1,
		};
		const next = selectionReducer(state, {
			type: "TOGGLE_SELECT",
			payload: 1,
		});
		expect(next.selectedIds.has(1)).toBe(false);
		expect(next.lastSelectedId).toBeNull();
	});

	it("SELECT_ALL selects all images", () => {
		const img1 = createTestImage({ id: 1 });
		const img2 = createTestImage({ id: 2 });
		const state = { ...initialState, images: [img1, img2] };
		const next = selectionReducer(state, { type: "SELECT_ALL" });
		expect(next.selectedIds.size).toBe(2);
		expect(next.selectedIds.has(1)).toBe(true);
		expect(next.selectedIds.has(2)).toBe(true);
	});

	it("CLEAR_SELECTION clears all selection", () => {
		const state = {
			...initialState,
			selectedIds: new Set([1, 2]),
			lastSelectedId: 2,
		};
		const next = selectionReducer(state, { type: "CLEAR_SELECTION" });
		expect(next.selectedIds.size).toBe(0);
		expect(next.lastSelectedId).toBeNull();
	});

	it("SELECT_RANGE selects range from lastSelectedId", () => {
		const images = [
			createTestImage({ id: 10 }),
			createTestImage({ id: 20 }),
			createTestImage({ id: 30 }),
		];
		const state = {
			...initialState,
			images,
			selectedIds: new Set([10]),
			lastSelectedId: 10,
		};
		const next = selectionReducer(state, {
			type: "SELECT_RANGE",
			payload: 30,
		});
		expect(next.selectedIds.has(10)).toBe(true);
		expect(next.selectedIds.has(20)).toBe(true);
		expect(next.selectedIds.has(30)).toBe(true);
	});

	it("SELECT_RANGE with no lastSelectedId adds single item", () => {
		const next = selectionReducer(initialState, {
			type: "SELECT_RANGE",
			payload: 5,
		});
		expect(next.selectedIds.has(5)).toBe(true);
		expect(next.lastSelectedId).toBe(5);
	});

	it("DESELECT_IMAGES removes specified ids", () => {
		const state = {
			...initialState,
			selectedIds: new Set([1, 2, 3]),
			lastSelectedId: 2,
		};
		const next = selectionReducer(state, {
			type: "DESELECT_IMAGES",
			payload: [2, 3],
		});
		expect(next.selectedIds.size).toBe(1);
		expect(next.selectedIds.has(1)).toBe(true);
		expect(next.lastSelectedId).toBeNull();
	});

	it("REMOVE_IMAGES also removes from selection", () => {
		const state = {
			...initialState,
			images: [],
			selectedIds: new Set([1, 2]),
			lastSelectedId: 1,
		};
		const next = selectionReducer(state, {
			type: "REMOVE_IMAGES",
			payload: [1],
		});
		expect(next.selectedIds.has(1)).toBe(false);
		expect(next.lastSelectedId).toBeNull();
	});

	it("unknown action returns state unchanged", () => {
		const next = selectionReducer(initialState, { type: "UNKNOWN" } as never);
		expect(next).toBe(initialState);
	});
});
