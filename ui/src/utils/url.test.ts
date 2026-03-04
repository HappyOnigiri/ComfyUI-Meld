import { describe, expect, it } from "vitest";
import { getImageViewUrl, getThumbnailViewUrl } from "./url";

describe("getThumbnailViewUrl", () => {
	it("returns encoded thumbnail URL with defaults", () => {
		const result = getThumbnailViewUrl({
			filename: "my image.png",
			subfolder: "a/b",
		});
		expect(result).toBe(
			"/api/meld/view-thumb?filename=my%20image.png&type=output&subfolder=a%2Fb&size=200",
		);
	});

	it("returns empty string when filename is missing", () => {
		const result = getThumbnailViewUrl({
			filename: "",
			subfolder: "a",
		});
		expect(result).toBe("");
	});
});

describe("getImageViewUrl", () => {
	it("returns custom endpoint for custom type", () => {
		const result = getImageViewUrl({
			filename: "img.png",
			subfolder: "custom/sub",
			type: "custom",
		});
		expect(result).toBe("/api/meld/view-custom?filename=img.png&subfolder=custom%2Fsub");
	});

	it("returns trash endpoint for trash type", () => {
		const result = getImageViewUrl({
			filename: "img.png",
			subfolder: "ignored",
			type: "trash",
		});
		expect(result).toBe("/api/meld/view-trash?filename=img.png");
	});

	it("returns default view endpoint for output", () => {
		const result = getImageViewUrl({
			filename: "img.png",
			subfolder: "a/b",
			type: "output",
		});
		expect(result).toBe("/api/view?filename=img.png&type=output&subfolder=a%2Fb");
	});

	it("defaults type to output when absent", () => {
		const result = getImageViewUrl({
			filename: "img.png",
			subfolder: "a/b",
		});
		expect(result).toBe("/api/view?filename=img.png&type=output&subfolder=a%2Fb");
	});
});
