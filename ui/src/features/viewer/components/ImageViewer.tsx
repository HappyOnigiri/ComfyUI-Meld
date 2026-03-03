import {
	ChevronLeft,
	ChevronRight,
	Info,
	LayoutGrid,
	Maximize,
	Minimize,
	RefreshCw,
	X,
} from "lucide-react";
import { useMemo, useRef } from "react";
import { createPortal } from "react-dom";
import { DeleteConfirmModal } from "../../../components/shared/DeleteConfirmModal";
import { ErrorModal } from "../../../components/shared/ErrorModal";
import { ParentSelectionModal } from "../../../components/shared/ParentSelectionModal";
import { useGallery } from "../../../store/GalleryContext";
import { getImageViewUrl } from "../../../utils/url";
import { ImportModal } from "../../importer/components/ImportModal";
import { MaskEditorModal } from "../../mask-editor/components/MaskEditorModal";
import { MaskSequenceModal } from "../../mask-editor/components/MaskSequenceModal";
import { SettingsModal } from "../../settings/components/SettingsModal";
import { TagEditModal } from "../../tags/components/TagEditModal";
import { NodeSelectionModal } from "../../workflows/components/NodeSelectionModal";
import { WorkflowSelectionModal } from "../../workflows/components/WorkflowSelectionModal";
import { useWorkflowExecution } from "../../workflows/hooks/useWorkflowExecution";
import { injectImageToGraph } from "../../workflows/utils/injectImageToGraph";
import { useImageViewerLogic } from "../hooks/useImageViewerLogic";
import { ImageCardMenu } from "./ImageCardMenu";
import { NoteEditModal } from "./NoteEditModal";
import { ViewerCheatSheet } from "./ViewerCheatSheet";
import { ViewerInfoPanel } from "./ViewerInfoPanel";
import { ViewerThumbnailStrip } from "./ViewerThumbnailStrip";

