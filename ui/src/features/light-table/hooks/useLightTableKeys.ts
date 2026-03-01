import { useCallback } from "react";
import { useKeydownCapture } from "../../../hooks/useKeydownCapture";
import { useGallery } from "../../../store/GalleryContext";
import {
	isEditableActiveElement,
	stopKeyboardEvent,
} from "../../../utils/keyboard";
import { useLightTableStore } from "../store";

export const useLightTableKeys = () => {
	const { state: galleryState } = useGallery();
	const slots = useLightTableStore((s) => s.slots);
	const addToBucket = useLightTableStore((s) => s.addToBucket);

	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			// Ignore if input elements (input, textarea) have focus
			if (isEditableActiveElement()) {
				return;
			}

			// Ignore if nothing is selected
			const selectedIds = galleryState.selectedIds;
			if (!selectedIds || selectedIds.size === 0) {
				return;
			}

			// Look for a slot with a matching shortcut key
			const slot = slots.find(
				(s) => s.shortcutKey.toLowerCase() === e.key.toLowerCase(),
			);

			if (!slot) {
				return;
			}

			stopKeyboardEvent(e);

			// Add all selected images to the bucket
			selectedIds.forEach((id: number) => {
				addToBucket(slot.id, String(id));
			});
		},
		[slots, addToBucket, galleryState.selectedIds],
	);

	useKeydownCapture({ onKeyDown: handleKeyDown });
};
