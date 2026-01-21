import { useCallback } from "react";
import { logger } from "../../../logger";
import type {
	ComfyApp,
	GalleryAction,
	GalleryState,
	MeldImage,
} from "../../../types";
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

	const handleRunWithWorkflow = useCallback(
		(image: MeldImage) => {
			dispatch({
				type: "OPEN_MODAL",
				payload: { type: "workflow_selection", image },
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

	return {
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleEditTags,
		handleEditSource,
		handleRunWithWorkflow,
		handleRestore,
	};
};
