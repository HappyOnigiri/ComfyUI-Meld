import { Plus, Search, Tag, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { RESERVED_TAG_KEYWORD } from "../../../constants";
import { useGallery } from "../../../store/GalleryContext";
import type { Tag as TagType } from "../../../types";
import * as imagesApi from "../../images/api/imagesApi";
import * as tagsApi from "../api/tagsApi";

interface TagEditModalProps {
	imageIds: number[];
	initialTags: string[];
	onClose: () => void;
}

export const TagEditModal: React.FC<TagEditModalProps> = ({
	imageIds,
	initialTags,
	onClose,
}) => {
	const { dispatch, refreshImages } = useGallery();
	const [allTags, setAllTags] = useState<TagType[]>([]);
	const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);
	const [searchQuery, setSearchQuery] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const isBulk = imageIds.length > 1;

	const loadTags = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await tagsApi.fetchTags();
			setAllTags(data);
		} catch (error) {
			console.error("Failed to fetch tags:", error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		loadTags();
	}, [loadTags]);

	useEffect(() => {
		// Focus input on mount
		if (inputRef.current) {
			inputRef.current.focus();
		}

		// Handle Escape key globally for this modal
		const handleGlobalKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				onClose();
				if (document.fullscreenElement) {
					document.exitFullscreen().catch(() => {});
				}
			}
		};

		window.addEventListener("keydown", handleGlobalKeyDown, { capture: true });
		return () =>
			window.removeEventListener("keydown", handleGlobalKeyDown, {
				capture: true,
			});
	}, [onClose]);

	const filteredTags = useMemo(() => {
		return allTags.filter(
			(tag) =>
				tag.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
				!selectedTags.includes(tag.name),
		);
	}, [allTags, searchQuery, selectedTags]);

	const handleAddTag = (tagName: string) => {
		const trimmed = tagName.trim();
		if (trimmed.toLowerCase() === RESERVED_TAG_KEYWORD) {
			alert(
				`Tag name '${RESERVED_TAG_KEYWORD}' is reserved for search and cannot be used.`,
			);
			return;
		}
		if (trimmed && !selectedTags.includes(trimmed)) {
			setSelectedTags([...selectedTags, trimmed]);
			setSearchQuery("");
		}
	};

	const handleRemoveTag = (tagName: string) => {
		setSelectedTags(selectedTags.filter((t) => t !== tagName));
	};

	const handleSave = async () => {
		setIsSaving(true);
		try {
			if (isBulk) {
				// Calculate diff
				const tagsToAdd = selectedTags.filter((t) => !initialTags.includes(t));
				const tagsToRemove = initialTags.filter(
					(t) => !selectedTags.includes(t),
				);

				await imagesApi.bulkUpdateImageTags(imageIds, tagsToAdd, tagsToRemove);
			} else {
				await imagesApi.updateImageTags(imageIds[0], selectedTags);
			}
			await refreshImages();
			dispatch({ type: "CLEAR_SELECTION" });
			onClose();
		} catch (error) {
			console.error("Failed to update tags:", error);
			alert("Failed to update tags.");
		} finally {
			setIsSaving(false);
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && searchQuery.trim()) {
			e.preventDefault();
			e.stopPropagation();
			handleAddTag(searchQuery.trim());
		} else if (e.key === "Escape") {
			e.preventDefault();
			e.stopPropagation();
			onClose();
			if (document.fullscreenElement) {
				document.exitFullscreen().catch(() => {});
			}
		}
	};

	return createPortal(
		<div
			className="meld-modal-overlay"
			onClick={(e) => {
				e.stopPropagation();
				onClose();
			}}
		>
			<div className="meld-modal-content" onClick={(e) => e.stopPropagation()}>
				<div className="meld-modal-header">
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<Tag size={18} />
						<h3 style={{ margin: 0 }}>
							{isBulk ? `Edit Tags (${imageIds.length} images)` : "Edit Tags"}
						</h3>
					</div>
					<button type="button" className="meld-modal-close" onClick={onClose}>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					{isBulk && (
						<div
							style={{
								fontSize: "0.85rem",
								color: "var(--meld-text-secondary)",
								marginBottom: "16px",
								padding: "8px",
								backgroundColor: "var(--meld-card-bg)",
								borderRadius: "4px",
							}}
						>
							Adding tags will apply them to all selected images. Removing tags
							will remove them only from images that currently have them.
						</div>
					)}
					<div className="meld-tag-edit-section">
						<div className="meld-tag-edit-label">
							{isBulk ? "Collective Tags" : "Selected Tags"}
						</div>
						<div className="meld-tag-edit-selected">
							{selectedTags.length === 0 ? (
								<span className="meld-tag-edit-empty">No tags selected</span>
							) : (
								selectedTags.map((tag) => (
									<span key={tag} className="meld-tag-edit-badge">
										{tag}
										<button
											type="button"
											className="meld-tag-edit-remove"
											onClick={() => handleRemoveTag(tag)}
										>
											<X size={12} />
										</button>
									</span>
								))
							)}
						</div>
					</div>

					<div className="meld-tag-edit-section">
						<div className="meld-tag-edit-label">Add Tags</div>
						<div className="meld-tag-search-container">
							<Search size={14} className="meld-tag-search-icon" />
							<input
								ref={inputRef}
								type="text"
								className="meld-tag-search-input"
								placeholder="Search or create new tag..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								onKeyDown={handleKeyDown}
							/>
							{searchQuery.trim() &&
								!selectedTags.includes(searchQuery.trim()) && (
									<button
										type="button"
										className="meld-tag-add-btn"
										onClick={() => handleAddTag(searchQuery)}
									>
										<Plus size={14} />
										Create
									</button>
								)}
						</div>

						<div className="meld-tag-suggestions">
							{isLoading ? (
								<div className="meld-tag-suggestions-loading">Loading...</div>
							) : filteredTags.length === 0 ? (
								searchQuery ? (
									<div className="meld-tag-suggestions-empty">
										No existing tags match. Press Enter to create.
									</div>
								) : (
									<div className="meld-tag-suggestions-empty">
										No more tags available.
									</div>
								)
							) : (
								filteredTags.map((tag) => (
									<button
										key={tag.id}
										type="button"
										className="meld-tag-suggestion-item"
										onClick={() => handleAddTag(tag.name)}
									>
										{tag.name}
									</button>
								))
							)}
						</div>
					</div>
				</div>

				<div className="meld-modal-footer">
					<button
						type="button"
						className="meld-btn meld-btn-secondary"
						onClick={onClose}
					>
						Cancel
					</button>
					<button
						type="button"
						className="meld-btn meld-btn-primary"
						onClick={handleSave}
						disabled={isSaving}
					>
						{isSaving ? "Saving..." : "Save Changes"}
					</button>
				</div>
			</div>
		</div>,
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
