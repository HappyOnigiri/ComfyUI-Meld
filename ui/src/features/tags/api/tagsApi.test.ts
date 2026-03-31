import { beforeEach, describe, expect, it, vi } from "vitest";
import { createTag, deleteTag, fetchTags, renameTag } from "./tagsApi";

describe("tagsApi", () => {
	// Reset fetchApi mock before each test
	let mockFetchApi: ReturnType<typeof vi.fn>;

	beforeEach(() => {
		mockFetchApi = vi.fn();
		const apiObj = globalThis.api as Record<string, unknown>;
		apiObj.fetchApi = mockFetchApi;
	});

	describe("fetchTags", () => {
		it("fetches tag list", async () => {
			const tags = [{ id: 1, name: "tag1" }];
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: true, data: tags }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await fetchTags();
			expect(mockFetchApi).toHaveBeenCalledWith("/meld/tags");
			expect(result).toEqual({ ok: true, data: tags });
		});

		it("returns error result when fetching fails", async () => {
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: false, error: "some error" }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await fetchTags();
			expect(result).toEqual({ ok: false, error: "some error" });
		});
	});

	describe("createTag", () => {
		it("creates a new tag", async () => {
			const tag = { id: 2, name: "new-tag" };
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: true, data: tag }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await createTag("new-tag");
			expect(mockFetchApi).toHaveBeenCalledWith("/meld/tags", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: "new-tag" }),
			});
			expect(result).toEqual({ ok: true, data: tag });
		});

		it("returns error result when creation fails", async () => {
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: false, error: "some error" }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await createTag("new-tag");
			expect(result).toEqual({ ok: false, error: "some error" });
		});
	});

	describe("deleteTag", () => {
		it("deletes a tag", async () => {
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: true, data: null }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await deleteTag(1);
			expect(mockFetchApi).toHaveBeenCalledWith("/meld/tags?id=1", {
				method: "DELETE",
			});
			expect(result.ok).toBe(true);
		});

		it("returns error result when deletion fails", async () => {
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: false, error: "some error" }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await deleteTag(1);
			expect(result).toEqual({ ok: false, error: "some error" });
		});
	});

	describe("renameTag", () => {
		it("renames a tag", async () => {
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: true, data: null }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await renameTag(1, "renamed");
			expect(mockFetchApi).toHaveBeenCalledWith("/meld/tags/rename", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id: 1, name: "renamed" }),
			});
			expect(result.ok).toBe(true);
		});

		it("returns error result when renaming fails", async () => {
			mockFetchApi.mockResolvedValueOnce(
				new Response(JSON.stringify({ success: false, error: "some error" }), {
					status: 200,
					headers: { "Content-Type": "application/json" },
				}),
			);
			const result = await renameTag(1, "renamed");
			expect(result).toEqual({ ok: false, error: "some error" });
		});
	});
});
