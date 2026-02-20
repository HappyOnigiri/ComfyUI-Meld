import type { MeldImage } from "../../types";

export type ActionType = "delete" | "add_tag" | "move_folder" | "send_to_node";

export interface SlotAction {
	type: ActionType;
	value?: string;
}

export interface SlotConfig {
	id: string;
	label: string;
	color: string;
	shortcutKey: string;
	defaultAction: SlotAction;
}

export interface TrayState {
	isOpen: boolean;
	buckets: Record<string, string[]>;
	slots: SlotConfig[];
	images: Record<string, MeldImage>;

	// Actions
	setIsOpen: (isOpen: boolean) => void;
	addToBucket: (slotId: string, imageId: string, image?: MeldImage) => void;
	removeFromBucket: (slotId: string, imageId: string) => void;
	clearBucket: (slotId: string) => void;
	updateSlot: (slotId: string, config: Partial<SlotConfig>) => void;
	addSlot: (config: SlotConfig) => void;
	removeSlot: (slotId: string) => void;
}
