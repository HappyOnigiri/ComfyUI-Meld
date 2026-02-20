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
		clearAfterAction: true,
	},
	{
		id: "refine",
		label: "Refine",
		color: "var(--brand-yellow, #ffd700)",
		shortcutKey: "2",
		defaultAction: { type: "send_to_node" },
		clearAfterAction: true,
	},
	{
		id: "trash",
		label: "Trash",
		color: "var(--meld-danger-color, #ff4c4c)",
		shortcutKey: "3",
		defaultAction: { type: "delete" },
		clearAfterAction: true,
	},
];

export const useLightTableStore = create<TrayState>()(
	persist(
		(set) => ({
			isOpen: false,
			slots: defaultSlots,
			buckets: {},

			setIsOpen: (isOpen: boolean) => set({ isOpen }),

			addToBucket: (slotId: string, imageId: string) =>
				set((state: TrayState) => {
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

			removeFromBucket: (slotId: string, imageId: string) =>
				set((state: TrayState) => ({
					buckets: {
						...state.buckets,
						[slotId]:
							state.buckets[slotId]?.filter((id) => id !== imageId) || [],
					},
				})),

			clearBucket: (slotId: string) =>
				set((state: TrayState) => ({
					buckets: {
						...state.buckets,
						[slotId]: [],
					},
				})),

			updateSlot: (slotId: string, config: Partial<SlotConfig>) =>
				set((state: TrayState) => ({
					slots: state.slots.map((slot) =>
						slot.id === slotId ? { ...slot, ...config } : slot,
					),
				})),

			addSlot: (config: SlotConfig) =>
				set((state: TrayState) => ({
					slots: [...state.slots, config],
				})),

			removeSlot: (slotId: string) =>
				set((state: TrayState) => {
					const newSlots = state.slots.filter((slot) => slot.id !== slotId);
					const newBuckets = { ...state.buckets };
					delete newBuckets[slotId];
					return {
						slots: newSlots,
						buckets: newBuckets,
					};
				}),
		}),
		{
			name: "meld-light-table-storage",
			// Persist both slots configuration and buckets
			partialize: (state: TrayState) => ({
				slots: state.slots,
				buckets: state.buckets,
			}),
		},
	),
);
