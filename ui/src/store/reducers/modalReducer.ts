import type { GallerySubReducer } from "./types";
import { resolveInitialMaskMode } from "./viewerModalHelpers";

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
			const initialMaskMode = resolveInitialMaskMode(payload);
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
