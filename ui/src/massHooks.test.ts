import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useGalleryLogic } from "./features/gallery/hooks/useGalleryLogic";
import { useSearchLogic } from "./features/search/hooks/useSearchLogic";
import { useSettingsModalLogic } from "./features/settings/hooks/useSettingsModalLogic";
import { useViewerActionsBridge } from "./features/viewer/hooks/internal/useViewerActionsBridge";
import { useViewerKeyboardShortcuts } from "./features/viewer/hooks/internal/useViewerKeyboardShortcuts";
import { useImageCardLogic } from "./features/viewer/hooks/useImageCardLogic";
import { useImageViewerLogic } from "./features/viewer/hooks/useImageViewerLogic";
import { useWorkflowExecution } from "./features/workflows/hooks/useWorkflowExecution";
import type { MeldImage } from "./types";

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
				"viewer.details.core_prompt_count": 30,
				"fullscreen.details.max_positive_prompt_lines": 20,
				"fullscreen.details.max_negative_prompt_lines": 10,
				"fullscreen.details.core_prompt_count": 30,
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
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
		updateSetting: vi.fn(),
		loadMoreImages: vi.fn(),
		fetchFullImageDetails: vi.fn(),
	}),
}));

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

const mockEvent = {
	preventDefault: vi.fn(),
	stopPropagation: vi.fn(),
	target: { value: "test" },
};

const hooksToTest: { run: (...args: unknown[]) => unknown; args?: unknown[] }[] = [
	{ run: useSettingsModalLogic as unknown as (...args: unknown[]) => unknown, args: [] },
	{
		run: useSearchLogic as unknown as (...args: unknown[]) => unknown,
		args: ["gallery", vi.fn(), false, vi.fn()],
	},
	{ run: useGalleryLogic as unknown as (...args: unknown[]) => unknown, args: [] },
	{
		run: useImageViewerLogic as unknown as (...args: unknown[]) => unknown,
		args: [
			{
				state: {
					settings: {},
					images: [{ id: 1 }],
					viewerImageId: 1,
					activeModal: { type: "none" },
					viewScope: "default",
					searchQuery: "",
					pagination: { hasMore: false, limit: 100 },
					lineageImages: [],
				},
				dispatch: vi.fn(),
				loadMoreImages: vi.fn(),
				fetchFullImageDetails: vi.fn().mockResolvedValue(undefined),
			},
		],
	},
	{
		run: useImageCardLogic as unknown as (...args: unknown[]) => unknown,
		args: [{ id: 1, filename: "test", tags: [] }],
	},
	{
		run: useViewerActionsBridge as unknown as (...args: unknown[]) => unknown,
		args: [
			{
				state: {
					settings: {},
					images: [],
					activeModal: { type: "none" },
					viewScope: "default",
					searchQuery: "",
					pagination: { hasMore: false, limit: 100 },
					lineageImages: [],
				},
				dispatch: vi.fn(),
				image: { id: 1, filename: "test", tags: [] },
				isFullscreen: false,
				currentThumbnails: [],
				currentIndex: 0,
				viewerMode: "gallery",
				lineageImages: [],
				images: [],
				mountRefs: { isMountedRef: { current: true }, viewerImageIdRef: { current: 1 } },
				handleNext: vi.fn(),
				handlePrevious: vi.fn().mockResolvedValue(undefined),
				handleEditTags: vi.fn(),
				handleRestore: vi.fn().mockResolvedValue(undefined),
				fetchLineage: vi.fn().mockResolvedValue([]),
				restoreImages: vi.fn().mockResolvedValue({ restored_ids: [] }),
				bulkUpdateImageTags: vi.fn().mockResolvedValue(undefined),
			},
		],
	},
	{
		run: useViewerKeyboardShortcuts as unknown as (...args: unknown[]) => unknown,
		args: [
			{
				viewerImageId: null,
				activeModalType: "none",
				viewScope: "default",
				settings: {},
				dispatch: vi.fn(),
				isMountedRef: { current: true },
				toggleFullscreen: vi.fn(),
				handleNext: vi.fn(),
				handlePrevious: vi.fn(),
				handleDelete: vi.fn(),
				handleUndo: vi.fn().mockResolvedValue(undefined),
				handleTagEditAction: vi.fn(),
				handleRestoreAction: vi.fn().mockResolvedValue(undefined),
				executeCommand: vi.fn().mockResolvedValue(undefined),
				setShowDetails: vi.fn(),
				setActiveShortcutKey: vi.fn(),
			},
		],
	},
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

				if (result.current && typeof result.current === "object") {
					for (const key of Object.keys(result.current)) {
						const val = (result.current as Record<string, unknown>)[key];
						if (typeof val === "function") {
							try {
								await act(async () => {
									try {
										await val();
									} catch (e) {
										errors.push(
											new Error(`Inner error in ${item.run.name} calling ${key}(): ${String(e)}`),
										);
									}
								});
							} catch (e) {
								errors.push(
									new Error(`Outer error in ${item.run.name} calling ${key}(): ${String(e)}`),
								);
							}

							try {
								await act(async () => {
									try {
										await val(mockEvent);
									} catch (e) {
										errors.push(
											new Error(
												`Inner error in ${item.run.name} calling ${key}(mockEvent): ${String(e)}`,
											),
										);
									}
								});
							} catch (e) {
								errors.push(
									new Error(
										`Outer error in ${item.run.name} calling ${key}(mockEvent): ${String(e)}`,
									),
								);
							}

							try {
								await act(async () => {
									try {
										await val(1);
									} catch (e) {
										errors.push(
											new Error(`Inner error in ${item.run.name} calling ${key}(1): ${String(e)}`),
										);
									}
								});
							} catch (e) {
								errors.push(
									new Error(`Outer error in ${item.run.name} calling ${key}(1): ${String(e)}`),
								);
							}
						}
					}
				}
				unmount();
			} catch (e) {
				errors.push(new Error(`Error in renderHook for ${item.run.name}: ${String(e)}`));
			}
		}

		// Remove throw errors[0]: consolidate into a single failure path via expect()
		expect(errors).toEqual([]);
	});
});
