import {
	ChevronDown,
	Download,
	Eraser,
	FileJson,
	Settings,
	Tag,
	Trash2,
	Workflow,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useOnPointerDownOutside } from "../../../hooks/useOnPointerDownOutside";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { getThumbnailViewUrl } from "../../../utils/url";
import { executeSlotAction } from "../api/actions";
import { useLightTableStore } from "../store";
import type { ActionType, SlotConfig } from "../types";
import { ConfirmModal } from "./ConfirmModal";

import "./Slot.css";

interface SlotProps {
	config: SlotConfig;
}

export const Slot: React.FC<SlotProps> = ({ config }) => {
	const buckets = useLightTableStore((s) => s.buckets);
	const slots = useLightTableStore((s) => s.slots);
	const images = useLightTableStore((s) => s.images);
	const slotsCount = slots.length;
	const { state: galleryState, dispatch: galleryDispatch } = useGallery();
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	/** Show/hide flag for Clear Tab confirm modal */
	const [showClearConfirm, setShowClearConfirm] = useState(false);
	/** Show/hide flag for action context menu */
	const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

	// State for settings panel editing
	const [editLabel, setEditLabel] = useState(config.label);
	const [editColor, setEditColor] = useState(config.color);

	// State for multi-selection
	const [selectedIds, setSelectedIds] = useState<number[]>([]);
	const [lastSelectedId, setLastSelectedId] = useState<number | null>(null);

	const actionMenuRef = useRef<HTMLDivElement>(null);
	const settingsRef = useRef<HTMLDivElement>(null);
	useOnPointerDownOutside({
		enabled: isSettingsOpen,
		insideRefs: [settingsRef],
		onOutside: () => setIsSettingsOpen(false),
	});
	useOnPointerDownOutside({
		enabled: isActionMenuOpen,
		insideRefs: [actionMenuRef],
		onOutside: () => setIsActionMenuOpen(false),
	});

	const bucketItems = buckets[config.id] || [];
	const itemCount = bucketItems.length;

	const bucketImages = bucketItems
		.map((id) => {
			const imgId = Number(id);
			let img = galleryState.images.find((i) => i.id === imgId);
			if (!img) {
				img = galleryState.lineageImages.find((i) => i.id === imgId);
			}
			if (!img) {
				img = images[id];
			}
			return img;
		})
		.filter(Boolean) as MeldImage[];

	// Clean up selectedIds when items are removed from the bucket
	useEffect(() => {
		setSelectedIds((prev) => {
			const validNext = prev.filter((id) => bucketItems.includes(String(id)));
			if (validNext.length !== prev.length) {
				return validNext;
			}
			return prev;
		});
	}, [bucketItems]);

	const validSelectedIds = selectedIds.filter((id) => bucketItems.includes(String(id)));
	const hasSelection = validSelectedIds.length > 0;

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		e.currentTarget.classList.add("drag-over");
	};

	const handleDragLeave = (e: React.DragEvent) => {
		e.currentTarget.classList.remove("drag-over");
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		e.currentTarget.classList.remove("drag-over");

		const transferredData = e.dataTransfer.getData("text/plain");
		if (transferredData) {
			const imageIds = transferredData.split(",");
			imageIds.forEach((id) => {
				if (id) {
					const imageIdStr = id.trim();
					const imgIdNum = Number(imageIdStr);
					let image = galleryState.images.find((img) => img.id === imgIdNum);
					if (!image) {
						image = galleryState.lineageImages.find((img) => img.id === imgIdNum);
					}
					useLightTableStore.getState().addToBucket(config.id, imageIdStr, image);
				}
			});
		}
	};

	const handleImageDragStart = (e: React.DragEvent, imgId: number) => {
		e.stopPropagation();
		let draggedIds = [imgId];
		if (validSelectedIds.includes(imgId)) {
			draggedIds = validSelectedIds;
		} else {
			setSelectedIds([imgId]);
			setLastSelectedId(imgId);
		}
		e.dataTransfer.setData("text/plain", draggedIds.join(","));
		e.dataTransfer.setData("application/meld-lt-source-slot", config.id);
		e.dataTransfer.effectAllowed = "move";
	};

	const handleImageDragEnd = (e: React.DragEvent, imgId: number) => {
		if (e.dataTransfer.dropEffect === "none") {
			const idsToRemove = validSelectedIds.includes(imgId) ? validSelectedIds : [imgId];
			idsToRemove.forEach((id) => {
				useLightTableStore.getState().removeFromBucket(config.id, String(id));
			});
			setSelectedIds((prev) => prev.filter((id) => !idsToRemove.includes(id)));
		}
	};

	/** Execute the specified action immediately */
	const handleAction = (actionType: ActionType) => {
		if (itemCount === 0) return;

		const actionToExecute = {
			type: actionType,
		};

		// Run only on selected images if any exist, otherwise run on all images
		const targetIds = hasSelection ? validSelectedIds : bucketItems.map(Number);
		if (targetIds.length === 0) return;

		const targetImages = targetIds
			.map((id) => bucketImages.find((img) => img.id === id))
			.filter(Boolean) as MeldImage[];

		// Show toast on action completion (only when not canceled via modal)
		const actionLabelMap: Record<ActionType, string> = {
			edit_tags: "Tags updated",
			delete: "Delete initiated",
			move_folder: "Moved to folder",
			queue_workflow: "Queued Workflow",
			run_with_mask: "Opened Mask Editor",
			download: "Opened Download Options",
		};

		const onSuccess = () => {
			useLightTableStore.getState().showToast(actionLabelMap[actionType] ?? "Done");
		};

		executeSlotAction(actionToExecute, targetIds, targetImages, galleryDispatch, onSuccess);
	};

	const handleClearBucket = () => {
		useLightTableStore.getState().clearBucket(config.id);
		useLightTableStore.getState().showToast(`Tab "${config.label}" cleared`);
		setShowClearConfirm(false);
	};

	const handleDeleteSlot = () => {
		const store = useLightTableStore.getState();
		if (store.slots.length <= 1) return;
		store.removeSlot(config.id);
		useLightTableStore.getState().showToast(`Tab "${config.label}" deleted`);
	};

	return (
		<div
			className="meld-lt-slot-panel"
			style={{ "--slot-color": config.color } as React.CSSProperties}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			{/* Images area */}
			<div className="meld-lt-slot-panel__images">
				{itemCount === 0 ? (
					<div className="meld-lt-slot-panel__empty">Drag &amp; Drop images here</div>
				) : (
					bucketImages.map((img) => {
						const imgSrc = getThumbnailViewUrl(img);
						return (
							<div
								key={img.id}
								className={`meld-lt-slot-panel__image-wrapper${validSelectedIds.includes(img.id) ? " selected" : ""}`}
								draggable
								onClick={(e) => {
									if (e.ctrlKey || e.metaKey) {
										// Toggle selection
										setSelectedIds((prev) =>
											prev.includes(img.id)
												? prev.filter((id) => id !== img.id)
												: [...prev, img.id],
										);
										setLastSelectedId(img.id);
									} else if (e.shiftKey && lastSelectedId !== null) {
										// Range selection
										const currentIndex = bucketImages.findIndex((i) => i.id === img.id);
										const lastIndex = bucketImages.findIndex((i) => i.id === lastSelectedId);
										if (currentIndex !== -1 && lastIndex !== -1) {
											const start = Math.min(currentIndex, lastIndex);
											const end = Math.max(currentIndex, lastIndex);
											const rangeIds = bucketImages.slice(start, end + 1).map((i) => i.id);
											setSelectedIds((prev) => Array.from(new Set([...prev, ...rangeIds])));
										}
										setLastSelectedId(img.id);
									} else {
										// Normal click: clear selection and open viewer
										setSelectedIds([]);
										setLastSelectedId(null);
										galleryDispatch({
											type: "OPEN_VIEWER",
											payload: {
												id: img.id,
												mode: "lighttable",
												slotId: config.id,
											},
										});
									}
								}}
								onDragStart={(e) => handleImageDragStart(e, img.id)}
								onDragEnd={(e) => handleImageDragEnd(e, img.id)}
							>
								<img src={imgSrc} alt={img.filename} draggable={false} />
							</div>
						);
					})
				)}
			</div>

			{/* Actions area */}
			<div className="meld-lt-slot__actions">
				{/* Action menu button */}
				<div className="meld-lt-slot__action-menu-wrapper" ref={actionMenuRef}>
					<button
						type="button"
						className="meld-lt-slot__action-btn"
						onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
						disabled={itemCount === 0}
						title="Actions"
					>
						{hasSelection ? `Action (${validSelectedIds.length})` : "Action"}
						<ChevronDown size={12} />
					</button>
					{isActionMenuOpen && (
						<div className="meld-lt-slot__action-menu">
							{[
								{
									type: "edit_tags" as ActionType,
									label: "Edit Tags",
									icon: Tag,
								},
								{
									type: "queue_workflow" as ActionType,
									label: "Queue Workflow",
									icon: FileJson,
								},
								{
									type: "run_with_mask" as ActionType,
									label: "Queue Workflow (Mask)",
									icon: Workflow,
								},
								{
									type: "download" as ActionType,
									label: "Download",
									icon: Download,
								},
								{
									type: "delete" as ActionType,
									label: "Delete",
									icon: Trash2,
									danger: true,
								},
							].map((item) => (
								<div
									key={item.type}
									className={`meld-lt-slot__action-menu-item${item.danger ? " meld-lt-slot__action-menu-item--danger" : ""}${"disabled" in item && item.disabled ? " meld-lt-slot__action-menu-item--disabled" : ""}`}
									onMouseDown={(e) => e.stopPropagation()}
									onClick={() => {
										if ("disabled" in item && item.disabled) return;
										handleAction(item.type);
										setIsActionMenuOpen(false);
									}}
								>
									<item.icon size={13} />
									<span>{item.label}</span>
								</div>
							))}
						</div>
					)}
				</div>

				{/* Clear Tab button */}
				<button
					type="button"
					className="meld-lt-slot__menu-btn"
					onClick={() => setShowClearConfirm(true)}
					title="Clear Tab"
					disabled={itemCount === 0}
				>
					<Eraser size={14} />
				</button>

				{/* Settings button */}
				<div className="meld-lt-slot__settings-wrapper" ref={settingsRef}>
					<button
						type="button"
						className="meld-lt-slot__menu-btn"
						onClick={() => setIsSettingsOpen(!isSettingsOpen)}
						title="Tab Settings"
					>
						<Settings size={14} />
					</button>
					{isSettingsOpen && (
						<div className="meld-lt-slot__settings-popover">
							<div className="meld-lt-slot__settings-row">
								<label htmlFor={`slot-label-${config.id}`}>Tab Label:</label>
								<input
									id={`slot-label-${config.id}`}
									value={editLabel}
									onChange={(e) => setEditLabel(e.target.value)}
									placeholder="e.g. Keep"
								/>
							</div>
							<div className="meld-lt-slot__settings-row">
								<label htmlFor={`slot-color-${config.id}`}>Tab Color:</label>
								<div
									style={{
										display: "flex",
										gap: "8px",
										alignItems: "center",
										flex: 1,
									}}
								>
									<input
										id={`slot-color-${config.id}`}
										type="color"
										value={
											editColor.startsWith("var")
												? (editColor.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/)?.[0] ?? "#9ca3af") // color-check-ignore
												: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/i.test(editColor)
													? editColor
													: "#9ca3af" // color-check-ignore
										}
										onChange={(e) => setEditColor(e.target.value)}
										style={{ flexShrink: 0 }}
									/>
									<input
										value={editColor}
										onChange={(e) => setEditColor(e.target.value)}
										placeholder="#hex or CSS var"
										style={{ flex: 1, minWidth: 0 }}
									/>
								</div>
							</div>

							<button
								type="button"
								className="meld-lt-slot__settings-save"
								onClick={() => {
									const store = useLightTableStore.getState();
									const trimmedLabel = editLabel.trim();

									if (!trimmedLabel) {
										store.showToast("Error: Tab label cannot be empty", "error");
										return;
									}

									// Check if another slot already uses this label or ID (case-insensitive)
									const isDuplicate = store.slots.some(
										(s) =>
											s.id !== config.id &&
											(s.label.toLowerCase() === trimmedLabel.toLowerCase() ||
												s.id.toLowerCase() === trimmedLabel.toLowerCase()),
									);

									if (isDuplicate) {
										store.showToast(`Error: "${trimmedLabel}" is already in use`, "error");
										return;
									}

									store.updateSlot(config.id, {
										label: trimmedLabel,
										color: editColor,
									});
									setIsSettingsOpen(false);
									store.showToast("Settings saved");
								}}
							>
								Save Settings
							</button>
							{slotsCount > 1 && (
								<button
									type="button"
									className="meld-lt-slot__settings-delete-btn"
									onClick={handleDeleteSlot}
									style={{
										background: "none",
										border: "none",
										color: "var(--brand-red, #ff4c4c)",
										cursor: "pointer",
										marginTop: "12px",
										textDecoration: "underline",
										padding: 0,
										alignSelf: "flex-end",
										fontSize: "12px",
									}}
								>
									Delete Tab
								</button>
							)}
						</div>
					)}
				</div>
			</div>

			{/* Clear Tab confirm modal */}
			{showClearConfirm && (
				<ConfirmModal
					message={`Clear all items in the "${config.label}" tab?`}
					onConfirm={handleClearBucket}
					onCancel={() => setShowClearConfirm(false)}
				/>
			)}
		</div>
	);
};
