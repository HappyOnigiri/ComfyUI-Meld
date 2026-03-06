import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";
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
	return handleResponse(res);
};

export const fetchSearchSuggestions = async (): Promise<
	{
		type: string;
		value: string;
	}[]
> => {
	const res = await api.fetchApi("/meld/search-suggestions");
	return handleResponse(res);
};

export const fetchSearchKeywords = async (): Promise<
	{
		type: string;
		value: string;
	}[]
> => {
	const res = await api.fetchApi("/meld/search-keywords");
	return handleResponse(res);
};

export const fetchSearchConfig = async (): Promise<{
	all_prefixes: string[];
	boolean_prefixes: string[];
	date_prefixes: string[];
	sort_prefix: string;
	no_quote_prefixes: string[];
}> => {
	const res = await api.fetchApi("/meld/search-config");
	return handleResponse(res);
};

export const fetchFavorites = async (): Promise<Favorite[]> => {
	const res = await api.fetchApi("/meld/favorites");
	return handleResponse(res);
};

export const saveFavorite = async (name: string, query: string): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, query }),
	});
	await handleResponse(res);
};

export const deleteFavorite = async (id: number): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites/delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id }),
	});
	await handleResponse(res);
};

export const updateFavorite = async (id: number, name: string, query?: string): Promise<void> => {
	const res = await api.fetchApi("/meld/favorites/update", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, name, query }),
	});
	await handleResponse(res);
};
