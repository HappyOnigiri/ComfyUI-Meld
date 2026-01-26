import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { getImageViewUrl } from "../../../utils/url";
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
			console.error("Failed to copy text: ", err);
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				if (popupContent) {
					setPopupContent(null);
				} else {
					setIsMenuOpen(false);
				}
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen, popupContent]);

	const parentChain = getParentChain(image);
	const showFilename = state.settings["sidebar.show_filename"];
	const displayFilename =
		showFilename === "filepath"
			? `${image.type !== "custom" ? `${image.type}/` : ""}${
					image.subfolder ? `${image.subfolder}/` : ""
				}${image.filename}`
			: image.filename;

	const imgSrc = getImageViewUrl(image);

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
		// Prevent text selection when clicking the card area (container)
		// unless it's a specific interactive element that needs it.
		// Since this is attached to the container and the thumbnail,
		// we should generally prevent default if we're going to select.
		if (
			e.shiftKey ||
			e.ctrlKey ||
			e.metaKey ||
			state.selectedIds.size > 0 ||
			!(e.target as HTMLElement).closest(
				"img.meld-image-card__thumbnail, img.meld-lineage-badge__parent-thumb, textarea, input, button",
			)
		) {
			// Only prevent default if we are not clicking on a thumbnail, lineage badge, button, or input element
			if (
				!(e.target as HTMLElement).closest(
					"textarea, input, button, .meld-image-card__meta-content",
				)
			) {
				e.preventDefault();
			}
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
		handleRunWithMask: (mode: "apply" | "run" = "run") =>
			handleRunWithMask(image, mode),
		handleUpdateUserNotes: (notes: string) =>
			handleUpdateUserNotes(image.id, notes),
		fetchFullImageDetails,
	};
};
