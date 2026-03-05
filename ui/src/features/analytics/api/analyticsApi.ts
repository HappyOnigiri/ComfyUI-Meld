import { api } from "/scripts/api.js";
import { handleResponse, parseJsonResponse } from "../../../api";

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

export const fetchAnalyticsSummary = async (): Promise<AnalyticsSummary> => {
	const res = await api.fetchApi("/meld/analytics");
	return handleResponse<AnalyticsSummary>(res);
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
): Promise<{ data: AnalyticsCategoryItem[]; total: number }> => {
	const params = new URLSearchParams();
	if (options?.limit !== undefined) params.set("limit", String(options.limit));
	if (options?.offset !== undefined) params.set("offset", String(options.offset));
	if (options?.sort) params.set("sort", options.sort);
	if (options?.q?.trim()) params.set("q", options.q.trim());

	const query = params.toString();
	const url = `/meld/analytics/${category}${query ? `?${query}` : ""}`;
	const res = await api.fetchApi(url, { signal: options?.signal });
	const json = await parseJsonResponse<{
		success: boolean;
		data: AnalyticsCategoryItem[];
		error?: string;
		total?: number;
	}>(res);

	if (!json.success) {
		throw new Error(json.error || "Failed to fetch analytics");
	}

	return {
		data: json.data ?? [],
		total: json.total ?? 0,
	};
};

export const refreshAnalytics = async (): Promise<void> => {
	const res = await api.fetchApi("/meld/analytics/refresh", {
		method: "POST",
	});
	await handleResponse(res);
};
