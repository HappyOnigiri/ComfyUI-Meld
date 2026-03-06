import type { GallerySubReducer } from "./types";

export const selectionReducer: GallerySubReducer = (state, action) => {
	switch (action.type) {
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
				const newSelectedIds = new Set<number>(state.selectedIds);
				newSelectedIds.add(action.payload);
				return {
					...state,
					selectedIds: newSelectedIds,
					lastSelectedId: action.payload,
				};
			}

			const startIndex = state.images.findIndex((img) => img.id === state.lastSelectedId);
			const endIndex = state.images.findIndex((img) => img.id === action.payload);

			if (startIndex === -1 || endIndex === -1) {
				return state;
			}

			const [minIdx, maxIdx] = [Math.min(startIndex, endIndex), Math.max(startIndex, endIndex)];
			const newSelectedIds = new Set<number>(state.selectedIds);

			for (let i = minIdx; i <= maxIdx; i++) {
				const image = state.images[i];
				if (image) {
					newSelectedIds.add(image.id);
				}
			}

			return {
				...state,
				selectedIds: newSelectedIds,
				lastSelectedId: action.payload,
			};
		}
		case "SELECT_ALL": {
			const firstImage = state.images[0];
			return {
				...state,
				selectedIds: new Set<number>(state.images.map((img) => img.id)),
				lastSelectedId: firstImage ? firstImage.id : null,
			};
		}
		case "CLEAR_SELECTION":
			return {
				...state,
				selectedIds: new Set<number>(),
				lastSelectedId: null,
			};
		case "DESELECT_IMAGES": {
			const newSelectedIds = new Set(state.selectedIds);
			let lastSelectedId = state.lastSelectedId;
			action.payload.forEach((id) => {
				newSelectedIds.delete(id);
				if (lastSelectedId === id) {
					lastSelectedId = null;
				}
			});
			return {
				...state,
				selectedIds: newSelectedIds,
				lastSelectedId,
			};
		}
		case "REMOVE_IMAGES": {
			const idsToRemove = new Set(action.payload);
			const newSelectedIds = new Set<number>(state.selectedIds);
			for (const id of idsToRemove) {
				newSelectedIds.delete(id);
			}
			return {
				...state,
				selectedIds: newSelectedIds,
				lastSelectedId:
					state.lastSelectedId !== null && idsToRemove.has(state.lastSelectedId)
						? null
						: state.lastSelectedId,
			};
		}
		default:
			return state;
	}
};
