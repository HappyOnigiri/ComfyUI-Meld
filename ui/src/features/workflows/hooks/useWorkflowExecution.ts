import { useCallback } from "react";
// @ts-expect-error: ComfyUI scripts are not available in build time
import { api } from "/scripts/api.js";
import type { MeldImage } from "../../../types";
import { fetchWorkflowRaw } from "../api/workflowsApi";

export const useWorkflowExecution = () => {
	const executeWorkflow = useCallback(
		async (workflowName: string, image: MeldImage) => {
			// 1. Fetch the raw workflow JSON
			const workflow = await fetchWorkflowRaw(workflowName);

			// 2. Find the MeldImageLoader node
			let loaderNodeId: string | null = null;
			let isUIFormat = false;

			if (workflow.nodes && Array.isArray(workflow.nodes)) {
				// UI Format (saved from ComfyUI web interface)
				isUIFormat = true;
				// biome-ignore lint/suspicious/noExplicitAny: ComfyUI workflow format
				const node = (workflow.nodes as any[]).find(
					// biome-ignore lint/suspicious/noExplicitAny: ComfyUI node format
					(n: any) => n.type === "MeldImageLoader",
				);
				if (node) {
					loaderNodeId = String(node.id);
				}
			} else {
				// API Format: { "node_id": { "inputs": { ... }, "class_type": "..." } }
				// biome-ignore lint/suspicious/noExplicitAny: ComfyUI workflow format
				for (const nodeId in workflow as Record<string, any>) {
					// biome-ignore lint/suspicious/noExplicitAny: ComfyUI workflow format
					if ((workflow as any)[nodeId].class_type === "MeldImageLoader") {
						loaderNodeId = nodeId;
						break;
					}
				}
			}

			if (!loaderNodeId) {
				throw new Error(
					"Meld Image Loader node not found in the selected workflow.",
				);
			}

			// 3. Update the image input
			let imagePath = image.filename;
			if (image.subfolder) {
				imagePath = `${image.subfolder}/${image.filename}`;
			}

			if (image.type && image.type !== "input") {
				imagePath = `${imagePath} [${image.type}]`;
			}

			if (isUIFormat) {
				// For UI format, we load it into the workspace.
				// @ts-expect-error
				const comfyApp = window.app;
				await comfyApp.loadGraphData(workflow);

				// Update the node in the loaded graph
				// biome-ignore lint/suspicious/noExplicitAny: ComfyUI graph format
				const node = (comfyApp.graph._nodes as any[]).find(
					// biome-ignore lint/suspicious/noExplicitAny: ComfyUI node format
					(n: any) => String(n.id) === loaderNodeId,
				);
				if (node) {
					// biome-ignore lint/suspicious/noExplicitAny: ComfyUI widget format
					const widget = (node.widgets as any[])?.find(
						// biome-ignore lint/suspicious/noExplicitAny: ComfyUI widget format
						(w: any) => w.name === "image",
					);
					if (widget) {
						widget.value = imagePath;
					}
					comfyApp.graph.setDirtyCanvas(true, true);
				}

				await comfyApp.queuePrompt(0);
				return;
			}

			// API Format background execution
			const prompt = JSON.parse(JSON.stringify(workflow));
			prompt[loaderNodeId].inputs.image = imagePath;

			// 4. Send to /prompt
			const res = await api.fetchApi("/prompt", {
				method: "POST",
				body: JSON.stringify({
					prompt,
					client_id: api.clientId,
				}),
			});

			if (!res.ok) {
				const errorData = await res.json();
				throw new Error(errorData.error?.message || "Failed to queue workflow");
			}

			return await res.json();
		},
		[],
	);

	return { executeWorkflow };
};
