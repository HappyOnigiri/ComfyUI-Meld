import { render } from "@testing-library/react";

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
		const { container } = render(<WorkflowSelectionModal images={[]} onExecute={vi.fn()} />);
		expect(container).toBeTruthy();
	});
});
