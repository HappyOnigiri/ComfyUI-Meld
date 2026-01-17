import type React from "react";
import { useEffect, useRef, useState } from "react";
import * as api from "../api";
import { logger } from "../logger";
import { useGallery } from "../store/GalleryContext";
import type { ComfyApp, MeldImage } from "../types";
import { getImageViewUrl } from "../utils/url";

export const useImageCardLogic = (image: MeldImage) => {
	const { state, dispatch, fetchFullImageDetails } = useGallery();
	const isSelected = state.selectedIds.has(image.id);
	const viewMode = state.settings["gallery.view_mode"] || "grid_details";

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
			const rest = getParentChain(parentInState);
			return [currentParent, ...rest].slice(0, maxDepth);
		}

		return [currentParent];
	};

	const parentChain = getParentChain(image);
	const showFilename = state.settings["sidebar.show_filename"];
	const displayFilename =
		showFilename === "filepath"
			? `${image.type !== "custom" ? `${image.type}/` : ""}${
					image.subfolder ? `${image.subfolder}/` : ""
				}${image.filename}`
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
			const data = await api.fetchSnapshotData(image.id);
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

				const controlWidget = node.widgets.find(
					(w: { name: string; value: string }) =>
						w.name === "control_after_generate",
				);
				if (controlWidget) {
					controlWidget.value = "fixed";
				}
			}

			const center = comfyApp.canvas.ds.offset;
			const scale = comfyApp.canvas.ds.scale;

			node.pos = [(-center[0] + 400) / scale, (-center[1] + 300) / scale];

			comfyApp.graph.add(node);
			comfyApp.canvas.selectNode(node);
			comfyApp.canvas.centerOnNode(node);
		} catch (e) {
			console.error("Error adding Unified Loader:", e);
			alert("Failed to load settings.");
		}
	};

	const handleEditSource = () => {
		dispatch({
			type: "OPEN_MODAL",
			payload: { type: "parent_selection", imageId: image.id },
		});
	};

	const handleEditTags = () => {
		dispatch({
			type: "OPEN_MODAL",
			payload: {
				type: "tag_edit",
				imageIds: [image.id],
				tags: image.tags || [],
			},
		});
	};

	return {
		state,
		dispatch,
		isSelected,
		viewMode,
		popupContent,
		setPopupContent,
		isMenuOpen,
		setIsMenuOpen,
		copiedLabel,
		popupCopied,
		menuRef,
		parentChain,
		displayFilename,
		imgSrc,
		handleCopy,
		handleClick,
		handleContainerClick,
		handleMouseDown,
		handleKeyDown,
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleEditSource,
		handleEditTags,
		fetchFullImageDetails,
	};
};
