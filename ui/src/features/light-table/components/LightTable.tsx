import { Trash } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLightTableKeys } from "../hooks/useLightTableKeys";
import { useLightTableStore } from "../store";
import { Slot } from "./Slot";

import "./LightTable.css";

/**
 * Light Table コンポーネント
 * React Portal を使用して画面下部 (.comfyui-body-bottom) に直接描画する。
 * サイドバーのDOM構造に依存せず、Image Feed と同じレイヤーに配置される。
 */
export const LightTable: React.FC = () => {
	useLightTableKeys();
	const { isOpen, slots } = useLightTableStore();
	const [activeTabId, setActiveTabId] = useState(slots[0]?.id || "keep");
	const portalContainerRef = useRef<HTMLDivElement | null>(null);

	// Portal先のコンテナを取得・作成
	useEffect(() => {
		let container = document.getElementById(
			"meld-light-table-portal",
		) as HTMLDivElement | null;
		if (!container) {
			container = document.createElement("div");
			container.id = "meld-light-table-portal";

			// .comfyui-body-bottom を探す（Image Feed と同じ配置先）
			const bottomArea = document.querySelector(".comfyui-body-bottom");
			if (bottomArea) {
				bottomArea.appendChild(container);
			} else {
				// フォールバック: document.body に追加
				document.body.appendChild(container);
			}
		}
		portalContainerRef.current = container;

		return () => {
			// コンポーネントがアンマウントされてもコンテナは残す（再マウント時に再利用）
		};
	}, []);

	if (!isOpen || !portalContainerRef.current) return null;

	const lightTableJSX = (
		<div className="meld-light-table">
			<div className="meld-light-table__tabs">
				{slots.map((slot) => (
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
					>
						{slot.label} &nbsp; (
						{useLightTableStore.getState().buckets[slot.id]?.length || 0})
					</button>
				))}
				<button
					type="button"
					className="meld-light-table__clear-btn"
					onClick={() => {
						slots.forEach((slot) => {
							useLightTableStore.getState().clearBucket(slot.id);
						});
					}}
					title="Clear All Buckets"
				>
					<Trash size={14} />
					<span>Clear All</span>
				</button>
			</div>

			<div className="meld-light-table__content">
				{slots.map((slot) => (
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
