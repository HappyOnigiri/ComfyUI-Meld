import { Download, RefreshCw, Settings } from "lucide-react";
import type React from "react";
import { useEffect, useRef } from "react";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import { BulkActionBar } from "./BulkActionBar";
import { ImageCard } from "./ImageCard";
import { ImageViewer } from "./ImageViewer";
import { ImportModal } from "./ImportModal";
import { ParentSelectionModal } from "./ParentSelectionModal";
import { SearchBar } from "./SearchBar";
import { SettingsModal } from "./SettingsModal";
import "../styles/Gallery.css";

export const GalleryPanel: React.FC = () => {
	const { state, dispatch, refreshImages, loadMoreImages } = useGallery();
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
					justifyContent: "space-between",
					alignItems: "flex-start",
					marginBottom: "15px",
					gap: "20px",
				}}
			>
				<SearchBar />
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
						onClick={() =>
							dispatch({ type: "OPEN_MODAL", payload: { type: "import" } })
						}
						style={{
							background: "none",
							border: "none",
							color: "#888",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}
					>
						<Download size={14} />
						Import
					</button>
					<button
						type="button"
						onClick={() => refreshImages()}
						style={{
							background: "none",
							border: "none",
							color: "#888",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}
						disabled={state.isLoading}
					>
						<RefreshCw
							size={14}
							className={state.isLoading ? "animate-spin" : ""}
						/>
						Refresh
					</button>
					<button
						type="button"
						onClick={() =>
							dispatch({ type: "OPEN_MODAL", payload: { type: "settings" } })
						}
						style={{
							background: "none",
							border: "none",
							color: "#888",
							cursor: "pointer",
							display: "flex",
							alignItems: "center",
							gap: "5px",
						}}
						title="Settings"
					>
						<Settings size={14} />
						Settings
					</button>
				</div>
			</div>

			{state.error && <div className="meld-gallery__error">{state.error}</div>}

			{state.isLoading && displayedImages.length === 0 ? (
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
		</div>
	);
};
