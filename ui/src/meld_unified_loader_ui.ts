// @ts-expect-error
import { app } from "../../../../scripts/app.js";
import type { ComfyApp } from "./types";

app.registerExtension({
	name: "Meld.UnifiedLoader",
	async beforeRegisterNodeDef(
		_nodeType: unknown,
		nodeData: { name: string },
		_app: ComfyApp,
	) {
		if (nodeData.name !== "MeldUnifiedLoader") return;
	},
});
