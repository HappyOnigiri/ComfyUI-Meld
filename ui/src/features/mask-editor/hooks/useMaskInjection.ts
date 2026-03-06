import { useCallback } from "react";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import { type ComfyApp, isComfyGraphNodeWithWidgets, type MeldImage } from "../../../types";
import { injectImageToGraph } from "../../workflows/utils/injectImageToGraph";
import { isMaskNodeType } from "../../workflows/utils/nodeTypePredicates";

export const useMaskInjection = () => {
	const { dispatch } = useGallery();

	const injectMaskToGraph = useCallback(
		(image: MeldImage, maskFilename: string) => {
			logger.log("[Meld-Debug] injectMaskToGraph called with:", maskFilename);

			// 1. Update loader node with the source image (best effort)
			injectImageToGraph(image);

			const comfyApp = window.app as ComfyApp;
			if (!comfyApp?.graph) {
				logger.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found");
				return false;
			}
			if (!Array.isArray(comfyApp.graph._nodes)) {
				logger.log("[Meld-Debug] injectMaskToGraph: comfyApp.graph._nodes is not an array");
				return false;
			}

			// 2. Update LoadImageMask with the new mask
			const maskNodes = comfyApp.graph._nodes.filter((n) => isMaskNodeType(n.type));

			if (maskNodes.length === 0) {
				logger.log("[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph");
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "error",
						message: "No 'Load Image (as Mask)' node found in the current workflow.",
					},
				});
				return false;
			}

			// If multiple, use the first one
			const node = maskNodes[0];
			if (!node) {
				return false;
			}
			if (!isComfyGraphNodeWithWidgets(node)) {
				logger.log("[Meld-Debug] injectMaskToGraph: target mask node has no widgets", node.id);
				return false;
			}
			const imageWidget = node.widgets.find((w) => w.name === "image");
			const fullMaskPath = `${maskFilename} [temp]`;
			logger.log(
				"[Meld-Debug] injectMaskToGraph: Updating node",
				node.id,
				"widget 'image' with",
				fullMaskPath,
			);
			if (imageWidget) {
				imageWidget.value = fullMaskPath;
				if (typeof imageWidget.callback === "function") {
					imageWidget.callback(fullMaskPath);
				}
			}

			const channelWidget = node.widgets.find((w) => w.name === "channel");
			if (channelWidget) {
				channelWidget.value = "red";
				if (typeof channelWidget.callback === "function") {
					channelWidget.callback("red");
				}
			}

			comfyApp.graph.afterChange?.();
			comfyApp.graph.setDirtyCanvas(true, true);
			return true;
		},
		[dispatch],
	);

	return { injectMaskToGraph };
};
