import { ChevronRight, GitBranch, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import type { MeldImage } from "../types";

interface HistoryTreeModalProps {
	imageId: number;
}

export const HistoryTreeModal: React.FC<HistoryTreeModalProps> = ({
	imageId,
}) => {
	const { dispatch } = useGallery();
	const [lineage, setLineage] = useState<MeldImage[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const loadLineage = useCallback(async () => {
		setIsLoading(true);
		try {
			const results = await api.fetchLineage(imageId);
			setLineage(results);
		} catch (err) {
			console.error("Failed to load lineage:", err);
		} finally {
			setIsLoading(false);
		}
	}, [imageId]);

	useEffect(() => {
		loadLineage();
	}, [loadLineage]);

	const buildTree = (images: MeldImage[]) => {
		const map = new Map<number | null | undefined, MeldImage[]>();
		for (const img of images) {
			const pid = img.parent_id || null;
			if (!map.has(pid)) map.set(pid, []);
			map.get(pid)?.push(img);
		}
		return map;
	};

	const treeMap = buildTree(lineage);

	const renderNodes = (parentId: number | null, level = 0) => {
		const nodes = treeMap.get(parentId) || [];
		return nodes.map((node) => (
			<div key={node.id} className="meld-tree-node-container">
				<div
					className={`meld-tree-node ${node.id === imageId ? "meld-tree-node--current" : ""}`}
					style={{ paddingLeft: `${level * 24}px` }}
				>
					{level > 0 && (
						<ChevronRight size={16} className="meld-tree-node-arrow" />
					)}
					<div className="meld-tree-node-content">
						<img
							src={`/api/view?filename=${encodeURIComponent(node.filename)}&type=${node.type || "output"}${node.subfolder ? `&subfolder=${encodeURIComponent(node.subfolder)}` : ""}`}
							alt={node.filename}
							onClick={() =>
								dispatch({ type: "OPEN_VIEWER", payload: node.id })
							}
						/>
						<div className="meld-tree-node-info">
							<span className="meld-tree-node-id">#{node.id}</span>
							<span className="meld-tree-node-filename">{node.filename}</span>
						</div>
					</div>
					{node.id === imageId && (
						<button
							type="button"
							className="meld-tree-change-parent"
							onClick={() =>
								dispatch({
									type: "OPEN_MODAL",
									payload: { type: "parent_selection", imageId: node.id },
								})
							}
						>
							Change Parent
						</button>
					)}
				</div>
				{renderNodes(node.id, level + 1)}
			</div>
		));
	};

	// Find root (nodes whose parent is not in the lineage set, or null)
	const lineageIds = new Set(lineage.map((img) => img.id));
	const roots = lineage.filter(
		(img) => !img.parent_id || !lineageIds.has(img.parent_id),
	);

	return (
		<div
			className="meld-modal-overlay"
			onClick={() => dispatch({ type: "CLOSE_MODAL" })}
		>
			<div
				className="meld-modal-content meld-modal-content--large"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
						<GitBranch size={20} />
						<h2>History Tree</h2>
					</div>
					<button
						type="button"
						className="meld-modal-close"
						onClick={() => dispatch({ type: "CLOSE_MODAL" })}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					{isLoading ? (
						<div className="meld-modal-loading">Loading tree...</div>
					) : lineage.length === 0 ? (
						<div className="meld-no-lineage">No related images found.</div>
					) : (
						<div className="meld-tree-container">
							{roots.map((root) => (
								<div key={root.id} className="meld-tree-root">
									{renderNodes(root.parent_id || null)}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
