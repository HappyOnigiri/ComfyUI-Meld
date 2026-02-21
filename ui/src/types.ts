export interface MeldImage {
	id: number;
	filename: string;
	subfolder: string;
	type: "output" | "input" | "temp" | "custom";
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
	parent_type?: "output" | "input" | "temp" | "custom" | null;
	width?: number | null;
	height?: number | null;
	is_minimal?: boolean;
	exists?: boolean;
	deleted_at?: number | null;
	has_children?: boolean;
	user_notes?: string | null;
	ancestors?: {
		id: number;
		filename: string;
		subfolder: string;
		type: string;
	}[];
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
	"gallery.show_parent_images": boolean;
	"sidebar.show_filename": "filename" | "filepath" | "none";
	"sidebar.show_dimensions": boolean;
	"sidebar.show_created_at": boolean;
	"sidebar.show_model_name": boolean;
	"sidebar.show_positive_prompt": boolean;
	"sidebar.show_negative_prompt": boolean;
	"sidebar.show_user_notes": "always" | "if_present" | "hidden";
	"sidebar.show_tags": boolean;
	"sidebar.thumbnail_size": number;
	"search.quick_suggestions": boolean;
	"search.input_suggest": boolean;
	"viewer.loop": boolean;
	"fullscreen.show_icons": boolean;
	"fullscreen.loop": boolean;
	"fullscreen.show_details_by_default": boolean;
	"fullscreen.details.show_filename": "filename" | "filepath" | "none";
	"fullscreen.details.show_dimensions": boolean;
	"fullscreen.details.show_created_at": boolean;
	"fullscreen.details.show_tags": boolean;
	"fullscreen.details.show_model_name": boolean;
	"fullscreen.details.show_positive_prompt": boolean;
	"fullscreen.details.show_negative_prompt": boolean;
	"fullscreen.details.show_user_notes": "always" | "if_present" | "hidden";
	"fullscreen.details.show_source": boolean;
	"fullscreen.details.max_positive_prompt_lines": number;
	"fullscreen.details.max_negative_prompt_lines": number;
	"viewer.show_details_by_default": boolean;
	"viewer.details.show_filename": "filename" | "filepath" | "none";
	"viewer.details.show_dimensions": boolean;
	"viewer.details.show_created_at": boolean;
	"viewer.details.show_tags": boolean;
	"viewer.details.show_model_name": boolean;
	"viewer.details.show_positive_prompt": boolean;
	"viewer.details.show_negative_prompt": boolean;
	"viewer.details.show_user_notes": "always" | "if_present" | "hidden";
	"viewer.details.show_source": boolean;
	"viewer.details.max_positive_prompt_lines": number;
	"viewer.details.max_negative_prompt_lines": number;
	"gallery.initial_load_count": number;
	"gallery.max_load_count": number;
	"viewer.thumbnail_window_size": number;
	"viewer.show_thumbnails": boolean;
	"viewer.show_icons": boolean;
	"viewer.delete_mode": "confirm" | "target_only" | "lineage";
	"viewer.small_image_mode": "original" | "fit";
	"fullscreen.delete_mode": "confirm" | "target_only" | "lineage";
	"fullscreen.small_image_mode": "original" | "fit";
	"gallery.matching_strategy":
		| "filename_phash"
		| "phash_created"
		| "phash_only";
	"gallery.lineage_max_depth": number;
	"gallery.trash_retention_days": number;
	"gallery.trash.show_missing": boolean;
	"gallery.view_mode": "grid_details" | "grid_only";
	"gallery.suggest_phash_threshold": number;
	"gallery.auto_link_phash_threshold": number;
	"gallery.inherit_tags": boolean;
	"viewer.shortcut.1": string;
	"viewer.shortcut.2": string;
	"viewer.shortcut.3": string;
	"viewer.shortcut.4": string;
	"viewer.shortcut.5": string;
	"viewer.shortcut.6": string;
	"viewer.shortcut.7": string;
	"viewer.shortcut.8": string;
	"viewer.shortcut.9": string;
	"viewer.shortcut.0": string;
	"viewer.shortcut.show_cheat_sheet": boolean;
	"gallery.quick_shortcut.1": string;
	"gallery.quick_shortcut.2": string;
	"gallery.quick_shortcut.3": string;
	"search.show_all_keywords": boolean;
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
	updatedCount: number;
	totalCount: number;
};

export type ActiveModal =
	| { type: "none" }
	| { type: "parent_selection"; imageId: number }
	| {
			type: "tag_edit";
			imageIds: number[];
			tags: string[];
			onSuccess?: () => void;
	  }
	| { type: "import" }
	| { type: "settings" }
	| { type: "error"; message: string }
	| { type: "workflow_selection"; images: MeldImage[]; maskFilename?: string }
	| {
			type: "delete_confirm";
			imageIds: number[];
			hasLineage: boolean;
			isPermanent?: boolean;
			onSuccess?: () => void;
	  }
	| { type: "mask_editor"; imageId: number; mode: "apply" | "run" }
	| {
			type: "node_selection";
			image: MeldImage;
			nodes: { id: string; type: string; title?: string }[];
			onSelect: (nodeId: string) => void;
	  }
	| { type: "note_edit"; imageId: number; notes: string }
	| { type: "download_options"; imageIds: number[] };

export interface GalleryState {
	images: MeldImage[];
	selectedIds: Set<number>;
	isLoading: boolean;
	error: string | null;
	viewScope: "default" | "trash";
	viewerImageId: number | null;
	viewerMode: "gallery" | "lineage" | "lighttable";
	viewerLightTableSlotId?: string | null;
	viewerInitialMaskMode: "apply" | "run" | false;
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
	| { type: "SET_VIEW_SCOPE"; payload: "default" | "trash" }
	| {
			type: "OPEN_VIEWER";
			payload:
				| number
				| {
						id: number;
						mode: "gallery" | "lineage" | "lighttable";
						slotId?: string;
						initialMaskMode?: "apply" | "run" | boolean;
				  };
	  }
	| { type: "CLOSE_VIEWER" }
	| { type: "NEXT_IMAGE"; payload?: { isFullscreen: boolean } }
	| { type: "PREVIOUS_IMAGE"; payload?: { isFullscreen: boolean } }
	| { type: "OPEN_MODAL"; payload: ActiveModal }
	| { type: "CLOSE_MODAL" }
	| { type: "SET_SCAN_STATUS"; payload: Partial<ScanStatus> }
	| { type: "SET_SETTINGS"; payload: Partial<Settings> }
	| { type: "SET_SEARCH_QUERY"; payload: string }
	| { type: "SET_FAVORITES"; payload: Favorite[] }
	| { type: "REMOVE_IMAGES"; payload: number[] }
	| { type: "ADD_IMAGES"; payload: MeldImage[] }
	| { type: "UPDATE_IMAGE"; payload: MeldImage }
	| { type: "REFRESH" };

export interface ComfyApp {
	registerExtension(extension: ComfyExtension): void;
	ui: {
		meld?: {
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
