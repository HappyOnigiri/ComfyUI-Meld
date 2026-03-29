import { describe, expect, it } from "vitest";
import { resetLightTableStore, useLightTableStore } from "./store";

describe("light table store", () => {
	it("supports common bucket actions", () => {
		resetLightTableStore();

		useLightTableStore.getState().setIsOpen(true);
		useLightTableStore.getState().addToBucket("keep", "1", {
			id: 1,
			filename: "sample.png",
			subfolder: "",
			type: "output",
			created_at: 0,
			positive: "",
			negative: "",
			tags: [],
		});
		useLightTableStore.getState().removeFromBucket("keep", "1");
		useLightTableStore.getState().clearBucket("keep");

		expect(useLightTableStore.getState().isOpen).toBe(true);
		expect(useLightTableStore.getState().buckets.keep ?? []).toEqual([]);
	});

	it("resets persisted state to defaults", () => {
		useLightTableStore.setState((state) => ({
			...state,
			isOpen: true,
			buckets: { keep: ["1"] },
			images: {
				"1": {
					id: 1,
					filename: "sample.png",
					subfolder: "",
					type: "output",
					created_at: 0,
					positive: "",
					negative: "",
					tags: [],
				},
			},
		}));

		resetLightTableStore();

		expect(useLightTableStore.getState().isOpen).toBe(false);
		expect(useLightTableStore.getState().buckets).toEqual({});
		expect(useLightTableStore.getState().images).toEqual({});
		expect(useLightTableStore.getState().slots).toHaveLength(3);
	});
});
