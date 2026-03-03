import type { ComfyApp, MeldImage } from "../../../types";
import { isLoaderNodeType } from "./nodeTypePredicates";

export function buildComfyImagePath(image: MeldImage): string {
	let imagePath = image.filename;
	if (image.subfolder) {
		imagePath = `${image.subfolder}/${image.filename}`;
	}
	if (image.type && image.type !== "input") {
		imagePath = `${imagePath} [${image.type}]`;
	}
	return imagePath;
}

export type InjectImageToGraphResult =
	| { ok: true }
	| {
			ok: false;
			reason:
				| "no_app_graph"
				| "no_loader_node"
				| "no_widgets"
				| "no_image_widget";
	  };

export function injectImageToGraph(
	image: MeldImage,
	targetNodeId?: string,
): InjectImageToGraphResult {
	const comfyApp = window.app as ComfyApp;
	if (!comfyApp?.graph) {
		return { ok: false, reason: "no_app_graph" };
	}

	const imagePath = buildComfyImagePath(image);

	const loaderNodes = comfyApp.graph._nodes.filter((n) =>
		isLoaderNodeType(n.type),
	);

	if (loaderNodes.length === 0) {
		return { ok: false, reason: "no_loader_node" };
	}

	let loaderNode = loaderNodes[0];
	if (targetNodeId) {
		const target = loaderNodes.find((n) => String(n.id) === targetNodeId);
		if (target) {
			loaderNode = target;
		}
	}
	if (!Array.isArray(loaderNode.widgets)) {
		return { ok: false, reason: "no_widgets" };
	}
	const loaderImageWidget = loaderNode.widgets.find((w) => w.name === "image");
	if (!loaderImageWidget) {
		return { ok: false, reason: "no_image_widget" };
	}

	loaderImageWidget.value = imagePath;
	if (typeof loaderImageWidget.callback === "function") {
		loaderImageWidget.callback(imagePath);
	}

	comfyApp.graph.afterChange?.();
	comfyApp.graph.setDirtyCanvas(true, true);

	return { ok: true };
}
