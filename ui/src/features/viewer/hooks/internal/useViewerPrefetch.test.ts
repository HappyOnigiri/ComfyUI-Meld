import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useViewerPrefetch } from "./useViewerPrefetch";

describe("useViewerPrefetch", () => {
	it("renders without crashing", () => {
		renderHook(() =>
			useViewerPrefetch({
				viewerImageId: 1,
				currentThumbnails: [],
				currentIndex: 0,
				isFullscreen: false,
				settings: { "viewer.prefetch_next": true },
				hasMore: false,
				viewerMode: "gallery",
				isLoading: false,
				loadMoreImages: vi.fn(),
				fetchFullImageDetails: vi.fn(),
			} as any),
		);
		expect(true).toBe(true);
	});
});
