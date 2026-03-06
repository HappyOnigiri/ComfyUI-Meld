import type React from "react";
import { useEffect, useRef } from "react";
import { useEscapeToClose } from "../../hooks/useEscapeToClose";

// Use the same CSS as the light-table's ConfirmModal for consistency
import "../../features/light-table/components/ConfirmModal.css";

interface ConfirmModalProps {
	/** Message to display in the modal */
	message: string;
	/** Callback when the confirm button is pressed */
	onConfirm: () => void;
	/** Callback when cancelled */
	onCancel: () => void;
}

/**
 * Global confirmation modal component.
 * Can be cancelled with ESC key or overlay click.
 * Implements focus management for accessibility.
 */
export const ConfirmModal: React.FC<ConfirmModalProps> = ({ message, onConfirm, onCancel }) => {
	const dialogRef = useRef<HTMLDivElement>(null);
	const previousFocusRef = useRef<Element | null>(null);
	useEscapeToClose({ onEscape: onCancel });

	// Focus management: Trap Tab, ESC handler, and focus restore
	useEffect(() => {
		// Save current focus to restore on unmount
		previousFocusRef.current = document.activeElement;

		// Focus the dialog or first button on mount
		if (dialogRef.current) {
			const focusableElements = dialogRef.current.querySelectorAll(
				'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
			);
			if (focusableElements.length > 0) {
				(focusableElements[0] as HTMLElement).focus();
			} else {
				dialogRef.current.focus();
			}
		}

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Tab") {
				if (!dialogRef.current) return;

				const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
				);
				if (focusableElements.length === 0) return;

				const firstElement = focusableElements.item(0);
				const lastElement = focusableElements.item(focusableElements.length - 1);
				if (!firstElement || !lastElement) return;

				if (e.shiftKey) {
					// Shift + Tab: Wrap from first to last
					if (document.activeElement === firstElement) {
						lastElement.focus();
						e.preventDefault();
					}
				} else {
					// Tab: Wrap from last to first
					if (document.activeElement === lastElement) {
						firstElement.focus();
						e.preventDefault();
					}
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => {
			document.removeEventListener("keydown", handleKeyDown, { capture: true });
			// Restore focus
			if (
				previousFocusRef.current &&
				typeof (previousFocusRef.current as HTMLElement).focus === "function"
			) {
				(previousFocusRef.current as HTMLElement).focus();
			}
		};
	}, []);

	return (
		<div
			className="meld-confirm-modal__overlay"
			onClick={onCancel}
			onKeyDown={(e) => {
				if (e.key === "Enter") onCancel();
			}}
			role="presentation"
		>
			<div
				ref={dialogRef}
				className="meld-confirm-modal__dialog"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="alertdialog"
				aria-modal="true"
				aria-label={message}
				tabIndex={-1}
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
