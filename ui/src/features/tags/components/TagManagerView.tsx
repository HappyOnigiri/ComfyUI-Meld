import { Check, Edit2, Plus, Search, Tag, Trash2, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createTag, deleteTag, fetchTags, renameTag } from "../../../api";
import { RESERVED_TAG_KEYWORD } from "../../../constants";
import type { Tag as TagType } from "../../../types";

interface TagManagerViewProps {
	onClose: () => void;
	onSearch: (query: string) => void;
}

export const TagManagerView: React.FC<TagManagerViewProps> = ({
	onClose,
	onSearch,
}) => {
	const [tags, setTags] = useState<TagType[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");
	const [newTagName, setNewTagName] = useState("");
	const [isAdding, setIsAdding] = useState(false);
	const [editingTagId, setEditingTagId] = useState<number | null>(null);
	const [editingTagName, setEditingTagName] = useState("");
	const [isRenaming, setIsRenaming] = useState(false);
	const renameInputRef = useRef<HTMLInputElement>(null);

	const loadTags = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await fetchTags();
			setTags(data);
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
		if (editingTagId !== null && renameInputRef.current) {
			renameInputRef.current.focus();
			renameInputRef.current.select();
		}
	}, [editingTagId]);

	const handleAddTag = async (e: React.FormEvent) => {
		e.preventDefault();
		const name = newTagName.trim();
		if (!name || isAdding) return;

		if (name.toLowerCase() === RESERVED_TAG_KEYWORD) {
			alert(
				`Tag name '${RESERVED_TAG_KEYWORD}' is reserved for search and cannot be used.`,
			);
			return;
		}

		// Client side duplicate check
		if (tags.some((t) => t.name.toLowerCase() === name.toLowerCase())) {
			alert(`Tag "${name}" already exists.`);
			return;
		}

		setIsAdding(true);
		try {
			await createTag(name);
			setNewTagName("");
			await loadTags();
		} catch (error) {
			console.error("Failed to add tag:", error);
		} finally {
			setIsAdding(false);
		}
	};

	const handleDeleteTag = async (id: number, name: string) => {
		if (!confirm(`Are you sure you want to delete tag "${name}"?`)) return;

		try {
			await deleteTag(id);
			await loadTags();
		} catch (error) {
			console.error("Failed to delete tag:", error);
		}
	};

	const handleStartRename = (tag: TagType) => {
		setEditingTagId(tag.id);
		setEditingTagName(tag.name);
	};

	const handleCancelRename = () => {
		setEditingTagId(null);
		setEditingTagName("");
	};

	const handleRenameTag = async (e: React.FormEvent) => {
		e.preventDefault();
		const name = editingTagName.trim();
		if (!name || editingTagId === null || isRenaming) return;

		if (name.toLowerCase() === RESERVED_TAG_KEYWORD) {
			alert(
				`Tag name '${RESERVED_TAG_KEYWORD}' is reserved for search and cannot be used.`,
			);
			return;
		}

		const currentTag = tags.find((t) => t.id === editingTagId);
		if (currentTag && currentTag.name === name) {
			handleCancelRename();
			return;
		}

		// Client side duplicate check
		if (
			tags.some(
				(t) =>
					t.id !== editingTagId && t.name.toLowerCase() === name.toLowerCase(),
			)
		) {
			alert(`Tag "${name}" already exists.`);
			return;
		}

		setIsRenaming(true);
		try {
			await renameTag(editingTagId, name);
			handleCancelRename();
			await loadTags();
		} catch (error) {
			console.error("Failed to rename tag:", error);
			alert(error instanceof Error ? error.message : "Failed to rename tag");
		} finally {
			setIsRenaming(false);
		}
	};

	const handleSearchByTag = (name: string) => {
		onSearch(`tag:${name}`);
	};

	const filteredTags = useMemo(() => {
		return tags.filter((tag) =>
			tag.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}, [tags, searchQuery]);

	return (
		<div className="meld-tag-manager-view">
			<div className="meld-tag-manager-header">
				<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
					<Tag size={16} />
					<h3 style={{ margin: 0, fontSize: "14px" }}>Tag Manager</h3>
				</div>
				<button
					type="button"
					className="meld-tag-manager-close"
					onClick={onClose}
					title="Close and return to gallery"
				>
					<X size={16} />
				</button>
			</div>

			<div className="meld-tag-manager-content">
				<form className="meld-tag-add-form" onSubmit={handleAddTag}>
					<input
						type="text"
						placeholder="Add new tag..."
						value={newTagName}
						onChange={(e) => setNewTagName(e.target.value)}
						disabled={isAdding}
					/>
					<button
						type="submit"
						className="meld-btn meld-btn-primary"
						style={{ padding: "4px 12px", height: "34px" }}
						disabled={!newTagName.trim() || isAdding}
					>
						<Plus size={14} />
						Add
					</button>
				</form>

				<div className="meld-tag-search-container">
					<Search size={14} className="meld-tag-search-icon" />
					<input
						type="text"
						className="meld-tag-search-input"
						placeholder="Filter tags..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
					/>
				</div>

				{isLoading ? (
					<div className="meld-gallery__loading">Loading tags...</div>
				) : (
					<div className="meld-tag-list">
						{filteredTags.length === 0 ? (
							<div className="meld-gallery__empty">No tags found.</div>
						) : (
							filteredTags.map((tag) => (
								<div key={tag.id} className="meld-tag-item">
									{editingTagId === tag.id ? (
										<form
											className="meld-tag-rename-form"
											onSubmit={handleRenameTag}
										>
											<input
												type="text"
												ref={renameInputRef}
												className="meld-tag-rename-input"
												value={editingTagName}
												onChange={(e) => setEditingTagName(e.target.value)}
												onKeyDown={(e) =>
													e.key === "Escape" && handleCancelRename()
												}
											/>
											<button
												type="submit"
												className="meld-tag-item__btn meld-tag-item__btn--save"
												title="Save"
												disabled={isRenaming || !editingTagName.trim()}
											>
												<Check size={14} />
											</button>
											<button
												type="button"
												className="meld-tag-item__btn"
												title="Cancel"
												onClick={handleCancelRename}
												disabled={isRenaming}
											>
												<X size={14} />
											</button>
										</form>
									) : (
										<>
											<span className="meld-tag-item__name">{tag.name}</span>
											<div className="meld-tag-item__actions">
												<button
													type="button"
													className="meld-tag-item__btn"
													title="Search by this tag"
													onClick={() => handleSearchByTag(tag.name)}
												>
													<Search size={14} />
												</button>
												<button
													type="button"
													className="meld-tag-item__btn"
													title="Rename tag"
													onClick={() => handleStartRename(tag)}
												>
													<Edit2 size={14} />
												</button>
												<button
													type="button"
													className="meld-tag-item__btn meld-tag-item__btn--delete"
													title="Delete tag"
													onClick={() => handleDeleteTag(tag.id, tag.name)}
												>
													<Trash2 size={14} />
												</button>
											</div>
										</>
									)}
								</div>
							))
						)}
					</div>
				)}
			</div>
		</div>
	);
};
