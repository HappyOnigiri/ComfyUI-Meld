import { beforeEach, describe, expect, it, vi } from "vitest";
import { api } from "/scripts/api.js";
import { fetchAnalyticsCategory, fetchAnalyticsSummary, refreshAnalytics } from "./analyticsApi";

vi.mock("/scripts/api.js", () => ({
	api: { fetchApi: vi.fn() },
}));

function jsonResponse(data: unknown) {
	return new Response(JSON.stringify(data), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}

describe("analyticsApi", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	describe("fetchAnalyticsSummary", () => {
		it("fetches summary and returns AnalyticsSummary", async () => {
			const summary = {
				total_images: 42,
				positive_prompts: [{ name: "1girl", count: 10 }],
				negative_prompts: [],
				tags: [{ name: "landscape", count: 5 }],
				models: [{ name: "sd15", count: 20 }],
				by_date: [{ date: "2025-03-06", count: 3 }],
				by_resolution: [{ resolution: "512x512", count: 15 }],
			};
			vi.mocked(api.fetchApi).mockResolvedValueOnce(jsonResponse({ success: true, data: summary }));

			const result = await fetchAnalyticsSummary();

			expect(api.fetchApi).toHaveBeenCalledWith("/meld/analytics");
			expect(result).toEqual(summary);
		});

		it("throws error when fetch fails", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Database error" }),
			);

			await expect(fetchAnalyticsSummary()).rejects.toThrow("Database error");
		});
	});

	describe("fetchAnalyticsCategory", () => {
		it("fetches category with default params", async () => {
			const items = [{ name: "1girl", count: 10 }];
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: true, data: items, total: 1 }),
			);

			const result = await fetchAnalyticsCategory("positive_prompts");

			expect(api.fetchApi).toHaveBeenCalledWith("/meld/analytics/positive_prompts?");
			expect(result).toEqual({ data: items, total: 1 });
		});

		it("fetches category with limit, offset, sort, q params", async () => {
			const items = [{ name: "landscape", count: 5 }];
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: true, data: items, total: 1 }),
			);

			const result = await fetchAnalyticsCategory("tags", {
				limit: 50,
				offset: 10,
				sort: "count_asc",
				q: "land",
			});

			const url = vi.mocked(api.fetchApi).mock.calls[0]?.[0] as string;
			expect(url).toContain("/meld/analytics/tags?");
			expect(url).toContain("limit=50");
			expect(url).toContain("offset=10");
			expect(url).toContain("sort=count_asc");
			expect(url).toContain("q=land");
			expect(result).toEqual({ data: items, total: 1 });
		});

		it("throws error when success is false", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Unknown category" }),
			);

			await expect(fetchAnalyticsCategory("tags")).rejects.toThrow("Unknown category");
		});

		it("returns empty data and 0 total when data/total missing", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(jsonResponse({ success: true }));

			const result = await fetchAnalyticsCategory("tags");

			expect(result).toEqual({ data: [], total: 0 });
		});
	});

	describe("refreshAnalytics", () => {
		it("calls POST /meld/analytics/refresh", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(jsonResponse({ success: true, data: null }));

			await refreshAnalytics();

			expect(api.fetchApi).toHaveBeenCalledWith("/meld/analytics/refresh", {
				method: "POST",
			});
		});

		it("throws error when refresh fails", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Refresh failed" }),
			);

			await expect(refreshAnalytics()).rejects.toThrow("Refresh failed");
		});
	});
});
