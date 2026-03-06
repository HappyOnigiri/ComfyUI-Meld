import { renderHook } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { useOnPointerDownOutside } from "./useOnPointerDownOutside";

describe("useOnPointerDownOutside", () => {
	it("calls onOutside when pointerdown occurs outside the refs", () => {
		const onOutside = vi.fn();
		const ref = { current: document.createElement("div") } as React.RefObject<HTMLElement>;

		document.body.appendChild(ref.current!);

		renderHook(() =>
			useOnPointerDownOutside({
				enabled: true,
				insideRefs: [ref],
				onOutside,
			}),
		);

		const outsideElement = document.createElement("div");
		document.body.appendChild(outsideElement);

		// dispatch Event
		const event = new PointerEvent("pointerdown", {
			pointerType: "mouse",
			button: 0,
			isPrimary: true,
			bubbles: true,
		});
		outsideElement.dispatchEvent(event);

		expect(onOutside).toHaveBeenCalledTimes(1);

		// cleanup
		ref.current?.remove();
		outsideElement.remove();
	});

	it("does not call onOutside when pointerdown occurs inside the refs", () => {
		const onOutside = vi.fn();
		const ref = { current: document.createElement("div") } as React.RefObject<HTMLElement>;
		const insideElement = document.createElement("span");
		ref.current!.appendChild(insideElement);
		document.body.appendChild(ref.current!);

		renderHook(() =>
			useOnPointerDownOutside({
				enabled: true,
				insideRefs: [ref],
				onOutside,
			}),
		);

		const event = new PointerEvent("pointerdown", {
			pointerType: "mouse",
			button: 0,
			isPrimary: true,
			bubbles: true,
		});
		insideElement.dispatchEvent(event);

		expect(onOutside).not.toHaveBeenCalled();

		ref.current?.remove();
	});

	it("does not call onOutside when not enabled", () => {
		const onOutside = vi.fn();
		const ref = { current: document.createElement("div") } as React.RefObject<HTMLElement>;

		renderHook(() =>
			useOnPointerDownOutside({
				enabled: false,
				insideRefs: [ref],
				onOutside,
			}),
		);

		const event = new PointerEvent("pointerdown", {
			pointerType: "mouse",
			button: 0,
			isPrimary: true,
			bubbles: true,
		});
		document.body.dispatchEvent(event);

		expect(onOutside).not.toHaveBeenCalled();
	});
});
