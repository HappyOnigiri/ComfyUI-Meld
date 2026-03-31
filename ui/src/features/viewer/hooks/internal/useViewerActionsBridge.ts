import type React from "react";
import { useCallback, useState } from "react";
import type { ApiResult } from "../../../../api";
import { logger } from "../../../../logger";
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
	restoreImages: (ids: number[]) => Promise<ApiResult<{ restored_ids: number[] }>>;
	bulkUpdateImageTags: (
		imageIds: number[],
		addTags: string[],
		removeTags: string[],
	) => Promise<ApiResult<void>>;
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
		const candidate = currentThumbnails[i];
		if (candidate && !removedIds.has(candidate.id)) {
			nextTargetId = candidate.id;
			break;
		}
	}
	if (nextTargetId === null) {
		for (let i = currentIndex - 1; i >= 0; i--) {
			const candidate = currentThumbnails[i];
			if (candidate && !removedIds.has(candidate.id)) {
				nextTargetId = candidate.id;
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

			const deleteResult = await deleteImagesAndSyncLightTable(
				Array.from(idsToDelete),
				isPermanent,
			);
			if (!deleteResult.ok) {
				dispatch({ type: "SET_ERROR", payload: deleteResult.error });
				return;
			}

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
				const candidates = [...currentThumbnails, ...lineageToDelete, ...lineageImages, ...images];
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

		const result = await restoreImages(idsToRestore);
		if (!result.ok) {
			dispatch({ type: "SET_ERROR", payload: result.error });
			return;
		}
		if (!mountRefs.isMountedRef.current) return;
		const restoredIds = result.data.restored_ids || idsToRestore;
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
		const result = await bulkUpdateImageTags([imageId], addTags, removeTags);
		if (!result.ok) {
			dispatch({ type: "SET_ERROR", payload: result.error });
			return;
		}

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
			if (!command || typeof command !== "string" || !image) return;

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
					logger.warn(`Attempted to send to non-existent LT slot: ${sendToLtSlot}`);
				}
			}

			if (addTags.length > 0 || removeTags.length > 0) {
				const tagsResult = await bulkUpdateImageTags([currentImageId], addTags, removeTags);
				if (!tagsResult.ok) {
					logger.error("Failed to update tags via shortcut:", tagsResult.error);
					dispatch({ type: "SET_ERROR", payload: tagsResult.error });
				} else {
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
