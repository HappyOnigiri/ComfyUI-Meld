import {
	ChevronLeft,
	ChevronRight,
	Info,
	LayoutGrid,
	Maximize,
	Minimize,
	RefreshCw,
	Tag,
	X,
} from "lucide-react";
import type React from "react";
import { createPortal } from "react-dom";
import { DeleteConfirmModal } from "../../../components/shared/DeleteConfirmModal";
import { ParentSelectionModal } from "../../../components/shared/ParentSelectionModal";
import { useGallery } from "../../../store/GalleryContext";
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

export const ImageViewer: React.FC = () => {
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
		image,
		windowedThumbnails,
		parentChain,
	} = useImageViewerLogic({
		state,
		dispatch,
		loadMoreImages,
		fetchFullImageDetails,
	});

	const { executeWorkflow } = useWorkflowExecution();

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
						src={imgSrc}
						alt={image.filename}
						className={`meld-viewer-image meld-viewer-image--${state.settings[isFullscreen ? "fullscreen.small_image_mode" : "viewer.small_image_mode"] || "fit"} ${isJumping ? "meld-viewer-image--loading" : ""}`}
						// @ts-expect-error - fetchpriority is a valid but sometimes untyped attribute
						fetchpriority="high"
					/>
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
					onExecute={async (workflowName) => {
						if (state.activeModal.type === "workflow_selection") {
							for (const img of state.activeModal.images) {
								await executeWorkflow(workflowName, img);
							}
						}
					}}
				/>
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
};
