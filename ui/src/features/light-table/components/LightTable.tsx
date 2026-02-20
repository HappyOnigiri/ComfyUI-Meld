import { Plus, Trash } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLightTableKeys } from "../hooks/useLightTableKeys";
import { useLightTableStore } from "../store";
import type { SlotConfig } from "../types";
import { Slot } from "./Slot";

import "./LightTable.css";

/**
 * Light Table component
 * Rendered directly at the bottom (.comfyui-body-bottom) using React Portal.
 * Does not depend on the sidebar DOM structure and is placed in the same layer as Image Feed.
 */
export const LightTable: React.FC = () => {
	useLightTableKeys();
	const { isOpen, slots } = useLightTableStore();
	const [activeTabId, setActiveTabId] = useState(slots[0]?.id || "keep");
	const portalContainerRef = useRef<HTMLDivElement | null>(null);

	// Get or create the portal container
	useEffect(() => {
		let container = document.getElementById(
			"meld-light-table-portal",
		) as HTMLDivElement | null;
		if (!container) {
			container = document.createElement("div");
			container.id = "meld-light-table-portal";

			// Find .comfyui-body-bottom (same location as Image Feed)
			const bottomArea = document.querySelector(".comfyui-body-bottom");
			if (bottomArea) {
				bottomArea.appendChild(container);
			} else {
				// Fallback: append to document.body
				document.body.appendChild(container);
			}
		}
		portalContainerRef.current = container;

		return () => {
			// Keep the container even if the component is unmounted (reuse on remount)
		};
	}, []);

	if (!isOpen || !portalContainerRef.current) return null;

	const handleAddSlot = () => {
		const newId = `slot_${Date.now().toString(36)}`;
		useLightTableStore.getState().addSlot({
			id: newId,
			label: `Tab ${slots.length + 1}`,
			color: "var(--meld-text-secondary, #9ca3af)",
			shortcutKey: "",
			defaultAction: { type: "add_tag", value: "favorite" },
			clearAfterAction: true,
		});
		setActiveTabId(newId);
	};

	const lightTableJSX = (
		<div className="meld-light-table">
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
										useLightTableStore
											.getState()
											.addToBucket(slot.id, id.trim());
									}
								});
							}
						}}
					>
						{slot.label} &nbsp; (
						{useLightTableStore.getState().buckets[slot.id]?.length || 0})
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
					onClick={() => {
						if (window.confirm("Clear all items in all tabs?")) {
							slots.forEach((slot: SlotConfig) => {
								useLightTableStore.getState().clearBucket(slot.id);
							});
						}
					}}
					title="Clear All Buckets"
				>
					<Trash size={14} />
					<span>Clear All</span>
				</button>
			</div>

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
		</div>
	);

	return createPortal(lightTableJSX, portalContainerRef.current);
};
