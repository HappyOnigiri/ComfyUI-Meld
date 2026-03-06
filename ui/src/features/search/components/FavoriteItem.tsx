import { Edit2, Trash2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { Favorite } from "../../../types";

interface FavoriteItemProps {
	fav: Favorite;
	onSelect: (query: string) => void;
	onEdit: (e: React.MouseEvent, fav: Favorite) => void;
	onDelete: (e: React.MouseEvent, id: number, name: string) => void;
}

export const FavoriteItem: React.FC<FavoriteItemProps> = ({ fav, onSelect, onEdit, onDelete }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isEditHovered, setIsEditHovered] = useState(false);
	const [isDeleteHovered, setIsDeleteHovered] = useState(false);

	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: isHovered
					? "var(--comfy-menu-bg, #333)"
					: "var(--comfy-input-bg, #2a2a2a)",
				border: "1px solid",
				borderColor: isHovered ? "var(--meld-accent-color)" : "var(--comfy-menu-border, #333)",
				borderRadius: "6px",
				padding: "8px 12px",
				cursor: "pointer",
				transition: "all 0.2s",
				color: "var(--meld-text-color)",
				fontSize: "13px",
				gap: "10px",
			}}
			onClick={() => onSelect(fav.query)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					minWidth: 0,
					flex: 1,
				}}
			>
				<span
					style={{
						fontWeight: "bold",
						overflow: "hidden",
						textOverflow: "ellipsis",
						whiteSpace: "nowrap",
					}}
				>
					{fav.name}
				</span>
				{fav.name !== fav.query && (
					<span
						style={{
							fontSize: "10px",
							color: "var(--meld-text-secondary)",
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							fontFamily: "monospace",
						}}
					>
						{fav.query}
					</span>
				)}
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "4px",
					flexShrink: 0,
				}}
			>
				<button
					type="button"
					onClick={(e) => onEdit(e, fav)}
					aria-label={`Edit favorite ${fav.name}`}
					style={{
						background: "none",
						border: "none",
						color: isEditHovered ? "var(--meld-accent-color)" : "var(--meld-text-secondary)",
						backgroundColor: isEditHovered
							? "var(--comfy-input-bg-active, rgba(68, 136, 255, 0.1))"
							: "transparent",
						padding: "6px",
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						borderRadius: "4px",
						transition: "all 0.2s",
					}}
					onMouseEnter={() => setIsEditHovered(true)}
					onMouseLeave={() => setIsEditHovered(false)}
					title="Edit favorite"
				>
					<Edit2 size={14} />
				</button>
				<button
					type="button"
					onClick={(e) => onDelete(e, fav.id, fav.name)}
					aria-label={`Delete favorite ${fav.name}`}
					style={{
						background: "none",
						border: "none",
						color: isDeleteHovered ? "var(--meld-danger-color)" : "var(--meld-text-secondary)",
						backgroundColor: isDeleteHovered
							? "var(--comfy-input-bg-active, rgba(255,0,0,0.1))"
							: "transparent",
						padding: "6px",
						display: "flex",
						alignItems: "center",
						cursor: "pointer",
						borderRadius: "4px",
						transition: "all 0.2s",
					}}
					onMouseEnter={() => setIsDeleteHovered(true)}
					onMouseLeave={() => setIsDeleteHovered(false)}
					title="Delete favorite"
				>
					<Trash2 size={14} />
				</button>
			</div>
		</div>
	);
};
