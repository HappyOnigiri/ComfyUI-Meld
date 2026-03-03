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

const isObjectRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === "object" && value !== null;

const extractMessage = (value: unknown): string | undefined => {
	if (typeof value === "string") {
		return value;
	}
	if (isObjectRecord(value) && typeof value.message === "string") {
		return value.message;
	}
	return undefined;
};

/**
 * Helper for endpoints that return raw JSON (not ApiResponse format).
 * Use for ComfyUI core endpoints like /upload/image, /prompt.
 */
export async function parseJsonResponse<T>(res: Response): Promise<T> {
	let data: unknown;
	try {
		data = await res.json();
	} catch (_e) {
		if (!res.ok) {
			throw new Error(`${res.status} ${res.statusText}`);
		}
		throw new Error("Failed to parse JSON response");
	}

	if (!res.ok) {
		let msg = `${res.status} ${res.statusText}`;
		if (isObjectRecord(data)) {
			const err = "error" in data ? data.error : undefined;
			const errMsg = extractMessage(err);
			const message = "message" in data ? extractMessage(data.message) : undefined;
			msg = errMsg ?? message ?? msg;
		}
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
