import { useEffect } from "react";
import { logger } from "../../../../logger";
import type { GalleryState, MeldImage, Settings } from "../../../../types";
import { getImageViewUrl } from "../../../../utils/url";

function getAdjacentIds(params: {
	ids: number[];
	index: number;
	loopEnabled: boolean;
	hasMore: boolean;
}): { prevId: number | null; nextId: number | null } {
	const { ids, index, loopEnabled, hasMore } = params;
	if (ids.length === 0 || index < 0 || index >= ids.length) {
		return { prevId: null, nextId: null };
	}

	const atStart = index === 0;
	const atEnd = index === ids.length - 1;

	const nextId = atEnd
		? hasMore || !loopEnabled
			? null
			: (ids[0] ?? null)
		: (ids[index + 1] ?? null);
	const prevId = atStart
		? hasMore || !loopEnabled
			? null
			: (ids[ids.length - 1] ?? null)
		: (ids[index - 1] ?? null);

	return { prevId, nextId };
}

interface UseViewerPrefetchParams {
	viewerImageId: number | null;
	currentThumbnails: MeldImage[];
	currentIndex: number;
	isFullscreen: boolean;
	settings: Settings;
	hasMore: boolean;
	viewerMode: GalleryState["viewerMode"];
	isLoading: boolean;
	loadMoreImages: () => void;
	fetchFullImageDetails: (id: number) => Promise<MeldImage>;
}

export const useViewerPrefetch = ({
	viewerImageId,
	currentThumbnails,
	currentIndex,
	isFullscreen,
	settings,
	hasMore,
	viewerMode,
	isLoading,
	loadMoreImages,
	fetchFullImageDetails,
}: UseViewerPrefetchParams) => {
	useEffect(() => {
		if (
			viewerMode !== "gallery" ||
			viewerImageId === null ||
			isLoading ||
			!hasMore ||
			currentIndex === -1
		) {
			return;
		}

		if (currentIndex >= currentThumbnails.length - 15) {
			loadMoreImages();
		}
	}, [
		currentIndex,
		currentThumbnails.length,
		hasMore,
		isLoading,
		loadMoreImages,
		viewerImageId,
		viewerMode,
	]);

	useEffect(() => {
		if (viewerImageId === null || currentThumbnails.length === 0) return;

		const ids = currentThumbnails.map((img) => img.id);
		const index = ids.indexOf(viewerImageId);
		if (index === -1) return;

		const loopEnabled = isFullscreen ? settings["fullscreen.loop"] : settings["viewer.loop"];

		const { prevId, nextId } = getAdjacentIds({
			ids,
			index,
			loopEnabled,
			hasMore: hasMore && viewerMode === "gallery",
		});

		const timer = setTimeout(() => {
			const toFetch = [prevId, nextId].filter(
				(id): id is number => id !== null && id !== viewerImageId,
			);

			if (toFetch.length === 0) return;

			Promise.allSettled(toFetch.map((id) => fetchFullImageDetails(id))).then((results) => {
				for (const res of results) {
					if (res.status === "rejected") {
						logger.warn("Prefetching adjacent image details failed", res.reason);
					}
				}
			});
		}, 50);

		return () => clearTimeout(timer);
	}, [
		currentThumbnails,
		fetchFullImageDetails,
		hasMore,
		isFullscreen,
		settings,
		viewerImageId,
		viewerMode,
	]);

	useEffect(() => {
		if (viewerImageId === null || currentThumbnails.length === 0) return;
		if (currentIndex === -1) return;

		const indicesToPreload = [currentIndex + 1, currentIndex + 2, currentIndex - 1];
		const timer = setTimeout(() => {
			for (const idx of indicesToPreload) {
				if (idx >= 0 && idx < currentThumbnails.length) {
					const img = currentThumbnails[idx];
					if (!img) continue;
					const preloader = new Image();
					preloader.src = getImageViewUrl(img);
				}
			}
		}, 150);

		return () => clearTimeout(timer);
	}, [currentIndex, currentThumbnails, viewerImageId]);
};
