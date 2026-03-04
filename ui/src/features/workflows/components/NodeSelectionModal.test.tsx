import { render } from "@testing-library/react";
import type React from "react";
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
			<NodeSelectionModal
				{...({ nodes: [], image: { filename: "test" } } as unknown as React.ComponentProps<
					typeof NodeSelectionModal
				>)}
			/>,
		);
		expect(container).toBeTruthy();
	});
});
