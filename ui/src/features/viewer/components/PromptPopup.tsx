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
							<Check size={18} style={{ color: "var(--meld-success-color)" }} />
						) : (
							<Copy className="meld-prompt-popup__copy" size={18} onClick={() => onCopy(text)} />
						)}
						<X className="meld-prompt-popup__close" size={18} onClick={onClose} />
					</div>
				</div>
				<div className="meld-prompt-popup__text">{text}</div>
			</div>
		</div>,
		document.body,
	);
};
