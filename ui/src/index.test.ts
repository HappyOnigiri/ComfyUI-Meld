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
		registerExtension: vi.fn((ext) => {
			const mockApp = {
				ui: { meld: { refresh: vi.fn(), isVisible: vi.fn(() => true) } },
				extensionManager: {
					registerSidebarTab: vi.fn((tab) => {
						const el = document.createElement("div");
						const parent = document.createElement("div");
						parent.className = "sidebar-content-container";
						parent.appendChild(el);
						document.body.appendChild(parent);
						tab.render(el);
						// call render again to hit branch
						tab.render(el);
						document.body.removeChild(parent);
					}),
					setSidebarTabActive: vi.fn(),
				},
			};
			ext.setup?.(mockApp);

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
	fetchImages: vi.fn().mockResolvedValue({ items: [], total: 0 }),
}));

describe("index.ts", () => {
	it("registers extension successfully", async () => {
		// Import the file to execute its top-level code
		await import("./index");
		const { app } = await import("/scripts/app.js");
		expect(app.registerExtension).toHaveBeenCalled();
	}, 20000);
});
