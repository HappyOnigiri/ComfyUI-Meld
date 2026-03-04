import type { MeldImage } from "../../types";

let idCounter = 0;

/**
 * Create a MeldImage test fixture with sensible defaults.
 * Every call increments the internal counter so IDs are unique per test run.
 */
export function createTestImage(overrides: Partial<MeldImage> = {}): MeldImage {
	idCounter++;
	return {
		id: idCounter,
		filename: `test_image_${idCounter}.png`,
		subfolder: "",
		type: "output",
		created_at: Date.now() / 1000,
		positive: "test positive prompt",
		negative: "",
		width: 512,
		height: 512,
		tags: [],
		...overrides,
	};
}

/**
 * Reset the internal counter (call in beforeEach if stable IDs are needed).
 */
export function resetImageIdCounter(): void {
	idCounter = 0;
}
