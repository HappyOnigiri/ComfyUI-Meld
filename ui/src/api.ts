// @ts-expect-error
import { api } from "../../../scripts/api.js";

(window as unknown as { api: unknown }).api = api;

import type { Favorite, MeldImage, Settings, Tag } from "./types";

export const fetchImages = async (
	offset = 0,
	limit = 30,
	query = "",
): Promise<{
	images: MeldImage[];
	total: number;
	offset: number;
	limit: number;
}> => {
	const res = await api.fetchApi(
		`/meld/list?offset=${offset}&limit=${limit}&query=${encodeURIComponent(query)}`,
	);
	if (!res.ok) {
		throw new Error(`Failed to fetch images: ${res.statusText}`);
	}
	return await res.json();
};

export const fetchSuggestions = async (
	query: string,
	type?: string,
): Promise<
	{
		type: string;
		value: string;
		count: number;
	}[]
> => {
	const url = `/meld/suggest?query=${encodeURIComponent(query)}${type ? `&type=${type}` : ""}`;
	const res = await api.fetchApi(url);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const fetchSearchSuggestions = async (): Promise<
	{
		type: string;
		value: string;
	}[]
> => {
	const res = await api.fetchApi("/meld/search-suggestions");
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const cleanupDatabase = async (): Promise<{ count: number }> => {
	const res = await api.fetchApi("/meld/cleanup", {
		method: "POST",
	});
	if (!res.ok) {
		throw new Error(`Failed to cleanup database: ${res.statusText}`);
	}
	return await res.json();
};

export const fetchSettings = async (): Promise<Settings> => {
	const res = await api.fetchApi("/meld/settings");
	if (!res.ok) {
		return {
			dev_mode: false,
			"gallery.show_parent_image": true,
			"gallery.hide_parent_images": true,
			"sidebar.show_filename": true,
			"sidebar.show_dimensions": true,
			"sidebar.show_model_name": true,
			"sidebar.show_positive_prompt": true,
			"sidebar.show_negative_prompt": false,
			"sidebar.show_tags": true,
			"search.quick_suggestions": true,
			"search.input_suggest": true,
			"search.realtime_search": true,
			"viewer.loop": true,
			"fullscreen.show_icons": true,
			"fullscreen.loop": true,
			"fullscreen.show_details_by_default": true,
			"fullscreen.details.show_filename": true,
			"fullscreen.details.show_dimensions": true,
			"fullscreen.details.show_created_at": true,
			"fullscreen.details.show_tags": true,
			"fullscreen.details.show_model_name": true,
			"fullscreen.details.show_positive_prompt": true,
			"fullscreen.details.show_negative_prompt": true,
			"fullscreen.details.max_positive_prompt_lines": 7,
			"fullscreen.details.max_negative_prompt_lines": 7,
			"viewer.show_details_by_default": true,
			"viewer.details.show_filename": true,
			"viewer.details.show_dimensions": true,
			"viewer.details.show_created_at": true,
			"viewer.details.show_tags": true,
			"viewer.details.show_model_name": true,
			"viewer.details.show_positive_prompt": true,
			"viewer.details.show_negative_prompt": true,
			"viewer.details.max_positive_prompt_lines": 7,
			"viewer.details.max_negative_prompt_lines": 7,
			"gallery.page_size": 30,
			"viewer.thumbnail_window_size": 15,
			"viewer.show_thumbnails": true,
			"viewer.show_icons": true,
			"gallery.matching_strategy": "filename_phash",
			"gallery.lineage_max_depth": 5,
		};
	}
	return await res.json();
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
	if (!res.ok) {
		throw new Error("Failed to save setting");
	}
};

export const linkParent = async (
	childId: number,
	parentId: number | null,
): Promise<void> => {
	const res = await api.fetchApi("/meld/link-parent", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ childId, parentId }),
	});
	if (!res.ok) {
		throw new Error("Failed to link parent");
	}
};

export const suggestParents = async (
	id: number,
	threshold = 12,
): Promise<
	{
		id: number;
		filename: string;
		subfolder: string;
		type: string;
		distance: number;
		created_at: number;
		is_source_match: boolean;
	}[]
> => {
	const res = await api.fetchApi(
		`/meld/suggest-parents?id=${id}&threshold=${threshold}`,
	);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const fetchLineage = async (id: number): Promise<MeldImage[]> => {
	const res = await api.fetchApi(`/meld/lineage?id=${id}`);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const uploadImage = async (
	file: File,
): Promise<{ name: string; subfolder: string; type: string }> => {
	const formData = new FormData();
	formData.append("image", file);
	formData.append("overwrite", "true");

	const res = await api.fetchApi("/upload/image", {
		method: "POST",
		body: formData,
	});

	if (!res.ok) {
		throw new Error("Failed to upload image");
	}

	return await res.json();
};

export const deleteImages = async (
	ids: number[],
	deleteFiles = true,
): Promise<void> => {
	const res = await api.fetchApi("/meld/bulk-delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			ids,
			delete_files: deleteFiles,
		}),
	});
	if (!res.ok) {
		const errData = await res.json();
		throw new Error(errData.error || "Failed to delete images");
	}
};

