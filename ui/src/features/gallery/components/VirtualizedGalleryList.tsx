import { useVirtualizer } from "@tanstack/react-virtual";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ImageCard } from "../../../components/shared/ImageCard";
import type { MeldImage, Settings } from "../../../types";

const GRID_GAP = 6;
const LIST_MARGIN = 20;

interface VirtualizedGalleryListProps {
	visibleImages: MeldImage[];
	settings: Settings;
	loadMoreRef: React.RefObject<HTMLDivElement>;
	viewerImageId: number | null;
	isLoading: boolean;
	localLimit: number;
	displayedImagesLength: number;
	hasMore: boolean;
}

export const VirtualizedGalleryList: React.FC<VirtualizedGalleryListProps> = ({
	visibleImages,
	settings,
	loadMoreRef,
	viewerImageId,
	isLoading,
	localLimit,
	displayedImagesLength,
	hasMore,
}) => {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [containerWidth, setContainerWidth] = useState(300);

	const thumbSize = settings["sidebar.thumbnail_size"] || 100;
	const isGridOnly = settings["gallery.view_mode"] === "grid_only";

	// Measure container width for grid column count
	useEffect(() => {
		const el = scrollRef.current;
		if (!el) return;

		const updateWidth = () => {
			setContainerWidth(el.clientWidth);
		};

		updateWidth();
		const observer = new ResizeObserver(updateWidth);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	// Card full width is thumbSize + 10 (padding), plus GRID_GAP between columns
	const cardFullWidth = thumbSize + 10;
	const columnCount = isGridOnly
		? Math.max(
				1,
				Math.floor(
					(containerWidth - LIST_MARGIN * 2 + GRID_GAP) /
						(cardFullWidth + GRID_GAP),
				),
			)
		: 1;
	const rowCount = isGridOnly
		? Math.ceil(visibleImages.length / columnCount)
		: visibleImages.length;

	const rowHeightEstimate = isGridOnly
		? thumbSize + 10 + GRID_GAP
		: Math.max(thumbSize, 150) + 20;

	const virtualizer = useVirtualizer({
		count: rowCount,
		getScrollElement: () => scrollRef.current,
		estimateSize: () => rowHeightEstimate,
		overscan: 5,
		getItemKey: (index) =>
			isGridOnly
				? `row-${index}-${columnCount}`
				: (visibleImages[index]?.id ?? index),
	});

	// Scroll to image when ImageViewer opens
	useEffect(() => {
		if (viewerImageId === null) return;

		const index = visibleImages.findIndex((img) => img.id === viewerImageId);
		if (index < 0) return;

		const rowIndex = isGridOnly ? Math.floor(index / columnCount) : index;
		virtualizer.scrollToIndex(rowIndex, {
			align: "center",
			behavior: "smooth",
		});
	}, [viewerImageId, visibleImages, isGridOnly, columnCount, virtualizer]);

	const virtualItems = virtualizer.getVirtualItems();

	return (
		<div
			ref={scrollRef}
			className="meld-gallery__list-scroll"
			style={
				{
					"--meld-thumbnail-size": `${thumbSize}px`,
				} as React.CSSProperties
			}
		>
			<div
				className={`meld-gallery__list ${isGridOnly ? "meld-gallery__list--grid-only meld-gallery__list--virtualized" : "meld-gallery__list--virtualized"}`}
				style={{
					height: `${virtualizer.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				}}
			>
				{virtualItems.map((virtualRow) => {
					if (isGridOnly) {
						const startIdx = virtualRow.index * columnCount;
						const endIdx = Math.min(
							startIdx + columnCount,
							visibleImages.length,
						);
						const rowImages = visibleImages.slice(startIdx, endIdx);

						return (
							<div
								key={virtualRow.key}
								className="meld-gallery__virtual-grid-row"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									transform: `translateY(${virtualRow.start}px)`,
									display: "flex",
									flexWrap: "wrap",
									gap: GRID_GAP,
									alignItems: "flex-start",
								}}
							>
								{rowImages.map((image) => (
									<div
										key={image.id}
										data-image-id={image.id}
										style={{
											width: "auto",
											flexShrink: 0,
											display: "inline-block",
										}}
									>
										<div
											style={{
												width:
													image.width && image.height
														? Math.min(
																thumbSize,
																(thumbSize * image.width) / image.height,
															) + 10
														: thumbSize + 10,
												minWidth: thumbSize + 10,
											}}
										>
											<ImageCard image={image} />
										</div>
									</div>
								))}
							</div>
						);
					}

					const image = visibleImages[virtualRow.index];
					if (!image) return null;

					return (
						<div
							key={virtualRow.key}
							data-image-id={image.id}
							className="meld-gallery__virtual-row"
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								transform: `translateY(${virtualRow.start}px)`,
							}}
						>
							<ImageCard image={image} />
						</div>
					);
				})}
			</div>
			<div
				ref={loadMoreRef}
				className="meld-gallery__load-more"
				style={{
					height: "20px",
					margin: "20px 0",
					textAlign: "center",
				}}
			>
				{isLoading && (
					<div className="meld-gallery__loading">Loading more...</div>
				)}
				{localLimit >= displayedImagesLength &&
					!hasMore &&
					visibleImages.length > 0 && (
						<div className="meld-gallery__end">End of gallery</div>
					)}
			</div>
		</div>
	);
};
