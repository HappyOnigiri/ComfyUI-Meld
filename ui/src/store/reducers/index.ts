import type { GalleryAction, GalleryState } from "../../types";
import { imagesReducer } from "./imagesReducer";
import { modalReducer } from "./modalReducer";
import { selectionReducer } from "./selectionReducer";
import type { GallerySubReducer } from "./types";
import { uiMetaReducer } from "./uiMetaReducer";
import { viewerReducer } from "./viewerReducer";

const reducers: GallerySubReducer[] = [
	viewerReducer,
	imagesReducer,
	selectionReducer,
	modalReducer,
	uiMetaReducer,
];

export function composeGalleryReducer(state: GalleryState, action: GalleryAction): GalleryState {
	if (action.type === "REFRESH") {
		return state;
	}

	// Explicit cross-domain handoff:
	// switching scope must reset image list, selection, viewer, and pagination together.
	if (action.type === "SET_VIEW_SCOPE") {
		return {
			...state,
			viewScope: action.payload,
			images: [],
			selectedIds: new Set<number>(),
			viewerImageId: null,
			pagination: {
				...state.pagination,
				offset: 0,
				total: 0,
				hasMore: false,
			},
		};
	}

	return reducers.reduce((nextState, reducer) => {
		return reducer(nextState, action);
	}, state);
}
