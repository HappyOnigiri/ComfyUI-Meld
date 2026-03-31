import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";
import { logger } from "../../../logger";
import { DEFAULT_SETTINGS } from "../../../settings";
import type { Settings } from "../../../types";

export const fetchSettings = async (): Promise<Settings> => {
	let settings: Settings;
	try {
		const res = await api.fetchApi("/meld/settings");
		settings = await handleResponse<Settings>(res);
	} catch (e) {
		logger.error("Failed to fetch settings, using defaults", e);
		return DEFAULT_SETTINGS;
	}

	// Migration: Convert boolean sidebar.show_filename to string
	if (
		typeof (settings as unknown as Record<string, unknown>)["sidebar.show_filename"] === "boolean"
	) {
		(settings as unknown as Record<string, unknown>)["sidebar.show_filename"] = (
			settings as unknown as Record<string, unknown>
		)["sidebar.show_filename"]
			? "filename"
			: "none";
	}

	// Migration: Convert boolean viewer.details.show_filename and fullscreen.details.show_filename to string
	if (
		typeof (settings as unknown as Record<string, unknown>)["viewer.details.show_filename"] ===
		"boolean"
	) {
		(settings as unknown as Record<string, unknown>)["viewer.details.show_filename"] = (
			settings as unknown as Record<string, unknown>
		)["viewer.details.show_filename"]
			? "filename"
			: "none";
	}
	if (
		typeof (settings as unknown as Record<string, unknown>)["fullscreen.details.show_filename"] ===
		"boolean"
	) {
		(settings as unknown as Record<string, unknown>)["fullscreen.details.show_filename"] = (
			settings as unknown as Record<string, unknown>
		)["fullscreen.details.show_filename"]
			? "filename"
			: "none";
	}

	return settings;
};

export const saveSetting = async (
	key: keyof Settings,
	value: string | number | boolean | null,
): Promise<void> => {
	const res = await api.fetchApi("/meld/settings", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ key, value }),
	});
	await handleResponse(res);
};

export const clearThumbnailCache = async (): Promise<{
	deleted_count: number;
}> => {
	const res = await api.fetchApi("/meld/clear-thumbnail-cache", {
		method: "POST",
	});
	return handleResponse<{ deleted_count: number }>(res);
};
