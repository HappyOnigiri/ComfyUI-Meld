import type { MeldImage } from "../../types";

export type MaskMode = "apply" | "run";

export type MaskTool = "rect" | "ellipse" | "lasso";

export interface Point {
	x: number;
	y: number;
}

export interface MaskSelection {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface MaskBitmap {
	data: Uint8ClampedArray;
	width: number;
	height: number;
}

export interface MaskEditorProps {
	image: MeldImage;
	mode: MaskMode;
	onClose: () => void;
}
