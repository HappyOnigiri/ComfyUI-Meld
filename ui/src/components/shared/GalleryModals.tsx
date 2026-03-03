import type React from "react";
import { createPortal } from "react-dom";
import { ImportModal } from "../../features/importer/components/ImportModal";
import { DownloadModal } from "../../features/light-table/components/DownloadModal";
import { MaskEditorModal } from "../../features/mask-editor/components/MaskEditorModal";
import { SettingsModal } from "../../features/settings/components/SettingsModal";
import { TagEditModal } from "../../features/tags/components/TagEditModal";
import { NoteEditModal } from "../../features/viewer/components/NoteEditModal";
import { NodeSelectionModal } from "../../features/workflows/components/NodeSelectionModal";
import { WorkflowSelectionModal } from "../../features/workflows/components/WorkflowSelectionModal";
import { useWorkflowExecution } from "../../features/workflows/hooks/useWorkflowExecution";
import { injectImageToGraph } from "../../features/workflows/utils/injectImageToGraph";
import { useGallery } from "../../store/GalleryContext";
import { ConfirmModal } from "./ConfirmModal";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { ErrorModal } from "./ErrorModal";
import { ParentSelectionModal } from "./ParentSelectionModal";
import { Toast } from "./Toast";

export const GalleryModals: React.FC = () => {
	const { state, dispatch } = useGallery();
	const { executeWorkflow } = useWorkflowExecution();

	// Only render modals here if viewer is NOT open.
	// If viewer is open, it handles its own modals to support fullscreen.
	if (state.viewerImageId !== null) return null;

	return (
		<>
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
							const onSuccess = state.activeModal.onSuccess;
							for (const img of state.activeModal.images) {
								await executeWorkflow(workflowName, img, maskFilename, targetLoaderNodeId);
							}
							onSuccess?.();
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
			{state.activeModal.type === "parent_selection" &&
				createPortal(<ParentSelectionModal imageId={state.activeModal.imageId} />, document.body)}

			{state.activeModal.type === "import" && createPortal(<ImportModal />, document.body)}

			{state.activeModal.type === "settings" && createPortal(<SettingsModal />, document.body)}

			{state.activeModal.type === "tag_edit" &&
				createPortal(
					<TagEditModal
						imageIds={state.activeModal.imageIds}
						initialTags={state.activeModal.tags}
						onSuccess={state.activeModal.onSuccess}
						onClose={() => dispatch({ type: "CLOSE_MODAL" })}
					/>,
					document.body,
				)}

			{state.activeModal.type === "error" &&
				createPortal(<ErrorModal message={state.activeModal.message} />, document.body)}

			{state.activeModal.type === "delete_confirm" &&
				createPortal(
					<DeleteConfirmModal
						imageIds={state.activeModal.imageIds}
						hasLineage={state.activeModal.hasLineage}
						isPermanent={state.activeModal.isPermanent}
						onSuccess={() => {
							if (state.activeModal.type === "delete_confirm") {
								state.activeModal.onSuccess?.();
							}
						}}
					/>,
					document.body,
				)}

			{state.activeModal.type === "mask_editor" &&
				createPortal(
					<MaskEditorModal
						imageId={state.activeModal.imageId}
						mode={state.activeModal.mode}
						onSuccess={state.activeModal.onSuccess}
						onClose={() => dispatch({ type: "CLOSE_MODAL" })}
					/>,
					document.body,
				)}

			{state.activeModal.type === "mask_sequence_step" &&
				createPortal(
					<MaskEditorModal
						key={state.activeModal.images[state.activeModal.currentIndex].id}
						imageId={state.activeModal.images[state.activeModal.currentIndex].id}
						mode="run_sequence"
						sequenceData={{
							workflowName: state.activeModal.workflowName,
							targetLoaderNodeId: state.activeModal.targetLoaderNodeId,
							currentIndex: state.activeModal.currentIndex,
							totalCount: state.activeModal.images.length,
						}}
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
								}
							}
						}}
						onClose={() => dispatch({ type: "CLOSE_MODAL" })}
					/>,
					document.body,
				)}

			{state.activeModal.type === "note_edit" &&
				createPortal(
					<NoteEditModal
						imageId={state.activeModal.imageId}
						initialNotes={state.activeModal.notes}
						onClose={() => dispatch({ type: "CLOSE_MODAL" })}
					/>,
					document.body,
				)}

			{state.activeModal.type === "download_options" &&
				createPortal(
					<DownloadModal
						imageIds={state.activeModal.imageIds}
						onSuccess={state.activeModal.onSuccess}
						onClose={() => dispatch({ type: "CLOSE_MODAL" })}
					/>,
					document.body,
				)}

			{state.confirmModal &&
				createPortal(
					<ConfirmModal
						message={state.confirmModal.message}
						onConfirm={() => {
							state.confirmModal?.onConfirm();
							dispatch({ type: "CLOSE_CONFIRM_MODAL" });
						}}
						onCancel={() => {
							state.confirmModal?.onCancel?.();
							dispatch({ type: "CLOSE_CONFIRM_MODAL" });
						}}
					/>,
					document.body,
				)}

			{state.toastMessage && createPortal(<Toast />, document.body)}
		</>
	);
};
