import { Check, Loader2, Play, Undo2, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// @ts-expect-error: ComfyUI scripts are not available in build time
import { api } from "/scripts/api.js";
import { useGallery } from "../../../store/GalleryContext";
import { getImageViewUrl } from "../../../utils/url";
import { useMaskInjection } from "../hooks/useMaskInjection";
import type { MaskBitmap, MaskMode, MaskSelection } from "../types";
import {
	createMaskBitmap,
	isMaskEmpty,
	maskToImageData,
	stampRect,
} from "../utils/maskUtils";

interface MaskEditorModalProps {
	imageId: number;
	mode: MaskMode;
	onClose: () => void;
}

export const MaskEditorModal: React.FC<MaskEditorModalProps> = ({
	imageId,
	mode,
	onClose,
}) => {
	const { state, dispatch } = useGallery();
	const image = state.images.find((img) => img.id === imageId);
	const { injectMaskToGraph } = useMaskInjection();

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const maskOffscreenCanvasRef = useRef<HTMLCanvasElement | null>(null);

	const [isDragging, setIsDragging] = useState(false);
	const [startPos, setStartPos] = useState({ x: 0, y: 0 });
	const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
	const [_selection, setSelection] = useState<MaskSelection | null>(null);
	const [isUploading, setIsUploading] = useState(false);

	const getImageBounds = useCallback(() => {
		const img = imageRef.current;
		const container = overlayRef.current;
		if (!img || !container) return null;

		const rect = container.getBoundingClientRect();
		const imgRect = img.getBoundingClientRect();

		const naturalWidth = img.naturalWidth;
		const naturalHeight = img.naturalHeight;
		if (!naturalWidth || !naturalHeight) return null;

		const imageRatio = naturalWidth / naturalHeight;
		const containerRatio = imgRect.width / imgRect.height;

		let displayedWidth: number;
		let displayedHeight: number;
		let offsetX = 0;
		let offsetY = 0;

		if (imageRatio > containerRatio) {
			displayedWidth = imgRect.width;
			displayedHeight = imgRect.width / imageRatio;
			offsetY = (imgRect.height - displayedHeight) / 2;
		} else {
			displayedHeight = imgRect.height;
			displayedWidth = imgRect.height * imageRatio;
			offsetX = (imgRect.width - displayedWidth) / 2;
		}

		return {
			left: imgRect.left - rect.left + offsetX,
			top: imgRect.top - rect.top + offsetY,
			width: displayedWidth,
			height: displayedHeight,
		};
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
		const bounds = getImageBounds();
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

			// Add semi-transparent fill while dragging
			ctx.save();
			ctx.globalAlpha = 0.3;
			ctx.fillStyle = fillColor;
			ctx.fillRect(x, y, w, h);
			ctx.restore();

			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 5]);
			ctx.strokeRect(x, y, w, h);
		}
	}, [isDragging, startPos, currentPos, getImageBounds]);

	// Mask state with history for Undo
	const [maskHistory, setMaskHistory] = useState<MaskBitmap[]>([]);
	const currentMask = useMemo(() => {
		if (maskHistory.length > 0) return maskHistory[maskHistory.length - 1];
		if (imageRef.current) {
			return createMaskBitmap(
				imageRef.current.naturalWidth,
				imageRef.current.naturalHeight,
			);
		}
		return null;
	}, [maskHistory]);

	// Initialize mask history when image is loaded
	useEffect(() => {
		if (imageRef.current?.naturalWidth && maskHistory.length === 0) {
			setMaskHistory([
				createMaskBitmap(
					imageRef.current.naturalWidth,
					imageRef.current.naturalHeight,
				),
			]);
		}
	}, [maskHistory.length]);

	const overlayMouseDownRef = useRef(false);
	const lastDragEndTimeRef = useRef(0);

	const handleOverlayMouseDown = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	};

	const handleOverlayMouseUp = (e: React.MouseEvent) => {
		if (
			e.target === e.currentTarget &&
			overlayMouseDownRef.current &&
			!isDragging
		) {
			onClose();
		}
		overlayMouseDownRef.current = false;
	};

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

	useEffect(() => {
		const updateSize = () => {
			if (overlayRef.current && canvasRef.current) {
				canvasRef.current.width = overlayRef.current.clientWidth;
				canvasRef.current.height = overlayRef.current.clientHeight;
				draw();
			}
		};

		const observer = new ResizeObserver(updateSize);
		if (overlayRef.current) {
			observer.observe(overlayRef.current);
		}
		updateSize();

		return () => observer.disconnect();
	}, [draw]);

	const handleMouseDown = (e: React.MouseEvent) => {
		if (
			e.button !== 0 ||
			isDragging ||
			isUploading ||
			Date.now() - lastDragEndTimeRef.current < 100
		)
			return;
		e.preventDefault();
		const bounds = getImageBounds();
		const rect = overlayRef.current?.getBoundingClientRect();
		if (!bounds || !rect) return;

		setIsDragging(true);
		// Clamp coordinates to image bounds
		const x = Math.max(
			bounds.left,
			Math.min(e.clientX - rect.left, bounds.left + bounds.width),
		);
		const y = Math.max(
			bounds.top,
			Math.min(e.clientY - rect.top, bounds.top + bounds.height),
		);
		setStartPos({ x, y });
		setCurrentPos({ x, y });
		setSelection(null);
	};

	useEffect(() => {
		if (!isDragging) return;

		const handleWindowMouseMove = (e: MouseEvent) => {
			const bounds = getImageBounds();
			const rect = overlayRef.current?.getBoundingClientRect();
			if (!bounds || !rect) return;

			// Implementation Requirements: Clamp coordinates to the image bounds
			// to ensure selection stays within the actual image area.
			const x = Math.max(
				bounds.left,
				Math.min(e.clientX - rect.left, bounds.left + bounds.width),
			);
			const y = Math.max(
				bounds.top,
				Math.min(e.clientY - rect.top, bounds.top + bounds.height),
			);
			setCurrentPos({ x, y });
		};

		const handleWindowMouseUp = (e: MouseEvent) => {
			const bounds = getImageBounds();
			const rect = overlayRef.current?.getBoundingClientRect();
			if (bounds && rect && currentMask && imageRef.current) {
				const x = Math.max(
					bounds.left,
					Math.min(e.clientX - rect.left, bounds.left + bounds.width),
				);
				const y = Math.max(
					bounds.top,
					Math.min(e.clientY - rect.top, bounds.top + bounds.height),
				);

				const finalX = Math.min(startPos.x, x);
				const finalY = Math.min(startPos.y, y);
				const finalW = Math.abs(startPos.x - x);
				const finalH = Math.abs(startPos.y - y);

				if (finalW > 5 && finalH > 5) {
					// Convert overlay coords to natural coords
					const naturalWidth = imageRef.current.naturalWidth;
					const naturalHeight = imageRef.current.naturalHeight;

					const scaleX = naturalWidth / bounds.width;
					const scaleY = naturalHeight / bounds.height;

					const relX = (finalX - bounds.left) * scaleX;
					const relY = (finalY - bounds.top) * scaleY;
					const relW = finalW * scaleX;
					const relH = finalH * scaleY;

					const updatedMask = stampRect(
						currentMask,
						relX,
						relY,
						relW,
						relH,
						255,
					);
					setMaskHistory((prev) => [...prev, updatedMask]);
				}
			}
			lastDragEndTimeRef.current = Date.now();
			setIsDragging(false);
		};

		window.addEventListener("mousemove", handleWindowMouseMove);
		window.addEventListener("mouseup", handleWindowMouseUp);

		return () => {
			window.removeEventListener("mousemove", handleWindowMouseMove);
			window.removeEventListener("mouseup", handleWindowMouseUp);
		};
	}, [isDragging, startPos.x, startPos.y, getImageBounds, currentMask]);

	const handleUndo = useCallback(() => {
		if (maskHistory.length > 1) {
			setMaskHistory((prev) => prev.slice(0, -1));
		}
	}, [maskHistory.length]);

	// Keyboard shortcuts
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Cmd+Z (Mac) or Ctrl+Z (Windows/Linux)
			if ((e.metaKey || e.ctrlKey) && e.key === "z") {
				e.preventDefault();
				handleUndo();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [handleUndo]);

	const handleClear = () => {
		if (imageRef.current) {
			const emptyMask = createMaskBitmap(
				imageRef.current.naturalWidth,
				imageRef.current.naturalHeight,
			);
			setMaskHistory((prev) => [...prev, emptyMask]);
		}
	};

	const uploadMask = async (): Promise<string | null> => {
		if (!currentMask || !imageRef.current) return null;

		setIsUploading(true);
		try {
			const { width, height } = currentMask;
			const maskCanvas = document.createElement("canvas");
			maskCanvas.width = width;
			maskCanvas.height = height;
			const ctx = maskCanvas.getContext("2d");
			if (!ctx) return null;

			// Draw the mask onto the canvas
			const imageData = maskToImageData(currentMask, [255, 255, 255], 255);
			ctx.putImageData(imageData, 0, 0);

			const blob = await new Promise<Blob | null>((resolve) =>
				maskCanvas.toBlob(resolve, "image/png"),
			);
			if (!blob) return null;

			const timestamp = Date.now();
			const filename = `meld_mask_${timestamp}.png`;
			const file = new File([blob], filename, { type: "image/png" });

			const formData = new FormData();
			formData.append("image", file);
			formData.append("type", "temp");
			formData.append("overwrite", "true");

			const response = await api.fetchApi("/upload/image", {
				method: "POST",
				body: formData,
			});

			if (response.ok) {
				const data = await response.json();
				return data.name;
			}
			return null;
		} catch (error) {
			console.error("[Meld] Error uploading mask:", error);
			return null;
		} finally {
			setIsUploading(false);
		}
	};

	const handleInject = async () => {
		if (!image) return;
		const filename = await uploadMask();
		if (filename) {
			const success = injectMaskToGraph(image, filename);
			if (success) {
				onClose();
			}
		}
	};

	const handleQueue = async () => {
		if (!image) return;
		const filename = await uploadMask();
		if (filename) {
			dispatch({
				type: "OPEN_MODAL",
				payload: {
					type: "workflow_selection",
					images: [image],
					maskFilename: filename,
				},
			});
		}
	};

	const hasMask = useMemo(
		() => currentMask && !isMaskEmpty(currentMask),
		[currentMask],
	);

	if (!image) return null;

	return (
		<div
			className="meld-modal-overlay"
			onMouseDown={handleOverlayMouseDown}
			onMouseUp={handleOverlayMouseUp}
			role="presentation"
		>
			<div
				className="meld-modal-content meld-mask-editor-modal"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="meld-modal-header">
					<h3>Select Mask Area</h3>
					<button className="meld-modal-close" onClick={onClose} type="button">
						<X size={20} />
					</button>
				</div>

				<div className="meld-modal-body">
					<div
						ref={overlayRef}
						className="meld-mask-editor-canvas-container"
						onMouseDown={handleMouseDown}
						role="presentation"
					>
						<img
							ref={imageRef}
							src={getImageViewUrl(image)}
							alt="To be masked"
							className="meld-mask-editor-image"
							onDragStart={(e) => e.preventDefault()}
						/>
						<canvas
							ref={canvasRef}
							className="meld-mask-editor-canvas"
							onDragStart={(e) => e.preventDefault()}
						/>
					</div>
					<div className="meld-mask-editor-footer">
						<div className="meld-mask-editor-hint">
							Drag to select mask area (Multiple areas supported. Cmd/Ctrl+Z to
							undo)
						</div>
						<div className="meld-mask-editor-actions">
							{mode === "apply" ? (
								<button
									className="meld-mask-toolbar-btn meld-mask-toolbar-btn--inject"
									onClick={handleInject}
									disabled={!hasMask || isUploading}
									type="button"
								>
									{isUploading ? (
										<Loader2 size={16} className="animate-spin" />
									) : (
										<Check size={16} />
									)}
									<span>Send</span>
								</button>
							) : (
								<button
									className="meld-mask-toolbar-btn meld-mask-toolbar-btn--run"
									onClick={handleQueue}
									disabled={!hasMask || isUploading}
									type="button"
								>
									{isUploading ? (
										<Loader2 size={16} className="animate-spin" />
									) : (
										<Play size={16} />
									)}
									<span>Queue</span>
								</button>
							)}
							<button
								className="meld-mask-toolbar-btn meld-mask-toolbar-btn--undo"
								onClick={handleUndo}
								disabled={maskHistory.length <= 1 || isUploading}
								type="button"
								title="Undo last area"
							>
								<Undo2 size={16} />
								<span>Undo</span>
							</button>
							<button
								className="meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel"
								onClick={handleClear}
								disabled={!hasMask || isUploading}
								type="button"
								title="Clear all areas"
							>
								<X size={16} />
								<span>Clear</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
