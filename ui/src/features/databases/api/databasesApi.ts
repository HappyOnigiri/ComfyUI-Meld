import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";
import type { DatabasesPayload } from "../../../types";

export const fetchDatabases = async (): Promise<DatabasesPayload> => {
	const res = await api.fetchApi("/meld/databases");
	return handleResponse<DatabasesPayload>(res);
};

export const createDatabase = async (
	name: string,
	switchToNew = false,
): Promise<DatabasesPayload> => {
	const res = await api.fetchApi("/meld/databases", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, switch_to_new: switchToNew }),
	});
	return handleResponse<DatabasesPayload>(res);
};

export const switchDatabase = async (name: string): Promise<DatabasesPayload> => {
	const res = await api.fetchApi("/meld/databases/switch", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name }),
	});
	return handleResponse<DatabasesPayload>(res);
};

export const deleteDatabase = async (
	name: string,
	confirmText: string,
): Promise<DatabasesPayload> => {
	const res = await api.fetchApi("/meld/databases/delete", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, confirm_text: confirmText }),
	});
	return handleResponse<DatabasesPayload>(res);
};

export const renameDatabase = async (name: string, newName: string): Promise<DatabasesPayload> => {
	const res = await api.fetchApi("/meld/databases/rename", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ name, new_name: newName }),
	});
	return handleResponse<DatabasesPayload>(res);
};
