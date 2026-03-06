import { describe, expect, it } from "vitest";
import type { MeldImage } from "../../../types";
import { parseShortcutCommand, validateShortcutCommand } from "./shortcutGrammar";

const makeImage = (tags: string[]): MeldImage => ({
	id: 1,
	filename: "image.png",
	subfolder: "",
	type: "output",
	created_at: 0,
	positive: "",
	negative: "",
	tags,
});

describe("validateShortcutCommand", () => {
	it("returns true for valid command", () => {
		expect(validateShortcutCommand(`tag:"foo bar" -tag:old next lt:slot1`)).toBe(true);
	});

	it("returns false for invalid command token", () => {
		expect(validateShortcutCommand("unknown:token")).toBe(false);
	});
});

describe("parseShortcutCommand", () => {
	it("parses normal command tokens", () => {
		const result = parseShortcutCommand(`tag:newtag -tag:old next prev delete lt:2`);
		expect(result).toEqual({
			addTags: ["newtag"],
			removeTags: ["old"],
			toggleTags: [],
			moveNext: true,
			movePrev: true,
			isDeleted: true,
			sendToLtSlot: "2",
		});
	});

	it("handles toggle based on current image tags", () => {
		const withTag = parseShortcutCommand("tag-toggle:keep", makeImage(["keep"]));
		const withoutTag = parseShortcutCommand("tag-toggle:addme", makeImage([]));
		expect(withTag.removeTags).toEqual(["keep"]);
		expect(withoutTag.addTags).toEqual(["addme"]);
	});

	it("ignores invalid tokens and keeps defaults", () => {
		const result = parseShortcutCommand("invalid-token");
		expect(result).toEqual({
			addTags: [],
			removeTags: [],
			toggleTags: [],
			moveNext: false,
			movePrev: false,
			isDeleted: false,
			sendToLtSlot: null,
		});
	});
});
