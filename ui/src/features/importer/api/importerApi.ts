// @ts-expect-error
import { api } from "/scripts/api.js";

export const uploadImage = async (
	file: File,
): Promise<{ name: string; subfolder: string; type: string }> => {
	const formData = new FormData();
	formData.append("image", file);

	const res = await api.fetchApi("/upload/image", {
		method: "POST",
		body: formData,
	});

	if (!res.ok) {
		throw new Error("Failed to upload image");
	}

	return await res.json();
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
	if (!res.ok) {
		return { folders: [], images: [], image_count: 0 };
	}
	return await res.json();
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
	if (!res.ok) {
		return {};
	}
	return await res.json();
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
	if (!res.ok) {
		return 0;
	}
	const data = await res.json();
	return data.count;
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
