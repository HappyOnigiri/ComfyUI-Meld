import { Download, FileJson, Menu, RefreshCw, ScanLine, Tag, Trash2, X } from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useOnPointerDownOutside } from "../../../hooks/useOnPointerDownOutside";
import { getPortalRoot } from "../../../portals/portalRoots";
import { useGallery } from "../../../store/GalleryContext";
import { useImageActions } from "../../images/hooks/useImageActions";

export const BulkActionBar: React.FC = () => {
	const { state, dispatch, deleteSelected, restoreSelected } = useGallery();
	const { handleRunWithWorkflow, handleRunWithMask } = useImageActions(state, dispatch);
	const count = state.selectedIds.size;

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuAnchorRect, setMenuAnchorRect] = useState<DOMRect | null>(null);
	const actionButtonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);
	const portalRoot = getPortalRoot("bulkActionBar");

	useEscapeToClose({
		onEscape: () => setIsMenuOpen(false),
		enabled: isMenuOpen,
	});
	useOnPointerDownOutside({
		enabled: isMenuOpen,
		insideRefs: [actionButtonRef, menuRef],
		onOutside: () => setIsMenuOpen(false),
	});

	if (count === 0) return null;

	const isTrashMode = state.viewScope === "trash";

	const getImagesFromSelection = () => {
		return state.images.filter((img) => state.selectedIds.has(img.id));
	};

	const handleActionClick = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
			return;
		}

		if (actionButtonRef.current) {
			setMenuAnchorRect(actionButtonRef.current.getBoundingClientRect());
			setIsMenuOpen(true);
		}
	};

	const executeAction = (actionFn: () => void) => {
		actionFn();
		setIsMenuOpen(false);
	};

	// Actions implemented identically to context menu / modals
	const handleBulkTagEdit = () => {
		const selectedImages = getImagesFromSelection();
		const allTags = new Set<string>();
		for (const img of selectedImages) {
			if (img.tags) {
				for (const tag of img.tags) {
					allTags.add(tag);
				}
			}
		}

		dispatch({
			type: "OPEN_MODAL",
			payload: {
				type: "tag_edit",
				imageIds: Array.from(state.selectedIds),
				tags: Array.from(allTags),
			},
		});
	};

	const handleBulkRunWithWorkflow = () => {
		const selectedImages = getImagesFromSelection();
		handleRunWithWorkflow(selectedImages);
	};

	const handleBulkRunWithMask = () => {
		const selectedImages = getImagesFromSelection();
		if (selectedImages.length > 0) {
			handleRunWithMask(selectedImages, "run");
		}
	};

	const handleBulkDownload = () => {
		dispatch({
			type: "OPEN_MODAL",
			payload: {
				type: "download_options",
				imageIds: Array.from(state.selectedIds),
			},
		});
	};

	const bulkBarJSX = (
		<div className={`meld-bulk-bar ${isTrashMode ? "meld-bulk-bar--trash" : ""}`}>
			<span className="meld-bulk-bar__info">{count} items selected</span>

			<button
				ref={actionButtonRef}
				type="button"
				className="meld-bulk-bar__button meld-bulk-bar__button--action"
				onClick={handleActionClick}
			>
				<Menu size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
				Action
			</button>

			<button
				type="button"
				className="meld-bulk-bar__button meld-bulk-bar__button--cancel"
				onClick={() => dispatch({ type: "CLEAR_SELECTION" })}
			>
				<X size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
				Cancel
			</button>

			{isMenuOpen && menuAnchorRect && (
				<div
					ref={menuRef}
					className="meld-bulk-bar-menu"
					style={{
						bottom: window.innerHeight - menuAnchorRect.top + 5,
						left: menuAnchorRect.left,
					}}
				>
					{isTrashMode ? (
						<>
							<button
								type="button"
								className="meld-bulk-bar-menu__item meld-bulk-bar-menu__item--restore"
								onClick={() => executeAction(restoreSelected)}
							>
								<RefreshCw size={14} /> Restore
							</button>
							<button
								type="button"
								className="meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger"
								onClick={() => executeAction(deleteSelected)}
							>
								<Trash2 size={14} /> Delete Permanently
							</button>
						</>
					) : (
						<>
							<button
								type="button"
								className="meld-bulk-bar-menu__item"
								onClick={() => executeAction(handleBulkTagEdit)}
							>
								<Tag size={14} /> Edit Tags
							</button>
							<button
								type="button"
								className="meld-bulk-bar-menu__item"
								onClick={() => executeAction(handleBulkRunWithWorkflow)}
							>
								<FileJson size={14} /> Queue Workflow
							</button>
							{/* Mask workflow action supports multiple images as a sequence */}
							<button
								type="button"
								className="meld-bulk-bar-menu__item"
								onClick={() => executeAction(handleBulkRunWithMask)}
							>
								<ScanLine size={14} /> Queue Workflow (Mask)
							</button>
							<button
								type="button"
								className="meld-bulk-bar-menu__item"
								onClick={() => executeAction(handleBulkDownload)}
							>
								<Download size={14} /> Download
							</button>
							<div className="meld-bulk-bar-menu__divider" />
							<button
								type="button"
								className="meld-bulk-bar-menu__item meld-bulk-bar-menu__item--danger"
								onClick={() => executeAction(deleteSelected)}
							>
								<Trash2 size={14} /> Move to Trash
							</button>
						</>
					)}
				</div>
			)}
		</div>
	);

	return createPortal(bulkBarJSX, portalRoot);
};
