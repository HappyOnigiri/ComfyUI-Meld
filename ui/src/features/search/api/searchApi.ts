import { api } from "/scripts/api.js";
import { type ApiResult, handleApiResponse } from "../../../api";
import type { Favorite } from "../../../types";

export const fetchSuggestions = async (
	query: string,
	type?: string,
): Promise<
	ApiResult<
		{
			type: string;
			value: string;
			count: number;
		}[]
	>
> => {
	try {
		const url = `/meld/suggest?query=${encodeURIComponent(query)}${type ? `&type=${type}` : ""}`;
		const res = await api.fetchApi(url);
		return handleApiResponse(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchSearchSuggestions = async (): Promise<
	ApiResult<
		{
			type: string;
			value: string;
		}[]
	>
> => {
	try {
		const res = await api.fetchApi("/meld/search-suggestions");
		return handleApiResponse(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchSearchKeywords = async (): Promise<
	ApiResult<
		{
			type: string;
			value: string;
		}[]
	>
> => {
	try {
		const res = await api.fetchApi("/meld/search-keywords");
		return handleApiResponse(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchSearchConfig = async (): Promise<
	ApiResult<{
		all_prefixes: string[];
		boolean_prefixes: string[];
		date_prefixes: string[];
		sort_prefix: string;
		no_quote_prefixes: string[];
	}>
> => {
	try {
		const res = await api.fetchApi("/meld/search-config");
		return handleApiResponse(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchFavorites = async (): Promise<ApiResult<Favorite[]>> => {
	try {
		const res = await api.fetchApi("/meld/favorites");
		return handleApiResponse<Favorite[]>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const saveFavorite = async (name: string, query: string): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/favorites", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, query }),
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const deleteFavorite = async (id: number): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/favorites/delete", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id }),
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const updateFavorite = async (
	id: number,
	name: string,
	query?: string,
): Promise<ApiResult<void>> => {
	try {
		const res = await api.fetchApi("/meld/favorites/update", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id, name, query }),
		});
		return handleApiResponse<void>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};
