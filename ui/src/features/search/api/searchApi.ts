// @ts-expect-error
import { api } from "/scripts/api.js";
import type { Favorite } from "../../../types";

export const fetchSuggestions = async (
	query: string,
	type?: string,
): Promise<
	{
		type: string;
		value: string;
		count: number;
	}[]
> => {
	const url = `/meld/suggest?query=${encodeURIComponent(query)}${type ? `&type=${type}` : ""}`;
	const res = await api.fetchApi(url);
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const fetchSearchSuggestions = async (): Promise<
	{
		type: string;
		value: string;
	}[]
> => {
	const res = await api.fetchApi("/meld/search-suggestions");
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const fetchFavorites = async (): Promise<Favorite[]> => {
	const res = await api.fetchApi("/meld/favorites");
	if (!res.ok) {
		return [];
	}
	return await res.json();
};

export const saveFavorite = async (
	name: string,
	query: string,
): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, query }),
	});
	if (!res.ok) {
		throw new Error("Failed to save favorite");
	}
};

export const deleteFavorite = async (id: number): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites/delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id }),
	});
	if (!res.ok) {
		throw new Error("Failed to delete favorite");
	}
};

export const updateFavorite = async (
	id: number,
	name: string,
	query?: string,
): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites/update", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, name, query }),
	});
	if (!res.ok) {
		throw new Error("Failed to update favorite");
	}
};
