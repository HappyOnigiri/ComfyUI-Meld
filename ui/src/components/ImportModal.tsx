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
import { getImageViewUrl } from "../utils/url";

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
			count: number | null;
			preview?: { filename: string; subfolder: string; type: string };
		}[]
	>([]);
	const [images, setImages] = useState<
		{ filename: string; subfolder: string; type: string }[]
	>([]);
	const [currentPathImageCount, setCurrentPathImageCount] = useState<
		number | null
	>(0);
	const [isLoadingFolders, setIsLoadingFolders] = useState(false);
	const [allTags, setAllTags] = useState<TagType[]>([]);
	const [tagSearchQuery, setTagSearchQuery] = useState("");
	const [isLoadingTags, setIsLoadingTags] = useState(false);
	const [previewImage, setPreviewImage] = useState<{
		filename: string;
		subfolder: string;
		type: string;
	} | null>(null);

	useEffect(() => {
		const initHomeDir = async () => {
			try {
				const home = await api.fetchHomeDir();
				setConfig((prev) => ({ ...prev, custom_path: home }));
			} catch (err) {
				console.error("Failed to fetch home directory:", err);
			}
		};
		initHomeDir();
	}, []);

	useEffect(() => {
		const controller = new AbortController();

		const loadFolders = async () => {
			const path =
				config.type === "custom" ? config.custom_path : config.subfolder;
			console.log(
				`[Meld] loadFolders started. Path: "${path}", Type: "${config.type}"`,
			);

			if (config.type === "custom" && !path) {
				console.log("[Meld] Custom path is empty, skipping load.");
				setFolders([]);
				setImages([]);
				setCurrentPathImageCount(0);
				return;
			}

			setIsLoadingFolders(true);
			const currentPath = path;
			const currentType = config.type;

			try {
				// Step 1: Fast load (Folders and Images in current dir)
				console.log("[Meld] Step 1: Fast load starting...");
				const result = await api.fetchFolders(
					config.type,
					path,
					true,
					controller.signal,
				);
				if (controller.signal.aborted) {
					console.log("[Meld] Step 1: Aborted.");
					return;
				}
				console.log(
					`[Meld] Step 1 complete. Found ${result.folders.length} folders, ${result.images.length} images.`,
				);
				setFolders(result.folders);
				setImages(result.images);
				setCurrentPathImageCount(null);

				// Step 2: Fetch folder metadata (counts and previews)
				const folderNames = result.folders.map((f) => f.name);
				if (folderNames.length > 0) {
					console.log(
						`[Meld] Step 2: Metadata fetch starting for ${folderNames.length} folders...`,
					);
					api
						.fetchFolderMetadata(
							currentType,
							currentPath,
							folderNames,
							controller.signal,
						)
						.then((metadata) => {
							if (controller.signal.aborted) {
								console.log("[Meld] Step 2: Aborted.");
								return;
							}
							console.log("[Meld] Step 2: Metadata fetch complete.");
							setFolders((prev) =>
								prev.map((f) => {
									const m = metadata[f.name];
									return m ? { ...f, count: m.count, preview: m.preview } : f;
								}),
							);
						})
						.catch((err) => {
							if (err.name !== "AbortError") {
								console.error("[Meld] Step 2: Metadata fetch failed:", err);
							}
						});
				}

				// Step 3: Fetch total recursive image count
				console.log("[Meld] Step 3: Path image count starting...");
				api
					.fetchPathImageCount(currentType, currentPath, controller.signal)
					.then((count) => {
						if (controller.signal.aborted) {
							console.log("[Meld] Step 3: Aborted.");
							return;
						}
						console.log(`[Meld] Step 3: Path image count complete: ${count}`);
						setCurrentPathImageCount(count);
					})
					.catch((err) => {
						if (err.name !== "AbortError") {
							console.error("[Meld] Step 3: Path image count failed:", err);
						}
					});
			} catch (err: unknown) {
				if ((err as Error).name === "AbortError") {
					console.log("[Meld] Request aborted.");
					return;
				}
				console.error("[Meld] Failed to load folders:", err);
				setFolders([]);
				setImages([]);
				setCurrentPathImageCount(0);
			} finally {
				if (!controller.signal.aborted) {
					setIsLoadingFolders(false);
				}
			}
		};

		loadFolders();

		return () => {
			controller.abort();
		};
	}, [config.type, config.subfolder, config.custom_path]);

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
		if (config.type === "custom") {
			const separator = config.custom_path.includes("\\") ? "\\" : "/";
			const newPath = config.custom_path.endsWith(separator)
				? `${config.custom_path}${name}`
				: `${config.custom_path}${separator}${name}`;
			setConfig({ ...config, custom_path: newPath });
		} else {
			const newSub = config.subfolder ? `${config.subfolder}/${name}` : name;
			setConfig({ ...config, subfolder: newSub });
		}
	};

	const goUp = () => {
		if (config.type === "custom") {
			const separator = config.custom_path.includes("\\") ? "\\" : "/";
			const parts = config.custom_path.split(separator);
			if (parts.length > 1) {
				parts.pop();
				let newPath = parts.join(separator);
				if (newPath === "" && separator === "/") newPath = "/"; // Root on Linux
				setConfig({ ...config, custom_path: newPath });
			}
		} else {
			const parts = config.subfolder.split("/");
			parts.pop();
			setConfig({ ...config, subfolder: parts.join("/") });
		}
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

							<div className="meld-form-group">
								<span className="meld-form-label">Images Found</span>
								<div className="meld-path-count">
									{currentPathImageCount === null ? (
										<span className="meld-path-count--loading">
											Scanning...
										</span>
									) : (
										`${currentPathImageCount} images`
									)}
								</div>
							</div>

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
							<div className="meld-browser-header">
								<button
									type="button"
									className="meld-browser-back"
									disabled={
										config.type === "custom"
											? config.custom_path === "/" ||
												(!config.custom_path.includes("/") &&
													!config.custom_path.includes("\\"))
											: !config.subfolder
									}
									onClick={goUp}
								>
									<ChevronLeft size={16} />
									Back
								</button>
								<div className="meld-browser-path-container">
									{config.type === "custom" ? (
										<input
											type="text"
											className="meld-browser-path-input"
											value={config.custom_path}
											onChange={(e) =>
												setConfig({ ...config, custom_path: e.target.value })
											}
											placeholder="Enter absolute path..."
										/>
									) : (
										<div className="meld-browser-path-display">
											<span className="meld-browser-path-type">
												{config.type}/
											</span>
											{config.subfolder}
										</div>
									)}
								</div>
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
												<div className="meld-folder-icon-wrapper">
													{f.preview ? (
														<img
															className="meld-folder-preview"
															src={getImageViewUrl(f.preview)}
															alt=""
														/>
													) : (
														<Folder size={16} />
													)}
												</div>
												<span className="meld-folder-name">{f.name}</span>
												<span
													className={`meld-folder-count ${
														f.count === null ? "meld-folder-count--loading" : ""
													}`}
												>
													{f.count !== null ? `${f.count} total` : "..."}
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
															src={getImageViewUrl(img)}
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
						</div>
					</div>
				</div>
			</div>

			{previewImage && (
				<div
					className="meld-import-preview-overlay"
					onClick={(e) => {
						e.stopPropagation();
						setPreviewImage(null);
					}}
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
								src={getImageViewUrl(previewImage)}
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
		(document.fullscreenElement as HTMLElement) || document.body,
	);
};
