import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { isEditableActiveElement, stopKeyboardEvent, stopReactKeyboardEvent } from "./keyboard";

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

	it("calls preventDefault and stop propagation methods for React event", () => {
		const preventDefault = vi.fn();
		const stopPropagation = vi.fn();
		const stopImmediatePropagation = vi.fn();
		const event = {
			preventDefault,
			stopPropagation,
			nativeEvent: { stopImmediatePropagation },
		} as unknown as React.KeyboardEvent;

		stopReactKeyboardEvent(event);

		expect(preventDefault).toHaveBeenCalledTimes(1);
		expect(stopPropagation).toHaveBeenCalledTimes(1);
		expect(stopImmediatePropagation).toHaveBeenCalledTimes(1);
	});
});

describe("isEditableActiveElement", () => {
	it("returns true when input is active", () => {
		const input = document.createElement("input");
		try {
			document.body.appendChild(input);
			input.focus();
			expect(isEditableActiveElement()).toBe(true);
		} finally {
			input.remove();
			if (document.activeElement instanceof HTMLElement) {
				document.activeElement.blur();
			}
			document.body.focus();
		}
	});

	it("returns false when non-editable element is active", () => {
		const button = document.createElement("button");
		try {
			document.body.appendChild(button);
			button.focus();
			expect(isEditableActiveElement()).toBe(false);
		} finally {
			button.remove();
			if (document.activeElement instanceof HTMLElement) {
				document.activeElement.blur();
			}
			document.body.focus();
		}
	});
});
