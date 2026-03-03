import type { ComfyApp, MeldImage } from "../../../types";

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

export function injectImageToGraph(
	image: MeldImage,
	targetNodeId?: string,
): InjectImageToGraphResult {
	const comfyApp = window.app as ComfyApp;
	if (!comfyApp?.graph) {
		return { ok: false, reason: "no_app_graph" };
	}

	const imagePath = buildComfyImagePath(image);

	const isLoaderNode = (type: string | undefined) => {
		if (!type) return false;
		const t = type.replace(/\s+/g, "").toLowerCase();
		return t === "meldimageloader" || t === "loadimage";
	};

	const loaderNodes = comfyApp.graph._nodes.filter((n) => isLoaderNode(n.type));

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
	const loaderImageWidget = loaderNode.widgets.find((w) => w.name === "image");

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
