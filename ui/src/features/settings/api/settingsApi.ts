// @ts-expect-error
import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";
import type { Settings } from "../../../types";

const DEFAULT_SETTINGS: Settings = {
	dev_mode: false,
	"gallery.show_parent_image": true,
	"gallery.show_parent_images": false,
	"sidebar.show_filename": "filename",
	"sidebar.show_dimensions": true,
	"sidebar.show_created_at": false,
	"sidebar.show_model_name": true,
	"sidebar.show_positive_prompt": true,
	"sidebar.show_negative_prompt": false,
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
	"fullscreen.details.show_source": true,
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
	"viewer.details.show_source": true,
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
};

export const fetchSettings = async (): Promise<Settings> => {
	let settings: Settings;
	try {
		const res = await api.fetchApi("/meld/settings");
		settings = await handleResponse<Settings>(res);
	} catch (e) {
		console.error("Failed to fetch settings, using defaults", e);
		return DEFAULT_SETTINGS;
	}

	// Migration: Convert boolean sidebar.show_filename to string
	if (
		typeof (settings as unknown as Record<string, unknown>)[
			"sidebar.show_filename"
		] === "boolean"
	) {
		(settings as unknown as Record<string, unknown>)["sidebar.show_filename"] =
			(settings as unknown as Record<string, unknown>)["sidebar.show_filename"]
				? "filename"
				: "none";
	}

	// Migration: Convert boolean viewer.details.show_filename and fullscreen.details.show_filename to string
	if (
		typeof (settings as unknown as Record<string, unknown>)[
			"viewer.details.show_filename"
		] === "boolean"
	) {
		(settings as unknown as Record<string, unknown>)[
			"viewer.details.show_filename"
		] = (settings as unknown as Record<string, unknown>)[
			"viewer.details.show_filename"
		]
			? "filename"
			: "none";
	}
	if (
		typeof (settings as unknown as Record<string, unknown>)[
			"fullscreen.details.show_filename"
		] === "boolean"
	) {
		(settings as unknown as Record<string, unknown>)[
			"fullscreen.details.show_filename"
		] = (settings as unknown as Record<string, unknown>)[
			"fullscreen.details.show_filename"
		]
			? "filename"
			: "none";
	}

	return settings;
};

export const saveSetting = async (
	key: string,
	value: string | number | boolean | null,
): Promise<void> => {
	const res = await api.fetchApi("/meld/settings", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ key, value }),
	});
	await handleResponse(res);
};
