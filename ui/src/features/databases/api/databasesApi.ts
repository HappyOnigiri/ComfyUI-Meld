import { api } from "/scripts/api.js";
import { type ApiResult, handleApiResponse } from "../../../api";
import type { DatabasesPayload } from "../../../types";

export const fetchDatabases = async (): Promise<ApiResult<DatabasesPayload>> => {
	try {
		const res = await api.fetchApi("/meld/databases");
		return handleApiResponse<DatabasesPayload>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const createDatabase = async (
	name: string,
	switchToNew = false,
): Promise<ApiResult<DatabasesPayload>> => {
	try {
		const res = await api.fetchApi("/meld/databases", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, switch_to_new: switchToNew }),
		});
		return handleApiResponse<DatabasesPayload>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const switchDatabase = async (name: string): Promise<ApiResult<DatabasesPayload>> => {
	try {
		const res = await api.fetchApi("/meld/databases/switch", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name }),
		});
		return handleApiResponse<DatabasesPayload>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const deleteDatabase = async (
	name: string,
	confirmText: string,
): Promise<ApiResult<DatabasesPayload>> => {
	try {
		const res = await api.fetchApi("/meld/databases/delete", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, confirm_text: confirmText }),
		});
		return handleApiResponse<DatabasesPayload>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const renameDatabase = async (
	name: string,
	newName: string,
): Promise<ApiResult<DatabasesPayload>> => {
	try {
		const res = await api.fetchApi("/meld/databases/rename", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, new_name: newName }),
		});
		return handleApiResponse<DatabasesPayload>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};
