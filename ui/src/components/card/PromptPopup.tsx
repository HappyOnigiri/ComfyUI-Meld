import { Check, Copy, X } from "lucide-react";
import type React from "react";
import { createPortal } from "react-dom";

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
	return createPortal(
		<div
			className="meld-prompt-popup-overlay"
			onClick={(e) => {
				e.stopPropagation();
				onClose();
			}}
		>
			<div
				className="meld-prompt-popup-content"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-prompt-popup-header">
					<span>{title}</span>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						{isCopied ? (
							<Check size={18} style={{ color: "var(--meld-success-color)" }} />
						) : (
							<Copy
								className="meld-prompt-popup-copy"
								size={18}
								onClick={() => onCopy(text)}
							/>
						)}
						<X
							className="meld-prompt-popup-close"
							size={18}
							onClick={onClose}
						/>
					</div>
				</div>
				<div className="meld-prompt-popup-text">{text}</div>
			</div>
		</div>,
		document.body,
	);
};