export const registerImage = async (image: {
	filename: string;
	subfolder: string;
	type: string;
}): Promise<{ id: number }> => {
	const res = await api.fetchApi("/meld/register", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(image),
	});
	if (!res.ok) {
		throw new Error("Failed to register image");
	}
	return await res.json();
};

export const fetchRelatedImages = async (
	id: number,
	threshold = 8,
): Promise<
	{
		id: number;
		filename: string;
		subfolder: string;
		type: string;
		distance: number;
	}[]
> => {
	const res = await api.fetchApi(
		`/meld/related?id=${id}&threshold=${threshold}`,
	);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const fetchFolders = async (
	type: string,
	path: string,
): Promise<string[]> => {
	const res = await api.fetchApi(
		`/meld/folders?type=${type}&path=${encodeURIComponent(path)}`,
	);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const startScan = async (params: {
	type: string;
	subfolder: string;
	custom_path?: string;
	recursive: boolean;
	auto_link_parent: boolean;
	tags?: string[];
}): Promise<void> => {
	const res = await api.fetchApi("/meld/scan", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(params),
	});
	if (!res.ok) {
		const data = await res.json();
		throw new Error(data.error || "Failed to start scan");
	}
};

export const cancelScan = async (): Promise<void> => {
	const res = await api.fetchApi("/meld/scan/cancel", {
		method: "POST",
	});
	if (!res.ok) {
		throw new Error("Failed to cancel scan");
	}
};

export const fetchScanStatus = async (): Promise<{
	is_running: boolean;
	should_cancel: boolean;
}> => {
	const res = await api.fetchApi("/meld/scan/status");
	if (!res.ok) {
		return { is_running: false, should_cancel: false };
	}
	return await res.json();
};

export const fetchFavorites = async (): Promise<Favorite[]> => {
	const res = await api.fetchApi("/meld/favorites");
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const saveFavorite = async (
	name: string,
	query: string,
): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, query }),
	});
	if (!res.ok) {
		throw new Error("Failed to save favorite");
	}
};

export const deleteFavorite = async (id: number): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites/delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id }),
	});
	if (!res.ok) {
		throw new Error("Failed to delete favorite");
	}
};

export const updateFavorite = async (
	id: number,
	name: string,
): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites/update", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, name }),
	});
	if (!res.ok) {
		throw new Error("Failed to update favorite");
	}
};

export const fetchTags = async (): Promise<Tag[]> => {
	const res = await api.fetchApi("/meld/tags");
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const createTag = async (name: string): Promise<Tag> => {
	const res = await api.fetchApi("/meld/tags", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name }),
	});
	if (!res.ok) {
		throw new Error("Failed to create tag");
	}
	return await res.json();
};

export const deleteTag = async (id: number): Promise<void> => {
	const res = await api.fetchApi(`/meld/tags?id=${id}`, {
		method: "DELETE",
	});
	if (!res.ok) {
		throw new Error("Failed to delete tag");
	}
};

export const renameTag = async (id: number, name: string): Promise<void> => {
	const res = await api.fetchApi("/meld/tags/rename", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, name }),
	});
	if (!res.ok) {
		const data = await res.json();
		throw new Error(data.error || "Failed to rename tag");
	}
};

export const updateImageTags = async (
	imageId: number,
	tags: string[],
): Promise<void> => {
	const res = await api.fetchApi("/meld/image-tags", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ imageId, tags }),
	});
	if (!res.ok) {
		throw new Error("Failed to update image tags");
	}
};

export const bulkUpdateImageTags = async (
	imageIds: number[],
	addTags: string[],
	removeTags: string[],
): Promise<void> => {
	const res = await api.fetchApi("/meld/bulk-image-tags", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ imageIds, addTags, removeTags }),
	});
	if (!res.ok) {
		throw new Error("Failed to bulk update image tags");
	}
};

export const fetchImageWorkflow = async (
	imageId: number,
): Promise<{ workflow: unknown }> => {
	const res = await api.fetchApi(`/meld/image/${imageId}/workflow`);
	if (!res.ok) {
		throw new Error("Failed to fetch workflow");
	}
	return await res.json();
};

export const fetchSnapshotData = async (
	imageId: number,
): Promise<{
	model_name: string;
	positive: string;
	negative: string;
	seed: number;
	steps: number;
	cfg: number;
	sampler_name: string;
	scheduler: string;
}> => {
	const res = await api.fetchApi(`/meld/image/${imageId}/snapshot_data`);
	if (!res.ok) {
		throw new Error("Failed to fetch snapshot data");
	}
	return await res.json();
};
