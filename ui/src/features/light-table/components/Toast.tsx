import type React from "react";
import { useLightTableStore } from "../store";

import "./Toast.css";

/**
 * ライトテーブル用トーストコンポーネント。
 * store.toastMessage が非 null のときに表示される。
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
