import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { LightTable } from "./LightTable";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			selectedIds: new Set(),
		},
		dispatch: vi.fn(),
	}),
}));

describe("LightTable", () => {
	it("renders without crashing", () => {
		const { container } = render(<LightTable />);
		expect(container).toBeTruthy();
	});
});
