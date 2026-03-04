import { render } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { NoteEditModal } from "./NoteEditModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: { viewScope: "all" },
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
	}),
}));

describe("NoteEditModal", () => {
	it("renders without crashing", () => {
		const { container } = render(
			<NoteEditModal
				{...({ imageId: 1 } as unknown as React.ComponentProps<typeof NoteEditModal>)}
			/>,
		);
		expect(container).toBeTruthy();
	});
});
