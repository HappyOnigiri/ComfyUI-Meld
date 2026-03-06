import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../test/factories/image";
import {
	createMockGalleryContext,
	type MockGalleryContext,
} from "../../test/helpers/renderWithGallery";
import { ImageCard } from "./ImageCard";

// Mock useGallery
vi.mock("../../store/GalleryContext", () => ({
	useGallery: vi.fn(),
}));

// Mock child components to isolate ImageCard's branching logic
vi.mock("./SimpleImageCard", () => ({
	SimpleImageCard: ({ image: _image }: { image: unknown }) => (
		<div data-testid="simple-image-card">SimpleImageCard</div>
	),
}));
vi.mock("../../features/viewer/components/DetailedImageCard", () => ({
	DetailedImageCard: ({ image: _image }: { image: unknown }) => (
		<div data-testid="detailed-image-card">DetailedImageCard</div>
	),
}));

import { useGallery } from "../../store/GalleryContext";

describe("ImageCard", () => {
	let ctx: MockGalleryContext;

	beforeEach(() => {
		resetImageIdCounter();
	});

	it("renders SimpleImageCard when view_mode is grid_only", () => {
		ctx = createMockGalleryContext({
			settings: {
				...createMockGalleryContext().state.settings,
				"gallery.view_mode": "grid_only",
			},
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		const image = createTestImage();
		render(<ImageCard image={image} />);
		expect(screen.getByTestId("simple-image-card")).toBeInTheDocument();
		expect(screen.queryByTestId("detailed-image-card")).not.toBeInTheDocument();
	});

	it("renders DetailedImageCard when view_mode is grid_details", () => {
		ctx = createMockGalleryContext({
			settings: {
				...createMockGalleryContext().state.settings,
				"gallery.view_mode": "grid_details",
			},
		});
		vi.mocked(useGallery).mockReturnValue(ctx);

		const image = createTestImage();
		render(<ImageCard image={image} />);
		expect(screen.getByTestId("detailed-image-card")).toBeInTheDocument();
		expect(screen.queryByTestId("simple-image-card")).not.toBeInTheDocument();
	});

	it("defaults to DetailedImageCard when view_mode is not set", () => {
		ctx = createMockGalleryContext();
		vi.mocked(useGallery).mockReturnValue(ctx);

		const image = createTestImage();
		render(<ImageCard image={image} />);
		expect(screen.getByTestId("detailed-image-card")).toBeInTheDocument();
	});
});
