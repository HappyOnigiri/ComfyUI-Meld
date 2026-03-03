import { StickyNote, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useGallery } from "../../../store/GalleryContext";
import { useImageActions } from "../../images/hooks/useImageActions";

interface NoteEditModalProps {
	imageId: number;
	initialNotes: string;
	onClose: () => void;
}

export const NoteEditModal: React.FC<NoteEditModalProps> = ({ imageId, initialNotes, onClose }) => {
	const { state, dispatch } = useGallery();
	const { handleUpdateUserNotes } = useImageActions(state, dispatch);
	const [notes, setNotes] = useState(initialNotes);
	const [isSaving, setIsSaving] = useState(false);
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const overlayMouseDownRef = useRef(false);

	const handleOverlayMouseDown = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	};

	const handleOverlayMouseUp = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget && overlayMouseDownRef.current) {
			onClose();
		}
		overlayMouseDownRef.current = false;
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.focus();
		}
	}, []);

	const handleSave = useCallback(async () => {
		setIsSaving(true);
		try {
			await handleUpdateUserNotes(imageId, notes);
			onClose();
		} catch (error) {
			console.error("Failed to update notes:", error);
			alert("Failed to update notes.");
		} finally {
			setIsSaving(false);
		}
	}, [handleUpdateUserNotes, imageId, notes, onClose]);

	useEffect(() => {
		const handleKeyDownCapture = (e: KeyboardEvent) => {
			if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
				const target = e.target as HTMLElement;
				if (target === textareaRef.current) {
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
					handleSave();
				}
			}
		};

		window.addEventListener("keydown", handleKeyDownCapture, { capture: true });
		return () => {
			window.removeEventListener("keydown", handleKeyDownCapture, {
				capture: true,
			});
		};
	}, [handleSave]);

	useEscapeToClose({ onEscape: onClose });

	return createPortal(
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<StickyNote size={18} />
						<h3 style={{ margin: 0 }}>Edit Notes</h3>
					</div>
					<button type="button" className="meld-modal-close" onClick={onClose}>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					<div className="meld-note-edit-section">
						<textarea
							ref={textareaRef}
							className="meld-image-card__notes-textarea"
							style={{
								width: "100%",
								minHeight: "200px",
								backgroundColor: "var(--meld-input-bg)",
								color: "var(--meld-input-text)",
								border: "1px solid var(--meld-border-color)",
								borderRadius: "4px",
								padding: "8px",
								fontSize: "0.9rem",
								resize: "vertical",
							}}
							placeholder="Add notes..."
							value={notes}
							onChange={(e) => setNotes(e.target.value)}
						/>
						<div
							style={{
								fontSize: "0.8rem",
								color: "var(--meld-text-secondary)",
								marginTop: "8px",
								textAlign: "right",
							}}
						>
							Press Ctrl+Enter or Cmd+Enter to save
						</div>
					</div>
				</div>

				<div className="meld-modal-footer">
					<button type="button" className="meld-btn meld-btn-secondary" onClick={onClose}>
						Cancel
					</button>
					<button
						type="button"
						className="meld-btn meld-btn-primary"
						onClick={handleSave}
						disabled={isSaving}
					>
						{isSaving ? "Saving..." : "Save Notes"}
					</button>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
