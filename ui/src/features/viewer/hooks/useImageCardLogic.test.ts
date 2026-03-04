import { renderHook } from "@testing-library/react";
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
				image: { id: 1, filename: "test.png", type: "output", subfolder: "" } as any,
				viewScope: "all",
				showThumbnails: false,
				isCompact: false,
				isSelected: false,
			} as any),
		);

		expect(result.current).toBeTruthy();
	});
});
