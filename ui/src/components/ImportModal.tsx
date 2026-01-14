import {
	ChevronLeft,
	ChevronRight,
	Folder,
	Play,
	Plus,
	Search,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import type { Tag as TagType } from "../types";

export const ImportModal: React.FC = () => {
	const { dispatch } = useGallery();
	const [config, setConfig] = useState<{
		type: string;
		subfolder: string;
		custom_path: string;
		recursive: boolean;
		auto_link_parent: boolean;
		tags: string[];
	}>({
		type: "output",
		subfolder: "",
		custom_path: "",
		recursive: true,
		auto_link_parent: true,
		tags: [],
	});

	const [folders, setFolders] = useState<
		{
			name: string;
			count: number;
			preview?: { filename: string; subfolder: string; type: string };
		}[]
	>([]);
	const [images, setImages] = useState<
		{ filename: string; subfolder: string; type: string }[]
	>([]);
	const [currentPathImageCount, setCurrentPathImageCount] = useState(0);
	const [isLoadingFolders, setIsLoadingFolders] = useState(false);
	const [allTags, setAllTags] = useState<TagType[]>([]);
	const [tagSearchQuery, setTagSearchQuery] = useState("");
	const [isLoadingTags, setIsLoadingTags] = useState(false);
	const [previewImage, setPreviewImage] = useState<{
		filename: string;
		subfolder: string;
		type: string;
	} | null>(null);

	const loadFolders = useCallback(async () => {
		const path =
			config.type === "custom" ? config.custom_path : config.subfolder;
		if (config.type === "custom" && !path) {
			setFolders([]);
			setImages([]);
			setCurrentPathImageCount(0);
			return;
		}

		setIsLoadingFolders(true);
		try {
			const result = await api.fetchFolders(config.type, path);
			setFolders(result.folders);
			setImages(result.images);
			setCurrentPathImageCount(result.image_count);
		} catch (err) {
			console.error("Failed to load folders:", err);
			setFolders([]);
			setImages([]);
			setCurrentPathImageCount(0);
		} finally {
			setIsLoadingFolders(false);
		}
	}, [config.type, config.subfolder, config.custom_path]);

	useEffect(() => {
		loadFolders();
	}, [loadFolders]);

	const loadTags = useCallback(async () => {
		setIsLoadingTags(true);
		try {
			const data = await api.fetchTags();
			setAllTags(data);
		} catch (error) {
			console.error("Failed to fetch tags:", error);
		} finally {
			setIsLoadingTags(false);
		}
	}, []);

	useEffect(() => {
		loadTags();
	}, [loadTags]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape" && previewImage) {
				setPreviewImage(null);
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [previewImage]);

	const filteredTags = useMemo(() => {
		return allTags.filter(
			(tag) =>
				tag.name.toLowerCase().includes(tagSearchQuery.toLowerCase()) &&
				!config.tags.includes(tag.name),
		);
	}, [allTags, tagSearchQuery, config.tags]);

	const handleAddTag = (tagName: string) => {
		const trimmed = tagName.trim();
		if (trimmed && !config.tags.includes(trimmed)) {
			setConfig({ ...config, tags: [...config.tags, trimmed] });
			setTagSearchQuery("");
		}
	};

	const handleRemoveTag = (tagName: string) => {
		setConfig({ ...config, tags: config.tags.filter((t) => t !== tagName) });
	};

	const handleTagKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && tagSearchQuery.trim()) {
			e.preventDefault();
			handleAddTag(tagSearchQuery.trim());
		}
	};

	const handleStart = async () => {
		try {
			await api.startScan(config);
			dispatch({
				type: "SET_SCAN_STATUS",
				payload: {
					isRunning: true,
					isFinished: false,
					shouldCancel: false,
					newCount: 0,
					progress: { current: 0, total: 0, phase: "registering" },
				},
			});
			dispatch({ type: "CLOSE_MODAL" });
		} catch (err) {
			console.error("Failed to start scan:", err);
			alert(`Failed to start scan: ${err}`);
		}
	};

	const enterFolder = (name: string) => {
		const newSub = config.subfolder ? `${config.subfolder}/${name}` : name;
		setConfig({ ...config, subfolder: newSub });
	};

	const goUp = () => {
		const parts = config.subfolder.split("/");
		parts.pop();
		setConfig({ ...config, subfolder: parts.join("/") });
	};

	return createPortal(
		<div
			className="meld-modal-overlay"
			onClick={() => dispatch({ type: "CLOSE_MODAL" })}
		>
			<div
				className="meld-modal-content meld-modal-content--large"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2>Import Images</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={() => dispatch({ type: "CLOSE_MODAL" })}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					<div className="meld-import-container">
						<div className="meld-import-sidebar">
							<div className="meld-form-group">
								<label htmlFor="base-location">Base Location</label>
								<select
									id="base-location"
									value={config.type}
									onChange={(e) =>
										setConfig({
											...config,
											type: e.target.value,
											subfolder: "",
										})
									}
								>
									<option value="output">Output Directory</option>
									<option value="input">Input Directory</option>
									<option value="custom">Custom Path (Absolute)</option>
								</select>
							</div>

							{config.type === "custom" ? (
								<div className="meld-form-group">
									<label htmlFor="custom-path">Absolute Path</label>
									<input
										id="custom-path"
										type="text"
										placeholder="C:\path\to\images or /path/to/images"
										value={config.custom_path}
										onChange={(e) =>
											setConfig({ ...config, custom_path: e.target.value })
										}
									/>
									{config.custom_path && (
										<div className="meld-path-count">
											{currentPathImageCount} total images found
										</div>
									)}
								</div>
							) : (
								<div className="meld-form-group">
									<span className="meld-form-label">Current Path</span>
									<div className="meld-path-display">
										<div className="meld-path-text">
											<span>{config.type}/</span>
											{config.subfolder}
										</div>
										<div className="meld-path-count">
											{currentPathImageCount} total images
										</div>
									</div>
								</div>
							)}

							<div className="meld-form-group checkbox">
								<label>
									<input
										type="checkbox"
										checked={config.recursive}
										onChange={(e) =>
											setConfig({ ...config, recursive: e.target.checked })
										}
									/>
									Recursive Scan
								</label>
							</div>

							<div className="meld-form-group checkbox">
								<label>
									<input
										type="checkbox"
										checked={config.auto_link_parent}
										onChange={(e) =>
											setConfig({
												...config,
												auto_link_parent: e.target.checked,
											})
										}
									/>
									Auto Link Parent
								</label>
							</div>

							<div className="meld-form-group">
								<label htmlFor="import-tags">Tags to Add</label>
								<div className="meld-tag-edit-selected">
									{config.tags.length === 0 ? (
										<span className="meld-tag-edit-empty">
											No tags selected
										</span>
									) : (
										config.tags.map((tag) => (
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

								<div className="meld-tag-search-container">
									<Search size={14} className="meld-tag-search-icon" />
									<input
										id="import-tags"
										type="text"
										className="meld-tag-search-input"
										placeholder="Search or create tag..."
										value={tagSearchQuery}
										onChange={(e) => setTagSearchQuery(e.target.value)}
										onKeyDown={handleTagKeyDown}
									/>
									{tagSearchQuery.trim() &&
										!config.tags.includes(tagSearchQuery.trim()) && (
											<button
												type="button"
												className="meld-tag-add-btn"
												onClick={() => handleAddTag(tagSearchQuery)}
											>
												<Plus size={14} />
											</button>
										)}
								</div>

								<div className="meld-tag-suggestions">
									{isLoadingTags ? (
										<div className="meld-tag-suggestions-loading">
											Loading...
										</div>
									) : filteredTags.length === 0 ? (
										tagSearchQuery && (
											<div className="meld-tag-suggestions-empty">
												New tag: {tagSearchQuery}
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

							<div className="meld-scan-actions">
								<button
									type="button"
									className="meld-btn meld-btn-primary"
									onClick={handleStart}
									style={{ width: "100%" }}
								>
									<Play size={16} />
									Start Import
								</button>
							</div>
						</div>

						<div className="meld-import-browser">
							{config.type !== "custom" && (
								<>
									<div className="meld-browser-header">
										<button
											type="button"
											className="meld-browser-back"
											disabled={!config.subfolder}
											onClick={goUp}
										>
											<ChevronLeft size={16} />
											Back
										</button>
										<span className="meld-browser-title">Browse Folders</span>
									</div>

									<div className="meld-folder-list">
										{isLoadingFolders ? (
											<div className="meld-browser-loading">Loading...</div>
										) : folders.length === 0 && images.length === 0 ? (
											<div className="meld-browser-empty">No items found.</div>
										) : (
											<>
												{folders.map((f) => (
													<div
														key={f.name}
														className="meld-folder-item"
														onClick={() => enterFolder(f.name)}
													>
														{f.preview ? (
															<img
																className="meld-folder-preview"
																src={`/api/view?filename=${encodeURIComponent(f.preview.filename)}&type=${f.preview.type}&subfolder=${encodeURIComponent(f.preview.subfolder)}`}
																alt=""
															/>
														) : (
															<Folder size={16} />
														)}
														<span className="meld-folder-name">{f.name}</span>
														<span className="meld-folder-count">
															{f.count} total
														</span>
														<ChevronRight size={14} />
													</div>
												))}

												{images.length > 0 && (
													<div className="meld-browser-image-grid">
														{images.map((img) => (
															<div
																key={img.filename}
																className="meld-browser-image-item"
																onClick={() => setPreviewImage(img)}
															>
																<img
																	src={`/api/view?filename=${encodeURIComponent(img.filename)}&type=${img.type}&subfolder=${encodeURIComponent(img.subfolder)}`}
																	alt={img.filename}
																	title={img.filename}
																/>
															</div>
														))}
													</div>
												)}
											</>
										)}
									</div>
								</>
							)}
							{config.type === "custom" && (
								<div className="meld-browser-info">
									<Folder size={48} />
									<p>Please enter an absolute path in the sidebar.</p>
									<span
										style={{
											fontSize: "11px",
											color: "var(--meld-text-secondary)",
										}}
									>
										Example: C:\Users\Me\Pictures or /home/me/images
									</span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>

			{previewImage && (
				<div
					className="meld-import-preview-overlay"
					onClick={() => setPreviewImage(null)}
				>
					<div
						className="meld-import-preview-content"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="meld-import-preview-image-wrapper">
							<button
								type="button"
								className="meld-import-preview-close"
								onClick={() => setPreviewImage(null)}
							>
								<X size={24} />
							</button>
							<img
								src={`/api/view?filename=${encodeURIComponent(previewImage.filename)}&type=${previewImage.type}&subfolder=${encodeURIComponent(previewImage.subfolder)}`}
								alt={previewImage.filename}
							/>
						</div>
						<div className="meld-import-preview-info">
							{previewImage.filename}
						</div>
					</div>
				</div>
			)}
		</div>,
		document.body,
	);
};
