import {
	Check,
	Circle,
	Lasso,
	Loader2,
	Play,
	Square,
	Undo2,
	X,
	ZoomIn,
	ZoomOut,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { api } from "/scripts/api.js";
import { parseJsonResponse } from "../../../api";
import { useEscapeToClose } from "../../../hooks/useEscapeToClose";
import { logger } from "../../../logger";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { getImageViewUrl } from "../../../utils/url";
import { useLightTableStore } from "../../light-table/store";
import { useWorkflowExecution } from "../../workflows/hooks/useWorkflowExecution";
import { useMaskCanvas } from "../hooks/useMaskCanvas";
import { useMaskInjection } from "../hooks/useMaskInjection";
import type { MaskBitmap, MaskMode } from "../types";
import { createMaskBitmap, isMaskEmpty, maskToImageData } from "../utils/maskUtils";

interface MaskEditorModalProps {
	imageId: number;
	mode: MaskMode;
	sequenceData?: {
		workflowName: string;
		targetLoaderNodeId?: string;
		currentIndex: number;
		totalCount: number;
	};
	onSuccess?: () => void;
	onClose: () => void;
}

export const MaskEditorModal: React.FC<MaskEditorModalProps> = ({
	imageId,
	mode,
	sequenceData,
	onSuccess,
	onClose,
}) => {
	const { state, dispatch } = useGallery();

	// Implementation Requirements: Must search images from gallery, lineage,
	// and Light Table store because the modal can be opened from multiple contexts
	// (gallery, viewer, light table). Caching the image in a ref prevents
	// the modal from disappearing when SSE events replace state.images.
	const resolvedImage = useMemo(() => {
		return (
			state.images.find((img) => img.id === imageId) ??
			state.lineageImages.find((img) => img.id === imageId) ??
			useLightTableStore.getState().images[String(imageId)]
		);
	}, [state.images, state.lineageImages, imageId]);

	const cachedImageRef = useRef<MeldImage | undefined>(undefined);
	if (resolvedImage) {
		cachedImageRef.current = resolvedImage;
	}
	const image = resolvedImage ?? cachedImageRef.current;
	const { injectMaskToGraph } = useMaskInjection();
	const { executeWorkflow } = useWorkflowExecution();

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);

	// Mask state with history for Undo
	const [maskHistory, setMaskHistory] = useState<MaskBitmap[]>([]);
	const currentMask = useMemo((): MaskBitmap | null => {
		if (maskHistory.length > 0) return maskHistory[maskHistory.length - 1] ?? null;
		if (imageRef.current) {
			return createMaskBitmap(imageRef.current.naturalWidth, imageRef.current.naturalHeight);
		}
		return null;
	}, [maskHistory]);

	const onMaskStamp = useCallback((newMask: MaskBitmap) => {
		setMaskHistory((prev) => [...prev, newMask]);
	}, []);

	const {
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
	} = useMaskCanvas({
		canvasRef,
		overlayRef,
		imageRef,
		currentMask,
		onMaskStamp,
	});

	// Implementation Requirement: All modals must close on Escape.
	useEscapeToClose({ onEscape: onClose });

	// Overlay background click closes the modal (only when not dragging on canvas).
	const overlayMouseDownRef = useRef(false);
	const handleOverlayMouseDown = useCallback((e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			overlayMouseDownRef.current = true;
		}
	}, []);
	const handleOverlayMouseUp = useCallback(
		(e: React.MouseEvent) => {
			if (e.target === e.currentTarget && overlayMouseDownRef.current) {
				onClose();
			}
			overlayMouseDownRef.current = false;
		},
		[onClose],
	);

	// Initialize mask history when image is loaded
	useEffect(() => {
		if (imageRef.current?.naturalWidth && maskHistory.length === 0) {
			setMaskHistory([
				createMaskBitmap(imageRef.current.naturalWidth, imageRef.current.naturalHeight),
			]);
		}
	}, [maskHistory.length]);

	// Handle delayed image loading: ensure mask initialization via onLoad
	const handleImageLoad = useCallback(() => {
		if (imageRef.current?.naturalWidth && maskHistory.length === 0) {
			setMaskHistory([
				createMaskBitmap(imageRef.current.naturalWidth, imageRef.current.naturalHeight),
			]);
		}
	}, [maskHistory.length]);

	const handleUndo = useCallback(() => {
		if (maskHistory.length > 1) {
			setMaskHistory((prev) => prev.slice(0, -1));
		}
	}, [maskHistory.length]);

	// Cmd+Z (Mac) or Ctrl+Z (Windows/Linux) for undo
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z" && !e.shiftKey) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				handleUndo();
			}
		};
		window.addEventListener("keydown", handleKeyDown, { capture: true });
		return () => window.removeEventListener("keydown", handleKeyDown, { capture: true });
	}, [handleUndo]);

	const [isUploading, setIsUploading] = useState(false);

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

			const data = await parseJsonResponse<{ name?: string }>(response);
			return data.name ?? null;
		} catch (error) {
			logger.error("Error uploading mask:", error);
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
				dispatch({ type: "CLOSE_VIEWER" });
				onSuccess?.();
			}
		}
	};

	const handleQueue = async () => {
		if (!image) return;
		const filename = await uploadMask();
		if (filename) {
			if (mode === "run_sequence" && sequenceData) {
				await executeWorkflow(
					sequenceData.workflowName,
					image,
					filename,
					sequenceData.targetLoaderNodeId,
				);
				onSuccess?.();
			} else {
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "workflow_selection",
						images: [image],
						maskFilename: filename,
						onSuccess,
					},
				});
			}
		}
	};

	const hasMask = useMemo(() => currentMask && !isMaskEmpty(currentMask), [currentMask]);

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
					<div className="meld-mask-editor-tool-selector">
						<button
							className={`meld-mask-tool-btn ${activeTool === "rect" ? "meld-mask-tool-btn--active" : ""}`}
							onClick={() => setActiveTool("rect")}
							type="button"
							title="Rectangle Tool"
						>
							<Square size={18} />
							<span>Rect</span>
						</button>
						<button
							className={`meld-mask-tool-btn ${activeTool === "ellipse" ? "meld-mask-tool-btn--active" : ""}`}
							onClick={() => setActiveTool("ellipse")}
							type="button"
							title="Ellipse Tool"
						>
							<Circle size={18} />
							<span>Ellipse</span>
						</button>
						<button
							className={`meld-mask-tool-btn ${activeTool === "lasso" ? "meld-mask-tool-btn--active" : ""}`}
							onClick={() => setActiveTool("lasso")}
							type="button"
							title="Lasso Tool"
						>
							<Lasso size={18} />
							<span>Lasso</span>
						</button>

						<div
							style={{
								width: 1,
								backgroundColor: "var(--meld-border-color)",
								margin: "0 4px",
							}}
						/>
						<button
							className="meld-mask-tool-btn"
							onClick={handleZoomOut}
							type="button"
							title="Zoom Out"
							aria-label="Zoom Out"
						>
							<ZoomOut size={18} />
						</button>
						<button
							className="meld-mask-tool-btn"
							onClick={handleResetZoom}
							type="button"
							title="Reset Zoom"
							aria-label="Reset Zoom"
							style={{
								minWidth: "48px",
								justifyContent: "center",
								fontSize: "11px",
							}}
						>
							{Math.round(scale * 100)}%
						</button>
						<button
							className="meld-mask-tool-btn"
							onClick={handleZoomIn}
							type="button"
							title="Zoom In"
							aria-label="Zoom In"
						>
							<ZoomIn size={18} />
						</button>
					</div>
					<div
						ref={overlayRef}
						className="meld-mask-editor-canvas-container"
						onMouseDown={handleMouseDown}
						onContextMenu={(e) => e.preventDefault()}
						role="presentation"
						style={{
							cursor: isPanDragging ? "grabbing" : isPanning ? "grab" : "crosshair",
						}}
					>
						<div
							className="meld-mask-editor-transform-layer"
							style={{
								transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
								transformOrigin: "0 0",
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								pointerEvents: "none",
							}}
						>
							<img
								ref={imageRef}
								src={getImageViewUrl(image)}
								alt="To be masked"
								className="meld-mask-editor-image"
								onDragStart={(e) => e.preventDefault()}
								onLoad={handleImageLoad}
							/>
							<canvas
								ref={canvasRef}
								className="meld-mask-editor-canvas"
								onDragStart={(e) => e.preventDefault()}
							/>
						</div>
					</div>
					<div className="meld-mask-editor-footer">
						<div className="meld-mask-editor-hint">
							Select a tool and drag on the image to create mask areas (Cmd/Ctrl+Z to undo)
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
									<span>
										{mode === "run_sequence" && sequenceData
											? sequenceData.currentIndex === sequenceData.totalCount - 1
												? "Queue (Last)"
												: `Queue (${sequenceData.currentIndex + 1}/${sequenceData.totalCount})`
											: "Queue"}
									</span>
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
