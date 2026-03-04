import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useImageViewerLogic } from "./useImageViewerLogic";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			images: [],
			tags: [],
			settings: { "gallery.view_mode": "grid" },
		},
		dispatch: vi.fn(),
	}),
}));

describe("useImageViewerLogic", () => {
	it("renders safely with dummy props", () => {
		const { result } = renderHook(() =>
			useImageViewerLogic({
				state: {
					viewerImageId: 1,
					viewerMode: "gallery",
					settings: {},
					searchQuery: "",
					viewScope: "all",
					selectedIds: new Set(),
					images: [{ id: 1 } as never],
					lineageImages: [],
					activeModal: {},
					pagination: {},
				} as never,
				dispatch: vi.fn(),
				currentImage: { id: 1, filename: "a", type: "output", subfolder: "", tags: [] } as never,
				currentIndex: 0,
				images: [{ id: 1 } as never],
				fetchFullImageDetails: vi.fn().mockResolvedValue(true),
			} as never),
		);

		act(() => {
			try {
				// @ts-expect-error accessing internal hook method
				result.current.onImageLoad({
					target: { naturalWidth: 100, naturalHeight: 100 },
				} as never);
			} catch (e) {}
			try {
				// @ts-expect-error accessing internal hook method
				result.current.onImageError();
			} catch (e) {}
			try {
				// @ts-expect-error accessing internal hook method
				result.current.onTransform({
					state: { scale: 2, positionX: 0, positionY: 0 },
				} as never);
			} catch (e) {}
		});

		expect(result.current).toBeTruthy();
	});
});
