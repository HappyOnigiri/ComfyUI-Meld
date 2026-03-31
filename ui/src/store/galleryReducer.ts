import { DEFAULT_SETTINGS } from "../settings";
import type { GalleryAction, GalleryState } from "../types";
import { composeGalleryReducer } from "./reducers";

export const initialState: GalleryState = {
	images: [],
	selectedIds: new Set<number>(),
	isLoading: false,
	error: null,
	viewScope: "default",
	viewerImageId: null,
	viewerMode: "gallery",
	viewerLightTableSlotId: null,
	viewerInitialMaskMode: false,
	viewerFallbackImage: null,
	lineageImages: [],
	activeModal: { type: "none" },
	lastSelectedId: null,
	scanStatus: {
		isRunning: false,
		isFinished: false,
		shouldCancel: false,
		progress: { current: 0, total: 0, phase: "" },
		newCount: 0,
		updatedCount: 0,
		totalCount: 0,
	},
	settings: DEFAULT_SETTINGS,
	pagination: {
		total: 0,
		offset: 0,
		limit: 100,
		hasMore: false,
	},
	searchQuery: "",
	favorites: [],
	toastMessage: null,
	toastType: "info",
	confirmModal: null,
};

export function galleryReducer(state: GalleryState, action: GalleryAction): GalleryState {
	return composeGalleryReducer(state, action);
}
