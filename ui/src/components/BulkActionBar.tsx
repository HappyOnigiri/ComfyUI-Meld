import { RefreshCw, Tag, Trash2, X } from "lucide-react";
import type React from "react";
import { useGallery } from "../store/GalleryContext";

export const BulkActionBar: React.FC = () => {
	const { state, dispatch, deleteSelected, restoreSelected } = useGallery();
	const count = state.selectedIds.size;

	if (count === 0) return null;

	const isTrashMode = state.viewScope === "trash";

	const handleBulkTagEdit = () => {
		const selectedImages = state.images.filter((img) =>
			state.selectedIds.has(img.id),
		);
		const allTags = new Set<string>();
		for (const img of selectedImages) {
			if (img.tags) {
				for (const tag of img.tags) {
					allTags.add(tag);
				}
			}
		}

		dispatch({
			type: "OPEN_MODAL",
			payload: {
				type: "tag_edit",
				imageIds: Array.from(state.selectedIds),
				tags: Array.from(allTags),
			},
		});
	};

	return (
		<div
			className={`meld-bulk-bar ${isTrashMode ? "meld-bulk-bar--trash" : ""}`}
		>
			<span className="meld-bulk-bar__info">{count} items selected</span>

			{isTrashMode ? (
				<>
					<button
						type="button"
						className="meld-bulk-bar__button meld-bulk-bar__button--restore"
						onClick={restoreSelected}
					>
						<RefreshCw
							size={16}
							style={{ marginRight: "8px", verticalAlign: "middle" }}
						/>
						Restore
					</button>
					<button
						type="button"
						className="meld-bulk-bar__button meld-bulk-bar__button--delete"
						onClick={deleteSelected}
					>
						<Trash2
							size={16}
							style={{ marginRight: "8px", verticalAlign: "middle" }}
						/>
						Delete Permanently
					</button>
				</>
			) : (
				<>
					<button
						type="button"
						className="meld-bulk-bar__button meld-bulk-bar__button--edit"
						onClick={handleBulkTagEdit}
					>
						<Tag
							size={16}
							style={{ marginRight: "8px", verticalAlign: "middle" }}
						/>
						Edit Tags
					</button>

					<button
						type="button"
						className="meld-bulk-bar__button meld-bulk-bar__button--delete"
						onClick={deleteSelected}
					>
						<Trash2
							size={16}
							style={{ marginRight: "8px", verticalAlign: "middle" }}
						/>
						Delete
					</button>
				</>
			)}

			<button
				type="button"
				className="meld-bulk-bar__button meld-bulk-bar__button--cancel"
				onClick={() => dispatch({ type: "CLEAR_SELECTION" })}
			>
				<X size={16} style={{ marginRight: "8px", verticalAlign: "middle" }} />
				Cancel
			</button>
		</div>
	);
};
