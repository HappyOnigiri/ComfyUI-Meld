import { useEffect, useMemo, useRef, useState } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";

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
	const [localLimit, setLocalLimit] = useState(state.pagination.limit);

	// Reset localLimit when search query or view scope changes
	// biome-ignore lint/correctness/useExhaustiveDependencies: Reset localLimit when search criteria changes
	useEffect(() => {
		setLocalLimit(state.pagination.limit);
	}, [state.searchQuery, state.viewScope, state.pagination.limit]);

	const isSearchActive = state.searchQuery.trim() !== "";
	const loadMoreRef = useRef<HTMLDivElement>(null);
	const lastScrolledId = useRef<number | null>(null);

	const displayedImages = useMemo(
		() =>
			state.images.filter((img) => {
				if (state.viewScope === "trash") {
					return (
						img.exists !== false || state.settings["gallery.trash.show_missing"]
					);
				}
				return (
					img.exists !== false &&
					(state.settings["gallery.show_parent_images"] || !img.has_children)
				);
			}),
		[state.images, state.settings, state.viewScope],
	);

	const visibleImages = useMemo(
		() => displayedImages.slice(0, localLimit),
		[displayedImages, localLimit],
	);

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

					// If we have more images locally than shown, just increase localLimit
					if (localLimit < displayedImages.length) {
						logger.log(
							"GalleryPanel: Increasing localLimit (local data available)",
							{
								oldLimit: localLimit,
								newLimit: Math.min(
									localLimit + state.pagination.limit,
									displayedImages.length,
								),
								totalAvailableLocally: displayedImages.length,
							},
						);
						setLocalLimit((prev) => prev + state.pagination.limit);
					} else if (state.pagination.hasMore) {
						// Otherwise, if the server says there are more, load them
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
		localLimit,
		displayedImages.length,
		state.pagination.limit,
		state.images.length,
	]);

	// Scroll synchronization with ImageViewer
	useEffect(() => {
		const idToScroll = state.viewerImageId ?? lastScrolledId.current;
		if (idToScroll !== null) {
			const isDisplayed = displayedImages.some((img) => img.id === idToScroll);
			if (isDisplayed) {
				// If the image is in displayedImages but not in visibleImages, expand localLimit
				const index = displayedImages.findIndex((img) => img.id === idToScroll);
				if (index >= localLimit) {
					setLocalLimit(
						Math.ceil((index + 1) / state.pagination.limit) *
							state.pagination.limit,
					);
					return; // Wait for next render
				}

				const element = document.querySelector(
					`[data-image-id="${idToScroll}"]`,
				);
				if (element) {
					element.scrollIntoView({ behavior: "smooth", block: "nearest" });
					if (state.viewerImageId === null) {
						lastScrolledId.current = null;
					}
				}
			}
		}

		if (state.viewerImageId !== null) {
			lastScrolledId.current = state.viewerImageId;
		}
	}, [
		state.viewerImageId,
		displayedImages,
		localLimit,
		state.pagination.limit,
	]);

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
		localLimit,
		displayedImages,
		visibleImages,
		isSearchActive,
		loadMoreRef,
	};
};
