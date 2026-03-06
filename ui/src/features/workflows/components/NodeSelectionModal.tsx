import { Play, X } from "lucide-react";
import type React from "react";
import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";

interface NodeSelectionModalProps {
	image: MeldImage;
	nodes: { id: string; type: string; title?: string }[];
	onSelect: (nodeId: string) => void;
}

export const NodeSelectionModal: React.FC<NodeSelectionModalProps> = ({
	image,
	nodes,
	onSelect,
}) => {
	const { dispatch } = useGallery();

	const handleClose = useCallback(() => {
		dispatch({ type: "CLOSE_MODAL" });
	}, [dispatch]);

	useEscapeToClose({ onEscape: handleClose });

	const overlayMouseDownRef = useRef(false);

	const handleOverlayMouseDown = useCallback((e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	}, []);

	const handleOverlayMouseUp = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === e.currentTarget && overlayMouseDownRef.current) {
				handleClose();
			}
			overlayMouseDownRef.current = false;
		},
		[handleClose],
	);

	return createPortal(
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
		>
			<div
				className="meld-modal-content meld-modal-content--small"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2>Select Target Node</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={handleClose}
						aria-label="Close"
					>
						<X size={20} aria-hidden />
					</button>
				</div>

				<div className="meld-modal-body">
					<div
						style={{
							marginBottom: "15px",
							fontSize: "14px",
							color: "var(--meld-text-secondary)",
						}}
					>
						Multiple loader nodes found in the current workflow. Select which one to use for{" "}
						<strong>{image.filename}</strong>:
					</div>

					<div className="meld-workflow-node-picker__list">
						{nodes.map((node) => (
							<button
								key={node.id}
								type="button"
								className="meld-workflow-node-item"
								onClick={() => {
									onSelect(node.id);
									handleClose();
								}}
							>
								<div className="meld-workflow-node-item__info">
									<span className="meld-workflow-node-item__title">{node.title || node.type}</span>
									<span className="meld-workflow-node-item__id">#{node.id}</span>
								</div>
								<Play size={12} />
							</button>
						))}
					</div>
				</div>

				<div className="meld-modal-footer">
					<button type="button" className="meld-btn meld-btn--secondary" onClick={handleClose}>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
