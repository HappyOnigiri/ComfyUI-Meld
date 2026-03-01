import { Plus, Trash, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { getPortalRoot } from "../../../portals/portalRoots";
import { useGallery } from "../../../store/GalleryContext";
import { useLightTableKeys } from "../hooks/useLightTableKeys";
import { useLightTableStore } from "../store";
import type { SlotConfig } from "../types";
import { ConfirmModal } from "./ConfirmModal";
import { Slot } from "./Slot";
import { Toast } from "./Toast";

import "./LightTable.css";

/**
 * Light Table component
 * Rendered directly at the bottom (.comfyui-body-bottom) using React Portal.
 */
export const LightTable: React.FC = () => {
	useLightTableKeys();
	const isOpen = useLightTableStore((s) => s.isOpen);
	const slots = useLightTableStore((s) => s.slots);
	const buckets = useLightTableStore((s) => s.buckets);
	const setIsOpen = useLightTableStore((s) => s.setIsOpen);
	const { state: galleryState } = useGallery();
	const [activeTabId, setActiveTabId] = useState(slots[0]?.id || "keep");
	const portalRoot = getPortalRoot("lightTable");

	/** Show/hide flag for Clear All confirm modal */
	const [showClearAllConfirm, setShowClearAllConfirm] = useState(false);

	if (!isOpen) return null;

	const handleAddSlot = () => {
		const newId = `slot_${Date.now().toString(36)}`;
		useLightTableStore.getState().addSlot({
			id: newId,
			label: `Tab ${slots.length + 1}`,
			color: "var(--meld-text-secondary, #9ca3af)",
			shortcutKey: "",
		});
		setActiveTabId(newId);
	};

	const handleClearAll = () => {
		slots.forEach((slot: SlotConfig) => {
			useLightTableStore.getState().clearBucket(slot.id);
		});
		useLightTableStore.getState().showToast("All tabs cleared");
		setShowClearAllConfirm(false);
	};

	const lightTableJSX = (
		<div className="meld-light-table">
			{/* Tab bar */}
			<div className="meld-light-table__tabs">
				{slots.map((slot: SlotConfig) => (
					<button
						key={slot.id}
						type="button"
						className={`meld-light-table__tab ${activeTabId === slot.id ? "meld-light-table__tab--active" : ""}`}
						onClick={() => setActiveTabId(slot.id)}
						style={{ "--tab-color": slot.color } as React.CSSProperties}
						onDragOver={(e) => {
							e.preventDefault();
							setActiveTabId(slot.id);
						}}
						onDrop={(e) => {
							e.preventDefault();
							const transferredData = e.dataTransfer.getData("text/plain");
							if (transferredData) {
								const imageIds = transferredData.split(",");
								imageIds.forEach((id) => {
									if (id) {
										const imageIdStr = id.trim();
										const image = galleryState.images.find(
											(img) => String(img.id) === imageIdStr,
										);
										useLightTableStore
											.getState()
											.addToBucket(slot.id, imageIdStr, image);
									}
								});
							}
						}}
					>
						{slot.label}&nbsp; ({buckets[slot.id]?.length || 0})
					</button>
				))}
				<button
					type="button"
					className="meld-light-table__add-tab-btn"
					onClick={handleAddSlot}
					title="Add Tab"
					style={{
						background: "none",
						border: "none",
						color: "var(--meld-text-secondary, #9ca3af)",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						padding: "0 8px",
					}}
				>
					<Plus size={16} />
				</button>
				<div style={{ flex: 1 }} />
				<button
					type="button"
					className="meld-light-table__clear-btn"
					onClick={() => setShowClearAllConfirm(true)}
					title="Clear All Tabs"
				>
					<Trash size={14} />
					<span>Clear All</span>
				</button>
				<button
					type="button"
					className="meld-light-table__close-btn"
					onClick={() => setIsOpen(false)}
					title="Close Light Table"
					style={{
						background: "none",
						border: "none",
						color: "var(--meld-text-secondary, #9ca3af)",
						cursor: "pointer",
						display: "flex",
						alignItems: "center",
						padding: "0 8px",
						marginLeft: "8px",
					}}
				>
					<X size={16} />
				</button>
			</div>

			{/* Tab content */}
			<div className="meld-light-table__content">
				{slots.map((slot: SlotConfig) => (
					<div
						key={slot.id}
						className="meld-light-table__tab-panel"
						style={{ display: activeTabId === slot.id ? "block" : "none" }}
					>
						<Slot config={slot} />
					</div>
				))}
			</div>

			{/* Clear All confirm modal */}
			{showClearAllConfirm && (
				<ConfirmModal
					message="Are you sure you want to clear all items in all tabs?"
					onConfirm={handleClearAll}
					onCancel={() => setShowClearAllConfirm(false)}
				/>
			)}

			{/* Toast notification */}
			<Toast />
		</div>
	);

	return createPortal(lightTableJSX, portalRoot);
};
