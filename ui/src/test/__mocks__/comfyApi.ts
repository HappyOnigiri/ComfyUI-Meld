/**
 * Stub for ComfyUI's /scripts/api.js used during testing.
 * Provides a minimal mock of the `api` object so modules that
 * `import { api } from "/scripts/api.js"` can be loaded without errors.
 */
export const api = {
	fetchApi: async (_url: string, _opts?: RequestInit): Promise<Response> => {
		throw new Error("api.fetchApi is not mocked for this test");
	},
	addEventListener: (_event: string, _cb: unknown) => {},
	apiURL: (path: string) => path,
};
