import { useCallback } from "react";
// @ts-expect-error: ComfyUI scripts are not available in build time
import { api } from "/scripts/api.js";
import type { MeldImage } from "../../../types";
import { fetchWorkflowRaw } from "../api/workflowsApi";

interface ComfyNode {
	id: string | number;
	type?: string;
	class_type?: string;
	widgets?: { name: string; value: unknown }[];
}

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
				const node = (workflow.nodes as ComfyNode[]).find(
					(n) => n.type === "MeldImageLoader",
				);
				if (node) {
					loaderNodeId = String(node.id);
				}
			} else {
				// API Format: { "node_id": { "inputs": { ... }, "class_type": "..." } }
				for (const nodeId in workflow) {
					const node = workflow[nodeId] as ComfyNode;
					if (node.class_type === "MeldImageLoader") {
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
				// @ts-expect-error
				const comfyApp = window.app;

				// 1. Try to find and switch to an existing tab first
				const baseName = workflowName.replace(/\.json$/i, "");
				let tabFound = false;

				// Search in the new Vue UI tabs
				const tabs = document.querySelectorAll(".workflow-tab");
				for (const tab of Array.from(tabs)) {
					const label = tab.querySelector(".workflow-label");
					const labelText =
						label?.textContent?.trim() || tab.textContent?.trim() || "";

					// Match exact name, name with .json, or name with status dot (e.g. "resample-image \u2022")
					if (
						labelText === baseName ||
						labelText === workflowName ||
						labelText.startsWith(`${baseName} `) ||
						labelText.startsWith(`${baseName}\u2022`)
					) {
						(tab as HTMLElement).click();
						tabFound = true;
						break;
					}
				}

				// 2. If not found, load it as a new tab with the correct name
				if (!tabFound) {
					// Arguments: (data, clean, restore_view, workflow_name)
					await comfyApp.loadGraphData(workflow, true, true, workflowName);
				}

				// Give the UI a moment to sync the active graph
				await new Promise((r) => setTimeout(r, 200));

				// 3. Update the node in the NOW ACTIVE graph
				const activeNodes = comfyApp.graph._nodes as ComfyNode[];
				const node = activeNodes.find(
					(n) => String(n.id) === loaderNodeId || n.type === "MeldImageLoader",
				);

				if (node) {
					const widget = node.widgets?.find((w) => w.name === "image");
					if (widget) {
						widget.value = imagePath;
					}
					comfyApp.graph.setDirtyCanvas(true, true);
				}

				// 4. Run the workflow
				try {
					await comfyApp.queuePrompt(0);
					return;
				} catch (e) {
					console.error("Failed to queue workflow:", e);
					throw new Error(
						"Failed to queue workflow. Check the console for details.",
					);
				}
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
