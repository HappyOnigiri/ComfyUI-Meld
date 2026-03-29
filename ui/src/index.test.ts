import { act, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

vi.mock("/scripts/api.js", () => ({
	api: {
		fetchApi: vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({ success: true, data: {} }),
		}),
		addEventListener: vi.fn((event, cb) => {
			if (event === "executed") {
				cb({
					detail: { output: { images: [{ filename: "test.png", subfolder: "", type: "output" }] } },
				});
			} else {
				cb({ detail: {} });
			}
		}),
	},
}));

vi.mock("/scripts/app.js", () => ({
	app: {
		registerExtension: vi.fn(async (ext) => {
			const mockApp = {
				ui: { meld: { refresh: vi.fn(), isVisible: vi.fn(() => true) } },
				extensionManager: {
					registerSidebarTab: vi.fn(async (tab) => {
						const { fetchImages } = await import("./features/images/api/imagesApi");
						const el = document.createElement("div");
						const parent = document.createElement("div");
						parent.className = "sidebar-content-container";
						parent.appendChild(el);
						document.body.appendChild(parent);
						try {
							// Intentional double render to test idempotency / simulate React StrictMode double-invoke
							await act(async () => {
								tab.render(el);
								tab.render(el);
							});
							await waitFor(() => expect(fetchImages).toHaveBeenCalled());
						} finally {
							if (document.body.contains(parent)) {
								document.body.removeChild(parent);
							}
						}
					}),
					setSidebarTabActive: vi.fn(),
				},
			};
			await ext.setup?.(mockApp);

			const mockNodeType = { prototype: { onExecuted: vi.fn() } };
			ext.beforeRegisterNodeDef?.(mockNodeType, { name: "MeldSaveImage" }, mockApp);
			// call the overridden onExecuted
			mockNodeType.prototype.onExecuted();
		}),
	},
}));

vi.mock("./features/settings/api/settingsApi", () => ({
	fetchSettings: vi.fn().mockResolvedValue({ dev_mode: true }),
}));

vi.mock("./features/images/api/imagesApi", () => ({
	registerImage: vi.fn(),
	fetchImages: vi.fn().mockResolvedValue({ images: [], total: 0, offset: 0, limit: 30 }),
	normalizeImagesResponse: vi.fn((value) => value),
}));

describe("index.ts", () => {
	it("registers extension successfully", async () => {
		const { fetchImages } = await import("./features/images/api/imagesApi");
		const { useLightTableStore } = await import("./features/light-table/store");
		// Import the file to execute its top-level code
		await import("./index");
		const { app } = await import("/scripts/app.js");
		expect(app.registerExtension).toHaveBeenCalled();
		// First await async setup checkpoint: fetchImages called (setup + render completed)
		await waitFor(() => expect(fetchImages).toHaveBeenCalled(), { timeout: 5000 });
		useLightTableStore.setState((state) => ({
			...state,
			buckets: { keep: ["1"] },
			images: {
				"1": {
					id: 1,
					filename: "test.png",
					subfolder: "",
					type: "output",
					created_at: 0,
					positive: "",
					negative: "",
					tags: [],
				},
			},
		}));
		const beforeSwitchCallCount = vi.mocked(fetchImages).mock.calls.length;
		window.dispatchEvent(new CustomEvent("meld-database-changed"));
		await waitFor(() => {
			expect(vi.mocked(fetchImages).mock.calls.length).toBeGreaterThan(beforeSwitchCallCount);
			expect(useLightTableStore.getState().buckets).toEqual({});
			expect(useLightTableStore.getState().images).toEqual({});
		});
		// Then assert cleanup: sidebar container removed
		await waitFor(() => expect(document.querySelector(".sidebar-content-container")).toBeNull(), {
			timeout: 5000,
		});
	}, 20000);
});
