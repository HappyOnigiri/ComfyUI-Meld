import { api } from "/scripts/api.js";
import { type ApiResult, handleApiResponse, parseApiJsonResponse, unwrapOr } from "../../../api";
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
	const result = await parseApiJsonResponse<unknown>(res);
	if (!result.ok) {
		throw new Error(result.error);
	}
	if (!isUploadImageResponse(result.data)) {
		throw new Error("Invalid upload image response shape");
	}
	return result.data;
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
	const fallback = { folders: [], images: [], image_count: 0 };
	try {
		const res = await api.fetchApi(
			`/meld/folders?type=${type}&path=${encodeURIComponent(path)}&fast=${fast}`,
			{ signal },
		);
		const result = await handleApiResponse<typeof fallback>(res);
		if (!result.ok) {
			logger.error("Failed to fetch folders", result.error);
		}
		return unwrapOr(result, fallback);
	} catch (e) {
		logger.error("Failed to fetch folders", e);
		return fallback;
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
	const fallback: Record<string, never> = {};
	try {
		const res = await api.fetchApi(
			`/meld/folder-metadata?type=${type}&path=${encodeURIComponent(path)}&folders=${encodeURIComponent(folders.join(","))}`,
			{ signal },
		);
		const result = await handleApiResponse<typeof fallback>(res);
		if (!result.ok) {
			logger.error("Failed to fetch folder metadata", result.error);
		}
		return unwrapOr(result, fallback);
	} catch (e) {
		logger.error("Failed to fetch folder metadata", e);
		return fallback;
	}
};

export const fetchPathImageCount = async (
	type: string,
	path: string,
	signal?: AbortSignal,
): Promise<number> => {
	try {
		const res = await api.fetchApi(
			`/meld/path-image-count?type=${type}&path=${encodeURIComponent(path)}`,
			{ signal },
		);
		const result = await handleApiResponse<{ count: number }>(res);
		return result.ok ? result.data.count : 0;
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
}): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/scan", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(params),
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const cancelScan = async (): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/scan/cancel", {
			method: "POST",
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchScanStatus = async (): Promise<{
	is_running: boolean;
	should_cancel: boolean;
}> => {
	const fallback = { is_running: false, should_cancel: false };
	try {
		const res = await api.fetchApi("/meld/scan/status");
		return unwrapOr(await handleApiResponse<typeof fallback>(res), fallback);
	} catch (_e) {
		return fallback;
	}
};
