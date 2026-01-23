import {
	Check,
	ChevronLeft,
	ChevronRight,
	Info,
	LayoutGrid,
	Loader2,
	Maximize,
	Minimize,
	Play,
	RefreshCw,
	Tag,
	X,
} from "lucide-react";
import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
// @ts-expect-error: ComfyUI scripts are not available in build time
import { api } from "/scripts/api.js";
import { DeleteConfirmModal } from "../../../components/shared/DeleteConfirmModal";
import { ErrorModal } from "../../../components/shared/ErrorModal";
import { ParentSelectionModal } from "../../../components/shared/ParentSelectionModal";
import { useGallery } from "../../../store/GalleryContext";
import type { MeldImage } from "../../../types";
import { getImageViewUrl } from "../../../utils/url";
import { ImportModal } from "../../importer/components/ImportModal";
import { SettingsModal } from "../../settings/components/SettingsModal";
import { TagEditModal } from "../../tags/components/TagEditModal";
import { WorkflowSelectionModal } from "../../workflows/components/WorkflowSelectionModal";
import { useWorkflowExecution } from "../../workflows/hooks/useWorkflowExecution";
import { useImageViewerLogic } from "../hooks/useImageViewerLogic";
import { ViewerCheatSheet } from "./ViewerCheatSheet";
import { ViewerInfoPanel } from "./ViewerInfoPanel";
import { ViewerThumbnailStrip } from "./ViewerThumbnailStrip";

interface MaskOverlayProps {
	image: MeldImage;
	maskMode: "apply" | "run";
	onClose: () => void;
	onInject: (filename: string) => void;
	onRunWithWorkflow: (filename: string) => void;
	mainImageRef: React.RefObject<HTMLImageElement>;
}

