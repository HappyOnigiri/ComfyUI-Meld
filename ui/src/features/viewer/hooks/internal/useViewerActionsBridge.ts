import type React from "react";
import { useCallback, useState } from "react";
import type { GalleryAction, GalleryState, MeldImage } from "../../../../types";
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
	fetchLineage: (imageId: number) => Promise<MeldImage[]>;
	restoreImages: (ids: number[]) => Promise<{ restored_ids: number[] }>;
	bulkUpdateImageTags: (
		imageIds: number[],
		addTags: string[],
		removeTags: string[],
	) => Promise<void>;
}

interface NavigateAfterRemovalParams {
	currentThumbnails: MeldImage[];
	currentIndex: number;
	removedIds: Set<number>;
	viewerMode: GalleryState["viewerMode"];
	viewerLightTableSlotId?: string | null;
	dispatch: React.Dispatch<GalleryAction>;
	removeImageIds?: number[];
}

const navigateAfterItemRemoval = ({
	currentThumbnails,
	currentIndex,
	removedIds,
	viewerMode,
	viewerLightTableSlotId,
	dispatch,
	removeImageIds,
}: NavigateAfterRemovalParams) => {
	let nextTargetId: number | null = null;
	for (let i = currentIndex + 1; i < currentThumbnails.length; i++) {
		if (!removedIds.has(currentThumbnails[i].id)) {
			nextTargetId = currentThumbnails[i].id;
			break;
		}
	}
	if (nextTargetId === null) {
		for (let i = currentIndex - 1; i >= 0; i--) {
			if (!removedIds.has(currentThumbnails[i].id)) {
				nextTargetId = currentThumbnails[i].id;
				break;
			}
		}
	}

	if (nextTargetId !== null) {
		dispatch({
			type: "OPEN_VIEWER",
			payload: {
				id: nextTargetId,
				mode: viewerMode,
				...(viewerMode === "lighttable" && viewerLightTableSlotId
					? { slotId: viewerLightTableSlotId }
					: {}),
			},
		});
	} else {
		dispatch({ type: "CLOSE_VIEWER" });
	}

	if (removeImageIds && removeImageIds.length > 0) {
		dispatch({ type: "REMOVE_IMAGES", payload: removeImageIds });
	}
};

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
	fetchLineage,
	restoreImages,
	bulkUpdateImageTags,
}: UseViewerActionsBridgeParams) => {
	const [lastDeletedImages, setLastDeletedImages] = useState<MeldImage[] | null>(null);
	const [lastShortcutAction, setLastShortcutAction] = useState<ViewerShortcutUndoAction | null>(
		null,
	);

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
				let lineageToDelete: MeldImage[] = [];

				if (deleteMode === "lineage") {
					lineageToDelete = await fetchLineage(image.id);
					for (const lineageImage of lineageToDelete) {
						idsToDelete.add(lineageImage.id);
					}
				}

				if (!mountRefs.isMountedRef.current || mountRefs.viewerImageIdRef.current === null) {
					return;
				}

				await deleteImagesAndSyncLightTable(Array.from(idsToDelete), isPermanent);
				if (!mountRefs.isMountedRef.current || mountRefs.viewerImageIdRef.current === null) {
					return;
				}
				navigateAfterItemRemoval({
					currentThumbnails,
					currentIndex,
					removedIds: idsToDelete,
					viewerMode,
					viewerLightTableSlotId: state.viewerLightTableSlotId,
					dispatch,
					removeImageIds: Array.from(idsToDelete),
				});
				if (!isPermanent) {
					const candidates = [
						...currentThumbnails,
						...lineageToDelete,
						...lineageImages,
						...images,
					];
					const byId = new Map<number, MeldImage>();
					for (const candidate of candidates) {
						byId.set(candidate.id, candidate);
					}
					const deletedImages = Array.from(idsToDelete).map((id) => {
						const found = byId.get(id);
						if (found) {
							return found;
						}
						// Keep undo coverage complete even if metadata is not available locally.
						return {
							id,
							filename: `deleted_${id}`,
							subfolder: "",
							type: "custom",
							created_at: 0,
							positive: "",
							negative: "",
							tags: [],
						} satisfies MeldImage;
					});
					setLastDeletedImages(deletedImages);
					setLastShortcutAction(null);
				}
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
			fetchLineage,
			images,
			isFullscreen,
			lineageImages,
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

		try {
			const result = await restoreImages(idsToRestore);
			if (!mountRefs.isMountedRef.current) return;
			const restoredIds = result.restored_ids || idsToRestore;
			const restoredIdSet = new Set(restoredIds);
			const restoredImages = lastDeletedImages.filter((img) => restoredIdSet.has(img.id));
			if (restoredImages.length > 0) {
				dispatch({ type: "ADD_IMAGES", payload: restoredImages });
			}

			if (state.viewScope === "trash") {
				dispatch({ type: "REMOVE_IMAGES", payload: restoredIds });
			}

			setLastDeletedImages(null);
			if (!mountRefs.isMountedRef.current) return;

			const idToOpen = restoredIds[0];
			if (idToOpen !== undefined) {
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
			}
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
		restoreImages,
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
			await bulkUpdateImageTags([imageId], addTags, removeTags);

			const targetImage = (viewerMode === "lineage" ? lineageImages : images).find(
				(img) => img.id === imageId,
			);

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
					payload: {
						id: imageId,
						mode: viewerMode,
						...(viewerMode === "lighttable" && state.viewerLightTableSlotId
							? { slotId: state.viewerLightTableSlotId }
							: {}),
					},
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
		bulkUpdateImageTags,
		state.viewerLightTableSlotId,
		viewerMode,
	]);

	const executeCommand = useCallback(
		async (command: string) => {
			if (!command || !image) return;

			const currentImageId = image.id;
			const currentImageTags = [...image.tags];
			const result = parseShortcutCommand(command, image);
			const { addTags, removeTags, isDeleted, moveNext, movePrev, sendToLtSlot } = result;

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
						navigateAfterItemRemoval({
							currentThumbnails,
							currentIndex,
							removedIds: new Set([currentImageId]),
							viewerMode,
							viewerLightTableSlotId: state.viewerLightTableSlotId,
							dispatch,
							removeImageIds: [currentImageId],
						});
					}
				} else {
					store.showToast(`Error: Light Table slot "${sendToLtSlot}" not found`, "error");
					console.warn(`Attempted to send to non-existent LT slot: ${sendToLtSlot}`);
				}
			}

			if (addTags.length > 0 || removeTags.length > 0) {
				try {
					await bulkUpdateImageTags([currentImageId], addTags, removeTags);
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
				} catch (err: unknown) {
					console.error("Failed to update tags via shortcut:", err);
					dispatch({
						type: "SET_ERROR",
						payload: err instanceof Error ? err.message : String(err),
					});
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
			bulkUpdateImageTags,
			handleDelete,
			handleNext,
			handlePrevious,
			image,
			state.viewerLightTableSlotId,
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
