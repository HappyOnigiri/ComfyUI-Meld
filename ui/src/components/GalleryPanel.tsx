import { Download, RefreshCw, Search, Settings, Tag } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import { BulkActionBar } from "./BulkActionBar";
import { ImageCard } from "./ImageCard";
import { ImageViewer } from "./ImageViewer";
import { ImportModal } from "./ImportModal";
import { ParentSelectionModal } from "./ParentSelectionModal";
import { SearchBar } from "./SearchBar";
import { SettingsModal } from "./SettingsModal";
import { TagEditModal } from "./TagEditModal";
import { TagManagerView } from "./TagManagerView";
import "../styles/Gallery.css";

export const GalleryPanel: React.FC = () => {
	const { state, dispatch, refreshImages, loadMoreImages } = useGallery();
	type SidebarView = "gallery" | "search" | "tags";
	const [viewMode, setViewMode] = useState<SidebarView>("gallery");
	const [lastSearchQuery, setLastSearchQuery] = useState("");

	const isSearchActive = state.searchQuery.trim() !== "";
	const loadMoreRef = useRef<HTMLDivElement>(null);
	const displayedImages = state.images.filter(
		(img) =>
			img.exists !== false &&
			!(state.settings["gallery.hide_parent_images"] && img.has_children),
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
		isLoading: state.isLoading,
		activeModal: state.activeModal.type,
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (
					entries[0].isIntersecting &&
					!state.isLoading &&
					state.pagination.hasMore
				) {
					logger.log(
						"GalleryPanel: Load more triggered via IntersectionObserver",
					);
					loadMoreImages();
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
	}, [loadMoreImages, state.isLoading, state.pagination.hasMore]);

	return (
		<div className="meld-gallery">
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					marginBottom: "15px",
					gap: "10px",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "flex-end",
						gap: "15px",
						flexShrink: 0,
						paddingTop: "4px",
					}}
				>
					<button
						type="button"
						onClick={() => {
							if (viewMode === "search") {
								if (state.searchQuery) {
									setLastSearchQuery(state.searchQuery);
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
				{viewMode === "search" && (
					<div style={{ width: "100%" }}>
						<SearchBar />
					</div>
				)}
			</div>

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
			) : displayedImages.length === 0 ? (
				<div className="meld-gallery__empty">No images found.</div>
			) : (
				<>
					<div className="meld-gallery__list">
						{displayedImages.map((image) => (
							<ImageCard key={image.id} image={image} />
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
						{!state.pagination.hasMore && displayedImages.length > 0 && (
							<div className="meld-gallery__end">End of gallery</div>
						)}
					</div>
				</>
			)}

			<BulkActionBar />

			{state.viewerImageId !== null && <ImageViewer />}

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
		</div>
	);
};
