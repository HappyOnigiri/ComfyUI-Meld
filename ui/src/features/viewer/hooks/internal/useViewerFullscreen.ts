import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { logger } from "../../../../logger";
import type { Settings } from "../../../../types";

interface UseViewerFullscreenParams {
	overlayRef: React.MutableRefObject<HTMLDivElement | null>;
	settings: Settings;
	setShowDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useViewerFullscreen = ({
	overlayRef,
	settings,
	setShowDetails,
}: UseViewerFullscreenParams) => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	const toggleFullscreen = useCallback(
		(e?: React.MouseEvent | KeyboardEvent) => {
			if (e && typeof (e as unknown as Record<string, unknown>).stopPropagation === "function") {
				(e as unknown as Event).stopPropagation();
			}

			const element = overlayRef.current;
			if (!element) return;

			if (!document.fullscreenElement) {
				element.requestFullscreen().catch((err) => {
					logger.error(`Error attempting to enable full-screen mode: ${err.message}`);
				});
			} else {
				document.exitFullscreen();
			}
		},
		[overlayRef],
	);

	useEffect(() => {
		const handleFullscreenChange = () => {
			const isFull = !!document.fullscreenElement;
			setIsFullscreen(isFull);
			if (isFull) {
				setShowDetails(settings["fullscreen.show_details_by_default"]);
			} else {
				setShowDetails(settings["viewer.show_details_by_default"]);
			}
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);
		return () => {
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, [settings, setShowDetails]);

	return { isFullscreen, toggleFullscreen };
};
