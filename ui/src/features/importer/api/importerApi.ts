// @ts-expect-error
import { api } from "/scripts/api.js";
import { handleResponse, parseJsonResponse } from "../../../api";
import { logger } from "../../../logger";

export type UploadImageResponse = {
	name: string;
	subfolder: string;
	type: string;
};

const isUploadImageResponse = (obj: unknown): obj is UploadImageResponse => {
	if (typeof obj !== "object" || obj === null) {
		return false;
	}
	const value = obj as Record<string, unknown>;
	return (
		typeof value.name === "string" &&
		typeof value.subfolder === "string" &&
		typeof value.type === "string"
	);
};

export const uploadImage = async (file: File): Promise<UploadImageResponse> => {
	const formData = new FormData();
	formData.append("image", file);

	const res = await api.fetchApi("/upload/image", {
		method: "POST",
		body: formData,
	});

	// /upload/image returns raw JSON (not ApiResponse-wrapped), so bypass unified parsing here.
	const data = await parseJsonResponse<unknown>(res);
	if (!isUploadImageResponse(data)) {
		throw new Error("Invalid upload image response shape");
	}
	return data;
};

export const fetchFolders = async (
	type: string,
	path: string,
	fast = false,
	signal?: AbortSignal,
): Promise<{
	folders: {
		name: string;
		count: number | null;
		preview?: { filename: string; subfolder: string; type: string };
	}[];
	images: { filename: string; subfolder: string; type: string }[];
	image_count: number;
}> => {
	const res = await api.fetchApi(
		`/meld/folders?type=${type}&path=${encodeURIComponent(path)}&fast=${fast}`,
		{ signal },
	);
	try {
		return await handleResponse(res);
	} catch (e) {
		logger.error("Failed to fetch folders", e);
		return { folders: [], images: [], image_count: 0 };
	}
};

export const fetchFolderMetadata = async (
	type: string,
	path: string,
	folders: string[],
	signal?: AbortSignal,
): Promise<
	Record<
		string,
		{
			count: number;
			preview?: { filename: string; subfolder: string; type: string };
		}
	>
> => {
	if (folders.length === 0) return {};
	const res = await api.fetchApi(
		`/meld/folder-metadata?type=${type}&path=${encodeURIComponent(path)}&folders=${encodeURIComponent(folders.join(","))}`,
		{ signal },
	);
	try {
		return await handleResponse(res);
	} catch (e) {
		logger.error("Failed to fetch folder metadata", e);
		return {};
	}
};

export const fetchPathImageCount = async (
	type: string,
	path: string,
	signal?: AbortSignal,
): Promise<number> => {
	const res = await api.fetchApi(
		`/meld/path-image-count?type=${type}&path=${encodeURIComponent(path)}`,
		{ signal },
	);
	try {
		const result = await handleResponse<{ count: number }>(res);
		return result.count;
	} catch (_e) {
		return 0;
	}
};

export const startScan = async (params: {
	type: string;
	subfolder: string;
	custom_path?: string;
	recursive: boolean;
	auto_link_parent: boolean;
	link_strategy?: string;
	tags?: string[];
}): Promise<void> => {
	const res = await api.fetchApi("/meld/scan", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(params),
	});
	await handleResponse(res);
};

export const cancelScan = async (): Promise<void> => {
	const res = await api.fetchApi("/meld/scan/cancel", {
		method: "POST",
	});
	await handleResponse(res);
};

export const fetchScanStatus = async (): Promise<{
	is_running: boolean;
	should_cancel: boolean;
}> => {
	const res = await api.fetchApi("/meld/scan/status");
	try {
		return await handleResponse(res);
	} catch (_e) {
		return { is_running: false, should_cancel: false };
	}
};
