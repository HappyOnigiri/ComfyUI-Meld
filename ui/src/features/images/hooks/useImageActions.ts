import { useCallback } from "react";
import { logger } from "../../../logger";
import type {
	ComfyApp,
	GalleryAction,
	GalleryState,
	MeldImage,
} from "../../../types";
import { fetchWorkflows } from "../../workflows/api/workflowsApi";
import { injectImageToGraph } from "../../workflows/utils/injectImageToGraph";
import * as imagesApi from "../api/imagesApi";

/**
 * Shared Image Actions Hook
 *
 * This is the CENTRAL PLACE for common image operations used across different features
 * (Gallery, Viewer, etc.).
 *
 * If you need to add a new image-related action (e.g., bulk editing, exporting),
 * implement it here instead of within individual feature hooks.
 */
export const useImageActions = (
	_state: GalleryState,
	dispatch: React.Dispatch<GalleryAction>,
) => {
	const handleRestoreWorkflow = useCallback(async (image: MeldImage) => {
		try {
			const data = await imagesApi.fetchImageWorkflow(image.id);
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
	}, []);

	const handleAddUnifiedLoader = useCallback(async (image: MeldImage) => {
		try {
			const data = await imagesApi.fetchSnapshotData(image.id);
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
	}, []);

	const handleEditTags = useCallback(
		(image: MeldImage) => {
			dispatch({
				type: "OPEN_MODAL",
				payload: {
					type: "tag_edit",
					imageIds: [image.id],
					tags: image.tags || [],
				},
			});
		},
		[dispatch],
	);

	const handleEditSource = useCallback(
		(image: MeldImage) => {
			dispatch({
				type: "OPEN_MODAL",
				payload: { type: "parent_selection", imageId: image.id },
			});
		},
		[dispatch],
	);

	const handleSendToWorkflow = useCallback(
		(image: MeldImage) => {
			const result = injectImageToGraph(image);
			if (!result.ok) {
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "error",
						message:
							result.reason === "no_app_graph"
								? "No active workflow graph found. Please open a workflow first."
								: "No 'Meld Image Loader' or 'Load Image' node found in the current workflow.",
					},
				});
			}
		},
		[dispatch],
	);

	const handleRunWithWorkflow = useCallback(
		(images: MeldImage | MeldImage[]) => {
			const imageArray = Array.isArray(images) ? images : [images];
			dispatch({
				type: "OPEN_MODAL",
				payload: { type: "workflow_selection", images: imageArray },
			});
		},
		[dispatch],
	);

	const handleRunWithMask = useCallback(
		async (image: MeldImage, mode: "apply" | "run" = "run") => {
			console.log("[Meld] handleRunWithMask called", image, mode);

			if (mode === "apply") {
				// Check if the current workflow has the required nodes
				// @ts-expect-error
				const comfyApp = window.app;
				const nodes = comfyApp?.graph?._nodes || [];
				console.log(
					"[Meld] Current graph nodes:",
					nodes.map((n: { id: number; type: string }) => ({
						id: n.id,
						type: n.type,
					})),
				);

				const hasMaskNode = nodes.some(
					(n: { type: string }) => n.type === "LoadImageMask",
				);
				const hasLoaderNode = nodes.some(
					(n: { type: string }) =>
						n.type === "MeldImageLoader" ||
						n.type === "LoadImage" ||
						n.type === "Load Image",
				);

				console.log("[Meld] Nodes found:", { hasMaskNode, hasLoaderNode });

				if (!hasMaskNode || !hasLoaderNode) {
					const missing = [];
					if (!hasLoaderNode) missing.push("'Meld Image Loader'");
					if (!hasMaskNode) missing.push("'Load Image (as Mask)'");

					dispatch({
						type: "OPEN_MODAL",
						payload: {
							type: "error",
							message: `Required nodes missing in current workflow: ${missing.join(" and ")}. Please add them to use the Mask Tool.`,
						},
					});
					return;
				}
			} else {
				// For "run" mode, check if there's any workflow that supports masks
				try {
					const workflows = await fetchWorkflows();
					const hasCompatibleWorkflow = workflows.some(
						(wf) => wf.valid && wf.mask_count === 1,
					);
					if (!hasCompatibleWorkflow) {
						dispatch({
							type: "OPEN_MODAL",
							payload: {
								type: "error",
								message:
									"No workflows found with exactly one 'Load Image (as Mask)' node. Please save a compatible workflow first.",
							},
						});
						return;
					}
				} catch (err) {
					console.error("[Meld] Error checking workflows:", err);
					// Fallback: let them open the editor, they'll see errors later if no workflows exist
				}
			}

			dispatch({
				type: "OPEN_MODAL",
				payload: { type: "mask_editor", imageId: image.id, mode },
			});
		},
		[dispatch],
	);

	const handleRestore = useCallback(
		async (image: MeldImage, onSuccess?: () => void) => {
			try {
				const imageId = image.id;
				const result = await imagesApi.restoreImages([imageId]);
				const restoredIds = result.restored_ids || [imageId];
				dispatch({ type: "REMOVE_IMAGES", payload: restoredIds });
				onSuccess?.();
			} catch (err: unknown) {
				dispatch({
					type: "SET_ERROR",
					payload: err instanceof Error ? err.message : String(err),
				});
			}
		},
		[dispatch],
	);

	const handleDelete = useCallback(
		(image: MeldImage) => {
			dispatch({
				type: "OPEN_MODAL",
				payload: {
					type: "delete_confirm",
					imageIds: [image.id],
					hasLineage: !!(image.parent_id || image.has_children),
					isPermanent: _state.viewScope === "trash",
				},
			});
		},
		[_state.viewScope, dispatch],
	);

	return {
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleEditTags,
		handleEditSource,
		handleSendToWorkflow,
		handleRunWithWorkflow,
		handleRunWithMask,
		handleRestore,
		handleDelete,
	};
};
