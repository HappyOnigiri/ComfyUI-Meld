import {
	ArrowDown,
	ArrowUp,
	ChevronLeft,
	ChevronRight,
	Info,
	LayoutGrid,
	Maximize,
	Minimize,
	RefreshCw,
	X,
} from "lucide-react";
import type React from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import type { GalleryAction, MeldImage } from "../types";

// Memoized Thumbnail item to prevent unnecessary re-renders when navigating images
const ThumbnailItem = memo(
	({
		thumb,
		viewerImageId,
		currentImage,
		dispatch,
	}: {
		thumb: MeldImage;
		viewerImageId: number | null;
		currentImage: MeldImage;
		dispatch: React.Dispatch<GalleryAction>;
	}) => {
		const isCurrent = thumb.id === viewerImageId;
		const isParent =
			typeof currentImage.parent_id === "number" &&
			currentImage.parent_id === thumb.id;
		const isChild =
			typeof thumb.parent_id === "number" &&
			thumb.parent_id === currentImage.id;

		const thumbSrc = `/api/view?filename=${encodeURIComponent(thumb.filename)}&type=${thumb.type || "output"}${
			thumb.subfolder ? `&subfolder=${encodeURIComponent(thumb.subfolder)}` : ""
		}`;

		return (
			<div className="meld-viewer-thumbnail-wrapper">
				<div
					className={`meld-viewer-thumbnail ${isCurrent ? "meld-viewer-thumbnail--active" : ""} ${isParent ? "meld-viewer-thumbnail--parent" : ""} ${isChild ? "meld-viewer-thumbnail--child" : ""}`}
					onClick={() =>
						dispatch({
							type: "OPEN_VIEWER",
							payload: { id: thumb.id, mode: "gallery" }, // Default to gallery mode when clicking a thumbnail
						})
					}
					title={thumb.filename}
				>
					<img src={thumbSrc} alt={thumb.filename} />
					{(isParent || isChild) && (
						<div
							className={`meld-viewer-thumbnail-relation-icon ${isParent ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`}
						>
							{isParent ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
						</div>
					)}
				</div>
			</div>
		);
	},
);

ThumbnailItem.displayName = "ThumbnailItem";

export const ImageViewer: React.FC = () => {
	const { state, dispatch, loadMoreImages } = useGallery();
	const { viewerImageId, images, viewerMode, lineageImages } = state;
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showDetails, setShowDetails] = useState(
		state.settings["viewer.show_details_by_default"],
	);
	const [showThumbnailsOverride, setShowThumbnailsOverride] = useState<
		boolean | null
	>(null);
	const showThumbnails =
		showThumbnailsOverride ?? state.settings["viewer.show_thumbnails"];
	const [isLoadingLineage, setIsLoadingLineage] = useState(false);
	const [isJumping, setIsJumping] = useState(false);
	const overlayRef = useRef<HTMLDivElement>(null);

	const currentThumbnails = useMemo(() => {
		return viewerMode === "lineage"
			? lineageImages
			: images.filter(
					(img) =>
						img.exists !== false &&
						!(state.settings["gallery.hide_parent_images"] && img.has_children),
				);
	}, [viewerMode, lineageImages, images, state.settings]);

	const currentIndex = useMemo(() => {
		if (viewerImageId === null) return -1;
		return currentThumbnails.findIndex((img) => img.id === viewerImageId);
	}, [currentThumbnails, viewerImageId]);

	// Windowed thumbnails: only render a subset around the current image for performance
	const windowedThumbnails = useMemo(() => {
		if (!showThumbnails || currentIndex === -1) return [];
		const windowSize = state.settings["viewer.thumbnail_window_size"]; // Total thumbnails to keep in DOM
		const halfWindow = Math.floor(windowSize / 2);
		let start = Math.max(0, currentIndex - halfWindow);
		const end = Math.min(currentThumbnails.length, start + windowSize);

		// Adjust start if we're near the end
		if (end === currentThumbnails.length) {
			start = Math.max(0, end - windowSize);
		}

		return currentThumbnails.slice(start, end).map((img, idx) => ({
			img,
			absIndex: start + idx,
		}));
	}, [
		currentThumbnails,
		currentIndex,
		state.settings["viewer.thumbnail_window_size"],
		showThumbnails,
	]);

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

	const handleNext = useCallback(() => {
		dispatch({ type: "NEXT_IMAGE", payload: { isFullscreen } });
	}, [dispatch, isFullscreen]);

	const handlePrevious = useCallback(async () => {
		const loopEnabled = isFullscreen
			? state.settings["fullscreen.loop"]
			: state.settings["viewer.loop"];

		if (
			currentIndex === 0 &&
			viewerMode === "gallery" &&
			state.pagination.hasMore &&
			!isJumping &&
			loopEnabled
		) {
			setIsJumping(true);
			try {
				// Calculate offset for the last page to jump to the very end
				const pageSize = state.pagination.limit;
				const total = state.pagination.total;
				const lastOffset = Math.max(0, total - pageSize);

				const result = await api.fetchImages(
					lastOffset,
					pageSize,
					state.searchQuery,
				);
				dispatch({ type: "APPEND_IMAGES", payload: result });

				// Open the very last image
				if (result.images.length > 0) {
					const lastImg = result.images[result.images.length - 1];
					dispatch({
						type: "OPEN_VIEWER",
						payload: { id: lastImg.id, mode: "gallery" },
					});
				}
			} catch (err) {
				console.error("Failed to jump to end:", err);
			} finally {
				setIsJumping(false);
			}
		} else {
			dispatch({ type: "PREVIOUS_IMAGE", payload: { isFullscreen } });
		}
	}, [
		currentIndex,
		viewerMode,
		state.pagination.hasMore,
		state.pagination.total,
		state.pagination.limit,
		state.searchQuery,
		state.settings,
		dispatch,
		isJumping,
		isFullscreen,
	]);

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
		currentIndex,
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
				handleNext();
			} else if (e.key === "ArrowLeft") {
				handlePrevious();
			} else if (e.key === "f" || e.key === "F") {
				toggleFullscreen(e);
			} else if (e.key === "i" || e.key === "I") {
				setShowDetails((prev) => !prev);
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
	}, [viewerImageId, dispatch, toggleFullscreen, handleNext, handlePrevious]);

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
		if (showThumbnails && viewerImageId !== null) {
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
	}, [viewerImageId, showThumbnails]);

	// Preload next and previous images
	useEffect(() => {
		if (viewerImageId === null || currentThumbnails.length === 0) return;

		const currentIndex = currentThumbnails.findIndex(
			(img) => img.id === viewerImageId,
		);
		if (currentIndex === -1) return;

		const getImgSrc = (img: MeldImage) => {
			return `/api/view?filename=${encodeURIComponent(img.filename)}&type=${img.type || "output"}${
				img.subfolder ? `&subfolder=${encodeURIComponent(img.subfolder)}` : ""
			}`;
		};

		// Preload more images ahead (1 next for decode, others just for cache)
		const indicesToPreload = [
			currentIndex + 1,
			currentIndex + 2,
			currentIndex - 1,
		];

		const timer = setTimeout(() => {
			for (const idx of indicesToPreload) {
				if (idx >= 0 && idx < currentThumbnails.length) {
					const img = currentThumbnails[idx];
					const preloader = new Image();
					preloader.src = getImgSrc(img);
				}
			}
		}, 150); // Wait for user to stop navigating before loading next images

		return () => clearTimeout(timer);
	}, [viewerImageId, currentThumbnails]);

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
				{((!isFullscreen && state.settings["viewer.show_icons"]) ||
					(isFullscreen && state.settings["fullscreen.show_icons"])) && (
					<div className="meld-viewer-actions">
						<button
							className={`meld-viewer-action-btn ${showThumbnails ? "meld-viewer-action-btn--active" : ""}`}
							onClick={() => setShowThumbnailsOverride(!showThumbnails)}
							type="button"
							title={showThumbnails ? "Hide Thumbnails" : "Show Thumbnails"}
						>
							<LayoutGrid size={20} />
						</button>
						<button
							className="meld-viewer-action-btn"
							onClick={() => setShowDetails(!showDetails)}
							type="button"
							title={showDetails ? "Hide Details (I)" : "Show Details (I)"}
						>
							<Info size={20} />
						</button>
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
				)}

				{((!isFullscreen && state.settings["viewer.show_icons"]) ||
					(isFullscreen && state.settings["fullscreen.show_icons"])) && (
					<button
						className="meld-viewer-nav meld-viewer-nav--prev"
						onClick={handlePrevious}
						type="button"
						disabled={isJumping}
					>
						<ChevronLeft size={32} />
					</button>
				)}

				<div className="meld-viewer-image-container">
					{isJumping && (
						<div className="meld-viewer-loading-overlay">
							<RefreshCw className="animate-spin" size={48} />
						</div>
					)}
					<img
						src={imgSrc}
						alt={image.filename}
						className={`meld-viewer-image ${isJumping ? "meld-viewer-image--loading" : ""}`}
						// @ts-expect-error - fetchpriority is a valid but sometimes untyped attribute
						fetchpriority="high"
					/>
				</div>

				{((!isFullscreen && state.settings["viewer.show_icons"]) ||
					(isFullscreen && state.settings["fullscreen.show_icons"])) && (
					<button
						className="meld-viewer-nav meld-viewer-nav--next"
						onClick={handleNext}
						type="button"
					>
						<ChevronRight size={32} />
					</button>
				)}

				{!isFullscreen && showDetails && (
					<div className="meld-viewer-details-overlay">
						{state.settings["viewer.details.show_filename"] && (
							<div className="meld-viewer-details-item">
								<div className="meld-viewer-details-label">Filename</div>
								<div className="meld-viewer-details-value">
									{image.filename}
								</div>
							</div>
						)}

						{state.settings["viewer.details.show_dimensions"] &&
							image.width &&
							image.height && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Dimensions</div>
									<div className="meld-viewer-details-value">
										{image.width} x {image.height} px
									</div>
								</div>
							)}

						{state.settings["viewer.details.show_created_at"] && (
							<div className="meld-viewer-details-item">
								<div className="meld-viewer-details-label">Created At</div>
								<div className="meld-viewer-details-value">
									{new Date(image.created_at * 1000).toLocaleString()}
								</div>
							</div>
						)}

						{state.settings["viewer.details.show_model_name"] &&
							image.model_name && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Model</div>
									<div className="meld-viewer-details-value">
										{image.model_name}
									</div>
								</div>
							)}

						{state.settings["viewer.details.show_positive_prompt"] &&
							(image.positive_prompt || image.positive) && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Positive</div>
									<div
										className="meld-viewer-details-value meld-viewer-details-value--prompt"
										style={
											{
												"--meld-prompt-max-lines":
													state.settings[
														"viewer.details.max_positive_prompt_lines"
													],
											} as React.CSSProperties
										}
									>
										{image.positive_prompt || image.positive}
									</div>
								</div>
							)}

						{state.settings["viewer.details.show_negative_prompt"] &&
							(image.negative_prompt || image.negative) && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Negative</div>
									<div
										className="meld-viewer-details-value meld-viewer-details-value--prompt"
										style={
											{
												"--meld-prompt-max-lines":
													state.settings[
														"viewer.details.max_negative_prompt_lines"
													],
											} as React.CSSProperties
										}
									>
										{image.negative_prompt || image.negative}
									</div>
								</div>
							)}

						{state.settings["viewer.details.show_tags"] &&
							image.tags &&
							image.tags.length > 0 && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Tags</div>
									<div className="meld-viewer-details-tags">
										{image.tags.map((tag) => (
											<span key={tag} className="meld-viewer-details-tag">
												{tag}
											</span>
										))}
									</div>
								</div>
							)}
					</div>
				)}

				{!isFullscreen &&
					showThumbnails &&
					state.settings["viewer.thumbnail_window_size"] > 1 && (
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
									windowedThumbnails.map(({ img }) => (
										<ThumbnailItem
											key={img.id}
											thumb={img}
											viewerImageId={viewerImageId}
											currentImage={image}
											dispatch={dispatch}
										/>
									))
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
