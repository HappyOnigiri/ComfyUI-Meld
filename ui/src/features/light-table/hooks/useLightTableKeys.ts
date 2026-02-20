import { useEffect } from "react";
import { useGallery } from "../../../store/GalleryContext";
import { useLightTableStore } from "../store";

export const useLightTableKeys = () => {
	const { state: galleryState } = useGallery();
	const { slots, addToBucket } = useLightTableStore();

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// 入力要素（input, textarea）にフォーカスがある場合は無視する
			if (
				document.activeElement?.tagName === "INPUT" ||
				document.activeElement?.tagName === "TEXTAREA" ||
				(document.activeElement as HTMLElement)?.isContentEditable
			) {
				return;
			}

			// 何も選択されていない場合は無視
			const selectedIds = galleryState.selectedIds;
			if (!selectedIds || selectedIds.size === 0) return;

			// マッチするショートカットキーを持つスロットを探す
			const slot = slots.find(
				(s) => s.shortcutKey.toLowerCase() === e.key.toLowerCase(),
			);

			if (slot) {
				e.preventDefault();

				// 選択された全ての画像をバケツに追加
				selectedIds.forEach((id: number) => {
					addToBucket(slot.id, String(id));
				});

				// トーストへの通知などは別途実装可能
				console.log(`Added ${selectedIds.size} images to slot ${slot.label}`);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [slots, addToBucket, galleryState.selectedIds]);
};
