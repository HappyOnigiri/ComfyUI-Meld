import { beforeEach, describe, expect, it, vi } from "vitest";
import { api } from "/scripts/api.js";
import {
	fetchAnalyticsCategory,
	fetchAnalyticsCounts,
	fetchAnalyticsSummary,
	refreshAnalytics,
} from "./analyticsApi";

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

			expect(api.fetchApi).toHaveBeenCalledWith("/meld/analytics", { signal: undefined });
			expect(result).toEqual({ ok: true, data: summary });
		});

		it("returns error result when fetch fails", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Database error" }),
			);

			const result = await fetchAnalyticsSummary();
			expect(result).toEqual({ ok: false, error: "Database error" });
		});
	});

	describe("fetchAnalyticsCategory", () => {
		it("fetches category with default params", async () => {
			const items = [{ name: "1girl", count: 10 }];
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: true, data: items, total: 1 }),
			);

			const result = await fetchAnalyticsCategory("positive_prompts");

			const url = (api.fetchApi as ReturnType<typeof vi.fn>).mock.calls[0]?.[0] as string;
			expect(url).toMatch(/^\/meld\/analytics\/positive_prompts$/);
			expect(url).not.toMatch(/\?$/);
			expect(result).toEqual({ ok: true, data: { data: items, total: 1 } });
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
			expect(result).toEqual({ ok: true, data: { data: items, total: 1 } });
		});

		it("returns error result when success is false", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Unknown category" }),
			);

			const result = await fetchAnalyticsCategory("tags");
			expect(result).toEqual({ ok: false, error: "Unknown category" });
		});

		it("returns empty data and 0 total when data/total missing", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(jsonResponse({ success: true }));

			const result = await fetchAnalyticsCategory("tags");

			expect(result).toEqual({ ok: true, data: { data: [], total: 0 } });
		});
	});

	describe("refreshAnalytics", () => {
		it("calls POST /meld/analytics/refresh", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(jsonResponse({ success: true, data: null }));

			const result = await refreshAnalytics();

			expect(api.fetchApi).toHaveBeenCalledWith("/meld/analytics/refresh", {
				method: "POST",
				signal: undefined,
			});
			expect(result.ok).toBe(true);
		});

		it("returns error result when refresh fails", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Refresh failed" }),
			);

			const result = await refreshAnalytics();
			expect(result).toEqual({ ok: false, error: "Refresh failed" });
		});
	});

	describe("fetchAnalyticsCounts", () => {
		it("fetches counts and returns dictionary", async () => {
			const mockData = { "1girl": 100, solo: 50 };
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: true, data: mockData }),
			);

			const controller = new AbortController();
			const result = await fetchAnalyticsCounts("positive_prompts", ["1girl", "solo"], {
				signal: controller.signal,
			});

			expect(api.fetchApi).toHaveBeenCalledWith("/meld/analytics/counts", {
				method: "POST",
				body: JSON.stringify({ category: "positive_prompts", names: ["1girl", "solo"] }),
				signal: controller.signal,
			});
			expect(result).toEqual({ ok: true, data: mockData });
		});

		it("returns error result when fetch fails", async () => {
			vi.mocked(api.fetchApi).mockResolvedValueOnce(
				jsonResponse({ success: false, error: "Network error" }),
			);

			const result = await fetchAnalyticsCounts("tags", ["tag1"]);
			expect(result).toEqual({ ok: false, error: "Network error" });
		});
	});
});
