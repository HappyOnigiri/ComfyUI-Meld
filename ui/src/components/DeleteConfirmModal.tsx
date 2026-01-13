import { AlertTriangle, Trash2, X } from "lucide-react";
import type React from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";

interface DeleteConfirmModalProps {
	imageIds: number[];
	hasLineage: boolean;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
	imageIds,
	hasLineage,
}) => {
	const { dispatch, refreshImages } = useGallery();

	const handleClose = () => {
		dispatch({ type: "CLOSE_MODAL" });
	};

	const handleDeleteSelected = async () => {
		try {
			dispatch({ type: "SET_LOADING", payload: true });
			await api.deleteImages(imageIds, true);
			dispatch({ type: "CLEAR_SELECTION" });
			dispatch({ type: "CLOSE_MODAL" });
			await refreshImages();
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
			dispatch({ type: "SET_LOADING", payload: false });
		}
	};

	const handleDeleteAllInLineage = async () => {
		try {
			dispatch({ type: "SET_LOADING", payload: true });

			const allIdsToDelete = new Set<number>(imageIds);

			// Fetch lineage for each selected image to find all related images
			for (const id of imageIds) {
				const lineage = await api.fetchLineage(id);
				for (const img of lineage) {
					allIdsToDelete.add(img.id);
				}
			}

			await api.deleteImages(Array.from(allIdsToDelete), true);
			dispatch({ type: "CLEAR_SELECTION" });
			dispatch({ type: "CLOSE_MODAL" });
			await refreshImages();
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
			dispatch({ type: "SET_LOADING", payload: false });
		}
	};

	return createPortal(
		<div className="meld-modal-overlay" onClick={handleClose}>
			<div
				className="meld-modal-content meld-modal-content--small"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<Trash2 size={20} color="var(--meld-danger-color)" />
						Confirm Deletion
					</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={handleClose}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					<div
						style={{
							padding: "10px 0",
							display: "flex",
							flexDirection: "column",
							gap: "15px",
						}}
					>
						<p>
							Are you sure you want to delete <strong>{imageIds.length}</strong>{" "}
							selected items?
						</p>

						<div
							style={{
								padding: "12px",
								backgroundColor: "var(--comfy-input-bg, rgba(255, 0, 0, 0.1))",
								border: "1px solid var(--meld-danger-color)",
								borderRadius: "4px",
								display: "flex",
								gap: "10px",
							}}
						>
							<AlertTriangle
								size={20}
								style={{ color: "var(--meld-danger-color)", flexShrink: 0 }}
							/>
							<div style={{ fontSize: "13px" }}>
								<strong>WARNING:</strong> Physical files will be permanently
								deleted. This operation cannot be undone.
							</div>
						</div>

						{hasLineage && (
							<div
								style={{
									padding: "12px",
									backgroundColor:
										"var(--comfy-input-bg-active, rgba(0, 150, 255, 0.1))",
									border: "1px solid var(--meld-accent-color)",
									borderRadius: "4px",
									fontSize: "13px",
								}}
							>
								Selected images include items with a <strong>Source</strong> or
								descendants. You can choose to delete just the selected items or
								all related items in their lineage.
							</div>
						)}
					</div>
				</div>

				<div className="meld-modal-footer">
					<button
						type="button"
						className="meld-btn meld-btn-secondary"
						onClick={handleClose}
					>
						Cancel
					</button>

					<div style={{ display: "flex", gap: "10px" }}>
						<button
							type="button"
							className="meld-btn meld-btn-danger"
							onClick={handleDeleteSelected}
						>
							Delete Selected
						</button>

						{hasLineage && (
							<button
								type="button"
								className="meld-btn meld-btn-danger"
								title="Delete all images in the lineage (Source + all descendants)"
								onClick={handleDeleteAllInLineage}
							>
								Delete All Related
							</button>
						)}
					</div>
				</div>
			</div>
		</div>,
		document.body,
	);
};
