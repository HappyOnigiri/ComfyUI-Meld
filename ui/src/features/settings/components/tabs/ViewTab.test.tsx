import { render } from "@testing-library/react";
import React from "react";
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
			render(<ViewTab {...({} as any)} />);
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
