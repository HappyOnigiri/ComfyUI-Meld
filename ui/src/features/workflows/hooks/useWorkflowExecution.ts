import { useCallback } from "react";
import { parseJsonResponse } from "../../../api";
import { logger } from "../../../logger";
import type { ComfyApi, ComfyApp, MeldImage } from "../../../types";
import { fetchWorkflowRaw } from "../api/workflowsApi";
import { isLoaderNodeType, isMaskNodeType } from "../utils/nodeTypePredicates";

interface ComfyNode {
	id: string | number;
	type?: string;
	class_type?: string;
	widgets?: {
		name: string;
		value: unknown;
		callback?: (value: unknown) => void;
	}[];
}

const isGraphNodeArray = (value: unknown): value is ComfyNode[] =>
	Array.isArray(value) &&
	value.every(
		(node) => typeof node === "object" && node !== null && "id" in node && "type" in node,
	);

export const useWorkflowExecution = () => {
	const executeWorkflow = useCallback(
		async (
			workflowName: string,
			image: MeldImage,
			maskFilename?: string,
			targetLoaderNodeId?: string,
		) => {
			if (!workflowName || !image) return;
			logger.log("executeWorkflow called:", {
				workflowName,
				imageId: image.id,
				maskFilename,
				targetLoaderNodeId,
			});
			// 1. Fetch the raw workflow JSON
			const workflow = await fetchWorkflowRaw(workflowName);
			logger.log("Workflow fetched:", workflowName);

			// 2. Find the MeldImageLoader, LoadImage, and LoadImageMask nodes
			let loaderNodeId: string | null = targetLoaderNodeId || null;
			let maskNodeId: string | null = null;
			let isUIFormat = false;

			if (workflow.nodes && Array.isArray(workflow.nodes)) {
				// UI Format (saved from ComfyUI web interface)
				isUIFormat = true;
				if (!loaderNodeId) {
					const loaderNode = (workflow.nodes as ComfyNode[]).find((n) => isLoaderNodeType(n.type));
					if (loaderNode) {
						loaderNodeId = String(loaderNode.id);
					}
				}

				const maskNode = (workflow.nodes as ComfyNode[]).find((n) => isMaskNodeType(n.type));
				if (maskNode) {
					maskNodeId = String(maskNode.id);
				}
			} else {
				// API Format: { "node_id": { "inputs": { ... }, "class_type": "..." } }
				if (!loaderNodeId) {
					for (const nodeId in workflow) {
						const node = workflow[nodeId] as ComfyNode;
						if (isLoaderNodeType(node.class_type)) {
							loaderNodeId = nodeId;
							break;
						}
					}
				}

				for (const nodeId in workflow) {
					const node = workflow[nodeId] as ComfyNode;
					if (isMaskNodeType(node.class_type)) {
						maskNodeId = nodeId;
						break;
					}
				}
			}

			logger.log("Node IDs found:", {
				loaderNodeId,
				maskNodeId,
				isUIFormat,
			});

			if (!loaderNodeId) {
				throw new Error("Meld Image Loader or Load Image node not found in the selected workflow.");
			}

			if (maskFilename && !maskNodeId) {
				logger.warn("Mask filename provided but no mask node found in workflow JSON");
				throw new Error(
					"Load Image (as Mask) node not found in the selected workflow, but a mask was provided.",
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
				const appCandidate: unknown = window.app;
				if (
					typeof appCandidate !== "object" ||
					appCandidate === null ||
					!("graph" in appCandidate)
				) {
					throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
				}
				const comfyApp = appCandidate as ComfyApp;
				if (!comfyApp.graph || !isGraphNodeArray(comfyApp.graph._nodes)) {
					throw new Error("Active ComfyUI graph is not available. Please open a workflow first.");
				}

				// 1. Try to find and switch to an existing tab first
				const baseName = workflowName.replace(/\.json$/i, "");
				let tabFound = false;

				// Search in the new Vue UI tabs
				const tabs = document.querySelectorAll(".workflow-tab");
				for (const tab of Array.from(tabs)) {
					const label = tab.querySelector(".workflow-label");
					const labelText = label?.textContent?.trim() || tab.textContent?.trim() || "";

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
				const activeNodes = comfyApp.graph._nodes;
				logger.log("Active graph nodes count:", activeNodes.length);

				const loaderNode = activeNodes.find(
					(n) => String(n.id) === loaderNodeId || isLoaderNodeType(n.type),
				);

				if (loaderNode) {
					const widget = loaderNode.widgets?.find((w) => w.name === "image");
					logger.log("Updating loader node widget:", {
						nodeId: loaderNode.id,
						type: loaderNode.type,
						imagePath,
					});
					if (widget) {
						widget.value = imagePath;
						// Call callback if exists (like in standard ComfyUI widgets)
						if (typeof widget.callback === "function") {
							widget.callback(imagePath);
						}
					}
				} else {
					logger.warn(
						"Loader node (MeldImageLoader/LoadImage) not found in active graph after loading",
					);
				}

				if (maskFilename) {
					const maskNode = activeNodes.find(
						(n) => String(n.id) === maskNodeId || isMaskNodeType(n.type),
					);
					logger.log("Updating mask node widget:", {
						nodeId: maskNode?.id,
						maskFilename,
					});
					if (maskNode) {
						const imageWidget = maskNode.widgets?.find((w) => w.name === "image");
						if (imageWidget) {
							imageWidget.value = `${maskFilename} [temp]`;
						}
						const channelWidget = maskNode.widgets?.find((w) => w.name === "channel");
						if (channelWidget) {
							channelWidget.value = "red";
						}
					} else {
						logger.warn("LoadImageMask not found in active graph after loading");
					}
				}

				comfyApp.graph.setDirtyCanvas(true, true);

				// 4. Run the workflow
				try {
					if (typeof comfyApp.queuePrompt !== "function") {
						throw new Error("queuePrompt is not available.");
					}
					await comfyApp.queuePrompt(0);
					return;
				} catch (e) {
					logger.error("Failed to queue workflow:", e);
					throw new Error("Failed to queue workflow. Check logs for details.");
				}
			}

			// API Format background execution
			const prompt = JSON.parse(JSON.stringify(workflow));
			prompt[loaderNodeId].inputs.image = imagePath;
			if (maskFilename && maskNodeId) {
				prompt[maskNodeId].inputs.image = `${maskFilename} [temp]`;
				prompt[maskNodeId].inputs.channel = "red";
			}

			// 4. Send to /prompt
			const comfyApi: unknown = window.api;
			const hasValidFetchApi =
				typeof comfyApi === "object" &&
				comfyApi !== null &&
				"fetchApi" in comfyApi &&
				typeof (
					comfyApi as {
						fetchApi?: unknown;
					}
				).fetchApi === "function";
			if (!hasValidFetchApi) {
				throw new Error("ComfyUI API is not available. Please reload ComfyUI and try again.");
			}
			const typedApi = comfyApi as ComfyApi;
			const res = await typedApi.fetchApi("/prompt", {
				method: "POST",
				body: JSON.stringify({
					prompt,
					client_id: typeof typedApi.clientId === "string" ? typedApi.clientId : undefined,
				}),
			});

			return parseJsonResponse<{ prompt_id: string; number: number }>(res);
		},
		[],
	);

	return { executeWorkflow };
};
