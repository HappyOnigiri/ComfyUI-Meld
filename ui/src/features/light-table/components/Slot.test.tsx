import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { Slot } from "./Slot";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			images: [],
			lineageImages: [],
		},
		dispatch: vi.fn(),
	}),
}));

vi.mock("../store", () => ({
	useLightTableStore: Object.assign(
		(selector: unknown) => {
			const state = {
				buckets: {},
				slots: [{ id: "keep", label: "Keep", color: "var(--comfy-menu-bg)" }],
				images: {},
			};
			if (typeof selector === "function") return selector(state);
			return state;
		},
		{
			getState: () => ({
				buckets: {},
				slots: [{ id: "keep", label: "Keep", color: "var(--comfy-menu-bg)" }],
				images: {},
			}),
		},
	),
}));

describe("Slot", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<Slot
				{...({ config: { type: "image", id: "1" } } as unknown as React.ComponentProps<
					typeof Slot
				>)}
			/>,
		);
		expect(container).toBeTruthy();
	});
});
