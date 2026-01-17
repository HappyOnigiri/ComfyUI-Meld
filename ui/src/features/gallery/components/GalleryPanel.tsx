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
import { GalleryModals } from "../../../components/shared/GalleryModals";
import { ImageCard } from "../../../components/shared/ImageCard";
import { LazyRender } from "../../../components/shared/LazyRender";
import { logger } from "../../../logger";
import { ImportProgress } from "../../importer/components/ImportProgress";
import { SearchBar } from "../../search/components/SearchBar";
import { TagManagerView } from "../../tags/components/TagManagerView";
import { ImageViewer } from "../../viewer/components/ImageViewer";
import { useGalleryLogic } from "../hooks/useGalleryLogic";
import { BulkActionBar } from "./BulkActionBar";
import "../../../styles/Gallery.css";

export const GalleryPanel: React.FC = () => {
	const {
		state,
		dispatch,
		refreshImages,
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
	} = useGalleryLogic();

	logger.log("GalleryPanel: rendering", {
		imageCount: state.images.length,
		displayedCount: displayedImages.length,
		visibleCount: visibleImages.length,
		isLoading: state.isLoading,
		activeModal: state.activeModal.type,
	});

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

			<GalleryModals />
		</div>
	);
};
