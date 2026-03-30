import { type RefObject, useCallback, useEffect, useRef, useState } from "react";
import type { MaskBitmap, MaskTool, Point } from "../types";
import { createMaskBitmap, maskToImageData, stampShape } from "../utils/maskUtils";

const isMaskTool = (value: string | null): value is MaskTool => {
	return value === "rect" || value === "ellipse" || value === "lasso";
};

export interface UseMaskCanvasParams {
	canvasRef: RefObject<HTMLCanvasElement>;
	overlayRef: RefObject<HTMLDivElement>;
	imageRef: RefObject<HTMLImageElement>;
	currentMask: MaskBitmap | null;
	onMaskStamp: (newMask: MaskBitmap) => void;
}

export interface UseMaskCanvasReturn {
	activeTool: MaskTool;
	setActiveTool: (tool: MaskTool) => void;
	scale: number;
	pan: { x: number; y: number };
	handleZoomIn: () => void;
	handleZoomOut: () => void;
	handleResetZoom: () => void;
	isPanning: boolean;
	isPanDragging: boolean;
	handleMouseDown: (e: React.MouseEvent) => void;
	handleClear: () => void;
}

export function useMaskCanvas({
	canvasRef,
	overlayRef,
	imageRef,
	currentMask,
	onMaskStamp,
}: UseMaskCanvasParams): UseMaskCanvasReturn {
	const maskOffscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

	const [isDragging, setIsDragging] = useState(false);
	const [activeTool, setActiveToolState] = useState<MaskTool>(() => {
		try {
			const saved =
				typeof localStorage !== "undefined" ? localStorage.getItem("meld-mask-tool") : null;
			return isMaskTool(saved) ? saved : "rect";
		} catch (_e) {
			return "rect";
		}
	});

	const setActiveTool = useCallback((tool: MaskTool) => {
		setActiveToolState(tool);
	}, []);

	useEffect(() => {
		try {
			if (typeof localStorage !== "undefined" && isMaskTool(activeTool)) {
				localStorage.setItem("meld-mask-tool", activeTool);
			}
		} catch (_e) {
			// Ignore localStorage errors
		}
	}, [activeTool]);

	const [startPos, setStartPos] = useState({ x: 0, y: 0 });
	const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

	// Implementation Requirements: lassoPath is stored in a ref (not state) to avoid
	// O(n) array copies on every mousemove re-render during lasso drawing.
	// draw() is called directly via drawRef after each push.
	const lassoPathRef = useRef<Point[]>([]);

	// Zoom and Pan states
	const [scale, setScale] = useState(1);
	const [pan, setPan] = useState({ x: 0, y: 0 });
	const [isPanning, setIsPanning] = useState(false);
	const [isPanDragging, setIsPanDragging] = useState(false);
	const panStartRef = useRef<{
		panX: number;
		panY: number;
		clientX: number;
		clientY: number;
	} | null>(null);

	const lastDragEndTimeRef = useRef(0);

	const getBaseImageBounds = useCallback(() => {
		const img = imageRef.current;
		const container = overlayRef.current;
		if (!img || !container) return null;

		const rect = container.getBoundingClientRect();
		const naturalWidth = img.naturalWidth;
		const naturalHeight = img.naturalHeight;
		if (!naturalWidth || !naturalHeight) return null;

		const imageRatio = naturalWidth / naturalHeight;
		const containerRatio = rect.width / rect.height;

		let displayedWidth: number;
		let displayedHeight: number;
		let offsetX = 0;
		let offsetY = 0;

		if (imageRatio > containerRatio) {
			displayedWidth = rect.width;
			displayedHeight = rect.width / imageRatio;
			offsetY = (rect.height - displayedHeight) / 2;
		} else {
			displayedHeight = rect.height;
			displayedWidth = rect.height * imageRatio;
			offsetX = (rect.width - displayedWidth) / 2;
		}

		return {
			left: offsetX,
			top: offsetY,
			width: displayedWidth,
			height: displayedHeight,
		};
	}, [imageRef, overlayRef]);

	const getCenteredPan = useCallback(
		(
			overlay: HTMLDivElement | null,
			prevPan: { x: number; y: number },
			prevScale: number,
			nextScale: number,
		) => {
			if (!overlay) return prevPan;
			const rect = overlay.getBoundingClientRect();
			const cx = rect.width / 2;
			const cy = rect.height / 2;
			const pos = {
				x: (cx - prevPan.x) / prevScale,
				y: (cy - prevPan.y) / prevScale,
			};
			return { x: cx - pos.x * nextScale, y: cy - pos.y * nextScale };
		},
		[],
	);

	const handleZoomIn = useCallback(() => {
		setScale((prev) => {
			const nextScale = Math.min(prev * 1.2, 20);
			setPan((prevPan) => getCenteredPan(overlayRef.current, prevPan, prev, nextScale));
			return nextScale;
		});
	}, [getCenteredPan, overlayRef]);

	const handleZoomOut = useCallback(() => {
		setScale((prev) => {
			const nextScale = Math.max(0.1, prev / 1.2);
			setPan((prevPan) => getCenteredPan(overlayRef.current, prevPan, prev, nextScale));
			return nextScale;
		});
	}, [getCenteredPan, overlayRef]);

	const handleResetZoom = useCallback(() => {
		setScale(1);
		setPan({ x: 0, y: 0 });
	}, []);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const style = getComputedStyle(document.documentElement);
		const fillColor =
			style.getPropertyValue("--comfy-input-bg-active") ||
			style.getPropertyValue("--comfy-input-bg") ||
			style.getPropertyValue("--bg-color") ||
			"var(--comfy-input-bg)";

		// 1. Draw existing mask from offscreen canvas
		const bounds = getBaseImageBounds();
		if (maskOffscreenCanvasRef.current && bounds) {
			ctx.save();
			ctx.globalAlpha = 0.5; // Semi-transparent for confirmed mask
			ctx.drawImage(
				maskOffscreenCanvasRef.current,
				bounds.left,
				bounds.top,
				bounds.width,
				bounds.height,
			);
			ctx.restore();
		}

		// 2. Draw current dragging selection
		if (isDragging) {
			const x = Math.min(startPos.x, currentPos.x);
			const y = Math.min(startPos.y, currentPos.y);
			const w = Math.abs(startPos.x - currentPos.x);
			const h = Math.abs(startPos.y - currentPos.y);

			ctx.save();
			ctx.globalAlpha = 0.3;
			ctx.fillStyle = fillColor;
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 5]);

			ctx.beginPath();
			if (activeTool === "rect") {
				ctx.rect(x, y, w, h);
			} else if (activeTool === "ellipse") {
				const centerX = x + w / 2;
				const centerY = y + h / 2;
				ctx.ellipse(centerX, centerY, w / 2, h / 2, 0, 0, 2 * Math.PI);
			} else if (activeTool === "lasso" && lassoPathRef.current.length > 1) {
				const firstPoint = lassoPathRef.current[0];
				if (firstPoint) {
					ctx.moveTo(firstPoint.x, firstPoint.y);
					for (let i = 1; i < lassoPathRef.current.length; i++) {
						const point = lassoPathRef.current[i];
						if (!point) continue;
						ctx.lineTo(point.x, point.y);
					}
					ctx.closePath();
				}
			}

			ctx.fill();
			ctx.globalAlpha = 1.0;
			ctx.stroke();
			ctx.restore();
		}
	}, [isDragging, startPos, currentPos, activeTool, getBaseImageBounds, canvasRef]);

	// Implementation Requirements: drawRef always holds the latest draw function so
	// the ResizeObserver can call it without being listed as an effect dependency.
	// This prevents ResizeObserver from disconnecting/reconnecting on every render.
	const drawRef = useRef(draw);
	useEffect(() => {
		drawRef.current = draw;
	});

	// Update offscreen canvas when current mask changes
	useEffect(() => {
		if (!currentMask) return;

		if (!maskOffscreenCanvasRef.current) {
			maskOffscreenCanvasRef.current = document.createElement("canvas");
		}
		const offCanvas = maskOffscreenCanvasRef.current;
		offCanvas.width = currentMask.width;
		offCanvas.height = currentMask.height;

		const ctx = offCanvas.getContext("2d");
		if (!ctx) return;

		const imageData = maskToImageData(currentMask, [255, 255, 255], 255);
		ctx.putImageData(imageData, 0, 0);
		draw();
	}, [currentMask, draw]);

	// Ensure real-time drawing during drag operations
	useEffect(() => {
		if (isDragging) {
			draw();
		}
	}, [isDragging, draw]);

	// Wheel zoom
	useEffect(() => {
		const overlay = overlayRef.current;
		if (!overlay) return;

		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();
			const zoomFactor = e.deltaY > 0 ? 1 / 1.1 : 1.1;
			setScale((prevScale) => {
				const nextScale = Math.min(Math.max(0.1, prevScale * zoomFactor), 20);
				setPan((prevPan) => {
					const rect = overlay.getBoundingClientRect();
					const mouseX = e.clientX - rect.left;
					const mouseY = e.clientY - rect.top;
					const pos = {
						x: (mouseX - prevPan.x) / prevScale,
						y: (mouseY - prevPan.y) / prevScale,
					};
					return {
						x: mouseX - pos.x * nextScale,
						y: mouseY - pos.y * nextScale,
					};
				});
				return nextScale;
			});
		};

		overlay.addEventListener("wheel", handleWheel, { passive: false });
		return () => overlay.removeEventListener("wheel", handleWheel);
	}, [overlayRef]);

	// Pan drag
	useEffect(() => {
		if (!isPanDragging) return;
		const onMouseMove = (e: MouseEvent) => {
			if (panStartRef.current) {
				const dx = e.clientX - panStartRef.current.clientX;
				const dy = e.clientY - panStartRef.current.clientY;
				setPan({
					x: panStartRef.current.panX + dx,
					y: panStartRef.current.panY + dy,
				});
			}
		};
		const onMouseUp = () => {
			setIsPanDragging(false);
			panStartRef.current = null;
		};
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
		return () => {
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};
	}, [isPanDragging]);

	// Implementation Requirements: ResizeObserver uses drawRef.current() instead of
	// draw directly, so it does not need draw in its dependency array. This prevents
	// the observer from disconnecting/reconnecting on every mousemove re-render.
	useEffect(() => {
		const updateSize = () => {
			if (overlayRef.current && canvasRef.current) {
				canvasRef.current.width = overlayRef.current.clientWidth;
				canvasRef.current.height = overlayRef.current.clientHeight;
				drawRef.current();
			}
		};

		const observer = new ResizeObserver(updateSize);
		if (overlayRef.current) {
			observer.observe(overlayRef.current);
		}
		updateSize();

		return () => observer.disconnect();
	}, [overlayRef, canvasRef]);

	const handleMouseDown = useCallback(
		(e: React.MouseEvent) => {
			const isRightClick = e.button === 2;
			const isMiddleClick = e.button === 1;
			const isSpacePanning = isPanning && e.button === 0;

			if (isRightClick || isMiddleClick || isSpacePanning) {
				e.preventDefault();
				e.stopPropagation();
				panStartRef.current = {
					panX: pan.x,
					panY: pan.y,
					clientX: e.clientX,
					clientY: e.clientY,
				};
				setIsPanDragging(true);
				return;
			}

			if (e.button !== 0 || isDragging || Date.now() - lastDragEndTimeRef.current < 100) return;
			e.preventDefault();
			const bounds = getBaseImageBounds();
			const rect = overlayRef.current?.getBoundingClientRect();
			if (!bounds || !rect) return;

			setIsDragging(true);

			const basePos = {
				x: (e.clientX - rect.left - pan.x) / scale,
				y: (e.clientY - rect.top - pan.y) / scale,
			};

			// Clamp coordinates to image bounds
			const x = Math.max(bounds.left, Math.min(basePos.x, bounds.left + bounds.width));
			const y = Math.max(bounds.top, Math.min(basePos.y, bounds.top + bounds.height));
			setStartPos({ x, y });
			setCurrentPos({ x, y });
			if (activeTool === "lasso") {
				lassoPathRef.current = [{ x, y }];
			} else {
				lassoPathRef.current = [];
			}
		},
		[isPanning, pan, isDragging, getBaseImageBounds, overlayRef, scale, activeTool],
	);

	// Drag mouse move/up
	useEffect(() => {
		if (!isDragging) return;

		const handleWindowMouseMove = (e: MouseEvent) => {
			const bounds = getBaseImageBounds();
			const rect = overlayRef.current?.getBoundingClientRect();
			if (!bounds || !rect) return;

			// Implementation Requirements: Clamp coordinates to the image bounds
			// to ensure selection stays within the actual image area.
			const basePos = {
				x: (e.clientX - rect.left - pan.x) / scale,
				y: (e.clientY - rect.top - pan.y) / scale,
			};
			const x = Math.max(bounds.left, Math.min(basePos.x, bounds.left + bounds.width));
			const y = Math.max(bounds.top, Math.min(basePos.y, bounds.top + bounds.height));
			setCurrentPos({ x, y });
			if (activeTool === "lasso") {
				// Implementation Requirements: Push to ref (O(1)) instead of spreading
				// into state (O(n)) to avoid performance degradation on long lasso paths.
				// drawRef.current() is called directly to trigger a redraw without a state update.
				lassoPathRef.current.push({ x, y });
				drawRef.current();
			}
		};

		const handleWindowMouseUp = (e: MouseEvent) => {
			const bounds = getBaseImageBounds();
			const rect = overlayRef.current?.getBoundingClientRect();
			if (bounds && rect && currentMask && imageRef.current) {
				const basePos = {
					x: (e.clientX - rect.left - pan.x) / scale,
					y: (e.clientY - rect.top - pan.y) / scale,
				};
				const x = Math.max(bounds.left, Math.min(basePos.x, bounds.left + bounds.width));
				const y = Math.max(bounds.top, Math.min(basePos.y, bounds.top + bounds.height));

				const finalX = Math.min(startPos.x, x);
				const finalY = Math.min(startPos.y, y);
				const finalW = Math.abs(startPos.x - x);
				const finalH = Math.abs(startPos.y - y);

				const isLasso = activeTool === "lasso";
				const hasEnoughMovement =
					finalW > 5 || finalH > 5 || (isLasso && lassoPathRef.current.length > 2);

				if (hasEnoughMovement) {
					// Convert overlay coords to natural coords
					const naturalWidth = imageRef.current.naturalWidth;
					const naturalHeight = imageRef.current.naturalHeight;

					const scaleX = naturalWidth / bounds.width;
					const scaleY = naturalHeight / bounds.height;

					const updatedMask = stampShape(currentMask, (ctx) => {
						if (activeTool === "rect") {
							const relX = (finalX - bounds.left) * scaleX;
							const relY = (finalY - bounds.top) * scaleY;
							const relW = finalW * scaleX;
							const relH = finalH * scaleY;
							ctx.rect(relX, relY, relW, relH);
						} else if (activeTool === "ellipse") {
							const relX = (finalX - bounds.left) * scaleX;
							const relY = (finalY - bounds.top) * scaleY;
							const relW = finalW * scaleX;
							const relH = finalH * scaleY;
							const centerX = relX + relW / 2;
							const centerY = relY + relH / 2;
							ctx.ellipse(centerX, centerY, relW / 2, relH / 2, 0, 0, 2 * Math.PI);
						} else if (activeTool === "lasso") {
							if (lassoPathRef.current.length > 2) {
								const startPoint = lassoPathRef.current[0];
								if (!startPoint) return;
								ctx.moveTo(
									(startPoint.x - bounds.left) * scaleX,
									(startPoint.y - bounds.top) * scaleY,
								);
								for (let i = 1; i < lassoPathRef.current.length; i++) {
									const point = lassoPathRef.current[i];
									if (!point) continue;
									ctx.lineTo((point.x - bounds.left) * scaleX, (point.y - bounds.top) * scaleY);
								}
								ctx.closePath();
							}
						}
					});

					onMaskStamp(updatedMask);
				}
			}
			lastDragEndTimeRef.current = Date.now();
			setIsDragging(false);
			lassoPathRef.current = [];
		};

		window.addEventListener("mousemove", handleWindowMouseMove);
		window.addEventListener("mouseup", handleWindowMouseUp);

		return () => {
			window.removeEventListener("mousemove", handleWindowMouseMove);
			window.removeEventListener("mouseup", handleWindowMouseUp);
		};
	}, [
		isDragging,
		startPos.x,
		startPos.y,
		getBaseImageBounds,
		currentMask,
		activeTool,
		pan.x,
		pan.y,
		scale,
		imageRef,
		overlayRef,
		onMaskStamp,
	]);

	// Keyboard shortcuts (Space for pan only; Escape is handled by the component)
	useEffect(() => {
		const isInteractiveTarget = (target: EventTarget | null) => {
			if (!target) return false;
			const el = target as HTMLElement;
			const tagName = el.tagName;
			return (
				tagName === "INPUT" ||
				tagName === "TEXTAREA" ||
				tagName === "BUTTON" ||
				tagName === "SELECT" ||
				tagName === "A" ||
				el.isContentEditable ||
				(el.tabIndex != null && el.tabIndex >= 0)
			);
		};

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === "Space" && !e.repeat) {
				if (!isInteractiveTarget(e.target)) {
					e.preventDefault();
					setIsPanning(true);
				}
			}
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			if (e.code === "Space") {
				if (!isInteractiveTarget(e.target)) {
					e.preventDefault();
					setIsPanning(false);
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown, { capture: true });
		window.addEventListener("keyup", handleKeyUp, { capture: true });
		return () => {
			window.removeEventListener("keydown", handleKeyDown, { capture: true });
			window.removeEventListener("keyup", handleKeyUp, { capture: true });
		};
	}, []);

	const handleClear = useCallback(() => {
		if (imageRef.current) {
			const emptyMask = createMaskBitmap(
				imageRef.current.naturalWidth,
				imageRef.current.naturalHeight,
			);
			onMaskStamp(emptyMask);
		}
	}, [imageRef, onMaskStamp]);

	return {
		activeTool,
		setActiveTool,
		scale,
		pan,
		handleZoomIn,
		handleZoomOut,
		handleResetZoom,
		isPanning,
		isPanDragging,
		handleMouseDown,
		handleClear,
	};
}
