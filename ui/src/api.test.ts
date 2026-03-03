import { describe, expect, it } from "vitest";
import { handleResponse } from "./api";

function jsonResponse(body: unknown, init?: ResponseInit): Response {
	return new Response(JSON.stringify(body), {
		status: 200,
		headers: { "Content-Type": "application/json" },
		...init,
	});
}

describe("handleResponse", () => {
	it("returns data when success=true", async () => {
		const res = jsonResponse({ success: true, data: { id: 42 } });
		const data = await handleResponse<{ id: number }>(res);
		expect(data).toEqual({ id: 42 });
	});

	it("returns undefined data when success=true but data is absent", async () => {
		const res = jsonResponse({ success: true });
		const data = await handleResponse(res);
		expect(data).toBeUndefined();
	});

	it("throws with error field when success=false", async () => {
		const res = jsonResponse({ success: false, error: "Not found" });
		await expect(handleResponse(res)).rejects.toThrow("Not found");
	});

	it("throws with message field when success=false and no error field", async () => {
		const res = jsonResponse({ success: false, message: "Bad input" });
		await expect(handleResponse(res)).rejects.toThrow("Bad input");
	});

	it("throws 'Unknown error' when success=false with no error or message", async () => {
		const res = jsonResponse({ success: false });
		await expect(handleResponse(res)).rejects.toThrow("Unknown error");
	});

	it("throws with status text when res.ok=false and body has error", async () => {
		const res = jsonResponse({ error: "Forbidden" }, { status: 403, statusText: "Forbidden" });
		await expect(handleResponse(res)).rejects.toThrow("Forbidden");
	});

	it("throws generic message when res.ok=false and body is not JSON", async () => {
		const res = new Response("Internal Server Error", {
			status: 500,
			statusText: "Internal Server Error",
		});
		await expect(handleResponse(res)).rejects.toThrow("API error: 500 Internal Server Error");
	});

	it("throws generic message when res.ok=false and body JSON lacks error field", async () => {
		const res = jsonResponse({ detail: "some detail" }, { status: 400, statusText: "Bad Request" });
		await expect(handleResponse(res)).rejects.toThrow("API error: 400 Bad Request");
	});
});
