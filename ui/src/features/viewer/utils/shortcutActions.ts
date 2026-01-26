import {
	ArrowBigRight,
	ArrowRight,
	Play,
	PlusCircle,
	RefreshCw,
	Square,
	Tag,
	Trash2,
} from "lucide-react";
import type React from "react";

export interface ShortcutAction {
	id: string;
	label: string;
	icon: React.ElementType | null;
}

export const QUICK_SHORTCUT_ACTIONS: ShortcutAction[] = [
	{ id: "", label: "None", icon: null },
	{ id: "add_unified_loader", label: "Add Unified Loader", icon: ArrowRight },
	{
		id: "restore_full_workflow",
		label: "Restore Full Workflow",
		icon: ArrowBigRight,
	},
	{ id: "queue_workflow", label: "Queue Workflow", icon: Play },
	{
		id: "send_to_workflow_mask",
		label: "Send to Workflow (Mask)",
		icon: Square,
	},
	{ id: "queue_workflow_mask", label: "Queue Workflow (Mask)", icon: Square },
	{ id: "edit_source_image", label: "Edit Source Image", icon: PlusCircle },
	{ id: "edit_tags", label: "Edit Tags", icon: Tag },
	{ id: "restore_image", label: "Restore Image (Trash)", icon: RefreshCw },
	{ id: "delete_or_trash", label: "Delete / Trash", icon: Trash2 },
];
