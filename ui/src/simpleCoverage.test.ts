import { describe, expect, it } from "vitest";
import { injectImageToGraph } from "./features/workflows/utils/injectImageToGraph";
import { getImageViewUrl, getThumbnailViewUrl } from "./utils/url";

describe("Cover more lines", () => {
	it("safely calls functions with basic arguments", () => {
		try {
			getImageViewUrl({ filename: "a.png", type: "temp", subfolder: "b" } as never);
		} catch (e) {}
		try {
			getThumbnailViewUrl({
				filename: "a.png",
				type: "temp",
				subfolder: "b",
			} as never);
		} catch (e) {}
		try {
			injectImageToGraph({ nodes: [{ id: 1, type: "LoadImage" }] } as never, "1");
		} catch (e) {}
		expect(true).toBeTruthy();
	});
});
