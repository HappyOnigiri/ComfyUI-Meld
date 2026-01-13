export interface MeldImage {
	id: number;
	filename: string;
	subfolder: string;
	type: "output" | "input" | "temp";
	created_at: number;
	positive: string;
	negative: string;
	positive_prompt?: string | null;
	negative_prompt?: string | null;
	model_name?: string | null;
	workflow?: string | null;
	tags: string[];
	phash?: string;
	sha256?: string;
	parent_id?: number | null;
	parent_filename?: string | null;
	parent_subfolder?: string | null;
	parent_type?: "output" | "input" | "temp" | null;
	width?: number | null;
	height?: number | null;
	exists?: boolean;
	has_children?: boolean;
}

export interface Favorite {
	id: number;
	name: string;
	query: string;
	created_at: number;
}

export interface Tag {
	id: number;
	name: string;
}

export interface Settings {
	dev_mode: boolean;
	"gallery.show_parent_image": boolean;
	"gallery.hide_parent_images": boolean;
	"sidebar.show_filename": boolean;
	"sidebar.show_model_name": boolean;
	"sidebar.show_positive_prompt": boolean;
	"sidebar.show_negative_prompt": boolean;
	"sidebar.show_tags": boolean;
	"search.quick_suggestions": boolean;
	"search.input_suggest": boolean;
	"search.realtime_search": boolean;
	"viewer.show_filename": boolean;
	"viewer.loop": boolean;
	"fullscreen.show_filename": boolean;
	"fullscreen.loop": boolean;
	"gallery.page_size": number;
	"viewer.thumbnail_window_size": number;
}

export type ScanStatus = {
	isRunning: boolean;
	isFinished: boolean;
	shouldCancel: boolean;
	progress: {
		current: number;
		total: number;
		phase?: string;
	};
	newCount: number;
	totalCount: number;
};

export type ActiveModal =
	| { type: "none" }
	| { type: "parent_selection"; imageId: number }
	| { type: "tag_edit"; imageIds: number[]; tags: string[] }
	| { type: "import" }
	| { type: "settings" }
	| { type: "delete_confirm"; imageIds: number[]; hasLineage: boolean };

export type GalleryViewMode = "grid" | "list";

export interface GalleryState {
	images: MeldImage[];
	selectedIds: Set<number>;
	isLoading: boolean;
	error: string | null;
	lastUpdated: number;
	viewMode: GalleryViewMode;
	viewerImageId: number | null;
	viewerMode: "gallery" | "lineage";
	lineageImages: MeldImage[];
	activeModal: ActiveModal;
	lastSelectedId: number | null;
	scanStatus: ScanStatus;
	settings: Settings;
	pagination: {
		total: number;
		offset: number;
		limit: number;
		hasMore: boolean;
	};
	searchQuery: string;
	favorites: Favorite[];
}

export type GalleryAction =
	| {
			type: "SET_IMAGES";
			payload: {
				images: MeldImage[];
				total: number;
				offset: number;
				limit: number;
			};
	  }
	| {
			type: "APPEND_IMAGES";
			payload: {
				images: MeldImage[];
				total: number;
				offset: number;
				limit: number;
			};
	  }
	| { type: "SET_LINEAGE"; payload: MeldImage[] }
	| { type: "SET_LOADING"; payload: boolean }
	| { type: "SET_ERROR"; payload: string | null }
	| { type: "TOGGLE_SELECT"; payload: number }
	| { type: "SELECT_RANGE"; payload: number }
	| { type: "SELECT_ALL" }
	| { type: "CLEAR_SELECTION" }
	| { type: "SET_VIEW_MODE"; payload: GalleryViewMode }
	| { type: "REFRESH" }
	| {
			type: "OPEN_VIEWER";
			payload: number | { id: number; mode: "gallery" | "lineage" };
	  }
	| { type: "CLOSE_VIEWER" }
	| { type: "NEXT_IMAGE"; payload?: { isFullscreen: boolean } }
	| { type: "PREVIOUS_IMAGE"; payload?: { isFullscreen: boolean } }
	| { type: "OPEN_MODAL"; payload: ActiveModal }
	| { type: "CLOSE_MODAL" }
	| { type: "SET_SCAN_STATUS"; payload: Partial<ScanStatus> }
	| { type: "SET_SETTINGS"; payload: Partial<Settings> }
	| { type: "SET_SEARCH_QUERY"; payload: string }
	| { type: "SET_FAVORITES"; payload: Favorite[] };

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
	loadGraphData(data: unknown): Promise<void>;
	extensionManager?: {
		registerSidebarTab(tab: unknown): void;
		setSidebarTabActive(id: string): void;
	};
	[key: string]: unknown;
}

export interface ComfyApi {
	fetchApi(route: string, options?: RequestInit): Promise<Response>;
	addEventListener(
		type: string,
		callback: (event: CustomEvent<unknown>) => void,
	): void;
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
