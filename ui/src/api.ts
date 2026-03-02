// @ts-expect-error
import { api } from "/scripts/api.js";

(window as unknown as { api: unknown }).api = api;

export interface ApiResponse<T = unknown> {
	success: boolean;
	data?: T;
	error?: string;
	message?: string;
	count?: number;
}

/**
 * Generic helper to handle wrapped API responses
 */
export async function handleResponse<T>(res: Response): Promise<T> {
	if (!res.ok) {
		let errorMsg = `API error: ${res.status} ${res.statusText}`;
		try {
			const errorJson = await res.json();
			if (errorJson?.error) {
				errorMsg = errorJson.error;
			}
		} catch (_e) {
			// ignore parse error
		}
		throw new Error(errorMsg);
	}

	const result: ApiResponse<T> = await res.json();
	if (!result.success) {
		throw new Error(result.error || result.message || "Unknown error");
	}

	// For some endpoints, the data itself might be the response,
	// but according to our new rule, it should be in .data
	return result.data as T;
}

/**
 * Helper for endpoints that return raw JSON (not ApiResponse format).
 * Use for ComfyUI core endpoints like /upload/image, /prompt.
 */
export async function parseJsonResponse<T>(res: Response): Promise<T> {
	const data = (await res.json()) as Record<string, unknown>;
	if (!res.ok) {
		const err = data?.error as { message?: string } | string | undefined;
		const msg =
			typeof err === "object" && err?.message
				? err.message
				: typeof err === "string"
					? err
					: ((data?.message as string) ?? `${res.status} ${res.statusText}`);
		throw new Error(msg);
	}
	return data as T;
}

export const fetchHomeDir = async (): Promise<string> => {
	const res = await api.fetchApi("/meld/home-dir");
	const data = await handleResponse<{ home: string }>(res);
	return data.home;
};

export const cleanupDatabase = async (): Promise<{ count: number }> => {
	const res = await api.fetchApi("/meld/cleanup", {
		method: "POST",
	});
	const data = await handleResponse<{ count: number }>(res);
	return data;
};
