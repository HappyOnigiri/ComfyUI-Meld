import type { MeldImage } from "../../../types";

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
	| { ok: false; reason: "no_app_graph" | "no_loader_node" };

export function injectImageToGraph(image: MeldImage): InjectImageToGraphResult {
	// @ts-expect-error: ComfyUI global
	const comfyApp = window.app;
	if (!comfyApp?.graph) {
		return { ok: false, reason: "no_app_graph" };
	}

	const imagePath = buildComfyImagePath(image);

	const loaderNodes = comfyApp.graph._nodes.filter(
		(n: { type: string }) =>
			n.type === "MeldImageLoader" ||
			n.type === "LoadImage" ||
			n.type === "Load Image",
	);

	if (loaderNodes.length === 0) {
		return { ok: false, reason: "no_loader_node" };
	}

	const loaderNode = loaderNodes[0];
	const loaderImageWidget = loaderNode.widgets.find(
		(w: { name: string }) => w.name === "image",
	);

	if (loaderImageWidget) {
		loaderImageWidget.value = imagePath;
		if (typeof loaderImageWidget.callback === "function") {
			loaderImageWidget.callback(imagePath);
		}
	}

	comfyApp.graph.afterChange?.();
	comfyApp.graph.setDirtyCanvas(true, true);

	return { ok: true };
}
