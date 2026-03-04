import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useViewerNavigation } from "./useViewerNavigation";

describe("useViewerNavigation", () => {
	it("renders and calls next/prev safely", () => {
		const { result } = renderHook(() =>
			useViewerNavigation({
				images: [{ id: 1 }, { id: 2 }, { id: 3 }] as any,
				currentIndex: 1,
				dispatch: vi.fn() as any,
				resetZoom: vi.fn() as any,
				settings: { "viewer.loop": true } as any,
			} as any),
		);

		act(() => {
			result.current.handleNext();
		});

		act(() => {
			result.current.handlePrevious();
		});

		expect(result.current).toBeTruthy();
	});
});
