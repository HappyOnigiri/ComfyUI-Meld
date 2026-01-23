import { useCallback } from "react";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";

export const useMaskInjection = () => {
	const { dispatch } = useGallery();

	const injectMaskToGraph = useCallback(
		(image: MeldImage, maskFilename: string) => {
			console.log("[Meld-Debug] injectMaskToGraph called with:", maskFilename);
			// @ts-expect-error: ComfyUI global
			const comfyApp = window.app;
			if (!comfyApp?.graph) {
				console.log("[Meld-Debug] injectMaskToGraph: No comfyApp.graph found");
				return false;
			}

			// 1. Update MeldImageLoader with the source image
			let imagePath = image.filename;
			if (image.subfolder) {
				imagePath = `${image.subfolder}/${image.filename}`;
			}
			if (image.type && image.type !== "input") {
				imagePath = `${imagePath} [${image.type}]`;
			}

			const loaderNodes = comfyApp.graph._nodes.filter(
				(n: { type: string }) =>
					n.type === "MeldImageLoader" ||
					n.type === "LoadImage" ||
					n.type === "Load Image",
			);
			if (loaderNodes.length > 0) {
				const loaderNode = loaderNodes[0];
				const loaderImageWidget = loaderNode.widgets.find(
					(w: { name: string }) => w.name === "image",
				);
				if (loaderImageWidget) {
					loaderImageWidget.value = imagePath;
					if (typeof loaderImageWidget.callback === "function") {
						loaderImageWidget.callback(imagePath);
					}
					console.log(
						"[Meld-Debug] injectMaskToGraph: Updated Loader node",
						loaderNode.id,
						"with",
						imagePath,
					);
				}
			}

			// 2. Update LoadImageMask with the new mask
			const maskNodes = comfyApp.graph._nodes.filter(
				(n: { type: string }) => n.type === "LoadImageMask",
			);

			if (maskNodes.length === 0) {
				console.log(
					"[Meld-Debug] injectMaskToGraph: No LoadImageMask nodes found in active graph",
				);
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "error",
						message:
							"No 'Load Image (as Mask)' node found in the current workflow.",
					},
				});
				return false;
			}

			// If multiple, use the first one
			const node = maskNodes[0];
			const imageWidget = node.widgets.find(
				(w: { name: string }) => w.name === "image",
			);
			const fullMaskPath = `${maskFilename} [temp]`;
			console.log(
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

			const channelWidget = node.widgets.find(
				(w: { name: string }) => w.name === "channel",
			);
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
