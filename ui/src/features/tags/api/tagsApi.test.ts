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
			expect(result).toEqual(tags);
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
			expect(result).toEqual(tag);
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
			await deleteTag(1);
			expect(mockFetchApi).toHaveBeenCalledWith("/meld/tags?id=1", {
				method: "DELETE",
			});
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
			await renameTag(1, "renamed");
			expect(mockFetchApi).toHaveBeenCalledWith("/meld/tags/rename", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ id: 1, name: "renamed" }),
			});
		});
	});
});
