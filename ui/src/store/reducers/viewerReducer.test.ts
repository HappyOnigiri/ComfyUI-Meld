import { beforeEach, describe, expect, it } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../test/factories/image";
import { initialState } from "../galleryReducer";
import { viewerReducer } from "./viewerReducer";

describe("viewerReducer", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("OPEN_VIEWER with number payload sets viewerImageId in gallery mode", () => {
		const next = viewerReducer(initialState, {
			type: "OPEN_VIEWER",
			payload: 42,
		});
		expect(next.viewerImageId).toBe(42);
		expect(next.viewerMode).toBe("gallery");
		expect(next.viewerLightTableSlotId).toBeNull();
	});

	it("OPEN_VIEWER with object payload sets mode and id", () => {
		const next = viewerReducer(initialState, {
			type: "OPEN_VIEWER",
			payload: { id: 7, mode: "lineage" },
		});
		expect(next.viewerImageId).toBe(7);
		expect(next.viewerMode).toBe("lineage");
	});

	it("OPEN_VIEWER with lighttable mode sets slotId", () => {
		const next = viewerReducer(initialState, {
			type: "OPEN_VIEWER",
			payload: { id: 1, mode: "lighttable", slotId: "keep" },
		});
		expect(next.viewerLightTableSlotId).toBe("keep");
	});

	it("CLOSE_VIEWER resets viewer state", () => {
		const state = {
			...initialState,
			viewerImageId: 1,
			viewerMode: "gallery" as const,
			lineageImages: [createTestImage()],
		};
		const next = viewerReducer(state, { type: "CLOSE_VIEWER" });
		expect(next.viewerImageId).toBeNull();
		expect(next.viewerLightTableSlotId).toBeNull();
		expect(next.lineageImages).toEqual([]);
	});

	it("NEXT_IMAGE advances to next image", () => {
		const images = [
			createTestImage({ id: 1 }),
			createTestImage({ id: 2 }),
			createTestImage({ id: 3 }),
		];
		const state = {
			...initialState,
			images,
			viewerImageId: 1,
			viewerMode: "gallery" as const,
		};
		const next = viewerReducer(state, {
			type: "NEXT_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next.viewerImageId).toBe(2);
	});

	it("PREVIOUS_IMAGE moves to previous image", () => {
		const images = [
			createTestImage({ id: 1 }),
			createTestImage({ id: 2 }),
			createTestImage({ id: 3 }),
		];
		const state = {
			...initialState,
			images,
			viewerImageId: 2,
			viewerMode: "gallery" as const,
		};
		const next = viewerReducer(state, {
			type: "PREVIOUS_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next.viewerImageId).toBe(1);
	});

	it("NEXT_IMAGE at end with loop wraps to first", () => {
		const images = [createTestImage({ id: 1 }), createTestImage({ id: 2 })];
		const state = {
			...initialState,
			images,
			viewerImageId: 2,
			viewerMode: "gallery" as const,
			settings: { ...initialState.settings, "viewer.loop": true },
			pagination: { ...initialState.pagination, hasMore: false },
		};
		const next = viewerReducer(state, {
			type: "NEXT_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next.viewerImageId).toBe(1);
	});

	it("NEXT_IMAGE at end without loop stays", () => {
		const images = [createTestImage({ id: 1 }), createTestImage({ id: 2 })];
		const state = {
			...initialState,
			images,
			viewerImageId: 2,
			viewerMode: "gallery" as const,
			settings: { ...initialState.settings, "viewer.loop": false },
			pagination: { ...initialState.pagination, hasMore: false },
		};
		const next = viewerReducer(state, {
			type: "NEXT_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next.viewerImageId).toBe(2);
	});

	it("NEXT_IMAGE with null viewerImageId returns state unchanged", () => {
		const next = viewerReducer(initialState, {
			type: "NEXT_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next).toBe(initialState);
	});

	it("SET_IMAGES preserves viewerImageId when image still exists", () => {
		const img = createTestImage({ id: 5 });
		const state = {
			...initialState,
			images: [img],
			viewerImageId: 5,
			viewerMode: "gallery" as const,
		};
		const next = viewerReducer(state, {
			type: "SET_IMAGES",
			payload: { images: [img], total: 1, offset: 0, limit: 100 },
		});
		expect(next.viewerImageId).toBe(5);
	});

	it("NEXT_IMAGE at end in gallery mode returns unchanged state when hasMore is true", () => {
		const images = [createTestImage({ id: 1 }), createTestImage({ id: 2 })];
		const state = {
			...initialState,
			images,
			viewerImageId: 2,
			viewerMode: "gallery" as const,
			pagination: { ...initialState.pagination, hasMore: true },
		};
		const next = viewerReducer(state, {
			type: "NEXT_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next).toBe(state);
	});

	it("PREVIOUS_IMAGE at start in gallery mode returns unchanged state when hasMore is true", () => {
		const images = [createTestImage({ id: 1 }), createTestImage({ id: 2 })];
		const state = {
			...initialState,
			images,
			viewerImageId: 1,
			viewerMode: "gallery" as const,
			pagination: { ...initialState.pagination, hasMore: true },
		};
		const next = viewerReducer(state, {
			type: "PREVIOUS_IMAGE",
			payload: { isFullscreen: false },
		});
		expect(next).toBe(state);
	});

	it("unknown action returns state unchanged", () => {
		const next = viewerReducer(initialState, { type: "UNKNOWN" } as never);
		expect(next).toBe(initialState);
	});
});
