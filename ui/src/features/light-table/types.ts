import type { MeldImage } from "../../types";

export type ActionType =
	| "delete"
	| "edit_tags"
	| "move_folder"
	| "queue_workflow"
	| "run_with_mask"
	| "download";

export interface SlotAction {
	type: ActionType;
	value?: string;
}

export interface SlotConfig {
	id: string;
	label: string;
	color: string;
	shortcutKey: string;
}

export interface TrayState {
	isOpen: boolean;
	buckets: Record<string, string[]>;
	slots: SlotConfig[];
	images: Record<string, MeldImage>;
	/** Toast notification message (null = hidden) */
	toastMessage: string | null;

	// Actions
	setIsOpen: (isOpen: boolean) => void;
	addToBucket: (slotId: string, imageId: string, image?: MeldImage) => void;
	removeFromBucket: (slotId: string, imageId: string) => void;
	clearBucket: (slotId: string) => void;
	updateSlot: (slotId: string, config: Partial<SlotConfig>) => void;
	addSlot: (config: SlotConfig) => void;
	removeSlot: (slotId: string) => void;
	/** Show toast for 2.5 seconds */
	showToast: (message: string) => void;
}
