import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { GalleryPanel } from "./GalleryPanel";

// Mock global api
vi.mock("/scripts/api.js", () => ({
	api: { fetchApi: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn() },
}));

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			viewScope: "default",
			settings: {},
			favorites: [],
			images: [],
			activeModal: { type: "none" },
			searchQuery: "",
			pagination: { hasMore: false },
			viewerImageId: null,
			isProcessing: false,
			selection: new Set(),
			importProgress: { isRunning: false, progress: 0 },
		},
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
		updateSetting: vi.fn(),
		loadMoreImages: vi.fn(),
		fetchFullImageDetails: vi.fn(),
	}),
}));

// Mock dependencies
vi.mock("../hooks/useGalleryLogic", () => ({
	useGalleryLogic: () => ({
		state: {
			viewScope: "default",
			settings: {},
			favorites: [],
			images: [],
			activeModal: { type: "none" },
			searchQuery: "",
			pagination: { hasMore: false },
			viewerImageId: null,
			error: null,
			selection: new Set(),
			importProgress: { isRunning: false, progress: 0 },
		},
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
		updateSetting: vi.fn(),
		viewMode: "gallery",
		setViewMode: vi.fn(),
		lastSearchQuery: "",
		setLastSearchQuery: vi.fn(),
		displayedImages: [],
		visibleImages: [],
		isSearchActive: false,
		loadMoreRef: { current: null },
	}),
}));

vi.mock("../../light-table/store", () => ({
	useLightTableStore: Object.assign(
		vi.fn((selector: unknown) => {
			const selectorStr = String(selector);
			if (selectorStr.includes("isOpen")) return false;
			if (selectorStr.includes("setIsOpen")) return vi.fn();
			if (selectorStr.includes("buckets")) return { default: [] };
			return {};
		}),
		{
			getState: () => ({
				removeFromBucket: vi.fn(),
			}),
		},
	),
}));

vi.mock("../../../logger", () => ({
	logger: {
		log: vi.fn(),
		error: vi.fn(),
	},
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Mock child components
vi.mock("./VirtualizedGalleryList", () => ({
	VirtualizedGalleryList: () => <div data-testid="virtualized-list" />,
}));
vi.mock("./BulkActionBar", () => ({ BulkActionBar: () => <div data-testid="bulk-action-bar" /> }));
vi.mock("../../search/components/SearchBar", () => ({
	SearchBar: () => <div data-testid="search-bar" />,
}));
vi.mock("../../tags/components/TagManagerView", () => ({
	TagManagerView: () => <div data-testid="tag-manager" />,
}));
vi.mock("../../importer/components/ImportProgress", () => ({
	ImportProgress: () => <div data-testid="import-progress" />,
}));
vi.mock("../../light-table/components/LightTable", () => ({
	LightTable: () => <div data-testid="light-table" />,
}));
vi.mock("../../../components/shared/GalleryModals", () => ({
	GalleryModals: () => <div data-testid="gallery-modals" />,
}));
vi.mock("../../viewer/components/ImageViewer", () => ({
	ImageViewer: () => <div data-testid="image-viewer" />,
}));
vi.mock("../../search/components/FavoritesContextMenu", () => ({
	FavoritesContextMenu: () => <div data-testid="favorites-menu" />,
}));

describe("GalleryPanel", () => {
	it("renders correctly", () => {
		render(<GalleryPanel />);
		expect(screen.getByTitle("Search")).toBeInTheDocument();
	});
});
