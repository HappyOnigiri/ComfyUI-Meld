import type React from "react";
import { useLightTableStore } from "../store";

import "./Toast.css";

/**
 * Toast component for Light Table.
 * Displayed when store.toastMessage is non-null.
 */
export const Toast: React.FC = () => {
	const toastMessage = useLightTableStore((s) => s.toastMessage);

	if (!toastMessage) return null;

	return (
		<div className="meld-toast" role="status" aria-live="polite">
			{toastMessage}
		</div>
	);
};