export function ImageViewer() {
	const { state, dispatch, loadMoreImages, fetchFullImageDetails } = useGallery();

	const {
		isFullscreen,
		showDetails,
		setShowDetails,
		showThumbnails,
		setShowThumbnailsOverride,
		isLoadingLineage,
		isJumping,
		isMenuOpen,
		setIsMenuOpen,
		activeShortcutKey,
		setLastDeletedImages,
		overlayRef,
		handleNext,
		handlePrevious,
		handleTagEdit,
		handleEditNotes,
		handleRestore,
		handleRestoreWorkflow,
		handleAddUnifiedLoader,
		handleSendToWorkflow,
		handleRunWithWorkflow,
		handleRunWithMask,
		handleEditSource,
		handleDelete,
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

	const imageRef = useRef<HTMLImageElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const { executeWorkflow } = useWorkflowExecution();

	const deleteLabel = useMemo(() => {
		const isTrash = state.viewScope === "trash";
		return isTrash ? "Delete Permanently" : "Move to Trash";
	}, [state.viewScope]);

	if (!image) return null;

	const { viewerImageId, viewerMode } = state;

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
							title={isFullscreen ? "Exit Fullscreen (F/Enter)" : "Fullscreen (F/Enter)"}
						>
							{isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
						</button>
						<ImageCardMenu
							isMenuOpen={isMenuOpen}
							setIsMenuOpen={setIsMenuOpen}
							menuRef={menuRef}
							settings={state.settings}
							onAddUnifiedLoader={handleAddUnifiedLoader}
							onRestoreWorkflow={handleRestoreWorkflow}
							onSendToWorkflow={handleSendToWorkflow}
							onRunWithWorkflow={handleRunWithWorkflow}
							onRunWithMask={handleRunWithMask}
							onEditSource={handleEditSource}
							onEditTags={handleTagEdit}
							onEditNotes={handleEditNotes}
							onDelete={handleDelete}
							deleteLabel={deleteLabel}
							showQuickShortcuts={false}
							iconSize={20}
							buttonClassName="meld-viewer-action-btn"
						/>
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
						title="Previous (Left/Up)"
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
						src={getImageViewUrl(image)}
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
						title="Next (Right/Down)"
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
						onEditNotes={handleEditNotes}
					/>
				)}

				{!isFullscreen && showThumbnails && state.settings["viewer.thumbnail_window_size"] > 1 && (
					<ViewerThumbnailStrip
						windowedThumbnails={windowedThumbnails}
						viewerImageId={viewerImageId}
						currentImage={image}
						dispatch={dispatch}
						isLoadingLineage={isLoadingLineage}
						isLoading={state.isLoading}
						viewerMode={viewerMode}
						lightTableSlotId={state.viewerLightTableSlotId}
					/>
				)}

				<ViewerCheatSheet settings={state.settings} activeShortcutKey={activeShortcutKey} />
			</div>

			{/* Render modals inside viewer to ensure visibility in fullscreen */}
			{state.activeModal.type === "workflow_selection" && (
				<WorkflowSelectionModal
					images={state.activeModal.images}
					isMaskMode={!!state.activeModal.maskFilename || !!state.activeModal.isMaskSequence}
					onExecute={async (workflowName, targetLoaderNodeId) => {
						if (state.activeModal.type === "workflow_selection") {
							if (state.activeModal.isMaskSequence) {
								dispatch({
									type: "OPEN_MODAL",
									payload: {
										type: "mask_sequence_step",
										images: state.activeModal.images,
										currentIndex: 0,
										workflowName,
										targetLoaderNodeId,
									},
								});
								return false;
							}

							const maskFilename = state.activeModal.maskFilename;
							for (const img of state.activeModal.images) {
								await executeWorkflow(workflowName, img, maskFilename, targetLoaderNodeId);
							}
							dispatch({ type: "CLOSE_MODAL" });
							dispatch({ type: "CLOSE_VIEWER" });
						}
					}}
				/>
			)}
			{state.activeModal.type === "node_selection" && (
				<NodeSelectionModal
					image={state.activeModal.image}
					nodes={state.activeModal.nodes}
					onSelect={(nodeId) => {
						if (state.activeModal.type === "node_selection") {
							injectImageToGraph(state.activeModal.image, nodeId);
						}
					}}
				/>
			)}
			{state.activeModal.type === "error" && <ErrorModal message={state.activeModal.message} />}
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
			{state.activeModal.type === "mask_editor" && (
				<MaskEditorModal
					imageId={state.activeModal.imageId}
					mode={state.activeModal.mode}
					onClose={() => dispatch({ type: "CLOSE_MODAL" })}
				/>
			)}
			{state.activeModal.type === "mask_sequence_step" && (
				<MaskSequenceModal
					images={state.activeModal.images}
					currentIndex={state.activeModal.currentIndex}
					workflowName={state.activeModal.workflowName}
					targetLoaderNodeId={state.activeModal.targetLoaderNodeId}
					onSuccess={() => {
						if (state.activeModal.type === "mask_sequence_step") {
							const nextIndex = state.activeModal.currentIndex + 1;
							if (nextIndex < state.activeModal.images.length) {
								dispatch({
									type: "OPEN_MODAL",
									payload: {
										...state.activeModal,
										currentIndex: nextIndex,
									},
								});
							} else {
								dispatch({ type: "CLOSE_MODAL" });
								dispatch({ type: "CLOSE_VIEWER" });
							}
						}
					}}
					onClose={() => dispatch({ type: "CLOSE_MODAL" })}
				/>
			)}
			{state.activeModal.type === "note_edit" && (
				<NoteEditModal
					imageId={state.activeModal.imageId}
					initialNotes={state.activeModal.notes}
					onClose={() => dispatch({ type: "CLOSE_MODAL" })}
				/>
			)}
		</div>,
		document.body,
	);
}
