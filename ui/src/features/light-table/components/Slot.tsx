import {
	Archive,
	ChevronDown,
	Eraser,
	FolderOutput,
	Play,
	Settings,
	Tag,
	Trash2,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { executeSlotAction } from "../api/actions";
import { useLightTableStore } from "../store";
import type { ActionType, SlotConfig } from "../types";

import "./Slot.css";

interface SlotProps {
	config: SlotConfig;
}

const getActionIcon = (type: ActionType, size = 16) => {
	switch (type) {
		case "delete":
			return <Trash2 size={size} />;
		case "add_tag":
			return <Tag size={size} />;
		case "move_folder":
			return <FolderOutput size={size} />;
		case "send_to_node":
			return <Play size={size} />;
		default:
			return <Archive size={size} />;
	}
};

export const Slot: React.FC<SlotProps> = ({ config }) => {
	const { buckets } = useLightTableStore();
	const { state: galleryState, dispatch: galleryDispatch } = useGallery();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);

	// Settings state
	const [editLabel, setEditLabel] = useState(config.label);
	const [editColor, setEditColor] = useState(config.color);
	const [editAction, setEditAction] = useState<ActionType>(
		config.defaultAction.type,
	);

	const menuRef = useRef<HTMLDivElement>(null);
	const settingsRef = useRef<HTMLDivElement>(null);

	const bucketItems = buckets[config.id] || [];
	const itemCount = bucketItems.length;

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
			if (
				settingsRef.current &&
				!settingsRef.current.contains(event.target as Node)
			) {
				setIsSettingsOpen(false);
			}
		};
		if (isMenuOpen || isSettingsOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen, isSettingsOpen]);

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

	const handleAction = (actionOverride?: ActionType) => {
		if (itemCount === 0) return;

		const actionType = actionOverride || config.defaultAction.type;
		const actionToExecute = {
			type: actionType,
			value:
				actionType === config.defaultAction.type
					? config.defaultAction.value
					: undefined,
		};

		const imageIds = bucketItems.map((id) => Number(id));
		executeSlotAction(actionToExecute, imageIds, bucketImages, galleryDispatch);

		setIsMenuOpen(false);
	};

	const handleDeleteSlot = () => {
		const store = useLightTableStore.getState();
		if (store.slots.length <= 1) return;
		if (
			window.confirm(
				`Delete tab "${config.label}"?\n(Images will return to the gallery)`,
			)
		) {
			store.removeSlot(config.id);
		}
	};

	return (
		<div
			className="meld-lt-slot-panel"
			style={{ "--slot-color": config.color } as React.CSSProperties}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<div className="meld-lt-slot-panel__images">
				{itemCount === 0 ? (
					<div className="meld-lt-slot-panel__empty">
						Drag & Drop images here
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
			<div className="meld-lt-slot__actions">
				<button
					type="button"
					className="meld-lt-slot__action-btn"
					onClick={() => handleAction()}
					disabled={itemCount === 0}
				>
					{getActionIcon(config.defaultAction.type)}
					<span className="meld-lt-slot__action-label">
						{config.defaultAction.type === "delete"
							? "Delete"
							: config.defaultAction.type === "add_tag"
								? "Tag"
								: "Commit"}
					</span>
				</button>
				<div className="meld-lt-slot__menu-wrapper" ref={menuRef}>
					<button
						type="button"
						className="meld-lt-slot__menu-btn"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						disabled={itemCount === 0}
					>
						<ChevronDown size={14} />
					</button>
					{isMenuOpen && (
						<div className="meld-lt-slot__dropdown">
							<button type="button" onClick={() => handleAction("add_tag")}>
								<Tag size={12} /> Add Tag
							</button>
							<button
								type="button"
								onClick={() => handleAction("send_to_node")}
							>
								<Play size={12} /> Send to Node
							</button>
							<button
								className="meld-lt-slot__dropdown-danger"
								type="button"
								onClick={() => handleAction("delete")}
							>
								<Trash2 size={12} /> Delete
							</button>
						</div>
					)}
				</div>
				<button
					type="button"
					className="meld-lt-slot__menu-btn"
					onClick={() => {
						if (window.confirm("Clear items in this tab?")) {
							useLightTableStore.getState().clearBucket(config.id);
						}
					}}
					title="Clear Tab"
					disabled={itemCount === 0}
				>
					<Eraser size={14} />
				</button>
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
							<div className="meld-lt-slot__settings-row">
								<label htmlFor={`slot-action-${config.id}`}>
									Default Action:
								</label>
								<select
									id={`slot-action-${config.id}`}
									value={editAction}
									onChange={(e) => setEditAction(e.target.value as ActionType)}
								>
									<option value="add_tag">Add Tag</option>
									<option value="send_to_node">Send to Node</option>
									<option value="delete">Delete</option>
								</select>
							</div>

							<button
								type="button"
								className="meld-lt-slot__settings-save"
								onClick={() => {
									useLightTableStore.getState().updateSlot(config.id, {
										label: editLabel,
										color: editColor,
										defaultAction: {
											type: editAction,
											value: editAction === "add_tag" ? "favorite" : undefined,
										},
									});
									setIsSettingsOpen(false);
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
		</div>
	);
};
