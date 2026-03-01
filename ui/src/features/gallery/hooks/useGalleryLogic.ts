import { useEffect, useMemo, useRef, useState } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import { useLightTableStore } from "../../light-table/store";

export type SidebarView = "gallery" | "search" | "tags";

/**
 * NOTE: For image-specific data operations (deletion, tagging, lineage, etc.),
 * please use the shared logic in `features/images/hooks/useImageActions`.
 * DO NOT implement duplicate image manipulation logic here.
 */
export const useGalleryLogic = () => {
	const { state, dispatch, refreshImages, loadMoreImages, updateSetting } =
		useGallery();

	const [viewMode, setViewMode] = useState<SidebarView>("gallery");
	const [lastSearchQuery, setLastSearchQuery] = useState("");

	const isSearchActive = state.searchQuery.trim() !== "";
	const loadMoreRef = useRef<HTMLDivElement>(null);
	const lastScrolledId = useRef<number | null>(null);

	const lightTableBuckets = useLightTableStore((state) => state.buckets);
	const hiddenImageIds = useMemo(() => {
		const ids = new Set<number>();
		for (const bucket of Object.values(lightTableBuckets)) {
			for (const id of bucket) {
				ids.add(Number(id));
			}
		}
		return ids;
	}, [lightTableBuckets]);

	const displayedImages = useMemo(() => {
		return state.images.filter((img) => {
			if (hiddenImageIds.has(img.id)) {
				return false;
			}

			if (state.viewScope === "trash") {
				return (
					img.exists !== false || state.settings["gallery.trash.show_missing"]
				);
			}
			return (
				img.exists !== false &&
				(state.settings["gallery.show_parent_images"] ||
					isSearchActive ||
					!img.has_children)
			);
		});
	}, [
		state.images,
		state.settings,
		state.viewScope,
		hiddenImageIds,
		isSearchActive,
	]);

	const visibleImages = displayedImages;

	// If there are no images to display but more exist, automatically load the next page
	useEffect(() => {
		if (
			!state.isLoading &&
			state.pagination.hasMore &&
			state.images.length > 0 &&
			displayedImages.length === 0
		) {
			logger.log(
				"GalleryPanel: Auto-loading more because all loaded images are hidden",
			);
			loadMoreImages();
		}
	}, [
		state.isLoading,
		state.pagination.hasMore,
		state.images.length,
		displayedImages.length,
		loadMoreImages,
	]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				if (state.activeModal.type !== "none") {
					dispatch({ type: "CLOSE_MODAL" });
					e.preventDefault();
					e.stopPropagation();
				} else if (state.selectedIds.size > 0) {
					dispatch({ type: "CLEAR_SELECTION" });
					e.preventDefault();
					e.stopPropagation();
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [state.activeModal.type, state.selectedIds.size, dispatch]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					if (state.isLoading) {
						logger.log(
							"GalleryPanel: Intersection observed but already loading",
						);
						return;
					}

					if (state.pagination.hasMore) {
						// If the server says there are more, load them
						logger.log(
							"GalleryPanel: Load more triggered via IntersectionObserver (fetching from server)",
							{
								offset: state.images.length,
								hasMore: state.pagination.hasMore,
							},
						);
						loadMoreImages();
					} else {
						logger.log(
							"GalleryPanel: Intersection observed but no more to load",
							{
								localCount: displayedImages.length,
								serverHasMore: state.pagination.hasMore,
							},
						);
					}
				}
			},
			{ threshold: 0, rootMargin: "800px" },
		);

		const currentRef = loadMoreRef.current;
		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, [
		loadMoreImages,
		state.isLoading,
		state.pagination.hasMore,
		displayedImages.length,
		state.images.length,
	]);

	// Scroll synchronization with ImageViewer is handled efficiently by VirtualizedGalleryList
	// which simply measures indexes and scrolls virtualizer. (No localLimit manipulation needed here anymore)
	useEffect(() => {
		if (state.viewerImageId !== null) {
			lastScrolledId.current = state.viewerImageId;
		}
	}, [state.viewerImageId]);

	return {
		state,
		dispatch,
		refreshImages,
		loadMoreImages,
		updateSetting,
		viewMode,
		setViewMode,
		lastSearchQuery,
		setLastSearchQuery,
		localLimit: state.pagination.limit,
		displayedImages,
		visibleImages,
		isSearchActive,
		loadMoreRef,
	};
};
