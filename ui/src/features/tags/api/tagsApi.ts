// @ts-expect-error
import { api } from "/scripts/api.js";
import type { Tag } from "../../../types";

export const fetchTags = async (): Promise<Tag[]> => {
	const res = await api.fetchApi("/meld/tags");
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const createTag = async (name: string): Promise<Tag> => {
	const res = await api.fetchApi("/meld/tags", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name }),
	});
	if (!res.ok) {
		throw new Error("Failed to create tag");
	}
	return await res.json();
};

export const deleteTag = async (id: number): Promise<void> => {
	const res = await api.fetchApi(`/meld/tags?id=${id}`, {
		method: "DELETE",
	});
	if (!res.ok) {
		throw new Error("Failed to delete tag");
	}
};

export const renameTag = async (id: number, name: string): Promise<void> => {
	const res = await api.fetchApi("/meld/tags/rename", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, name }),
	});
	if (!res.ok) {
		const data = await res.json();
		throw new Error(data.error || "Failed to rename tag");
	}
};
