import { api } from "/scripts/api.js";
import { type ApiResult, handleApiResponse } from "../../../api";
import type { Tag } from "../../../types";

export const fetchTags = async (): Promise<ApiResult<Tag[]>> => {
	try {
		const res = await api.fetchApi("/meld/tags");
		return handleApiResponse<Tag[]>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const createTag = async (name: string): Promise<ApiResult<Tag>> => {
	try {
		const res = await api.fetchApi("/meld/tags", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name }),
		});
		return handleApiResponse<Tag>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const deleteTag = async (id: number): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi(`/meld/tags?id=${id}`, {
			method: "DELETE",
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const renameTag = async (id: number, name: string): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/tags/rename", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id, name }),
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};
