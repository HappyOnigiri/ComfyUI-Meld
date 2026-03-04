import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ImportModal } from "./ImportModal";

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		dispatch: vi.fn(),
	}),
}));

vi.mock("../../../api", () => ({
	fetchHomeDir: vi.fn().mockResolvedValue("/home/user"),
}));

describe("ImportModal", () => {
	it("renders without crashing", () => {
		const { container } = render(<ImportModal />);
		expect(container).toBeTruthy();
	});
});
