import type React from "react";
import { useCallback, useRef, useState } from "react";
import { useKeydownCapture } from "../../../hooks/useKeydownCapture";
import { useOnPointerDownOutside } from "../../../hooks/useOnPointerDownOutside";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { stopKeyboardEvent } from "../../../utils/keyboard";
import { getThumbnailViewUrl } from "../../../utils/url";
import { useImageActions } from "../../images/hooks/useImageActions";
import { useImageLineage } from "../../images/hooks/useImageLineage";

/**
 * NOTE: For image-specific data operations (deletion, tagging, lineage, etc.),
 * please use the shared logic in `features/images/hooks/useImageActions`.
 * DO NOT implement duplicate image manipulation logic here.
 */
export const useImageCardLogic = (image: MeldImage) => {
	const { state, dispatch, fetchFullImageDetails } = useGallery();
	const isSelected = state.selectedIds.has(image.id);
	const viewMode = state.settings["gallery.view_mode"] || "grid_details";

	const {
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleEditSource,
		handleEditTags,
		handleSendToWorkflow,
		handleRunWithWorkflow,
		handleRunWithMask,
		handleRestore,
		handleDelete,
		handleEditNotes,
		handleUpdateUserNotes,
	} = useImageActions(state, dispatch);

	const { getParentChain } = useImageLineage(state.images, state.settings);

	const [popupContent, setPopupContent] = useState<{
		title: string;
		text: string;
	} | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
	const [popupCopied, setPopupCopied] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);
	useOnPointerDownOutside({
		enabled: isMenuOpen,
		insideRefs: [menuRef],
		onOutside: () => setIsMenuOpen(false),
	});

	const handleCopy = async (text: string, label: string, isPopup = false) => {
		try {
			await navigator.clipboard.writeText(text);
			if (isPopup) {
				setPopupCopied(true);
				setTimeout(() => setPopupCopied(false), 2000);
			} else {
				setCopiedLabel(label);
				setTimeout(() => setCopiedLabel(null), 2000);
			}
		} catch (err) {
			logger.error("Failed to copy text: ", err);
		}
	};

	const handleEscapeKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key !== "Escape") {
				return;
			}

			if (popupContent) {
				stopKeyboardEvent(e);
				setPopupContent(null);
				return;
			}

			if (isMenuOpen) {
				stopKeyboardEvent(e);
				setIsMenuOpen(false);
			}
		},
		[popupContent, isMenuOpen],
	);

	useKeydownCapture({
		enabled: isMenuOpen || popupContent !== null,
		onKeyDown: handleEscapeKeyDown,
	});

	const parentChain = getParentChain(image);
	const showFilename = state.settings["sidebar.show_filename"];
	const displayFilename =
		showFilename === "filepath"
			? `${image.type !== "custom" ? `${image.type}/` : ""}${
					image.subfolder ? `${image.subfolder}/` : ""
				}${image.filename}`
			: image.filename;

	const thumbSize = state.settings["sidebar.thumbnail_size"] || 100;
	const imgSrc = getThumbnailViewUrl(image, Math.min(400, Math.round(thumbSize * 1.5)));

	const handleClick = (e: React.MouseEvent) => {
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		} else {
			dispatch({ type: "OPEN_VIEWER", payload: image.id });
		}
	};

	const handleContainerClick = (e: React.MouseEvent) => {
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		} else {
			// In list view or grid details, clicking the container area (not the image)
			// should toggle selection instead of opening the viewer.
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		}
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		// To ensure smooth D&D operation, avoid unnecessary preventDefault in mousedown of MeldImageCard root or thumbnail.
		// Exclude interactive UI elements (textarea, input, button, etc.)
		if (
			(e.target as HTMLElement).closest("textarea, input, button, .meld-image-card__meta-content")
		) {
			return;
		}

		// If there are no modifier keys (Shift, Ctrl, etc.) and the current image is already selected,
		// allow D&D by not calling preventDefault.
		// Potential for D&D, so do not preventDefault
		if (!e.shiftKey && !e.ctrlKey && !e.metaKey && isSelected) {
			return;
		}

		// For other selection processes, prevent default behavior such as text selection
		if (e.shiftKey || e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		const isTargetInput =
			document.activeElement?.tagName === "INPUT" ||
			document.activeElement?.tagName === "TEXTAREA" ||
			(document.activeElement as HTMLElement)?.isContentEditable;

		if (isTargetInput) return;

		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		}
	};

	const handleRestoreWorkflowAction = async () => {
		await handleRestoreWorkflow(image);
	};

	const handleAddUnifiedLoaderAction = async () => {
		await handleAddUnifiedLoader(image);
	};

	const handleEditSourceAction = () => {
		handleEditSource(image);
	};

	const handleEditTagsAction = () => {
		handleEditTags(image);
	};

	const handleEditNotesAction = () => {
		handleEditNotes(image);
	};

	const handleSendToWorkflowAction = () => {
		handleSendToWorkflow(image);
	};

	const handleDeleteAction = () => {
		handleDelete(image);
	};

	const handleRestoreAction = () => {
		handleRestore(image);
	};

	const handleRunWithWorkflowAction = () => {
		handleRunWithWorkflow(image);
	};

	const handleSelectToggle = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.shiftKey) {
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else {
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		}
	};

	return {
		state,
		dispatch,
		isSelected,
		viewMode,
		popupContent,
		setPopupContent,
		isMenuOpen,
		setIsMenuOpen,
		copiedLabel,
		popupCopied,
		menuRef,
		parentChain,
		displayFilename,
		imgSrc,
		handleCopy,
		handleClick,
		handleSelectToggle,
		handleContainerClick,
		handleMouseDown,
		handleKeyDown,
		handleRestoreWorkflow: handleRestoreWorkflowAction,
		handleAddUnifiedLoader: handleAddUnifiedLoaderAction,
		handleEditSource: handleEditSourceAction,
		handleEditTags: handleEditTagsAction,
		handleEditNotes: handleEditNotesAction,
		handleSendToWorkflow: handleSendToWorkflowAction,
		handleRestore: handleRestoreAction,
		handleDelete: handleDeleteAction,
		handleRunWithWorkflow: handleRunWithWorkflowAction,
		handleRunWithMask: (mode: "apply" | "run" = "run") => handleRunWithMask(image, mode),
		handleUpdateUserNotes: (notes: string) => handleUpdateUserNotes(image.id, notes),
		fetchFullImageDetails,
	};
};
