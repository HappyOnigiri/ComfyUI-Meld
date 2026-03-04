import { describe, expect, it } from "vitest";
import { resolveInitialMaskMode } from "./viewerModalHelpers";

describe("resolveInitialMaskMode", () => {
	it("number payload => false", () => {
		expect(resolveInitialMaskMode(42)).toBe(false);
	});

	it("object without initialMaskMode => false", () => {
		expect(resolveInitialMaskMode({})).toBe(false);
	});

	it('initialMaskMode "apply" => "apply"', () => {
		expect(resolveInitialMaskMode({ initialMaskMode: "apply" })).toBe("apply");
	});

	it('initialMaskMode "run" => "run"', () => {
		expect(resolveInitialMaskMode({ initialMaskMode: "run" })).toBe("run");
	});

	it('initialMaskMode true => "run"', () => {
		expect(resolveInitialMaskMode({ initialMaskMode: true })).toBe("run");
	});

	it("initialMaskMode unknown string => false", () => {
		expect(resolveInitialMaskMode({ initialMaskMode: "unknown" })).toBe(false);
	});

	it("initialMaskMode false => false", () => {
		expect(resolveInitialMaskMode({ initialMaskMode: false })).toBe(false);
	});
});
