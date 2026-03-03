import { ArrowDown, ArrowUp, RefreshCw } from "lucide-react";
import type React from "react";
import { memo } from "react";
import type { GalleryAction, MeldImage } from "../../../types";
import { getThumbnailViewUrl } from "../../../utils/url";

// Memoized Thumbnail item to prevent unnecessary re-renders when navigating images
const ThumbnailItem = memo(
	({
		thumb,
		viewerImageId,
		currentImage,
		dispatch,
		viewerMode,
		lightTableSlotId,
	}: {
		thumb: MeldImage;
		viewerImageId: number | null;
		currentImage: MeldImage;
		dispatch: React.Dispatch<GalleryAction>;
		viewerMode: string;
		lightTableSlotId?: string | null;
	}) => {
		const isCurrent = thumb.id === viewerImageId;
		const isParent =
			typeof currentImage.parent_id === "number" && currentImage.parent_id === thumb.id;
		const isChild = typeof thumb.parent_id === "number" && thumb.parent_id === currentImage.id;

		const thumbSrc = getThumbnailViewUrl(thumb, 64);

		return (
			<div className="meld-viewer-thumbnail-wrapper">
				<div
					className={`meld-viewer-thumbnail ${isCurrent ? "meld-viewer-thumbnail--active" : ""} ${isParent ? "meld-viewer-thumbnail--parent" : ""} ${isChild ? "meld-viewer-thumbnail--child" : ""}`}
					onClick={() =>
						dispatch({
							type: "OPEN_VIEWER",
							payload: {
								id: thumb.id,
								mode: viewerMode as "gallery" | "lineage" | "lighttable",
								// Preserve slotId in lighttable mode
								...(viewerMode === "lighttable" && lightTableSlotId
									? { slotId: lightTableSlotId }
									: {}),
							},
						})
					}
					title={thumb.filename}
				>
					<img src={thumbSrc} alt={thumb.filename} />
					{(isParent || isChild) && (
						<div
							className={`meld-viewer-thumbnail-relation-icon ${isParent ? "meld-viewer-thumbnail-relation-icon--parent" : "meld-viewer-thumbnail-relation-icon--child"}`}
							title={isParent ? "Source Image" : "Derivative Image"}
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
	lightTableSlotId?: string | null;
}

export const ViewerThumbnailStrip: React.FC<ViewerThumbnailStripProps> = ({
	windowedThumbnails,
	viewerImageId,
	currentImage,
	dispatch,
	isLoadingLineage,
	isLoading,
	viewerMode,
	lightTableSlotId,
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
							viewerMode={viewerMode}
							lightTableSlotId={lightTableSlotId}
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
