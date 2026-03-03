import type React from "react";
import { useCallback } from "react";
import type { GalleryAction, GalleryState, MeldImage, Settings } from "../../../../types";
import * as imagesApi from "../../../images/api/imagesApi";
import type { ViewerMountRefs } from "./types";

interface UseViewerNavigationParams {
	dispatch: React.Dispatch<GalleryAction>;
	isFullscreen: boolean;
	settings: Settings;
	currentThumbnails: MeldImage[];
	currentIndex: number;
	viewerMode: GalleryState["viewerMode"];
	pagination: GalleryState["pagination"];
	searchQuery: string;
	isJumping: boolean;
	setIsJumping: React.Dispatch<React.SetStateAction<boolean>>;
	mountRefs: ViewerMountRefs;
}

export const useViewerNavigation = ({
	dispatch,
	isFullscreen,
	settings,
	currentThumbnails,
	currentIndex,
	viewerMode,
	pagination,
	searchQuery,
	isJumping,
	setIsJumping,
	mountRefs,
}: UseViewerNavigationParams) => {
	const currentListPayload = viewerMode === "lighttable" ? currentThumbnails : undefined;

	const handleNext = useCallback(() => {
		dispatch({
			type: "NEXT_IMAGE",
			payload: { isFullscreen, currentList: currentListPayload },
		});
	}, [currentListPayload, dispatch, isFullscreen]);

	const handlePrevious = useCallback(async () => {
		const loopEnabled = isFullscreen ? settings["fullscreen.loop"] : settings["viewer.loop"];

		if (
			currentIndex === 0 &&
			viewerMode === "gallery" &&
			pagination.hasMore &&
			!isJumping &&
			loopEnabled
		) {
			setIsJumping(true);
			try {
				const pageSize = pagination.limit;
				const total = pagination.total;
				const lastOffset = Math.max(0, total - pageSize);

				const result = await imagesApi.fetchImages(lastOffset, pageSize, searchQuery);
				if (!mountRefs.isMountedRef.current) return;
				dispatch({ type: "APPEND_IMAGES", payload: result });

				if (mountRefs.viewerImageIdRef.current === null) return;

				if (result.images.length > 0) {
					const lastImg = result.images[result.images.length - 1];
					dispatch({
						type: "OPEN_VIEWER",
						payload: { id: lastImg.id, mode: "gallery" },
					});
				}
			} catch (err) {
				console.error("Failed to jump to end:", err);
			} finally {
				setIsJumping(false);
			}
		} else {
			dispatch({
				type: "PREVIOUS_IMAGE",
				payload: { isFullscreen, currentList: currentListPayload },
			});
		}
	}, [
		currentListPayload,
		currentIndex,
		dispatch,
		isFullscreen,
		isJumping,
		mountRefs,
		pagination,
		searchQuery,
		setIsJumping,
		settings,
		viewerMode,
	]);

	return { handleNext, handlePrevious };
};
