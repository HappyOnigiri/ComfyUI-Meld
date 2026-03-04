import { describe, expect, it } from "vitest";
import { initialState } from "../galleryReducer";
import { uiMetaReducer } from "./uiMetaReducer";

describe("uiMetaReducer", () => {
	it("SET_SCAN_STATUS merges scan status", () => {
		const next = uiMetaReducer(initialState, {
			type: "SET_SCAN_STATUS",
			payload: { isRunning: true, progress: { current: 5, total: 100 } },
		});
		expect(next.scanStatus.isRunning).toBe(true);
		expect(next.scanStatus.progress.current).toBe(5);
		// Unchanged fields preserved
		expect(next.scanStatus.isFinished).toBe(false);
	});

	it("SET_SETTINGS merges settings", () => {
		const next = uiMetaReducer(initialState, {
			type: "SET_SETTINGS",
			payload: { dev_mode: true },
		});
		expect(next.settings.dev_mode).toBe(true);
		// Unchanged settings preserved
		expect(next.settings["viewer.loop"]).toBe(true);
	});

	it("SET_SETTINGS updates pagination limit when initial_load_count changes", () => {
		const next = uiMetaReducer(initialState, {
			type: "SET_SETTINGS",
			payload: { "gallery.initial_load_count": 200 },
		});
		expect(next.pagination.limit).toBe(200);
	});

	it("SET_SEARCH_QUERY updates searchQuery", () => {
		const next = uiMetaReducer(initialState, {
			type: "SET_SEARCH_QUERY",
			payload: "hello",
		});
		expect(next.searchQuery).toBe("hello");
	});

	it("SHOW_TOAST sets toast message (string)", () => {
		const next = uiMetaReducer(initialState, {
			type: "SHOW_TOAST",
			payload: "Success!",
		});
		expect(next.toastMessage).toBe("Success!");
		expect(next.toastType).toBe("info");
	});

	it("SHOW_TOAST sets toast with type (object)", () => {
		const next = uiMetaReducer(initialState, {
			type: "SHOW_TOAST",
			payload: { message: "Error!", type: "error" },
		});
		expect(next.toastMessage).toBe("Error!");
		expect(next.toastType).toBe("error");
	});

	it("HIDE_TOAST clears toast message", () => {
		const state = { ...initialState, toastMessage: "old" };
		const next = uiMetaReducer(state, { type: "HIDE_TOAST" });
		expect(next.toastMessage).toBeNull();
	});

	it("unknown action returns state unchanged", () => {
		const next = uiMetaReducer(initialState, { type: "UNKNOWN" } as never);
		expect(next).toBe(initialState);
	});
});
