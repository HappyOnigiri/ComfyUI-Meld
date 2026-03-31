import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { MeldImage } from "../../../types";
import * as workflowsApi from "../api/workflowsApi";
import { useWorkflowExecution } from "./useWorkflowExecution";

vi.mock("../api/workflowsApi", () => ({
	fetchWorkflowRaw: vi.fn(),
}));

describe("useWorkflowExecution", () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it("renders without crashing", () => {
		const { result } = renderHook(() => useWorkflowExecution());
		expect(result.current).toBeTruthy();
	});

	it("executes workflow successfully with API format", async () => {
		vi.mocked(workflowsApi.fetchWorkflowRaw).mockResolvedValue({
			ok: true,
			data: {
				"1": { class_type: "MeldImageLoader", inputs: {} },
				"2": { class_type: "LoadImageMask", inputs: {} },
			},
		});

		(window as unknown as { api: unknown }).api = {
			fetchApi: vi
				.fn()
				.mockResolvedValue(new Response(JSON.stringify({ prompt_id: "123", number: 1 }))),
			clientId: "test",
			addEventListener: vi.fn(),
		};

		const { result } = renderHook(() => useWorkflowExecution());

		await act(async () => {
			await result.current.executeWorkflow(
				"test-workflow",
				{ id: 1, filename: "test.jpg" } as MeldImage,
				"mask.png",
			);
		});

		expect(workflowsApi.fetchWorkflowRaw).toHaveBeenCalledWith("test-workflow");
	});
});
