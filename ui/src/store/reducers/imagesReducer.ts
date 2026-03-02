import type { GallerySubReducer } from "./types";

function dedupeImagesById<T extends { id: number }>(images: T[]): T[] {
	return Array.from(new Map(images.map((img) => [img.id, img])).values());
}

export const imagesReducer: GallerySubReducer = (state, action) => {
	switch (action.type) {
		case "SET_FAVORITES":
			return {
				...state,
				favorites: action.payload,
			};
		case "REMOVE_IMAGES": {
			const idsToRemove = new Set(action.payload);
			const newImages = dedupeImagesById(
				state.images.filter((img) => !idsToRemove.has(img.id)),
			);
			const newLineageImages = dedupeImagesById(
				state.lineageImages.filter((img) => !idsToRemove.has(img.id)),
			);
			// Keep totals aligned to unique image count deltas, not raw payload size.
			// Using payload.length would drift when duplicate ids are present.
			const newTotal = Math.max(
				0,
				state.pagination.total + (newImages.length - state.images.length),
			);
			return {
				...state,
				images: newImages,
				lineageImages: newLineageImages,
				pagination: {
					...state.pagination,
					total: newTotal,
				},
			};
		}
		case "ADD_IMAGES": {
			const mergedImages = [...state.images, ...action.payload];
			const uniqueImages = dedupeImagesById(mergedImages).sort(
				(a, b) => b.created_at - a.created_at,
			);
			// Keep totals aligned to net unique items after dedupe.
			// Raw payload length can overcount when incoming ids already exist.
			const newTotal = Math.max(
				0,
				state.pagination.total + (uniqueImages.length - state.images.length),
			);

			return {
				...state,
				images: uniqueImages,
				pagination: {
					...state.pagination,
					total: newTotal,
				},
			};
		}
		case "UPDATE_IMAGE": {
			const updatedImage = action.payload;
			const newImages = state.images.map((img) =>
				img.id === updatedImage.id ? updatedImage : img,
			);
			const newLineageImages = state.lineageImages.map((img) =>
				img.id === updatedImage.id ? updatedImage : img,
			);
			return {
				...state,
				images: newImages,
				lineageImages: newLineageImages,
			};
		}
		case "SET_IMAGES": {
			const { images, total, offset } = action.payload;
			const dedupedImages = dedupeImagesById(images);
			return {
				...state,
				images: dedupedImages,
				isLoading: false,
				error: null,
				pagination: {
					total,
					offset,
					limit: state.pagination.limit,
					// hasMore must use deduped length to preserve dedupe-aware pagination.
					hasMore: offset + dedupedImages.length < total,
				},
			};
		}
		case "APPEND_IMAGES": {
			const { images, total, offset } = action.payload;
			const combinedImages = [...state.images, ...images];
			const dedupedImages = dedupeImagesById(combinedImages);

			return {
				...state,
				images: dedupedImages,
				isLoading: false,
				error: null,
				pagination: {
					...state.pagination,
					total,
					offset,
					// hasMore must be based on total unique loaded items after merge.
					hasMore: dedupedImages.length < total,
				},
			};
		}
		case "SET_LINEAGE":
			return {
				...state,
				lineageImages: [...action.payload].reverse(),
			};
		case "SET_LOADING":
			return {
				...state,
				isLoading: action.payload,
			};
		case "SET_ERROR":
			return {
				...state,
				error: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
};
