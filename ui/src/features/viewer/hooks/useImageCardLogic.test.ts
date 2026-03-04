import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useImageCardLogic } from "./useImageCardLogic";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			tags: [],
			activeModal: {},
			selectedIds: new Set(),
			settings: { "gallery.view_mode": "grid" },
		},
		dispatch: vi.fn(),
		saveTags: vi.fn(),
	}),
}));

describe("useImageCardLogic", () => {
	it("executes functions without crashing", () => {
		const { result } = renderHook(() =>
			useImageCardLogic({
				id: 1,
				filename: "test.png",
				type: "output",
				subfolder: "",
			} as never),
		);

		expect(result.current.viewMode).toBe("grid");
		expect(typeof result.current.setIsMenuOpen).toBe("function");
		expect(result.current.isMenuOpen).toBe(false);

		act(() => {
			result.current.setIsMenuOpen(true);
		});
		expect(result.current.isMenuOpen).toBe(true);
	});
});
