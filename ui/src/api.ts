// @ts-expect-error
import { api } from "/scripts/api.js";

(window as unknown as { api: unknown }).api = api;

export const fetchHomeDir = async (): Promise<string> => {
	const res = await api.fetchApi("/meld/home-dir");
	if (!res.ok) {
		throw new Error("Failed to fetch home directory");
	}
	const data = await res.json();
	return data.home;
};

export const cleanupDatabase = async (): Promise<{ count: number }> => {
	const res = await api.fetchApi("/meld/cleanup", {
		method: "POST",
	});
	if (!res.ok) {
		throw new Error(`Failed to cleanup database: ${res.statusText}`);
	}
	return await res.json();
};
