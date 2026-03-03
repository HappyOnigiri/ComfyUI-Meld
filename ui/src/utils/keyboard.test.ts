import { describe, expect, it, vi } from "vitest";
import { isEditableActiveElement, stopKeyboardEvent } from "./keyboard";

describe("stopKeyboardEvent", () => {
	it("calls preventDefault and stop propagation methods", () => {
		const preventDefault = vi.fn();
		const stopPropagation = vi.fn();
		const stopImmediatePropagation = vi.fn();
		const event = {
			preventDefault,
			stopPropagation,
			stopImmediatePropagation,
		} as unknown as KeyboardEvent;

		stopKeyboardEvent(event);

		expect(preventDefault).toHaveBeenCalledTimes(1);
		expect(stopPropagation).toHaveBeenCalledTimes(1);
		expect(stopImmediatePropagation).toHaveBeenCalledTimes(1);
	});
});

describe("isEditableActiveElement", () => {
	it("returns true when input is active", () => {
		const input = document.createElement("input");
		document.body.appendChild(input);
		input.focus();
		expect(isEditableActiveElement()).toBe(true);
		input.remove();
	});

	it("returns false when non-editable element is active", () => {
		const button = document.createElement("button");
		document.body.appendChild(button);
		button.focus();
		expect(isEditableActiveElement()).toBe(false);
		button.remove();
	});
});
