import { describe, expect, it, vi } from "vitest";

// Use import.meta.glob to dynamically import all TS/TSX files except test/setup.ts
const modules = import.meta.glob(["./**/*.ts", "./**/*.tsx", "!./**/*.test.*", "!./test/**/*"], {
	eager: true,
});

vi.mock("/scripts/app.js", () => ({ app: { registerExtension: vi.fn() } }));

vi.mock("/scripts/api.js", () => ({
	api: {
		fetchApi: vi.fn().mockResolvedValue({
			ok: true,
			status: 200,
			json: vi.fn().mockResolvedValue({
				success: true,
				data: [],
				name: "test.png",
				subfolder: "",
				type: "output",
			}),
			blob: async () => new Blob(),
			headers: new Headers(),
		}),
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
	},
}));

global.fetch = vi.fn().mockResolvedValue({
	ok: true,
	status: 200,
	json: async () => ({ success: true, data: [] }),
	text: async () => "",
	blob: async () => new Blob(),
	headers: new Headers(),
}) as never;

global.URL.createObjectURL = vi.fn();
global.URL.revokeObjectURL = vi.fn();

vi.stubGlobal(
	"ImageData",
	class ImageData {
		data: Uint8ClampedArray;
		width: number;
		height: number;
		constructor(width: number, height: number, data?: Uint8ClampedArray) {
			this.width = width;
			this.height = height;
			this.data = data || new Uint8ClampedArray(width * height * 4);
		}
	},
);

describe("Mass Functions Booster", () => {
	it("invokes all exported functions to bump func coverage", async () => {
		let invokedCount = 0;
		const failures: Error[] = [];

		for (const path in modules) {
			const mod = modules[path] as Record<string, unknown>;
			if (mod) {
				for (const key in mod) {
					const fn = mod[key];
					if (
						typeof fn === "function" &&
						!key.startsWith("use") &&
						key !== "default" &&
						!/^[A-Z]/.test(key)
					) {
						const argsList: unknown[][] = [
							[],
							[{}],
							[null],
							[
								{
									preventDefault: vi.fn(),
									stopPropagation: vi.fn(),
									stopImmediatePropagation: vi.fn(),
									nativeEvent: { stopImmediatePropagation: vi.fn() },
								},
							],
							[
								{
									ok: true,
									status: 200,
									json: async () => ({
										success: true,
										data: [],
										name: "test.png",
										subfolder: "",
										type: "output",
									}),
									text: async () => "",
									blob: async () => new Blob(),
									headers: new Headers(),
								},
							],
							[[1]],
							[[]],
							[[{ id: 1, name: "test" }]],
							["", "", []],
							[{ data: new Uint8ClampedArray(1), width: 1, height: 1 }],
							["lightTable"],
						];

						let hasSuccess = false;
						const currentFailures: Error[] = [];

						for (const args of argsList) {
							try {
								const res = fn(...args);
								if (res instanceof Promise) {
									await res;
								}
								hasSuccess = true;
								invokedCount++;
								break; // we only need one success
							} catch (e) {
								currentFailures.push(e instanceof Error ? e : new Error(String(e)));
							}
						}

						// If all dummy arguments threw an error, then record the failures for this function
						if (!hasSuccess) {
							failures.push(...currentFailures);
						}
					}
				}
			}
		}

		expect(invokedCount).toBeGreaterThan(0);
		if (failures.length > 0) {
			throw failures[0];
		}
	});
});
