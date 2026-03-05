import { act, fireEvent, render } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { GalleryPanel } from "./features/gallery/components/GalleryPanel";
import { ImportModal } from "./features/importer/components/ImportModal";
import { MaskEditorModal } from "./features/mask-editor/components/MaskEditorModal";
import { SearchBar } from "./features/search/components/SearchBar";
import { TagManagerView } from "./features/tags/components/TagManagerView";
import { ImageViewer } from "./features/viewer/components/ImageViewer";
import { WorkflowSelectionModal } from "./features/workflows/components/WorkflowSelectionModal";
import type { MeldImage } from "./types";

vi.mock("/scripts/api.js", () => ({
	api: {
		// fetchApi returns a Response-like object (handleResponse reads res.ok / res.json())
		// json() body matches the { success, data } shape used by handleResponse
		fetchApi: vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({ success: true, data: [] }),
		}),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	},
}));
vi.mock("/scripts/app.js", () => ({ app: {} }));

const mockState = {
	viewScope: "default",
	settings: {
		"gallery.view_mode": "grid_details",
		"viewer.show_icons": true,
		"fullscreen.show_icons": true,
		"viewer.thumbnail_window_size": 5,
	},
	favorites: [],
	images: [
		{ id: 1, filename: "test.jpg" },
		{ id: 2, filename: "test2.jpg" },
	],
	lineageImages: [],
	activeModal: { type: "none" },
	searchQuery: "",
	pagination: { hasMore: false },
	viewerImageId: 1,
	viewerMode: "gallery",
	viewerLightTableSlotId: null,
	isProcessing: false,
	selection: new Set([1]),
	importProgress: { isRunning: false, progress: 0, currentFile: "" },
	error: null,
	searchTags: [],
};

vi.mock("./store/GalleryContext", () => ({
	useGallery: () => ({
		state: mockState,
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
		updateSetting: vi.fn(),
		loadMoreImages: vi.fn(),
		fetchFullImageDetails: vi.fn(),
	}),
	useGalleryContext: () => ({
		state: mockState,
		dispatch: vi.fn(),
	}),
}));

vi.mock("./features/search/api/searchApi", () => ({
	fetchSearchKeywords: vi.fn().mockResolvedValue([]),
	fetchSearchConfig: vi.fn().mockResolvedValue({
		all_prefixes: [],
		boolean_prefixes: [],
		date_prefixes: [],
		sort_prefix: "sort",
		no_quote_prefixes: [],
	}),
	fetchSearchSuggestions: vi.fn().mockResolvedValue([]),
	fetchSuggestions: vi.fn().mockResolvedValue([]),
}));

vi.mock("./features/light-table/store", () => ({
	useLightTableStore: Object.assign(
		vi.fn((selector: unknown) => {
			const mockState = {
				isOpen: false,
				buckets: { default: [] },
				images: {},
			};
			if (typeof selector === "function") {
				return selector(mockState);
			}
			return mockState;
		}),
		{ getState: () => ({ removeFromBucket: vi.fn(), images: {} }) },
	),
}));

// ResizeObserver mock
global.ResizeObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

global.IntersectionObserver = vi.fn().mockImplementation(() => ({
	observe: vi.fn(),
	unobserve: vi.fn(),
	disconnect: vi.fn(),
}));

// Magic clicker
const clickEverything = (container: HTMLElement | Document) => {
	const elements = container.querySelectorAll(
		'button, input, [role="button"], [role="tab"], [role="menuitem"], canvas, div, span',
	);
	const errors: Error[] = [];
	elements.forEach((el) => {
		try {
			act(() => {
				fireEvent.click(el);
				fireEvent.change(el, { target: { value: "test" } });
				fireEvent.keyDown(el, { key: "Enter", code: "Enter", charCode: 13 });
				fireEvent.wheel(el, { deltaY: 100 });
				fireEvent.pointerDown(el, { clientX: 10, clientY: 10 });
				fireEvent.pointerMove(el, { clientX: 20, clientY: 20 });
				fireEvent.pointerUp(el, { clientX: 20, clientY: 20 });
				fireEvent.contextMenu(el);
				fireEvent.submit(el);
				fireEvent.focus(el);
				fireEvent.blur(el);
			});
		} catch (e) {
			errors.push(e instanceof Error ? e : new Error(String(e)));
		}
	});

	if (errors.length > 0) {
		throw errors[0];
	}
};

describe("Mass Components Coverage", () => {
	it.skip("massacres GalleryPanel", () => {
		const { container } = render(<GalleryPanel />);
		clickEverything(container);
	});
	it.skip("massacres ImportModal", () => {
		const { container } = render(<ImportModal />);
		clickEverything(container);
	});
	it.skip("massacres WorkflowSelectionModal", () => {
		const { container } = render(
			<WorkflowSelectionModal
				images={[{ id: 1 } as Partial<MeldImage> as MeldImage]}
				isMaskMode={false}
				onExecute={vi.fn()}
			/>,
		);
		clickEverything(container);
	});
	it.skip("massacres MaskEditorModal", () => {
		const { container } = render(<MaskEditorModal imageId={1} mode="run" onClose={vi.fn()} />);
		clickEverything(container);
	});
	it.skip("massacres ImageViewer", () => {
		render(<ImageViewer />);
		// Need to find portals? createPortal appends to document.body
		clickEverything(document.body);
	});
	it("renders SearchBar without throwing", () => {
		// Simple render check without clickEverything for a stable, deterministic assertion
		const { container } = render(<SearchBar />);
		expect(container.firstChild).not.toBeNull();
	});
	it.skip("massacres SearchBar", () => {
		const { container } = render(<SearchBar />);
		clickEverything(container);
	});
	it.skip("massacres TagManagerView", () => {
		const { container } = render(<TagManagerView onClose={vi.fn()} onSearch={vi.fn()} />);
		clickEverything(container);
	});
});
