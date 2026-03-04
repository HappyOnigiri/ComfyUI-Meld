import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useWorkflowExecution } from "./useWorkflowExecution";

describe("useWorkflowExecution", () => {
	it("renders without crashing", () => {
		const { result } = renderHook(() => useWorkflowExecution());
		expect(result.current).toBeTruthy();
	});
});
