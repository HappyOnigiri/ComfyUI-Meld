import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useEscapeToClose } from "../../hooks/useEscapeToClose";
import type { ConfirmModalConfig } from "../../types";

// Use the same CSS as the light-table's ConfirmModal for consistency
import "../../features/light-table/components/ConfirmModal.css";

/**
 * Global confirmation modal component.
 * Can be cancelled with ESC key or overlay click.
 * Implements focus management for accessibility.
 */
export const ConfirmModal: React.FC<ConfirmModalConfig> = ({
	title,
	message,
	details,
	confirmLabel = "OK",
	cancelLabel = "Cancel",
	danger = false,
	requiredText,
	requiredTextLabel,
	onConfirm,
	onCancel,
}) => {
	const dialogRef = useRef<HTMLDivElement>(null);
	const previousFocusRef = useRef<Element | null>(null);
	const [inputValue, setInputValue] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	useEscapeToClose({ onEscape: isSubmitting ? () => {} : (onCancel ?? (() => {})) });

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

	const isConfirmDisabled = isSubmitting || (!!requiredText && inputValue !== requiredText);

	return (
		<div
			className="meld-confirm-modal__overlay"
			onClick={() => {
				if (!isSubmitting) {
					onCancel?.();
				}
			}}
			onKeyDown={(e) => {
				if (e.key === "Enter" && !isSubmitting) onCancel?.();
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
				aria-label={title || message}
				tabIndex={-1}
			>
				{title && <h3 className="meld-confirm-modal__title">{title}</h3>}
				<p className="meld-confirm-modal__message">{message}</p>
				{details && details.length > 0 && (
					<ul className="meld-confirm-modal__details">
						{details.map((detail) => (
							<li key={detail}>{detail}</li>
						))}
					</ul>
				)}
				{requiredText && (
					<div className="meld-confirm-modal__input-group">
						<label className="meld-confirm-modal__input-label" htmlFor="meld-confirm-modal-input">
							{requiredTextLabel || `Type "${requiredText}" to confirm.`}
						</label>
						<input
							id="meld-confirm-modal-input"
							type="text"
							className="meld-confirm-modal__input"
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							autoComplete="off"
							autoCapitalize="off"
							spellCheck={false}
							disabled={isSubmitting}
						/>
					</div>
				)}
				<div className="meld-confirm-modal__actions">
					<button
						type="button"
						className="meld-confirm-modal__btn meld-confirm-modal__btn--cancel"
						onClick={() => onCancel?.()}
						disabled={isSubmitting}
					>
						{cancelLabel}
					</button>
					<button
						type="button"
						className={`meld-confirm-modal__btn meld-confirm-modal__btn--confirm${
							danger ? " meld-confirm-modal__btn--danger" : ""
						}`}
						onClick={async () => {
							if (isConfirmDisabled) {
								return;
							}
							setIsSubmitting(true);
							try {
								await Promise.resolve(onConfirm(inputValue));
							} catch {
								// The caller handles error reporting.
							} finally {
								setIsSubmitting(false);
							}
						}}
						disabled={isConfirmDisabled}
					>
						{confirmLabel}
					</button>
				</div>
			</div>
		</div>
	);
};
