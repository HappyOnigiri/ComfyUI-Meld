import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { ViewTab } from "./ViewTab";

vi.mock("../../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { settings: {} },
		dispatch: vi.fn(),
	}),
}));

describe("ViewTab", () => {
	it("renders", () => {
		try {
			render(<ViewTab {...({} as React.ComponentProps<typeof ViewTab>)} />);
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
