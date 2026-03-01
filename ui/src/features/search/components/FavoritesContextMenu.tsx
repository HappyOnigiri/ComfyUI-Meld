import { Star, X } from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { useOnPointerDownOutside } from "../../../hooks/useOnPointerDownOutside";
import { useGallery } from "../../../store/GalleryContext";
import { stopReactKeyboardEvent } from "../../../utils/keyboard";
import { useFavoritesLogic } from "../hooks/useFavoritesLogic";
import { FavoriteItem } from "./FavoriteItem";
import styles from "./FavoritesContextMenu.module.css";

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
	useOnPointerDownOutside({
		enabled: Boolean(anchorRect) && !editingFavorite,
		insideRefs: [menuRef],
		onOutside: () => onClose(),
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

	return createPortal(
		<>
			{/* Menu container */}
			<div
				ref={menuRef}
				className={`${styles.menu} meld-favorites-context-menu`}
				style={{
					top: position.top,
					left: position.left,
				}}
			>
				<div className={styles.header}>
					<div className={styles.title}>
						<Star
							size={14}
							color="var(--brand-yellow, #ffd700)"
							fill="var(--brand-yellow, #ffd700)"
						/>
						Favorites
					</div>
					<div className={styles.count}>{state.favorites.length} items</div>
				</div>

				<div className={styles.list}>
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

				{toastMessage && <div className={styles.toast}>{toastMessage}</div>}
			</div>

			{/* Edit Favorite Modal */}
			{editingFavorite && (
				<div
					className="meld-modal-overlay meld-favorites-edit-modal-overlay"
					onMouseDown={(e) => {
						if (e.target === e.currentTarget) setEditingFavorite(null);
					}}
				>
					<div
						className="meld-modal-content meld-modal-content--small"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="meld-modal-header">
							<h2 className={styles.editTitle}>
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
							<div className={styles.form}>
								<div className={styles.fieldGroup}>
									<label
										htmlFor="edit-favorite-name-ctx"
										className={styles.label}
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
										className={styles.input}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												stopReactKeyboardEvent(e);
												handleSaveEditFavorite();
											}
											if (e.key === "Escape") {
												stopReactKeyboardEvent(e);
												setEditingFavorite(null);
											}
										}}
									/>
								</div>
								<div className={styles.fieldGroup}>
									<label
										htmlFor="edit-favorite-query-ctx"
										className={styles.label}
									>
										Search Query
									</label>
									<textarea
										id="edit-favorite-query-ctx"
										value={editFavoriteQuery}
										onChange={(e) => setEditFavoriteQuery(e.target.value)}
										placeholder="Search Query"
										rows={3}
										className={styles.textarea}
										onKeyDown={(e) => {
											if (e.key === "Enter" && !e.shiftKey) {
												stopReactKeyboardEvent(e);
												handleSaveEditFavorite();
											}
											if (e.key === "Escape") {
												stopReactKeyboardEvent(e);
												setEditingFavorite(null);
											}
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
