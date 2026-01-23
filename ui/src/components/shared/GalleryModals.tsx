import type React from "react";
import { createPortal } from "react-dom";
import { ImportModal } from "../../features/importer/components/ImportModal";
import { SettingsModal } from "../../features/settings/components/SettingsModal";
import { TagEditModal } from "../../features/tags/components/TagEditModal";
import { WorkflowSelectionModal } from "../../features/workflows/components/WorkflowSelectionModal";
import { useWorkflowExecution } from "../../features/workflows/hooks/useWorkflowExecution";
import { useGallery } from "../../store/GalleryContext";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { ErrorModal } from "./ErrorModal";
import { ParentSelectionModal } from "./ParentSelectionModal";

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
					isMaskMode={!!state.activeModal.maskFilename}
					onExecute={async (workflowName) => {
						if (state.activeModal.type === "workflow_selection") {
							const maskFilename = state.activeModal.maskFilename;
							for (const img of state.activeModal.images) {
								await executeWorkflow(workflowName, img, maskFilename);
							}
						}
					}}
				/>
			)}
			{state.activeModal.type === "parent_selection" &&
				createPortal(
					<ParentSelectionModal imageId={state.activeModal.imageId} />,
					document.body,
				)}

			{state.activeModal.type === "import" &&
				createPortal(<ImportModal />, document.body)}

			{state.activeModal.type === "settings" &&
				createPortal(<SettingsModal />, document.body)}

			{state.activeModal.type === "tag_edit" &&
				createPortal(
					<TagEditModal
						imageIds={state.activeModal.imageIds}
						initialTags={state.activeModal.tags}
						onClose={() => dispatch({ type: "CLOSE_MODAL" })}
					/>,
					document.body,
				)}

			{state.activeModal.type === "error" &&
				createPortal(
					<ErrorModal message={state.activeModal.message} />,
					document.body,
				)}

			{state.activeModal.type === "delete_confirm" &&
				createPortal(
					<DeleteConfirmModal
						imageIds={state.activeModal.imageIds}
						hasLineage={state.activeModal.hasLineage}
						isPermanent={state.activeModal.isPermanent}
					/>,
					document.body,
				)}
		</>
	);
};
