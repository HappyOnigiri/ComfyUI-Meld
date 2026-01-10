export interface MeldImage {
    id: number;
    filename: string;
    subfolder: string;
    type: "output" | "input" | "temp";
    created_at: number;
    positive: string;
    negative: string;
    tags: string[];
}

export type GalleryViewMode = 'grid' | 'list';

export interface GalleryState {
    images: MeldImage[];
    selectedIds: Set<number>;
    isLoading: boolean;
    error: string | null;
    lastUpdated: number;
    viewMode: GalleryViewMode;
}

export type GalleryAction =
    | { type: 'SET_IMAGES'; payload: MeldImage[] }
    | { type: 'SET_LOADING'; payload: boolean }
    | { type: 'SET_ERROR'; payload: string | null }
    | { type: 'TOGGLE_SELECT'; payload: number }
    | { type: 'SELECT_ALL' }
    | { type: 'CLEAR_SELECTION' }
    | { type: 'SET_VIEW_MODE'; payload: GalleryViewMode }
    | { type: 'REFRESH' };
