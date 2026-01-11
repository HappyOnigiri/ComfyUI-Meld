import { ChevronLeft, ChevronRight, Maximize, Minimize, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";

export const ImageViewer: React.FC = () => {
	const { state, dispatch } = useGallery();
	const { viewerImageId, images, viewerMode, lineageImages } = state;
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isLoadingLineage, setIsLoadingLineage] = useState(false);

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
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen().catch((err) => {
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
					behavior: "smooth",
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

	const currentThumbnails = viewerMode === "lineage" ? lineageImages : images;

	return (
		<div
			className="meld-viewer-overlay"
			onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
			role="button"
			tabIndex={0}
		>
			<div
				className={`meld-viewer-content ${isFullscreen ? "meld-viewer-content--fullscreen" : ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-viewer-info">
					<div className="meld-viewer-filename">{image.filename}</div>
				</div>
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
								<div style={{ padding: "10px", color: "#888" }}>
									Loading lineage...
								</div>
							) : (
								currentThumbnails.map((thumb) => {
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
											className={`meld-viewer-thumbnail ${isCurrent ? "meld-viewer-thumbnail--active" : ""}`}
											onClick={() =>
												dispatch({
													type: "OPEN_VIEWER",
													payload: { id: thumb.id, mode: viewerMode },
												})
											}
										>
											<img src={thumbSrc} alt={thumb.filename} />
											{viewerMode === "lineage" && (
												<>
													{isParent && (
														<span className="meld-viewer-thumbnail-label meld-viewer-thumbnail-label--parent">
															Parent
														</span>
													)}
													{isChild && (
														<span className="meld-viewer-thumbnail-label meld-viewer-thumbnail-label--child">
															Child
														</span>
													)}
												</>
											)}
										</div>
									);
								})
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
