import { act, renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useViewerKeyboardShortcuts } from "./useViewerKeyboardShortcuts";

describe("useViewerKeyboardShortcuts", () => {
	it("handles keyboard events", () => {
		const toggleFullscreen = vi.fn();
		const handleNext = vi.fn();
		const handlePrevious = vi.fn();
		const handleDelete = vi.fn();
		const handleUndo = vi.fn();
		const handleTagEditAction = vi.fn();
		const handleRestoreAction = vi.fn();
		const executeCommand = vi.fn();
		const setShowDetails = vi.fn();
		const setActiveShortcutKey = vi.fn();
		const dispatch = vi.fn();

		renderHook(() =>
			useViewerKeyboardShortcuts({
				viewerImageId: 1,
				activeModalType: "none",
				viewScope: "default",
				settings: { "viewer.shortcut.1": "command" } as unknown as Record<string, unknown>,
				dispatch,
				isMountedRef: { current: true },
				toggleFullscreen,
				handleNext,
				handlePrevious,
				handleDelete,
				handleUndo,
				handleTagEditAction,
				handleRestoreAction,
				executeCommand,
				setShowDetails,
				setActiveShortcutKey,
			}),
		);

		const fireKey = (key: string, ctrl = false) => {
			document.body.dispatchEvent(
				new KeyboardEvent("keydown", { key, bubbles: true, ctrlKey: ctrl }),
			);
		};

		act(() => {
			fireKey("Escape");
			fireKey("ArrowRight");
			fireKey("ArrowLeft");
			fireKey("f");
			fireKey("i");
			fireKey("t");
			fireKey("Delete");
			fireKey("z", true);
			fireKey("1");
		});

		expect(handleNext).toHaveBeenCalled();
		expect(handlePrevious).toHaveBeenCalled();
		expect(handleDelete).toHaveBeenCalled();
		expect(handleUndo).toHaveBeenCalled();
	});
});
