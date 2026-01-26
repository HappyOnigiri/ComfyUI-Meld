import { Trash2 } from "lucide-react";
import type React from "react";
import {
	AddUnifiedLoaderIcon,
	EditSourceImageIcon,
	EditTagsIcon,
	QueueWorkflowIcon,
	QueueWorkflowMaskIcon,
	RestoreFullWorkflowIcon,
	RestoreImageIcon,
	SendToWorkflowIcon,
	SendToWorkflowMaskIcon,
} from "./shortcutActionIcons";

export interface ShortcutAction {
	id: string;
	label: string;
	icon: React.ElementType | null;
}

export const QUICK_SHORTCUT_ACTIONS: ShortcutAction[] = [
	{ id: "", label: "None", icon: null },
	{
		id: "add_unified_loader",
		label: "Add Unified Loader",
		icon: AddUnifiedLoaderIcon,
	},
	{
		id: "send_to_workflow",
		label: "Send to Workflow",
		icon: SendToWorkflowIcon,
	},
	{
		id: "send_to_workflow_mask",
		label: "Send to Workflow (Mask)",
		icon: SendToWorkflowMaskIcon,
	},
	{ id: "queue_workflow", label: "Queue Workflow", icon: QueueWorkflowIcon },
	{
		id: "queue_workflow_mask",
		label: "Queue Workflow (Mask)",
		icon: QueueWorkflowMaskIcon,
	},
	{
		id: "restore_full_workflow",
		label: "Restore Full Workflow",
		icon: RestoreFullWorkflowIcon,
	},
	{ id: "edit_tags", label: "Edit Tags", icon: EditTagsIcon },
	{
		id: "edit_source_image",
		label: "Edit Source Image",
		icon: EditSourceImageIcon,
	},
	{
		id: "restore_image",
		label: "Restore Image (Trash)",
		icon: RestoreImageIcon,
	},
	{ id: "delete_or_trash", label: "Delete / Trash", icon: Trash2 },
];
