import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MeldImage } from "../../types";
import type { SlotConfig, TrayState } from "./types";

const defaultSlots: SlotConfig[] = [
	{
		id: "keep",
		label: "Keep",
		color: "var(--meld-success-color, #4ade80)",
		shortcutKey: "1",
	},
	{
		id: "refine",
		label: "Refine",
		color: "var(--brand-yellow, #ffd700)",
		shortcutKey: "2",
	},
	{
		id: "trash",
		label: "Trash",
		color: "var(--meld-danger-color, #ff4c4c)",
		shortcutKey: "3",
	},
];

export const useLightTableStore = create<TrayState>()(
	persist(
		(set) => ({
			isOpen: false,
			slots: defaultSlots,
			buckets: {},
			images: {},
			toastMessage: null,

			setIsOpen: (isOpen: boolean) => set({ isOpen }),

			addToBucket: (slotId: string, imageId: string, image?: MeldImage) =>
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

					const newImages = { ...state.images };
					if (image) {
						newImages[imageId] = image;
					}

					return { buckets: newBuckets, images: newImages };
				}),

			removeFromBucket: (slotId: string, imageId: string) =>
				set((state: TrayState) => {
					const newBuckets = {
						...state.buckets,
						[slotId]:
							state.buckets[slotId]?.filter((id) => id !== imageId) || [],
					};

					const stillInUse = Object.values(newBuckets).some((bucket) =>
						bucket.includes(imageId),
					);
					const newImages = { ...state.images };
					if (!stillInUse) {
						delete newImages[imageId];
					}

					return { buckets: newBuckets, images: newImages };
				}),

			clearBucket: (slotId: string) =>
				set((state: TrayState) => {
					const newBuckets = {
						...state.buckets,
						[slotId]: [],
					};

					const usedImageIds = new Set(Object.values(newBuckets).flat());
					const newImages = { ...state.images };
					for (const id of Object.keys(newImages)) {
						if (!usedImageIds.has(id)) {
							delete newImages[id];
						}
					}

					return { buckets: newBuckets, images: newImages };
				}),

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

					const usedImageIds = new Set(Object.values(newBuckets).flat());
					const newImages = { ...state.images };
					for (const id of Object.keys(newImages)) {
						if (!usedImageIds.has(id)) {
							delete newImages[id];
						}
					}

					return {
						slots: newSlots,
						buckets: newBuckets,
						images: newImages,
					};
				}),

			/**
			 * Show toast message for 2.5 seconds.
			 * If called multiple times, the latest message overwrites the previous one.
			 */
			showToast: (message: string) => {
				set({ toastMessage: message });
				setTimeout(() => {
					set({ toastMessage: null });
				}, 2500);
			},
		}),
		{
			name: "meld-light-table-storage",
			// Persist both slots configuration, buckets, and images
			partialize: (state: TrayState) => ({
				slots: state.slots,
				buckets: state.buckets,
				images: state.images,
			}),
		},
	),
);
