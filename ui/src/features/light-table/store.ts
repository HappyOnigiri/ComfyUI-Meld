import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SlotConfig, TrayState } from "./types";

const defaultSlots: SlotConfig[] = [
	{
		id: "keep",
		label: "Keep",
		color: "var(--meld-success-color, #4ade80)",
		shortcutKey: "1",
		defaultAction: { type: "add_tag", value: "favorite" },
	},
	{
		id: "refine",
		label: "Refine",
		color: "var(--brand-yellow, #ffd700)",
		shortcutKey: "2",
		defaultAction: { type: "send_to_node" },
	},
	{
		id: "trash",
		label: "Trash",
		color: "var(--brand-red, #ff4c4c)",
		shortcutKey: "3",
		defaultAction: { type: "delete" },
	},
];

export const useLightTableStore = create<TrayState>()(
	persist(
		(set) => ({
			isOpen: false,
			slots: defaultSlots,
			buckets: {},

			setIsOpen: (isOpen) => set({ isOpen }),

			addToBucket: (slotId, imageId) =>
				set((state) => {
					// Remove from other buckets to avoid duplicates
					const newBuckets = { ...state.buckets };
					for (const key in newBuckets) {
						newBuckets[key] = newBuckets[key].filter((id) => id !== imageId);
					}

					if (!newBuckets[slotId]) {
						newBuckets[slotId] = [];
					}

					// Add to target bucket if not already there
					if (!newBuckets[slotId].includes(imageId)) {
						newBuckets[slotId] = [...newBuckets[slotId], imageId];
					}

					return { buckets: newBuckets };
				}),

			removeFromBucket: (slotId, imageId) =>
				set((state) => ({
					buckets: {
						...state.buckets,
						[slotId]:
							state.buckets[slotId]?.filter((id) => id !== imageId) || [],
					},
				})),

			clearBucket: (slotId) =>
				set((state) => ({
					buckets: {
						...state.buckets,
						[slotId]: [],
					},
				})),

			updateSlot: (slotId, config) =>
				set((state) => ({
					slots: state.slots.map((slot) =>
						slot.id === slotId ? { ...slot, ...config } : slot,
					),
				})),
		}),
		{
			name: "meld-light-table-storage",
			// Only persist slots configuration, not the temporary buckets
			partialize: (state) => ({ slots: state.slots }),
		},
	),
);
