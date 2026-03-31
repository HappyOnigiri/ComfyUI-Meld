import type { Settings } from "./types";

// Allows a nested object whose leaf values are all keys of T.
type SettingKeyTree<T extends object> = {
	[key: string]: keyof T | SettingKeyTree<T>;
};

// Extracts a union of all leaf string values from a nested const object.
type DeepLeafValues<T> = T extends string
	? T
	: T extends object
		? { [K in keyof T]: DeepLeafValues<T[K]> }[keyof T]
		: never;

// Human-readable camelCase aliases for every Settings key, organized by prefix.
// The `satisfies` constraint ensures every leaf value is a valid keyof Settings
// (extra keys that do not exist in Settings will cause a compile error here).
export const SETTING_KEYS = {
	devMode: "dev_mode",
	gallery: {
		showParentImage: "gallery.show_parent_image",
		showParentImages: "gallery.show_parent_images",
		initialLoadCount: "gallery.initial_load_count",
		maxLoadCount: "gallery.max_load_count",
		matchingStrategy: "gallery.matching_strategy",
		lineageMaxDepth: "gallery.lineage_max_depth",
		trashRetentionDays: "gallery.trash_retention_days",
		trash: {
			showMissing: "gallery.trash.show_missing",
		},
		viewMode: "gallery.view_mode",
		suggestPhashThreshold: "gallery.suggest_phash_threshold",
		autoLinkPhashThreshold: "gallery.auto_link_phash_threshold",
		inheritTags: "gallery.inherit_tags",
		quickShortcut: {
			slot1: "gallery.quick_shortcut.1",
			slot2: "gallery.quick_shortcut.2",
			slot3: "gallery.quick_shortcut.3",
		},
	},
	sidebar: {
		showFilename: "sidebar.show_filename",
		showDimensions: "sidebar.show_dimensions",
		showCreatedAt: "sidebar.show_created_at",
		showModelName: "sidebar.show_model_name",
		showPositivePrompt: "sidebar.show_positive_prompt",
		showNegativePrompt: "sidebar.show_negative_prompt",
		showUserNotes: "sidebar.show_user_notes",
		showTags: "sidebar.show_tags",
		thumbnailSize: "sidebar.thumbnail_size",
	},
	search: {
		quickSuggestions: "search.quick_suggestions",
		inputSuggest: "search.input_suggest",
		showAllKeywords: "search.show_all_keywords",
	},
	viewer: {
		loop: "viewer.loop",
		showDetailsByDefault: "viewer.show_details_by_default",
		thumbnailWindowSize: "viewer.thumbnail_window_size",
		showThumbnails: "viewer.show_thumbnails",
		showIcons: "viewer.show_icons",
		deleteMode: "viewer.delete_mode",
		smallImageMode: "viewer.small_image_mode",
		details: {
			showFilename: "viewer.details.show_filename",
			showDimensions: "viewer.details.show_dimensions",
			showCreatedAt: "viewer.details.show_created_at",
			showTags: "viewer.details.show_tags",
			showModelName: "viewer.details.show_model_name",
			showPositivePrompt: "viewer.details.show_positive_prompt",
			showNegativePrompt: "viewer.details.show_negative_prompt",
			showUserNotes: "viewer.details.show_user_notes",
			showSource: "viewer.details.show_source",
			showCorePrompt: "viewer.details.show_core_prompt",
			corePromptCount: "viewer.details.core_prompt_count",
			maxPositivePromptLines: "viewer.details.max_positive_prompt_lines",
			maxNegativePromptLines: "viewer.details.max_negative_prompt_lines",
		},
		shortcut: {
			key1: "viewer.shortcut.1",
			key2: "viewer.shortcut.2",
			key3: "viewer.shortcut.3",
			key4: "viewer.shortcut.4",
			key5: "viewer.shortcut.5",
			key6: "viewer.shortcut.6",
			key7: "viewer.shortcut.7",
			key8: "viewer.shortcut.8",
			key9: "viewer.shortcut.9",
			key0: "viewer.shortcut.0",
			showCheatSheet: "viewer.shortcut.show_cheat_sheet",
		},
	},
	fullscreen: {
		showIcons: "fullscreen.show_icons",
		loop: "fullscreen.loop",
		showDetailsByDefault: "fullscreen.show_details_by_default",
		deleteMode: "fullscreen.delete_mode",
		smallImageMode: "fullscreen.small_image_mode",
		details: {
			showFilename: "fullscreen.details.show_filename",
			showDimensions: "fullscreen.details.show_dimensions",
			showCreatedAt: "fullscreen.details.show_created_at",
			showTags: "fullscreen.details.show_tags",
			showModelName: "fullscreen.details.show_model_name",
			showPositivePrompt: "fullscreen.details.show_positive_prompt",
			showNegativePrompt: "fullscreen.details.show_negative_prompt",
			showUserNotes: "fullscreen.details.show_user_notes",
			showSource: "fullscreen.details.show_source",
			showCorePrompt: "fullscreen.details.show_core_prompt",
			corePromptCount: "fullscreen.details.core_prompt_count",
			maxPositivePromptLines: "fullscreen.details.max_positive_prompt_lines",
			maxNegativePromptLines: "fullscreen.details.max_negative_prompt_lines",
		},
	},
} as const satisfies SettingKeyTree<Settings>;

// Union of every leaf value in SETTING_KEYS; equals keyof Settings when the
// bidirectional completeness checks below pass.
export type SettingKey = DeepLeafValues<typeof SETTING_KEYS>;

// Bidirectional completeness checks.
// If a key is added to Settings but not to SETTING_KEYS, allSettingKeysCovered becomes never.
// If a value is added to SETTING_KEYS that does not exist in Settings, the satisfies above errors.
const _assertSettingKeyCompleteness: {
	allSettingKeysCovered: [keyof Settings] extends [SettingKey] ? true : never;
	noExtraKeys: [SettingKey] extends [keyof Settings] ? true : never;
} = {
	allSettingKeysCovered: true,
	noExtraKeys: true,
};
void _assertSettingKeyCompleteness;

// Single source of truth for default setting values.
// Previously duplicated between settingsApi.ts and galleryReducer.ts.
export const DEFAULT_SETTINGS: Settings = {
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
	"fullscreen.details.show_core_prompt": false,
	"fullscreen.details.core_prompt_count": 10,
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
	"viewer.details.show_core_prompt": false,
	"viewer.details.core_prompt_count": 10,
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
};

// Helper for dynamic viewer shortcut keys (e.g. "viewer.shortcut.1").
// Use instead of `\`viewer.shortcut.\${n}\` as keyof Settings`.
export const viewerShortcutKey = (n: number | string): keyof Settings =>
	`viewer.shortcut.${n}` as keyof Settings;

// Helper for dynamic gallery quick shortcut keys (e.g. "gallery.quick_shortcut.1").
// Use instead of `\`gallery.quick_shortcut.\${slot}\` as keyof Settings`.
export const galleryQuickShortcutKey = (slot: number | string): keyof Settings =>
	`gallery.quick_shortcut.${slot}` as keyof Settings;
