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

// Sanitize a filename from a Content-Disposition header: ensure safe basename,
// remove directory traversal sequences, remove control characters, and enforce
// a safe whitelist for ZIP/download-safe filenames.
const sanitizeFilename = (raw: string, fallback: string): string => {
	// Extract basename by normalising backslashes and splitting on path separators
	let name =
		raw
			.replace(/\\/g, "/") // normalise backslashes to forward slashes
			.split("/")
			.pop() ?? ""; // keep only the last path component

	// Normalize names that are "." or ".." or start with "-" by returning the fallback
	if (name === "." || name === ".." || name.startsWith("-")) return fallback;

	// Replace Windows/ZIP-reserved chars, whitespace, and control chars with "_"
	// biome-ignore lint/suspicious/noControlCharactersInRegex: intentionally stripping control chars
	name = name.replace(/[\\:*?"<>|/\x00-\x1f\x7f\s]/g, "_");

	// Enforce a safe whitelist (alphanumeric, dash, underscore, dot) by replacing disallowed chars
	name = name.replace(/[^a-zA-Z0-9\-_.]/g, "_");

	// Collapse repeated dots and trim trailing dots/spaces
	name = name.replace(/\.{2,}/g, ".").replace(/[\s.]+$/, "");

	// Fall back to a safe default when the result is empty, invalid again, or suspiciously long
	if (!name || name === "." || name === ".." || name.startsWith("-") || name.length > 255) {
		return fallback;
	}
	return name;
};

// Helper to fetch image binary data with filename
const fetchImageBlob = async (
	imageId: number,
	removeMetadata: boolean,
	resizeMode: string,
	resizeValue: number,
	resizeFilter: string,
): Promise<{ blob: Blob; filename: string }> => {
	const res = await api.fetchApi("/meld/download/raw", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ imageId, removeMetadata, resizeMode, resizeValue, resizeFilter }),
	});
	if (!res.ok) {
		let errMsg = `Failed to fetch image ${imageId}: ${res.statusText || res.status}`;
		try {
			await handleResponse(res.clone());
		} catch (e: unknown) {
			const extracted = e instanceof Error ? e.message : String(e);
			if (extracted) {
				errMsg = `Failed to fetch image ${imageId}: ${extracted}`;
			}
		}
		throw new Error(errMsg);
	}

	// Explicitly reject JSON responses on the binary download path.
	// Even a 2xx JSON response cannot be treated as binary data.
	const contentType = res.headers.get("Content-Type") || "";
	if (contentType.includes("application/json") || contentType.includes("+json")) {
		// Attempt to extract a meaningful error message via handleResponse, then always throw.
		let jsonErrMsg = `Image ${imageId}: server returned JSON instead of binary data`;
		try {
			await handleResponse(res.clone());
			// Even if handleResponse succeeds, JSON is not acceptable on the binary path.
			jsonErrMsg = `Image ${imageId}: server returned a JSON response on the binary download path`;
		} catch (e: unknown) {
			const extracted = e instanceof Error ? e.message : String(e);
			if (extracted) {
				jsonErrMsg = extracted;
			}
		}
		throw new Error(jsonErrMsg);
	}

	// Extract and sanitize filename from Content-Disposition header
	const fallbackFilename = `image_${imageId}.png`;
	const disposition = res.headers.get("Content-Disposition");
	let filename = fallbackFilename;
	if (disposition) {
		const starMatch = disposition.match(/filename\*=([^;\s]+)/i);
		if (starMatch?.[1]) {
			let rawVal = starMatch[1];
			// Extract value after optional charset/lang, e.g. UTF-8''
			const charsetMatch = rawVal.match(/^([A-Za-z0-9-]+)'[^']*'(.*)$/);
			if (charsetMatch) {
				rawVal = charsetMatch[2];
			}
			try {
				filename = sanitizeFilename(decodeURIComponent(rawVal), fallbackFilename);
			} catch {
				const match = disposition.match(/filename="?([^"]+)"?/);
				if (match?.[1]) filename = sanitizeFilename(match[1], fallbackFilename);
			}
		} else if (disposition.includes("filename=")) {
			const match = disposition.match(/filename="?([^"]+)"?/);
			if (match?.[1]) filename = sanitizeFilename(match[1], fallbackFilename);
		}
	}

	const blob = await res.blob();
	return { blob, filename };
};

// OOM guard: enforce a max number of ZIP entries and total byte size
const MAX_ZIP_FILES = 500;
const MAX_ZIP_BYTES = 2 * 1024 * 1024 * 1024; // 2 GB

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

	// Guard: check entry count limit before fetching
	if (total > MAX_ZIP_FILES) {
		throw new Error(
			`ZIP entry limit reached (${MAX_ZIP_FILES} files). Please reduce the number of images.`,
		);
	}

	// Fetch images one by one and report progress
	const usedNames = new Set<string>();
	let i = 0;
	let totalBytes = 0;
	for (const imageId of imageIds) {
		onProgress?.(i, total);
		const { blob, filename } = await fetchImageBlob(
			imageId,
			removeMetadata,
			resizeMode,
			resizeValue,
			resizeFilter,
		);

		// Guard: check total byte size limit before adding to zip
		totalBytes += blob.size;
		if (totalBytes > MAX_ZIP_BYTES) {
			throw new Error(
				`ZIP size limit reached (${MAX_ZIP_BYTES / 1024 / 1024 / 1024} GB). Please reduce the number of images.`,
			);
		}

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
