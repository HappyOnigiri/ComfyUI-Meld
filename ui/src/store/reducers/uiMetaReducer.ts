import type { GallerySubReducer } from "./types";

export const uiMetaReducer: GallerySubReducer = (state, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};
