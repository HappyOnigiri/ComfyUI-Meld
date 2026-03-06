import {
	BarChart2,
	Download,
	LayoutGrid,
	LayoutList,
	PanelBottom,
	RefreshCw,
	Search,
	Settings,
	Star,
	Tag,
	Trash2,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useRef, useState } from "react";
import { GalleryModals } from "../../../components/shared/GalleryModals";
import { logger } from "../../../logger";
import { AnalyticsView } from "../../analytics/components/AnalyticsView";
import { ImportProgress } from "../../importer/components/ImportProgress";
import { LightTable } from "../../light-table/components/LightTable";
import { useLightTableStore } from "../../light-table/store";
import type { TrayState } from "../../light-table/types";
import { FavoritesContextMenu } from "../../search/components/FavoritesContextMenu";
import { SearchBar } from "../../search/components/SearchBar";
import { TagManagerView } from "../../tags/components/TagManagerView";
import { ImageViewer } from "../../viewer/components/ImageViewer";
import { useGalleryLogic } from "../hooks/useGalleryLogic";
import { BulkActionBar } from "./BulkActionBar";
import { VirtualizedGalleryList } from "./VirtualizedGalleryList";
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
		displayedImages,
		visibleImages,
		isSearchActive,
		loadMoreRef,
	} = useGalleryLogic();
	const isLightTableOpen = useLightTableStore((s) => s.isOpen);
	const setIsLightTableOpen = useLightTableStore((s) => s.setIsOpen);
	const lightTableBuckets = useLightTableStore((s: TrayState) => s.buckets);
	const hasImagesInLightTable = (Object.values(lightTableBuckets) as string[][]).some(
		(bucket: string[]) => bucket && bucket.length > 0,
	);
	logger.log("GalleryPanel: isLightTableOpen =", isLightTableOpen);

	const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
	const [favoritesAnchorRect, setFavoritesAnchorRect] = useState<DOMRect | null>(null);
	const favoritesButtonRef = useRef<HTMLButtonElement>(null);

	const handleOpenFavorites = useCallback(() => {
		if (favoritesButtonRef.current) {
			setFavoritesAnchorRect(favoritesButtonRef.current.getBoundingClientRect());
			setIsFavoritesOpen(true);
		}
	}, []);

	const handleSelectFavorite = useCallback(
		(query: string) => {
			dispatch({ type: "SET_SEARCH_QUERY", payload: query });
			setLastSearchQuery(query);
			setViewMode("search");
			setIsFavoritesOpen(false);
		},
		[dispatch, setLastSearchQuery, setViewMode],
	);

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
			onDragOver={(e) => {
				const isFromSlot = e.dataTransfer.types.includes("application/meld-lt-source-slot");
				if (isFromSlot) {
					e.preventDefault();
					e.dataTransfer.dropEffect = "move";
				}
			}}
			onDrop={(e) => {
				const sourceSlot = e.dataTransfer.getData("application/meld-lt-source-slot");
				if (sourceSlot) {
					e.preventDefault();
					const transferredData = e.dataTransfer.getData("text/plain");
					if (transferredData) {
						const imageIds = transferredData.split(",");
						const idsToDeselect: number[] = [];
						imageIds.forEach((id) => {
							if (id) {
								const cleanId = id.trim();
								useLightTableStore.getState().removeFromBucket(sourceSlot, cleanId);
								const numId = Number(cleanId);
								if (!Number.isNaN(numId)) {
									idsToDeselect.push(numId);
								}
							}
						});
						if (idsToDeselect.length > 0) {
							dispatch({ type: "DESELECT_IMAGES", payload: idsToDeselect });
						}
					}
				}
			}}
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
								onChange={(e) => updateSetting("gallery.trash.show_missing", e.target.checked)}
							/>
							<span>Show missing files</span>
						</label>
						<button
							type="button"
							className="meld-gallery__exit-trash"
							onClick={() => dispatch({ type: "SET_VIEW_SCOPE", payload: "default" })}
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
							onClick={() => setViewMode(viewMode === "analytics" ? "gallery" : "analytics")}
							style={{
								background: "none",
								border: "none",
								color:
									viewMode === "analytics"
										? "var(--meld-accent-color)"
										: "var(--meld-text-secondary)",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
							title="Image Analytics"
						>
							<BarChart2 size={14} />
						</button>
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
						{state.favorites.length > 0 && (
							<button
								ref={favoritesButtonRef}
								type="button"
								onClick={handleOpenFavorites}
								style={{
									background: "none",
									border: "none",
									color: isFavoritesOpen
										? "var(--brand-yellow, #ffd700)"
										: "var(--meld-text-secondary)",
									cursor: "pointer",
									display: "flex",
									alignItems: "center",
								}}
								title="Favorites"
							>
								<Star size={14} fill={isFavoritesOpen ? "var(--brand-yellow, #ffd700)" : "none"} />
							</button>
						)}
						<button
							type="button"
							onClick={() => setViewMode(viewMode === "tags" ? "gallery" : "tags")}
							style={{
								background: "none",
								border: "none",
								color:
									viewMode === "tags" ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
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
							onClick={() => {
								const currentMode = state.settings["gallery.view_mode"] || "grid_details";
								const nextMode = currentMode === "grid_details" ? "grid_only" : "grid_details";
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
							onClick={() => {
								logger.log(
									"GalleryPanel: Toggle Light Table clicked, from",
									isLightTableOpen,
									"to",
									!isLightTableOpen,
								);
								setIsLightTableOpen(!isLightTableOpen);
							}}
							style={{
								background: "none",
								border: "none",
								color: isLightTableOpen
									? "var(--brand-yellow, #ffd700)"
									: "var(--meld-text-secondary)",
								position: "relative",
								cursor: "pointer",
								display: "flex",
								alignItems: "center",
							}}
							title="Light Table"
						>
							<div style={{ position: "relative" }}>
								<PanelBottom
									size={14}
									fill={isLightTableOpen ? "var(--brand-yellow, #ffd700)" : "none"}
									style={{ opacity: isLightTableOpen ? 1 : 0.8 }}
								/>
								{!isLightTableOpen && hasImagesInLightTable && (
									<div
										style={{
											position: "absolute",
											top: "-2px",
											right: "-2px",
											width: "6px",
											height: "6px",
											borderRadius: "50%",
											backgroundColor: "var(--brand-yellow, #ffd700)",
											boxShadow: "0 0 2px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
										}}
									/>
								)}
							</div>
						</button>
						<button
							type="button"
							onClick={() => dispatch({ type: "OPEN_MODAL", payload: { type: "import" } })}
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
							<RefreshCw size={14} className={state.isLoading ? "animate-spin" : ""} />
						</button>
						<button
							type="button"
							onClick={() => dispatch({ type: "OPEN_MODAL", payload: { type: "settings" } })}
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

			{/* Scrollable content area below the header */}
			<div className="meld-gallery__content">
				<ImportProgress />

				{state.error && <div className="meld-gallery__error">{state.error}</div>}

				{viewMode === "analytics" ? (
					<div
						className="meld-gallery__list-wrapper"
						style={{
							flex: 1,
							minHeight: 0,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<AnalyticsView
							onClose={() => setViewMode("gallery")}
							onSearchAndNavigate={(query) => {
								dispatch({ type: "SET_SEARCH_QUERY", payload: query });
								setViewMode("search");
							}}
						/>
					</div>
				) : viewMode === "tags" ? (
					<TagManagerView
						onClose={() => setViewMode("gallery")}
						onSearch={(query) => {
							dispatch({ type: "SET_SEARCH_QUERY", payload: query });
							setViewMode("search");
						}}
					/>
				) : state.isLoading && displayedImages.length === 0 ? (
					<div
						className="meld-gallery__list-wrapper"
						style={{
							flex: 1,
							minHeight: 0,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div className="meld-gallery__loading">Loading images...</div>
					</div>
				) : visibleImages.length === 0 ? (
					<div
						className="meld-gallery__list-wrapper"
						style={{
							flex: 1,
							minHeight: 0,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<div className="meld-gallery__empty">No images found.</div>
					</div>
				) : (
					<div
						className="meld-gallery__list-wrapper"
						style={{
							flex: 1,
							minHeight: 0,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<VirtualizedGalleryList
							visibleImages={visibleImages}
							settings={state.settings}
							loadMoreRef={loadMoreRef}
							viewerImageId={state.viewerImageId}
							isLoading={state.isLoading}
							hasMore={state.pagination.hasMore}
						/>
					</div>
				)}

				<BulkActionBar />
			</div>

			{state.viewerImageId !== null && <ImageViewer />}

			<GalleryModals />

			{isFavoritesOpen && (
				<FavoritesContextMenu
					anchorRect={favoritesAnchorRect}
					onClose={() => setIsFavoritesOpen(false)}
					onSelect={handleSelectFavorite}
				/>
			)}

			{/* Rendered at the bottom of the screen via Portal */}
			<LightTable />
		</div>
	);
};
