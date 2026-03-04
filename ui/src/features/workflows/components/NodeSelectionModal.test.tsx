import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { NodeSelectionModal } from "./NodeSelectionModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
	}),
}));

describe("NodeSelectionModal", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<NodeSelectionModal {...({ nodes: [], image: { filename: "test" } } as any)} />,
		);
		expect(container).toBeTruthy();
	});
});
