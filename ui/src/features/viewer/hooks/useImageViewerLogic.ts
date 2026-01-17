import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as api from "../../../api";
import type {
	GalleryAction,
	GalleryState,
	MeldImage,
	Settings,
} from "../../../types";
import { getImageViewUrl } from "../../../utils/url";

interface UseImageViewerLogicProps {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	loadMoreImages: () => void;
	fetchFullImageDetails: (id: number) => Promise<MeldImage>;
}

export const useImageViewerLogic = ({
	state,
	dispatch,
	loadMoreImages,
	fetchFullImageDetails,
}: UseImageViewerLogicProps) => {
	const { viewerImageId, images, viewerMode, lineageImages, settings } = state;

	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showDetails, setShowDetails] = useState(
		settings["viewer.show_details_by_default"],
	);
	const [showThumbnailsOverride, setShowThumbnailsOverride] = useState<
		boolean | null
	>(null);
	const showThumbnails =
		showThumbnailsOverride ?? settings["viewer.show_thumbnails"];
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
		isMounted.current = true;
		return () => {
			isMounted.current = false;
		};
	}, []);

	// Track current viewer state to prevent re-opening if closed during async operations
	const viewerImageIdRef = useRef(viewerImageId);
	useEffect(() => {
		viewerImageIdRef.current = viewerImageId;
	}, [viewerImageId]);

	const currentThumbnails =
		viewerMode === "lineage"
			? lineageImages
			: images.filter(
					(img) =>
						img.exists !== false &&
						!(settings["gallery.hide_parent_images"] && img.has_children),
				);

	const currentIndex =
		viewerImageId === null
			? -1
			: currentThumbnails.findIndex((img) => img.id === viewerImageId);

	const image = (
		viewerMode === "lineage" && lineageImages.length > 0
			? lineageImages
			: images
	).find((img) => img.id === viewerImageId);

	const handleDelete = useCallback(
		async (forceNoConfirm = false) => {
			if (!image) return;

			const deleteMode = isFullscreen
				? settings["fullscreen.delete_mode"]
				: settings["viewer.delete_mode"];

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
					const lineage = await api.fetchLineage(image.id);
					for (const img of lineage) {
						idsToDelete.add(img.id);
					}
				}

				if (!isMounted.current || viewerImageIdRef.current === null) return;

				if (currentThumbnails.length > idsToDelete.size) {
					let found = false;
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
			settings,
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

	const handleNext = useCallback(() => {
		dispatch({ type: "NEXT_IMAGE", payload: { isFullscreen } });
	}, [dispatch, isFullscreen]);

	const handlePrevious = useCallback(async () => {
		const loopEnabled = isFullscreen
			? settings["fullscreen.loop"]
			: settings["viewer.loop"];

		if (
			currentIndex === 0 &&
			viewerMode === "gallery" &&
			state.pagination.hasMore &&
			!isJumping &&
			loopEnabled
		) {
			setIsJumping(true);
			try {
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

				if (viewerImageIdRef.current === null) return;

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
		state.pagination,
		state.searchQuery,
		settings,
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

	const handleRestore = useCallback(async () => {
		if (!image) return;
		try {
			const imageId = image.id;

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
					const newTags = [...currentImageTags];
					for (const t of addTags) {
						if (!newTags.includes(t)) newTags.push(t);
					}
					const finalTags = newTags.filter((t) => !removeTags.includes(t));
					dispatch({
						type: "UPDATE_IMAGE",
						payload: { ...image, id: currentImageId, tags: finalTags },
					});

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

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (viewerImageId === null) return;

			const isTargetInput =
				document.activeElement?.tagName === "INPUT" ||
				document.activeElement?.tagName === "TEXTAREA" ||
				(document.activeElement as HTMLElement)?.isContentEditable;

			const isDeleteKey = e.key === "Delete" || e.key === "Backspace";
			const isNavigationKey = e.key === "ArrowRight" || e.key === "ArrowLeft";
			const isToggleKey = ["f", "F", "i", "I", "t", "T", "r", "R"].includes(
				e.key,
			);
			const isEscapeKey = e.key === "Escape";
			const isUndoKey =
				(e.ctrlKey || e.metaKey) &&
				(e.key === "z" || e.key === "Z" || e.code === "KeyZ");
			const isShortcutKey =
				/^[0-9]$/.test(e.key) &&
				!e.ctrlKey &&
				!e.metaKey &&
				!e.altKey &&
				e.code !== "KeyZ";

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
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				} else {
					return;
				}
			} else {
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
				const command = settings[key];
				if (typeof command === "string" && command) {
					setActiveShortcutKey(e.key);
					setTimeout(() => {
						if (isMounted.current) setActiveShortcutKey(null);
					}, 500);
					executeCommand(command);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown, { capture: true });

		const handleFullscreenChange = () => {
			const isFull = !!document.fullscreenElement;
			setIsFullscreen(isFull);
			if (isFull) {
				setShowDetails(settings["fullscreen.show_details_by_default"]);
			} else {
				setShowDetails(settings["viewer.show_details_by_default"]);
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
		settings,
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
					if (isMounted.current) {
						dispatch({ type: "SET_LINEAGE", payload: results });
					}
				})
				.catch((err) => {
					console.error("Failed to fetch lineage:", err);
				})
				.finally(() => {
					if (isMounted.current) {
						setIsLoadingLineage(false);
					}
				});
		}
	}, [viewerMode, viewerImageId, lineageImages.length, dispatch]);

	// Load more images if we are near the end
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

	const windowedThumbnails = useMemo(() => {
		if (!showThumbnails || currentIndex === -1) return [];
		const windowSize = settings["viewer.thumbnail_window_size"]; // Total thumbnails to keep in DOM
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
	}, [currentThumbnails, currentIndex, settings, showThumbnails]);

	const getParentChain = useCallback(
		(img: MeldImage): { id: number | null; imgSrc: string | null }[] => {
			const maxDepth = settings["gallery.lineage_max_depth"];
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
		[settings, images],
	);

	const parentChain = useMemo(() => {
		return image ? getParentChain(image) : [];
	}, [image, getParentChain]);

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

	return {
		isFullscreen,
		showDetails,
		setShowDetails,
		showThumbnails,
		setShowThumbnailsOverride,
		isLoadingLineage,
		isJumping,
		activeShortcutKey,
		lastDeletedImages,
		setLastDeletedImages,
		overlayRef,
		handleNext,
		handlePrevious,
		handleDelete,
		handleTagEdit,
		handleRestore,
		handleUndo,
		toggleFullscreen,
		currentIndex,
		currentThumbnails,
		image,
		windowedThumbnails,
		parentChain,
	};
};
