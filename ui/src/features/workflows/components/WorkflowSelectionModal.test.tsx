import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { WorkflowSelectionModal } from "./WorkflowSelectionModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
	}),
}));

describe("WorkflowSelectionModal", () => {
	it("renders without crashing", () => {
		const { container } = render(<WorkflowSelectionModal {...({} as any)} />);
		expect(container).toBeTruthy();
	});
});
