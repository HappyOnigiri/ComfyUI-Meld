import { api } from "/scripts/api.js";
import { type ApiResult, handleApiResponse } from "../../../api";

export interface WorkflowInfo {
	name: string;
	valid: boolean;
	loader_count: number;
	load_image_count: number;
	mask_count: number;
	reason: string;
}

export const fetchWorkflows = async (): Promise<ApiResult<WorkflowInfo[]>> => {
	try {
		const res = await api.fetchApi("/meld/workflows");
		return handleApiResponse<WorkflowInfo[]>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};

export const fetchWorkflowRaw = async (
	name: string,
): Promise<ApiResult<Record<string, unknown>>> => {
	try {
		const res = await api.fetchApi(`/meld/workflow/raw?name=${encodeURIComponent(name)}`);
		return handleApiResponse<Record<string, unknown>>(res);
	} catch (e) {
		return { ok: false, error: e instanceof Error ? e.message : String(e) };
	}
};
