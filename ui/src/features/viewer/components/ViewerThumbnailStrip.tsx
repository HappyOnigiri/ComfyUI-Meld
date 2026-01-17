import { ArrowDown, ArrowUp, RefreshCw } from "lucide-react";
import type React from "react";
import { memo } from "react";
import type { GalleryAction, MeldImage } from "../../../types";
import { getImageViewUrl } from "../../../utils/url";

// Memoized Thumbnail item to prevent unnecessary re-renders when navigating images
const ThumbnailItem = memo(
	({
		thumb,
		viewerImageId,
		currentImage,
		dispatch,
	}: {
		thumb: MeldImage;
		viewerImageId: number | null;
		currentImage: MeldImage;
		dispatch: React.Dispatch<GalleryAction>;
	}) => {
		const isCurrent = thumb.id === viewerImageId;
		const isParent =
			typeof currentImage.parent_id === "number" &&
			currentImage.parent_id === thumb.id;
		const isChild =
			typeof thumb.parent_id === "number" &&
			thumb.parent_id === currentImage.id;

		const thumbSrc = getImageViewUrl(thumb);

		return (
			<div className="meld-viewer-thumbnail-wrapper">
				<div
					className={`meld-viewer-thumbnail ${isCurrent ? "meld-viewer-thumbnail--active" : ""} ${isParent ? "meld-viewer-thumbnail--parent" : ""} ${isChild ? "meld-viewer-thumbnail--child" : ""}`}
					onClick={() =>
						dispatch({
							type: "OPEN_VIEWER",
							payload: { id: thumb.id, mode: "gallery" },
						})
					}
					title={thumb.filename}
				>
					<img src={thumbSrc} alt={thumb.filename} />
					{(isParent || isChild) && (
						<div
							className={`meld-viewer-thumbnail-relation-icon ${isParent ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`}
						>
							{isParent ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
						</div>
					)}
				</div>
			</div>
		);
	},
);

ThumbnailItem.displayName = "ThumbnailItem";

interface ViewerThumbnailStripProps {
	windowedThumbnails: { img: MeldImage; absIndex: number }[];
	viewerImageId: number | null;
	currentImage: MeldImage;
	dispatch: React.Dispatch<GalleryAction>;
	isLoadingLineage: boolean;
	isLoading: boolean;
	viewerMode: string;
}

export const ViewerThumbnailStrip: React.FC<ViewerThumbnailStripProps> = ({
	windowedThumbnails,
	viewerImageId,
	currentImage,
	dispatch,
	isLoadingLineage,
	isLoading,
	viewerMode,
}) => {
	return (
		<div className="meld-viewer-thumbnails-container">
			<div className="meld-viewer-thumbnails">
				{isLoadingLineage ? (
					<div
						style={{
							padding: "10px",
							color: "var(--meld-text-secondary)",
						}}
					>
						Loading lineage...
					</div>
				) : (
					windowedThumbnails.map(({ img }) => (
						<ThumbnailItem
							key={img.id}
							thumb={img}
							viewerImageId={viewerImageId}
							currentImage={currentImage}
							dispatch={dispatch}
						/>
					))
				)}
				{viewerMode === "gallery" && isLoading && (
					<div className="meld-viewer-thumbnail meld-viewer-thumbnail--loading">
						<RefreshCw className="animate-spin" size={20} />
					</div>
				)}
			</div>
		</div>
	);
};
