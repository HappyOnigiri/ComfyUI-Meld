import type React from "react";
import { useEffect } from "react";

import "./ConfirmModal.css";

interface ConfirmModalProps {
	/** モーダルに表示するメッセージ */
	message: string;
	/** 確認ボタンが押されたときのコールバック */
	onConfirm: () => void;
	/** キャンセルされたときのコールバック */
	onCancel: () => void;
}

/**
 * ライトテーブル用の確認モーダルコンポーネント。
 * ESC キーまたはオーバーレイクリックでキャンセルできる。
 */
export const ConfirmModal: React.FC<ConfirmModalProps> = ({
	message,
	onConfirm,
	onCancel,
}) => {
	// ESC キーでキャンセル
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onCancel();
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [onCancel]);

	return (
		<div
			className="meld-confirm-modal__overlay"
			onClick={onCancel}
			onKeyDown={(e) => {
				if (e.key === "Enter") onCancel();
			}}
			role="presentation"
		>
			{/* ダイアログ本体クリックはオーバーレイに伝播させない */}
			<div
				className="meld-confirm-modal__dialog"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="alertdialog"
				aria-modal="true"
				aria-label={message}
			>
				<p className="meld-confirm-modal__message">{message}</p>
				<div className="meld-confirm-modal__actions">
					<button
						type="button"
						className="meld-confirm-modal__btn meld-confirm-modal__btn--cancel"
						onClick={onCancel}
					>
						キャンセル
					</button>
					<button
						type="button"
						className="meld-confirm-modal__btn meld-confirm-modal__btn--confirm"
						onClick={onConfirm}
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};
