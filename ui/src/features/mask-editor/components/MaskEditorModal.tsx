import { Check, Loader2, Play, X } from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
// @ts-expect-error: ComfyUI scripts are not available in build time
import { api } from "/scripts/api.js";
import { useGallery } from "../../../store/GalleryContext";
import { getImageViewUrl } from "../../../utils/url";
import { useMaskInjection } from "../hooks/useMaskInjection";
import type { MaskMode, MaskSelection } from "../types";

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

	const [isDragging, setIsDragging] = useState(false);
	const [startPos, setStartPos] = useState({ x: 0, y: 0 });
	const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
	const [selection, setSelection] = useState<MaskSelection | null>(null);
	const [isUploading, setIsUploading] = useState(false);

	const overlayMouseDownRef = useRef(false);
	const lastDragEndTimeRef = useRef(0);

	// Implementation Requirements: Prevent the modal from closing when a drag operation
	// (mask selection) ends outside the modal content. We only close if the mousedown
	// and mouseup both occurred directly on the overlay background.
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

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

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
			style.getPropertyValue("--bg-color");

		if (isDragging) {
			const x = Math.min(startPos.x, currentPos.x);
			const y = Math.min(startPos.y, currentPos.y);
			const w = Math.abs(startPos.x - currentPos.x);
			const h = Math.abs(startPos.y - currentPos.y);

			// Add semi-transparent fill while dragging
			if (fillColor) {
				ctx.save();
				ctx.globalAlpha = 0.3;
				ctx.fillStyle = fillColor;
				ctx.fillRect(x, y, w, h);
				ctx.restore();
			}

			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 5]);
			ctx.strokeRect(x, y, w, h);
		} else if (selection) {
			// Add semi-transparent fill for final selection
			if (fillColor) {
				ctx.save();
				ctx.globalAlpha = 0.5;
				ctx.fillStyle = fillColor;
				ctx.fillRect(selection.x, selection.y, selection.w, selection.h);
				ctx.restore();
			}

			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			ctx.setLineDash([]);
			ctx.strokeRect(selection.x, selection.y, selection.w, selection.h);
		}
	}, [isDragging, startPos, currentPos, selection]);

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
			if (bounds && rect) {
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
					setSelection({ x: finalX, y: finalY, w: finalW, h: finalH });
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
	}, [isDragging, startPos.x, startPos.y, getImageBounds]);

	const uploadMask = async (): Promise<string | null> => {
		if (!selection || !imageRef.current || !overlayRef.current) return null;

		setIsUploading(true);
		try {
			const img = imageRef.current;
			const naturalWidth = img.naturalWidth;
			const naturalHeight = img.naturalHeight;

			const maskCanvas = document.createElement("canvas");
			maskCanvas.width = naturalWidth;
			maskCanvas.height = naturalHeight;
			const ctx = maskCanvas.getContext("2d");
			if (!ctx) return null;

			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

			const rect = overlayRef.current.getBoundingClientRect();
			const imgRect = img.getBoundingClientRect();

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

			const scaleX = naturalWidth / displayedWidth;
			const scaleY = naturalHeight / displayedHeight;

			const relX = selection.x - (imgRect.left - rect.left) - offsetX;
			const relY = selection.y - (imgRect.top - rect.top) - offsetY;

			const maskX = relX * scaleX;
			const maskY = relY * scaleY;
			const maskW = selection.w * scaleX;
			const maskH = selection.h * scaleY;

			ctx.fillStyle = "white";
			ctx.fillRect(maskX, maskY, maskW, maskH);

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
							Drag to select mask area
						</div>
						<div className="meld-mask-editor-actions">
							{mode === "apply" ? (
								<button
									className="meld-mask-toolbar-btn meld-mask-toolbar-btn--inject"
									onClick={handleInject}
									disabled={!selection || isUploading}
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
									disabled={!selection || isUploading}
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
								className="meld-mask-toolbar-btn meld-mask-toolbar-btn--cancel"
								onClick={() => setSelection(null)}
								disabled={!selection || isUploading}
								type="button"
								title="Clear selection"
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
