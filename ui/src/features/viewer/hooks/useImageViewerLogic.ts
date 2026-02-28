import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { logger } from "../../../logger";
import type {
	GalleryAction,
	GalleryState,
	MeldImage,
	Settings,
} from "../../../types";
import { getImageViewUrl } from "../../../utils/url";
import * as imagesApi from "../../images/api/imagesApi";
import { deleteImagesAndSyncLightTable } from "../../images/hooks/deleteHelpers";
import { useImageActions } from "../../images/hooks/useImageActions";
import { useImageLineage } from "../../images/hooks/useImageLineage";
import { useLightTableStore } from "../../light-table/store";

function getAdjacentIds(params: {
	ids: number[];
	index: number;
	loopEnabled: boolean;
	hasMore: boolean;
}): { prevId: number | null; nextId: number | null } {
	const { ids, index, loopEnabled, hasMore } = params;
	if (ids.length === 0 || index < 0 || index >= ids.length) {
		return { prevId: null, nextId: null };
	}

	const atStart = index === 0;
	const atEnd = index === ids.length - 1;

	const nextId = atEnd
		? hasMore || !loopEnabled
			? null
			: ids[0]
		: ids[index + 1];
	const prevId = atStart
		? hasMore || !loopEnabled
			? null
			: ids[ids.length - 1]
		: ids[index - 1];

	return { prevId, nextId };
}

interface UseImageViewerLogicProps {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	loadMoreImages: () => void;
	fetchFullImageDetails: (id: number) => Promise<MeldImage>;
}

/**
 * NOTE: For image-specific data operations (deletion, tagging, lineage, etc.),
 * please use the shared logic in `features/images/hooks/useImageActions`.
 * DO NOT implement duplicate image manipulation logic here.
 */
