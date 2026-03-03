import { useEffect, useMemo, useRef, useState } from "react";
import { logger } from "../../../logger";
import type { MeldImage } from "../../../types";
import { useImageActions } from "../../images/hooks/useImageActions";
import { useImageLineage } from "../../images/hooks/useImageLineage";
import { useLightTableStore } from "../../light-table/store";
import type {
	UseImageViewerLogicProps,
	UseImageViewerLogicResult,
	ViewerMountRefs,
} from "./internal/types";
import { useViewerActionsBridge } from "./internal/useViewerActionsBridge";
import { useViewerFullscreen } from "./internal/useViewerFullscreen";
import { useViewerKeyboardShortcuts } from "./internal/useViewerKeyboardShortcuts";
import { useViewerLineageLoader } from "./internal/useViewerLineageLoader";
import { useViewerNavigation } from "./internal/useViewerNavigation";
import { useViewerPrefetch } from "./internal/useViewerPrefetch";

function createLightTablePlaceholderImage(id: number): MeldImage {
	return {
		id,
		filename: `__missing_${id}__`,
		subfolder: "",
		type: "output",
		created_at: 0,
		positive: "",
		negative: "",
		tags: [],
		exists: false,
		is_minimal: true,
	};
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
}: UseImageViewerLogicProps): UseImageViewerLogicResult => {
	const { viewerImageId, images, viewerMode, lineageImages, settings } = state;

	const {
		restoreImages,
		bulkUpdateImageTags,
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
	const { getParentChain, fetchLineage } = useImageLineage(images, settings);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showDetails, setShowDetails] = useState(
		settings["viewer.show_details_by_default"],
	);
	const [showThumbnailsOverride, setShowThumbnailsOverride] = useState<
		boolean | null
	>(null);
	const showThumbnails =
		showThumbnailsOverride ?? settings["viewer.show_thumbnails"];
	const [isJumping, setIsJumping] = useState(false);
	const [activeShortcutKey, setActiveShortcutKey] = useState<string | null>(
		null,
	);
	const overlayRef = useRef<HTMLDivElement>(null);

	const mountRefs: ViewerMountRefs = {
		isMountedRef: useRef(true),
		viewerImageIdRef: useRef(viewerImageId),
	};

	useEffect(() => {
		mountRefs.isMountedRef.current = true;
		return () => {
			mountRefs.isMountedRef.current = false;
		};
	}, [mountRefs.isMountedRef]);

	useEffect(() => {
		mountRefs.viewerImageIdRef.current = viewerImageId;
	}, [mountRefs.viewerImageIdRef, viewerImageId]);

	const currentThumbnails = useMemo(() => {
		const isSearchActive = state.searchQuery.trim() !== "";

		if (viewerMode === "lighttable" && state.viewerLightTableSlotId) {
			const ltStore = useLightTableStore.getState();
			const bucketIds = ltStore.buckets[state.viewerLightTableSlotId] || [];
			const imagesById = new Map(images.map((img) => [img.id, img]));
			const lineageById = new Map(lineageImages.map((img) => [img.id, img]));
			return bucketIds.map((idStr) => {
				const idNum = Number.parseInt(idStr, 10);
				return (
					imagesById.get(idNum) ||
					lineageById.get(idNum) ||
					ltStore.images[idStr] ||
					createLightTablePlaceholderImage(idNum)
				);
			});
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

	const { isFullscreen, toggleFullscreen } = useViewerFullscreen({
		overlayRef,
		settings,
		setShowDetails,
	});

	const { handleNext, handlePrevious } = useViewerNavigation({
		dispatch,
		isFullscreen,
		settings,
		currentThumbnails,
		currentIndex,
		viewerMode,
		pagination: state.pagination,
		searchQuery: state.searchQuery,
		isJumping,
		setIsJumping,
		mountRefs,
	});

	const {
		lastDeletedImages,
		setLastDeletedImages,
		handleDelete,
		handleTagEditAction,
		handleRestoreAction,
		handleUndo,
		executeCommand,
	} = useViewerActionsBridge({
		state,
		dispatch,
		image,
		isFullscreen,
		currentThumbnails,
		currentIndex,
		viewerMode,
		lineageImages,
		images,
		mountRefs,
		handleNext,
		handlePrevious,
		handleEditTags,
		handleRestore,
		fetchLineage,
		restoreImages,
		bulkUpdateImageTags,
	});

	const { isLoadingLineage } = useViewerLineageLoader({
		viewerMode,
		viewerImageId,
		lineageLength: lineageImages.length,
		dispatch,
		isMountedRef: mountRefs.isMountedRef,
	});

	useViewerKeyboardShortcuts({
		viewerImageId,
		activeModalType: state.activeModal.type,
		viewScope: state.viewScope,
		settings,
		dispatch,
		isMountedRef: mountRefs.isMountedRef,
		toggleFullscreen,
		handleNext,
		handlePrevious,
		handleDelete: () => {
			void handleDelete();
		},
		handleUndo,
		handleTagEditAction,
		handleRestoreAction,
		executeCommand,
		setShowDetails,
		setActiveShortcutKey,
	});

	// Fetch full details if needed when image is opened.
	useEffect(() => {
		if (viewerImageId !== null) {
			fetchFullImageDetails(viewerImageId).catch((err) => {
				logger.error("Failed to fetch full image details for viewer:", err);
			});
		}
	}, [fetchFullImageDetails, viewerImageId]);

	useViewerPrefetch({
		viewerImageId,
		currentThumbnails,
		currentIndex,
		isFullscreen,
		settings,
		hasMore: state.pagination.hasMore,
		viewerMode,
		isLoading: state.isLoading,
		loadMoreImages,
		fetchFullImageDetails,
	});

	const windowedThumbnails = useMemo(() => {
		if (!showThumbnails || currentIndex === -1) return [];
		const windowSize = settings["viewer.thumbnail_window_size"];
		const halfWindow = Math.floor(windowSize / 2);
		let start = Math.max(0, currentIndex - halfWindow);
		const end = Math.min(currentThumbnails.length, start + windowSize);

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
	}, [getParentChain, image]);

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
			if (document.activeElement?.tagName === "CANVAS") {
				(document.activeElement as HTMLElement).blur();
			}
			overlayRef.current?.focus();
		}
	}, [showThumbnails, viewerImageId]);

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
