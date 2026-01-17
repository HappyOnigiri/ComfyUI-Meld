// @ts-expect-error
import { api } from "/scripts/api.js";
import type { MeldImage } from "../../../types";

export const fetchImages = async (
	offset = 0,
	limit = 30,
	query = "",
	view = "default",
	minimal = false,
): Promise<{
	images: MeldImage[];
	total: number;
	offset: number;
	limit: number;
}> => {
	const res = await api.fetchApi(
		`/meld/list?offset=${offset}&limit=${limit}&query=${encodeURIComponent(query)}&view=${view}${minimal ? "&minimal=true" : ""}`,
	);
	if (!res.ok) {
		throw new Error(`Failed to fetch images: ${res.statusText}`);
	}
	return await res.json();
};

export const fetchImageDetails = async (id: number): Promise<MeldImage> => {
	const res = await api.fetchApi(`/meld/image/${id}/details`);
	if (!res.ok) {
		throw new Error(`Failed to fetch image details: ${res.statusText}`);
	}
	return await res.json();
};

export const deleteImages = async (
	ids: number[],
	permanent = false,
): Promise<void> => {
	const res = await api.fetchApi("/meld/bulk-delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			ids,
			permanent,
		}),
	});
	if (!res.ok) {
		const errData = await res.json();
		throw new Error(errData.error || "Failed to delete images");
	}
};

export const restoreImages = async (
	ids: number[],
): Promise<{ restored_ids: number[] }> => {
	const res = await api.fetchApi("/meld/restore", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ ids }),
	});
	if (!res.ok) {
		const errData = await res.json();
		throw new Error(errData.error || "Failed to restore images");
	}
	const result = await res.json();
	return result.data || { restored_ids: ids };
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
	const result = await res.json();
	return result.data;
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
	threshold?: number,
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
	const thresholdParam =
		threshold !== undefined ? `&threshold=${threshold}` : "";
	const res = await api.fetchApi(
		`/meld/suggest-parents?id=${id}${thresholdParam}`,
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
