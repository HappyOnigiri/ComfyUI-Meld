import type React from "react";
import type { GalleryAction, MeldImage } from "../../../types";
import type { SlotAction } from "../types";

export const executeSlotAction = (
	action: SlotAction,
	imageIds: number[],
	images: MeldImage[],
	dispatch: React.Dispatch<GalleryAction>,
) => {
	if (imageIds.length === 0) return;

	switch (action.type) {
		case "delete":
			dispatch({
				type: "OPEN_MODAL",
				payload: {
					type: "delete_confirm",
					imageIds,
					hasLineage: images.some((img) => img.parent_id || img.has_children),
					isPermanent: false, // To make it simple, standard soft delete
				},
			});
			break;

		case "add_tag":
			dispatch({
				type: "OPEN_MODAL",
				payload: {
					type: "tag_edit",
					imageIds,
					tags: action.value ? [action.value] : [],
				},
			});
			break;

		case "move_folder":
			// Future implementation for moving folders
			console.warn("move_folder action is not yet implemented");
			break;

		case "send_to_node":
			// Use the first image for send_to_node since injecting multiple might be complex
			if (imageIds.length > 0) {
				// Here we could directly inject or open a generic selection,
				// but let's dispatch an alert or use workflow implementation if accessible.
				// For now, prompt the user that batch sending to node is not fully supported natively,
				// or just send the first one.
				console.warn(
					"send_to_node is complex for batch, delegating to future implementation",
				);
				alert(`Would send ${imageIds.length} images to nodes (Feature WIP)`);
			}
			break;

		default:
			console.log(
				`Action ${action.type} executed on ${imageIds.length} images`,
			);
			break;
	}
};
