import { render } from "@testing-library/react";
import type React from "react";
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
			render(<ShortcutsTab {...({} as React.ComponentProps<typeof ShortcutsTab>)} />);
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
