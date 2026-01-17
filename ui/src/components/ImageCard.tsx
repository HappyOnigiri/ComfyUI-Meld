import {
	ArrowBigRight,
	ArrowRight,
	Check,
	Copy,
	MoreVertical,
	PlusCircle,
	Tag,
	X,
} from "lucide-react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as api from "../api";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import type { ComfyApp, MeldImage } from "../types";
import { getImageViewUrl } from "../utils/url";

interface ImageCardProps {
	image: MeldImage;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
	const { state, dispatch, fetchFullImageDetails } = useGallery();
	const isSelected = state.selectedIds.has(image.id);
	const viewMode = state.settings["gallery.view_mode"] || "grid_details";
	const isGridOnly = viewMode === "grid_only";

	const [popupContent, setPopupContent] = useState<{
		title: string;
		text: string;
	} | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
	const [popupCopied, setPopupCopied] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleCopy = async (text: string, label: string, isPopup = false) => {
		try {
			await navigator.clipboard.writeText(text);
			if (isPopup) {
				setPopupCopied(true);
				setTimeout(() => setPopupCopied(false), 2000);
			} else {
				setCopiedLabel(label);
				setTimeout(() => setCopiedLabel(null), 2000);
			}
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				if (popupContent) {
					setPopupContent(null);
				} else {
					setIsMenuOpen(false);
				}
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen, popupContent]);

	const getParentChain = (
		img: MeldImage,
	): { id: number | null; imgSrc: string | null }[] => {
		const maxDepth = state.settings["gallery.lineage_max_depth"];
		if (maxDepth === 0) return [];

		if (img.ancestors && img.ancestors.length > 0) {
			return img.ancestors.slice(0, maxDepth).map((a) => ({
				id: a.id,
				imgSrc: getImageViewUrl(a),
			}));
		}

		const pId = img.parent_id;
		if (!pId || !img.parent_filename) return [];

		const parentInState = state.images.find((p) => p.id === pId);

		let imgSrc: string | null = null;
		if (parentInState) {
			imgSrc = getImageViewUrl(parentInState);
		} else {
			imgSrc = getImageViewUrl({
				filename: img.parent_filename,
				subfolder: img.parent_subfolder || "",
				type: img.parent_type,
			});
		}

		if (!imgSrc) return [];

		const currentParent = {
			id: pId || null,
			imgSrc,
		};

		if (parentInState && maxDepth > 1) {
			// If we found it in state, we can still try to recurse manually
			const rest = getParentChain(parentInState);
			return [currentParent, ...rest].slice(0, maxDepth);
		}

		return [currentParent];
	};

	const parentChain = getParentChain(image);
	const showFilename = state.settings["sidebar.show_filename"];
	const displayFilename =
		showFilename === "filepath"
			? `${image.subfolder ? `${image.subfolder}/` : ""}${image.filename}`
			: image.filename;

	const imgSrc = getImageViewUrl(image);

