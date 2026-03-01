import { useEffect } from "react";

interface UseKeydownCaptureOptions {
	onKeyDown: (e: KeyboardEvent) => void;
	enabled?: boolean;
}

export const useKeydownCapture = ({
	onKeyDown,
	enabled = true,
}: UseKeydownCaptureOptions): void => {
	useEffect(() => {
		if (!enabled) {
			return;
		}

		window.addEventListener("keydown", onKeyDown, { capture: true });
		return () => {
			window.removeEventListener("keydown", onKeyDown, { capture: true });
		};
	}, [onKeyDown, enabled]);
};
