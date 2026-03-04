import { beforeEach, describe, expect, it } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../test/factories/image";
import type { Favorite } from "../../types";
import { initialState } from "../galleryReducer";
import { imagesReducer } from "./imagesReducer";

describe("imagesReducer", () => {
	beforeEach(() => {
		resetImageIdCounter();
	});

	it("SET_IMAGES replaces images and updates pagination", () => {
		const images = [createTestImage(), createTestImage()];
		const next = imagesReducer(initialState, {
			type: "SET_IMAGES",
			payload: { images, total: 10, offset: 0, limit: 100 },
		});
		expect(next.images).toHaveLength(2);
		expect(next.pagination.total).toBe(10);
		expect(next.pagination.hasMore).toBe(true);
		expect(next.isLoading).toBe(false);
	});

	it("SET_IMAGES deduplicates images by id", () => {
		const img = createTestImage({ id: 1 });
		const dup = createTestImage({ id: 1, filename: "dup.png" });
		const next = imagesReducer(initialState, {
			type: "SET_IMAGES",
			payload: { images: [img, dup], total: 2, offset: 0, limit: 100 },
		});
		expect(next.images).toHaveLength(1);
	});

	it("APPEND_IMAGES adds images to the list", () => {
		const img1 = createTestImage();
		const state = {
			...initialState,
			images: [img1],
			pagination: { ...initialState.pagination, total: 5 },
		};
		const img2 = createTestImage();
		const next = imagesReducer(state, {
			type: "APPEND_IMAGES",
			payload: { images: [img2], total: 5, offset: 1, limit: 100 },
		});
		expect(next.images).toHaveLength(2);
		expect(next.pagination.hasMore).toBe(true);
	});

	it("ADD_IMAGES merges new images and sorts by created_at desc", () => {
		const old = createTestImage({ created_at: 1000 });
		const state = {
			...initialState,
			images: [old],
			pagination: { ...initialState.pagination, total: 1 },
		};
		const recent = createTestImage({ created_at: 2000 });
		const next = imagesReducer(state, {
			type: "ADD_IMAGES",
			payload: [recent],
		});
		expect(next.images).toHaveLength(2);
		expect(next.images[0]?.created_at).toBe(2000);
	});

	it("REMOVE_IMAGES removes specified images", () => {
		const img1 = createTestImage({ id: 1 });
		const img2 = createTestImage({ id: 2 });
		const state = {
			...initialState,
			images: [img1, img2],
			pagination: { ...initialState.pagination, total: 2 },
		};
		const next = imagesReducer(state, {
			type: "REMOVE_IMAGES",
			payload: [1],
		});
		expect(next.images).toHaveLength(1);
		expect(next.images[0]?.id).toBe(2);
		expect(next.pagination.total).toBe(1);
	});

	it("ADD_IMAGES deduplicates images by id and increments pagination.total properly", () => {
		const old = createTestImage({ id: 1, created_at: 1000 });
		const state = {
			...initialState,
			images: [old],
			pagination: { ...initialState.pagination, total: 1 },
		};
		const dup = createTestImage({ id: 1, created_at: 2000 });
		const recent = createTestImage({ id: 2, created_at: 2000 });
		const next = imagesReducer(state, {
			type: "ADD_IMAGES",
			payload: [dup, recent],
		});
		expect(next.images).toHaveLength(2);
		expect(next.pagination.total).toBe(2);
	});

	it("REMOVE_IMAGES deduplicates ids and decrements pagination.total properly", () => {
		const img1 = createTestImage({ id: 1 });
		const img2 = createTestImage({ id: 2 });
		const state = {
			...initialState,
			images: [img1, img2],
			pagination: { ...initialState.pagination, total: 2 },
		};
		const next = imagesReducer(state, {
			type: "REMOVE_IMAGES",
			payload: [1, 1], // Duplicate ID
		});
		expect(next.images).toHaveLength(1);
		expect(next.images[0]?.id).toBe(2);
		expect(next.pagination.total).toBe(1);
	});

	it("UPDATE_IMAGE updates a specific image in the list", () => {
		const img = createTestImage({ id: 1, filename: "old.png" });
		const state = { ...initialState, images: [img], lineageImages: [img] };
		const updated = { ...img, filename: "new.png" };
		const next = imagesReducer(state, {
			type: "UPDATE_IMAGE",
			payload: updated,
		});
		expect(next.images[0]?.filename).toBe("new.png");
		expect(next.lineageImages[0]?.filename).toBe("new.png");
	});

	it("SET_LINEAGE sets lineage images in reverse order", () => {
		const img1 = createTestImage({ id: 1 });
		const img2 = createTestImage({ id: 2 });
		const next = imagesReducer(initialState, {
			type: "SET_LINEAGE",
			payload: [img1, img2],
		});
		expect(next.lineageImages[0]?.id).toBe(2);
		expect(next.lineageImages[1]?.id).toBe(1);
	});

	it("SET_LOADING updates isLoading", () => {
		const next = imagesReducer(initialState, {
			type: "SET_LOADING",
			payload: true,
		});
		expect(next.isLoading).toBe(true);
	});

	it("SET_ERROR sets error and clears loading", () => {
		const state = { ...initialState, isLoading: true };
		const next = imagesReducer(state, {
			type: "SET_ERROR",
			payload: "Network error",
		});
		expect(next.error).toBe("Network error");
		expect(next.isLoading).toBe(false);
	});

	it("SET_FAVORITES sets favorites list", () => {
		const favs: Favorite[] = [
			{ id: 1, name: "fav1", query: "tag:best", created_at: 1000 },
			{ id: 2, name: "fav2", query: "tag:keep", created_at: 2000 },
		];
		const next = imagesReducer(initialState, {
			type: "SET_FAVORITES",
			payload: favs,
		});
		expect(next.favorites).toEqual(favs);
	});

	it("unknown action returns state unchanged", () => {
		const next = imagesReducer(initialState, { type: "UNKNOWN" } as never);
		expect(next).toBe(initialState);
	});
});
