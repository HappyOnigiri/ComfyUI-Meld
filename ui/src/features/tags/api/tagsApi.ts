import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";
import type { Tag } from "../../../types";

export const fetchTags = async (): Promise<Tag[]> => {
	const res = await api.fetchApi("/meld/tags");
	return handleResponse(res);
};

export const createTag = async (name: string): Promise<Tag> => {
	const res = await api.fetchApi("/meld/tags", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name }),
	});
	return handleResponse(res);
};

export const deleteTag = async (id: number): Promise<void> => {
	const res = await api.fetchApi(`/meld/tags?id=${id}`, {
		method: "DELETE",
	});
	await handleResponse(res);
};

export const renameTag = async (id: number, name: string): Promise<void> => {
	const res = await api.fetchApi("/meld/tags/rename", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, name }),
	});
	await handleResponse(res);
};
