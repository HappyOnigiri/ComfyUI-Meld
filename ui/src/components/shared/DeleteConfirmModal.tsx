import { AlertTriangle, Trash2, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import * as imagesApi from "../../features/images/api/imagesApi";
import { useGallery } from "../../store/GalleryContext";
import type { MeldImage } from "../../types";

interface DeleteConfirmModalProps {
	imageIds: number[];
	hasLineage: boolean;
	isPermanent?: boolean;
	onSuccess?: (images: MeldImage[]) => void;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
	imageIds,
	hasLineage,
	isPermanent = false,
	onSuccess,
}) => {
	const { state, dispatch } = useGallery();

	// Track if component is mounted
	const isMounted = useRef(true);
	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	// Track current viewer state to prevent re-opening if closed during async operations
	const viewerImageIdRef = useRef(state.viewerImageId);
	useEffect(() => {
		viewerImageIdRef.current = state.viewerImageId;
	}, [state.viewerImageId]);

	const handleClose = useCallback(() => {
		dispatch({ type: "CLOSE_MODAL" });
	}, [dispatch]);

	const navigateViewerIfNeeded = useCallback(
		(idsToDelete: Set<number>) => {
			if (!isMounted.current) return;
			const currentViewerImageId = viewerImageIdRef.current;
			if (
				currentViewerImageId === null ||
				!idsToDelete.has(currentViewerImageId)
			) {
				return;
			}

			const currentList =
				state.viewerMode === "lineage" && state.lineageImages.length > 0
					? state.lineageImages
					: state.images.filter(
							(img) =>
								img.exists !== false &&
								!(
									state.settings["gallery.hide_parent_images"] &&
									img.has_children
								),
						);

			const currentIndex = currentList.findIndex(
				(img) => img.id === currentViewerImageId,
			);
			if (currentIndex === -1) return;

			// Find the next image that is NOT in the idsToDelete set
			let found = false;
			// Search forward first (without wrapping)
			for (let i = currentIndex + 1; i < currentList.length; i++) {
				if (!idsToDelete.has(currentList[i].id)) {
					dispatch({
						type: "OPEN_VIEWER",
						payload: { id: currentList[i].id, mode: state.viewerMode },
					});
					found = true;
					break;
				}
			}

			// If not found forward, search backward
			if (!found) {
				for (let i = currentIndex - 1; i >= 0; i--) {
					if (!idsToDelete.has(currentList[i].id)) {
						dispatch({
							type: "OPEN_VIEWER",
							payload: { id: currentList[i].id, mode: state.viewerMode },
						});
						found = true;
						break;
					}
				}
			}

			if (!found) {
				dispatch({ type: "CLOSE_VIEWER" });
			}
		},
		[
			state.viewerMode,
			state.lineageImages,
			state.images,
			state.settings,
			dispatch,
		],
	);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				handleClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleClose]);

	const handleDeleteSelected = async () => {
		try {
			dispatch({ type: "SET_LOADING", payload: true });

			const currentList =
				state.viewerMode === "lineage" && state.lineageImages.length > 0
					? state.lineageImages
					: state.images.filter(
							(img) =>
								img.exists !== false &&
								!(
									state.settings["gallery.hide_parent_images"] &&
									img.has_children
								),
						);

			const idsToDeleteSet = new Set(imageIds);
			const deletedImages = currentList.filter((img) =>
				idsToDeleteSet.has(img.id),
			);
			navigateViewerIfNeeded(idsToDeleteSet);

			await imagesApi.deleteImages(imageIds, isPermanent);
			if (!isMounted.current) return;

			if (!isPermanent && onSuccess) {
				onSuccess(deletedImages);
			}
			dispatch({ type: "REMOVE_IMAGES", payload: imageIds });
			dispatch({ type: "CLEAR_SELECTION" });
			dispatch({ type: "CLOSE_MODAL" });
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

			const currentList =
				state.viewerMode === "lineage" && state.lineageImages.length > 0
					? state.lineageImages
					: state.images.filter(
							(img) =>
								img.exists !== false &&
								!(
									state.settings["gallery.hide_parent_images"] &&
									img.has_children
								),
						);

			const allIdsToDelete = new Set<number>(imageIds);

			// Fetch lineage for each selected image to find all related images
			for (const id of imageIds) {
				const lineage = await imagesApi.fetchLineage(id);
				if (!isMounted.current) return;
				for (const img of lineage) {
					allIdsToDelete.add(img.id);
				}
			}

			const deletedImages = currentList.filter((img) =>
				allIdsToDelete.has(img.id),
			);
			navigateViewerIfNeeded(allIdsToDelete);

			await imagesApi.deleteImages(Array.from(allIdsToDelete), isPermanent);
			if (!isMounted.current) return;

			if (!isPermanent && onSuccess) {
				onSuccess(deletedImages);
			}
			dispatch({
				type: "REMOVE_IMAGES",
				payload: Array.from(allIdsToDelete),
			});
			dispatch({ type: "CLEAR_SELECTION" });
			dispatch({ type: "CLOSE_MODAL" });
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
						{isPermanent ? "Permanent Deletion" : "Move to Trash"}
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
							Are you sure you want to{" "}
							{isPermanent ? "permanently delete" : "move to trash"}{" "}
							<strong>{imageIds.length}</strong> selected items?
						</p>

						<div
							style={{
								padding: "12px",
								backgroundColor: "var(--comfy-input-bg, rgba(255, 0, 0, 0.1))",
								border: `1px solid ${isPermanent ? "var(--meld-danger-color)" : "var(--meld-accent-color)"}`,
								borderRadius: "4px",
								display: "flex",
								gap: "10px",
							}}
						>
							<AlertTriangle
								size={20}
								style={{
									color: isPermanent
										? "var(--meld-danger-color)"
										: "var(--meld-accent-color)",
									flexShrink: 0,
								}}
							/>
							<div style={{ fontSize: "13px" }}>
								{isPermanent ? (
									<>
										<strong>WARNING:</strong> Physical files will be permanently
										deleted from the trash bin. This operation cannot be undone.
									</>
								) : (
									<>
										<strong>INFO:</strong> Selected items will be moved to the
										trash bin. You can restore them later from the settings.
									</>
								)}
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
							{isPermanent ? "Delete Permanently" : "Move to Trash"}
						</button>

						{hasLineage && (
							<button
								type="button"
								className="meld-btn meld-btn-danger"
								title={
									isPermanent
										? "Permanently delete all images in the lineage"
										: "Move all images in the lineage to trash"
								}
								onClick={handleDeleteAllInLineage}
							>
								{isPermanent ? "Delete All Related" : "Move All Related"}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
