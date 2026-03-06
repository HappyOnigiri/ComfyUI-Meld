import { Check, Copy, X } from "lucide-react";
import type React from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";

interface PromptPopupProps {
	title: string;
	text: string;
	onClose: () => void;
	onCopy: (text: string) => void;
	isCopied: boolean;
}

export const PromptPopup: React.FC<PromptPopupProps> = ({
	title,
	text,
	onClose,
	onCopy,
	isCopied,
}) => {
	useEscapeToClose({ onEscape: onClose });

	return createPortal(
		<div
			className="meld-prompt-popup__overlay"
			onClick={(e) => {
				e.stopPropagation();
				onClose();
			}}
		>
			<div className="meld-prompt-popup__content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-prompt-popup__header">
					<span>{title}</span>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						{isCopied ? (
							<Check size={18} style={{ color: "var(--meld-success-color)" }} aria-hidden />
						) : (
							<span
								role="button"
								tabIndex={0}
								className="meld-prompt-popup__copy"
								aria-label="Copy prompt"
								onClick={() => onCopy(text)}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										onCopy(text);
									}
								}}
							>
								<Copy size={18} />
							</span>
						)}
						<span
							role="button"
							tabIndex={0}
							className="meld-prompt-popup__close"
							aria-label="Close"
							onClick={onClose}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === " ") {
									e.preventDefault();
									onClose();
								}
							}}
						>
							<X size={18} />
						</span>
					</div>
				</div>
				<div className="meld-prompt-popup__text">{text}</div>
			</div>
		</div>,
		document.body,
	);
};