function MaskOverlay({
	maskMode,
	onClose,
	onInject,
	onRunWithWorkflow,
	mainImageRef,
}: Omit<MaskOverlayProps, "image">) {
	const [isDragging, setIsDragging] = useState(false);
	const [startPos, setStartPos] = useState({ x: 0, y: 0 });
	const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
	const [selection, setSelection] = useState<{
		x: number;
		y: number;
		w: number;
		h: number;
	} | null>(null);
	const [showToolbar, setShowToolbar] = useState(false);
	const [isUploading, setIsUploading] = useState(false);

	const canvasRef = useRef<HTMLCanvasElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (isDragging) {
			console.log("Drawing dragging rect", { startPos, currentPos });
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			ctx.setLineDash([5, 5]);
			const x = Math.min(startPos.x, currentPos.x);
			const y = Math.min(startPos.y, currentPos.y);
			const w = Math.abs(startPos.x - currentPos.x);
			const h = Math.abs(startPos.y - currentPos.y);
			ctx.strokeRect(x, y, w, h);
		} else if (selection) {
			console.log("Drawing selection rect", { selection });
			ctx.strokeStyle = "white";
			ctx.lineWidth = 2;
			ctx.setLineDash([]);
			ctx.strokeRect(selection.x, selection.y, selection.w, selection.h);
			// Fill with semi-transparent white
			const style = getComputedStyle(document.documentElement);
			ctx.fillStyle =
				style.getPropertyValue("--comfy-input-bg-active") || "#ffffff4d"; // color-check-ignore
			ctx.fillRect(selection.x, selection.y, selection.w, selection.h);
		}
	}, [isDragging, startPos, currentPos, selection]);

	// Sync canvas size with overlay
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
		console.log("[Meld-Debug] Mask handleMouseDown", {
			showToolbar,
			clientX: e.clientX,
			clientY: e.clientY,
		});
		if (showToolbar) {
			console.log(
				"[Meld-Debug] Mask handleMouseDown: Toolbar is open, ignoring",
			);
			return;
		}
		setIsDragging(true);
		const rect = overlayRef.current?.getBoundingClientRect();
		if (!rect) {
			console.log("[Meld-Debug] Mask handleMouseDown: no rect");
			return;
		}
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		console.log("[Meld-Debug] Mask handleMouseDown: startPos", { x, y, rect });
		setStartPos({ x, y });
		setCurrentPos({ x, y });
		setSelection(null);
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		if (!isDragging) return;
		const rect = overlayRef.current?.getBoundingClientRect();
		if (!rect) {
			console.log("[Meld-Debug] Mask handleMouseMove: no rect");
			return;
		}
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		setCurrentPos({ x, y });
		console.log("[Meld-Debug] Mask handleMouseMove", { x, y });
	};

	const handleMouseUp = (e: React.MouseEvent) => {
		console.log("[Meld-Debug] Mask handleMouseUp", {
			isDragging,
			clientX: e.clientX,
			clientY: e.clientY,
		});
		if (!isDragging) return;
		setIsDragging(false);

		const x = Math.min(startPos.x, currentPos.x);
		const y = Math.min(startPos.y, currentPos.y);
		const w = Math.abs(startPos.x - currentPos.x);
		const h = Math.abs(startPos.y - currentPos.y);

		console.log("[Meld-Debug] Mask selection finished:", { x, y, w, h });

		if (w > 5 && h > 5) {
			setSelection({ x, y, w, h });
			setShowToolbar(true);
		} else {
			console.log("[Meld-Debug] Mask selection too small, ignoring");
		}
	};

	const uploadMask = async (): Promise<string | null> => {
		console.log("[Meld-Debug] uploadMask started", { selection });
		if (!selection || !mainImageRef.current || !overlayRef.current) {
			console.log("[Meld-Debug] uploadMask: missing requirements", {
				hasSelection: !!selection,
				hasImage: !!mainImageRef.current,
				hasOverlay: !!overlayRef.current,
			});
			return null;
		}

		setIsUploading(true);
		try {
			const img = mainImageRef.current;
			const naturalWidth = img.naturalWidth;
			const naturalHeight = img.naturalHeight;
			console.log("[Meld-Debug] Image natural size:", {
				naturalWidth,
				naturalHeight,
			});

			// Create a canvas for the mask
			const maskCanvas = document.createElement("canvas");
			maskCanvas.width = naturalWidth;
			maskCanvas.height = naturalHeight;
			const ctx = maskCanvas.getContext("2d");
			if (!ctx) return null;

			// Background is black (unmasked)
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

			// Calculate coordinates relative to the actual displayed image content
			const rect = overlayRef.current.getBoundingClientRect();
			const imgRect = img.getBoundingClientRect();

			// Image's aspect ratio
			const imageRatio = naturalWidth / naturalHeight;
			// Container's aspect ratio
			const containerRatio = imgRect.width / imgRect.height;

			let displayedWidth: number;
			let displayedHeight: number;
			let offsetX = 0;
			let offsetY = 0;

			if (imageRatio > containerRatio) {
				// Image is wider than container, height will be letterboxed (top/bottom)
				displayedWidth = imgRect.width;
				displayedHeight = imgRect.width / imageRatio;
				offsetY = (imgRect.height - displayedHeight) / 2;
			} else {
				// Image is taller than container, width will be letterboxed (left/right)
				displayedHeight = imgRect.height;
				displayedWidth = imgRect.height * imageRatio;
				offsetX = (imgRect.width - displayedWidth) / 2;
			}

			// Scale factors from displayed content pixels to natural pixels
			const scaleX = naturalWidth / displayedWidth;
			const scaleY = naturalHeight / displayedHeight;

			// Selection relative to image content (subtracting offsets from contain)
			const relX = selection.x - (imgRect.left - rect.left) - offsetX;
			const relY = selection.y - (imgRect.top - rect.top) - offsetY;

			const maskX = relX * scaleX;
			const maskY = relY * scaleY;
			const maskW = selection.w * scaleX;
			const maskH = selection.h * scaleY;

			console.log("[Meld-Debug] Mask coordinates calculation:", {
				rect,
				imgRect,
				relX,
				relY,
				maskX,
				maskY,
				maskW,
				maskH,
				displayedWidth,
				displayedHeight,
				offsetX,
				offsetY,
			});

			// Selection area is white (masked)
			ctx.fillStyle = "white";
			ctx.fillRect(maskX, maskY, maskW, maskH);

			// Convert to Blob
			const blob = await new Promise<Blob | null>((resolve) =>
				maskCanvas.toBlob(resolve, "image/png"),
			);
			if (!blob) {
				console.log("[Meld-Debug] Failed to create blob");
				return null;
			}

			// Create file and upload
			const timestamp = Date.now();
			const filename = `meld_mask_${timestamp}.png`;
			const file = new File([blob], filename, { type: "image/png" });
			console.log("[Meld-Debug] Uploading file:", filename);

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
				console.log("[Meld-Debug] Upload success:", data.name);
				return data.name;
			}
			console.log(
				"[Meld-Debug] Upload failed:",
				response.status,
				response.statusText,
			);
			return null;
		} catch (error) {
			console.error("[Meld-Debug] Error uploading mask:", error);
			return null;
		} finally {
			setIsUploading(false);
		}
	};

	const handleInject = async () => {
		console.log("[Meld] MaskOverlay handleInject called");
		const filename = await uploadMask();
		console.log("[Meld] Mask uploaded, filename:", filename);
		if (filename) {
			onInject(filename);
			onClose();
		}
	};

	const handleRunWithWorkflow = async () => {
		console.log("[Meld] MaskOverlay handleRunWithWorkflow called");
		const filename = await uploadMask();
		console.log("[Meld] Mask uploaded for workflow, filename:", filename);
		if (filename) {
			onRunWithWorkflow(filename);
			// We don't close yet, as the workflow selection might be needed
		}
	};

	return (
		<div className="meld-mask-overlay-wrapper">
			<div
				ref={overlayRef}
				className="meld-mask-overlay"
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUp}
				onClick={(e) => {
					console.log("[Meld-Debug] Mask overlay onClick", {
						clientX: e.clientX,
						clientY: e.clientY,
					});
					e.stopPropagation();
				}}
				role="presentation"
			>
				<canvas ref={canvasRef} className="meld-mask-canvas" />

				{showToolbar && selection && (
					<div
						className="meld-mask-toolbar"
						style={{
							left: selection.x + selection.w,
							top: selection.y + selection.h,
							position: "absolute",
							zIndex: 10000,
						}}
						onClick={(e) => e.stopPropagation()}
						onMouseDown={(e) => e.stopPropagation()}
						role="presentation"
					>
						{maskMode === "apply" && (
							<button
								className="meld-mask-toolbar-btn meld-mask-toolbar-btn--inject"
								onClick={handleInject}
								disabled={isUploading}
								type="button"
								title="Send to Current Workflow"
							>
								{isUploading ? (
									<Loader2 size={16} className="animate-spin" />
								) : (
									<Check size={16} />
								)}
								<span>Send</span>
							</button>
						)}
						{maskMode === "run" && (
							<button
								className="meld-mask-toolbar-btn meld-mask-toolbar-btn--run"
								onClick={handleRunWithWorkflow}
								disabled={isUploading}
								type="button"
								title="Queue via Workflow"
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
							onClick={() => {
								setShowToolbar(false);
								setSelection(null);
							}}
							disabled={isUploading}
							type="button"
						>
							<X size={16} />
						</button>
					</div>
				)}

				<div className="meld-mask-hint">
					Drag to select mask area
					<button className="meld-mask-close" onClick={onClose} type="button">
						<X size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}

export function ImageViewer() {
	const { state, dispatch, loadMoreImages, fetchFullImageDetails } =
		useGallery();

	const {
		isFullscreen,
		showDetails,
		setShowDetails,
		showThumbnails,
		setShowThumbnailsOverride,
		isLoadingLineage,
		isJumping,
		activeShortcutKey,
		setLastDeletedImages,
		overlayRef,
		handleNext,
		handlePrevious,
		handleTagEdit,
		handleRestore,
		toggleFullscreen,
		maskMode,
		setMaskMode,
		image,
		windowedThumbnails,
		parentChain,
	} = useImageViewerLogic({
		state,
		dispatch,
		loadMoreImages,
		fetchFullImageDetails,
	});

	const imageRef = useRef<HTMLImageElement>(null);

	const { executeWorkflow } = useWorkflowExecution();

	const handleInjectMask = useCallback(
		(maskFilename: string) => {
			if (!image) return;

			console.log("[Meld-Debug] handleInjectMask called with:", maskFilename);
			// @ts-expect-error
			const comfyApp = window.app;
			if (!comfyApp?.graph) {
				console.log("[Meld-Debug] handleInjectMask: No comfyApp.graph found");
				return;
			}

			// 1. Update MeldImageLoader with the source image
			let imagePath = image.filename;
			if (image.subfolder) {
				imagePath = `${image.subfolder}/${image.filename}`;
			}
			if (image.type && image.type !== "input") {
				imagePath = `${imagePath} [${image.type}]`;
			}

			const loaderNodes = comfyApp.graph._nodes.filter(
				(n: { type: string }) => n.type === "MeldImageLoader",
			);
			if (loaderNodes.length > 0) {
				const loaderNode = loaderNodes[0];
				const loaderImageWidget = loaderNode.widgets.find(
					(w: { name: string }) => w.name === "image",
				);
				if (loaderImageWidget) {
					loaderImageWidget.value = imagePath;
					if (typeof loaderImageWidget.callback === "function") {
						loaderImageWidget.callback(imagePath);
					}
					console.log(
						"[Meld-Debug] handleInjectMask: Updated MeldImageLoader",
						loaderNode.id,
						"with",
						imagePath,
					);
				}
			}

			// 2. Update LoadImageMask with the new mask
			const maskNodes = comfyApp.graph._nodes.filter(
				(n: { type: string }) => n.type === "LoadImageMask",
			);
			console.log(
				"[Meld-Debug] handleInjectMask: Found mask nodes:",
				maskNodes.map((n: { id: number }) => n.id),
			);

			if (maskNodes.length === 0) {
				console.log(
					"[Meld-Debug] handleInjectMask: No LoadImageMask nodes found in active graph",
				);
				dispatch({
					type: "OPEN_MODAL",
					payload: {
						type: "error",
						message:
							"No 'Load Image (as Mask)' node found in the current workflow.",
					},
				});
				setMaskMode(null); // Close mask mode even on error
				return;
			}

			// If multiple, use the first one
			const node = maskNodes[0];
			const imageWidget = node.widgets.find(
				(w: { name: string }) => w.name === "image",
			);
			const fullMaskPath = `${maskFilename} [temp]`;
			console.log(
				"[Meld-Debug] handleInjectMask: Updating node",
				node.id,
				"widget 'image' with",
				fullMaskPath,
			);
			if (imageWidget) {
				imageWidget.value = fullMaskPath;
				if (typeof imageWidget.callback === "function") {
					imageWidget.callback(fullMaskPath);
				}
			} else {
				console.log(
					"[Meld-Debug] handleInjectMask: 'image' widget not found on node",
					node.id,
				);
			}

			const channelWidget = node.widgets.find(
				(w: { name: string }) => w.name === "channel",
			);
			if (channelWidget) {
				channelWidget.value = "red";
				if (typeof channelWidget.callback === "function") {
					channelWidget.callback("red");
				}
			}

			comfyApp.graph.afterChange?.();
			comfyApp.graph.setDirtyCanvas(true, true);
			setMaskMode(null);
			dispatch({ type: "CLOSE_VIEWER" });
		},
		[dispatch, setMaskMode, image],
	);

	if (!image) return null;

	const { viewerImageId, viewerMode } = state;
	const imgSrc = getImageViewUrl(image);

	const showIcons = isFullscreen
		? state.settings["fullscreen.show_icons"]
		: state.settings["viewer.show_icons"];

	return createPortal(
		<div
			ref={overlayRef}
			className="meld-viewer-overlay"
			onClick={() => {
				if (state.activeModal.type === "none") {
					dispatch({ type: "CLOSE_VIEWER" });
				}
			}}
			role="button"
			tabIndex={0}
		>
			<div
				className={`meld-viewer-content ${isFullscreen ? "meld-viewer-content--fullscreen" : ""} ${showThumbnails ? "meld-viewer-content--with-thumbnails" : ""}`}
				onClick={(e) => e.stopPropagation()}
			>
				{showIcons && (
					<div className="meld-viewer-actions">
						{state.viewScope === "trash" && (
							<button
								className="meld-viewer-action-btn meld-viewer-action-btn--restore"
								onClick={handleRestore}
								type="button"
								title="Restore Image"
							>
								<RefreshCw size={20} />
							</button>
						)}
						{!isFullscreen && (
							<button
								className="meld-viewer-action-btn"
								onClick={() => setShowThumbnailsOverride(!showThumbnails)}
								type="button"
								title={showThumbnails ? "Hide Thumbnails" : "Show Thumbnails"}
							>
								<LayoutGrid size={20} />
							</button>
						)}
						<button
							className="meld-viewer-action-btn"
							onClick={handleTagEdit}
							type="button"
							title="Edit Tags (T)"
						>
							<Tag size={20} />
						</button>
						<button
							className="meld-viewer-action-btn"
							onClick={() => setShowDetails(!showDetails)}
							type="button"
							title={showDetails ? "Hide Details (I)" : "Show Details (I)"}
						>
							<Info size={20} />
						</button>
						<button
							className="meld-viewer-action-btn"
							onClick={toggleFullscreen}
							type="button"
							title={isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"}
						>
							{isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
						</button>
						<button
							className="meld-viewer-action-btn meld-viewer-action-btn--close"
							onClick={() => dispatch({ type: "CLOSE_VIEWER" })}
							type="button"
							title="Close (Esc)"
						>
							<X size={20} />
						</button>
					</div>
				)}

				{showIcons && (
					<button
						className="meld-viewer-nav meld-viewer-nav--prev"
						onClick={handlePrevious}
						type="button"
						disabled={isJumping}
					>
						<ChevronLeft size={32} />
					</button>
				)}

				<div className="meld-viewer-image-container">
					{isJumping && (
						<div className="meld-viewer-loading-overlay">
							<RefreshCw className="animate-spin" size={48} />
						</div>
					)}
					<img
						ref={imageRef}
						src={imgSrc}
						alt={image.filename}
						className={`meld-viewer-image meld-viewer-image--${state.settings[isFullscreen ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${isJumping ? "meld-viewer-image--loading" : ""}`}
						// @ts-expect-error - fetchpriority is a valid but sometimes untyped attribute
						fetchpriority="high"
					/>
					{maskMode && (
						<MaskOverlay
							maskMode={maskMode}
							onClose={() => setMaskMode(null)}
							onInject={handleInjectMask}
							onRunWithWorkflow={(maskFilename) => {
								dispatch({
									type: "OPEN_MODAL",
									payload: {
										type: "workflow_selection",
										images: [image],
										maskFilename,
									},
								});
							}}
							mainImageRef={imageRef}
						/>
					)}
				</div>

				{showIcons && (
					<button
						className="meld-viewer-nav meld-viewer-nav--next"
						onClick={handleNext}
						type="button"
					>
						<ChevronRight size={32} />
					</button>
				)}

				{showDetails && (
					<ViewerInfoPanel
						image={image}
						isFullscreen={isFullscreen}
						settings={state.settings}
						showIcons={showIcons}
						parentChain={parentChain}
						dispatch={dispatch}
					/>
				)}

				{!isFullscreen &&
					showThumbnails &&
					state.settings["viewer.thumbnail_window_size"] > 1 && (
						<ViewerThumbnailStrip
							windowedThumbnails={windowedThumbnails}
							viewerImageId={viewerImageId}
							currentImage={image}
							dispatch={dispatch}
							isLoadingLineage={isLoadingLineage}
							isLoading={state.isLoading}
							viewerMode={viewerMode}
						/>
					)}

				<ViewerCheatSheet
					settings={state.settings}
					activeShortcutKey={activeShortcutKey}
				/>
			</div>

			{/* Render modals inside viewer to ensure visibility in fullscreen */}
			{state.activeModal.type === "workflow_selection" && (
				<WorkflowSelectionModal
					images={state.activeModal.images}
					isMaskMode={!!state.activeModal.maskFilename}
					onExecute={async (workflowName) => {
						if (state.activeModal.type === "workflow_selection") {
							const maskFilename = state.activeModal.maskFilename;
							for (const img of state.activeModal.images) {
								await executeWorkflow(workflowName, img, maskFilename);
							}
							dispatch({ type: "CLOSE_VIEWER" });
						}
					}}
				/>
			)}
			{state.activeModal.type === "error" && (
				<ErrorModal message={state.activeModal.message} />
			)}
			{state.activeModal.type === "delete_confirm" && (
				<DeleteConfirmModal
					imageIds={state.activeModal.imageIds}
					hasLineage={state.activeModal.hasLineage}
					isPermanent={state.activeModal.isPermanent}
					onSuccess={setLastDeletedImages}
				/>
			)}
			{state.activeModal.type === "parent_selection" && (
				<ParentSelectionModal imageId={state.activeModal.imageId} />
			)}
			{state.activeModal.type === "import" && <ImportModal />}
			{state.activeModal.type === "settings" && <SettingsModal />}
			{state.activeModal.type === "tag_edit" && (
				<TagEditModal
					imageIds={state.activeModal.imageIds}
					initialTags={state.activeModal.tags}
					onClose={() => dispatch({ type: "CLOSE_MODAL" })}
				/>
			)}
		</div>,
		document.body,
	);
}
