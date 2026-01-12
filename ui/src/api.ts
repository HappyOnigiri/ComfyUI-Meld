// @ts-expect-error
import { api } from "../../../scripts/api.js";

(window as unknown as { api: unknown }).api = api;

import type { MeldImage, Settings } from "./types";

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
		`/meld-nexus/list?offset=${offset}&limit=${limit}&query=${encodeURIComponent(query)}`,
	);
	if (!res.ok) {
		throw new Error(`Failed to fetch images: ${res.statusText}`);
	}
	return await res.json();
};

export const fetchSuggestions = async (
	query: string,
): Promise<
	{
		type: string;
		value: string;
		count: number;
	}[]
> => {
	const res = await api.fetchApi(
		`/meld-nexus/suggest?query=${encodeURIComponent(query)}`,
	);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const cleanupDatabase = async (): Promise<{ count: number }> => {
	const res = await api.fetchApi("/meld-nexus/cleanup", {
		method: "POST",
	});
	if (!res.ok) {
		throw new Error(`Failed to cleanup database: ${res.statusText}`);
	}
	return await res.json();
};

export const fetchSettings = async (): Promise<Settings> => {
	const res = await api.fetchApi("/meld-nexus/settings");
	if (!res.ok) {
		return {
			dev_mode: false,
			"gallery.show_parent_image": true,
			"gallery.hide_parent_images": true,
		};
	}
	return await res.json();
};

export const saveSetting = async (
	key: string,
	value: string | number | boolean | null,
): Promise<void> => {
	const res = await api.fetchApi("/meld-nexus/settings", {
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
	const res = await api.fetchApi("/meld-nexus/link-parent", {
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
		`/meld-nexus/suggest-parents?id=${id}&threshold=${threshold}`,
	);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const fetchLineage = async (id: number): Promise<MeldImage[]> => {
	const res = await api.fetchApi(`/meld-nexus/lineage?id=${id}`);
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
	const res = await api.fetchApi("/meld-nexus/bulk-delete", {
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
	const res = await api.fetchApi("/meld-nexus/register", {
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
		`/meld-nexus/related?id=${id}&threshold=${threshold}`,
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
		`/meld-nexus/folders?type=${type}&path=${encodeURIComponent(path)}`,
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
}): Promise<void> => {
	const res = await api.fetchApi("/meld-nexus/scan", {
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
	const res = await api.fetchApi("/meld-nexus/scan/cancel", {
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
	const res = await api.fetchApi("/meld-nexus/scan/status");
	if (!res.ok) {
		return { is_running: false, should_cancel: false };
	}
	return await res.json();
};
