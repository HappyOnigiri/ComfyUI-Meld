import type { MaskBitmap } from "../types";

/**
 * Creates a new empty MaskBitmap with the given dimensions.
 */
export function createMaskBitmap(width: number, height: number): MaskBitmap {
	return {
		data: new Uint8ClampedArray(width * height).fill(0),
		width,
		height,
	};
}

/**
 * Stamps a rectangle onto the mask bitmap.
 */
export function stampRect(
	mask: MaskBitmap,
	x: number,
	y: number,
	w: number,
	h: number,
	value = 255,
): MaskBitmap {
	const newData = new Uint8ClampedArray(mask.data);
	const { width, height } = mask;

	const x0 = Math.max(0, Math.floor(x));
	const y0 = Math.max(0, Math.floor(y));
	const x1 = Math.min(width, Math.ceil(x + w));
	const y1 = Math.min(height, Math.ceil(y + h));

	for (let currY = y0; currY < y1; currY++) {
		const rowOffset = currY * width;
		for (let currX = x0; currX < x1; currX++) {
			newData[rowOffset + currX] = value;
		}
	}

	return { ...mask, data: newData };
}

/**
 * Converts a MaskBitmap to ImageData for drawing on a canvas.
 * @param mask The mask bitmap
 * @param color The RGB color to use for the mask (defaults to white)
 * @param alpha The alpha value to use for the mask (0-255)
 */
export function maskToImageData(
	mask: MaskBitmap,
	color: [number, number, number] = [255, 255, 255],
	alpha = 255,
): ImageData {
	const { data, width, height } = mask;
	const imageData = new ImageData(width, height);
	const pixels = imageData.data;

	for (let i = 0; i < data.length; i++) {
		const val = data[i];
		const offset = i * 4;
		if (val > 0) {
			pixels[offset] = color[0];
			pixels[offset + 1] = color[1];
			pixels[offset + 2] = color[2];
			pixels[offset + 3] = alpha;
		} else {
			pixels[offset] = 0;
			pixels[offset + 1] = 0;
			pixels[offset + 2] = 0;
			pixels[offset + 3] = 0;
		}
	}

	return imageData;
}

/**
 * Checks if the mask is empty (all zeros).
 */
export function isMaskEmpty(mask: MaskBitmap): boolean {
	return mask.data.every((v) => v === 0);
}
