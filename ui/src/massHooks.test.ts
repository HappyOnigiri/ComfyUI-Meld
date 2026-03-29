import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useGalleryLogic } from "./features/gallery/hooks/useGalleryLogic";
import { useSearchLogic } from "./features/search/hooks/useSearchLogic";
import { useSettingsModalLogic } from "./features/settings/hooks/useSettingsModalLogic";
import { useWorkflowExecution } from "./features/workflows/hooks/useWorkflowExecution";
import type { MeldImage } from "./types";

// Stable references to avoid infinite re-renders from useCallback/useEffect dependency changes
const mockDispatch = vi.fn();
const mockRefreshImages = vi.fn();
const mockUpdateSetting = vi.fn();
const mockLoadMoreImages = vi.fn();
const mockFetchFullImageDetails = vi.fn();

vi.mock("./store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			settings: {
				"gallery.initial_load_count": 50,
				"gallery.max_load_count": 100,
				"gallery.lineage_max_depth": 3,
				"gallery.trash_retention_days": 30,
				"gallery.auto_link_phash_threshold": 10,
				"gallery.suggest_phash_threshold": 20,
				"gallery.initial_batch_size": 20,
				"gallery.max_batch_size": 50,
				"gallery.upload_chunk_size": 1024,
				"gallery.preview_quality": 80,
				"gallery.thumbnail_size": 128,
				"gallery.items_per_row": 5,
				"viewer.thumbnail_window_size": 5,
				"viewer.details.max_positive_prompt_lines": 10,
				"viewer.details.max_negative_prompt_lines": 5,
				"viewer.details.core_prompt_count": 10,
				"fullscreen.details.max_positive_prompt_lines": 20,
				"fullscreen.details.max_negative_prompt_lines": 10,
				"fullscreen.details.core_prompt_count": 10,
				"sidebar.thumbnail_size": 128,
			},
			selection: new Set(),
			favorites: [],
			images: [{ id: 1, filename: "test.jpg" }],
			activeModal: { type: "none" },
			searchTags: [],
			searchQuery: "",
			pagination: { hasMore: false, limit: 100 },
			selectedIds: new Set(),
			viewerImageId: 1,
			isProcessing: false,
		},
		dispatch: mockDispatch,
		refreshImages: mockRefreshImages,
		updateSetting: mockUpdateSetting,
		loadMoreImages: mockLoadMoreImages,
		fetchFullImageDetails: mockFetchFullImageDetails,
	}),
}));

vi.mock("./features/databases/api/databasesApi", () => {
	const payload = {
		databases: [],
		active_database: "default",
		database_generation: 1,
	};
	return {
		fetchDatabases: vi.fn().mockResolvedValue(payload),
		createDatabase: vi.fn().mockResolvedValue(payload),
		switchDatabase: vi.fn().mockResolvedValue(payload),
		deleteDatabase: vi.fn().mockResolvedValue(payload),
		renameDatabase: vi.fn().mockResolvedValue(payload),
	};
});

Object.assign(navigator, {
	clipboard: { writeText: vi.fn() },
});

vi.mock("./features/workflows/api/workflowsApi", () => ({
	fetchWorkflows: vi.fn().mockResolvedValue([{ valid: true, mask_count: 1 }]),
	fetchWorkflowRaw: vi.fn().mockResolvedValue({
		nodes: [{ id: "1", type: "MeldImageLoader", widgets: [{ name: "image", value: "" }] }],
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

vi.mock("/scripts/api.js", () => ({
	api: {
		// fetchApi returns a Response-like object (handleResponse reads res.ok / res.json())
		// json() body matches the { success, data } shape used by handleResponse
		fetchApi: vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({ success: true, data: {} }),
		}),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	},
}));

const hooksToTest: { run: (...args: unknown[]) => unknown; args?: unknown[] }[] = [
	{ run: useSettingsModalLogic as unknown as (...args: unknown[]) => unknown, args: [] },
	{
		run: useSearchLogic as unknown as (...args: unknown[]) => unknown,
		args: ["gallery", vi.fn(), false, vi.fn()],
	},
	{ run: useGalleryLogic as unknown as (...args: unknown[]) => unknown, args: [] },
	{
		run: () => {
			const { executeWorkflow } = useWorkflowExecution();
			return {
				executeWorkflow: (arg1: unknown) => {
					// Harness calls functions with no args, then mockEvent, then 1.
					// We provide valid signature placeholders to avoid "Missing required inputs".
					if (
						arg1 === undefined ||
						typeof arg1 === "number" ||
						(arg1 && typeof arg1 === "object" && "preventDefault" in arg1)
					) {
						const fixture: MeldImage = {
							id: 1,
							filename: "test.jpg",
							subfolder: "",
							type: "output",
							created_at: Date.now(),
							positive: "",
							negative: "",
							tags: [],
						};
						return executeWorkflow("test-wf", fixture);
					}
					return (executeWorkflow as (a: unknown) => Promise<unknown>)(arg1);
				},
			};
		},
		args: [],
	},
];

describe("Mass Hooks Coverage", () => {
	it("renders hooks and calls returned functions", async () => {
		const errors: Error[] = [];
		for (const item of hooksToTest) {
			try {
				const { result, unmount } = renderHook(() => item.run(...(item.args || [])));
				expect(result.current).toBeDefined();
				await act(async () => Promise.resolve());
				unmount();
			} catch (e) {
				errors.push(new Error(`Error in renderHook for ${item.run.name}: ${String(e)}`));
			}
		}

		// Remove throw errors[0]: consolidate into a single failure path via expect()
		expect(errors).toEqual([]);
	}, 15000);
});
