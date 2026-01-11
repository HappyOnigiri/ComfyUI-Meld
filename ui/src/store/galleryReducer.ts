import type { GalleryAction, GalleryState, MeldImage } from "../types";

export const initialState: GalleryState = {
	images: [],
	selectedIds: new Set<number>(),
	isLoading: false,
	error: null,
	lastUpdated: Date.now(),
	viewMode: "list",
	viewerImageId: null,
	activeModal: { type: "none" },
};

export function galleryReducer(
	state: GalleryState,
	action: GalleryAction,
): GalleryState {
	switch (action.type) {
		case "SET_IMAGES": {
			// If viewer is open, check if the image still exists
			let newViewerId = state.viewerImageId;
			if (
				newViewerId !== null &&
				!action.payload.some((img) => img.id === newViewerId)
			) {
				newViewerId = null;
			}
			return {
				...state,
				images: action.payload,
				isLoading: false,
				error: null,
				viewerImageId: newViewerId,
			};
		}
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
		case "TOGGLE_SELECT": {
			const newSelectedIds = new Set<number>(state.selectedIds);
			if (newSelectedIds.has(action.payload)) {
				newSelectedIds.delete(action.payload);
			} else {
				newSelectedIds.add(action.payload);
			}
			return {
				...state,
				selectedIds: newSelectedIds,
			};
		}
		case "SELECT_ALL":
			return {
				...state,
				selectedIds: new Set<number>(
					state.images.map((img: MeldImage) => img.id),
				),
			};
		case "CLEAR_SELECTION":
			return {
				...state,
				selectedIds: new Set<number>(),
			};
		case "SET_VIEW_MODE":
			return {
				...state,
				viewMode: action.payload,
			};
		case "REFRESH":
			return {
				...state,
				lastUpdated: Date.now(),
			};
		case "OPEN_VIEWER":
			return {
				...state,
				viewerImageId: action.payload,
			};
		case "CLOSE_VIEWER":
			return {
				...state,
				viewerImageId: null,
			};
		case "NEXT_IMAGE": {
			if (state.viewerImageId === null || state.images.length === 0)
				return state;
			const currentIndex = state.images.findIndex(
				(img) => img.id === state.viewerImageId,
			);
			const nextIndex = (currentIndex + 1) % state.images.length;
			return {
				...state,
				viewerImageId: state.images[nextIndex].id,
			};
		}
		case "PREVIOUS_IMAGE": {
			if (state.viewerImageId === null || state.images.length === 0)
				return state;
			const currentIndex = state.images.findIndex(
				(img) => img.id === state.viewerImageId,
			);
			const prevIndex =
				(currentIndex - 1 + state.images.length) % state.images.length;
			return {
				...state,
				viewerImageId: state.images[prevIndex].id,
			};
		}
		case "OPEN_MODAL":
			return {
				...state,
				activeModal: action.payload,
			};
		case "CLOSE_MODAL":
			return {
				...state,
				activeModal: { type: "none" },
			};
		default:
			return state;
	}
}
