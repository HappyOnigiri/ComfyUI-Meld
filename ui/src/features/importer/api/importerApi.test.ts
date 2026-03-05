import { describe, expect, it, vi } from "vitest";
import { api } from "/scripts/api.js";
import * as importerApi from "./importerApi";

vi.mock("/scripts/api.js", () => ({
	api: {
		fetchApi: vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({ success: true, data: { test: true } }),
		}),
	},
}));

describe("importerApi", () => {
	it("calls fetchApi for all endpoints", async () => {
		vi.mocked(api.fetchApi).mockResolvedValueOnce({
			ok: true,
			json: vi.fn().mockResolvedValue({ name: "a", subfolder: "b", type: "c" }),
		} as unknown as Response);
		await importerApi.uploadImage(new File([], "test.png"));

		await importerApi.fetchFolders("type", "path");
		await importerApi.fetchFolderMetadata("type", "path", ["folder"]);
		await importerApi.fetchPathImageCount("type", "path");
		await importerApi.startScan({
			type: "type",
			subfolder: "sub",
			recursive: true,
			auto_link_parent: false,
		});
		await importerApi.cancelScan();
		await importerApi.fetchScanStatus();

		expect(api.fetchApi).toHaveBeenCalled();
	});
});
