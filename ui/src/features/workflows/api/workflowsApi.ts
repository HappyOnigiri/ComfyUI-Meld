import { api } from "/scripts/api.js";
import { handleResponse } from "../../../api";

export interface WorkflowInfo {
	name: string;
	valid: boolean;
	loader_count: number;
	load_image_count: number;
	mask_count: number;
	reason: string;
}

export const fetchWorkflows = async (): Promise<WorkflowInfo[]> => {
	const res = await api.fetchApi("/meld/workflows");
	return handleResponse(res);
};

export const fetchWorkflowRaw = async (name: string): Promise<Record<string, unknown>> => {
	const res = await api.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(name)}`);
	return handleResponse(res);
};
