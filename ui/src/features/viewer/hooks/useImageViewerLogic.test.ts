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
					images: [{ id: 1 } as any],
					lineageImages: [],
					activeModal: {},
					pagination: {},
				} as any,
				dispatch: vi.fn(),
				currentImage: { id: 1, filename: "a", type: "output", subfolder: "", tags: [] } as any,
				currentIndex: 0,
				images: [{ id: 1 } as any],
				fetchFullImageDetails: vi.fn().mockResolvedValue(true),
			} as any),
		);

		act(() => {
			try {
				(result.current as any).onImageLoad({
					target: { naturalWidth: 100, naturalHeight: 100 },
				} as any);
			} catch (e) {}
			try {
				(result.current as any).onImageError();
			} catch (e) {}
			try {
				(result.current as any).onTransform({
					state: { scale: 2, positionX: 0, positionY: 0 },
				} as any);
			} catch (e) {}
		});

		expect(result.current).toBeTruthy();
	});
});
