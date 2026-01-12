import {
	ArrowDown,
	ArrowUp,
	ChevronLeft,
	ChevronRight,
	Maximize,
	Minimize,
	RefreshCw,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";

export const ImageViewer: React.FC = () => {
	const { state, dispatch, loadMoreImages } = useGallery();
	const { viewerImageId, images, viewerMode, lineageImages } = state;
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isLoadingLineage, setIsLoadingLineage] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

	const currentThumbnails =
		viewerMode === "lineage"
			? lineageImages
			: images.filter(
					(img) =>
						img.exists !== false &&
						!(state.settings["gallery.hide_parent_images"] && img.has_children),
				);

	const image = (
		viewerMode === "lineage" && lineageImages.length > 0
			? lineageImages
			: images
	).find((img) => img.id === viewerImageId);

	const toggleFullscreen = useCallback(
		(e?: React.MouseEvent | KeyboardEvent) => {
			if (e && "stopPropagation" in e) {
				e.stopPropagation();
			}

			const element = overlayRef.current;
			if (!element) return;

			if (!document.fullscreenElement) {
				element.requestFullscreen().catch((err) => {
					console.error(
						`Error attempting to enable full-screen mode: ${err.message}`,
					);
				});
			} else {
				document.exitFullscreen();
			}
		},
		[],
	);

	// Load more images if we are near the end of the current list in gallery mode
	useEffect(() => {
		if (
			viewerMode !== "gallery" ||
			viewerImageId === null ||
			state.isLoading ||
			!state.pagination.hasMore
		) {
			return;
		}

		const currentIndex = currentThumbnails.findIndex(
			(img) => img.id === viewerImageId,
		);
		if (currentIndex === -1) return;

		// Trigger load more when 15 images from the end
		if (currentIndex >= currentThumbnails.length - 15) {
			loadMoreImages();
		}
	}, [
		viewerImageId,
		currentThumbnails.length,
		viewerMode,
		state.isLoading,
		state.pagination.hasMore,
		loadMoreImages,
		currentThumbnails,
	]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (viewerImageId === null) return;

			if (e.key === "Escape") {
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					dispatch({ type: "CLOSE_VIEWER" });
				}
			} else if (e.key === "ArrowRight") {
				dispatch({ type: "NEXT_IMAGE" });
			} else if (e.key === "ArrowLeft") {
				dispatch({ type: "PREVIOUS_IMAGE" });
			} else if (e.key === "f" || e.key === "F") {
				toggleFullscreen(e);
			}
		};

		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};

		window.addEventListener("keydown", handleKeyDown);
		document.addEventListener("fullscreenchange", handleFullscreenChange);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, [viewerImageId, dispatch, toggleFullscreen]);

	// Fetch lineage if needed
	useEffect(() => {
		if (
			viewerMode === "lineage" &&
			viewerImageId !== null &&
			lineageImages.length === 0
		) {
			setIsLoadingLineage(true);
			api
				.fetchLineage(viewerImageId)
				.then((results) => {
					dispatch({ type: "SET_LINEAGE", payload: results });
				})
				.catch((err) => {
					console.error("Failed to fetch lineage:", err);
				})
				.finally(() => {
					setIsLoadingLineage(false);
				});
		}
	}, [viewerMode, viewerImageId, lineageImages.length, dispatch]);

	// Cleanup: Exit fullscreen when closing viewer
	useEffect(() => {
		return () => {
			if (document.fullscreenElement) {
				document.exitFullscreen().catch(() => {});
			}
		};
	}, []);

	// Scroll active thumbnail into view
	useEffect(() => {
		if (viewerImageId !== null) {
			const activeThumb = document.querySelector(
				".meld-viewer-thumbnail--active",
			);
			if (activeThumb) {
				activeThumb.scrollIntoView({
					behavior: "auto",
					block: "nearest",
					inline: "center",
				});
			}
		}
	}, [viewerImageId]);

	if (!image) return null;

	const imgSrc = `/api/view?filename=${encodeURIComponent(image.filename)}&type=${image.type || "output"}${
		image.subfolder ? `&subfolder=${encodeURIComponent(image.subfolder)}` : ""
	}`;

	return createPortal(
		<div
			ref={overlayRef}
			className="meld-viewer-overlay"
			style={{ background: "rgba(0, 0, 0, 0.85)" }} /* color-check-ignore */
			onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
			role="button"
			tabIndex={0}
		>
			<div
				className={`meld-viewer-content ${isFullscreen ? "meld-viewer-content--fullscreen" : ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				{((!isFullscreen && state.settings["viewer.show_filename"]) ||
					(isFullscreen && state.settings["fullscreen.show_filename"])) && (
					<div className="meld-viewer-info">
						<div className="meld-viewer-filename">{image.filename}</div>
					</div>
				)}
				<div className="meld-viewer-actions">
					<button
						className="meld-viewer-action-btn"
						onClick={toggleFullscreen}
						type="button"
						title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
					>
						{isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
					</button>
					<button
						className="meld-viewer-action-btn meld-viewer-action-btn--close"
						onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
						type="button"
						title="Close (Esc)"
					>
						<X size={20} />
					</button>
				</div>

				<button
					className="meld-viewer-nav meld-viewer-nav--prev"
					onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}
					type="button"
				>
					<ChevronLeft size={32} />
				</button>

				<div className="meld-viewer-image-container">
					<img
						src={imgSrc}
						alt={image.filename}
						className="meld-viewer-image"
					/>
				</div>

				<button
					className="meld-viewer-nav meld-viewer-nav--next"
					onClick={() => dispatch({ type: "NEXT_IMAGE" })}
					type="button"
				>
					<ChevronRight size={32} />
				</button>

				{!isFullscreen && (
					<div className="meld-viewer-thumbnails-container">
						<div className="meld-viewer-thumbnails">
							{isLoadingLineage ? (
								<div
									style={{
										padding: "10px",
										color: "var(--meld-text-secondary)",
									}}
								>
									Loading lineage...
								</div>
							) : (
								currentThumbnails.map((thumb, index) => {
									const isCurrent = thumb.id === viewerImageId;
									const isParent =
										typeof image.parent_id === "number" &&
										image.parent_id === thumb.id;
									const isChild =
										typeof thumb.parent_id === "number" &&
										thumb.parent_id === image.id;

									const thumbSrc = `/api/view?filename=${encodeURIComponent(thumb.filename)}&type=${thumb.type || "output"}${
										thumb.subfolder
											? `&subfolder=${encodeURIComponent(thumb.subfolder)}`
											: ""
									}`;

									return (
										<div
											key={thumb.id}
											className="meld-viewer-thumbnail-wrapper"
										>
											{viewerMode === "lineage" && index > 0 && (
												<div className="meld-viewer-lineage-connector">
													<ChevronLeft size={16} />
												</div>
											)}
											<div
												className={`meld-viewer-thumbnail ${isCurrent ? "meld-viewer-thumbnail--active" : ""} ${isParent ? "meld-viewer-thumbnail--parent" : ""} ${isChild ? "meld-viewer-thumbnail--child" : ""}`}
												onClick={() =>
													dispatch({
														type: "OPEN_VIEWER",
														payload: { id: thumb.id, mode: viewerMode },
													})
												}
											>
												<img src={thumbSrc} alt={thumb.filename} />
												{(isParent || isChild) && (
													<div
														className={`meld-viewer-thumbnail-relation-icon ${isParent ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`}
													>
														{isParent ? (
															<ArrowUp size={12} />
														) : (
															<ArrowDown size={12} />
														)}
													</div>
												)}
												<div className="meld-viewer-thumbnail-label-v2">
													{isCurrent
														? "Current"
														: isParent
															? "Source"
															: isChild
																? "Derivative"
																: ""}
												</div>
											</div>
										</div>
									);
								})
							)}
							{viewerMode === "gallery" && state.isLoading && (
								<div className="meld-viewer-thumbnail meld-viewer-thumbnail--loading">
									<RefreshCw className="animate-spin" size={20} />
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>,
		document.body,
	);
};
