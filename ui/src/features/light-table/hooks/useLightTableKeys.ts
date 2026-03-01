import { useEffect } from "react";
import { useGallery } from "../../../store/GalleryContext";
import { useLightTableStore } from "../store";

export const useLightTableKeys = () => {
	const { state: galleryState } = useGallery();
	const slots = useLightTableStore((s) => s.slots);
	const addToBucket = useLightTableStore((s) => s.addToBucket);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Ignore if input elements (input, textarea) have focus
			if (
				document.activeElement?.tagName === "INPUT" ||
				document.activeElement?.tagName === "TEXTAREA" ||
				(document.activeElement as HTMLElement)?.isContentEditable
			) {
				return;
			}

			// Ignore if nothing is selected
			const selectedIds = galleryState.selectedIds;
			if (!selectedIds || selectedIds.size === 0) return;

			// Look for a slot with a matching shortcut key
			const slot = slots.find(
				(s) => s.shortcutKey.toLowerCase() === e.key.toLowerCase(),
			);

			if (slot) {
				e.preventDefault();

				// Add all selected images to the bucket
				selectedIds.forEach((id: number) => {
					addToBucket(slot.id, String(id));
				});

				// Notification to toast etc. can be implemented separately
				console.log(`Added ${selectedIds.size} images to slot ${slot.label}`);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [slots, addToBucket, galleryState.selectedIds]);
};
