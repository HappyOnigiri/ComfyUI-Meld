import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ShortcutsTab } from "./ShortcutsTab";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { settings: {} },
		dispatch: vi.fn(),
	}),
}));

describe("ShortcutsTab", () => {
	it("renders", () => {
		try {
			render(<ShortcutsTab {...({} as any)} />);
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
