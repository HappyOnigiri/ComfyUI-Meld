import type { MeldImage } from "../../types";

export type MaskMode = "apply" | "run";

export interface MaskSelection {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface MaskEditorProps {
	image: MeldImage;
	mode: MaskMode;
	onClose: () => void;
}
