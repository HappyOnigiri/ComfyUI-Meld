import type React from "react";
import { useLightTableStore } from "../store";

import "../../../components/shared/Toast.css";

/**
 * Toast component for Light Table.
 * Displayed when store.toastMessage is non-null.
 */
export const Toast: React.FC = () => {
	const toastMessage = useLightTableStore((s) => s.toastMessage);
	const toastType = useLightTableStore((s) => s.toastType);

	if (!toastMessage) return null;

	return (
		<div
			className={`meld-toast ${toastType === "error" ? "meld-toast--error" : ""}`}
			role="status"
			aria-live="polite"
		>
			{toastMessage}
		</div>
	);
};
