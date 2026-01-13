import {
	CheckCircle,
	ChevronLeft,
	ChevronRight,
	Folder,
	Play,
	Plus,
	Search,
	Square,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { useGallery } from "../store/GalleryContext";
import type { Tag as TagType } from "../types";

export const ImportModal: React.FC = () => {
	const { state, dispatch } = useGallery();
	const { scanStatus } = state;
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

	const [folders, setFolders] = useState<string[]>([]);
	const [isLoadingFolders, setIsLoadingFolders] = useState(false);
	const [allTags, setAllTags] = useState<TagType[]>([]);
	const [tagSearchQuery, setTagSearchQuery] = useState("");
	const [isLoadingTags, setIsLoadingTags] = useState(false);

	const loadFolders = useCallback(async () => {
		if (config.type === "custom") return;
		setIsLoadingFolders(true);
		try {
			const result = await api.fetchFolders(config.type, config.subfolder);
			setFolders(result);
		} catch (err) {
			console.error("Failed to load folders:", err);
		} finally {
			setIsLoadingFolders(false);
		}
	}, [config.type, config.subfolder]);

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
		} catch (err) {
			console.error("Failed to start scan:", err);
			alert(`Failed to start scan: ${err}`);
		}
	};

	const handleCancel = async () => {
		try {
			await api.cancelScan();
			dispatch({ type: "SET_SCAN_STATUS", payload: { shouldCancel: true } });
		} catch (err) {
			console.error("Failed to cancel scan:", err);
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

	const handleClose = () => {
		if (scanStatus.isFinished) {
			dispatch({ type: "SET_SCAN_STATUS", payload: { isFinished: false } });
		}
		dispatch({ type: "CLOSE_MODAL" });
	};

	const isLinking = scanStatus.progress.phase === "linking";
	const progressPercent = isLinking
		? 100
		: scanStatus.progress.total > 0
			? Math.round(
					(scanStatus.progress.current / scanStatus.progress.total) * 100,
				)
			: 0;

	return createPortal(
		<div className="meld-modal-overlay" onClick={handleClose}>
			<div
				className="meld-modal-content meld-modal-content--large"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h2>Import Images</h2>
					<button
						type="button"
						className="meld-modal-close"
						onClick={handleClose}
					>
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					{scanStatus.isRunning ? (
						<div className="meld-scan-progress">
							<div className="meld-scan-status-text">
								{scanStatus.shouldCancel ? (
									<span className="meld-status-cancelling">Cancelling...</span>
								) : isLinking ? (
									<span>Linking parent images...</span>
								) : (
									<span>Scanning images...</span>
								)}
							</div>

							<div className="meld-progress-container">
								<div
									className="meld-progress-bar"
									style={{ width: `${progressPercent}%` }}
								/>
							</div>

							<div className="meld-progress-stats">
								{isLinking ? (
									<span>
										Processing relations: {scanStatus.progress.current} /{" "}
										{scanStatus.progress.total}
									</span>
								) : (
									<span>
										{scanStatus.progress.current} / {scanStatus.progress.total}
									</span>
								)}
							</div>

							<div className="meld-scan-actions">
								<button
									type="button"
									className="meld-btn meld-btn-secondary"
									onClick={handleClose}
								>
									Run in Background
								</button>
								<button
									type="button"
									className="meld-btn meld-btn-danger"
									disabled={scanStatus.shouldCancel}
									onClick={handleCancel}
								>
									<Square size={16} />
									Stop Scan
								</button>
							</div>
						</div>
					) : scanStatus.isFinished ? (
						<div className="meld-scan-finished">
							<div className="meld-finished-icon">
								<CheckCircle size={64} color="var(--meld-success)" />
							</div>
							<h3>Import Completed</h3>
							<p>
								Successfully scanned <strong>{scanStatus.totalCount}</strong>{" "}
								images.
								<br />(<strong>{scanStatus.newCount}</strong> new images were
								added to database)
							</p>
							<div className="meld-scan-actions">
								<button
									type="button"
									className="meld-btn meld-btn-primary"
									onClick={handleClose}
									style={{ minWidth: "120px" }}
								>
									Close
								</button>
							</div>
						</div>
					) : (
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
									</div>
								) : (
									<div className="meld-form-group">
										<span className="meld-form-label">Current Path</span>
										<div className="meld-path-display">
											<span>{config.type}/</span>
											{config.subfolder}
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
											) : folders.length === 0 ? (
												<div className="meld-browser-empty">
													No subfolders found.
												</div>
											) : (
												folders.map((f) => (
													<div
														key={f}
														className="meld-folder-item"
														onClick={() => enterFolder(f)}
													>
														<Folder size={16} />
														<span>{f}</span>
														<ChevronRight size={14} />
													</div>
												))
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
					)}
				</div>
			</div>
		</div>,
		document.body,
	);
};
