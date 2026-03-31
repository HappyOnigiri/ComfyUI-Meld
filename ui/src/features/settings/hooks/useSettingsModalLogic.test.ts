import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { Settings } from "../../../types";
import { useSettingsModalLogic } from "./useSettingsModalLogic";

const mockDispatch = vi.fn();
const mockUpdateSetting = vi.fn().mockResolvedValue(undefined);
const mockDatabaseManagement = {
	databases: [],
	activeDatabaseName: "default",
	databaseNameInput: "",
	setDatabaseNameInput: vi.fn(),
	isLoading: false,
	loadDatabases: vi.fn(),
	submitCreateDatabase: vi.fn(),
	confirmSwitchDatabase: vi.fn(),
	confirmDeleteDatabase: vi.fn(),
};

vi.mock("../../../store/GalleryContext", () => ({
	useGallery: () => ({
		state: {
			settings: {
				"gallery.initial_load_count": 100,
				"gallery.max_load_count": 10000,
				"gallery.lineage_max_depth": 5,
				"viewer.thumbnail_window_size": 15,
				"gallery.trash_retention_days": 30,
				"gallery.auto_link_phash_threshold": 92,
				"gallery.suggest_phash_threshold": 82,
				"viewer.details.max_positive_prompt_lines": 7,
				"viewer.details.max_negative_prompt_lines": 7,
				"viewer.details.core_prompt_count": 10,
				"fullscreen.details.max_positive_prompt_lines": 7,
				"fullscreen.details.max_negative_prompt_lines": 7,
				"fullscreen.details.core_prompt_count": 10,
				"sidebar.thumbnail_size": 100,
				"viewer.shortcut.1": "",
				"viewer.shortcut.2": "",
				"viewer.shortcut.3": "",
				"viewer.shortcut.4": "",
				"viewer.shortcut.5": "",
				"viewer.shortcut.6": "",
				"viewer.shortcut.7": "",
				"viewer.shortcut.8": "",
				"viewer.shortcut.9": "",
				"viewer.shortcut.0": "",
			} as unknown as Settings,
		},
		dispatch: mockDispatch,
		updateSetting: mockUpdateSetting,
	}),
}));

vi.mock("./useDatabaseManagement", () => ({
	useDatabaseManagement: () => mockDatabaseManagement,
}));

vi.mock("../api/settingsApi", () => ({
	clearThumbnailCache: vi.fn().mockResolvedValue({ ok: true, data: { deleted_count: 3 } }),
}));

describe("useSettingsModalLogic", () => {
	it("updates local settings and persists on close", async () => {
		const { result } = renderHook(() => useSettingsModalLogic());

		act(() => {
			result.current.handleToggle("search.show_all_keywords" as keyof Settings, false);
			result.current.handleNumberChange("gallery.initial_load_count", "250", 10, 300);
			result.current.handleResetShortcuts();
		});

		act(() => {
			result.current.handleNumberBlur({ key: "gallery.initial_load_count" });
		});

		expect(result.current.localSettings["gallery.initial_load_count"]).toBe(250);
		expect(result.current.initialLoadCountInput).toBe("250");
		expect(result.current.localSettings["viewer.shortcut.1"]).toBe("tag:keep next");
		expect(result.current.validateShortcut("tag:keep next")).toBe(true);

		await act(async () => {
			await result.current.handleClose();
		});

		expect(mockUpdateSetting).toHaveBeenCalled();
		expect(mockDispatch).toHaveBeenCalledWith({ type: "CLOSE_MODAL" });
	});

	it("opens confirmation for thumbnail cache and navigates trash view", async () => {
		const { result } = renderHook(() => useSettingsModalLogic());

		act(() => {
			result.current.handleViewTrash();
			result.current.handleClearThumbnailCache();
		});

		expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_VIEW_SCOPE", payload: "trash" });
		const openConfirmCall = mockDispatch.mock.calls.find(
			(call) => call[0]?.type === "OPEN_CONFIRM_MODAL",
		);
		expect(openConfirmCall).toBeTruthy();

		await act(async () => {
			await openConfirmCall?.[0]?.payload?.onConfirm?.();
		});

		expect(mockDispatch).toHaveBeenCalledWith({
			type: "SHOW_TOAST",
			payload: "Thumbnail cache cleared",
		});
	});
});
