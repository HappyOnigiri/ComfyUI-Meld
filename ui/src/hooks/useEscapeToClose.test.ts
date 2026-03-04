import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useEscapeToClose } from "./useEscapeToClose";

describe("useEscapeToClose", () => {
	it("calls onEscape when Escape key is pressed", () => {
		const onEscape = vi.fn();
		renderHook(() => useEscapeToClose({ onEscape }));

		const event = new KeyboardEvent("keydown", { key: "Escape" });
		window.dispatchEvent(event);

		expect(onEscape).toHaveBeenCalledTimes(1);
	});

	it("does not call onEscape when other key is pressed", () => {
		const onEscape = vi.fn();
		renderHook(() => useEscapeToClose({ onEscape }));

		const event = new KeyboardEvent("keydown", { key: "Enter" });
		window.dispatchEvent(event);

		expect(onEscape).not.toHaveBeenCalled();
	});

	it("does not call onEscape if not enabled", () => {
		const onEscape = vi.fn();
		renderHook(() => useEscapeToClose({ onEscape, enabled: false }));

		const event = new KeyboardEvent("keydown", { key: "Escape" });
		window.dispatchEvent(event);

		expect(onEscape).not.toHaveBeenCalled();
	});
});
