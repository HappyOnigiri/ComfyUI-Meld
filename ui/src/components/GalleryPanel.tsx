import {
	Download,
	LayoutGrid,
	LayoutList,
	RefreshCw,
	Search,
	Settings,
	Tag,
	Trash2,
	X,
} from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import { LazyRender } from "../utils/LazyRender";
import { BulkActionBar } from "./BulkActionBar";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { ImageCard } from "./ImageCard";
import { ImageViewer } from "./ImageViewer";
import { ImportModal } from "./ImportModal";
import { ImportProgress } from "./ImportProgress";
import { ParentSelectionModal } from "./ParentSelectionModal";
import { SearchBar } from "./SearchBar";
import { SettingsModal } from "./SettingsModal";
import { TagEditModal } from "./TagEditModal";
import { TagManagerView } from "./TagManagerView";
import "../styles/Gallery.css";

export const GalleryPanel: React.FC = () => {
	const { state, dispatch, refreshImages, loadMoreImages, updateSetting } =
		useGallery();
	type SidebarView = "gallery" | "search" | "tags";
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
					!(state.settings["gallery.hide_parent_images"] && img.has_children)
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

	logger.log("GalleryPanel: rendering", {
		imageCount: state.images.length,
		displayedCount: displayedImages.length,
		visibleCount: visibleImages.length,
		isLoading: state.isLoading,
		activeModal: state.activeModal.type,
	});

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

	return (
		<div
			className={`meld-gallery ${state.viewScope === "trash" ? "meld-gallery--trash" : ""}`}
		>
			<div className="meld-gallery__header">
				{state.viewScope === "trash" ? (
					<div className="meld-gallery__trash-indicator">
						<div className="meld-gallery__trash-label">
							<Trash2 size={14} />
							<span>Trash Bin</span>
						</div>
						<label className="meld-gallery__trash-toggle">
							<input
								type="checkbox"
								checked={state.settings["gallery.trash.show_missing"] || false}
								onChange={(e) =>
									updateSetting("gallery.trash.show_missing", e.target.checked)
								}
							/>
							<span>Show missing files</span>
						</label>
						<button
							type="button"
							className="meld-gallery__exit-trash"
							onClick={() =>
								dispatch({ type: "SET_VIEW_SCOPE", payload: "default" })
							}
							title="Exit Trash View"
						>
							<X size={14} />
							<span>Exit</span>
						</button>
					</div>
				) : (
					<div className="meld-gallery__actions">
						<button
							type="button"
							onClick={() => {
								if (viewMode === "search") {
									setLastSearchQuery(state.searchQuery);
									if (state.searchQuery) {
										dispatch({ type: "SET_SEARCH_QUERY", payload: "" });
									}
									setViewMode("gallery");
								} else {
									if (!state.searchQuery && lastSearchQuery) {
										dispatch({
											type: "SET_SEARCH_QUERY",
											payload: lastSearchQuery,
										});
									}
									setViewMode("search");
								}
							}}
							style={{
								background: "none",
								border: "none",
								color: isSearchActive
									? "var(--meld-success-color)"
									: viewMode === "search"
										? "var(--meld-text-color)"
										: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								fontWeight: isSearchActive ? "bold" : "normal",
							}}
							title="Search"
						>
							<Search size={14} />
						</button>
						<button
							type="button"
							onClick={() => {
								const currentMode =
									state.settings["gallery.view_mode"] || "grid_details";
								const nextMode =
									currentMode === "grid_details" ? "grid_only" : "grid_details";
								updateSetting("gallery.view_mode", nextMode);
							}}
							style={{
								background: "none",
								border: "none",
								color: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
							title={
								state.settings["gallery.view_mode"] === "grid_only"
									? "Switch to Details View"
									: "Switch to Grid Only View"
							}
						>
							{state.settings["gallery.view_mode"] === "grid_only" ? (
								<LayoutList size={14} />
							) : (
								<LayoutGrid size={14} />
							)}
						</button>
						<button
							type="button"
							onClick={() =>
								setViewMode(viewMode === "tags" ? "gallery" : "tags")
							}
							style={{
								background: "none",
								border: "none",
								color:
									viewMode === "tags"
										? "var(--meld-accent-color)"
										: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
								fontWeight: viewMode === "tags" ? "bold" : "normal",
							}}
							title="Tag Manager"
						>
							<Tag size={14} />
						</button>
						<button
							type="button"
							onClick={() =>
								dispatch({ type: "OPEN_MODAL", payload: { type: "import" } })
							}
							style={{
								background: "none",
								border: "none",
								color: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
							title="Import"
						>
							<Download size={14} />
						</button>
						<button
							type="button"
							onClick={() => refreshImages()}
							style={{
								background: "none",
								border: "none",
								color: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
							disabled={state.isLoading}
							title="Refresh"
						>
							<RefreshCw
								size={14}
								className={state.isLoading ? "animate-spin" : ""}
							/>
						</button>
						<button
							type="button"
							onClick={() =>
								dispatch({ type: "OPEN_MODAL", payload: { type: "settings" } })
							}
							style={{
								background: "none",
								border: "none",
								color: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
							title="Settings"
						>
							<Settings size={14} />
						</button>
					</div>
				)}
				{viewMode === "search" && (
					<div className="meld-gallery__search-wrapper">
						<SearchBar />
					</div>
				)}
			</div>

			<ImportProgress />

			{state.error && <div className="meld-gallery__error">{state.error}</div>}

			{viewMode === "tags" ? (
				<TagManagerView
					onClose={() => setViewMode("gallery")}
					onSearch={(query) => {
						dispatch({ type: "SET_SEARCH_QUERY", payload: query });
						setViewMode("search");
					}}
				/>
			) : state.isLoading && displayedImages.length === 0 ? (
				<div className="meld-gallery__loading">Loading images...</div>
			) : visibleImages.length === 0 ? (
				<div className="meld-gallery__empty">No images found.</div>
			) : (
				<>
					<div
						className={`meld-gallery__list ${state.settings["gallery.view_mode"] === "grid_only" ? "meld-gallery__list--grid-only" : ""}`}
					>
						{visibleImages.map((image) => (
							<div key={image.id} data-image-id={image.id}>
								<LazyRender height={150}>
									<ImageCard image={image} />
								</LazyRender>
							</div>
						))}
					</div>
					<div
						ref={loadMoreRef}
						className="meld-gallery__load-more"
						style={{ height: "20px", margin: "20px 0", textAlign: "center" }}
					>
						{state.isLoading && (
							<div className="meld-gallery__loading">Loading more...</div>
						)}
						{localLimit >= displayedImages.length &&
							!state.pagination.hasMore &&
							visibleImages.length > 0 && (
								<div className="meld-gallery__end">End of gallery</div>
							)}
					</div>
				</>
			)}

			<BulkActionBar />

			{state.viewerImageId !== null && <ImageViewer />}

			{/* Only render modals here if viewer is NOT open. If viewer is open, it handles its own modals to support fullscreen. */}
			{state.viewerImageId === null && (
				<>
					{state.activeModal.type === "parent_selection" &&
						createPortal(
							<ParentSelectionModal imageId={state.activeModal.imageId} />,
							document.body,
						)}

					{state.activeModal.type === "import" &&
						createPortal(<ImportModal />, document.body)}

					{state.activeModal.type === "settings" &&
						createPortal(<SettingsModal />, document.body)}

					{state.activeModal.type === "tag_edit" &&
						createPortal(
							<TagEditModal
								imageIds={state.activeModal.imageIds}
								initialTags={state.activeModal.tags}
								onClose={() => dispatch({ type: "CLOSE_MODAL" })}
							/>,
							document.body,
						)}

					{state.activeModal.type === "delete_confirm" &&
						createPortal(
							<DeleteConfirmModal
								imageIds={state.activeModal.imageIds}
								hasLineage={state.activeModal.hasLineage}
								isPermanent={state.activeModal.isPermanent}
							/>,
							document.body,
						)}
				</>
			)}
		</div>
	);
};
