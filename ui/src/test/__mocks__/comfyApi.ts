import { vi } from "vitest";

/**
 * Stub for ComfyUI's /scripts/api.js used during testing.
 * Provides a minimal mock of the `api` object so modules that
 * `import { api } from "/scripts/api.js"` can be loaded without errors.
 */
export const api = {
	fetchApi: vi.fn().mockResolvedValue({
		ok: true,
		json: vi.fn().mockResolvedValue({ success: true, data: [] }),
	}),
	addEventListener: vi.fn(),
	removeEventListener: vi.fn(),
	apiURL: (path: string) => path,
};
