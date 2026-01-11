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

export type GalleryViewMode = "grid" | "list";

export interface GalleryState {
    images: MeldImage[];
    selectedIds: Set<number>;
    isLoading: boolean;
    error: string | null;
    lastUpdated: number;
    viewMode: GalleryViewMode;
    viewerImageId: number | null;
}

export type GalleryAction =
    | { type: "SET_IMAGES"; payload: MeldImage[] }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "SET_ERROR"; payload: string | null }
    | { type: "TOGGLE_SELECT"; payload: number }
    | { type: "SELECT_ALL" }
    | { type: "CLEAR_SELECTION" }
    | { type: "SET_VIEW_MODE"; payload: GalleryViewMode }
    | { type: "REFRESH" }
    | { type: "OPEN_VIEWER"; payload: number }
    | { type: "CLOSE_VIEWER" }
    | { type: "NEXT_IMAGE" }
    | { type: "PREVIOUS_IMAGE" };

export interface ComfyApp {
    registerExtension(extension: ComfyExtension): void;
    ui: {
        meldNexus?: {
            refresh: () => void;
            isVisible: () => boolean | null;
            toggle: () => void;
        };
        [key: string]: unknown;
    };
    extensionManager?: {
        registerSidebarTab(tab: unknown): void;
        setSidebarTabActive(id: string): void;
    };
    [key: string]: unknown;
}

export interface ComfyApi {
    fetchApi(route: string, options?: RequestInit): Promise<Response>;
    addEventListener(type: string, callback: (event: CustomEvent<unknown>) => void): void;
    [key: string]: unknown;
}

export interface ComfyExtension {
    name: string;
    beforeRegisterNodeDef?: (
        nodeType: unknown,
        nodeData: { name: string },
        app: ComfyApp,
    ) => Promise<void>;
    setup?: (app: ComfyApp) => Promise<void>;
}
