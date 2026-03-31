import { useCallback } from "react";
import { useKeydownCapture } from "../../../../hooks/useKeydownCapture";
import { viewerShortcutKey } from "../../../../settings";
import type { GalleryAction, GalleryState, Settings } from "../../../../types";
import { stopKeyboardEvent } from "../../../../utils/keyboard";

interface UseViewerKeyboardShortcutsParams {
	viewerImageId: number | null;
	activeModalType: GalleryState["activeModal"]["type"];
	viewScope: GalleryState["viewScope"];
	settings: Settings;
	dispatch: React.Dispatch<GalleryAction>;
	isMountedRef: React.MutableRefObject<boolean>;
	toggleFullscreen: (e?: React.MouseEvent | KeyboardEvent) => void;
	handleNext: () => void;
	handlePrevious: () => void;
	handleDelete: () => void;
	handleUndo: () => Promise<void>;
	handleTagEditAction: () => void;
	handleRestoreAction: () => Promise<void>;
	executeCommand: (command: string) => Promise<void>;
	setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
	setActiveShortcutKey: React.Dispatch<React.SetStateAction<string | null>>;
}

export const useViewerKeyboardShortcuts = ({
	viewerImageId,
	activeModalType,
	viewScope,
	settings,
	dispatch,
	isMountedRef,
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
}: UseViewerKeyboardShortcutsParams) => {
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (!(e.target instanceof HTMLElement)) {
				return;
			}
			const target = e.target;
			const isTargetInput =
				target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;

			if (isTargetInput && e.key !== "Escape") {
				if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
					e.preventDefault();
				}
				return;
			}

			if (viewerImageId === null) return;

			// Preserve existing behavior: skip viewer shortcuts while modal is open.
			if (activeModalType !== "none") {
				return;
			}

			const isDeleteKey = e.key === "Delete" || e.key === "Backspace";
			const isNavigationKey =
				e.key === "ArrowRight" ||
				e.key === "ArrowLeft" ||
				e.key === "ArrowDown" ||
				e.key === "ArrowUp";
			const isToggleKey = ["f", "F", "i", "I", "t", "T", "r", "R", "Enter"].includes(e.key);
			const isEscapeKey = e.key === "Escape";
			const isUndoKey =
				(e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z" || e.code === "KeyZ");
			const isShortcutKey =
				/^[0-9]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey && e.code !== "KeyZ";

			if (
				isDeleteKey ||
				isNavigationKey ||
				isToggleKey ||
				isEscapeKey ||
				isUndoKey ||
				isShortcutKey
			) {
				if (!isTargetInput || isEscapeKey) {
					stopKeyboardEvent(e);
				} else {
					return;
				}
			} else {
				return;
			}

			if (isEscapeKey) {
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					dispatch({ type: "CLOSE_VIEWER" });
				}
			} else if (isNavigationKey) {
				if (e.key === "ArrowRight" || e.key === "ArrowDown") {
					handleNext();
				} else {
					handlePrevious();
				}
			} else if (isToggleKey && (e.key === "f" || e.key === "F" || e.key === "Enter")) {
				toggleFullscreen(e);
			} else if (isToggleKey && (e.key === "i" || e.key === "I")) {
				setShowDetails((prev) => !prev);
			} else if (isToggleKey && (e.key === "t" || e.key === "T")) {
				handleTagEditAction();
			} else if (isToggleKey && (e.key === "r" || e.key === "R") && viewScope === "trash") {
				void handleRestoreAction();
			} else if (isDeleteKey) {
				handleDelete();
			} else if (isUndoKey) {
				void handleUndo();
			} else if (isShortcutKey && !isTargetInput) {
				const key = viewerShortcutKey(e.key);
				const command = settings[key];
				if (typeof command === "string" && command) {
					setActiveShortcutKey(e.key);
					setTimeout(() => {
						if (isMountedRef.current) {
							setActiveShortcutKey(null);
						}
					}, 500);
					void executeCommand(command);
				}
			}
		},
		[
			activeModalType,
			dispatch,
			executeCommand,
			handleDelete,
			handleNext,
			handlePrevious,
			handleRestoreAction,
			handleTagEditAction,
			handleUndo,
			isMountedRef,
			setActiveShortcutKey,
			setShowDetails,
			settings,
			toggleFullscreen,
			viewScope,
			viewerImageId,
		],
	);

	useKeydownCapture({
		enabled: viewerImageId !== null,
		onKeyDown,
	});
};
