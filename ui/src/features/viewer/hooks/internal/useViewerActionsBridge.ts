import type React from "react";
import { useCallback, useState } from "react";
import type { GalleryAction, GalleryState, MeldImage } from "../../../../types";
import * as imagesApi from "../../../images/api/imagesApi";
import { deleteImagesAndSyncLightTable } from "../../../images/hooks/deleteHelpers";
import { useLightTableStore } from "../../../light-table/store";
import { parseShortcutCommand } from "../../../settings/utils/shortcutGrammar";
import type { ViewerMountRefs, ViewerShortcutUndoAction } from "./types";

interface UseViewerActionsBridgeParams {
	state: GalleryState;
	dispatch: React.Dispatch<GalleryAction>;
	image: MeldImage | undefined;
	isFullscreen: boolean;
	currentThumbnails: MeldImage[];
	currentIndex: number;
	viewerMode: GalleryState["viewerMode"];
	lineageImages: MeldImage[];
	images: MeldImage[];
	mountRefs: ViewerMountRefs;
	handleNext: () => void;
	handlePrevious: () => Promise<void>;
	handleEditTags: (image: MeldImage) => void;
	handleRestore: (image: MeldImage) => Promise<void>;
}

export const useViewerActionsBridge = ({
	state,
	dispatch,
	image,
	isFullscreen,
	currentThumbnails,
	currentIndex,
	viewerMode,
	lineageImages,
	images,
	mountRefs,
	handleNext,
	handlePrevious,
	handleEditTags,
	handleRestore,
}: UseViewerActionsBridgeParams) => {
	const [lastDeletedImages, setLastDeletedImages] = useState<
		MeldImage[] | null
	>(null);
	const [lastShortcutAction, setLastShortcutAction] =
		useState<ViewerShortcutUndoAction | null>(null);

	const handleDelete = useCallback(
		async (forceNoConfirm = false) => {
			if (!image) return;

			const deleteMode = isFullscreen
				? state.settings["fullscreen.delete_mode"]
				: state.settings["viewer.delete_mode"];

			if (!forceNoConfirm && deleteMode === "confirm") {
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "delete_confirm",
						imageIds: [image.id],
						hasLineage: !!(image.parent_id || image.has_children),
						isPermanent: state.viewScope === "trash",
					},
				});
				return;
			}

			try {
				const isPermanent = state.viewScope === "trash";
				const idsToDelete = new Set<number>([image.id]);

				if (deleteMode === "lineage") {
					const lineage = await imagesApi.fetchLineage(image.id);
					for (const lineageImage of lineage) {
						idsToDelete.add(lineageImage.id);
					}
				}

				if (
					!mountRefs.isMountedRef.current ||
					mountRefs.viewerImageIdRef.current === null
				) {
					return;
				}

				if (currentThumbnails.length > idsToDelete.size) {
					let found = false;
					for (let i = currentIndex + 1; i < currentThumbnails.length; i++) {
						if (!idsToDelete.has(currentThumbnails[i].id)) {
							dispatch({
								type: "OPEN_VIEWER",
								payload: {
									id: currentThumbnails[i].id,
									mode: viewerMode,
									...(viewerMode === "lighttable" &&
									state.viewerLightTableSlotId
										? { slotId: state.viewerLightTableSlotId }
										: {}),
								},
							});
							found = true;
							break;
						}
					}

					if (!found) {
						for (let i = currentIndex - 1; i >= 0; i--) {
							if (!idsToDelete.has(currentThumbnails[i].id)) {
								dispatch({
									type: "OPEN_VIEWER",
									payload: {
										id: currentThumbnails[i].id,
										mode: viewerMode,
										...(viewerMode === "lighttable" &&
										state.viewerLightTableSlotId
											? { slotId: state.viewerLightTableSlotId }
											: {}),
									},
								});
								found = true;
								break;
							}
						}
					}

					if (!found) {
						dispatch({ type: "CLOSE_VIEWER" });
					}
				} else {
					dispatch({ type: "CLOSE_VIEWER" });
				}

				await deleteImagesAndSyncLightTable(
					Array.from(idsToDelete),
					isPermanent,
				);
				if (!isPermanent) {
					const deletedImages = currentThumbnails.filter((thumb) =>
						idsToDelete.has(thumb.id),
					);
					setLastDeletedImages(deletedImages);
					setLastShortcutAction(null);
				}
				dispatch({ type: "REMOVE_IMAGES", payload: Array.from(idsToDelete) });
			} catch (err: unknown) {
				dispatch({
					type: "SET_ERROR",
					payload: err instanceof Error ? err.message : String(err),
				});
			}
		},
		[
			currentIndex,
			currentThumbnails,
			dispatch,
			image,
			isFullscreen,
			mountRefs,
			state.settings,
			state.viewScope,
			state.viewerLightTableSlotId,
			viewerMode,
		],
	);

	const handleTagEditAction = useCallback(() => {
		if (!image) return;
		handleEditTags(image);
	}, [handleEditTags, image]);

	const handleRestoreAction = useCallback(async () => {
		if (!image) return;
		if (currentThumbnails.length > 1) {
			handleNext();
		} else {
			dispatch({ type: "CLOSE_VIEWER" });
		}
		await handleRestore(image);
	}, [currentThumbnails.length, dispatch, handleNext, handleRestore, image]);

	const handleUndoDelete = useCallback(async () => {
		if (!lastDeletedImages || lastDeletedImages.length === 0) return;
		const idsToRestore = lastDeletedImages.map((img) => img.id);
		const idToOpen = idsToRestore[0];

		try {
			const result = await imagesApi.restoreImages(idsToRestore);
			if (!mountRefs.isMountedRef.current) return;
			dispatch({ type: "ADD_IMAGES", payload: lastDeletedImages });

			if (state.viewScope === "trash") {
				const restoredIds = result.restored_ids || idsToRestore;
				dispatch({ type: "REMOVE_IMAGES", payload: restoredIds });
			}

			setLastDeletedImages(null);
			if (!mountRefs.isMountedRef.current) return;

			dispatch({
				type: "OPEN_VIEWER",
				payload: {
					id: idToOpen,
					mode: viewerMode,
					...(viewerMode === "lighttable" && state.viewerLightTableSlotId
						? { slotId: state.viewerLightTableSlotId }
						: {}),
				},
			});
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [
		dispatch,
		lastDeletedImages,
		mountRefs.isMountedRef,
		state.viewScope,
		state.viewerLightTableSlotId,
		viewerMode,
	]);

	const handleUndo = useCallback(async () => {
		if (lastDeletedImages && lastDeletedImages.length > 0) {
			await handleUndoDelete();
			return;
		}
		if (!lastShortcutAction || lastShortcutAction.type !== "tags") {
			return;
		}

		const { imageId, addTags, removeTags } = lastShortcutAction;
		try {
			await imagesApi.bulkUpdateImageTags([imageId], addTags, removeTags);

			const targetImage = (
				viewerMode === "lineage" ? lineageImages : images
			).find((img) => img.id === imageId);

			if (targetImage) {
				const newTags = [...targetImage.tags];
				for (const tag of addTags) {
					if (!newTags.includes(tag)) newTags.push(tag);
				}
				const finalTags = newTags.filter((tag) => !removeTags.includes(tag));
				dispatch({
					type: "UPDATE_IMAGE",
					payload: { ...targetImage, tags: finalTags },
				});

				dispatch({
					type: "OPEN_VIEWER",
					payload: { id: imageId, mode: viewerMode },
				});
			}
			setLastShortcutAction(null);
		} catch (err: unknown) {
			dispatch({
				type: "SET_ERROR",
				payload: err instanceof Error ? err.message : String(err),
			});
		}
	}, [
		dispatch,
		handleUndoDelete,
		images,
		lastDeletedImages,
		lastShortcutAction,
		lineageImages,
		viewerMode,
	]);

	const executeCommand = useCallback(
		async (command: string) => {
			if (!command || !image) return;

			const currentImageId = image.id;
			const currentImageTags = [...image.tags];
			const result = parseShortcutCommand(command, image);
			const {
				addTags,
				removeTags,
				isDeleted,
				moveNext,
				movePrev,
				sendToLtSlot,
			} = result;

			if (sendToLtSlot) {
				const store = useLightTableStore.getState();
				const slot = store.slots.find(
					(slotItem) =>
						slotItem.id.toLowerCase() === sendToLtSlot.toLowerCase() ||
						slotItem.label.toLowerCase() === sendToLtSlot.toLowerCase(),
				);

				if (slot) {
					store.addToBucket(slot.id, String(currentImageId), image);
					store.showToast(`Sent to ${slot.label}`);

					if (!isDeleted) {
						if (currentThumbnails.length > 1) {
							let nextTargetId: number | null = null;
							for (
								let i = currentIndex + 1;
								i < currentThumbnails.length;
								i++
							) {
								if (currentThumbnails[i].id !== currentImageId) {
									nextTargetId = currentThumbnails[i].id;
									break;
								}
							}
							if (nextTargetId === null) {
								for (let i = currentIndex - 1; i >= 0; i--) {
									if (currentThumbnails[i].id !== currentImageId) {
										nextTargetId = currentThumbnails[i].id;
										break;
									}
								}
							}

							if (nextTargetId !== null) {
								dispatch({
									type: "OPEN_VIEWER",
									payload: { id: nextTargetId, mode: viewerMode },
								});
							} else {
								dispatch({ type: "CLOSE_VIEWER" });
							}
						} else {
							dispatch({ type: "CLOSE_VIEWER" });
						}

						dispatch({ type: "REMOVE_IMAGES", payload: [currentImageId] });
					}
				} else {
					store.showToast(
						`Error: Light Table slot "${sendToLtSlot}" not found`,
						"error",
					);
					console.warn(
						`Attempted to send to non-existent LT slot: ${sendToLtSlot}`,
					);
				}
			}

			if (addTags.length > 0 || removeTags.length > 0) {
				try {
					await imagesApi.bulkUpdateImageTags(
						[currentImageId],
						addTags,
						removeTags,
					);
					const newTags = [...currentImageTags];
					for (const tag of addTags) {
						if (!newTags.includes(tag)) newTags.push(tag);
					}
					const finalTags = newTags.filter((tag) => !removeTags.includes(tag));
					dispatch({
						type: "UPDATE_IMAGE",
						payload: { ...image, id: currentImageId, tags: finalTags },
					});

					setLastShortcutAction({
						type: "tags",
						imageId: currentImageId,
						addTags: [...removeTags],
						removeTags: [...addTags],
					});
					setLastDeletedImages(null);
				} catch (err) {
					console.error("Failed to update tags via shortcut:", err);
				}
			}

			if (isDeleted) {
				await handleDelete(true);
			} else if (moveNext) {
				handleNext();
			} else if (movePrev) {
				await handlePrevious();
			}
		},
		[
			currentIndex,
			currentThumbnails,
			dispatch,
			handleDelete,
			handleNext,
			handlePrevious,
			image,
			viewerMode,
		],
	);

	return {
		lastDeletedImages,
		setLastDeletedImages,
		handleDelete,
		handleTagEditAction,
		handleRestoreAction,
		handleUndo,
		executeCommand,
	};
};
