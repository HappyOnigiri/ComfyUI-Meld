import { describe, expect, it } from "vitest";
import { api } from "/scripts/api.js";
import {
	cleanupDatabase,
	fetchHomeDir,
	handleApiResponse,
	handleResponse,
	parseApiJsonResponse,
	parseJsonResponse,
	unwrapOr,
} from "./api";

vi.mock("/scripts/api.js", () => ({
	api: {
		fetchApi: vi.fn(),
	},
}));

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

describe("parseJsonResponse", () => {
	it("returns data on json success", async () => {
		const res = jsonResponse({ hello: "world" });
		const data = await parseJsonResponse(res);
		expect(data).toEqual({ hello: "world" });
	});

	it("throws parsed msg on json error", async () => {
		const res = jsonResponse({ error: "custom error" }, { status: 400, statusText: "Bad" });
		await expect(parseJsonResponse(res)).rejects.toThrow("custom error");
	});
});

describe("handleApiResponse", () => {
	it("returns ok=true with data when success=true", async () => {
		const res = jsonResponse({ success: true, data: { id: 42 } });
		const result = await handleApiResponse<{ id: number }>(res);
		expect(result).toEqual({ ok: true, data: { id: 42 } });
	});

	it("returns ok=true with undefined data when success=true but data absent", async () => {
		const res = jsonResponse({ success: true });
		const result = await handleApiResponse(res);
		expect(result).toEqual({ ok: true, data: undefined });
	});

	it("returns ok=false with error field when success=false", async () => {
		const res = jsonResponse({ success: false, error: "Not found" });
		const result = await handleApiResponse(res);
		expect(result).toEqual({ ok: false, error: "Not found" });
	});

	it("returns ok=false with message when success=false and no error field", async () => {
		const res = jsonResponse({ success: false, message: "Bad input" });
		const result = await handleApiResponse(res);
		expect(result).toEqual({ ok: false, error: "Bad input" });
	});

	it("returns ok=false 'Unknown error' when success=false with no fields", async () => {
		const res = jsonResponse({ success: false });
		const result = await handleApiResponse(res);
		expect(result).toEqual({ ok: false, error: "Unknown error" });
	});

	it("returns ok=false with body error when res.ok=false and body has error", async () => {
		const res = jsonResponse({ error: "Forbidden" }, { status: 403, statusText: "Forbidden" });
		const result = await handleApiResponse(res);
		expect(result).toEqual({ ok: false, error: "Forbidden" });
	});

	it("returns ok=false with generic message when res.ok=false and body is not JSON", async () => {
		const res = new Response("Internal Server Error", {
			status: 500,
			statusText: "Internal Server Error",
		});
		const result = await handleApiResponse(res);
		expect(result).toEqual({ ok: false, error: "API error: 500 Internal Server Error" });
	});
});

describe("parseApiJsonResponse", () => {
	it("returns ok=true with data on json success", async () => {
		const res = jsonResponse({ hello: "world" });
		const result = await parseApiJsonResponse(res);
		expect(result).toEqual({ ok: true, data: { hello: "world" } });
	});

	it("returns ok=false with parsed msg on json error", async () => {
		const res = jsonResponse({ error: "custom error" }, { status: 400, statusText: "Bad" });
		const result = await parseApiJsonResponse(res);
		expect(result).toEqual({ ok: false, error: "custom error" });
	});

	it("returns ok=false with status text when body is not parseable and not ok", async () => {
		const res = new Response("not json", { status: 503, statusText: "Service Unavailable" });
		const result = await parseApiJsonResponse(res);
		expect(result).toEqual({ ok: false, error: "503 Service Unavailable" });
	});
});

describe("unwrapOr", () => {
	it("returns data when ok=true", () => {
		const result = unwrapOr({ ok: true, data: 42 }, 0);
		expect(result).toBe(42);
	});

	it("returns fallback when ok=false", () => {
		const result = unwrapOr({ ok: false, error: "err" }, 0);
		expect(result).toBe(0);
	});
});

describe("API endpoints", () => {
	it("fetchHomeDir calls api", async () => {
		(api.fetchApi as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
			jsonResponse({ success: true, data: { home: "/abc" } }),
		);
		const res = await fetchHomeDir();
		expect(res).toBe("/abc");
	});

	it("cleanupDatabase calls api", async () => {
		(api.fetchApi as ReturnType<typeof vi.fn>).mockResolvedValueOnce(
			jsonResponse({ success: true, data: { count: 3 } }),
		);
		const res = await cleanupDatabase();
		expect(res).toEqual({ count: 3 });
	});
});
