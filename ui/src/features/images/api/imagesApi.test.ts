import { describe, expect, it, vi } from "vitest";
import { api } from "/scripts/api.js";
import * as imagesApi from "./imagesApi";

vi.mock("/scripts/api.js", () => ({
	api: {
		fetchApi: vi.fn().mockResolvedValue({
			ok: true,
			json: vi.fn().mockResolvedValue({ success: true, data: { test: true } }),
		}),
	},
}));

Object.assign(window, {
	URL: { createObjectURL: vi.fn(), revokeObjectURL: vi.fn() },
});

const originalCreateElement = document.createElement.bind(document);
Object.defineProperty(document, "createElement", {
	value: vi.fn((tag) => {
		if (tag === "a") {
			const anchor = originalCreateElement(tag);
			anchor.click = vi.fn();
			return anchor;
		}
		return originalCreateElement(tag);
	}),
});

describe("imagesApi", () => {
	it("calls fetchApi for all endpoints", async () => {
		await imagesApi.fetchImages();
		await imagesApi.fetchImageDetails(1);
		await imagesApi.deleteImages([1]);
		await imagesApi.restoreImages([1]);
		await imagesApi.registerImage({ filename: "a", subfolder: "b", type: "c" });
		await imagesApi.linkParent(1, 2);
		await imagesApi.suggestParents(1);
		await imagesApi.fetchLineage(1);
		await imagesApi.updateImageTags(1, []);
		await imagesApi.updateImageNotes(1, "");
		await imagesApi.bulkUpdateImageTags([1], [], []);
		await imagesApi.fetchImageWorkflow(1);
		await imagesApi.fetchSnapshotData(1);

		const mockBlobResp = {
			ok: true,
			blob: vi.fn().mockResolvedValue(new Blob()),
			headers: { get: () => "" },
		};
		(api.fetchApi as any).mockResolvedValueOnce(mockBlobResp);
		await imagesApi.downloadZipImages([1], false, "", 0, "");

		(api.fetchApi as any).mockResolvedValueOnce(mockBlobResp);
		await imagesApi.downloadRawImage(1, false, "", 0, "");

		expect(api.fetchApi).toHaveBeenCalled();
	});
});
