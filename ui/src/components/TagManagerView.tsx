import { Plus, Search, Tag, Trash2, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createTag, deleteTag, fetchTags } from "../api";
import type { Tag as TagType } from "../types";

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

	const handleAddTag = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!newTagName.trim() || isAdding) return;

		setIsAdding(true);
		try {
			await createTag(newTagName.trim());
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
											className="meld-tag-item__btn meld-tag-item__btn--delete"
											title="Delete tag"
											onClick={() => handleDeleteTag(tag.id, tag.name)}
										>
											<Trash2 size={14} />
										</button>
									</div>
								</div>
							))
						)}
					</div>
				)}
			</div>
		</div>
	);
};
