// @ts-expect-error
import { api } from "/scripts/api.js";

export interface WorkflowInfo {
	name: string;
	valid: boolean;
	loader_count: number;
	reason: string;
}

export const fetchWorkflows = async (): Promise<WorkflowInfo[]> => {
	const res = await api.fetchApi("/meld/workflows");
	if (!res.ok) {
		throw new Error(`Failed to fetch workflows: ${res.statusText}`);
	}
	return await res.json();
};

// biome-ignore lint/suspicious/noExplicitAny: ComfyUI workflow format is complex and dynamic
export const fetchWorkflowRaw = async (name: string): Promise<any> => {
	const res = await api.fetchApi(
		`/meld/workflow/raw?name=${encodeURIComponent(name)}`,
	);
	if (!res.ok) {
		throw new Error(`Failed to fetch workflow raw: ${res.statusText}`);
	}
	return await res.json();
};
