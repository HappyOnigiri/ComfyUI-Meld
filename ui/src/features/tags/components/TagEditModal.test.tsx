import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { TagEditModal } from "./TagEditModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
	}),
}));

describe("TagEditModal", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<TagEditModal imageIds={[1]} initialTags={["tag1"]} onClose={vi.fn()} />,
		);
		expect(container).toBeTruthy();
	});
});
