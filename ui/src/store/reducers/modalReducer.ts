import type { GallerySubReducer } from "./types";

export const modalReducer: GallerySubReducer = (state, action) => {
	switch (action.type) {
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
		case "OPEN_VIEWER": {
			const payload = action.payload;
			let initialMaskMode: "apply" | "run" | false = false;
			if (typeof payload !== "number" && payload.initialMaskMode) {
				if (typeof payload.initialMaskMode === "string") {
					initialMaskMode = payload.initialMaskMode as "apply" | "run";
				} else {
					initialMaskMode = "run";
				}
			}
			if (!initialMaskMode) {
				return state;
			}
			const imageId = typeof payload === "number" ? payload : payload.id;
			return {
				...state,
				activeModal: {
					type: "mask_editor",
					imageId,
					mode: initialMaskMode,
				},
			};
		}
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
};
