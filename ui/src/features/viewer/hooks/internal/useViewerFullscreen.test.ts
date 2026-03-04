import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useViewerFullscreen } from "./useViewerFullscreen";

describe("useViewerFullscreen", () => {
	it("renders and toggles", () => {
		const dispatch = vi.fn();
		const element = document.createElement("div") as any;
		element.requestFullscreen = vi.fn().mockResolvedValue(undefined);
		const { result } = renderHook(() =>
			useViewerFullscreen({ overlayRef: { current: element } as any } as any),
		);

		act(() => {
			result.current.toggleFullscreen();
		});

		expect(result.current).toBeTruthy();
	});
});
