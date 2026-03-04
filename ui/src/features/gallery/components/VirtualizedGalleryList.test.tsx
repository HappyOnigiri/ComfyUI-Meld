import { render, screen } from "@testing-library/react";
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import type { MeldImage, Settings } from "../../../types";
import { VirtualizedGalleryList } from "./VirtualizedGalleryList";

// jsdom does not provide ResizeObserver
beforeAll(() => {
	globalThis.ResizeObserver = class {
		observe() {}
		unobserve() {}
		disconnect() {}
	} as unknown as typeof ResizeObserver;

	globalThis.IntersectionObserver = class {
		observe() {}
		unobserve() {}
		disconnect() {}
		takeRecords() {
			return [];
		}
		root = null;
		rootMargin = "";
		thresholds = [];
	} as unknown as typeof IntersectionObserver;
});

// Mock @tanstack/react-virtual
vi.mock("@tanstack/react-virtual", () => ({
	useVirtualizer: vi.fn(() => ({
		getVirtualItems: () => [],
		getTotalSize: () => 0,
		scrollToIndex: vi.fn(),
		measureElement: vi.fn(),
	})),
}));

// Mock ImageCard
vi.mock("../../../components/shared/ImageCard", () => ({
	ImageCard: ({ image }: { image: MeldImage }) => (
		<div data-testid={`image-card-${image.id}`}>{image.filename}</div>
	),
}));

const defaultSettings: Settings = {
	"sidebar.thumbnail_size": 100,
	"gallery.view_mode": "grid_details",
} as Settings;

describe("VirtualizedGalleryList", () => {
	const loadMoreRef = { current: null } as React.RefObject<HTMLDivElement>;

	beforeEach(() => {
		resetImageIdCounter();
	});

	it("shows loading indicator when isLoading is true", () => {
		render(
			<VirtualizedGalleryList
				visibleImages={[createTestImage()]}
				settings={defaultSettings}
				loadMoreRef={loadMoreRef}
				viewerImageId={null}
				isLoading
				hasMore
			/>,
		);
		expect(screen.getByText("Loading more...")).toBeInTheDocument();
	});

	it("shows end of gallery when not loading and hasMore is false", () => {
		const img = createTestImage();
		render(
			<VirtualizedGalleryList
				visibleImages={[img]}
				settings={defaultSettings}
				loadMoreRef={loadMoreRef}
				viewerImageId={null}
				isLoading={false}
				hasMore={false}
			/>,
		);
		expect(screen.getByText("End of gallery")).toBeInTheDocument();
	});

	it("renders the scroll container", () => {
		render(
			<VirtualizedGalleryList
				visibleImages={[]}
				settings={defaultSettings}
				loadMoreRef={loadMoreRef}
				viewerImageId={null}
				isLoading={false}
				hasMore={false}
			/>,
		);
		const scrollEl = document.querySelector(".meld-gallery__list-scroll");
		expect(scrollEl).toBeTruthy();
	});

	it("sets thumbnail size CSS variable", () => {
		const settings = { ...defaultSettings, "sidebar.thumbnail_size": 150 } as Settings;
		render(
			<VirtualizedGalleryList
				visibleImages={[]}
				settings={settings}
				loadMoreRef={loadMoreRef}
				viewerImageId={null}
				isLoading={false}
				hasMore={false}
			/>,
		);
		const scrollEl = document.querySelector(".meld-gallery__list-scroll") as HTMLElement;
		expect(scrollEl?.style.getPropertyValue("--meld-thumbnail-size")).toBe("150px");
	});

	it("does not show end message when images list is empty", () => {
		render(
			<VirtualizedGalleryList
				visibleImages={[]}
				settings={defaultSettings}
				loadMoreRef={loadMoreRef}
				viewerImageId={null}
				isLoading={false}
				hasMore={false}
			/>,
		);
		expect(screen.queryByText("End of gallery")).not.toBeInTheDocument();
	});
});
