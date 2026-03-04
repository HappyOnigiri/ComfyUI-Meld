import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useViewerNavigation } from "./useViewerNavigation";

describe("useViewerNavigation", () => {
	it("renders and calls next/prev safely", () => {
		const mockDispatch = vi.fn();
		const mockSetIsJumping = vi.fn();

		const { result } = renderHook(() =>
			useViewerNavigation({
				dispatch: mockDispatch,
				isFullscreen: false,
				settings: { "viewer.loop": true, "fullscreen.loop": true } as any,
				currentThumbnails: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
				currentIndex: 1,
				viewerMode: "gallery",
				pagination: { hasMore: false, limit: 10, total: 3, offset: 0 },
				searchQuery: "",
				isJumping: false,
				setIsJumping: mockSetIsJumping,
				mountRefs: { isMountedRef: { current: true }, viewerImageIdRef: { current: 1 } },
			}),
		);

		act(() => {
			result.current.handleNext();
		});

		act(() => {
			result.current.handlePrevious();
		});

		expect(mockDispatch).toHaveBeenCalledWith({
			type: "NEXT_IMAGE",
			payload: { isFullscreen: false, currentList: undefined },
		});

		expect(mockDispatch).toHaveBeenCalledWith({
			type: "PREVIOUS_IMAGE",
			payload: { isFullscreen: false, currentList: undefined },
		});
	});
});
