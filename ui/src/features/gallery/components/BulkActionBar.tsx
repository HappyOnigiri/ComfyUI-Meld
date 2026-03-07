import {
	Download,
	FileJson,
	LayoutGrid,
	Menu,
	RefreshCw,
	ScanLine,
	Tag,
	Trash2,
	X,
} from "lucide-react";
import type React from "react";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useOnPointerDownOutside } from "../../../hooks/useOnPointerDownOutside";
import { getPortalRoot } from "../../../portals/portalRoots";
import { useGallery } from "../../../store/GalleryContext";
import { useImageActions } from "../../images/hooks/useImageActions";
import { useLightTableStore } from "../../light-table/store";
import type { SlotConfig } from "../../light-table/types";

/**
 * Modal for selecting which Light Table tab to send images to.
 * Shown when 2+ tabs exist; for single tab, images are sent directly without this modal.
 */
const TabSelectModal: React.FC<{
	slots: SlotConfig[];
	onSelect: (slotId: string, slotLabel: string) => void;
	onCancel: () => void;
}> = ({ slots, onSelect, onCancel }) => {
	useEscapeToClose({ onEscape: onCancel });
	return (
		<div className="meld-tab-select-modal__overlay" onClick={onCancel} role="presentation">
			<div
				className="meld-tab-select-modal__dialog"
				onClick={(e) => e.stopPropagation()}
				role="dialog"
				aria-modal="true"
				aria-label="Select Light Table tab"
			>
				<p className="meld-tab-select-modal__title">Select a tab</p>
				<div className="meld-tab-select-modal__list">
					{slots.map((slot) => (
						<button
							key={slot.id}
							type="button"
							className="meld-tab-select-modal__tab-btn"
							style={{ "--tab-color": slot.color } as React.CSSProperties}
							onClick={() => onSelect(slot.id, slot.label)}
						>
							{slot.label}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export const BulkActionBar: React.FC = () => {
	const { state, dispatch, deleteSelected, restoreSelected } = useGallery();
	const { handleRunWithWorkflow, handleRunWithMask } = useImageActions(state, dispatch);
	const count = state.selectedIds.size;

	const slots = useLightTableStore((s) => s.slots);
	const addToBucket = useLightTableStore((s) => s.addToBucket);
	const showToast = useLightTableStore((s) => s.showToast);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [menuAnchorRect, setMenuAnchorRect] = useState<DOMRect | null>(null);
	const [showTabSelectModal, setShowTabSelectModal] = useState(false);
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

	const handleBulkSendToLightTable = () => {
		const firstSlot = slots[0];
		if (!firstSlot) return;
		if (slots.length === 1) {
			// Single tab: send directly without showing a selection modal
			for (const id of state.selectedIds) {
				addToBucket(firstSlot.id, String(id));
			}
			showToast(`${count} image(s) sent to "${firstSlot.label}"`);
			setIsMenuOpen(false);
		} else {
			// Multiple tabs: show tab selection modal
			setIsMenuOpen(false);
			setShowTabSelectModal(true);
		}
	};

	const handleTabSelect = (slotId: string, slotLabel: string) => {
		for (const id of state.selectedIds) {
			addToBucket(slotId, String(id));
		}
		showToast(`${count} image(s) sent to "${slotLabel}"`);
		setShowTabSelectModal(false);
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
							<button
								type="button"
								className="meld-bulk-bar-menu__item"
								onClick={handleBulkSendToLightTable}
								disabled={slots.length === 0}
							>
								<LayoutGrid size={14} /> Send to Light Table
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
			{showTabSelectModal && (
				<TabSelectModal
					slots={slots}
					onSelect={handleTabSelect}
					onCancel={() => setShowTabSelectModal(false)}
				/>
			)}
		</div>
	);

	return createPortal(bulkBarJSX, portalRoot);
};
