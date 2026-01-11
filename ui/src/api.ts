// @ts-expect-error
import { api } from "../../../scripts/api.js";

(window as unknown as { api: unknown }).api = api;

import type { MeldImage } from "./types";

export const fetchImages = async (): Promise<MeldImage[]> => {
	const res = await api.fetchApi("/meld-nexus/list");
	if (!res.ok) {
		throw new Error(`Failed to fetch images: ${res.statusText}`);
	}
	return await res.json();
};

export const fetchSettings = async (): Promise<{ dev_mode: boolean }> => {
	const res = await api.fetchApi("/meld-nexus/settings");
	if (!res.ok) {
		return { dev_mode: false };
	}
	return await res.json();
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
