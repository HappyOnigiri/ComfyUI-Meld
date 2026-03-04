import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTestImage, resetImageIdCounter } from "../../../test/factories/image";
import { GalleryPanel } from "./GalleryPanel";

// Mock useGalleryLogic
const mockUseGalleryLogic = vi.fn();
vi.mock("../hooks/useGalleryLogic", () => ({
	useGalleryLogic: (...args: unknown[]) => mockUseGalleryLogic(...args),
}));

// Mock useLightTableStore
vi.mock("../../light-table/store", () => ({
	useLightTableStore: vi.fn(() => false),
}));

// Mock child components to keep tests focused on GalleryPanel logic
vi.mock("../../../components/shared/GalleryModals", () => ({
	GalleryModals: () => <div data-testid="gallery-modals" />,
}));
vi.mock("../../importer/components/ImportProgress", () => ({
	ImportProgress: () => null,
}));
vi.mock("../../light-table/components/LightTable", () => ({
	LightTable: () => null,
}));
vi.mock("../../search/components/FavoritesContextMenu", () => ({
	FavoritesContextMenu: () => null,
}));
vi.mock("../../search/components/SearchBar", () => ({
	SearchBar: () => <div data-testid="search-bar" />,
}));
vi.mock("../../tags/components/TagManagerView", () => ({
	TagManagerView: () => <div data-testid="tag-manager" />,
}));
vi.mock("../../viewer/components/ImageViewer", () => ({
	ImageViewer: () => <div data-testid="image-viewer" />,
}));
vi.mock("./BulkActionBar", () => ({
	BulkActionBar: () => <div data-testid="bulk-action-bar" />,
}));
vi.mock("./VirtualizedGalleryList", () => ({
	VirtualizedGalleryList: () => <div data-testid="virtualized-gallery-list" />,
}));
vi.mock("../../../styles/Gallery.css", () => ({}));
vi.mock("../../../logger", () => ({
	logger: { log: vi.fn(), error: vi.fn(), warn: vi.fn() },
}));

// Create default mock return value for useGalleryLogic
function createMockLogic(overrides = {}) {
	const loadMoreRef = { current: null };
	return {
		state: {
			images: [],
			isLoading: false,
			error: null,
			viewerImageId: null,
			viewScope: "default",
			searchQuery: "",
			selectedIds: new Set(),
			settings: {
				"gallery.view_mode": "grid_details",
			},
			activeModal: { type: "none" },
			pagination: { hasMore: false, limit: 50 },
			favorites: [],
			toastMessage: null,
		},
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
		loadMoreImages: vi.fn(),
		updateSetting: vi.fn(),
		viewMode: "gallery",
		setViewMode: vi.fn(),
		lastSearchQuery: "",
		setLastSearchQuery: vi.fn(),
		displayedImages: [],
		visibleImages: [],
		isSearchActive: false,
		loadMoreRef,
		...overrides,
	};
}

describe("GalleryPanel", () => {
	beforeEach(() => {
		resetImageIdCounter();
		mockUseGalleryLogic.mockReturnValue(createMockLogic());
	});

	it("shows loading message when loading with no images", () => {
		mockUseGalleryLogic.mockReturnValue(
			createMockLogic({
				state: {
					images: [],
					isLoading: true,
					error: null,
					viewerImageId: null,
					viewScope: "default",
					searchQuery: "",
					selectedIds: new Set(),
					settings: { "gallery.view_mode": "grid_details" },
					activeModal: { type: "none" },
					pagination: { hasMore: false, limit: 50 },
					favorites: [],
					toastMessage: null,
				},
				displayedImages: [],
				visibleImages: [],
			}),
		);

		render(<GalleryPanel />);
		expect(screen.getByText("Loading images...")).toBeInTheDocument();
	});

	it("shows empty message when no images are found", () => {
		render(<GalleryPanel />);
		expect(screen.getByText("No images found.")).toBeInTheDocument();
	});

	it("renders VirtualizedGalleryList when images are present", () => {
		const img = createTestImage();
		mockUseGalleryLogic.mockReturnValue(
			createMockLogic({
				state: {
					images: [img],
					isLoading: false,
					error: null,
					viewerImageId: null,
					viewScope: "default",
					searchQuery: "",
					selectedIds: new Set(),
					settings: { "gallery.view_mode": "grid_details" },
					activeModal: { type: "none" },
					pagination: { hasMore: false, limit: 50 },
					favorites: [],
					toastMessage: null,
				},
				displayedImages: [img],
				visibleImages: [img],
			}),
		);

		render(<GalleryPanel />);
		expect(screen.getByTestId("virtualized-gallery-list")).toBeInTheDocument();
	});

	it("shows trash indicator when viewScope is trash", () => {
		mockUseGalleryLogic.mockReturnValue(
			createMockLogic({
				state: {
					images: [],
					isLoading: false,
					error: null,
					viewerImageId: null,
					viewScope: "trash",
					searchQuery: "",
					selectedIds: new Set(),
					settings: { "gallery.view_mode": "grid_details" },
					activeModal: { type: "none" },
					pagination: { hasMore: false, limit: 50 },
					favorites: [],
					toastMessage: null,
				},
			}),
		);

		render(<GalleryPanel />);
		expect(screen.getByText("Trash Bin")).toBeInTheDocument();
	});

	it("shows error message when error is present", () => {
		mockUseGalleryLogic.mockReturnValue(
			createMockLogic({
				state: {
					images: [],
					isLoading: false,
					error: "Something went wrong",
					viewerImageId: null,
					viewScope: "default",
					searchQuery: "",
					selectedIds: new Set(),
					settings: { "gallery.view_mode": "grid_details" },
					activeModal: { type: "none" },
					pagination: { hasMore: false, limit: 50 },
					favorites: [],
					toastMessage: null,
				},
			}),
		);

		render(<GalleryPanel />);
		expect(screen.getByText("Something went wrong")).toBeInTheDocument();
	});

	it("renders ImageViewer when viewerImageId is set", () => {
		mockUseGalleryLogic.mockReturnValue(
			createMockLogic({
				state: {
					images: [],
					isLoading: false,
					error: null,
					viewerImageId: 1,
					viewScope: "default",
					searchQuery: "",
					selectedIds: new Set(),
					settings: { "gallery.view_mode": "grid_details" },
					activeModal: { type: "none" },
					pagination: { hasMore: false, limit: 50 },
					favorites: [],
					toastMessage: null,
				},
			}),
		);

		render(<GalleryPanel />);
		expect(screen.getByTestId("image-viewer")).toBeInTheDocument();
	});
});
