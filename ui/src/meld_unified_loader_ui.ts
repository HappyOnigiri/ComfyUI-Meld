// @ts-expect-error
import { app } from "../../../scripts/app.js";
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

	async nodeCreated(node: ComfyNode) {
		if (node.comfyClass !== "MeldUnifiedLoader") return;

		// Function to apply subtle color indicators to widgets
		const applyStyles = () => {
			const positive = node.widgets?.find((w) => w.name === "positive");
			const negative = node.widgets?.find((w) => w.name === "negative");

			if (positive) {
				if (positive.inputEl) {
					positive.inputEl.style.borderLeft = "4px solid #44bb44";
					positive.inputEl.style.paddingLeft = "8px";
				}
			}

			if (negative) {
				if (negative.inputEl) {
					negative.inputEl.style.borderLeft = "4px solid #ff4444";
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
