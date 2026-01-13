import type { GalleryAction, GalleryState, MeldImage } from "../types";

export const initialState: GalleryState = {
	images: [],
	selectedIds: new Set<number>(),
	isLoading: false,
	error: null,
	lastUpdated: Date.now(),
	viewMode: "list",
	viewerImageId: null,
	viewerMode: "gallery",
	lineageImages: [],
	activeModal: { type: "none" },
	lastSelectedId: null,
	scanStatus: {
		isRunning: false,
		isFinished: false,
		shouldCancel: false,
		progress: { current: 0, total: 0, phase: "" },
		newCount: 0,
		totalCount: 0,
	},
	settings: {
		dev_mode: false,
		"gallery.show_parent_image": true,
		"gallery.hide_parent_images": true,
		"sidebar.show_filename": true,
		"sidebar.show_dimensions": true,
		"sidebar.show_model_name": true,
		"sidebar.show_positive_prompt": true,
		"sidebar.show_negative_prompt": false,
		"sidebar.show_tags": true,
		"search.quick_suggestions": true,
		"search.input_suggest": true,
		"search.realtime_search": true,
		"viewer.loop": true,
		"fullscreen.show_filename": true,
		"fullscreen.show_icons": true,
		"fullscreen.loop": true,
		"viewer.show_details_by_default": true,
		"viewer.details.show_filename": true,
		"viewer.details.show_dimensions": true,
		"viewer.details.show_created_at": true,
		"viewer.details.show_tags": true,
		"viewer.details.show_model_name": true,
		"viewer.details.show_positive_prompt": true,
		"viewer.details.show_negative_prompt": true,
		"viewer.details.max_positive_prompt_lines": 7,
		"viewer.details.max_negative_prompt_lines": 7,
		"gallery.page_size": 30,
		"viewer.thumbnail_window_size": 15,
		"viewer.show_thumbnails": true,
	},
	pagination: {
		total: 0,
		offset: 0,
		limit: 30,
		hasMore: false,
	},
	searchQuery: "",
	favorites: [],
};

