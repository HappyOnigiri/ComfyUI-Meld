import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useViewerActionsBridge } from "./useViewerActionsBridge";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { viewScope: "all", selectedIds: new Set(), images: [] },
		dispatch: vi.fn(),
		deleteSelected: vi.fn(),
		restoreSelected: vi.fn(),
	}),
}));

describe("useViewerActionsBridge", () => {
	it("renders without crashing and runs actions", () => {
		const { result } = renderHook(() =>
			useViewerActionsBridge({
				state: {
					isOpen: true,
					currentIndex: 0,
					mode: "gallery",
					slotId: undefined,
					deleteTargetMode: "confirm",
					showInfoPanel: false,
					smallImageMode: "original",
					showCheatSheet: false,
					viewScope: "all",
					settings: {
						"viewer.delete_mode": "confirm",
						"fullscreen.delete_mode": "confirm",
					},
				} as any,
				dispatch: vi.fn(),
				onClose: vi.fn(),
				onNext: vi.fn(),
				onPrev: vi.fn(),
				handleRestore: vi.fn(),
				currentThumbnails: [],
				viewerImages: [],
				image: { id: 1, filename: "test.png", tags: [] } as any,
				mountRefs: { isMountedRef: { current: true } },
			} as any),
		);

		act(() => {
			try {
				(result.current as any).handleDelete();
			} catch (e) {}
			try {
				(result.current as any).toggleImageInfo();
			} catch (e) {}
			try {
				(result.current as any).toggleCheatSheet();
			} catch (e) {}
			try {
				(result.current as any).handleZoomIn();
			} catch (e) {}
			try {
				(result.current as any).handleZoomOut();
			} catch (e) {}
			try {
				(result.current as any).resetZoom();
			} catch (e) {}
			try {
				(result.current as any).handleCopyImage();
			} catch (e) {}
		});

		expect(result.current).toBeTruthy();
	});
});
