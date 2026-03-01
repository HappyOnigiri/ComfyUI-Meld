import type React from "react";
import { useEffect } from "react";
import { useGallery } from "../../store/GalleryContext";

import "../../features/light-table/components/Toast.css";

/**
 * Global Toast component.
 * Automatically hides after a delay.
 */
export const Toast: React.FC = () => {
	const { state, dispatch } = useGallery();
	const toastMessage = state.toastMessage;

	useEffect(() => {
		if (toastMessage) {
			const timer = setTimeout(() => {
				dispatch({ type: "HIDE_TOAST" });
			}, 3000); // Hide after 3 seconds (animation in Toast.css handles fade out)
			return () => clearTimeout(timer);
		}
	}, [toastMessage, dispatch]);

	if (!toastMessage) return null;

	return (
		<div className="meld-toast" role="status" aria-live="polite">
			{toastMessage}
		</div>
	);
};
