import { Download, RefreshCw } from "lucide-react";
import type React from "react";
import { useEffect, useRef } from "react";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import { BulkActionBar } from "./BulkActionBar";
import { ImageCard } from "./ImageCard";
import { ImageViewer } from "./ImageViewer";
import { ImportModal } from "./ImportModal";
import { ParentSelectionModal } from "./ParentSelectionModal";
import "../styles/Gallery.css";

export const GalleryPanel: React.FC = () => {
	const { state, dispatch, refreshImages, loadMoreImages } = useGallery();
	const loadMoreRef = useRef<HTMLDivElement>(null);

	logger.log("GalleryPanel: rendering", {
		imageCount: state.images.length,
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
					justifyContent: "flex-end",
					marginBottom: "10px",
					gap: "15px",
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
			</div>

			{state.error && <div className="meld-gallery__error">{state.error}</div>}

			{state.isLoading && state.images.length === 0 ? (
				<div className="meld-gallery__loading">Loading images...</div>
			) : state.images.length === 0 ? (
				<div className="meld-gallery__empty">No images found.</div>
			) : (
				<>
					<div className="meld-gallery__list">
						{state.images.map((image) => (
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
						{!state.pagination.hasMore && state.images.length > 0 && (
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
		</div>
	);
};
