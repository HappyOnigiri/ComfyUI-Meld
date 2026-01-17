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
	Tag,
	X,
} from "lucide-react";
import type React from "react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import type { GalleryAction, MeldImage, Settings } from "../types";
import { getImageViewUrl } from "../utils/url";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { ImportModal } from "./ImportModal";
import { ParentSelectionModal } from "./ParentSelectionModal";
import { SettingsModal } from "./SettingsModal";
import { TagEditModal } from "./TagEditModal";

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

		const thumbSrc = getImageViewUrl(thumb);

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
	const { state, dispatch, loadMoreImages, fetchFullImageDetails } =
		useGallery();
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
	const [lastDeletedImages, setLastDeletedImages] = useState<
		MeldImage[] | null
	>(null);
	const [lastShortcutAction, setLastShortcutAction] = useState<{
		type: "tags";
		imageId: number;
		addTags: string[];
		removeTags: string[];
	} | null>(null);
	const [activeShortcutKey, setActiveShortcutKey] = useState<string | null>(
		null,
	);
	const overlayRef = useRef<HTMLDivElement>(null);

	// Track if component is mounted to prevent state updates after unmount
	const isMounted = useRef(true);
	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	// Track current viewer state to prevent re-opening if closed during async operations
	const viewerImageIdRef = useRef(viewerImageId);
	useEffect(() => {
		viewerImageIdRef.current = viewerImageId;
	}, [viewerImageId]);

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

	const image = useMemo(() => {
		return (
			viewerMode === "lineage" && lineageImages.length > 0
				? lineageImages
				: images
		).find((img) => img.id === viewerImageId);
	}, [viewerMode, lineageImages, images, viewerImageId]);

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

	const handleDelete = useCallback(
		async (forceNoConfirm = false) => {
			if (!image) return;

			const deleteMode = isFullscreen
				? state.settings["fullscreen.delete_mode"]
				: state.settings["viewer.delete_mode"];

			if (!forceNoConfirm && deleteMode === "confirm") {
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "delete_confirm",
						imageIds: [image.id],
						hasLineage: !!(image.parent_id || image.has_children),
						isPermanent: state.viewScope === "trash",
					},
				});
				return;
			}

			try {
				const isPermanent = state.viewScope === "trash";
				const idsToDelete = new Set<number>([image.id]);

				if (deleteMode === "lineage") {
					// Fetch all related images in the lineage
					const lineage = await api.fetchLineage(image.id);
					for (const img of lineage) {
						idsToDelete.add(img.id);
					}
				}

				// If the viewer was closed while fetching lineage, don't move to next image
				if (!isMounted.current || viewerImageIdRef.current === null) return;

				// Move to next image before deleting for better UX
				// If we are deleting multiple images (lineage), we should skip all of them
				if (currentThumbnails.length > idsToDelete.size) {
					// Find the next image that is NOT in the idsToDelete set
					let found = false;
					// Search forward first (without wrapping)
					for (let i = currentIndex + 1; i < currentThumbnails.length; i++) {
						if (!idsToDelete.has(currentThumbnails[i].id)) {
							dispatch({
								type: "OPEN_VIEWER",
								payload: { id: currentThumbnails[i].id, mode: viewerMode },
							});
							found = true;
							break;
						}
					}

					// If not found forward, search backward
					if (!found) {
						for (let i = currentIndex - 1; i >= 0; i--) {
							if (!idsToDelete.has(currentThumbnails[i].id)) {
								dispatch({
									type: "OPEN_VIEWER",
									payload: { id: currentThumbnails[i].id, mode: viewerMode },
								});
								found = true;
								break;
							}
						}
					}

					if (!found) {
						dispatch({ type: "CLOSE_VIEWER" });
					}
				} else {
					dispatch({ type: "CLOSE_VIEWER" });
				}

				await api.deleteImages(Array.from(idsToDelete), isPermanent);
				if (!isPermanent) {
					const deletedImages = currentThumbnails.filter((img) =>
						idsToDelete.has(img.id),
					);
					setLastDeletedImages(deletedImages);
					setLastShortcutAction(null);
				}
				dispatch({ type: "REMOVE_IMAGES", payload: Array.from(idsToDelete) });
			} catch (err: unknown) {
				dispatch({
					type: "SET_ERROR",
					payload: err instanceof Error ? err.message : String(err),
				});
			}
		},
		[
			image,
			isFullscreen,
			state.settings,
			state.viewScope,
			currentThumbnails,
			currentIndex,
			viewerMode,
			dispatch,
		],
	);

	const handleTagEdit = useCallback(() => {
		if (!image) return;
		dispatch({
			type: "OPEN_MODAL",
			payload: {
				type: "tag_edit",
				imageIds: [image.id],
				tags: image.tags || [],
			},
		});
	}, [image, dispatch]);

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
				if (!isMounted.current) return;
				dispatch({ type: "APPEND_IMAGES", payload: result });

				// If the viewer was closed while fetching images, don't open the last image
				if (viewerImageIdRef.current === null) return;

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

	const handleRestore = useCallback(async () => {
		if (!image) return;
		try {
			const imageId = image.id;

			// Move to next image before restoring for better UX
			if (currentThumbnails.length > 1) {
				handleNext();
			} else {
				dispatch({ type: "CLOSE_VIEWER" });
			}

			const result = await api.restoreImages([imageId]);
			const restoredIds = result.restored_ids || [imageId];
			dispatch({ type: "REMOVE_IMAGES", payload: restoredIds });
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [image, currentThumbnails.length, handleNext, dispatch]);

	const handleUndoDelete = useCallback(async () => {
		if (!lastDeletedImages || lastDeletedImages.length === 0) return;
		const idsToRestore = lastDeletedImages.map((img) => img.id);
		const idToOpen = idsToRestore[0];

		try {
			const result = await api.restoreImages(idsToRestore);
			if (!isMounted.current) return;
			dispatch({ type: "ADD_IMAGES", payload: lastDeletedImages });

			// If more images were restored (e.g. ancestors), we should ideally add them too,
			// but they might not be in lastDeletedImages. For now, removing them from trash is key.
			if (state.viewScope === "trash") {
				const restoredIds = result.restored_ids || idsToRestore;
				dispatch({ type: "REMOVE_IMAGES", payload: restoredIds });
			}

			setLastDeletedImages(null);
			if (!isMounted.current) return;

			dispatch({
				type: "OPEN_VIEWER",
				payload: { id: idToOpen, mode: viewerMode },
			});
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [lastDeletedImages, dispatch, viewerMode, state.viewScope]);

	const handleUndo = useCallback(async () => {
		if (lastDeletedImages && lastDeletedImages.length > 0) {
			await handleUndoDelete();
		} else if (lastShortcutAction) {
			if (lastShortcutAction.type === "tags") {
				const { imageId, addTags, removeTags } = lastShortcutAction;
				try {
					await api.bulkUpdateImageTags([imageId], addTags, removeTags);

					// Update the image in the global state (images and lineageImages)
					// This works even if the image is not currently displayed
					const targetImage = (
						viewerMode === "lineage" ? lineageImages : images
					).find((img) => img.id === imageId);

					if (targetImage) {
						const newTags = [...targetImage.tags];
						for (const t of addTags) {
							if (!newTags.includes(t)) newTags.push(t);
						}
						const finalTags = newTags.filter((t) => !removeTags.includes(t));
						dispatch({
							type: "UPDATE_IMAGE",
							payload: { ...targetImage, tags: finalTags },
						});

						// Open the viewer for this image
						dispatch({
							type: "OPEN_VIEWER",
							payload: { id: imageId, mode: viewerMode },
						});
					}
					setLastShortcutAction(null);
				} catch (err: unknown) {
					dispatch({
						type: "SET_ERROR",
						payload: err instanceof Error ? err.message : String(err),
					});
				}
			}
		}
	}, [
		lastDeletedImages,
		lastShortcutAction,
		handleUndoDelete,
		images,
		lineageImages,
		viewerMode,
		dispatch,
	]);

	const executeCommand = useCallback(
		async (command: string) => {
			if (!command || !image) return;

			const currentImageId = image.id;
			const currentImageTags = [...image.tags];

			const parts = command.split(/\s+/);
			const addTags: string[] = [];
			const removeTags: string[] = [];
			let moveNext = false;
			let movePrev = false;
			let isDeleted = false;

			for (const part of parts) {
				if (part.startsWith("tag:")) {
					const tag = part.substring(4);
					if (
						tag &&
						!currentImageTags.includes(tag) &&
						!addTags.includes(tag)
					) {
						addTags.push(tag);
					}
				} else if (part.startsWith("-tag:")) {
					const tag = part.substring(5);
					if (
						tag &&
						currentImageTags.includes(tag) &&
						!removeTags.includes(tag)
					) {
						removeTags.push(tag);
					}
				} else if (part.startsWith("tag-toggle:")) {
					const tag = part.substring(11);
					if (tag) {
						if (currentImageTags.includes(tag)) {
							if (!removeTags.includes(tag)) removeTags.push(tag);
						} else {
							if (!addTags.includes(tag)) addTags.push(tag);
						}
					}
				} else if (part === "next") {
					moveNext = true;
				} else if (part === "prev") {
					movePrev = true;
				} else if (part === "delete") {
					isDeleted = true;
				}
			}

			if (addTags.length > 0 || removeTags.length > 0) {
				try {
					await api.bulkUpdateImageTags([currentImageId], addTags, removeTags);
					// Update local state
					const newTags = [...currentImageTags];
					for (const t of addTags) {
						if (!newTags.includes(t)) newTags.push(t);
					}
					const finalTags = newTags.filter((t) => !removeTags.includes(t));
					dispatch({
						type: "UPDATE_IMAGE",
						payload: { ...image, id: currentImageId, tags: finalTags },
					});

					// Store for undo
					setLastShortcutAction({
						type: "tags",
						imageId: currentImageId,
						addTags: [...removeTags],
						removeTags: [...addTags],
					});
					setLastDeletedImages(null);
				} catch (err) {
					console.error("Failed to update tags via shortcut:", err);
				}
			}

			if (isDeleted) {
				handleDelete(true);
			} else if (moveNext) {
				handleNext();
			} else if (movePrev) {
				handlePrevious();
			}
		},
		[image, dispatch, handleNext, handlePrevious, handleDelete],
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

			const isTargetInput =
				document.activeElement?.tagName === "INPUT" ||
				document.activeElement?.tagName === "TEXTAREA" ||
				(document.activeElement as HTMLElement)?.isContentEditable;

			const isDeleteKey = e.key === "Delete" || e.key === "Backspace";
			const isNavigationKey = e.key === "ArrowRight" || e.key === "ArrowLeft";
			const isToggleKey =
				e.key === "f" ||
				e.key === "F" ||
				e.key === "i" ||
				e.key === "I" ||
				e.key === "t" ||
				e.key === "T" ||
				e.key === "r" ||
				e.key === "R";
			const isEscapeKey = e.key === "Escape";
			const isUndoKey =
				(e.ctrlKey || e.metaKey) &&
				(e.key === "z" || e.key === "Z" || e.code === "KeyZ");
			const isShortcutKey =
				/^[0-9]$/.test(e.key) &&
				!e.ctrlKey &&
				!e.metaKey &&
				!e.altKey &&
				e.code !== "KeyZ"; // KeyZ can sometimes be reported as a shortcut if we are not careful

			// Always prevent propagation for these keys when viewer is open,
			// unless we are in an input field and it's not a shortcut we want to catch.
			if (
				isDeleteKey ||
				isNavigationKey ||
				isToggleKey ||
				isEscapeKey ||
				isUndoKey ||
				isShortcutKey
			) {
				if (!isTargetInput) {
					if (isEscapeKey && state.activeModal.type !== "none") {
						e.preventDefault();
						e.stopPropagation();
						return;
					}
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				} else if (isEscapeKey) {
					if (state.activeModal.type !== "none") {
						e.preventDefault();
						e.stopPropagation();
						return;
					}
					// Escape should probably still close the viewer even if an input has focus
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				} else {
					// In input, don't prevent default/propagation for normal typing
					return;
				}
			} else {
				// Not a key we care about
				return;
			}

			if (e.key === "Escape") {
				if (state.activeModal.type !== "none") {
					dispatch({ type: "CLOSE_MODAL" });
				}

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
			} else if (e.key === "t" || e.key === "T") {
				handleTagEdit();
			} else if (
				(e.key === "r" || e.key === "R") &&
				state.viewScope === "trash"
			) {
				handleRestore();
			} else if (e.key === "Delete") {
				handleDelete();
			} else if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
				handleUndo();
			} else if (isShortcutKey && !isTargetInput) {
				const key = `viewer.shortcut.${e.key}` as keyof Settings;
				const command = state.settings[key];
				if (typeof command === "string" && command) {
					setActiveShortcutKey(e.key);
					setTimeout(() => setActiveShortcutKey(null), 500);
					executeCommand(command);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown, { capture: true });

		const handleFullscreenChange = () => {
			const isFull = !!document.fullscreenElement;
			setIsFullscreen(isFull);
			if (isFull) {
				setShowDetails(state.settings["fullscreen.show_details_by_default"]);
			} else {
				setShowDetails(state.settings["viewer.show_details_by_default"]);
			}
		};

		document.addEventListener("fullscreenchange", handleFullscreenChange);

		return () => {
			window.removeEventListener("keydown", handleKeyDown, { capture: true });
			document.removeEventListener("fullscreenchange", handleFullscreenChange);
		};
	}, [
		viewerImageId,
		dispatch,
		toggleFullscreen,
		handleNext,
		handlePrevious,
		state.settings,
		handleDelete,
		state.activeModal.type,
		handleUndo,
		handleTagEdit,
		handleRestore,
		state.viewScope,
		executeCommand,
	]);

	// Fetch full details if needed when image is opened
	useEffect(() => {
		if (viewerImageId !== null) {
			fetchFullImageDetails(viewerImageId).catch((err) => {
				console.error("Failed to fetch full image details for viewer:", err);
			});
		}
	}, [viewerImageId, fetchFullImageDetails]);

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

	// Scroll active thumbnail into view and focus overlay
	useEffect(() => {
		if (viewerImageId !== null) {
			if (showThumbnails) {
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
			// Focus the overlay to capture keyboard events better
			if (document.activeElement?.tagName === "CANVAS") {
				(document.activeElement as HTMLElement).blur();
			}
			overlayRef.current?.focus();
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
			return getImageViewUrl(img);
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

	const getParentChain = useCallback(
		(img: MeldImage): { id: number | null; imgSrc: string | null }[] => {
			const maxDepth = state.settings["gallery.lineage_max_depth"];
			if (maxDepth === 0) return [];

			if (img.ancestors && img.ancestors.length > 0) {
				return img.ancestors.slice(0, maxDepth).map((a) => ({
					id: a.id,
					imgSrc: getImageViewUrl(a),
				}));
			}

			const pId = img.parent_id;
			if (!pId || !img.parent_filename) return [];

			const parentInState = images.find((p) => p.id === pId);

			let imgSrc: string | null = null;
			if (parentInState) {
				imgSrc = getImageViewUrl(parentInState);
			} else {
				imgSrc = getImageViewUrl({
					filename: img.parent_filename,
					subfolder: img.parent_subfolder || "",
					type: img.parent_type,
				});
			}

			if (!imgSrc) return [];

			const currentParent = {
				id: pId || null,
				imgSrc,
			};

			if (parentInState && maxDepth > 1) {
				const rest = getParentChain(parentInState);
				return [currentParent, ...rest].slice(0, maxDepth);
			}

			return [currentParent];
		},
		[state.settings, images],
	);

	const parentChain = useMemo(() => {
		return image ? getParentChain(image) : [];
	}, [image, getParentChain]);

	if (!image) return null;

	const imgSrc = getImageViewUrl(image);

	const showIcons = isFullscreen
		? state.settings["fullscreen.show_icons"]
		: state.settings["viewer.show_icons"];

	return createPortal(
		<div
			ref={overlayRef}
			className="meld-viewer-overlay"
			onClick={() => {
				if (state.activeModal.type === "none") {
					dispatch({ type: "CLOSE_VIEWER" });
				}
			}}
			role="button"
			tabIndex={0}
		>
			<div
				className={`meld-viewer-content ${isFullscreen ? "meld-viewer-content--fullscreen" : ""} ${showThumbnails ? "meld-viewer-content--with-thumbnails" : ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				{showIcons && (
					<div className="meld-viewer-actions">
						{state.viewScope === "trash" && (
							<button
								className="meld-viewer-action-btn meld-viewer-action-btn--restore"
								onClick={handleRestore}
								type="button"
								title="Restore Image"
							>
								<RefreshCw size={20} />
							</button>
						)}
						{!isFullscreen && (
							<button
								className="meld-viewer-action-btn"
								onClick={() => setShowThumbnailsOverride(!showThumbnails)}
								type="button"
								title={showThumbnails ? "Hide Thumbnails" : "Show Thumbnails"}
							>
								<LayoutGrid size={20} />
							</button>
						)}
						<button
							className="meld-viewer-action-btn"
							onClick={handleTagEdit}
							type="button"
							title="Edit Tags (T)"
						>
							<Tag size={20} />
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

				{showIcons && (
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
						className={`meld-viewer-image meld-viewer-image--${state.settings[isFullscreen ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${isJumping ? "meld-viewer-image--loading" : ""}`}
						// @ts-expect-error - fetchpriority is a valid but sometimes untyped attribute
						fetchpriority="high"
					/>
				</div>

				{showIcons && (
					<button
						className="meld-viewer-nav meld-viewer-nav--next"
						onClick={handleNext}
						type="button"
					>
						<ChevronRight size={32} />
					</button>
				)}

				{showDetails && (
					<div
						className={`meld-viewer-details-overlay ${isFullscreen ? "meld-viewer-details-overlay--fullscreen" : ""} ${!showIcons ? "meld-viewer-details-overlay--no-icons" : ""}`}
					>
						{(isFullscreen
							? state.settings["fullscreen.details.show_filename"]
							: state.settings["viewer.details.show_filename"]) !== "none" && (
							<div className="meld-viewer-details-item">
								<div className="meld-viewer-details-label">
									{(isFullscreen
										? state.settings["fullscreen.details.show_filename"]
										: state.settings["viewer.details.show_filename"]) ===
									"filepath"
										? "Filepath"
										: "Filename"}
								</div>
								<div className="meld-viewer-details-value">
									{(isFullscreen
										? state.settings["fullscreen.details.show_filename"]
										: state.settings["viewer.details.show_filename"]) ===
									"filepath"
										? `${image.type !== "custom" ? `${image.type}/` : ""}${
												image.subfolder ? `${image.subfolder}/` : ""
											}${image.filename}`
										: image.filename}
								</div>
							</div>
						)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_dimensions"]
							: state.settings["viewer.details.show_dimensions"]) &&
							image.width &&
							image.height && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Dimensions</div>
									<div className="meld-viewer-details-value">
										{image.width} x {image.height} px
									</div>
								</div>
							)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_created_at"]
							: state.settings["viewer.details.show_created_at"]) && (
							<div className="meld-viewer-details-item">
								<div className="meld-viewer-details-label">Created At</div>
								<div className="meld-viewer-details-value">
									{new Date(image.created_at * 1000).toLocaleString()}
								</div>
							</div>
						)}

						{image.deleted_at && (
							<div className="meld-viewer-details-item">
								<div className="meld-viewer-details-label">Deleted At</div>
								<div className="meld-viewer-details-value">
									{new Date(image.deleted_at * 1000).toLocaleString()}
								</div>
							</div>
						)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_model_name"]
							: state.settings["viewer.details.show_model_name"]) &&
							image.model_name && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Model</div>
									<div className="meld-viewer-details-value">
										{image.model_name}
									</div>
								</div>
							)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_source"]
							: state.settings["viewer.details.show_source"]) &&
							parentChain.length > 0 && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Source</div>
									<div className="meld-viewer-details-tags">
										<div className="meld-lineage-thumbs">
											{parentChain.map(
												(p, index) =>
													p.imgSrc && (
														<img
															key={p.id || index}
															src={p.imgSrc}
															className="meld-lineage-badge__parent-thumb"
															style={{ cursor: "pointer" }}
															loading="lazy"
															onClick={(e) => {
																e.stopPropagation();
																dispatch({
																	type: "OPEN_VIEWER",
																	payload: {
																		id: p.id || image.id,
																		mode: "lineage",
																	},
																});
															}}
															title={
																index === 0
																	? "Source"
																	: index === 1
																		? "Grand-Source"
																		: `Ancestor (S${index + 1})`
															}
															alt="source thumb"
														/>
													),
											)}
										</div>
									</div>
								</div>
							)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_positive_prompt"]
							: state.settings["viewer.details.show_positive_prompt"]) &&
							(image.positive_prompt || image.positive) && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Positive</div>
									<div
										className="meld-viewer-details-value meld-viewer-details-value--prompt"
										style={
											{
												"--meld-prompt-max-lines": isFullscreen
													? state.settings[
															"fullscreen.details.max_positive_prompt_lines"
														]
													: state.settings[
															"viewer.details.max_positive_prompt_lines"
														],
											} as React.CSSProperties
										}
									>
										{image.positive_prompt || image.positive}
									</div>
								</div>
							)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_negative_prompt"]
							: state.settings["viewer.details.show_negative_prompt"]) &&
							(image.negative_prompt || image.negative) && (
								<div className="meld-viewer-details-item">
									<div className="meld-viewer-details-label">Negative</div>
									<div
										className="meld-viewer-details-value meld-viewer-details-value--prompt"
										style={
											{
												"--meld-prompt-max-lines": isFullscreen
													? state.settings[
															"fullscreen.details.max_negative_prompt_lines"
														]
													: state.settings[
															"viewer.details.max_negative_prompt_lines"
														],
											} as React.CSSProperties
										}
									>
										{image.negative_prompt || image.negative}
									</div>
								</div>
							)}

						{(isFullscreen
							? state.settings["fullscreen.details.show_tags"]
							: state.settings["viewer.details.show_tags"]) &&
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

				{state.settings["viewer.shortcut.show_cheat_sheet"] && (
					<div className="meld-viewer-cheat-sheet">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => {
							const numStr = String(num);
							const cmd =
								state.settings[`viewer.shortcut.${numStr}` as keyof Settings];
							if (typeof cmd === "string" && cmd) {
								return (
									<div
										key={num}
										className={`meld-viewer-cheat-sheet__item ${activeShortcutKey === numStr ? "meld-viewer-cheat-sheet__item--active" : ""}`}
									>
										<span className="meld-viewer-cheat-sheet__key">{num}</span>
										<span className="meld-viewer-cheat-sheet__cmd">
											{cmd.replace("tag-toggle:", "+/- ")}
										</span>
									</div>
								);
							}
							return null;
						})}
					</div>
				)}
			</div>

			{/* Render modals inside viewer to ensure visibility in fullscreen */}
			{state.activeModal.type === "delete_confirm" && (
				<DeleteConfirmModal
					imageIds={state.activeModal.imageIds}
					hasLineage={state.activeModal.hasLineage}
					isPermanent={state.activeModal.isPermanent}
					onSuccess={setLastDeletedImages}
				/>
			)}
			{state.activeModal.type === "parent_selection" && (
				<ParentSelectionModal imageId={state.activeModal.imageId} />
			)}
			{state.activeModal.type === "import" && <ImportModal />}
			{state.activeModal.type === "settings" && <SettingsModal />}
			{state.activeModal.type === "tag_edit" && (
				<TagEditModal
					imageIds={state.activeModal.imageIds}
					initialTags={state.activeModal.tags}
					onClose={() => dispatch({ type: "CLOSE_MODAL" })}
				/>
			)}
		</div>,
		document.body,
	);
};
