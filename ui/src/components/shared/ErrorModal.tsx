import { AlertCircle, X } from "lucide-react";
import type React from "react";
import { useCallback } from "react";
import { useGallery } from "../../store/GalleryContext";
import { useEscapeToClose } from "../../hooks/useEscapeToClose";

interface ErrorModalProps {
	message: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ message }) => {
	const { dispatch } = useGallery();

	const handleClose = useCallback(() => {
		dispatch({ type: "CLOSE_MODAL" });
	}, [dispatch]);

	useEscapeToClose({ onEscape: handleClose });

	return (
		<div
			className="meld-modal-overlay"
			onClick={handleClose}
		>
			<div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<AlertCircle size={20} color="var(--meld-danger-color)" />
						<h2>Error</h2>
					</div>
					<button
						className="meld-modal-close"
						onClick={handleClose}
						type="button"
					>
						<X size={20} />
					</button>
				</div>
				<div className="meld-modal-body">
					<div
						style={{ padding: "20px 0", textAlign: "center", fontSize: "14px" }}
					>
						{message}
					</div>
				</div>
				<div className="meld-modal-footer">
					<button
						className="meld-btn meld-btn-primary"
						onClick={handleClose}
						type="button"
					>
						OK
					</button>
				</div>
			</div>
		</div>
	);
};
