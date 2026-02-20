import {
	Archive,
	ChevronDown,
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
		.map((id) => galleryState.images.find((img) => img.id === Number(id)))
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
					useLightTableStore.getState().addToBucket(config.id, id.trim());
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
		const images = imageIds
			.map((id) => galleryState.images.find((img) => img.id === id))
			.filter(Boolean) as MeldImage[];

		executeSlotAction(actionToExecute, imageIds, images, galleryDispatch);

		// After action dispatched
		useLightTableStore.getState().clearBucket(config.id);
		setIsMenuOpen(false);
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
				<div className="meld-lt-slot__settings-wrapper" ref={settingsRef}>
					<button
						type="button"
						className="meld-lt-slot__menu-btn"
						onClick={() => setIsSettingsOpen(!isSettingsOpen)}
						title="Slot Settings"
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
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
