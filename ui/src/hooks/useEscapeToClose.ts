import { useEffect } from "react";

interface UseEscapeToCloseOptions {
	onEscape: () => void;
	enabled?: boolean;
	capture?: boolean;
}

/**
 * Hook to handle Escape key press to close modals.
 * Uses capture phase by default to ensure it works even when other handlers
 * (like the Viewer) might try to stop propagation.
 */
export const useEscapeToClose = ({
	onEscape,
	enabled = true,
	capture = true,
}: UseEscapeToCloseOptions) => {
	useEffect(() => {
		if (!enabled) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				// Implementation Requirement: Stop propagation and prevent default
				// to ensure the Escape key is handled exclusively by this modal.
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				onEscape();
			}
		};

		window.addEventListener("keydown", handleKeyDown, { capture });
		return () =>
			window.removeEventListener("keydown", handleKeyDown, { capture });
	}, [onEscape, enabled, capture]);
};
