import {
	ChevronDown,
	Eraser,
	Settings,
	Tag,
	Trash2,
	Workflow,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { executeSlotAction } from "../api/actions";
import { useLightTableStore } from "../store";
import type { ActionType, SlotConfig } from "../types";
import { ConfirmModal } from "./ConfirmModal";

import "./Slot.css";

interface SlotProps {
	config: SlotConfig;
}

export const Slot: React.FC<SlotProps> = ({ config }) => {
	const { buckets } = useLightTableStore();
	const { state: galleryState, dispatch: galleryDispatch } = useGallery();
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	/** Show/hide flag for Clear Tab confirm modal */
	const [showClearConfirm, setShowClearConfirm] = useState(false);
	/** Show/hide flag for action context menu */
	const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

	// State for settings panel editing
	const [editLabel, setEditLabel] = useState(config.label);
	const [editColor, setEditColor] = useState(config.color);

	const actionMenuRef = useRef<HTMLDivElement>(null);
	const settingsRef = useRef<HTMLDivElement>(null);

	const bucketItems = buckets[config.id] || [];
	const itemCount = bucketItems.length;

	// Close settings panel when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				settingsRef.current &&
				!settingsRef.current.contains(event.target as Node)
			) {
				setIsSettingsOpen(false);
			}
			if (
				actionMenuRef.current &&
				!actionMenuRef.current.contains(event.target as Node)
			) {
				setIsActionMenuOpen(false);
			}
		};
		if (isSettingsOpen || isActionMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isSettingsOpen, isActionMenuOpen]);

	const bucketImages = bucketItems
		.map((id) => {
			const imgId = Number(id);
			let img = galleryState.images.find((i) => i.id === imgId);
			if (!img) {
				img = galleryState.lineageImages.find((i) => i.id === imgId);
			}
			if (!img) {
				img = useLightTableStore.getState().images[id];
			}
			return img;
		})
		.filter(Boolean) as MeldImage[];

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
						image = galleryState.lineageImages.find(
							(img) => img.id === imgIdNum,
						);
					}
					useLightTableStore
						.getState()
						.addToBucket(config.id, imageIdStr, image);
				}
			});
		}
	};

	const handleImageDragStart = (e: React.DragEvent, imgId: number) => {
		e.stopPropagation();
		e.dataTransfer.setData("text/plain", String(imgId));
		e.dataTransfer.setData("application/meld-lt-source-slot", config.id);
		e.dataTransfer.effectAllowed = "move";
	};

	const handleImageDragEnd = (e: React.DragEvent, imgId: number) => {
		if (e.dataTransfer.dropEffect === "none") {
			useLightTableStore.getState().removeFromBucket(config.id, String(imgId));
		}
	};

	/** Execute the specified action immediately */
	const handleAction = (actionType: ActionType) => {
		if (itemCount === 0) return;

		const actionToExecute = {
			type: actionType,
		};

		const imageIds = bucketItems.map((id) => Number(id));

		// Show toast on action completion (only when not canceled via modal)
		const actionLabelMap: Record<ActionType, string> = {
			add_tag: "Tags added",
			delete: "Delete initiated",
			send_to_node: "Sent to node",
			move_folder: "Moved to folder",
		};

		const onSuccess = () => {
			useLightTableStore
				.getState()
				.showToast(actionLabelMap[actionType] ?? "Done");
		};

		executeSlotAction(
			actionToExecute,
			imageIds,
			bucketImages,
			galleryDispatch,
			onSuccess,
		);
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
					<div className="meld-lt-slot-panel__empty">
						Drag &amp; Drop images here
					</div>
				) : (
					bucketImages.map((img) => {
						const type = "type" in img ? img.type : "output";
						const imgSrc = `/api/view?filename=${encodeURIComponent(img.filename)}&type=${type}&subfolder=${encodeURIComponent(img.subfolder || "")}`;
						return (
							<div
								key={img.id}
								className="meld-lt-slot-panel__image-wrapper"
								draggable
								onClick={() => {
									galleryDispatch({
										type: "OPEN_VIEWER",
										payload: {
											id: img.id,
											mode: "lighttable",
											slotId: config.id,
										},
									});
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
						Action
						<ChevronDown size={12} />
					</button>
					{isActionMenuOpen && (
						<div className="meld-lt-slot__action-menu">
							{[
								{ type: "add_tag" as ActionType, label: "Add Tag", icon: Tag },
								{
									type: "send_to_node" as ActionType,
									label: "Send to Node",
									icon: Workflow,
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
									className={`meld-lt-slot__action-menu-item${item.danger ? " meld-lt-slot__action-menu-item--danger" : ""}`}
									onMouseDown={(e) => e.stopPropagation()}
									onClick={() => {
										setIsActionMenuOpen(false);
										setTimeout(() => handleAction(item.type), 0);
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
						title="Tab Setting"
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
												? editColor.match(/#([0-9a-fA-F]{3,6})/)?.[0] ||
													"var(--meld-text-secondary, #9ca3af)"
												: /^#[0-9a-fA-F]{6}$/i.test(editColor)
													? editColor
													: "var(--meld-text-secondary, #9ca3af)"
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
									useLightTableStore.getState().updateSlot(config.id, {
										label: editLabel,
										color: editColor,
									});
									setIsSettingsOpen(false);
									useLightTableStore.getState().showToast("Settings saved");
								}}
							>
								Save Settings
							</button>
							{useLightTableStore.getState().slots.length > 1 && (
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