	const handleClick = (e: React.MouseEvent) => {
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		} else {
			dispatch({ type: "OPEN_VIEWER", payload: image.id });
		}
	};

	const handleContainerClick = (e: React.MouseEvent) => {
		if (e.shiftKey) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "SELECT_RANGE", payload: image.id });
		} else if (e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
			e.stopPropagation();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		} else {
			dispatch({ type: "OPEN_VIEWER", payload: image.id });
		}
	};

	const handleMouseDown = (e: React.MouseEvent) => {
		if (e.shiftKey || e.ctrlKey || e.metaKey || state.selectedIds.size > 0) {
			e.preventDefault();
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			dispatch({ type: "TOGGLE_SELECT", payload: image.id });
		}
	};

	const handleRestoreWorkflow = async () => {
		try {
			const data = await api.fetchImageWorkflow(image.id);
			if (!data.workflow) {
				alert("No workflow information is saved for this image.");
				return;
			}

			await (window as unknown as { app: ComfyApp }).app.loadGraphData(
				data.workflow,
			);
			logger.log("Workflow restored successfully from Meld");
		} catch (error) {
			logger.error("Error restoring workflow:", error);
			alert("Failed to restore workflow.");
		}
	};

	const handleAddUnifiedLoader = async () => {
		try {
			// 1. Fetch data from API
			const data = await api.fetchSnapshotData(image.id);

			// 2. Create node
			const nodeName = "MeldUnifiedLoader";
			// @ts-expect-error
			const comfyApp = window.app;
			// @ts-expect-error
			const liteGraph = window.LiteGraph;

			const node = liteGraph.createNode(nodeName);
			if (!node) {
				console.error(`Node type ${nodeName} not found.`);
				alert(
					`Node type ${nodeName} not found. Please make sure the Meld Unified Loader node is installed.`,
				);
				return;
			}

			// 3. Inject fetched data into widgets
			const widgetMap: Record<string, string> = {
				model_name: "model_name",
				positive: "positive",
				negative: "negative",
				seed: "seed",
				steps: "steps",
				cfg: "cfg",
				sampler_name: "sampler_name",
				scheduler: "scheduler",
				control_after_generate: "control_after_generate",
				width: "width",
				height: "height",
			};

			if (node.widgets) {
				for (const [dataKey, widgetName] of Object.entries(widgetMap)) {
					const val = (data as Record<string, string | number>)[dataKey];
					if (val !== undefined && val !== null) {
						const widget = node.widgets.find(
							(w: { name: string; value: string | number }) =>
								w.name === widgetName,
						);
						if (widget) {
							widget.value = val;
						}
					}
				}

				// Set seed behavior to fixed by default
				const controlWidget = node.widgets.find(
					(w: { name: string; value: string }) =>
						w.name === "control_after_generate",
				);
				if (controlWidget) {
					controlWidget.value = "fixed";
				}
			}

			// 4. Determine position on canvas
			const center = comfyApp.canvas.ds.offset;
			const scale = comfyApp.canvas.ds.scale;

			node.pos = [(-center[0] + 400) / scale, (-center[1] + 300) / scale];

			// 5. Add to graph and redraw
			comfyApp.graph.add(node);
			comfyApp.canvas.selectNode(node);
			comfyApp.canvas.centerOnNode(node);
		} catch (e) {
			console.error("Error adding Unified Loader:", e);
			alert("Failed to load settings.");
		}
	};

	return (
		<div
			className={`meld-image-card ${isSelected ? "meld-image-card--selected" : ""} ${isGridOnly ? "meld-image-card--grid-only" : ""}`}
			onClick={handleContainerClick}
			onMouseDown={handleMouseDown}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
		>
			<div className="meld-image-card__thumbnail-wrapper">
				<img
					src={imgSrc}
					className="meld-image-card__thumbnail"
					alt={image.filename}
					loading="lazy"
					onMouseDown={handleMouseDown}
					onClick={(e) => {
						e.stopPropagation();
						handleClick(e);
					}}
				/>
			</div>
			{!isGridOnly && (
				<div className="meld-image-card__details">
					{(state.settings["sidebar.show_filename"] !== "none" ||
						state.settings["sidebar.show_dimensions"]) && (
						<div className="meld-image-card__filename">
							{state.settings["sidebar.show_filename"] !== "none" &&
								displayFilename}
							{state.settings["sidebar.show_filename"] !== "none" &&
								state.settings["sidebar.show_dimensions"] &&
								image.width &&
								image.height &&
								` (${image.width} x ${image.height})`}
							{state.settings["sidebar.show_filename"] === "none" &&
								state.settings["sidebar.show_dimensions"] &&
								image.width &&
								image.height &&
								`${image.width} x ${image.height}`}
						</div>
					)}

					{state.settings["gallery.show_parent_image"] &&
						parentChain.length > 0 && (
							<div className="meld-image-card__lineage-v2">
								<div className="meld-image-card__meta-label">Source</div>
								<div className="meld-lineage-thumbs">
									{parentChain.map(
										(p, index) =>
											p.imgSrc && (
												<img
													key={p.id || index}
													src={p.imgSrc}
													className="meld-lineage-badge__parent-thumb"
													loading="lazy"
													onClick={(e) => {
														e.stopPropagation();
														dispatch({
															type: "OPEN_VIEWER",
															payload: {
																id: p.id || image.id,
																mode: "lineage",
															},
														});
													}}
													title={
														index === 0
															? "Source"
															: index === 1
																? "Grand-Source"
																: `Ancestor (S${index + 1})`
													}
													alt="source thumb"
												/>
											),
									)}
								</div>
							</div>
						)}

					{state.settings["sidebar.show_created_at"] && (
						<div className="meld-image-card__meta-item">
							<div className="meld-image-card__meta-label">Created At</div>
							<div className="meld-image-card__meta-content">
								{new Date(image.created_at * 1000).toLocaleString()}
							</div>
						</div>
					)}

					{state.viewScope === "trash" && image.deleted_at && (
						<div className="meld-image-card__meta-item">
							<div className="meld-image-card__meta-label">Deleted At</div>
							<div className="meld-image-card__meta-content">
								{new Date(image.deleted_at * 1000).toLocaleString()}
							</div>
						</div>
					)}

					{state.settings["sidebar.show_model_name"] && (
						<div
							className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
							onClick={async (e) => {
								e.stopPropagation();
								const fullImage = await fetchFullImageDetails(image.id);
								setPopupContent({
									title: "Model",
									text: fullImage.model_name || "-",
								});
							}}
						>
							<div
								className={`meld-image-card__meta-label meld-image-card__meta-label--copyable ${copiedLabel === "Model" ? "meld-image-card__meta-label--copied" : ""}`}
								title="Click to copy"
								onClick={async (e) => {
									e.stopPropagation();
									const fullImage = await fetchFullImageDetails(image.id);
									handleCopy(fullImage.model_name || "-", "Model");
								}}
							>
								{copiedLabel === "Model" ? "Copied!" : "Model"}
							</div>
							<div className="meld-image-card__meta-content">
								{image.model_name || "-"}
							</div>
						</div>
					)}

					{state.settings["sidebar.show_positive_prompt"] && (
						<div
							className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
							onClick={async (e) => {
								e.stopPropagation();
								const fullImage = await fetchFullImageDetails(image.id);
								setPopupContent({
									title: "Positive Prompt",
									text: fullImage.positive_prompt || fullImage.positive || "-",
								});
							}}
						>
							<div
								className={`meld-image-card__meta-label meld-image-card__meta-label--copyable ${copiedLabel === "Positive" ? "meld-image-card__meta-label--copied" : ""}`}
								title="Click to copy"
								onClick={async (e) => {
									e.stopPropagation();
									const fullImage = await fetchFullImageDetails(image.id);
									handleCopy(
										fullImage.positive_prompt || fullImage.positive || "-",
										"Positive",
									);
								}}
							>
								{copiedLabel === "Positive" ? "Copied!" : "Positive"}
							</div>
							<div className="meld-image-card__meta-content">
								{image.positive_prompt || image.positive || "-"}
							</div>
						</div>
					)}

					{state.settings["sidebar.show_negative_prompt"] && (
						<div
							className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
							onClick={async (e) => {
								e.stopPropagation();
								const fullImage = await fetchFullImageDetails(image.id);
								setPopupContent({
									title: "Negative Prompt",
									text: fullImage.negative_prompt || fullImage.negative || "-",
								});
							}}
						>
							<div
								className={`meld-image-card__meta-label meld-image-card__meta-label--copyable ${copiedLabel === "Negative" ? "meld-image-card__meta-label--copied" : ""}`}
								title="Click to copy"
								onClick={async (e) => {
									e.stopPropagation();
									const fullImage = await fetchFullImageDetails(image.id);
									handleCopy(
										fullImage.negative_prompt || fullImage.negative || "-",
										"Negative",
									);
								}}
							>
								{copiedLabel === "Negative" ? "Copied!" : "Negative"}
							</div>
							<div className="meld-image-card__meta-content">
								{image.negative_prompt || image.negative || "-"}
							</div>
						</div>
					)}

					{state.settings["sidebar.show_tags"] && (
						<div
							className="meld-image-card__meta-item meld-image-card__meta-item--clickable"
							onClick={(e) => {
								e.stopPropagation();
								dispatch({
									type: "OPEN_MODAL",
									payload: {
										type: "tag_edit",
										imageIds: [image.id],
										tags: image.tags || [],
									},
								});
							}}
						>
							<div className="meld-image-card__meta-label">Tags</div>
							<div className="meld-image-card__tags">
								{image.tags && image.tags.length > 0 ? (
									image.tags.map((tag, i) => {
										return (
											<span
												key={`${tag}-${i}`}
												className="meld-image-card__tag"
											>
												{tag}
											</span>
										);
									})
								) : (
									<span
										style={{
											color: "var(--meld-text-secondary)",
										}}
									>
										-
									</span>
								)}
							</div>
						</div>
					)}
				</div>
			)}

			{!isGridOnly && (
				<div className="meld-image-card__menu-container" ref={menuRef}>
					<button
						type="button"
						className="meld-image-card__menu-btn"
						onClick={(e) => {
							e.stopPropagation();
							setIsMenuOpen(!isMenuOpen);
						}}
						title="Menu"
					>
						<MoreVertical size={16} />
					</button>
					<button
						type="button"
						className="meld-image-card__menu-btn"
						onClick={(e) => {
							e.stopPropagation();
							handleAddUnifiedLoader();
						}}
						title="Add Unified Loader"
					>
						<ArrowRight size={16} />
					</button>
					{isMenuOpen && (
						<div className="meld-image-card__menu">
							<div
								className="meld-image-card__menu-item"
								onClick={(e) => {
									e.stopPropagation();
									handleAddUnifiedLoader();
									setIsMenuOpen(false);
								}}
							>
								<ArrowRight size={14} />
								<span>Add Unified Loader</span>
							</div>
							<div
								className="meld-image-card__menu-item"
								onClick={(e) => {
									e.stopPropagation();
									handleRestoreWorkflow();
									setIsMenuOpen(false);
								}}
							>
								<ArrowBigRight size={14} />
								<span>Restore Full Workflow</span>
							</div>
							<div
								className="meld-image-card__menu-item"
								onClick={(e) => {
									e.stopPropagation();
									dispatch({
										type: "OPEN_MODAL",
										payload: { type: "parent_selection", imageId: image.id },
									});
									setIsMenuOpen(false);
								}}
							>
								<PlusCircle size={14} />
								<span>Edit source image</span>
							</div>
							<div
								className="meld-image-card__menu-item"
								onClick={(e) => {
									e.stopPropagation();
									dispatch({
										type: "OPEN_MODAL",
										payload: {
											type: "tag_edit",
											imageIds: [image.id],
											tags: image.tags || [],
										},
									});
									setIsMenuOpen(false);
								}}
							>
								<Tag size={14} />
								<span>Edit Tags</span>
							</div>
						</div>
					)}
				</div>
			)}

			{popupContent &&
				createPortal(
					<div
						className="meld-prompt-popup-overlay"
						onClick={(e) => {
							e.stopPropagation();
							setPopupContent(null);
						}}
					>
						<div
							className="meld-prompt-popup-content"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="meld-prompt-popup-header">
								<span>{popupContent.title}</span>
								<div
									style={{ display: "flex", alignItems: "center", gap: "10px" }}
								>
									{popupCopied ? (
										<Check
											size={18}
											style={{ color: "var(--meld-success-color)" }}
										/>
									) : (
										<Copy
											className="meld-prompt-popup-copy"
											size={18}
											onClick={() => handleCopy(popupContent.text, "", true)}
										/>
									)}
									<X
										className="meld-prompt-popup-close"
										size={18}
										onClick={() => setPopupContent(null)}
									/>
								</div>
							</div>
							<div className="meld-prompt-popup-text">{popupContent.text}</div>
						</div>
					</div>,
					document.body,
				)}
		</div>
	);
};
