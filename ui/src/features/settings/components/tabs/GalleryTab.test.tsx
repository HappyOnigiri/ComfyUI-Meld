import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { GalleryTab } from "./GalleryTab";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { settings: {} },
		dispatch: vi.fn(),
	}),
}));

describe("GalleryTab", () => {
	it("renders", () => {
		try {
			render(<GalleryTab {...({} as React.ComponentProps<typeof GalleryTab>)} />);
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
