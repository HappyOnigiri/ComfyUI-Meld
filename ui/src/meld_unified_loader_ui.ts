import { app } from "/scripts/app.js";
import type { ComfyApp } from "./types";

interface Widget {
	name: string;
	inputEl?: HTMLElement;
}

interface ComfyNode {
	comfyClass: string;
	widgets?: Widget[];
}

app.registerExtension({
	name: "Meld.UnifiedLoader",
	async beforeRegisterNodeDef(
		_nodeType: unknown,
		nodeData: {
			name: string;
			input?: { required?: Record<string, unknown> };
		},
		_app: ComfyApp,
	) {
		if (nodeData.name !== "MeldUnifiedLoader") return;
	},

	async nodeCreated(node: unknown) {
		function isComfyNode(n: unknown): n is ComfyNode {
			return (
				n !== null &&
				typeof n === "object" &&
				"comfyClass" in n &&
				typeof (n as Record<string, unknown>).comfyClass === "string" &&
				Array.isArray((n as Record<string, unknown>).widgets)
			);
		}

		if (!isComfyNode(node)) return;
		const comfyNode = node;
		if (comfyNode.comfyClass !== "MeldUnifiedLoader") return;

		// Function to apply subtle color indicators to widgets
		const applyStyles = () => {
			const positive = comfyNode.widgets?.find((w) => w.name === "positive");
			const negative = comfyNode.widgets?.find((w) => w.name === "negative");

			if (positive) {
				if (positive.inputEl) {
					positive.inputEl.style.borderLeft = "4px solid var(--comfy-input-text-active, #44bb44)";
					positive.inputEl.style.paddingLeft = "8px";
				}
			}

			if (negative) {
				if (negative.inputEl) {
					negative.inputEl.style.borderLeft = "4px solid var(--error-color, #ff4444)";
					negative.inputEl.style.paddingLeft = "8px";
				}
			}
		};

		// Apply immediately and with short delays to ensure DOM readiness
		applyStyles();
		setTimeout(applyStyles, 1);
		setTimeout(applyStyles, 100);
	},
});
