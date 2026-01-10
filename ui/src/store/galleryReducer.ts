import { GalleryState, GalleryAction, MeldImage } from '../types';

export const initialState: GalleryState = {
    images: [],
    selectedIds: new Set<number>(),
    isLoading: false,
    error: null,
    lastUpdated: Date.now(),
    viewMode: 'list',
};

export function galleryReducer(state: GalleryState, action: GalleryAction): GalleryState {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.payload,
                isLoading: false,
                error: null,
            };
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: action.payload,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case 'TOGGLE_SELECT': {
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
        case 'SELECT_ALL':
            return {
                ...state,
                selectedIds: new Set<number>(state.images.map((img: MeldImage) => img.id)),
            };
        case 'CLEAR_SELECTION':
            return {
                ...state,
                selectedIds: new Set<number>(),
            };
        case 'SET_VIEW_MODE':
            return {
                ...state,
                viewMode: action.payload,
            };
        case 'REFRESH':
            return {
                ...state,
                lastUpdated: Date.now(),
            };
        default:
            return state;
    }
}
