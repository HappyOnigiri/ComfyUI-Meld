import { useLightTableStore } from "../features/light-table/store";
import type { GalleryAction, GalleryState, MeldImage } from "../types";

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
	settings: {
		dev_mode: false,
		"gallery.show_parent_image": true,
		"gallery.show_parent_images": false,
		"sidebar.show_filename": "filename",
		"sidebar.show_dimensions": true,
		"sidebar.show_created_at": false,
		"sidebar.show_model_name": true,
		"sidebar.show_positive_prompt": true,
		"sidebar.show_negative_prompt": false,
		"sidebar.show_user_notes": "always",
		"sidebar.show_tags": true,
		"sidebar.thumbnail_size": 100,
		"search.quick_suggestions": true,
		"search.input_suggest": true,
		"viewer.loop": true,
		"fullscreen.show_icons": true,
		"fullscreen.loop": true,
		"fullscreen.show_details_by_default": true,
		"fullscreen.details.show_filename": "filename",
		"fullscreen.details.show_dimensions": true,
		"fullscreen.details.show_created_at": true,
		"fullscreen.details.show_tags": true,
		"fullscreen.details.show_model_name": true,
		"fullscreen.details.show_positive_prompt": true,
		"fullscreen.details.show_negative_prompt": true,
		"fullscreen.details.show_user_notes": "always",
		"fullscreen.details.show_source": true,
		"fullscreen.details.max_positive_prompt_lines": 7,
		"fullscreen.details.max_negative_prompt_lines": 7,
		"viewer.show_details_by_default": true,
		"viewer.details.show_filename": "filename",
		"viewer.details.show_dimensions": true,
		"viewer.details.show_created_at": true,
		"viewer.details.show_tags": true,
		"viewer.details.show_model_name": true,
		"viewer.details.show_positive_prompt": true,
		"viewer.details.show_negative_prompt": true,
		"viewer.details.show_user_notes": "always",
		"viewer.details.show_source": true,
		"viewer.details.max_positive_prompt_lines": 7,
		"viewer.details.max_negative_prompt_lines": 7,
		"gallery.initial_load_count": 100,
		"gallery.max_load_count": 10000,
		"viewer.thumbnail_window_size": 15,
		"viewer.show_thumbnails": true,
		"viewer.show_icons": true,
		"viewer.delete_mode": "confirm",
		"viewer.small_image_mode": "fit",
		"fullscreen.delete_mode": "confirm",
		"fullscreen.small_image_mode": "fit",
		"gallery.matching_strategy": "phash_created",
		"gallery.lineage_max_depth": 5,
		"gallery.trash_retention_days": 30,
		"gallery.trash.show_missing": false,
		"gallery.view_mode": "grid_details",
		"gallery.suggest_phash_threshold": 82,
		"gallery.auto_link_phash_threshold": 92,
		"gallery.inherit_tags": true,
		"viewer.shortcut.1": "tag:keep next",
		"viewer.shortcut.2": "tag:best next",
		"viewer.shortcut.3": "tag:fix-needed next",
		"viewer.shortcut.4": "",
		"viewer.shortcut.5": "",
		"viewer.shortcut.6": "",
		"viewer.shortcut.7": "",
		"viewer.shortcut.8": "",
		"viewer.shortcut.9": "",
		"viewer.shortcut.0": "",
		"viewer.shortcut.show_cheat_sheet": true,
		"gallery.quick_shortcut.1": "add_unified_loader",
		"gallery.quick_shortcut.2": "",
		"gallery.quick_shortcut.3": "",
		"search.show_all_keywords": true,
	},
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
		case "REMOVE_IMAGES": {
			const idsToRemove = new Set(action.payload);
			const newImages = state.images.filter((img) => !idsToRemove.has(img.id));
			const newSelectedIds = new Set(state.selectedIds);
			for (const id of action.payload) {
				newSelectedIds.delete(id);
			}
			return {
				...state,
				images: newImages,
				selectedIds: newSelectedIds,
				pagination: {
					...state.pagination,
					total: Math.max(0, state.pagination.total - action.payload.length),
				},
			};
		}
		case "ADD_IMAGES": {
			const imagesToAdd = action.payload;
			const newImages = [...state.images, ...imagesToAdd];
			// Deduplicate and sort by created_at DESC
			const uniqueImages = Array.from(
				new Map(newImages.map((img) => [img.id, img])).values(),
			).sort((a, b) => b.created_at - a.created_at);

			return {
				...state,
				images: uniqueImages,
				pagination: {
					...state.pagination,
					total: state.pagination.total + imagesToAdd.length,
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
			// If viewer is open and in gallery mode, check if the image still exists
			let newViewerId = state.viewerImageId;
			let viewerFallbackImage = null;
			if (
				state.viewerMode === "gallery" &&
				newViewerId !== null &&
				!images.some((img) => img.id === newViewerId)
			) {
				// Search state.images first, then fall back to state.viewerFallbackImage
				const existingImage =
					state.images.find((img) => img.id === newViewerId) ||
					(state.viewerFallbackImage?.id === newViewerId
						? state.viewerFallbackImage
						: undefined);
				if (existingImage) {
					// Preserve the currently viewed image in a fallback field so the viewer doesn't close
					viewerFallbackImage = existingImage;
				} else {
					newViewerId = null;
				}
			}
			return {
				...state,
				images,
				isLoading: false,
				error: null,
				viewerImageId: newViewerId,
				viewerFallbackImage,
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
		case "SET_VIEW_SCOPE":
			return {
				...state,
				viewScope: action.payload,
				images: [], // Clear images to force a fresh fetch
				selectedIds: new Set<number>(), // Clear selection when switching modes
				viewerImageId: null, // Close viewer when switching modes
				pagination: {
					...state.pagination,
					offset: 0,
					total: 0,
					hasMore: false,
				},
			};
		case "REFRESH":
			return state;
		case "OPEN_VIEWER": {
			const payload = action.payload;
			const newId = typeof payload === "number" ? payload : payload.id;
			const newMode = typeof payload === "number" ? "gallery" : payload.mode;
			const slotId =
				typeof payload !== "number" && payload.mode === "lighttable"
					? payload.slotId
					: null;
			let initialMaskMode: "apply" | "run" | false = false;
			if (typeof payload !== "number" && payload.initialMaskMode) {
				if (typeof payload.initialMaskMode === "string") {
					initialMaskMode = payload.initialMaskMode as "apply" | "run";
				} else {
					initialMaskMode = "run"; // Default to run if true is passed for backward compatibility
				}
			}

			if (initialMaskMode) {
				return {
					...state,
					activeModal: {
						type: "mask_editor",
						imageId: newId,
						mode: initialMaskMode,
					},
				};
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

			const isSearchActive = state.searchQuery.trim() !== "";

			let currentList: MeldImage[] = [];
			if (state.viewerMode === "lighttable" && state.viewerLightTableSlotId) {
				const ltStore = useLightTableStore.getState();
				const bucketIds = ltStore.buckets[state.viewerLightTableSlotId] || [];
				currentList = bucketIds
					.map((idStr) => {
						const idNum = Number.parseInt(idStr, 10);
						return (
							state.images.find((img) => img.id === idNum) ||
							state.lineageImages.find((img) => img.id === idNum) ||
							null
						);
					})
					.filter((img): img is MeldImage => img !== null);
			} else if (
				state.viewerMode === "lineage" &&
				state.lineageImages.length > 0
			) {
				currentList = state.lineageImages;
			} else {
				currentList = state.images.filter(
					(img) =>
						img.exists !== false &&
						(state.settings["gallery.show_parent_images"] ||
							isSearchActive ||
							!img.has_children),
				);
			}

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

			const isSearchActive = state.searchQuery.trim() !== "";

			let currentList: MeldImage[] = [];
			if (state.viewerMode === "lighttable" && state.viewerLightTableSlotId) {
				const ltStore = useLightTableStore.getState();
				const bucketIds = ltStore.buckets[state.viewerLightTableSlotId] || [];
				currentList = bucketIds
					.map((idStr) => {
						const idNum = Number.parseInt(idStr, 10);
						return (
							state.images.find((img) => img.id === idNum) ||
							state.lineageImages.find((img) => img.id === idNum) ||
							null
						);
					})
					.filter((img): img is MeldImage => img !== null);
			} else if (
				state.viewerMode === "lineage" &&
				state.lineageImages.length > 0
			) {
				currentList = state.lineageImages;
			} else {
				currentList = state.images.filter(
					(img) =>
						img.exists !== false &&
						(state.settings["gallery.show_parent_images"] ||
							isSearchActive ||
							!img.has_children),
				);
			}

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
			if (action.payload["gallery.initial_load_count"] !== undefined) {
				newPagination.limit = action.payload["gallery.initial_load_count"];
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
		case "SHOW_TOAST": {
			const payload = action.payload;
			if (typeof payload === "string") {
				return {
					...state,
					toastMessage: payload,
					toastType: "info",
				};
			}
			return {
				...state,
				toastMessage: payload.message,
				toastType: payload.type || "info",
			};
		}
		case "HIDE_TOAST":
			return {
				...state,
				toastMessage: null,
			};
		case "OPEN_CONFIRM_MODAL":
			return {
				...state,
				confirmModal: action.payload,
			};
		case "CLOSE_CONFIRM_MODAL":
			return {
				...state,
				confirmModal: null,
			};
		default:
			return state;
	}
}
