import { Star, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useGallery } from "../../../store/GalleryContext";
import { useFavoritesLogic } from "../hooks/useFavoritesLogic";
import { FavoriteItem } from "./FavoriteItem";

interface FavoritesContextMenuProps {
	anchorRect: DOMRect | null;
	onClose: () => void;
	onSelect: (query: string) => void;
}

export const FavoritesContextMenu: React.FC<FavoritesContextMenuProps> = ({
	anchorRect,
	onClose,
	onSelect,
}) => {
	const { state } = useGallery();
	const {
		isSaving,
		toastMessage,
		editingFavorite,
		setEditingFavorite,
		editFavoriteName,
		setEditFavoriteName,
		editFavoriteQuery,
		setEditFavoriteQuery,
		handleDeleteFavorite,
		handleEditFavorite,
		handleSaveEditFavorite,
	} = useFavoritesLogic();

	const [position, setPosition] = useState({ top: 0, left: 0 });
	const menuRef = useRef<HTMLDivElement>(null);
	const editInputRef = useRef<HTMLInputElement>(null);

	// Handle escape to close the menu or the edit modal
	useEscapeToClose({
		onEscape: () => {
			if (editingFavorite) {
				setEditingFavorite(null);
			} else {
				onClose();
			}
		},
		enabled: true,
	});

	// Position the menu relative to the anchor
	useEffect(() => {
		if (anchorRect) {
			const menuWidth = 300;
			const padding = 10;
			let left = anchorRect.left;
			const top = anchorRect.bottom + 5;

			// Keep within viewport
			if (left + menuWidth > window.innerWidth - padding) {
				left = window.innerWidth - menuWidth - padding;
			}
			if (left < padding) {
				left = padding;
			}

			setPosition({ top, left });
		}
	}, [anchorRect]);

	// Focus edit input when it opens
	useEffect(() => {
		if (editingFavorite && editInputRef.current) {
			editInputRef.current.focus();
		}
	}, [editingFavorite]);

	if (!anchorRect) return null;

	const handleContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		e.preventDefault();
	};

	const handleContentMouseDown = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return createPortal(
		<>
			{/* Outside click overlay */}
			<div
				style={{
					position: "fixed",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 1999,
					backgroundColor: "transparent",
				}}
				onClick={onClose}
				onMouseDown={(e) => e.stopPropagation()}
			/>

			{/* Menu container */}
			<div
				ref={menuRef}
				onClick={handleContentClick}
				onMouseDown={handleContentMouseDown}
				style={{
					position: "fixed",
					top: position.top,
					left: position.left,
					width: "300px",
					maxHeight: "400px",
					backgroundColor: "var(--comfy-menu-bg, #222)",
					border: "1px solid var(--comfy-menu-border, #444)",
					borderRadius: "8px",
					boxShadow: "0 8px 24px var(--comfy-menu-shadow, rgba(0,0,0,0.5))",
					zIndex: 2000,
					display: "flex",
					flexDirection: "column",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						padding: "12px",
						borderBottom: "1px solid var(--comfy-menu-border, #333)",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor:
							"var(--comfy-input-bg-active, rgba(255, 255, 255, 0.02))",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							fontWeight: "bold",
							fontSize: "14px",
							color: "var(--meld-text-color)",
						}}
					>
						<Star
							size={14}
							color="var(--brand-yellow, #ffd700)"
							fill="var(--brand-yellow, #ffd700)"
						/>
						Favorites
					</div>
					<div
						style={{ fontSize: "12px", color: "var(--meld-text-secondary)" }}
					>
						{state.favorites.length} items
					</div>
				</div>

				<div
					style={{
						overflowY: "auto",
						padding: "8px",
						display: "flex",
						flexDirection: "column",
						gap: "6px",
						backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
					}}
				>
					{state.favorites.map((fav) => (
						<FavoriteItem
							key={fav.id}
							fav={fav}
							onSelect={(query) => {
								onSelect(query);
								onClose();
							}}
							onEdit={handleEditFavorite}
							onDelete={handleDeleteFavorite}
						/>
					))}
				</div>

				{toastMessage && (
					<div
						style={{
							padding: "8px 12px",
							backgroundColor: "var(--comfy-menu-bg, #333)",
							borderTop: "1px solid var(--comfy-menu-border, #444)",
							color: "var(--meld-success-color)",
							fontSize: "12px",
							fontWeight: "bold",
							textAlign: "center",
						}}
					>
						{toastMessage}
					</div>
				)}
			</div>

			{/* Edit Favorite Modal */}
			{editingFavorite && (
				<div
					className="meld-modal-overlay"
					style={{ zIndex: 3000 }}
					onMouseDown={(e) => {
						if (e.target === e.currentTarget) setEditingFavorite(null);
					}}
				>
					<div
						className="meld-modal-content meld-modal-content--small"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="meld-modal-header">
							<h2
								style={{ display: "flex", alignItems: "center", gap: "10px" }}
							>
								<Star size={20} color="var(--meld-accent-color)" />
								Edit Favorite
							</h2>
							<button
								type="button"
								className="meld-modal-close"
								onClick={() => setEditingFavorite(null)}
							>
								<X size={20} />
							</button>
						</div>

						<div className="meld-modal-body">
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "16px",
									padding: "8px 0",
								}}
							>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "6px",
									}}
								>
									<label
										htmlFor="edit-favorite-name-ctx"
										style={{
											fontSize: "12px",
											fontWeight: "bold",
											color: "var(--meld-text-secondary)",
										}}
									>
										Name
									</label>
									<input
										id="edit-favorite-name-ctx"
										ref={editInputRef}
										type="text"
										value={editFavoriteName}
										onChange={(e) => setEditFavoriteName(e.target.value)}
										placeholder="Favorite Name"
										style={{
											backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
											border: "1px solid var(--comfy-menu-border, #333)",
											borderRadius: "4px",
											color: "var(--meld-text-color)",
											padding: "8px 12px",
											fontSize: "14px",
											outline: "none",
										}}
										onKeyDown={(e) => {
											if (e.key === "Enter") handleSaveEditFavorite();
											if (e.key === "Escape") setEditingFavorite(null);
										}}
									/>
								</div>
								<div
									style={{
										display: "flex",
										flexDirection: "column",
										gap: "6px",
									}}
								>
									<label
										htmlFor="edit-favorite-query-ctx"
										style={{
											fontSize: "12px",
											fontWeight: "bold",
											color: "var(--meld-text-secondary)",
										}}
									>
										Search Query
									</label>
									<textarea
										id="edit-favorite-query-ctx"
										value={editFavoriteQuery}
										onChange={(e) => setEditFavoriteQuery(e.target.value)}
										placeholder="Search Query"
										rows={3}
										style={{
											backgroundColor: "var(--comfy-input-bg, #1a1a1a)",
											border: "1px solid var(--comfy-menu-border, #333)",
											borderRadius: "4px",
											color: "var(--meld-text-color)",
											padding: "8px 12px",
											fontSize: "13px",
											fontFamily: "monospace",
											outline: "none",
											resize: "vertical",
										}}
										onKeyDown={(e) => {
											if (e.key === "Enter" && !e.shiftKey) {
												e.preventDefault();
												handleSaveEditFavorite();
											}
											if (e.key === "Escape") setEditingFavorite(null);
										}}
									/>
								</div>
							</div>
						</div>

						<div className="meld-modal-footer">
							<button
								type="button"
								className="meld-btn meld-btn-secondary"
								onClick={() => setEditingFavorite(null)}
							>
								Cancel
							</button>
							<button
								type="button"
								className="meld-btn meld-btn-primary"
								onClick={handleSaveEditFavorite}
								disabled={
									isSaving ||
									!editFavoriteName.trim() ||
									!editFavoriteQuery.trim()
								}
							>
								{isSaving ? "Saving..." : "Save Changes"}
							</button>
						</div>
					</div>
				</div>
			)}
		</>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
