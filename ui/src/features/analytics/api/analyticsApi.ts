import { api } from "/scripts/api.js";
import { type ApiResult, handleApiResponse, parseApiJsonResponse } from "../../../api";

export interface AnalyticsSummary {
	total_images: number;
	positive_prompts: { name: string; count: number }[];
	negative_prompts: { name: string; count: number }[];
	tags: { name: string; count: number }[];
	models: { name: string; count: number }[];
	by_date: { date: string; count: number }[];
	by_resolution: { resolution: string; count: number }[];
}

export type AnalyticsCategory =
	| "positive_prompts"
	| "negative_prompts"
	| "tags"
	| "models"
	| "by_date"
	| "by_resolution";

export type AnalyticsSort = "count_desc" | "count_asc";

export interface AnalyticsCategoryItem {
	name?: string;
	date?: string;
	resolution?: string;
	count: number;
}

export const fetchAnalyticsSummary = async (options?: {
	signal?: AbortSignal;
}): Promise<ApiResult<AnalyticsSummary>> => {
	try {
		const res = await api.fetchApi("/meld/analytics", { signal: options?.signal });
		return handleApiResponse<AnalyticsSummary>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchAnalyticsCategory = async (
	category: AnalyticsCategory,
	options?: {
		limit?: number;
		offset?: number;
		sort?: AnalyticsSort;
		q?: string;
		signal?: AbortSignal;
	},
): Promise<ApiResult<{ data: AnalyticsCategoryItem[]; total: number }>> => {
	try {
		const params = new URLSearchParams();
		if (options?.limit !== undefined) params.set("limit", String(options.limit));
		if (options?.offset !== undefined) params.set("offset", String(options.offset));
		if (options?.sort) params.set("sort", options.sort);
		if (options?.q?.trim()) params.set("q", options.q.trim());

		const query = params.toString();
		const url = `/meld/analytics/${category}${query ? `?${query}` : ""}`;
		const res = await api.fetchApi(url, { signal: options?.signal });

		// This endpoint returns { success, data: [...items], total: N } where total is at
		// the ApiResponse level (not nested inside data). Use parseApiJsonResponse to
		// capture both fields from the raw response.
		const raw = await parseApiJsonResponse<{
			success: boolean;
			data?: AnalyticsCategoryItem[];
			error?: string;
			total?: number;
		}>(res);
		if (!raw.ok) {
			return raw;
		}
		if (!raw.data.success) {
			return { ok: false, error: raw.data.error || "Failed to fetch analytics" };
		}
		return {
			ok: true,
			data: {
				data: raw.data.data ?? [],
				total: raw.data.total ?? 0,
			},
		};
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const refreshAnalytics = async (options?: {
	signal?: AbortSignal;
}): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/analytics/refresh", {
			method: "POST",
			signal: options?.signal,
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchAnalyticsCounts = async (
	category: string,
	names: string[],
	options?: { signal?: AbortSignal },
): Promise<ApiResult<Record<string, number>>> => {
	if (!names || names.length === 0) return { ok: true, data: {} };

	try {
		const res = await api.fetchApi("/meld/analytics/counts", {
			method: "POST",
			body: JSON.stringify({ category, names }),
			signal: options?.signal,
		});
		return handleApiResponse<Record<string, number>>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};
