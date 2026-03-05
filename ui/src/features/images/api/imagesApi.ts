// @ts-expect-error
import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";
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
	return handleResponse(res);
};

export const fetchImageDetails = async (id: number): Promise<MeldImage> => {
	const res = await api.fetchApi(`/meld/image/${id}/details`);
	return handleResponse(res);
};

export const deleteImages = async (ids: number[], permanent = false): Promise<void> => {
	const res = await api.fetchApi("/meld/bulk-delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			ids,
			permanent,
		}),
	});
	await handleResponse(res);
};

export const restoreImages = async (ids: number[]): Promise<{ restored_ids: number[] }> => {
	const res = await api.fetchApi("/meld/restore", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ ids }),
	});
	return handleResponse(res);
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
	return handleResponse(res);
};

export const linkParent = async (childId: number, parentId: number | null): Promise<void> => {
	const res = await api.fetchApi("/meld/link-parent", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ childId, parentId }),
	});
	await handleResponse(res);
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
	const thresholdParam = threshold !== undefined ? `&threshold=${threshold}` : "";
	const res = await api.fetchApi(`/meld/suggest-parents?id=${id}${thresholdParam}`);
	try {
		return await handleResponse(res);
	} catch (_e) {
		return [];
	}
};

export const fetchLineage = async (id: number): Promise<MeldImage[]> => {
	const res = await api.fetchApi(`/meld/lineage?id=${id}`);
	try {
		return await handleResponse(res);
	} catch (_e) {
		return [];
	}
};

export const updateImageTags = async (imageId: number, tags: string[]): Promise<void> => {
	const res = await api.fetchApi("/meld/image-tags", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ imageId, tags }),
	});
	await handleResponse(res);
};

export const updateImageNotes = async (imageId: number, userNotes: string): Promise<MeldImage> => {
	const res = await api.fetchApi("/meld/image-notes", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ imageId, userNotes }),
	});
	return handleResponse(res);
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
	await handleResponse(res);
};

export const fetchImageWorkflow = async (imageId: number): Promise<{ workflow: unknown }> => {
	const res = await api.fetchApi(`/meld/image/${imageId}/workflow`);
	return handleResponse(res);
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
	guidance: number;
	clip_name1: string;
	clip_name2: string;
	clip_type: string;
	clip_device: string;
	sampler_name: string;
	scheduler: string;
	width: number;
	height: number;
	is_flux: boolean;
}> => {
	const res = await api.fetchApi(`/meld/image/${imageId}/snapshot_data`);
	return handleResponse(res);
};

// Helper to fetch image binary data with filename
const fetchImageBlob = async (
	imageId: number,
	removeMetadata: boolean,
	resizeMode: string,
	resizeValue: number,
	resizeFilter: string,
): Promise<{ blob: Blob; filename: string }> => {
	const res = await api.fetchApi("/meld/api/download/raw", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ imageId, removeMetadata, resizeMode, resizeValue, resizeFilter }),
	});
	if (!res.ok) {
		throw new Error(`Failed to fetch image ${imageId}`);
	}

	// Extract filename from Content-Disposition header
	const disposition = res.headers.get("Content-Disposition");
	let filename = `image_${imageId}.png`;
	if (disposition?.includes("filename=")) {
		const match = disposition.match(/filename="?([^"]+)"?/);
		if (match?.[1]) filename = match[1];
	}

	const blob = await res.blob();
	return { blob, filename };
};

export const downloadZipImages = async (
	imageIds: number[],
	removeMetadata: boolean,
	resizeMode: string,
	resizeValue: number,
	resizeFilter: string,
	onProgress?: (current: number, total: number) => void,
): Promise<void> => {
	const JSZip = (await import("jszip")).default;
	const zip = new JSZip();
	const total = imageIds.length;

	// Fetch images one by one and report progress
	const usedNames = new Set<string>();
	let i = 0;
	for (const imageId of imageIds) {
		onProgress?.(i, total);
		const { blob, filename } = await fetchImageBlob(
			imageId,
			removeMetadata,
			resizeMode,
			resizeValue,
			resizeFilter,
		);

		// Deduplicate filenames
		let uniqueName = filename;
		if (usedNames.has(uniqueName)) {
			const dotIdx = uniqueName.lastIndexOf(".");
			const base = dotIdx > 0 ? uniqueName.slice(0, dotIdx) : uniqueName;
			const ext = dotIdx > 0 ? uniqueName.slice(dotIdx) : "";
			let counter = 2;
			while (usedNames.has(uniqueName)) {
				uniqueName = `${base}_${counter}${ext}`;
				counter++;
			}
		}
		usedNames.add(uniqueName);
		zip.file(uniqueName, blob);
		i += 1;
	}
	onProgress?.(total, total);

	// Generate ZIP and trigger download
	const zipBlob = await zip.generateAsync({ type: "blob" });
	const url = window.URL.createObjectURL(zipBlob);
	const a = document.createElement("a");
	a.href = url;
	a.download = `meld_images_${Date.now()}.zip`;
	document.body.appendChild(a);
	a.click();
	window.URL.revokeObjectURL(url);
	document.body.removeChild(a);
};

export const downloadRawImage = async (
	imageId: number,
	removeMetadata: boolean,
	resizeMode: string,
	resizeValue: number,
	resizeFilter: string,
): Promise<void> => {
	const { blob, filename } = await fetchImageBlob(
		imageId,
		removeMetadata,
		resizeMode,
		resizeValue,
		resizeFilter,
	);

	const url = window.URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	window.URL.revokeObjectURL(url);
	document.body.removeChild(a);
};
