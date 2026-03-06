import type React from "react";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";

import "./ConfirmModal.css";

interface ConfirmModalProps {
	/** Message to display in the modal */
	message: string;
	/** Callback when the confirm button is pressed */
	onConfirm: () => void;
	/** Callback when cancelled */
	onCancel: () => void;
}

/**
 * Confirmation modal component for Light Table.
 * Can be cancelled with ESC key or overlay click.
 */
export const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, onConfirm, onCancel }) => {
	useEscapeToClose({ onEscape: onCancel });

	return (
		<div
			className="meld-confirm-modal__overlay"
			onClick={onCancel}
			onKeyDown={(e) => {
				if (e.key === "Escape") onCancel();
			}}
			role="presentation"
		>
			{/* Stop propagation for dialog clicks */}
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
						Cancel
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
