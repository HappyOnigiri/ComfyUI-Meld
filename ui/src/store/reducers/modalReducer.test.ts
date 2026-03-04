import { describe, expect, it } from "vitest";
import { initialState } from "../galleryReducer";
import { modalReducer } from "./modalReducer";

describe("modalReducer", () => {
	it("OPEN_MODAL sets activeModal", () => {
		const next = modalReducer(initialState, {
			type: "OPEN_MODAL",
			payload: { type: "settings" },
		});
		expect(next.activeModal).toEqual({ type: "settings" });
	});

	it("CLOSE_MODAL resets activeModal to none", () => {
		const state = { ...initialState, activeModal: { type: "settings" as const } };
		const next = modalReducer(state, { type: "CLOSE_MODAL" });
		expect(next.activeModal).toEqual({ type: "none" });
	});

	it("OPEN_VIEWER with initialMaskMode sets mask_editor modal", () => {
		const next = modalReducer(initialState, {
			type: "OPEN_VIEWER",
			payload: { id: 1, mode: "gallery", initialMaskMode: "run" },
		});
		expect(next.activeModal).toEqual({
			type: "mask_editor",
			imageId: 1,
			mode: "run",
		});
	});

	it("OPEN_VIEWER with boolean initialMaskMode sets mask_editor modal to run", () => {
		const next = modalReducer(initialState, {
			type: "OPEN_VIEWER",
			payload: { id: 1, mode: "gallery", initialMaskMode: true },
		});
		expect(next.activeModal).toEqual({
			type: "mask_editor",
			imageId: 1,
			mode: "run",
		});
	});

	it("OPEN_VIEWER with number payload does not change activeModal", () => {
		const next = modalReducer(initialState, {
			type: "OPEN_VIEWER",
			payload: 42,
		});
		// resolveInitialMaskMode returns false for number => state unchanged
		expect(next.activeModal).toEqual(initialState.activeModal);
	});

	it("OPEN_CONFIRM_MODAL sets confirmModal", () => {
		const payload = {
			message: "Delete?",
			onConfirm: () => {},
		};
		const next = modalReducer(initialState, {
			type: "OPEN_CONFIRM_MODAL",
			payload,
		});
		expect(next.confirmModal).toBe(payload);
	});

	it("CLOSE_CONFIRM_MODAL clears confirmModal", () => {
		const state = {
			...initialState,
			confirmModal: { message: "x", onConfirm: () => {} },
		};
		const next = modalReducer(state, { type: "CLOSE_CONFIRM_MODAL" });
		expect(next.confirmModal).toBeNull();
	});

	it("unknown action returns state unchanged", () => {
		const next = modalReducer(initialState, { type: "UNKNOWN_ACTION" } as never);
		expect(next).toBe(initialState);
	});
});