export function galleryReducer(
	state: GalleryState,
	action: GalleryAction,
): GalleryState {
	switch (action.type) {
		case "SET_FAVORITES":
			return {
				...state,
				favorites: action.payload,
			};
		case "SET_IMAGES": {
			const { images, total, offset } = action.payload;
			// If viewer is open and in gallery mode, check if the image still exists
			let newViewerId = state.viewerImageId;
			if (
				state.viewerMode === "gallery" &&
				newViewerId !== null &&
				!images.some((img) => img.id === newViewerId)
			) {
				newViewerId = null;
			}
			return {
				...state,
				images,
				isLoading: false,
				error: null,
				viewerImageId: newViewerId,
				pagination: {
					total,
					offset,
					limit: state.pagination.limit,
					hasMore: offset + images.length < total,
				},
			};
		}
		case "APPEND_IMAGES": {
			const { images, total, offset } = action.payload;
			const combinedImages = [...state.images, ...images];
			// Filter out potential duplicates if any (shouldn't happen with correct offset/limit)
			const uniqueImages = Array.from(
				new Map(combinedImages.map((img) => [img.id, img])).values(),
			);

			return {
				...state,
				images: uniqueImages,
				isLoading: false,
				error: null,
				pagination: {
					...state.pagination,
					total,
					offset,
					hasMore: offset + images.length < total,
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
		case "TOGGLE_SELECT": {
			const newSelectedIds = new Set<number>(state.selectedIds);
			let lastSelectedId = state.lastSelectedId;
			if (newSelectedIds.has(action.payload)) {
				newSelectedIds.delete(action.payload);
				if (lastSelectedId === action.payload) {
					lastSelectedId = null;
				}
			} else {
				newSelectedIds.add(action.payload);
				lastSelectedId = action.payload;
			}
			return {
				...state,
				selectedIds: newSelectedIds,
				lastSelectedId,
			};
		}
		case "SELECT_RANGE": {
			if (state.lastSelectedId === null) {
				// No last selected image, so just toggle this one
				const newSelectedIds = new Set<number>(state.selectedIds);
				newSelectedIds.add(action.payload);
				return {
					...state,
					selectedIds: newSelectedIds,
					lastSelectedId: action.payload,
				};
			}

			const startIndex = state.images.findIndex(
				(img) => img.id === state.lastSelectedId,
			);
			const endIndex = state.images.findIndex(
				(img) => img.id === action.payload,
			);

			if (startIndex === -1 || endIndex === -1) return state;

			const [minIdx, maxIdx] = [
				Math.min(startIndex, endIndex),
				Math.max(startIndex, endIndex),
			];
			const newSelectedIds = new Set<number>(state.selectedIds);

			for (let i = minIdx; i <= maxIdx; i++) {
				newSelectedIds.add(state.images[i].id);
			}

			return {
				...state,
				selectedIds: newSelectedIds,
				lastSelectedId: action.payload,
			};
		}
		case "SELECT_ALL":
			return {
				...state,
				selectedIds: new Set<number>(
					state.images.map((img: MeldImage) => img.id),
				),
				lastSelectedId: state.images.length > 0 ? state.images[0].id : null,
			};
		case "CLEAR_SELECTION":
			return {
				...state,
				selectedIds: new Set<number>(),
				lastSelectedId: null,
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
		case "OPEN_VIEWER": {
			const payload = action.payload;
			const newId = typeof payload === "number" ? payload : payload.id;
			const newMode = typeof payload === "number" ? "gallery" : payload.mode;

			const isSameLineage =
				state.viewerMode === "lineage" &&
				newMode === "lineage" &&
				state.lineageImages.some((img) => img.id === newId);

			return {
				...state,
				viewerImageId: newId,
				viewerMode: newMode,
				lineageImages: isSameLineage ? state.lineageImages : [],
			};
		}
		case "CLOSE_VIEWER":
			return {
				...state,
				viewerImageId: null,
				lineageImages: [],
			};
		case "NEXT_IMAGE": {
			const isFullscreen = action.payload?.isFullscreen ?? false;
			const loopEnabled = isFullscreen
				? state.settings["fullscreen.loop"]
				: state.settings["viewer.loop"];

			const currentList =
				state.viewerMode === "lineage" && state.lineageImages.length > 0
					? state.lineageImages
					: state.images.filter(
							(img) =>
								img.exists !== false &&
								!(
									state.settings["gallery.hide_parent_images"] &&
									img.has_children
								),
						);

			if (state.viewerImageId === null || currentList.length === 0)
				return state;
			const currentIndex = currentList.findIndex(
				(img) => img.id === state.viewerImageId,
			);
			if (currentIndex === -1) return state;

			// If we're at the end and there's more to load, don't wrap around
			if (
				currentIndex === currentList.length - 1 &&
				state.viewerMode === "gallery" &&
				state.pagination.hasMore
			) {
				return state;
			}

			// If loop is disabled and we're at the end, don't wrap around
			if (currentIndex === currentList.length - 1 && !loopEnabled) {
				return state;
			}

			const nextIndex = (currentIndex + 1) % currentList.length;
			return {
				...state,
				viewerImageId: currentList[nextIndex].id,
			};
		}
		case "PREVIOUS_IMAGE": {
			const isFullscreen = action.payload?.isFullscreen ?? false;
			const loopEnabled = isFullscreen
				? state.settings["fullscreen.loop"]
				: state.settings["viewer.loop"];

			const currentList =
				state.viewerMode === "lineage" && state.lineageImages.length > 0
					? state.lineageImages
					: state.images.filter(
							(img) =>
								img.exists !== false &&
								!(
									state.settings["gallery.hide_parent_images"] &&
									img.has_children
								),
						);

			if (state.viewerImageId === null || currentList.length === 0)
				return state;
			const currentIndex = currentList.findIndex(
				(img) => img.id === state.viewerImageId,
			);
			if (currentIndex === -1) return state;

			// If we're at the beginning and there's more to load, don't wrap around automatically.
			// The UI will handle fetching the last page if needed.
			if (
				currentIndex === 0 &&
				state.viewerMode === "gallery" &&
				state.pagination.hasMore
			) {
				return state;
			}

			// If loop is disabled and we're at the beginning, don't wrap around
			if (currentIndex === 0 && !loopEnabled) {
				return state;
			}

			const prevIndex =
				(currentIndex - 1 + currentList.length) % currentList.length;
			return {
				...state,
				viewerImageId: currentList[prevIndex].id,
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
		case "SET_SCAN_STATUS":
			return {
				...state,
				scanStatus: {
					...state.scanStatus,
					...action.payload,
					progress: {
						...state.scanStatus.progress,
						...(action.payload.progress || {}),
					},
				},
			};
		case "SET_SETTINGS": {
			const newSettings = {
				...state.settings,
				...action.payload,
			};
			const newPagination = { ...state.pagination };
			if (action.payload["gallery.page_size"] !== undefined) {
				newPagination.limit = action.payload["gallery.page_size"];
			}
			return {
				...state,
				settings: newSettings,
				pagination: newPagination,
			};
		}
		case "SET_SEARCH_QUERY":
			return {
				...state,
				searchQuery: action.payload,
			};
		default:
			return state;
	}
}
