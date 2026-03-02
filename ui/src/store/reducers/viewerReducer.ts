import { useLightTableStore } from "../../features/light-table/store";
import type { MeldImage } from "../../types";
import type { GallerySubReducer } from "./types";
import { resolveInitialMaskMode } from "./viewerModalHelpers";

function getCurrentViewerList(
	state: Parameters<GallerySubReducer>[0],
): MeldImage[] {
	const isSearchActive = state.searchQuery.trim() !== "";
	if (state.viewerMode === "lighttable" && state.viewerLightTableSlotId) {
		const ltStore = useLightTableStore.getState();
		const bucketIds = ltStore.buckets[state.viewerLightTableSlotId] || [];
		return bucketIds
			.map((idStr) => {
				const idNum = Number.parseInt(idStr, 10);
				return (
					state.images.find((img) => img.id === idNum) ||
					state.lineageImages.find((img) => img.id === idNum) ||
					null
				);
			})
			.filter((img): img is MeldImage => img !== null);
	}
	if (state.viewerMode === "lineage" && state.lineageImages.length > 0) {
		return state.lineageImages;
	}
	return state.images.filter(
		(img) =>
			img.exists !== false &&
			(state.settings["gallery.show_parent_images"] ||
				isSearchActive ||
				!img.has_children),
	);
}

export const viewerReducer: GallerySubReducer = (state, action) => {
	switch (action.type) {
		case "SET_IMAGES": {
			const { images } = action.payload;
			let newViewerId = state.viewerImageId;
			let viewerFallbackImage = null;
			if (
				state.viewerMode === "gallery" &&
				newViewerId !== null &&
				!images.some((img) => img.id === newViewerId)
			) {
				const existingImage =
					state.images.find((img) => img.id === newViewerId) ||
					(state.viewerFallbackImage?.id === newViewerId
						? state.viewerFallbackImage
						: undefined);
				if (existingImage) {
					viewerFallbackImage = existingImage;
				} else {
					newViewerId = null;
				}
			}
			return {
				...state,
				viewerImageId: newViewerId,
				viewerFallbackImage,
			};
		}
		case "OPEN_VIEWER": {
			const payload = action.payload;
			const newId = typeof payload === "number" ? payload : payload.id;
			const newMode = typeof payload === "number" ? "gallery" : payload.mode;
			const slotId =
				typeof payload !== "number" && payload.mode === "lighttable"
					? payload.slotId
					: null;
			const initialMaskMode = resolveInitialMaskMode(payload);

			if (initialMaskMode) {
				return state;
			}

			const isSameLineage =
				state.viewerMode === "lineage" &&
				newMode === "lineage" &&
				state.lineageImages.some((img) => img.id === newId);

			return {
				...state,
				viewerImageId: newId,
				viewerMode: newMode,
				viewerLightTableSlotId: slotId,
				viewerInitialMaskMode: initialMaskMode,
				lineageImages: isSameLineage ? state.lineageImages : [],
			};
		}
		case "CLOSE_VIEWER":
			return {
				...state,
				viewerImageId: null,
				viewerLightTableSlotId: null,
				viewerInitialMaskMode: false,
				viewerFallbackImage: null,
				lineageImages: [],
			};
		case "NEXT_IMAGE": {
			const isFullscreen = action.payload?.isFullscreen ?? false;
			const loopEnabled = isFullscreen
				? state.settings["fullscreen.loop"]
				: state.settings["viewer.loop"];
			const currentList = getCurrentViewerList(state);
			if (state.viewerImageId === null || currentList.length === 0)
				return state;
			const currentIndex = currentList.findIndex(
				(img) => img.id === state.viewerImageId,
			);
			if (currentIndex === -1) return state;
			if (
				currentIndex === currentList.length - 1 &&
				state.viewerMode === "gallery" &&
				state.pagination.hasMore
			) {
				return state;
			}
			if (currentIndex === currentList.length - 1 && !loopEnabled) {
				return state;
			}
			const nextIndex = (currentIndex + 1) % currentList.length;
			const nextImage = currentList[nextIndex];
			return nextImage
				? {
						...state,
						viewerImageId: nextImage.id,
					}
				: state;
		}
		case "PREVIOUS_IMAGE": {
			const isFullscreen = action.payload?.isFullscreen ?? false;
			const loopEnabled = isFullscreen
				? state.settings["fullscreen.loop"]
				: state.settings["viewer.loop"];
			const currentList = getCurrentViewerList(state);
			if (state.viewerImageId === null || currentList.length === 0)
				return state;
			const currentIndex = currentList.findIndex(
				(img) => img.id === state.viewerImageId,
			);
			if (currentIndex === -1) return state;
			if (
				currentIndex === 0 &&
				state.viewerMode === "gallery" &&
				state.pagination.hasMore
			) {
				return state;
			}
			if (currentIndex === 0 && !loopEnabled) {
				return state;
			}
			const prevIndex =
				(currentIndex - 1 + currentList.length) % currentList.length;
			const prevImage = currentList[prevIndex];
			return prevImage
				? {
						...state,
						viewerImageId: prevImage.id,
					}
				: state;
		}
		default:
			return state;
	}
};
