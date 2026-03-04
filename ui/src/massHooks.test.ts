import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useGalleryLogic } from "./features/gallery/hooks/useGalleryLogic";
import { useSearchLogic } from "./features/search/hooks/useSearchLogic";
import { useSettingsModalLogic } from "./features/settings/hooks/useSettingsModalLogic";
import { useViewerActionsBridge } from "./features/viewer/hooks/internal/useViewerActionsBridge";
import { useImageCardLogic } from "./features/viewer/hooks/useImageCardLogic";
import { useImageViewerLogic } from "./features/viewer/hooks/useImageViewerLogic";

vi.mock("./store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			settings: {},
			selection: new Set(),
			favorites: [],
			images: [{ id: 1, filename: "test.jpg" }],
			activeModal: { type: "none" },
			searchTags: [],
		},
		dispatch: vi.fn(),
		refreshImages: vi.fn(),
		updateSetting: vi.fn(),
		loadMoreImages: vi.fn(),
		fetchFullImageDetails: vi.fn(),
	}),
}));

vi.mock("/scripts/api.js", () => ({
	api: {
		fetchApi: vi
			.fn()
			.mockResolvedValue({ ok: true, json: vi.fn().mockResolvedValue({ success: true }) }),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	},
}));

const mockEvent = {
	preventDefault: vi.fn(),
	stopPropagation: vi.fn(),
	target: { value: "test" },
};

const hooksToTest: { run: (...args: any[]) => unknown; args?: any[] }[] = [
	{ run: useSettingsModalLogic, args: [] },
	{
		run: useSearchLogic,
		args: ["gallery", vi.fn(), false, vi.fn()],
	},
	{ run: useGalleryLogic, args: [] },
	{
		run: useImageViewerLogic,
		args: [{ settings: {}, images: [{ id: 1 }] }, vi.fn(), vi.fn(), vi.fn()],
	},
	{
		run: useImageCardLogic,
		args: [{ id: 1, filename: "test" }, false, vi.fn()],
	},
	{
		run: useViewerActionsBridge,
		args: [{ settings: {}, images: [] }, vi.fn(), { id: 1, filename: "test" }],
	},
];

describe("Mass Hooks Coverage", () => {
	it("renders hooks and calls returned functions", async () => {
		const errors: Error[] = [];
		for (const item of hooksToTest) {
			try {
				const { result } = renderHook(() => item.run(...(item.args || [])));

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
			} catch (e) {
				errors.push(new Error(`Error in renderHook for ${item.run.name}: ${String(e)}`));
			}
		}

		if (errors.length > 0) {
			throw errors[0];
		}
		expect(errors).toHaveLength(0);
	});
});
