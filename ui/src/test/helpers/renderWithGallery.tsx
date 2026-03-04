/**
 * Test helper: provides mock GalleryContext values via vi.mock.
 *
 * Usage:
 *   import { createMockGalleryContext, type MockGalleryContext } from "../../test/helpers/renderWithGallery";
 *
 *   vi.mock("../../store/GalleryContext", () => ({
 *     useGallery: vi.fn(),
 *   }));
 *
 *   let ctx: MockGalleryContext;
 *   beforeEach(() => {
 *     ctx = createMockGalleryContext({ toastMessage: "hello" });
 *     vi.mocked(useGallery).mockReturnValue(ctx);
 *   });
 */

import type React from "react";
import { vi } from "vitest";
import { initialState } from "../../store/galleryReducer";
import type { GalleryAction, GalleryState, MeldImage } from "../../types";

export interface MockGalleryContext {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	refreshImages: ReturnType<typeof vi.fn>;
	loadMoreImages: ReturnType<typeof vi.fn>;
	refreshFavorites: ReturnType<typeof vi.fn>;
	deleteSelected: ReturnType<typeof vi.fn>;
	restoreSelected: ReturnType<typeof vi.fn>;
	updateSetting: ReturnType<typeof vi.fn>;
	fetchFullImageDetails: ReturnType<typeof vi.fn>;
}

/**
 * Build a mock gallery context with optional state overrides.
 */
export function createMockGalleryContext(
	overrides: Partial<GalleryState> = {},
): MockGalleryContext {
	return {
		state: { ...initialState, ...overrides },
		dispatch: vi.fn() as React.Dispatch<GalleryAction>,
		refreshImages: vi.fn().mockResolvedValue(undefined),
		loadMoreImages: vi.fn().mockResolvedValue(undefined),
		refreshFavorites: vi.fn().mockResolvedValue(undefined),
		deleteSelected: vi.fn().mockResolvedValue(undefined),
		restoreSelected: vi.fn().mockResolvedValue(undefined),
		updateSetting: vi.fn().mockResolvedValue(undefined),
		fetchFullImageDetails: vi.fn().mockResolvedValue({} as MeldImage),
	};
}
