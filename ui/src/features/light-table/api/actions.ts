import type React from "react";
import type { GalleryAction, MeldImage } from "../../../types";
import type { SlotAction } from "../types";

export const executeSlotAction = (
	action: SlotAction,
	imageIds: number[],
	images: MeldImage[],
	dispatch: React.Dispatch<GalleryAction>,
	onSuccess?: () => void,
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
					onSuccess,
				},
			});
			break;

		case "edit_tags": {
			const allTags = new Set<string>();
			for (const img of images) {
				if (img.tags) {
					for (const tag of img.tags) {
						allTags.add(tag);
					}
				}
			}
			if (action.value) {
				allTags.add(action.value);
			}

			dispatch({
				type: "OPEN_MODAL",
				payload: {
					type: "tag_edit",
					imageIds,
					tags: Array.from(allTags),
					onSuccess,
				},
			});
			break;
		}

		case "move_folder":
			// Future implementation for moving folders
			console.warn("move_folder action is not yet implemented");
			onSuccess?.();
			break;

		case "queue_workflow":
			dispatch({
				type: "OPEN_MODAL",
				payload: { type: "workflow_selection", images, onSuccess },
			});
			break;

		case "run_with_mask":
			if (imageIds.length > 0) {
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "workflow_selection",
						images: images.filter((img) => imageIds.includes(img.id)),
						isMaskSequence: true,
						onSuccess,
					},
				});
			}
			break;

		case "download":
			dispatch({
				type: "OPEN_MODAL",
				payload: { type: "download_options", imageIds, onSuccess },
			});
			break;

		default:
			console.log(
				`Action ${action.type} executed on ${imageIds.length} images`,
			);
			break;
	}
};