export const useImageViewerLogic = ({
	state,
	dispatch,
	loadMoreImages,
	fetchFullImageDetails,
}: UseImageViewerLogicProps) => {
	const { viewerImageId, images, viewerMode, lineageImages, settings } = state;

	const {
		handleEditTags,
		handleEditNotes,
		handleRestore,
		handleUpdateUserNotes,
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleSendToWorkflow,
		handleRunWithWorkflow,
		handleRunWithMask,
		handleEditSource,
	} = useImageActions(state, dispatch);
	const { getParentChain } = useImageLineage(images, settings);

	const [isFullscreen, setIsFullscreen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
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

	const currentThumbnails = useMemo(() => {
		const isSearchActive = state.searchQuery.trim() !== "";

		if (viewerMode === "lighttable" && state.viewerLightTableSlotId) {
			const ltStore = useLightTableStore.getState();
			const bucketIds = ltStore.buckets[state.viewerLightTableSlotId] || [];

			// Find from images/lineageImages already in memory instead of complex batch retrieval.
			const mappedImages = bucketIds
				.map((idStr) => {
					const idNum = Number.parseInt(idStr, 10);
					return (
						images.find((img) => img.id === idNum) ||
						lineageImages.find((img) => img.id === idNum) ||
						null
					);
				})
				.filter((img): img is MeldImage => img !== null);

			return mappedImages;
		}

		return viewerMode === "lineage"
			? lineageImages
			: images.filter(
					(img) =>
						img.exists !== false &&
						(settings["gallery.show_parent_images"] ||
							isSearchActive ||
							!img.has_children),
				);
	}, [
		viewerMode,
		state.viewerLightTableSlotId,
		lineageImages,
		images,
		settings,
		state.searchQuery,
	]);

	const currentIndex =
		viewerImageId === null
			? -1
			: currentThumbnails.findIndex((img) => img.id === viewerImageId);

	const foundImage = (
		viewerMode === "lineage" && lineageImages.length > 0
			? lineageImages
			: viewerMode === "lighttable"
				? currentThumbnails
				: images
	).find((img) => img.id === viewerImageId);

	const image =
		foundImage ||
		(viewerImageId === state.viewerFallbackImage?.id
			? state.viewerFallbackImage
			: undefined);

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
					const lineage = await imagesApi.fetchLineage(image.id);
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

				await deleteImagesAndSyncLightTable(
					Array.from(idsToDelete),
					isPermanent,
				);
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

	const handleTagEditAction = useCallback(() => {
		if (!image) return;
		handleEditTags(image);
	}, [image, handleEditTags]);

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

				const result = await imagesApi.fetchImages(
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

	const handleRestoreAction = useCallback(async () => {
		if (!image) return;
		if (currentThumbnails.length > 1) {
			handleNext();
		} else {
			dispatch({ type: "CLOSE_VIEWER" });
		}
		await handleRestore(image);
	}, [image, currentThumbnails.length, handleNext, handleRestore, dispatch]);

	const handleUndoDelete = useCallback(async () => {
		if (!lastDeletedImages || lastDeletedImages.length === 0) return;
		const idsToRestore = lastDeletedImages.map((img) => img.id);
		const idToOpen = idsToRestore[0];

		try {
			const result = await imagesApi.restoreImages(idsToRestore);
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
					await imagesApi.bulkUpdateImageTags([imageId], addTags, removeTags);

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
					await imagesApi.bulkUpdateImageTags(
						[currentImageId],
						addTags,
						removeTags,
					);
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
			const target = e.target as HTMLElement;
			const isTargetInput =
				target.tagName === "INPUT" ||
				target.tagName === "TEXTAREA" ||
				target.isContentEditable;

			if (isTargetInput && e.key !== "Escape") {
				if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
					e.preventDefault();
				}
				return;
			}

			if (viewerImageId === null) return;

			// Do not intercept keyboard events when a modal is open inside the viewer
			if (state.activeModal.type !== "none") {
				return;
			}

			const isDeleteKey = e.key === "Delete" || e.key === "Backspace";
			const isNavigationKey =
				e.key === "ArrowRight" ||
				e.key === "ArrowLeft" ||
				e.key === "ArrowDown" ||
				e.key === "ArrowUp";
			const isToggleKey = [
				"f",
				"F",
				"i",
				"I",
				"t",
				"T",
				"r",
				"R",
				"Enter",
			].includes(e.key);
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
					e.preventDefault();
					e.stopPropagation();
					e.stopImmediatePropagation();
				} else if (isEscapeKey) {
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
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					dispatch({ type: "CLOSE_VIEWER" });
				}
			} else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
				handleNext();
			} else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
				handlePrevious();
			} else if (e.key === "f" || e.key === "F" || e.key === "Enter") {
				toggleFullscreen(e);
			} else if (e.key === "i" || e.key === "I") {
				setShowDetails((prev) => !prev);
			} else if (e.key === "t" || e.key === "T") {
				handleTagEditAction();
			} else if (
				(e.key === "r" || e.key === "R") &&
				state.viewScope === "trash"
			) {
				handleRestoreAction();
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
		handleTagEditAction,
		handleRestoreAction,
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
			imagesApi
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

	// Prefetch adjacent image details
	useEffect(() => {
		if (viewerImageId === null || currentThumbnails.length === 0) return;

		const ids = currentThumbnails.map((img) => img.id);
		const index = ids.indexOf(viewerImageId);
		if (index === -1) return;

		const loopEnabled = isFullscreen
			? settings["fullscreen.loop"]
			: settings["viewer.loop"];

		const { prevId, nextId } = getAdjacentIds({
			ids,
			index,
			loopEnabled,
			hasMore: state.pagination.hasMore && viewerMode === "gallery",
		});

		const timer = setTimeout(() => {
			const toFetch = [prevId, nextId].filter(
				(id): id is number => id !== null && id !== viewerImageId,
			);

			if (toFetch.length === 0) return;

			Promise.allSettled(toFetch.map((id) => fetchFullImageDetails(id))).then(
				(results) => {
					for (const res of results) {
						if (res.status === "rejected") {
							logger.warn(
								"Prefetching adjacent image details failed",
								res.reason,
							);
						}
					}
				},
			);
		}, 50);

		return () => clearTimeout(timer);
	}, [
		viewerImageId,
		currentThumbnails,
		isFullscreen,
		settings,
		state.pagination.hasMore,
		viewerMode,
		fetchFullImageDetails,
	]);

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
		isMenuOpen,
		setIsMenuOpen,
		activeShortcutKey,
		lastDeletedImages,
		setLastDeletedImages,
		overlayRef,
		handleNext,
		handlePrevious,
		handleDelete,
		handleUpdateUserNotes,
		handleEditNotes: () => image && handleEditNotes(image),
		handleTagEdit: handleTagEditAction,
		handleRestore: handleRestoreAction,
		handleUndo,
		handleRestoreWorkflow: async () => {
			if (!image) return;
			const success = await handleRestoreWorkflow(image);
			if (success) dispatch({ type: "CLOSE_VIEWER" });
		},
		handleAddUnifiedLoader: async () => {
			if (!image) return;
			const success = await handleAddUnifiedLoader(image);
			if (success) dispatch({ type: "CLOSE_VIEWER" });
		},
		handleSendToWorkflow: () => {
			if (!image) return;
			const success = handleSendToWorkflow(image);
			if (success) dispatch({ type: "CLOSE_VIEWER" });
		},
		handleRunWithWorkflow: () => image && handleRunWithWorkflow(image),
		handleRunWithMask: (mode: "apply" | "run") =>
			image && handleRunWithMask(image, mode),
		handleEditSource: () => image && handleEditSource(image),
		toggleFullscreen,
		currentIndex,
		currentThumbnails,
		image,
		windowedThumbnails,
		parentChain,
	};
};
